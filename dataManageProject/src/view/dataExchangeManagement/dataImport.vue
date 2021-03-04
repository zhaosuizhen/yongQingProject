<template>
  <div>
      <el-header>
        <el-row><h1>筛选区</h1></el-row>
        <el-row>
            <span>关键字：</span>
            <el-input v-model="searchVal.keyword" style="width:200px;margin-right:30px"></el-input>

            <el-button size="medium" type="primary" @click="searchList">查询</el-button>
            <el-button size="medium" type="primary" @click="importDialog = true">数据导入</el-button>
        </el-row>
      </el-header>
      <el-main>
        <!-- <el-table :data="tableData" ref="multipleTable" style="width: 100%" @selection-change="changeSelect"> -->
        <el-table :data="tableData" ref="multipleTable" style="width: 100%">
            <!-- <el-table-column type="selection" width="55" ></el-table-column> -->
            <el-table-column align="center" prop="sourceIp" label="对接系统"></el-table-column>
            <el-table-column align="center" prop="targetIp" label="导入系统"></el-table-column>
            <el-table-column align="center" prop="sourceDataTable" label="对接表名称"></el-table-column>
            <el-table-column align="center" prop="targetDataTable" label="导入表"></el-table-column>
            <el-table-column align="center" prop="dataType" label="执行规则"></el-table-column>
            <el-table-column align="center" width="250" label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" plain type="primary" @click="openDetailsDialog(scope)">详情</el-button>
                    <el-button size="mini" plain type="warning" @click="openLogsDialog(scope)">日志</el-button>
                    <el-button size="mini" plain type="danger" @click="startUp(scope)">启动</el-button>
                </template>
            </el-table-column>
        </el-table>
        
        <el-pagination background layout="prev, pager, next" :total="total" :page-size="searchVal.pageSize" :current-page="searchVal.currentPage" style="float:right;margin-top:50px" @current-change="currentChange"></el-pagination>
      </el-main>

      <!-- 详情弹窗 -->
      <el-dialog title="导入详情" :visible.sync="detailsDialog" width="60%" >

        <el-row class="detailList">
          <el-col :span="12">数据源IP：{{detailsValue.sourceIp}}</el-col>
          <el-col :span="12">目标IP：{{detailsValue.targetIp}}</el-col>
        </el-row>
        <el-row class="detailList">
          <el-col :span="12">数据源端口：{{detailsValue.sourcePort}}</el-col>
          <el-col :span="12">目标端口：{{detailsValue.targetPort}}</el-col>
        </el-row>
        <el-row class="detailList">
          <el-col :span="12">数据源数据库：{{detailsValue.sourceDataBase}}</el-col>
          <el-col :span="12">目标源数据库：{{detailsValue.targetDataBase}}</el-col>
        </el-row>
        <el-row class="detailList">
          <el-col :span="12">数据源表名：{{detailsValue.sourceDataTable}}</el-col>
          <el-col :span="12">目标源表名：{{detailsValue.targetDataTable}}</el-col>
        </el-row>
        <el-row class="detailList">
          <el-col :span="12">数据源字段：{{detailsValue.sourceColumn}}</el-col>
          <el-col :span="12">目标字段：{{detailsValue.targetColumn}}</el-col>
        </el-row>
        <el-row class="detailList">
          <el-col :span="12">数据库类型：{{detailsValue.dataBaseType}}</el-col>
          <el-col :span="12">创建时间：{{detailsValue.createTime}}</el-col>
        </el-row>
        <el-row class="detailList">
          <el-col :span="12">数据类型：{{detailsValue.dataType}}</el-col>
          <el-col :span="12">修改时间：{{detailsValue.updateTime}}</el-col>
        </el-row>
        <el-row class="detailList">
          <el-col :span="12">定时导入表达式：{{detailsValue.timingImportTime}}</el-col>
          <el-col :span="12">备注：{{detailsValue.remark}}</el-col>
        </el-row>
        <el-row class="detailList">
          <el-col :span="24">定时任务job名称：{{detailsValue.jobName}}</el-col>
        </el-row>
        <el-row class="detailList">
          <el-col :span="24">文件名称：{{detailsValue.fileName}}</el-col>
        </el-row>

        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="detailsDialog = false">返 回</el-button>
        </span>
      </el-dialog>

      <!-- 日志弹窗 -->
      <el-dialog title="日志详情" :visible.sync="logsDialog" width="60%" >

        <el-table :data="logsTableData" style="width: 100%">
          <el-table-column align="center" type="index" label="序号" width="50"></el-table-column>
          <el-table-column align="center" prop="updateTime" label="执行时间"></el-table-column>
          <el-table-column align="center"  label="执行结果">
            <template slot-scope="scope">{{scope.row.dataType == 0 ? `成功` : `失败`}}</template>
          </el-table-column>
          <el-table-column align="center" label="导入数据量">
            <template slot-scope="scope">{{scope.row.dataType == 0 ? scope.row.successCount : `已失败`}}</template>
          </el-table-column>
          <el-table-column align="center" prop="log" label="导入内容">
            <template slot-scope="scope">{{`${scope.row.log.substring(0,scope.row.log.indexOf('['))}…`}}</template>
          </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="logsTotal" :page-size="logsValue.pageSize" :current-page="logsValue.currentPage" style="float:right;margin-top:50px" @current-change="currentLogChange"></el-pagination>

        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="logsDialog = false">返 回</el-button>
        </span>
      </el-dialog>

      <!-- 导入弹窗 -->
      <el-dialog title="数据导入" :visible.sync="importDialog" width="90%" >

        <importPage v-if="importDialog" @close="closeDialog"></importPage>
        
        <!-- <span slot="footer" class="dialog-footer">
          <el-row>
              <el-col :span="12">
                  <el-button style="float:right;margin-right:10px" type="primary" @click="importDialog = false">保 存</el-button>
              </el-col>
              <el-col :span="12">
                  <el-button style="float:left;margin-left:10px" @click="importDialog = false">取 消</el-button>
              </el-col>
          </el-row>
        </span> -->
      </el-dialog>
  </div>
