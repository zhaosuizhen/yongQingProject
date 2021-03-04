<template>
  <div>
        <el-input class="pickerWidth" size="small" v-model="queryKey" placeholder="关键字" style="margin-top:20px"></el-input>
        <el-button class="primary searchBtn" size="small" type="primary" @click="search">查询</el-button>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="dbName" label="数据库"></el-table-column>
            <el-table-column prop="dbShare" label="共享数据库"></el-table-column>
            <el-table-column prop="tableName" label="表名称"></el-table-column>
            <el-table-column prop="dataNum" label="共享数量"></el-table-column>
            <el-table-column prop="createTime" label="数据共享时间"></el-table-column>
        </el-table>

        <el-pagination
            background
            :current-page.sync="currentPage"
            :page-size="pageSize"
            @current-change="changeCurrentPage"
            layout="prev, pager, next"
            :total="total"
            style="float:right;margin-right:100px;margin-top:30px">
        </el-pagination>
  </div>
</template>

<script>
import { selectShareListByPage } from '@/utils/api/data'
export default {
      data() {
        return {
            queryKey: "",
            total:0,
            currentPage:1,
            pageSize:10,
          tableData: []
        }
      },
      async mounted(){
          await this.getselectShareListByPage()
      },
      methods:{
          async getselectShareListByPage(){
              let obj = {
                  currentPage:this.currentPage,
                  pageSize:this.pageSize,
                  queryKey:this.queryKey
              }
              let res = await selectShareListByPage(JSON.stringify(obj))
              this.total = res.data.entitys.total
              this.tableData = res.data.entitys.records
          },
          async changeCurrentPage(val){
              this.currentPage = val
              await this.getselectShareListByPage()
          },
          async search(){                         //搜索
            await this.getselectShareListByPage()
          },
      }
    }
</script>

<style>

</style>