<template>
    <div id="login">

        <div class="login_header">永清县数字农业信息资源平台</div>
        
        <div class="login-main">
            <div style="width: 100%" class="login-title">
                <div class="login-title">
                    <!-- &lt;!&ndash;<img src="../images/login-logo.png" alt="">&ndash;&gt; -->
                    用户登录
                </div>
            </div>
            <div class="login-form">
                <form class="form">
                    <div class="input-div">
                        <div class="icon_text"><i class="el-icon-user"></i></div>
                        <input type="text"  @keyup.enter="loginSubmit"  v-model="loginForm.phoneNo" class="input username" name="username" placeholder="请输入账号" value="">
                    </div>
                    <div class="input-div">
                        <div class="icon_text"><i class="el-icon-lock"></i></div>
                        <input type="password" @keyup.enter="loginSubmit" v-model="loginForm.userPassword" class="input password" name="password" placeholder="请输入密码" value="">
                    </div>
                    <el-row class="row">
                        <el-col :span="14">
                            <div style="z-index:99" class="icon_text icon_text_code"><i class="el-icon-key"></i></div>
                            <input type="text" @keyup.enter="loginSubmit" v-model="loginForm.code" class="input code" name="code" value=""  placeholder="请输入验证码">
                        </el-col>
                        <el-col :span='10'>
                            <img :src="loginForm.codeImg" @click="reloadCode" style="width:80%;height:38px;margin-left:5%"/>
                        </el-col>
                        
                    </el-row>
                    <el-row>
                        <el-button class="login-btn" type="primary" @click="loginSubmit" v-loading="listLoading">登录</el-button>
                    </el-row>
                    <el-row class="row">
                        <el-checkbox label="记住密码" v-model="rememberMe" class="rememberMe"></el-checkbox>
                    </el-row> 
                    <div id="pwdTips" class="tips">{{msg}}</div>
                </form>
            </div>  
        </div>

        <div class="login_footer">
            <p>永清县农村农业局</p>
        </div>
       
    </div>
