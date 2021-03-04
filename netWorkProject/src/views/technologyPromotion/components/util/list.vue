<template>
  <div class="main">
      <template v-if="!$route.path.includes('content')">
            <div class="tableList" v-for="(item,index) in list" :key="index">
                <p>
                    <span @click="goToContent(index)" class="title">{{item.title}}</span>
                    <span class="date">{{item.date}}</span>
                </p>
            </div>
      </template>
      <template v-else>
          <router-view></router-view>
      </template>
  </div>
</template>

<script>
export default {
    props:['list'],
    data(){
        return{
            
        }
    },
    methods:{
        goToContent(index){
            this.$router.push({
                path: `${this.$route.path}/content`, 
                query: { 
                    list: this.list,
                    index
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
.main{
  position: relative;
  padding: 2vh 2vw;
  margin-top: 2vh;
  left: 10vw;
  width: 80vw;
  height: 70vh;
  background: rgba($color: #366A7F, $alpha: 0.5);
  border-radius: 8px;
  .tableList{
      position: relative;
      height: 6.4vh;
      border-bottom: 1px dashed #1E8996;
      p{
          line-height: 6.4vh;
          .title{
              float: left;
              font-weight: bold;
              font-size: 1.6rem;
              color: #b9df0a;
              cursor: pointer;
          }
          .date{
              float: right;
              color: #fff;
          }
      }
  }
  .tableList:last-child{
      border: none;
  }
}
</style>