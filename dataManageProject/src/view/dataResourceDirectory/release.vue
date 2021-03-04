<template>
  <div>
    <!-- 条件查询 -->
     <el-header>
       <el-row>
         <el-col :span="4">数据发布</el-col>
       </el-row>
     </el-header>

    <el-container>
      <!-- 菜单目录 -->
      <div style="overflow:hidden;width:283px">
        <el-aside width="300px" style="height:calc(100vh - 180px);overflow: auto">
          <el-menu class="el-menu-vertical-demo" >
            <div v-for="item in menuTree" :key="item.id">

              <el-submenu :index="item.id" v-if="item.children.length">
                <template slot="title">
                  {{item.text}}
                </template>

                <div v-for="itemChild in item.children" :key="itemChild.id">
                  <el-submenu :index="itemChild.id" v-if="itemChild.children.length">
                    <template slot="title">
                      {{itemChild.text}}
                    </template>
                    <el-menu-item :index="itemGrandson.id" v-for="itemGrandson in itemChild.children" :key="itemGrandson.id" @click="changeMenu(itemGrandson)">
                      {{itemGrandson.text}}
                    </el-menu-item>
                  </el-submenu>
                  
                  <el-menu-item :index="itemChild.id" v-else @click="changeMenu(itemChild)">
                    {{itemChild.text}}
                  </el-menu-item>
                </div>

              </el-submenu>

              <el-menu-item :index="item.id" v-else @click="changeMenu(item)">
                {{item.text}}
              </el-menu-item>
            </div>

          </el-menu>
          
        </el-aside>
      </div>

      <!-- 表格主体 -->
      <el-main style="max-width:calc(100% - 300px)">
        <el-header>
          <h1 style="float:left">数据表</h1>
          <el-button type="primary" size="mini" style="float:right" @click="releaseBtn">发布</el-button>
        </el-header>
        <el-main style="max-width:100%">
          <div class="dataListBox">
            <div class="dataListItem" v-for="(item,index) in releaseShowList" :key="index">
              {{item}}
              <i class="el-icon-close closeBtn" @click="deleteList(item)"></i>
            </div>
          </div>
        </el-main>
      </el-main>
    </el-container>

    <el-dialog title="发布" :visible.sync="releaseDialog" width="30%">
      <el-form label-width="100px">

        <el-form-item label="发布地址：">
            <el-checkbox-group v-model="menuType">
              <el-checkbox :label="0">门户网站</el-checkbox>
              <el-checkbox :label="1" >可视化平台</el-checkbox>
            </el-checkbox-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="releaseDialog = false;menuType = []">取 消</el-button>
        <el-button type="primary" @click="releaseSubmit">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { menuTree,getHeadDataById,dataToMenuByLimit,getTableName,getCustomExcel } from '@/api/dataResourceDirectory/catalog'
