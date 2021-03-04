<template>
  <div>
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
          router: '/knowledgeExchange/vegetable',
          img: require('../../assets/images/shucai.png')
        },
        {
          title: '水果',
          router: '/knowledgeExchange/fruit',
          img: require('../../assets/images/shuiguo.png')
        },
        {
          title: '畜牧',
          router: '/knowledgeExchange/animalHusbandry',
          img: require('../../assets/images/xumu.png')
        },
        {
          title: '水产',
          router: '/knowledgeExchange/aquaticProducts',
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

<style>

</style>