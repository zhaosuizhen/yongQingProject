<template>
  <div class="industryAnalysis-body">
    <!-- <div class="industryAnalysis-border"></div> -->
    <!--gis地图-->
    <!--<div style="width: 100%;height: 100%;background-color: #1A2B3D;">-->
      <!--<industryAnalysisMap></industryAnalysisMap>-->
    <!--</div>-->
    <el-container>
      <el-header>
        <img width="80%" style="position: absolute;z-index:998;left:10%;top:0" src="../../assets/santai_img/title_bg.png" alt="">
        <div class="vis-title">
              
          <div class="vis-title-top">
            <!-- <div class="vis-title-left"></div> -->
            <div class="vis-title-text" style="padding-top:12px;z-index:100">
              GIS遥感技术平台
            </div>
            <!-- <div class="vis-title-right"></div> -->
            <div class="backToHome" @click="backToHome">
              <i class="el-icon-s-home"></i>
              返回首页
            </div>
          </div>
        </div>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script type="text/ecmascript-6">
// import industryAnalysisMap from "./industryAnalysisMap";
export default {
  data() {
    return {};
  },
  components: {
    // industryAnalysisMap
  },
  mounted() {},
  methods: {
    backToHome(){
      window.location.href = 'http://39.104.114.103:8082/home/#/home'; 
    }
  }
};
</script>
<style>
</style>