import { addDataResourcePublishing } from '@/api/dataResourceDirectory/release'
  export default {
    data() {
      return {
        //多选框
        menuType:[],
        releaseDialog:false,
        releaseList:[],
        releaseShowList:[],
        //下载表格
        downLoadTableName:{
          tableName:null
        },
        addDialog:false,
        deleteDialog:false,
        editDialog:false,
        deleteID:null,
        lvMenu_2:false,
        //搜索条件对象
        searchObj:{
          currentPage:1,
          pageSize:10,
          id:null,
          
          keyword:'',
          createTime:'',
          endTime:'',
          enterpriseName:'',
          type:'',
        },
        //添加目录、表对象
        addmenuObj:{
          id: '',
          isDelete:0,
          menuType:[],
          name:'',
          pid:null,
          tableName:''
        },
        //编辑目录
        editmenuObj:{
          id: '',
          isDelete:0,
          menuType:'0',
          name:'',
          pid:null
        },
        tableNameList:[],
        searchList:[],
        menuTree: null,
        tableHeader:null,
        tableData:null,
        total:0,
      }
    },
    methods: {
      //删除列表
      async deleteList(val){
        this.releaseShowList.forEach(item => {
          if(item == val){
            let count = this.releaseShowList.indexOf(item)
            this.releaseShowList.splice(count,1)
            this.releaseList.splice(count,1)
          }
        })
      },
      //点击发布按钮
      async releaseBtn(){
        if(!this.releaseShowList.length){
          this.$message({
            message: '请选择发布表',
            type: 'warning'
          })
          return
        }
        this.releaseDialog = true
      },
      //数据发布提交
      async releaseSubmit(){
        if(!this.menuType.length){
          this.$message({
            message: '请选择发布地址',
            type: 'warning'
          })
          return
        }
        let dataRelease = this.menuType.join(',')
        let tableName = ''
        this.releaseList.forEach(item => {
          tableName = `${tableName}&tableName=${item}`
        })
        let res = await addDataResourcePublishing({dataRelease,tableName})
        let type = res.data.data.msg.includes('成功') ? 'success' : 'warning'
          this.$message({
            message: res.data.data.msg,
            type
          })
        this.menuType = []
        this.releaseDialog = false
      },
      //下载表格
      async downLoad(){
        if(!this.downLoadTableName.tableName){
          this.$message({
          message: '请选择数据表进行下载',
            type:"warning"
          });
          return
        }
        let res = await getCustomExcel(this.downLoadTableName)
        const content = res.data
        const blob = new Blob([content],{type: 'application/vnd.ms-excel'})//构造一个blob对象来处理数据
        const fileName = this.downLoadTableName.tableName
        //对于<a>标签，只有 Firefox 和 Chrome（内核） 支持 download 属性
        //IE10以上支持blob但是依然不支持download
        if ('download' in document.createElement('a')) { //支持a标签download的浏览器
          const link = document.createElement('a')//创建a标签
          link.download = fileName//a标签添加属性
          link.style.display = 'none'
          link.href = URL.createObjectURL(blob)
          document.body.appendChild(link)
          link.click()//执行下载
          URL.revokeObjectURL(link.href) //释放url
          document.body.removeChild(link)//释放标签
        } else { //其他浏览器
          navigator.msSaveBlob(blob, fileName)
        }
      },
      //获取数据库中所有表名称及注释
      async getTableNameData(){
        let res = await getTableName()
        this.tableNameList = res.data.data.data
      },
      //获取菜单树
      async getMenuTree(){
        let res = await menuTree({type: '0,1'})
        this.menuTree = res.data.data
      },
      //选择菜单
      async changeMenu(obj){
        if(obj.dataType == '0'){
          return
        }
        this.tableNameList.forEach(item => {
          if(item.tableComment == obj.text){
            this.releaseList.push(item.tableName)
            this.releaseList = Array.from(new Set(this.releaseList))
            
            this.releaseShowList.push(item.tableComment)
            this.releaseShowList = Array.from(new Set(this.releaseShowList))
          }
        })
        this.searchObj.keyword = '',
        this.searchObj.createTime = '',
        this.searchObj.endTime = '',
        this.tableHeader = null
        this.tableData = null
        this.searchObj.currentPage = 1
        this.searchObj.id = obj.id
        let res = await getHeadDataById({id: this.searchObj.id})
        await this.getDataToMenuByLimit('changeMenu')
        this.tableHeader = res.data.data.data
      },
      //表格查询
      async getDataToMenuByLimit(flag){

        let res = await dataToMenuByLimit(this.searchObj)
        if(flag == 'changeMenu'){
          this.searchList = []
          if(res.data.param.length){
            res.data.param.forEach(item => {
              for (const key in item) {
                this.searchObj[key.split('_')[0]] = null
                if(!key.includes('keyword') && !key.includes('createTime') && !key.includes('endTime') ){
                  this.searchList.push({
                    name:key.split('_')[0],
                    lable:key.split('_')[1],
                    type:key.split('_')[2],
                    value:item[key]
                  })
                }
              }
            });
          }
        }
        this.tableData = res.data.data.records
        this.total = res.data.data.total
      },
      //翻页
      async currentChange(val){
        this.searchObj.currentPage = val
        await this.getDataToMenuByLimit()
      },
      //查询按钮
      async searchBtn(){
        this.searchObj.currentPage = 1
        await this.getDataToMenuByLimit()
      },
    },
    async mounted(){
      await this.getMenuTree()
      await this.getTableNameData()
    }
  };
</script>

<style scoped lang="scss">
.closeBtn{
  cursor: pointer;
}
.dataListBox{
  display: flex;
  flex-wrap: wrap;
  .dataListItem{
    border: 2px solid #61AFFF;
    border-radius: 5px;
    background: #ECF5FF;
    color: #4FA5FF;
    padding: 5px;
    margin: 10px;
  }
}

</style> 
