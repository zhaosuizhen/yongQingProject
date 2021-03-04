<template>
  <div>
        <div class="left_nav_box" v-if="btn_flag" @click="goToPage">
          <div :class="{nav_item:true,active:($route.path == '/visManageWX')}" @click="goToPage('/visManageWX')">新型经营主体</div>
          <div :class="{nav_item:true,active:($route.path == '/visLivestockWX')}" @click="goToPage('/visLivestockWX')">生猪养殖场</div>
          <div :class="{nav_item:true,active:($route.path == '/visOphiopogonWX')}" @click="goToPage('/visOphiopogonWX')">麦冬种植</div>
          <div :class="{nav_item:true,active:($route.path == '/visGeographyWX')}" @click="goToPage('/visGeographyWX')">土壤</div>
          <div :class="{nav_item:true,active:($route.path == '/visDiseasesWX')}" @click="goToPage('/visDiseasesWX')">病虫害</div>
        </div>
        <div @click="btn_click" :class="btn_flag ? 'nav_btn_true' : 'nav_btn_false'"></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            btn_flag:true,
        }
    },
    mounted(){
        
    },
    methods:{
        btn_click(){
            this.btn_flag = !this.btn_flag
        },
        goToPage(url){
          this.$router.push(url)
        }
    }
}
</script>

<style scoped>
.left_nav_box{
  width: 20%;
  height: 60%;
  background: url(../../assets/santai_img/nav_list.png) 100% 0/100% 100% !important;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0%,-50%);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
}
.nav_item{
  position: relative;
  width: 90%;
  left: 5%;
  height: 17%;
  /* border: 1px solid #ccc; */
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 0.6rem;
  padding: 20% 20%;
  box-sizing: border-box;
}
.nav_btn_true{
  position: absolute;
  top: 50%;
  left: 19.9%;
  transform: translate(0,-50%);
  width: 3.1%;
  height: 19%;
  background: url(../../assets/santai_img/nav_in.png) no-repeat 100% 0/100% 100%;
  float: left;
  margin-top: 0;
  cursor: pointer;
}
.nav_btn_false{
  position: absolute;
  top: 50%;
  left: -0.1%;
  transform: translate(0,-50%);
  width: 3.1%;
  height: 19%;
  background: url(../../assets/santai_img/nav_out.png) no-repeat 100% 0/100% 100%;
  float: left;
  margin-top: 0;
  cursor: pointer;
}
.active{
    color: #0ECBEB;
}
</style>