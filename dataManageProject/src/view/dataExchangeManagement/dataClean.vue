<template>
  <div>
      <el-header>
        <span>数据表名称：</span>
        <el-select v-model="searchTableName" placeholder="请选择数据表名称" @change="changeSelect">
          <el-option v-for="(item,index) in tableList" :key="index" :label="item" :value="item"></el-option>
        </el-select>
        <el-button style="margin-left:15px" type="primary" @click="openDataClearDialog">数据清洗配置</el-button>
      </el-header>
      <el-main>
        <!-- <div class="ulMain">
          <span v-for="(item,index) in ulData" :key="index">{{item.columnComment}}</span>
        </div>
        <div class="ulMain">
          <span v-for="(item,index) in ulData" :key="index">{{item.columnName}}</span>
        </div> -->

        <el-table :data="tableData" style="width: auto;height:60vh;overflow:auto">
          <el-table-column align="center" :prop="item.columnName" :label="item.columnComment"  v-for="(item,index) in ulData" :key="index"></el-table-column>
        </el-table>

        <el-pagination background layout="prev, pager, next" :total="total" :page-size="tablePage.pageSize" :current-page="tablePage.currentPage" style="float:right;margin-top:50px" @current-change="currentChange"></el-pagination>

      </el-main>

      <!-- 数据清洗弹窗 -->
      <el-dialog title="数据清洗配置" :visible.sync="dataClearDialog" width="30%" >

        <el-input style="width:30%;margin-right:10px" v-model="inputVal"></el-input>
        <el-button type="primary" @click="searchUlShowData">查询</el-button>
        <el-button type="primary" @click="deleteField">删除</el-button>
        <el-button type="primary" @click="editField">修改</el-button>

        <el-table :data="ulShowData" ref="multipleTable" style="width: 100%;height:60vh;overflow:auto" height="450" @selection-change="handleSelectionChange">
          <el-table-column align="center" type="selection" width="55"></el-table-column>
          <el-table-column align="center" prop="columnName" label="字段"></el-table-column>
        </el-table>

        <!-- <span slot="footer" class="dialog-footer">
          <el-button @click="dataClearDialog = false">取 消</el-button>
          <el-button type="primary" @click="dataClearDialog = false">确 定</el-button>
        </span> -->
      </el-dialog>
  </div>
</template>

<script>
import { getConnectionAppointDataBaseAllTables,getFieldByTableName,updateFieldData,getPageListByTableName,deleteFieldData } from '@/api/dataExchangeManagement/dataClean'
export default {
  data(){
    return{
      //数据清洗弹窗
      dataClearDialog:false,
      ulShowData:[],
      inputVal:null,
      tableList:[],
      searchTableName:null,
      ulData:[],
      //选中表格内容
      choiceTableList:[],
      tableData:[],
      total:0,
      tablePage:{
        currentPage:1,
        pageSize:10
      },
    }
  },
  methods:{
    //翻页
    async currentChange(val){
      this.tablePage.currentPage = val
      await this.changeSelect()
    },
    //清空字段名
    async getDeleteFieldData(){
      let fieldName = ''
      this.choiceTableList.forEach((item,index) => {
        (index == this.choiceTableList.length - 1) ? fieldName += `${item.columnName}` : fieldName += `${item.columnName},`
      })
      let res = await deleteFieldData({
        fieldName,  
        tableName: this.searchTableName
      })
      let type = res.data.msg.includes('成功') ? 'success' : 'error'
      this.$message({
        type,
        message: res.data.msg
      });
      console.log(res)
    },
    //修改字段名
    async getUpdateFieldData(value){
      let res = await updateFieldData({
        fieldName: this.choiceTableList[0].columnName,
        tableName: this.searchTableName,
        value
      })
      console.log(res)
      let type = res.data.msg.includes('成功') ? 'success' : 'error'
      this.$message({
        type,
        message: res.data.msg
      });
    },
    //删除
    async deleteField(){
      if(this.choiceTableList.length == []){
        this.$message({
          type: 'warning',
          message: '请选择需要删除的字段'
        });
        return
      }
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.getDeleteFieldData()
        this.$refs.multipleTable.clearSelection();
        this.changeSelect()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    //修改
    async editField(){
      if(this.choiceTableList.length != 1){
        this.$message({
          type: 'warning',
          message: '请选择一个字段进行修改'
        });  
        return
      }
      this.$prompt('修改内容为：', '修改', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then((value) => {
        this.getUpdateFieldData(value.value)
        this.$refs.multipleTable.clearSelection();
        this.changeSelect()
      }).catch(() => {
        this.$refs.multipleTable.clearSelection();
        this.$message({
          type: 'info',
          message: '已取消修改'
        });          
      });
    },
    //搜索
    async searchUlShowData(){
      if(this.inputVal == null){
        this.ulShowData = this.ulData
        return
      }
      this.ulShowData = []
      this.ulData.forEach(item => {
        if(item.columnComment.includes(this.inputVal) || item.columnName.includes(this.inputVal)){
          this.ulShowData.push(item)
        }
      })
    },
    //打开弹窗
    async openDataClearDialog(){
      this.ulShowData = this.ulData
      if(!this.searchTableName){
        this.$message({
          message: '请选择数据表',
          type: 'warning'
        })
        return
      }
      this.dataClearDialog = true
    },
    //改变下拉框
    async changeSelect(){
      let res_table = await getPageListByTableName({
        currentPage: this.tablePage.currentPage,
        pageSize: this.tablePage.pageSize,
        tableName: this.searchTableName
      })
      console.log(res_table)
      this.total = res_table.data.data.totalCount
      this.tableData = res_table.data.data.pageData


      let res = await getFieldByTableName({tableName: this.searchTableName})
      this.ulData = res.data.data
      console.log(res)
    },
    //获取当前连接下指定数据库的所有表
    async getConnectionAppointDataBaseAllTablesList(){
      let res = await getConnectionAppointDataBaseAllTables()
      this.tableList = res.data.data.map(item => item.substring(0,item.indexOf('(')))
    },
    //表格多选改变
    async handleSelectionChange(val) {
      console.log(val)
      this.choiceTableList = val;
    }
  },
  async mounted(){
    //获取当前连接下指定数据库的所有表
    await this.getConnectionAppointDataBaseAllTablesList()
  }
}
</script>

<style scoped lang="scss">
.ulMain{
  list-style: none;
  min-width: 100%;
  white-space:nowrap;
  span{
    // float: left;
    display: inline-block;
    width: 350px;
    padding: 10px;
    border: 1px solid #ccc;
    letter-spacing: normal;
  }
}
</style>