<template>
  <div class="webSite-container">
    <div class="webSite-content-total">
      <div class="webSite-content1">
        <div class="webSite-infoService-content1-center">
          <div class="webSite-marketnew-table" style="margin-top: -5%;">
            <div class="webSite-table-search">
              <el-form :inline="true" :model="formInline">
                <el-input v-model="formInline.datayear" placeholder="请输入年份" class="news-input"></el-input>
                <el-input v-model="formInline.township" placeholder="请输入乡镇" class="news-input"></el-input>
                <el-button v-on:click="getLanduselist" class="news-button">
                  <i class="el-icon-search"></i>
                </el-button>
              </el-form>
            </div>
            <!--列表-->
            <div class="webSite-table-content">
              <el-table :data="tableData" :header-cell-style="getRowClass" highlight-current-row border style="width: 100%" @selection-change="selsChange">
                <el-table-column prop="years" label="年份"></el-table-column>
                <el-table-column prop="township" label="乡镇"></el-table-column>
                <el-table-column prop="cattleOutColumn" label="牛出栏"></el-table-column>
                <el-table-column prop="cattleExistColumn" label="牛存栏"></el-table-column>
                <el-table-column prop="sheepOutColumn" label="羊出栏"></el-table-column>
                <el-table-column prop="sheepExistColumn" label="羊存栏"></el-table-column>
                <el-table-column prop="JQ_out" label="家禽出栏"></el-table-column>
                <el-table-column prop="JQ_in" label="家禽存栏"></el-table-column>
                <el-table-column prop="rabbitOutColumn" label="兔出栏"></el-table-column>
                <el-table-column prop="rabbitExistColumn" label="兔存栏"></el-table-column>
                <el-table-column prop="eggCount" label="禽蛋产量"></el-table-column>
              </el-table>
              <!--分页-->
              <el-col :span="24" class="toolbar">
                <el-pagination small background layout="prev, pager, next" current-page.sync="currentPage" @current-change="changePage" :page-size="pageSize" :total="total" style="text-align:right;color:#7a7a7a;margin:20px auto 0;"></el-pagination>
              </el-col>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {nzwdList} from '../../request/webService';
  import {landuselist} from '../../api/baseData';
  export default {
    name: '',
    data () {
      return {
        formInline: {
          datayear: '',
          township: ''
        },
        // 列表
        tableData: [],
        // 分页
        currentPage: 1,
        pageSize: 10,
        total: 0,
      }
    },
    methods: {
      async getLanduselist(){
        let res = await landuselist({
          currentPage:this.currentPage,
          pageSize:this.pageSize,
          years:this.formInline.datayear,
          township:this.formInline.township,
        })
        console.log(res.data.data.list)
        this.total = res.data.data.total
        this.tableData = res.data.data.list
        this.tableData.forEach(item => {
          item.JQ_out = item.chickenOutColumn + item.gooseOutColumn + item.duckOutColumn
          item.JQ_in = item.chickenExistColumn + item.gooseExistColumn + item.duckExistColumn
          item.eggCount = item.duckeggYiled + item.eggYield + item.gooseeggYiled
        })
      },



      getMarket() {
        let para = {
          page: this.currentPage,
          pageTotal: this.pageSize,
          name: this.formInline.name,
        };
        nzwdList(this, para).then(result => {
          if (result.code == 0) {
            let data= result.data;
            if(data){
              this.total = data.total;
              this.tableData = data.list;
            }
          }
        });
      },
      selsChange: function (sels) {
        this.sels = sels;
      },
      changePage (val) {
        this.currentPage = val
        this.getLanduselist()
      },
      getRowClass ({ rowIndex }) {
        if (rowIndex == 0) {
          return 'background:RGB(238,239,246)'
        }
      },
    },
    mounted () {
      this.getLanduselist()
    },
  }
</script>
