<template>
  <div class="webSite-body">
    <el-container>
      <el-header class="webSite-el-header">
        <div class="webSite-header-center">
          <img class="logo_img" src="../../assets/yongqing_img/logo.png" alt="">
          <div class="webSite-logo">
            <p>永清农业数据资源服务平台</p>
          </div>

          <ul class="webSite-menu" @click="selectMenu">
            <router-link to="/newAbout" tag="li"><span>首页</span></router-link>
            <router-link to='/baseData' tag='li'><span>农业资源专题</span></router-link>
            <router-link to='/infoService' tag='li'><span>农业天地</span></router-link>
            <router-link :class="$route.path.includes('accountSettings') || $route.path.includes('knowledgeExchange') ? 'router-link-active' : ''" to="/knowledgeExchangeList" tag='li'><span>知识交流社区</span></router-link>
            <li class="userInfo">
              <div class="userImg">
                <img width="100%" :src="image == null ? defauletUserImg : image" alt="">
              </div>
              <span v-if="!id" @click="login">登录账号</span>
              <template v-else>
                <el-dropdown>
                  <span class="el-dropdown-link">
                    {{name}}<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="goToAccountSettings">账号设置</el-dropdown-item>
                    <el-dropdown-item @click.native="logOut">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </template>
              <!-- <span v-else @click="edit">{{name}}</span> -->
            </li>
            <li style="background:#00B097;padding-bottom:0;margin-bottom:0;margin-right:0px;height:90px;">
              <span @click="backToHome" style="color:#fff" >
                <i class="el-icon-s-home"></i>
                <span style="color:#fff">返回主页</span>
              </span>
            </li>
            <!-- <div style="clear: both"></div> -->

          </ul>
        </div>
      </el-header>
      <el-main class="webSite-el-main">
        <router-view></router-view>
      </el-main>
    </el-container>

    <!-- 登录弹窗页面-->
    <el-dialog width="50%" :visible.sync="entryLogin" :show-close="false" :close-on-click-modal="false">
      <v-login-dialog v-if="entryLogin" @closeLoginDialog="closeLoginDialog"></v-login-dialog>
    </el-dialog>

    <!-- 修改账号信息页面 -->
    <el-dialog width="50%" :visible.sync="entryEdit" :show-close="false" :close-on-click-modal="false">
      <v-edit-dialog v-if="entryEdit" @closeEditDialog="closeEditDialog"></v-edit-dialog>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import login from "./loginDialog";
import edit from './editDialog'
import { imgUrl } from '@/util/util'
import { hitsCount } from '@/api/burying'
export default {
  components: {
    "v-login-dialog": login,
    "v-edit-dialog": edit,
  },
  name: "home",
  data() {
    return {
      timer:null,   //定时器
      id: null,
      name: '',
      image: null,
      userInfo:{},//用户信息
      isLogin: false,
      defauletUserImg: require('@/assets/yongqing_img/defaultUserImg.png'),
      userImage: null,
      entryLogin: false, //登录界面是否显示
      entryEdit: false //登录界面是否显示
    };
  },
  methods: {
    //账号设置
    goToAccountSettings(){
      this.$router.push('accountSettings')
    },
    //退出登录
    logOut(){
      sessionStorage.removeItem('userInfo_id')
      sessionStorage.removeItem('userInfo_name')
      sessionStorage.removeItem('userInfo_image')
      sessionStorage.removeItem('userType')
      this.getUserInFo()
      this.$message({
        message:'退出登录成功',
        type: 'success'
      })
      this.$router.push('/knowledgeExchange')
    },
    //获取用户信息
    getUserInFo(){
        this.id = sessionStorage.getItem('userInfo_id')
        this.name = sessionStorage.getItem('userInfo_name')
        this.image = sessionStorage.getItem('userInfo_image')
    },
    closeLoginDialog(obj, userType){
      this.entryLogin = false
      if(obj){
        sessionStorage.setItem("userInfo_id", obj.userId)
        sessionStorage.setItem("userInfo_name", obj.userAccount)
        sessionStorage.setItem("userType", userType)
        sessionStorage.setItem("phoneNo", obj.phoneNo)
        if(obj.headIcon){
          sessionStorage.setItem("userInfo_image", imgUrl + obj.headIcon)
        }
        
        this.getUserInFo()
        this.userInfo = obj
        this.isLogin = true
        this.userImage = `${imgUrl}${obj.headIcon}`
      }
    },
    closeEditDialog(){
      this.entryEdit = false
    },
    backToHome(){
      window.location.href = 'http://39.104.114.103:8082/home/#/home';
    },
    login(){
      this.entryLogin = true
    },
    edit(){
      this.entryEdit = true
    },
    async selectMenu(e){
      let moduleName = null
      if(e.target.innerHTML == '首页'){
        moduleName = e.target.innerHTML
      }else if(e.target.innerHTML == '农业资源专题'){
        moduleName = e.target.innerHTML
      }else if(e.target.innerHTML == '农业天地'){
        moduleName = e.target.innerHTML
      }else if(e.target.innerHTML == '知识交流社区'){
        moduleName = e.target.innerHTML
      }
      if(moduleName){
        await hitsCount({
            moduleName,
            platformType: '1'
        })
      }else{
        return
      }
    }
  },
  mounted() {
    this.getUserInFo()
    setInterval(() => {
      this.getUserInFo()
    },100)
  },
  created(){
    hitsCount({
            moduleName: '首页',
            platformType: '1'
        })
  }
};
</script>
<style lang='scss'>
  .el-form-item__label:before {
    display: none;
  }
  .el-dialog__header{
    padding: 0;
  }
  .el-dialog__body{
    padding: 0;
  }
</style>

