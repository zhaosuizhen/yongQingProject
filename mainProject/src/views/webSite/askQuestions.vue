<template>
  <div>
    <el-form class="demo-ruleForm" :rules="rules" ref="loginForm" :model="loginForm" label-width="120px">
      <el-form-item label="标题：" prop="title" style="margin-bottom: 10px">
        <el-input v-model="loginForm.title" auto-complete="off" ></el-input>
      </el-form-item>
      <el-form-item label="图片：" style="margin-bottom: 10px">
        <el-upload
            :before-upload="beforeUpload"
            :http-request="upLoadImg"
            class="avatar-uploader"
            action=""
            :show-file-list="false">
            <img v-if="showImageUrl" :src="showImageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="分类：" prop="type">
          <el-radio-group v-model="loginForm.type">
          <el-radio label="1">蔬菜</el-radio>
          <el-radio label="2">水果</el-radio>
          <el-radio label="3">畜牧</el-radio>
          <el-radio label="4">水产</el-radio>
          </el-radio-group>
      </el-form-item>
      <el-form-item label="正文：">
          <quill-editor 
              v-model="submit_content" 
              ref="myQuillEditor" 
              :options="editorOption" 
              @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
              @change="onEditorChange($event)">
          </quill-editor>
      </el-form-item>
      <el-form-item style="margin-top: 50px">
        <el-button type="primary" style="float:right" @click="submitForm('loginForm')">提 交</el-button>
        <!-- <el-button type="primary" style="float:right;margin-right:120px">取 消</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { upload, addQuestion } from '@/api/knowledgeExchange'
import { imgUrl } from '@/util/util'
export default {
    data(){
        return {
            userInfo_id: null,
            submit_content: '',
            showImageUrl: '',
            imageUrl: '',
            loginForm: {
            title: '',
            type: '',
            },
            rules: {
                title: [
                    { required: true, message: '用户名不能为空', trigger: 'change' }
                ],
                type: [
                    { required: true, message: '类型不能为空', trigger: 'change' }
                ]
            },
            editorOption: {
                placeholder: "请在这里输入正文",
              modules:{
                toolbar:[
                  ['bold', 'italic', 'underline', 'strike'],    //加粗，斜体，下划线，删除线
                  ['blockquote', 'code-block'],     //引用，代码块
                  [{ 'header': 1 }, { 'header': 2 }],        // 标题，键值对的形式；1、2表示字体大小
                  [{ 'list': 'ordered'}, { 'list': 'bullet' }],     //列表
                  [{ 'script': 'sub'}, { 'script': 'super' }],   // 上下标
                  [{ 'indent': '-1'}, { 'indent': '+1' }],     // 缩进
                  [{ 'direction': 'rtl' }],             // 文本方向
                  [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
                  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],     //几级标题s
                  [{ 'color': [] }, { 'background': [] }],     // 字体颜色，字体背景颜色
                  //   [{ 'font': [] }],     //字体
                  [{ 'align': [] }],    //对齐方式
                  //   ['clean'],    //清除字体样式
                    ['image']    //上传图片、上传视频
                  ]
              }

            },
        }
    },
    methods:{
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
            let res = await upload(data)
            console.log(res)
            this.imageUrl = res.data
            this.showImageUrl = imgUrl + res.data
        },
        //提交表单
        async submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
            if (valid) {
                let res = await addQuestion({
                    userId: this.userInfo_id,
                    title: this.loginForm.title,
                    content: this.submit_content,
                    type: this.loginForm.type,
                    titleImage: this.imageUrl
                })
                let type = res.data.msg.includes('成功') ? 'success' : 'warning'
                if(type == 'success'){
                    this.$message({
                        message: res.data.msg,
                        type
                    })
                    this.$emit('goToMyQuestion')
                }
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        // handleAvatarSuccess(res, file) {
        //     this.imageUrl = URL.createObjectURL(file.raw);
        // },
        // beforeAvatarUpload(file) {
        //     const isJPG = file.type === 'image/jpeg';
        //     const isLt2M = file.size / 1024 / 1024 < 2;

        //     if (!isJPG) {
        //     this.$message.error('上传头像图片只能是 JPG 格式!');
        //     }
        //     if (!isLt2M) {
        //     this.$message.error('上传头像图片大小不能超过 2MB!');
        //     }
        //     return isJPG && isLt2M;
        // },


        onEditorBlur(){
            console.log('失去焦点')
        }, // 失去焦点事件
        onEditorFocus(){
            console.log('获得焦点')
        }, // 获得焦点事件
        onEditorChange(){
            console.log('内容改变')
        }, // 内容改变事件
    
    },
    mounted(){
      this.userInfo_id = sessionStorage.getItem('userInfo_id')
    }
}
</script>

<style scoped lang="scss">
.demo-ruleForm{
    padding: 60px 0;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    // width: 500px;
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
//   text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>