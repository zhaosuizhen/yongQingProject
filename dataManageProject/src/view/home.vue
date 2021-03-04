<template>
  <div>
        <el-header style="background:#1B3B62">
            <el-row style="line-height: 60px;color: #fff;">
                <el-col :span="20"><h1>数字农业数据管理系统</h1></el-col>
                <!-- <el-col :span="4">{{year}}.{{month}}.{{date}} 周{{week}}</el-col> -->
                <el-col style="cursor: pointer;" :span="2"><span @click="backHome" style="width:100%;height:100%;display: block;"><i class="el-icon-s-home"></i>平台主页</span></el-col>
                <el-col :span="2">
                    <div style="position: absolute;">
                        <el-dropdown>
                            <el-button style="background:#1B3B62;border:0;color:#fff;font-size:16px">
                                欢迎您{{userAccount}}<i v-if="userAccount" class="el-icon-arrow-down el-icon--right"></i>
                            </el-button>
                            <el-dropdown-menu slot="dropdown" v-if="userAccount">
                                <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-col>
            </el-row>
        </el-header>

        <el-container>
            <el-aside width="200px">
                <el-menu default-active="1" class="el-menu-vertical-demo" router >
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>数据资源目录</span>
                        </template>
                        <el-menu-item index="catalog" :class="($route.path == '/catalog') ? 'is-active' : ''">数据目录</el-menu-item>
                        <el-menu-item index="release" :class="($route.path == '/release') ? 'is-active' : ''">数据发布</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>数据存储管理</span>
                        </template>
                        <el-menu-item index="/serverInfo" :class="($route.path == '/serverInfo') ? 'is-active' : ''">服务器状态</el-menu-item>
                        <el-menu-item index="/dataBackups" :class="($route.path == '/dataBackups') ? 'is-active' : ''">数据备份</el-menu-item>
                        <el-menu-item index="/dataReduction" :class="($route.path == '/dataReduction') ? 'is-active' : ''">数据还原</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>数据安全管理</span>
                        </template>
                        <el-menu-item index="/interfacePublishing" :class="($route.path == '/interfacePublishing') ? 'is-active' : ''">接口发布</el-menu-item>
                        <el-menu-item index="/interfaceAccount" :class="($route.path == '/interfaceAccount') ? 'is-active' : ''">接口账号</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>数据交换管理</span>
                        </template>
                        <el-menu-item index="/databaseAccess" :class="($route.path == '/databaseAccess') ? 'is-active' : ''">数据库接入配置</el-menu-item>
                        <el-menu-item index="/dataImport" :class="($route.path == '/dataImport') ? 'is-active' : ''">数据导入配置</el-menu-item>
                        <el-menu-item index="/dataClean" :class="($route.path == '/dataClean') ? 'is-active' : ''">数据清洗配置</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>数据分析挖掘管理</span>
                        </template>
                        <el-menu-item index="userBehaviorAnalysis" :class="($route.path == '/userBehaviorAnalysis') ? 'is-active' : ''">用户行为分析</el-menu-item>
                        <el-menu-item index="resourceMaintenance" :class="($route.path == '/resourceMaintenance') ? 'is-active' : ''">资源专题维护</el-menu-item>
                        <el-menu-item index="5-2">可视化系统定制</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
        year: null,
        month: null,
        date: null,
        week: null,
        openItem:'1',
        userAccount: ''
    }
  },
  methods:{
      //登出
      logOut(){
          sessionStorage.setItem('userAccount', '')
          sessionStorage.setItem('authToken', '')
          location.href = 'http://39.104.114.103:8082/home/#/login'
      },
      //返回主页
      backHome(){
        //   console.log(123123)
          location.href = 'http://39.104.114.103:8082/home/#/home'
      },
      //获取当前时间
      getTime(){
          this.year = new Date().getFullYear()
          this.month = (new Date().getMonth() + 1) < 10 ? `0${new Date().getMonth() + 1}`: new Date().getMonth() + 1
          this.date = new Date().getDate()
          if (new Date().getDay() == 1){
          this.week = '一'
          }else if (new Date().getDay() == 2){
              this.week = '二'
          }else if (new Date().getDay() == 3){
              this.week = '三'
          }else if (new Date().getDay() == 4){
              this.week = '四'
          }else if (new Date().getDay() == 5){
              this.week = '五'
          }else if (new Date().getDay() == 6){
              this.week = '六'
          }else if (new Date().getDay() == 0){
              this.week = '日'
          }
      },
  },
  async mounted(){
      if(this.$route.path == '/catalog' || this.$route.path == '/release'){
          this.openItem = '1'
      }
      console.log(this.$route.path)
      //获取当前时间
      await this.getTime()
  },
  created(){
      this.userAccount = sessionStorage.getItem('userAccount')
  }
}
</script>

<style scoped lang="scss">
.el-menu-item.is-active{
    background: #409EFF !important;
    color: #fff;
    border-radius: 5px;
}
.el-container{
    height: calc(100vh - 80px) !important;
}
.el-dropdown-menu{
    background: #1B3B62 !important;
    top: 40px !important;
}
.el-dropdown-menu__item{
    color: #fff !important;
}
</style>