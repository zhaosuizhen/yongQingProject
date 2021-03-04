<template>
  <div class="webSite-container">
    <div class="webSite-content-total">
      <div class="webSite-content1">
        <div class="webSite-infoService-content1-center">
          <div class="webSite-table"  style="margin-top: -5%;">
            <!-- 搜索区域 -->
            <div class="webSite-table-search">
              <el-form :inline="true" :model="formInline">
                <el-input v-model="formInline.title" placeholder="点击输入关键字" class="news-input">
                </el-input>
                <el-button v-on:click="search()" class="news-button">
                  <i class="el-icon-search"></i>
                </el-button>
              </el-form>
            </div>
            <!-- 数据展示区 -->
            <div class="webSite-table-content">
              <div class="webSite-news-content">
                <ul class="webSite-news-list-ul news-ul">
                  <li v-for="(item,i) in policyList"><!--:to="{path:'/workTaskEdit',query{id:work_task.id}}"-->
                    <router-link :to="{path:'/infoService/webSiteInfoServicePolicyDetail',query:{id:item.id,paneName:'policyFirst'}}" tag="div">
                      <div class="new-l">
                          <p class="webSite-news-day">{{dealTimeToDate(item.releaseTime).day}}</p>
                          <p class="webSite-news-year">{{dealTimeToDate(item.releaseTime).year}}</p>
                      </div>
                      <div class="new-r">
                          <p class="webSite-news-list-title">{{item.title}}</p>
                          <p class="webSite-news-list-content">{{item.author}}</p>
                          <p class="webSite-news-list-source">[信息来源：<i>{{item.source}}]</i></p>
                      </div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <el-col :span="24" class="toolbar">
              <el-pagination small background layout="prev, pager, next" current-page.sync="currentPage" @current-change="changePage" :page-size="pageSize" :total="total"></el-pagination>
            </el-col>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {policy} from '../../request/webService';
  export default {

    data() {
      return {
        // 搜索
        formInline: {
          title: '',
        },
        item: {
          title: '',
        },
        // 分页
        currentPage: 1,
        pageSize: 5,
        total: 0,
        policyList:[],
        selectName: 'policyFirst',
      }
    },

    methods: {
      search(){
        let para = {
          page: this.currentPage,
          pageTotal: this.pageSize,
          datatype: "1",
          title: this.formInline.title,
        }
        policy(this, para).then(result => {
          if (result.code == 0) {
            let data = result.data;
            if(data) {
              this.total = data.total;
              this.policyList = data.list;
            }
          }
        })
      },
      selsChange: function (sels) {
        this.sels = sels;
      },
      // 分页
      changePage (val) {
        this.currentPage = val,
        this.search()
      },
      //时间处理 2020-02-20 10:54:35
      dealTimeToDate(time){
        let timeArr=time.substring(0, 10).split('-');
        let newObj={};
        let year=timeArr[0]+'.'+timeArr[1];
        let day=timeArr[2];
        newObj={
          'year':year,
          'day':day
        }
        return newObj
      }
    },
    mounted() {
      this.search();
    }
  }
</script>
<style scoped>
 .news-ul>li{
   list-style: none;
   overflow: hidden;
 }
 .new-l{
   float: left;
   width: 13%;
   background-color: #f5f5f5;
   border: 1px solid #f0f0f0;
   border-radius: 4px;
   padding-bottom: 6px;
   color: #666;
 }
 .new-r{
   float: right;
   width: 85%;
 }
 .webSite-news-day{
   height: 70%;
   text-align: center;
   font-weight: 500;
   font-size: 30px;
   margin-top: 10px;
 }
 .webSite-news-year{
   height: 30%;
   text-align: center;
   font-size: 18px;
   margin-top: 15px;
 }
 .webSite-news-list-source{
 }
</style>

