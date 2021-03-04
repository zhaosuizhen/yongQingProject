<template>
  <div>
      <div class="right_nav">
        <router-link :to="item.router" v-for="(item,index) in navList" :key="index" :class="$route.path.includes(item.router) ? 'nav_item_active': 'nav_item'">
            <img v-if="$route.path.includes(item.router)" width="40%" :src="item.img" alt="">
          <h1>{{item.title}}</h1>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
    props: ['navList'],
    data(){
        return{
            
        }
    },
    methods:{
      
    }
}
</script>

<style scped lang="scss">
  .right_nav{
    position: absolute;
    width: 6vw;
    height: 40vh;
    right: 0;
    top: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1{
      color: #fff;
      line-height: 7vh;
      text-align: right;
      padding-right: 0.8vw;
    }
  }
  .nav_item{
    position: relative;
    width: 100%;
    height: 7vh;
    background: url('../assets/images/sj_rbtn.png') no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .nav_item_active{
    position: relative;
    width: 100%;
    height: 7vh;
    background: url('../assets/images/sj_sbtn.png') no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    img{
        position: absolute;
        margin-left: 0.5vw;
        margin-top: 0.7vh;
    }
  }
  a{
    text-decoration: none;
    }
</style>