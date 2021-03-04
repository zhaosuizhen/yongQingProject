<template>
  <div class="onlineVideo">
    <router-view></router-view>
    <RightNav :navList='navList'></RightNav>
  </div>
</template>

<script>
import RightNav from '@/components/rightNav'
export default {
  data () {
    return {
            navList:[
        {
             title: '蔬菜',
               router: '/onlineVideo/VideoVegetables',
              img: require('../../assets/images/shucai.png')
        },
           {
              title: '水果',
              router: '/onlineVideo/VideoFruit',
              img: require('../../assets/images/shuiguo.png')
            },
      ],
    }
  },
  components: {
    RightNav
  }
}
</script>

<style lang="scss" >
.onlineVideo {
  .right_nav {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  .nav_item_active {
    margin-bottom: 3vh;
  }
  .nav_item {
    margin-bottom: 3vh;
  }
}
</style>