<template>
  <el-row class="clearfix">
    <div class="dialog-content">
      <div class="login-main">
        <i @click="closeDialog" class="el-icon-close close_btn"></i>
        <div class="left_img">
          <img style="display:block;" width="60%" src="../../assets/yongqing_img/15.png" alt="">
        </div>
        <div class="right_form">
          <h1>用户登录</h1>
          <el-form class="demo-ruleForm" :rules="rules" ref="loginForm" :model="loginForm">
            <el-form-item label="用户名" prop="userAccount" style="margin-bottom: 10px">
              <el-input v-model="loginForm.userAccount" auto-complete="off" @keydown.enter.native="userLogin"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="userPassword">
              <el-input type="password" v-model="loginForm.userPassword" auto-complete="off" @keydown.enter.native="userLogin"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button style="width: 100%;margin-top:20px;background:#00B197" type="success"  @click="userLogin">登 录</el-button>
            </el-form-item>
          </el-form>
        </div>
        
      </div>
    </div>
  </el-row>
</template>

<script type="text/ecmascript-6">
import { login, details, modifyPersonalInformation} from '@/api/userInfo'
  export default {
    data() {
      return {
        loginForm: {
          userAccount: '',
          userPassword: '',
        },
        rules: {
          userAccount: [
            { required: true, message: '用户名不能为空', trigger: 'change' }
          ],
          userPassword: [
            { required: true, message: '密码不能为空', trigger: 'change' }
          ],
        }
      }

    },
    methods: {
      //关闭弹窗
      closeDialog(){
        this.$emit('closeLoginDialog')
      },
      async userLogin(){
        this.$refs['loginForm'].validate(async (valid) => {
          if (valid) {

            let Base64 = require('js-base64').Base64
          // console.log(Base64.encode('123456'))    //加密
          // console.log(Base64.decode('MTIzNDU2'))    //解密
            let res = await login(
              {
                phone: this.loginForm.userAccount,
                password: this.loginForm.userPassword
              }
            )
            let type = (res.data.msg.includes('success') || res.data.msg.includes('成功')) ? 'success' : 'warning'
            let message = (type == 'success') ? '账号登陆成功' : res.data.msg
            this.$message({
              message,
              type
            })
            if(type == 'success'){
              this.$emit('closeLoginDialog', res.data.data.user, res.data.data.roleName)
            }
            
          } else {
            return false;
          }
        })
        
      }
    },
    mounted() {

    }
  }

</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .login-main{
    .right_form{
      position: absolute;
      width: 40%;
      height: 100%;
      top: 0;
      right: 0;
      padding: 8% 5%;
      box-sizing: border-box;
      h1{
        margin-bottom: 20px;
      }
    }
  }
  .close_btn{
    position: absolute;
    top: 5px;
    right: 30px;
    font-size: 30px;
    cursor: pointer;
    z-index: 99;
  }
</style>
