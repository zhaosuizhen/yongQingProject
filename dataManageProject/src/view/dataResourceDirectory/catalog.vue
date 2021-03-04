<template>
  <div>
    <!-- 条件查询 -->
     <el-header>
       <el-row>
         <el-col :span="4">数据目录</el-col>
         <el-col :span="4">
           <el-button size="mini" type="primary" @click="downLoad">下载</el-button>
           <!-- <el-button size="mini" type="primary">下载申请</el-button> -->
         </el-col>
         <el-col :span="16">
           <el-row  type="flex">
             <el-col>
               <span>关键字：</span>
                <el-input placeholder="关键字" v-model="searchObj.keyword" style="width:40%"></el-input>
             </el-col>

             <el-col v-for="(item,index) in searchList" :key="index">
               <span>{{item.lable}}：</span>
                <el-input v-if="item.type=='输入框'" v-model="searchObj[item.name]" :placeholder="item.lable" style="width:40%"></el-input>

                <el-select v-if="item.type=='下拉框'" v-model="searchObj[item.name]" style="width:40%">
                  <el-option v-for="(iVal,index) in item.value" :key="index" :label="iVal" :value="iVal"></el-option>
                </el-select>
             </el-col>

             <el-col>
               <span>选择日期：</span>
                <el-date-picker type="date" v-model="searchObj.createTime" placeholder="开始日期" style="width:20%"> </el-date-picker>
                 - 
                <el-date-picker type="date" v-model="searchObj.endTime" placeholder="结束日期" style="width:20%"> </el-date-picker>
             </el-col>
             <el-col :span="4">
               <el-button size="mini" type="primary" @click="searchBtn">查询</el-button>
             </el-col>
           </el-row>
         </el-col>
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
                  <template v-if="item.dataType == '0'">
                    <i class="el-icon-plus" @click="openAddDialog(item.id)"></i>
                    <i class="el-icon-document" @click="openEditDialog(item.id,0)"></i>
                    <i class="el-icon-delete" @click="openDeleteDialog(item.id)"></i>
                  </template>
                </template>

                <div v-for="itemChild in item.children" :key="itemChild.id">
                  <el-submenu :index="itemChild.id" v-if="itemChild.children.length">
                    <template slot="title">
                      {{itemChild.text}}
                      <template v-if="itemChild.dataType == '0'">
                        <i class="el-icon-plus" @click="openAddDialog(itemChild.id,true)"></i>
                        <i class="el-icon-document" @click="openEditDialog(itemChild.id,item,id)"></i>
                        <i class="el-icon-delete" @click="openDeleteDialog(itemChild.id)"></i>
                      </template>
                    </template>
                    <el-menu-item :index="itemGrandson.id" v-for="itemGrandson in itemChild.children" :key="itemGrandson.id" @click="changeMenu(itemGrandson)">
                      {{itemGrandson.text}}
                      <template v-if="itemGrandson.dataType == '1'">
                        <!-- <i class="el-icon-plus" @click="openAddDialog(itemGrandson.id)"></i>
                        <i class="el-icon-document"></i> -->
                        <i class="el-icon-delete" @click="openDeleteDialog(itemGrandson.id)"></i>
                      </template>
                    </el-menu-item>
                  </el-submenu>
                  
                  <el-menu-item :index="itemChild.id" v-else @click="changeMenu(itemChild)">
                    {{itemChild.text}}
                    <template v-if="itemChild.dataType == '0'">
                      <i class="el-icon-plus" @click="openAddDialog(itemChild.id,true)"></i>
                      <i class="el-icon-document" @click="openEditDialog(itemChild.id,item.id)"></i>
                      <i class="el-icon-delete" @click="openDeleteDialog(itemChild.id)"></i>
                    </template>
                    <template v-else>
                      <i class="el-icon-delete" @click="openDeleteDialog(itemChild.id)"></i>
                    </template>
                  </el-menu-item>
                </div>

              </el-submenu>

              <el-menu-item :index="item.id" v-else @click="changeMenu(item)">
                {{item.text}}
                <template v-if="item.dataType == '0'">
                  <i class="el-icon-plus" @click="openAddDialog(item.id)"></i>
                  <i class="el-icon-document" @click="openEditDialog(item.id,0)"></i>
                  <i class="el-icon-delete" @click="openDeleteDialog(item.id)"></i>
                </template>
              </el-menu-item>
            </div>

          </el-menu>
          
        </el-aside>
      </div>

      <!-- 表格主体 -->
      <el-main style="max-width:calc(100% - 300px)">
        <!-- <el-header>Header</el-header> -->
        <!-- <el-main> -->
          <el-table :data="tableData" style="width: 100%;height:calc(100vh - 330px);overflow: auto" border >
            <el-table-column :prop="item.name" :label="item.value" align="center" v-for="(item,index) in tableHeader" :key="index" :resizable="false"></el-table-column>
          </el-table>
          <el-pagination background layout="prev, pager, next" :page-size="searchObj.pageSize" :current-page="searchObj.currentPage" :total="total" style="float:right;margin-top:50px" @current-change="currentChange"></el-pagination>
        <!-- </el-main> -->
      </el-main>
    </el-container>

  <!-- 添加弹框 -->
    <el-dialog
      title="添加"
      :visible.sync="addDialog"
      width="30%">
      
      <el-form label-width="100px">

        <el-form-item label="添加类型：">
          <el-select v-model="addmenuObj.menuType" placeholder="请选择类型" style="width:80%">
            <el-option label="目录" :disabled="lvMenu_2" value="0"></el-option>
            <el-option label="表" value="1"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item v-if="addmenuObj.menuType == '0'" label="目录名称：">
          <el-input v-model="addmenuObj.name" style="width:80%"></el-input>
        </el-form-item>

        <el-form-item v-else label="表名称：">
          <el-select v-model="addmenuObj.tableName" placeholder="请选择表名称" style="width:80%">
            <el-option v-for="(item,index) in tableNameList" :key="index" :label="`${item.tableName}/${item.tableComment}`" :value="item.tableName"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialog = false">取 消</el-button>
        <el-button type="primary" @click="addList">确 定</el-button>
      </span>
    </el-dialog>

  <!-- 编辑弹框 -->
    <el-dialog
      title="编辑"
      :visible.sync="editDialog"
      width="30%">
      
      <el-form label-width="150px">
        <el-form-item label="修改目录名称：">
          <el-input v-model="editmenuObj.name" style="width:80%"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialog = false">取 消</el-button>
        <el-button type="primary" @click="editList">确 定</el-button>
      </span>
    </el-dialog>

  <!-- 删除弹框 -->
    <el-dialog
      title="添加"
      :visible.sync="deleteDialog"
      width="30%">
      确定删除
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialog = false">取 消</el-button>
        <el-button type="primary" @click="deleteList">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { menuTree,getHeadDataById,dataToMenuByLimit,getTableName,addMenu,deleteMenu,updateMenu,getCustomExcel } from '@/api/dataResourceDirectory/catalog'
  export default {
    data() {
      return {
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
          menuType:'0',
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
        console.log(res)
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
      //  添加目录、表
      async addList(){
        //添加目录
        if(this.addmenuObj.menuType == '0'){
          this.addmenuObj.tableName = ''
          console.log(this.addmenuObj)
          let res = await addMenu(this.addmenuObj)
          let type = res.data.data.msg.includes('成功') ? 'success' : 'warning'
          this.$message({
          message: res.data.data.msg,
            type
          });
        }
        // 添加表
        else{
          this.tableNameList.forEach(item => {
            if(this.addmenuObj.tableName == item.tableName){
              this.addmenuObj.name = item.tableComment
            }
          })
          console.log(this.addmenuObj)
          let res = await addMenu(this.addmenuObj)
          let type = res.data.data.msg.includes('成功') ? 'success' : 'warning'
          this.$message({
          message: res.data.data.msg,
            type
          });
        }
        
        await this.getMenuTree()
        this.addDialog = false
      },
      //编辑目录、表
      async editList(){
        let res = await updateMenu(this.editmenuObj)
        let type = res.data.data.msg.includes('成功') ? 'success' : 'warning'
        this.$message({
          message: res.data.data.msg,
            type
          });
        await this.getMenuTree()
        this.editDialog = false
      },
      //删除表目录
      async deleteList(){
        let res = await deleteMenu({id:this.deleteID})
        console.log(res)
        let type = res.data.data.msg.includes('成功') ? 'success' : 'warning'
        this.$message({
          message: res.data.data.msg,
            type
          });
        this.deleteDialog = false
        await this.getMenuTree()
      },
      //打开新增弹框
      openAddDialog(id,lvMenu_2){
        this.addmenuObj = {
          id: '',
          isDelete:0,
          menuType:'0',
          name:'',
          pid:null,
          tableName:''
        }
        //判断是不是二级目录，如果是则只能添加表
        if(lvMenu_2){
          this.addmenuObj.menuType = '1'
          this.lvMenu_2 = true
        }else{
          this.addmenuObj.menuType = '0'
          this.lvMenu_2 = false
        }
        this.addDialog = true
        this.addmenuObj.pid = id
      },
      //打开编辑弹框
      openEditDialog(id,pid){
        this.editmenuObj = {
          id: '',
          isDelete:0,
          menuType:'0',
          name:'',
          pid:null
        }
        this.editDialog = true
        this.editmenuObj.id = id
        this.editmenuObj.pid = pid
      },
      //打开删除弹框
      openDeleteDialog(id){
        this.deleteDialog = true
        this.deleteID = id
      },
      //获取数据库中所有表名称及注释
      async getTableNameData(){
        let res = await getTableName()
        this.tableNameList = res.data.data.data
        console.log(res.data.data.data)
      },
      //获取菜单树
      async getMenuTree(){
        let res = await menuTree({type: '0,1'})
        console.log(res.data.data)
        this.menuTree = res.data.data
      },
      //选择菜单
      async changeMenu(obj){
        this.downLoadTableName.tableName = null
        this.tableNameList.forEach(item => {
          if(item.tableComment == obj.text){
            this.downLoadTableName.tableName = item.tableName
          }
        })
        this.searchObj.keyword = null,
        this.searchObj.createTime = null,
        this.searchObj.endTime = null,
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
        console.log(res.data.param)
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

</style>