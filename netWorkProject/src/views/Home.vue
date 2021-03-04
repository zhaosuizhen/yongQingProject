<template>
  <div class="home">
    <el-container>
      <el-header>
        <img class="title_bg" width="96%" src="../assets/images/title_logo.png" alt="">
      </el-header>
      <el-main style="padding:0">
        <router-view />
      </el-main>
      <el-footer>
        <img class="footer_bg" width="80%" src="../assets/images/btn_bg.png" alt="">
        <el-row type="flex" justify="space-around">
          <el-col>
            <router-link to="/famousBrand" :class="$route.path.includes('famousBrand') ? 'bottom_btn_active' : 'bottom_btn'">
              <div class="btn_logo"><img :width="$route.path.includes('famousBrand') ? '70%' : '50%'" src="../assets/images/pinpai.png" alt=""></div>
              <div class="btn_title">知名品牌</div>
            </router-link>
          </el-col>
          <el-col>
            <router-link to="/dataAnalysis" :class="$route.path.includes('dataAnalysis') ? 'bottom_btn_active' : 'bottom_btn'">
              <div class="btn_logo"><img :width="$route.path.includes('dataAnalysis') ? '70%' : '50%'" src="../assets/images/shuju.png" alt=""></div>
              <div class="btn_title">数据分析</div>
            </router-link>
          </el-col>
          <el-col>
            <router-link to="/knowledgeExchange" :class="$route.path.includes('knowledgeExchange') ? 'bottom_btn_active' : 'bottom_btn'">
              <div class="btn_logo"><img :width="$route.path.includes('knowledgeExchange') ? '70%' : '50%'" src="../assets/images/zhishi.png" alt=""></div>
              <div class="btn_title">知识交流</div>
            </router-link>
          </el-col>
          <el-col>
            <router-link to="/technologyPromotion" :class="$route.path.includes('technologyPromotion') ? 'bottom_btn_active' : 'bottom_btn'">
              <div class="btn_logo"><img :width="$route.path.includes('technologyPromotion') ? '70%' : '50%'" src="../assets/images/jineng.png" alt=""></div>
              <div class="btn_title">技术推广</div>
            </router-link>
          </el-col>
          <el-col>
            <router-link to="/onlineVideo" :class="$route.path.includes('onlineVideo') ? 'bottom_btn_active' : 'bottom_btn'">
              <div class="btn_logo"><img :width="$route.path.includes('onlineVideo') ? '70%' : '50%'" src="../assets/images/shipin.png" alt=""></div>
              <div class="btn_title">在线视频</div>
            </router-link>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style scoped lang="scss">

.el-header{
  // background: url('./assets/images/title_logo.png') no-repeat;
  padding: 0 !important;
  width: 100%;
  height: 14vh !important;
  .title_bg{
    position: absolute;
    margin-left: 2%;
  }
}
.el-container.is-vertical{
  height: 100vh;
}
.el-footer{
  padding: 0 !important;
  height: 11vh !important;
  .footer_bg{
    position: absolute;
    bottom: 0;
    margin-left: 10%;
  }
  .el-row{
    width: 76%;
    margin-left: 12%;
    .el-col{
      margin: 0 2.5rem;
    }
   
  }
}
.bottom_btn{
  padding: 0 1rem;
  width: 100%;
  height: 10vh;
  background: url('../assets/images/btn_n.png') no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  display: flex;
  .btn_logo{
    position: relative;
    flex: 2;
    img{
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
  .btn_title{
    flex: 3;
    color: #fff;
    font-weight: bold;
    font-size: 1.7rem;
    line-height: 9vh;
    text-align: center;
  }
}
.bottom_btn_active{
  padding: 0 1rem;
  margin-top: -0.5vh;
  padding-top: 0.5vh;
  width: 100%;
  height: 11vh;
  background: url('../assets/images/btn_s.png') no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  display: flex;
  .btn_logo{
    position: relative;
    flex: 2;
    img{
      position: relative;
      top: 45%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
  .btn_title{
    flex: 3;
    color: #fff;
    font-weight: bold;
    font-size: 2rem;
    line-height: 9vh;
    text-align: center;
  }
}
a{
  text-decoration: none;
}

</style>