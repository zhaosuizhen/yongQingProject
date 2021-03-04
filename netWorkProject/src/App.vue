<template>
  <div id="app">
    <div class="backHomeBtn" @click="backHome">
      <h1>返 回 主 页</h1>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods:{
    backHome(){
      location.href = "http://39.104.114.103:8082/home/#/home"
    }
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;box-sizing: border-box;
}
body{
  height: 100vh;
  background: url('./assets/images/home_bg.png') no-repeat;
  background-size: 100% 100%;
  overflow-x: hidden;
}
::-webkit-scrollbar { 
    display: none; 
}
.backHomeBtn{
  position: absolute;
  width: 7vw;
  height: 5vh;
  background: url('./assets/images/zhishi_zhankai.png') no-repeat;
  background-size: 100% 100%;
  top: 1.5vh;
  right: 1vw;
  z-index: 999;
  cursor: pointer;
  h1{
    text-align: center;
    line-height: 5vh;
    color: #fff;
    text-shadow: 0px 0px 8px #000 !important;
  }
}
</style>