</template>

<script>
import { getPageList,pageList,implement } from '@/api/dataExchangeManagement/dataImport'
import importPage from './components/importPage'
export default {
  data(){
    return{
      //数据库列表
      dataBaseList:[],
      //导入弹窗
      importDialog:false,
      //日志弹窗
      logsDialog:false,
      //详情弹窗
      detailsDialog:false,
      detailsValue:{},
      searchVal:{
        keyword:null,
        currentPage:1,
        pageSize:10
      },
      logsValue:{
        id:null,
        currentPage:1,
        pageSize:10
      },
      logsTotal:0,
      logsTableData:[],
      tableData:[],
      total:0,
    }
  },
  methods:{
    //关闭弹窗
    async closeDialog(){
      this.importDialog = false
    await this.getPageListData()
    },
    //启动按钮
    async startUp(scope){
      let id = scope.row.id
      let res = await implement({id})
      // console.log(res)
      let type = res.data.msg.includes('成功') ? 'success' : (res.data.msg.includes('失败') ? 'warning' : 'error')
      this.$message({
        message: res.data.msg,
        type
      });
    },
    //日志弹窗翻页
    async currentLogChange(val){
      this.logsValue.currentPage = val
      let res = await pageList(this.logsValue)
      this.logsTableData = res.data.data.records
      this.logsTotal = res.data.data.total
    },
    //打开日志弹窗
    async openLogsDialog(scoped){
      // console.log(scoped.row)
      this.logsValue.id = scoped.row.id
      let res = await pageList(this.logsValue)
      this.logsTableData = res.data.data.records
      this.logsTotal = res.data.data.total
      this.logsDialog = true
    },
    //打开详情弹窗
    async openDetailsDialog(scope){
      this.detailsValue = scope.row
      // console.log(this.detailsValue)
      this.detailsDialog = true
    },
    //查询列表
    async searchList(){
      await this.getPageListData()
    },
    //翻页
    async currentChange(val){
      this.searchVal.currentPage = val
      await this.getPageListData()
    },
    //获取分页列表
    async getPageListData(){
      let res = await getPageList(this.searchVal)
      this.total = res.data.data.total
      this.tableData = res.data.data.records.map(item => {
        item.dataType = (item.dataType == 0) ? '全量导入' : ((item.dataType == 1) ? '增量导入' : '定时导入')
        return item
      })
      // console.log(this.tableData)
    },
  },
  async mounted(){
    //获取分页列表
    await this.getPageListData()
  },
  components:{
    importPage
  }
}
</script>

<style scoped lang="scss">
.detailList{
  margin: 20px 0;
  font-size: 16px;
}
</style>