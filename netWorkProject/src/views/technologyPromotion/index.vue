<template>
  <div>
      <div class="right_top_box" v-if="$route.path.includes('content')">
        <h1 @click="goToBack">返 回</h1>
      </div>

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
          title: '育苗',
          router: '/technologyPromotion/growSeedlings',
          img: require('../../assets/images/jishu_yumiao.png')
        },
        {
          title: '农资',
          router: '/technologyPromotion/meansOfAgricultural',
          img: require('../../assets/images/jishu_nongzi.png')
        },
        {
          title: '植保',
          router: '/technologyPromotion/plantProtection',
          img: require('../../assets/images/jishu_zhibao.png')
        },
        {
          title: '养殖',
          router: '/technologyPromotion/breed',
          img: require('../../assets/images/jishu_yangzhi.png')
        },
      ]
    }
  },
  components: {
    RightNav
  },
  methods:{
    goToBack(){
      this.$router.push(this.$route.path.substring(0, this.$route.path.length - 8))
    }
  }
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
      cursor: pointer;
    }
  }
</style>