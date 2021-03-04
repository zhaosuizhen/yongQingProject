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
                <el-button @click="search()" class="news-button">
                  <i class="el-icon-search"></i>
                </el-button>
              </el-form>
            </div>
            <!-- 数据展示区 -->
            <div class="webSite-table-content">
              <ul class="webSite-world-list">
                <li v-for="(item,i) in diseasesList" class="webSite-infoService-diseases">
                  <router-link :to="{path:'/infoService/webSiteInfoServiceDiseasesDetail',query:{id:item.id,paneName:'equipmentDiseases'}}" tag="div">
                    <!--<img :src="item.picUrl" alt="" class="webSite-diseases-img" >-->
                    <img :src="item.picUrl" :onerror="defaultimg"  alt="" class="webSite-infoService-diseases-img">
                    <p class="webSite-world-list-text">
                      {{item.diseasesName}}
                    </p>
                  </router-link>
                </li>
              </ul>
              <el-col :span="24" class="toolbar">
                <el-pagination small background layout="prev, pager, next" current-page.sync="currentPage" @current-change="changePage" :page-size="pageSize" :total="total"></el-pagination>
              </el-col>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {technology,diseases} from '../../request/webService';
  export default {
    data() {
      return {
        defaultimg: 'this.src="' + require('../../assets/webSiteImages/noImg2.jpg') + '"',
        // 搜索
        formInline: {
          title: '',
        },
        // 分页
        currentPage: 1,
        pageSize: 12,
        total: 0,
        diseasesList:[],
        selectName:'equipmentDiseases'
      }
    },
    methods: {
      search(){
        let self = this;
        // self.policyList = [];
        let para = {
          page: this.currentPage,
          pageTotal: this.pageSize,
          title: this.formInline.title,
        }
        diseases(this, para).then(result => {
          if (result.code == 0) {
            let data= result.data;
            if(data) {
              this.total = data.total;
              self.diseasesList = data.list
              /*let picArr = []
              for (let i = 0; i < data.list.length; i++) {
                if (data.list[i].picUrl == "") {
                  picArr.push(data.list[i])
                } else {
                  picArr.unshift(data.list[i])
                }
              }
              self.diseasesList = picArr*/
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
    },
    mounted() {
      this.search();
    }

  }
</script>


