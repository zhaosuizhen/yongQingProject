<template>
  <div>
    <el-header>数据还原</el-header>
  <el-main>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="tableName" label="库表名称"></el-table-column>
      <el-table-column prop="dataBaseName" label="数据库名称"></el-table-column>
      <el-table-column prop="tableComment" label="库表注释"></el-table-column>
      <el-table-column prop="backupsSize" label="备份大小"></el-table-column>
      <el-table-column prop="createdTime" label="备份时间"></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="recoveryBtn(scope.row.tableName)">恢复</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="databasePage.total" :page-size="databasePage.pageSize" :current-page="databasePage.currentPage" style="float:right;margin-top:50px" @current-change="currentChange"></el-pagination>
    
    <!-- 恢复弹窗 -->
    <el-dialog v-if="recoveryDialog" title="恢复" :visible.sync="recoveryDialog" width="60%">

      <el-table :data="recoveryList" style="width: 100%" highlight-current-row ref="singleRestoreTable">
        <el-table-column label="操作" width="100" :show-overflow-tooltip="true" :resizable="false">
            <template slot-scope="scope">
                <el-checkbox v-model="scope.row.checked" @change="handleSelect(scope)"></el-checkbox>
            </template>
        </el-table-column>
        <el-table-column prop="id" label="操作表id"></el-table-column>
        <el-table-column prop="tableName" label="表名称"></el-table-column>
        <el-table-column prop="dataBaseName" label="数据库名称"></el-table-column>
        <el-table-column prop="tableComment" label="库表注释"></el-table-column>
        <el-table-column prop="backupsSize" label="备份大小"></el-table-column>
        <el-table-column prop="createdTime" label="备份时间"></el-table-column>
      </el-table>
      

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="recoveryData">恢 复</el-button>
      </span>
    </el-dialog>

  </el-main>
  </div>
</template>

<script>
import { getBaseTableListRecovery,getBaseTableListRecoveryToTableName,handleImportDb } from '@/api/dataStorageManage/dataHandle'
export default {
  data(){
    return{
      recoveryDialog:false,
      databasePage:{
        currentPage:1,
        pageSize:10,
        total:0
      },
      tablePage:{
        currentPage:1,
        pageSize:10,
        total:0
      },
      //表数据
      tableData:[],
      //恢复数据
      recoveryList:[]
    }
  },
  methods:{
    //翻页
    async currentChange(val){
      this.databasePage.currentPage = val
      await this.getBaseTableListRecoveryData()
    },
    //关闭恢复弹窗
    async closeDialog(){
      this.recoveryList.forEach(item => {
        item.checked = false
      })
      this.recoveryDialog = false
    },
    //恢复表数据
    async recoveryData(){
      console.log(this.recoveryList)
      let obj = {}
      this.recoveryList.forEach(item => {
        if(item.checked){
          obj.dataBaseName = item.tableName,
          obj.id = item.id,
          obj.dataType = 1
        }
      })
      if(!obj.id){
        this.$message({
          message: '请选择要恢复的库表',
          type: 'warning'
        });
        return
      }
      let res = await handleImportDb(obj)
      let type = res.data.msg.includes('已执行恢复操作') ? 'success' : 'warning'
      this.$message({
          message: res.data.msg,
          type
        });
      
      this.recoveryDialog = false
    },
    //恢复弹窗设置单选
    handleSelect(scope){
      let check = scope.row.checked
      this.recoveryList.forEach(item => {
        item.checked = false
      })
      //清空所有选中
      this.$refs.singleRestoreTable.setCurrentRow()
      scope.row.checked = check
      // if (check) {
      //   this.$refs.singleRestoreTable.setCurrentRow(this.detailData[scope.$index])
      // }
    },
    //恢复弹窗
    async recoveryBtn(tableName){
      let res = await getBaseTableListRecoveryToTableName({
        currentPage:this.tablePage.currentPage,
        pageSize :this.tablePage.pageSize,
        tableName
      })
      console.log(res.data.data.records)
      this.recoveryList = res.data.data.records
      this.recoveryDialog = true
    },
    //展示数据库已备份的表数据
    async getBaseTableListRecoveryData(){
      let res = await getBaseTableListRecovery({
        currentPage: this.databasePage.currentPage,
        pageSize: this.databasePage.pageSize
      })
      this.databasePage.total = res.data.data.total
      this.tableData = res.data.data.records
    },
  },
  async mounted(){
    await this.getBaseTableListRecoveryData()
  }
}
</script>

<style>

</style>