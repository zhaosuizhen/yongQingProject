<template>
    <div class="item">
      <h2 style="padding:10px 10px;color:#fff;background:#185E8D">永清秸秆追溯平台</h2>
      <h3 style="text-align:center;padding-bottom:10px;color:#fff;background:#185E8D;margin-bottom:10px">---数据上报</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" style="padding:0 20px;">
          <el-form-item prop="strawType">
              <el-input v-model="ruleForm.strawType">
                <template slot="prepend">种类：</template>
              </el-input>
          </el-form-item>
          <el-form-item  prop="strawWeight">
              <el-input v-model="ruleForm.strawWeight">
                <template slot="prepend">重量：</template>
                <template slot="append">(KG)</template>
              </el-input>
          </el-form-item>
          <el-form-item  prop="licensePlateNumber">
              <el-input v-model="ruleForm.licensePlateNumber">
                <template slot="prepend">车牌：</template>
              </el-input>
          </el-form-item>
          <el-form-item  prop="driverName">
              <el-input v-model="ruleForm.driverName">
                <template slot="prepend">司机：</template>
              </el-input>
          </el-form-item>
          <el-form-item  prop="phoneNumber">
              <el-input v-model="ruleForm.phoneNumber">
                <template slot="prepend">手机：</template>
              </el-input>
          </el-form-item>
          <el-form-item style="text-align:center">
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
      </el-form>
    </div>
</template>

<script>
import { addInfo } from '@/api/dataSubmit'
  export default {
    data() {
        var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入手机号'));
        }
        var reg = new RegExp(/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/)
        if(!reg.test(value)){
            return callback(new Error('请输入正确的手机号'));
        }else{
            callback();
        }
        
      };
      return {
        ruleForm: {
          strawType: '',
          strawWeight: '',
          licensePlateNumber: '',
          driverName: '',
          phoneNumber: ''
        },
        rules: {
          strawType: [
            { required: true, message: '请输入类型', trigger: 'blur' }
          ],
          strawWeight: [
            { required: true, message: '请输入重量', trigger: 'blur' }
          ],
          licensePlateNumber: [
            { required: true, message: '请输入车牌号', trigger: 'blur' }
          ],
          driverName: [
            { required: true, message: '请输入司机名字', trigger: 'blur' }
          ],
          phoneNumber: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { validator: checkPhone, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(async(valid) => {
          if (valid) {
            let res = await addInfo(JSON.stringify(this.ruleForm))
            console.log(res)
            let type = res.data.msg.includes('成功') ? 'success' : 'warning'
            if(type == 'success'){
              this.$message({
                type,
                message: res.data.msg
              })
              this.ruleForm = {
                strawType: '',
                strawWeight: '',
                licensePlateNumber: '',
                driverName: '',
                phoneNumber: ''
              }
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped lang="scss">
h1{
  padding-left: 10px;
  margin-bottom: 15px;
}
.item{
  
}
</style>