</template>
<script>
import { getCodeImg, login } from "@/utils/api/login"
import { getmanuList } from "@/utils/api/home"
import { visitsCount } from "@/utils/api/burying"
import Crypto from "../assets/js/crypto";
let Base64 = require('js-base64').Base64
export default {
    name:'login',
    data() {
        return{
            logining: false,  
                 loginForm: {  
                     phoneNo:  '',  
                     userPassword: '',
                     code:'',
                     codeImg:''
                 },  
                //  image:{
                //      logo:require('../assets/image/logo.png'),
                     
                //  },
                 msg: '',  
                 checked: false,  
                 phoneDisabled: false,  
                 passwordDisabled: false,  
                 numberDisabled: false ,
                 rememberMe: false, //记住密码 true -记住 false -不记住
                 timestamp:'',//当前时间戳
                 listLoading:false
        }
    },
    mounted(){
        this.timestamp=new Date().getTime()+'';
        this.getCodeImg(); //获取验证码
        this.getCookie();
    },
    methods:{
        loginSubmit() {  
            if (this.loginForm.phoneNo === '' && this.loginForm.userPassword === '') {  
                this.msg = "请输入用户名和密码";  
                return;  
            } else if (this.loginForm.phoneNo == '') {  
                this.msg = "请输入手机号";  
                return;  
            } else if (this.loginForm.userPassword == '') {   
                this.msg = "请输入密码";  
                return; 
            }
            this.listLoading = true;
           this.login()
          
        },
        async login () {
            const res = await login({
                phone: this.loginForm.phoneNo,  
                password: this.loginForm.userPassword,
                captcha:this.loginForm.code,
                rememberMe:this.rememberMe,
                timestamp:this.timestamp,
            })
            //登陆埋点
            if(res.data.code == 0){
                await visitsCount({username: this.loginForm.phoneNo})
            }
            if(res.data.code == 0){
                sessionStorage.setItem("phoneNo", this.loginForm.phoneNo);  
                sessionStorage.setItem("authToken", res.data.data.token); //获取token  
                sessionStorage.setItem("userAccount",res.data.data.user.userAccount); 
                sessionStorage.setItem("userId",res.data.data.user.userId); 
                if(this.rememberMe){   
                    sessionStorage.setItem("userPassword", this.loginForm.userPassword);      
                    sessionStorage.setItem("rememberMe",true); 
                    this.setCookie(this.loginForm.phoneNo,this.loginForm.userPassword,this.rememberMe,30)
                }else{
                    sessionStorage.setItem("userPassword", '');      
                    sessionStorage.setItem("rememberMe",false); 
                    this.clearCookie()
                }
                this.getmanuList();

            }else if(res.data.code== -1 || res.data.code== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
                this.listLoading = false;
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
                this.listLoading = false;
            } 
        },
         async getmanuList(){
            const res = await getmanuList({
                phone: sessionStorage.getItem("phoneNo"),
            })
            if(res.data.code == 0){
                this.listLoading = false;
                this.systemList = res.data.data;
                //若菜单只有一个，直接跳转
                if(this.systemList.length === 1){
                    let firstMenuId = this.systemList[0].menuId; //选中菜单id
                    //let authToken = sessionStorage.getItem("authToken");  //加密
                    let authToken = Base64.encode(sessionStorage.getItem("authToken")) 
                   // let authToken = Crypto.encrypt(sessionStorage.getItem("authToken"),'abcdeFgabctoken1');  //加密  
                    let phoneNo = Crypto.encrypt(sessionStorage.getItem("phoneNo"),'abcdefgabcdefg99');  //加密  
                   // let phoneNo = sessionStorage.getItem("phoneNo")
                    let userAccount = Crypto.encrypt(sessionStorage.getItem("userAccount"),'abcdefgabcdefg88');
                    let userId = sessionStorage.getItem("userId")
                    window.location.href=`${this.systemList[0].menuUrl}?firstMenuId=${firstMenuId}&authToken=${authToken}&phoneNo=${phoneNo}&userAccount=${userAccount}&userId=${userId}`;
                }else{
                    this.$router.push({path: '/home'}); 
                }
            }else if(res.data.code== -1 || res.data.code== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
                this.listLoading = false;
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
                this.listLoading = false;
            } 
        } ,
         //设置cookie
        setCookie(c_phone, c_pwd,c_remenber, exdays) {
            var exdate = new Date(); //获取时间
            exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
            //字符串拼接cookie
            window.document.cookie = "userPhone" + "=" + c_phone + ";path=/;expires=" + exdate.toGMTString();
            window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
            window.document.cookie = "userRemenber" + "=" + c_remenber + ";path=/;expires=" + exdate.toGMTString();
        },
        //读取cookie
        getCookie: function() {
            if (document.cookie.length > 0) {
                var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
                for (var i = 0; i < arr.length; i++) {
                    var arr2 = arr[i].split('='); //再次切割
                    //判断查找相对应的值
                    if (arr2[0] == 'userPhone') {
                        this.loginForm.phoneNo = arr2[1]; //保存到保存数据的地方
                    } else if (arr2[0] == 'userPwd') {
                        this.loginForm.userPassword = arr2[1];
                    }else if (arr2[0] == 'userRemenber') {
                        this.rememberMe = arr2[1];
                        if( this.rememberMe == 'true'){
                            this.rememberMe = true;
                        }else{
                            this.rememberMe = false;
                        }
                    }
                }
            }
        },
        //清除cookie
        clearCookie: function() {
            this.setCookie("", "","", -1); //修改2值都为空，天数为负1天就好了
        },

        async getCodeImg () {
            
            const res = await getCodeImg({timestamp:this.timestamp}); 
            let data = res.data;
            console.log(res);
            this.loginForm.codeImg  = 'data:image/png;base64,' +btoa(new Uint8Array(data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
            console.log(this.loginForm.codeImg);
      },
        
        //点击刷新验证码图片
        reloadCode() {
            this.getCodeImg();
        },

    }
}
</script>
<style scoped>
    #login{
        width: 100%;
        height: 100%;
        background-image: url('../assets/images/stx_bg.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .logo-1{
        position: absolute;
        top: 5%;
        left: 5%;
    }
    .login-main {  
        position: absolute;  
        width: 400px;  
        height: 450px;  
        background: #fff;
        border-radius: 10px;  
        right: 10%;
        margin-left: -200px;
        top: 20%;
        /* background-image: url('../assets/images/login_bg.png');
        background-repeat: no-repeat;
        background-size: 100% 100%; */
     }  

     .login-title {  
        text-align: center;  
        font-size: 30px;  
        letter-spacing: 1px;  
        color: #00B094;  
        height: 90px;  
        line-height: 90px;  
        font-weight: 700;
        /* margin-top: 20px; */
     }  

     .login-form {  
        padding: 10px 30px 0;  
     }  

     .login-user, .login-pwd {  
        margin-bottom: 40px;  
     }  
     .username{
        /* background: url("../assets/images/user_name.png") !important;
        background-size: 100% 100% !important;
        background-repeat: no-repeat !important; */
        margin-bottom: 35px !important;
     }
    .password{
        /* background: url("../assets/images/password.png");
        background-size: 100% 100%;
        background-repeat: no-repeat; */
        margin-bottom: 35px;
    }

    .login-btn {  
        display: block;  
        padding: 10px 40px;  
        margin: 30px auto 0;  
        width: 90%;
        font-size: 18px;
        background: #00B094;
    }  
    .input{
        position: relative;
        padding-left: 60px;
        width: 70%;
        margin-left: 5%;
        height: 46px;
        line-height: 46px;
        border: 1px solid #DCDFE6;
        border-radius: 5px;
        /* border: none!important; */
        /* outline: none; */
        /* color: #fff; */
    }
    .input-div{
        position: relative;
    }
    .rememberMe{
        margin-top: 10px;
        color: #00B094;
    }

    .tips {  
        color: #f56c6c;  
        font-size: 14px;  
        display: inline-block;
        width: 100%;
        text-align: center;
    }  
    .row{
        width:90% !important;
        margin-left:5% !important;
    }
    .login_header{
        position: absolute;
        top: 5%;
        left: 5%;
        font-size: 50px;
        font-weight: bold;
        color: #00B094;
    }
    .login_footer{
        position: absolute;
        bottom: 5%;
        width: 100%;
        text-align: center;
        line-height: 30px;
    }
    .code{
        height:36px;
        line-height:36px;
        /* width: 100%; */
        margin-left: 0;
        padding-left: 60px;
    }
    .icon_text{
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        position: absolute;
        top: 3px;
        left: 27px;
        z-index: 99;
        font-size: 25px;
    }
    .icon_text_code{
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        position: absolute;
        top: 0px;
        left: 12px;
        z-index: 99;
    }

</style>