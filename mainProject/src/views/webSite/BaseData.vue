<template>
  <div class="about-infoService-platform-body" style="position: relative;">

    <div class="basicData">
      <img :src="imgSrc" width="100%" height="100%" alt="">
    </div>

    <div class="webSite-content-total" style="width: 100%;overflow:hidden">
      <div class="webSite-content1" style="height: 100%;width: 100%;">
        <div class="webSite-content1-center" style="height: 100%;">
          <el-row class="tac" style="margin-top: 2%;">
            <el-col :span="12">
              <div class="webSitePolicyNewsDetail-site">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>当前位置</el-breadcrumb-item>
                  <el-breadcrumb-item>基础数据</el-breadcrumb-item>
                  <el-breadcrumb-item v-if='this.$route.path.indexOf("/webSiteBaseDataJYZT") >= 0'>耕地地理专题</el-breadcrumb-item>
                  <el-breadcrumb-item v-if='this.$route.path.indexOf("/webSiteBaseDataNYTRP") >= 0'>农业经营主体专题</el-breadcrumb-item>
                  <el-breadcrumb-item v-if='this.$route.path.indexOf("/webSiteBaseDataNCPJY") >= 0'>耕地基本情况专题</el-breadcrumb-item>
                  <el-breadcrumb-item v-if='this.$route.path.indexOf("/webSiteBaseDataTDXX") >= 0'>农业投入品专题</el-breadcrumb-item>
                  <el-breadcrumb-item v-if='this.$route.path.indexOf("/webSiteBaseDataZZXX") >= 0'>农业物联专题</el-breadcrumb-item>
                  <el-breadcrumb-item v-if='this.$route.path.indexOf("/webSiteBaseDataNSXX") >= 0'>农业生产专题</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
            </el-col>

          </el-row>

          <el-row class="tac">
            <el-col :span="3">
              <el-menu router background-color="#f8f8f8" text-color="#434343" active-text-color="#fff">
                
                <el-menu-item :class="$route.path.includes('webSiteBaseDataJYZT') ? 'is-active' : ''" style="min-width:200px" index="/baseData/webSiteBaseDataJYZT">
                  <span slot="title"><h2 style="font-size:10px">耕地地理专题</h2></span>
                </el-menu-item>
                <el-menu-item :class="$route.path.includes('webSiteBaseDataNYTRP') ? 'is-active' : ''" style="min-width:200px" index="/baseData/webSiteBaseDataNYTRP">
                  <span slot="title"><h2 style="font-size:10px">农业经营主体专题</h2></span>
                </el-menu-item>
                <el-menu-item :class="$route.path.includes('webSiteBaseDataNCPJY') ? 'is-active' : ''" style="min-width:200px" index="/baseData/webSiteBaseDataNCPJY">
                  <span slot="title"><h2 style="font-size:10px">耕地基本情况专题</h2></span>
                </el-menu-item>
                <el-menu-item :class="$route.path.includes('webSiteBaseDataTDXX') ? 'is-active' : ''" style="min-width:200px" index="/baseData/webSiteBaseDataTDXX">
                  <span slot="title"><h2 style="font-size:10px">农业投入品专题</h2></span>
                </el-menu-item>
                <el-menu-item :class="$route.path.includes('webSiteBaseDataZZXX') ? 'is-active' : ''" style="min-width:200px" index="/baseData/webSiteBaseDataZZXX">
                  <span slot="title"><h2 style="font-size:10px">农业物联专题</h2></span>
                </el-menu-item>
                <el-menu-item :class="$route.path.includes('webSiteBaseDataNSXX') ? 'is-active' : ''" style="min-width:200px" index="/baseData/webSiteBaseDataNSXX">
                  <span slot="title"><h2 style="font-size:10px">农业生产专题</h2></span>
                </el-menu-item>

              </el-menu>
            </el-col>
            <el-col :span="1">
              <div>
                <span>&nbsp;</span>
              </div>
            </el-col>
            <el-col :span="20">
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
  import webSiteBaseDataJYZT from './webSiteBaseDataJYZT';
  import webSiteBaseDataNYTRP from './webSiteBaseDataNYTRP';
  import webSiteBaseDataNCPJY from './webSiteBaseDataNCPJY';
  import webSiteBaseDataTDXX from './webSiteBaseDataTDXX';
  import webSiteBaseDataZZXX from './webSiteBaseDataZZXX';
  import webSiteBaseDataNSXX from './webSiteBaseDataNSXX';
  import webSiteBaseDataNZWD from './webSiteBaseDataNZWD';
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
        let res = await bannerWeb({modularName:'基础数据'})
        this.imgSrc = res.data.data[0].pictureUrl.substring(0,res.data.data[0].pictureUrl.length - 1)
      },
    },
    async mounted () {
      await this.getBannerWeb()
    },
    components: {
      webSiteBaseDataJYZT,
      webSiteBaseDataNYTRP,
      webSiteBaseDataNCPJY,
      webSiteBaseDataTDXX,
      webSiteBaseDataZZXX,
      webSiteBaseDataNSXX,
      webSiteBaseDataNZWD,
    },
  }
</script>

<style>

</style>
