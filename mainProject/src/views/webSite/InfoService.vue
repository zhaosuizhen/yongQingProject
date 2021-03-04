<template>
  <div class="about-infoService-platform-body">
    <div class="basicData">
      <img :src="imgSrc" width="100%" height="100%" alt="">
    </div>
    <div class="webSite-content-total" style="height: 80%;width: 100%;">
      <div class="webSite-content1" style="height: 100%;width: 100%;">
        <div class="webSite-content1-center" style="height: 100%;">
          <el-row class="tac" style="margin-top: 2%;">
            <el-col :span="12">
              <div class="webSitePolicyNewsDetail-site">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>当前位置</el-breadcrumb-item>
                  <el-breadcrumb-item>信息服务</el-breadcrumb-item>
                  <el-breadcrumb-item v-if='this.$route.path.indexOf("/webSiteInfoServicePolicy") >= 0'>最新政策</el-breadcrumb-item>
                  <el-breadcrumb-item v-if='this.$route.path.indexOf("/webSiteInfoServiceNews") >= 0'>增收致富</el-breadcrumb-item>
                  <el-breadcrumb-item v-if='this.$route.path.indexOf("/webSiteInfoServiceWorld") >= 0'>土壤墒情</el-breadcrumb-item>
                  <!-- <el-breadcrumb-item v-if='this.$route.path.indexOf("/webSiteInfoServiceDiseases") >= 0'>病虫害防治</el-breadcrumb-item> -->
                </el-breadcrumb>
              </div>
            </el-col>
            <!-- <el-col :span="12">
              <div class="webSite-table-search">
                <el-form :inline="true" :model="formInline">
                  <el-input v-model="formInline.title" placeholder="点击输入关键字" class="news-input">
                  </el-input>
                  <el-button @click="search()" class="news-button">
                    <i class="el-icon-search"></i>
                  </el-button>
                </el-form>
              </div>
            </el-col> -->
          </el-row>
          <el-row class="tac">
            <el-col :span="3">
              <el-menu :default-active="'/infoService/webSiteInfoServicePolicy'?'/infoService/webSiteInfoServicePolicy':$route.path.split('/')[1]" router
              background-color="#f8f8f8"
              text-color="#434343"
              active-text-color="#fff">
                <el-menu-item style="min-width:150px" index="/infoService/webSiteInfoServicePolicy">
                  <span slot="title"><h2 style="font-size:10px">最新政策</h2></span>
                </el-menu-item>
                <el-menu-item style="min-width:150px" index="/infoService/webSiteInfoServiceNews">
                  <span slot="title"><h2 style="font-size:10px">增收致富</h2></span>
                </el-menu-item>
                <el-menu-item style="min-width:150px" index="/infoService/webSiteInfoServiceWorld">
                  <span slot="title"><h2 style="font-size:10px">土壤墒情</h2></span>
                </el-menu-item>
                <!-- <el-menu-item style="min-width:150px" index="/infoService/webSiteInfoServiceDiseases">
                  <span slot="title"><h2 style="font-size:10px">病虫害防治</h2></span>
                </el-menu-item> -->
              </el-menu>
            </el-col>
            <!-- <el-col :span="1">
              <div>
                <span>&nbsp;</span>
              </div>
            </el-col> -->
            <el-col :span="20" style="margin-left: 2%">
              <!-- <webSiteInfoServicePolicy ref="webSiteInfoServicePolicy"></webSiteInfoServicePolicy>
              <webSiteInfoServiceNews ref="webSiteInfoServiceNews"></webSiteInfoServiceNews>
              <webSiteInfoServiceWorld ref="webSiteInfoServiceWorld"></webSiteInfoServiceWorld>
              <webSiteInfoServiceDiseases ref="webSiteInfoServiceDiseases"></webSiteInfoServiceDiseases> -->
              <router-view/>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <el-footer style="margin-top:70px" class="webSite-el-footer">
        <el-row class="webSite-el-footer-center">
            <el-col :span="10">
            <p>友情链接</p>
            <p><a class="footer-text" href="http://www.moa.gov.cn/" target="_blank">中华人民共和国农业农村部</a></p>
            <p><a class="footer-text"  href="http://www.agri.cn/" target="_blank">中国农业信息网</a></p>
            <p><a class="footer-text"  href="http://nync.hebei.gov.cn/" target="_blank">河北省农业农村厅</a></p>
            <p><a class="footer-text"  href="http://yongqing.gov.cn/zhengwugongkai/zhengfujiedu/" target="_blank">永清人民政府</a></p>
            </el-col>
        <el-col :span="12">
          <p>
            <i>主管单位：</i><span class="footer-text">河北省永清县农业农村局 </span>
          </p>
          <p>
            <i>地址：</i><span class="footer-text">河北省廊坊市永清县益昌中路235号</span>
          </p>
          <p>
            <i>电话：</i><span class="footer-text">0316-6623391</span>
          </p>
          <p>
            <i>传真：</i><span class="footer-text">0316-6623391</span>
          </p>
          <p>
            <i>技术支持：</i><span class="footer-text">北京旗硕基业科技股份有限公司</span>
          </p>
        </el-col>
            <el-col :span="2" class="footer_logo">
            <img src="../../assets/webSiteImages/footer_logo.png" alt="">
            </el-col>
        </el-row>
    </el-footer>
  </div>
</template>

<script>
  import webSiteInfoServicePolicy from './webSiteInfoServicePolicy';
  import webSiteInfoServiceNews from './webSiteInfoServiceNews';
  import webSiteInfoServiceWorld from './webSiteInfoServiceWorld';
  import webSiteInfoServiceDiseases from './webSiteInfoServiceDiseases';
  import webSiteInfoServicePolicyDetail from './webSiteInfoServicePolicyDetail';
  import webSiteInfoServiceNewsDetail from './webSiteInfoServiceNewsDetail';
  import webSiteInfoServiceWorldDetail from './webSiteInfoServiceWorldDetail';
  import webSiteInfoServiceDiseasesDetail from './webSiteInfoServiceDiseasesDetail';
  import { bannerWeb } from '@/api/banner';
  export default {
    name: '',
    data () {
      return {
        imgSrc:null,
        formInline: {
          title: '',
        },
      }
    },
    methods: {
      async getBannerWeb(){
        let res = await bannerWeb({modularName:'信息服务'})
        this.imgSrc = res.data.data[0].pictureUrl.substring(0,res.data.data[0].pictureUrl.length - 1)
      },
      search(){
        if (this.$route.path==="/infoService/webSiteInfoServicePolicy") {
          webSiteInfoServicePolicy.methods.search();
        }
      }
    },
    async mounted () {
      await this.getBannerWeb()
    },
    components: {
      webSiteInfoServicePolicy,
      webSiteInfoServiceNews,
      webSiteInfoServiceWorld,
      webSiteInfoServiceDiseases,
      webSiteInfoServicePolicyDetail,
      webSiteInfoServiceNewsDetail,
      webSiteInfoServiceWorldDetail,
      webSiteInfoServiceDiseasesDetail,
    },
  }
</script>

<style>

</style>
