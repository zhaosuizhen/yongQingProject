<template>
  <div>
      <!-- <div class="right_top_box">
        <h1>三 化 体 系</h1>
      </div> -->

      <router-view></router-view>

      <RightNav :navList='navList'></RightNav>
  </div>
</template>

<script>
import RightNav from '@/components/rightNav'
export default {
  data(){
    return{
      navList:[
        {
          title: '蔬菜',
          router: '/dataAnalysis/vegetable',
          img: require('../../assets/images/shucai.png')
        },
        {
          title: '水果',
          router: '/dataAnalysis/fruit',
          img: require('../../assets/images/shuiguo.png')
        },
        {
          title: '畜牧',
          router: '/dataAnalysis/animalHusbandry',
          img: require('../../assets/images/xumu.png')
        },
        {
          title: '水产',
          router: '/dataAnalysis/aquaticProducts',
          img: require('../../assets/images/shuichan.png')
        },
      ]
    }
  },
  components: {
    RightNav
  },
}
</script>

<style scoped lang="scss">
  .right_top_box{
    position: absolute;
    width: 7vw;
    height: 5vh;
    background: url('../../assets/images/zhishi_zhankai.png') no-repeat;
    background-size: 100% 100%;
    top: 1.5vh;
    right: 1vw;
    h1{
      text-align: center;
      line-height: 5vh;
      color: #fff;
      text-shadow: 0px 0px 8px #000 !important;
    }
  }
</style>