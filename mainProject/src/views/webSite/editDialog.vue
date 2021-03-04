<template>
  <div>
    <el-form class="demo-ruleForm" :rules="rules" ref="loginForm" :model="loginForm" label-width="120px">
      <el-form-item label="头像：">
        <el-upload
            :before-upload="beforeUpload"
            :http-request="upLoadImg"
            class="avatar-uploader"
            action=""
            :show-file-list="false">
            <img v-if="imageUrl" :src="showImageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="用户名：" prop="userAccount">
        <el-input v-model="loginForm.userAccount" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="原始密码：" prop="oldPassword">
        <el-input type="password" v-model="loginForm.oldPassword" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="新密码：" prop="newPassword">
        <el-input type="password" v-model="loginForm.newPassword" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="checkPassword">
        <el-input type="password" v-model="loginForm.checkPassword" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item style="margin-top: 50px">
        <el-button type="primary" style="float:left" @click="submitForm('loginForm')">提 交</el-button>
        <el-button type="primary" style="float:right;margin-right:120px" @click="resetForm('loginForm')">重 置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { upload } from '@/api/knowledgeExchange'
import { modifyPersonalInformation } from '@/api/userInfo'
import { imgUrl } from '@/util/util'
export default {
    data(){
      var checkPassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.loginForm.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
        return {
            id: null,
            name: '',
            image: null,
            phoneNo: '',

            imageUrl: '',
            showImageUrl: '',
            loginForm: {
              userAccount: '',
              oldPassword: '',
              newPassword: '',
              checkPassword: '',
            },
            rules: {
            userAccount: [
                { required: true, message: '用户名不能为空', trigger: 'change' }
                ],
                oldPassword: [
                    { required: true, message: '旧密码不能为空', trigger: 'change' }
                ],
                newPassword: [
                    { required: true, message: '新密码不能为空', trigger: 'change' }
                ],
                checkPassword: [
                    { validator: checkPassword, trigger: 'blur' }
                ],
            }
        }
    },
    methods:{
      //获取用户信息
        getUserInFo(){
            this.id = sessionStorage.getItem('userInfo_id')
            this.name = sessionStorage.getItem('userInfo_name')
            this.image = sessionStorage.getItem('userInfo_image')
            this.phoneNo = sessionStorage.getItem('phoneNo')
        },
      //上传图片前，修改文件名
        beforeUpload(file){
            //设置一个时间戳
            const timeStamp = new Date() - 0
            //新建一个可修改文件
            const copyFile = new File([file], `${timeStamp}_${file.name}`)
            this.upLoadImg(copyFile)
            return false
        },
        //上传图片
        async upLoadImg(file){
            let data = new FormData()
            data.append('file',file)
            console.log(file);
            console.log(data.get('file'));
            let res = await upload(data)
            console.log(res.data)
            this.imageUrl = res.data
            this.showImageUrl = imgUrl + res.data
        },
        //提交表单
        submitForm(formName) {
          this.$refs[formName].validate(async (valid) => {
            if (valid) {
              var date = new Date();
              let create_time = `${date.getFullYear().toString()}-${this.add_zeor(date.getMonth() + 1)}-${this.add_zeor(date.getDate())} ${this.add_zeor(date.getHours())}:${this.add_zeor(date.getMinutes())}:${this.add_zeor(date.getSeconds())}`
              let obj = {
                userId: this.id * 1,
                userAccount: this.loginForm.userAccount,
                oldPassword: this.loginForm.oldPassword,
                userPassword: this.loginForm.newPassword,
                headIcon: this.imageUrl,
                phoneNo: this.phoneNo,
                state: '0',
                roleIds: '',
                create_time: create_time
              }
              let res = await modifyPersonalInformation({
                oldPassWord: this.loginForm.oldPassword,
                passWord: this.loginForm.newPassword,
                userAccount: this.loginForm.userAccount,
                userId: this.id * 1,
                headIcon: this.imageUrl
              })
              let type = res.data.data.includes('成功') ? 'success' : 'warning'
              if(type == 'success'){
                this.$message({
                  message: '修改成功，请新重登录',
                  type
                })
                sessionStorage.removeItem('userInfo_id')
                sessionStorage.removeItem('userInfo_name')
                sessionStorage.removeItem('userInfo_image')
                this.getUserInFo()
                this.$router.push('/knowledgeExchange')
              }
              
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        add_zeor(n){ return n < 10 ? '0' + n : n },
        //重置表单
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
    },
    mounted(){
      this.getUserInFo()
    }
}
</script>

<style scoped lang="scss">
.demo-ruleForm{
    padding: 60px 0;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    width: 500px;
}
.close_btn{
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 30px;
    cursor: pointer;
    z-index: 99;
}
.el-icon-plus{
  border: 1px dashed #999 !important;
}
.el-icon-plus:hover{
  border-color: #409EFF !important;
}
.avatar-uploader .el-upload {
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>