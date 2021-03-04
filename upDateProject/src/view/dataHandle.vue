<template>
  <div>
        <el-input class="pickerWidth" size="small" v-model="queryKey" placeholder="关键字" style="margin-top:20px"></el-input>
        <el-button class="primary searchBtn" size="small" type="primary" @click="search">查询</el-button>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="tableName" label="数据表名称"></el-table-column>
            <el-table-column prop="dataNum" label="数据处理数量（条）"></el-table-column>
            <el-table-column prop="dataType" label="数据处理方式"></el-table-column>
            <el-table-column prop="createTime" label="数据处理时间"></el-table-column>
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
import { selectHandleListByPage } from '@/utils/api/data'
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
          await this.getSelectHandleListByPage()
      },
      methods:{
          async getSelectHandleListByPage(){    //获取
              let obj = {
                  currentPage:this.currentPage,
                  pageSize:this.pageSize,
                  queryKey:this.queryKey
              }
              let res = await selectHandleListByPage(JSON.stringify(obj))
              this.total = res.data.entitys.total
              this.tableData = res.data.entitys.records
          },
          async changeCurrentPage(val){     //翻页
              this.currentPage = val
              await this.getSelectHandleListByPage()
          },    
          async search(){                         //搜索
            await this.getSelectHandleListByPage()
          },
      }
    }
</script>

<style>

</style>