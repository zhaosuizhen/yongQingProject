<template>
  <div>
    <el-header>
      <el-row>
        <el-col :span="4">数据备份</el-col>
        <el-col :span="20">
           数据库名称：
          <el-select v-model="datacenterPage.tableSchema" placeholder="请选择" @change="changeSelect">
            <el-option v-for="(item,index) in selectList" :key="index" :label="item" :value="item"></el-option>
          </el-select>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="操作" width="100">
            <template slot-scope="scope">
                <el-checkbox v-model="scope.row.checked"></el-checkbox>
            </template>
        </el-table-column>
        <el-table-column prop="tableName" label="库表名称"></el-table-column>
        <el-table-column prop="tableComment" label="库表注释"></el-table-column>
        <el-table-column prop="tableRows" label="备份大小"></el-table-column>
      </el-table>

      <el-pagination background layout="prev, pager, next"
      :total="total" :current-page="datacenterPage.currentPage" :page-size="datacenterPage.pageSize" 
      @current-change="changeCurrent" style="float:right;margin-top:20px"></el-pagination>

      <el-button size="small" type="primary" style="margin-top:20px" @click="backupsBtn">备份</el-button>
    </el-main>
  </div>
</template>

<script>
import { getDataBaseList,getBaseTableList,handleBackupDb } from '@/api/dataStorageManage/dataHandle'
export default {
  data(){
    return{
      //下拉框列表
      selectList:[],
      datacenterPage:{
        currentPage:1,
        pageSize:10,
        tableSchema:'',
      },
      tableData:[],
      total:0
    }
  },
  methods:{
    //点击备份按钮
    async backupsBtn(){
      let arr = []
      this.tableData.forEach(item => {
        if(item.checked){
          arr.push({
            dataBaseState:item.dataBaseState,
            dataLength:item.dataLength,
            dataSource:item.dataSource,
            dataType:1,
            tableComment:item.tableComment,
            tableName:item.tableName,
            tableRows:item.tableRows,
            tableSchema:item.tableSchema,
          })
        }
      })
      //判断空
      if(!arr.length){
        this.$message({
          message: '请选择至少一个要备份的库表',
          type: 'warning'
        });
        return
      }
      //备份
      console.log(arr)
      let res = await handleBackupDb(JSON.stringify(arr))
      this.$message({
          message: res.data.data,
          type: 'success'
        });
      this.tableData.forEach(item => {
        item.checked = false
      })
    },
    //翻页
    async changeCurrent(val){
      this.datacenterPage.currentPage = val
      await this.getBaseTableListData()
    },
    //下拉框内容改变
    async changeSelect(){
      this.datacenterPage.currentPage = 1
      await this.getBaseTableListData()
    },
    //根据库名获取表数据
    async getBaseTableListData(){
      let res = await getBaseTableList(this.datacenterPage)
      this.tableData = res.data.data.pageData
      this.total = res.data.data.totalCount
    },
    //获取所有库数据
    async getDataBaseListData(){
      let res = await getDataBaseList()
      this.selectList = res.data.data.pageData.map(item => {
        return item.tableSchema
      })
    },
  },
  async mounted(){
    await this.getDataBaseListData()
  }
}
</script>

<style>

</style>