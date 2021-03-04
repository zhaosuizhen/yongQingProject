<template>
    <el-header class="header">
      <el-row>
          <el-col :span="18">
              <h1 style="line-height:60px">农业废弃物（秸秆）追溯系统</h1>
          </el-col>
          <el-col :span="6">
              <el-row>
                  <el-col :class="{'is-active':this.$route.path.includes('realTimeMonitoring'),'item':true}" :span="6">
                      <div @click="goToPage('realTimeMonitoring')">
                          <img src="../assets/images/realTime.png" height="30" alt="">
                          <span>实时监控</span>
                      </div>
                  </el-col>
                  <el-col :class="{'is-active':this.$route.path.includes('equipmentLog'),'item':true}" :span="6">
                      <div @click="goToPage('equipmentLog')">
                          <img src="../assets/images/log.png" height="30" alt="">
                          <span>设备日志</span>
                      </div>
                  </el-col>
                  <el-col :class="{'is-active':this.$route.path.includes('set'),'item':true}" :span="6">
                      <div @mouseenter="showCode" @mouseleave="closeCode">
                          <img src="../assets/images/code.png" height="30" alt="">
                          <span>二维码</span>
                      </div>
                      
                  </el-col>
                  <el-col class="is-active item" :span="6">
                      <p @click="backHomeBtn">
                          <i style="font-size:40px" class="el-icon-s-home"></i>
                          <span>返回主页</span>
                      </p>
                  </el-col>

                  <transition name="code">
                        <div class="img_box" v-show="codeFlag" @mouseleave="closeCode" @mouseenter="showCode">
                            <p><b>司机运输二维码</b></p>
                            <div id="qrcode_before"></div>
                            <p><b>运输完成二维码</b></p>
                            <div id="qrcode_after"></div>
                        </div>
                  </transition>
                
              </el-row>
          </el-col>
      </el-row>
    </el-header>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
    data(){
        return{
            codeFlag: false
        }
    },
    methods: {
        backHomeBtn(){
            location.href = 'http://39.104.114.103:8082/home/#/home'
        },
        goToPage(path){
            console.log(path)
            this.$router.push(path)
        },
        qrcode() {
            let qrcode_before = new QRCode('qrcode_before', {
                width: 132,
                height: 132,
                text: 'http://39.104.114.103:8082/source/index.html#/dataSubmit', // 二维码地址
                colorDark : "#000",
                colorLight : "#fff",
            })
            let qrcode_after = new QRCode('qrcode_after', {
                width: 132,
                height: 132,
                text: 'http://39.104.114.103:8082/source/index.html#/afterTransport', // 二维码地址
                colorDark : "#000",
                colorLight : "#fff",
            })
        },

        showCode(){
            this.codeFlag = true
        },
        closeCode(){
            this.codeFlag = false
        },
    },
    mounted () {
        this.qrcode();
    }
}
</script>

<style scoped lang="scss">
.header{
  background: #185e8d;
  color: #FFFFFF;
  height: 60px;
//   line-height: 60px;
}
.item{
    text-align: center;
    cursor: pointer;
    height: 60px;
    font-weight: bold;
    font-size: 14px;
    span{
        position: relative;
        display: block;
    }
    img{
        margin-top: 5px; 
    }
}
.item:hover{
    background-color: #18A4C5;
    // background-image: linear-gradient(rgba(255,255,255,0.1), rgba(42,82,131,1)) !important;
    border-bottom: 4px solid #00A0EA;
}
.is-active{
    background-color: #18A4C5;
    // background-image: linear-gradient(rgba(255,255,255,0.1), rgba(42,82,131,1)) !important;
    border-bottom: 4px solid #00A0EA;
}
.img_box{
    position: absolute;
    width: 150px;
    height: 350px;
    top: 60px;
    right: 90px;
    background: #fff;
    z-index: 9998;
    #qrcode_before{
        position: relative;
        // top: 40px;
        left: 9px;
        z-index: 9999;
    }
    #qrcode_after{
        position: relative;
        // top: 80px;
        left: 9px;
        z-index: 9999;
    }
    p{
        color: #000;
        position: relative;
        top: 0;
        text-align: center;
        padding: 10px 0 5px;
    }
}


.code-enter-active, .code-leave-active {
    transition: opacity 0.7s
}
.code-enter, .code-leave-to /* .code-leave-active, 2.1.8 版本以下 */ {
    opacity: 0
}
</style>