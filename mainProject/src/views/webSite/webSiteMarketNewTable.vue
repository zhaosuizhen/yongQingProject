<template>
  <div class="webSite-container">
    <div class="webSite-content-total">
      <div class="webSite-content1">
        <div class="webSite-content1-center">
            <div class="webSite-marketnew-table">
              <div class="webSite-table-search" style="margin: 20px auto;height: 32px;float:left;">
                <el-form :inline="true" :model="formInline">
                  <el-input v-model="formInline.name" placeholder="请输入品种/批发市场" class="news-input">
                  </el-input>
                  <el-button v-on:click="getMarket" class="news-button">
                    <i class="el-icon-search"></i>
                  </el-button>
                </el-form>
              </div>
              <!--列表-->
              <el-table :data="tableData" highlight-current-row border style="width: 100%" @selection-change="selsChange">
                <el-table-column prop="varieties" label="品种"></el-table-column>
                <el-table-column prop="bazaar" label="批发市场"></el-table-column>
                <el-table-column prop="minprice" label="最低价格" width="110">
                  <template slot-scope="scope">
                    <span>{{scope.row.minprice !== null ? scope.row.minprice.toFixed(2):'-'}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="maxprice" label="最高价格" width="110">
                  <template slot-scope="scope">
                    <span>{{scope.row.maxprice !== null ? scope.row.maxprice.toFixed(2):'-'}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="avgprice" label="平均价格" width="110">
                  <template slot-scope="scope">
                    <span>{{scope.row.avgprice !== null ? scope.row.avgprice.toFixed(2):'-'}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="unit" label="单位" width="80"></el-table-column>
                <el-table-column prop="createtime" label="发布日期" width="180"></el-table-column>
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
</template>
<script>
  import {marketList} from '../../request/webService';
  export default {
    name: '',
    data () {
      return {
        formInline: {
          name: ''
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
      getMarket() {
        let para = {
          page: this.currentPage,
          pageTotal: this.pageSize,
          name: this.formInline.name,
        };
        marketList(this, para).then(result => {
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
        this.getMarket()
      },
    },
    mounted () {
      this.getMarket()
    },
  }
</script>
