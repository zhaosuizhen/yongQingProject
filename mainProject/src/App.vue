<template>
  <div id="app">
    <Nav v-if="nav_flag" class="app_nav"></Nav>
    <transition name="fade"
                mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import Nav from './views/visualiza/nav'
export default {
  name: "App",
  data(){
    return{
      nav_flag: false
    }
  },
  components:{
    Nav
  },
  methods:{
    changeRouter(toPath){
      // alert(toPath)
      if(
         toPath == '/industryAnalysisIndex' || 
         toPath == '/visLivestock' ||
         toPath == '/visOphiopogon' ||
         toPath == '/visManage' ||
         toPath == '/visGeography' || 
         toPath == '/visGrainAndOil' || 
         toPath == '/visAgriculturalData' || 
         toPath == '/visPlant'  || 
         toPath == '/visProcess'  ||   
         toPath == '/visMarket' ||
         toPath == '/visDiseases' ||
         toPath == '/visVegetables' ||
         toPath == '/visRattanPepper' ||
         toPath == '/visInputs' ||
         toPath == '/trueVisManage' ||
         toPath == '/visAnimalHusbandry' ||
         toPath == '/visRattanPepper' ||
         toPath == '/visVegetables' 
        ){
        this.nav_flag = true
      }else{
        this.nav_flag = false
      }
    }
  },
  created(){
    // alert(this.$route.path)
    if(
       this.$route.path == '/industryAnalysisIndex' ||
       this.$route.path == '/visLivestock' ||
       this.$route.path == '/visOphiopogon' ||
       this.$route.path == '/visManage' ||
       this.$route.path == '/visGeography' ||
       this.$route.path == '/visGrainAndOil' ||
       this.$route.path == '/visAgriculturalData' ||
       this.$route.path == '/visPlant' ||
       this.$route.path == '/visProcess' ||
       this.$route.path == '/visMarket' ||
       this.$route.path == '/visDiseases' ||
       this.$route.path == '/visInputs' ||
       this.$route.path == '/trueVisManage' ||
       this.$route.path == '/visAnimalHusbandry' ||
       this.$route.path == '/visRattanPepper' ||
       this.$route.path == '/visVegetables' 
    
    ){
      this.nav_flag = true
    }else{
      this.nav_flag = false
    }
  },
  watch: {
  '$route' (to, from) {
    this.changeRouter(to.path)
  }
}
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import "css/reset.scss";
@import "css/adapter.scss";
/*管理平台css*/
@import "css/visualiza/visualiza2.scss";
/*网站首页css*/
@import "css/webSite/webSiteIndex.scss";

#app {
  overflow: hidden;
  height: 100%;
  font-family: "微软雅黑", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*-ms-overflow-style: none;*/
  /*overflow-x: -moz-scrollbars-none;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
}
/*#app::-webkit-scrollbar {*/
/*z-index:-1*/
/*}*/
.el-pagination {
  padding-top: 10px!important;
  text-align: right!important;
  button:disabled {
    /*background-color: transparent!important;*/
  }
  .btn-prev,
  .btn-next {
    /*background-color: transparent!important;*/
    /*color: #c0c4cc!important;*/
  }
  ul {
    /*background-color: transparent!important;*/
  }
}

.el-pager li {
  /*background-color: transparent!important;*/
  /*color: #c0c4cc!important;*/
}
.el-pagination.is-background .el-pager li:not(.disabled).active{
  background-color: #00477B!important;
}
.app_nav{
  position: absolute;
  left: 25.5vw;
  top: 12%;
  z-index: 100;
}
</style>
