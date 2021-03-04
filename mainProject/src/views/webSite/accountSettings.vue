<template>
  <div>
      <div>
          <img width="100%" src="../../assets/yongqing_img/banner_2.jpg" alt="">
      </div>
    <div class="webSite-content-total" style="height: 80%;width: 100%;">
      <div class="webSite-content1" style="height: 100%;width: 100%;">
        <div class="webSite-content1-center" style="height: 100%;">
          <el-row class="tac" style="margin-top: 2%;">
            <el-col :span="12">
              <div class="webSitePolicyNewsDetail-site">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>当前位置</el-breadcrumb-item>
                  <el-breadcrumb-item>知识交流社区</el-breadcrumb-item>
                  <el-breadcrumb-item>{{address}}</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
            </el-col>
          </el-row>
          <el-row class="tac">
            <el-col :span="3">
                <el-menu :default-active="address" class="el-menu-vertical-demo" @select='choiceItem'>
                    <el-menu-item index="个人信息" :class="address == '个人信息' ? 'is-active' : ''"><span slot="title">个人信息</span></el-menu-item>
                    <el-menu-item index="我要提问" :class="address == '我要提问' ? 'is-active' : ''"><span slot="title">我要提问</span></el-menu-item>
                    <el-menu-item index="我的问题" :class="address == '我的问题' ? 'is-active' : ''"><span slot="title">我的问题</span></el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="20" style="margin-left: 2%">
                <div class="content">
                    <EditDialog v-if="address == '个人信息'"></EditDialog>
                    <AskQuestions v-if="address == '我要提问'" @goToMyQuestion="goToMyQuestion"></AskQuestions>
                    <MyQuestions v-if="address == '我的问题'"></MyQuestions>
                </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <el-footer style="margin-top:70px" class="webSite-el-footer">
        <el-row class="webSite-el-footer-center">
            <el-col :span="10">
            <p>友情链接</p>
            <p><a class="footer-text" href="http://www.moa.gov.cn/" target="_blank">中华人民共和国农业农村部</a></p>
            <p><a class="footer-text"  href="http://www.agri.cn/" target="_blank">中国农业信息网</a></p>
            <p><a class="footer-text"  href="http://nync.hebei.gov.cn/" target="_blank">河北省农业农村厅</a></p>
            <p><a class="footer-text"  href="http://yongqing.gov.cn/zhengwugongkai/zhengfujiedu/" target="_blank">永清人民政府</a></p>
            </el-col>
        <el-col :span="12">
          <p>
            <i>主管单位：</i><span class="footer-text">河北省永清县农业农村局 </span>
          </p>
          <p>
            <i>地址：</i><span class="footer-text">河北省廊坊市永清县益昌中路235号</span>
          </p>
          <p>
            <i>电话：</i><span class="footer-text">0316-6623391</span>
          </p>
          <p>
            <i>传真：</i><span class="footer-text">0316-6623391</span>
          </p>
          <p>
            <i>技术支持：</i><span class="footer-text">北京旗硕基业科技股份有限公司</span>
          </p>
        </el-col>
            <el-col :span="2" class="footer_logo">
            <img src="../../assets/webSiteImages/footer_logo.png" alt="">
            </el-col>
        </el-row>
    </el-footer>
  </div>
</template>

<script>
import { pageList, details, addComment } from '@/api/knowledgeExchange'
import { imgUrl } from '@/util/util'
import EditDialog from './editDialog'
import AskQuestions from './askQuestions'
import MyQuestions from './myQuestions'
export default {
    data(){
        return{
            id: null,
            name: '',

            id: null,
            name: '',
            image: null,
            showText: false,
            showComment:false,
            address: '个人信息',
            type: 1,
            submit_content: '',
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
                  //   ['image','video']    //上传图片、上传视频
                  ]
              }

            },
        }
    },
    components:{
        EditDialog,
        AskQuestions,
        MyQuestions,
    },
    async created(){
        
    },
    mounted(){
        this.getUserInFo()
        if(!this.id){
            this.$router.push('/knowledgeExchange')
        }
    },
    methods:{
        //获取用户信息
        getUserInFo(){
            this.id = sessionStorage.getItem('userInfo_id')
            this.name = sessionStorage.getItem('userInfo_name')
            this.image = sessionStorage.getItem('userInfo_image')
        },
        //选择菜单
        choiceItem(index){
            this.showText = false
            this.commentList = []
            if(index == '蔬菜'){
                this.type = 1
            }else if(index == '水果'){
                this.type = 2
            }else if(index == '畜牧'){
                this.type = 3
            }else if(index == '水产'){
                this.type = 4
            }
            this.address = index
        },
        //新增问题完成
        goToMyQuestion(){
            this.address = '我的问题'
        },
    },
}
</script>

<style scoped lang="scss">
.question_comtent{
    text-align: left;
    text-indent: 2em;
}
.answer_btn{
    background:#00B096;
    position: absolute;
    right: 30px;
}
.look_comment_btn{
    background:#00B096;
    position: absolute;
    right: 30px;
}
.submit_btn{
    background:#00B096;
    position: absolute;
    margin-top:20px;
    right: 30px;
}
.commentList{
    margin-top: 80px;
    margin-bottom: -70px;
    background: #F7F7F7;
    height: 200PX;
    padding: 10px;
    .header{
        position: relative;
        padding-left: 70px;
        height: 60px;
        line-height: 60px;
        text-align: left;
        .img_box{
            position: absolute;
            top: 0;
            left: 0;
            width: 60px;
            height: 60px;
            border-radius: 30px;
            overflow: hidden;
        }
    }
    .content{
        margin-top: 20px;
        height: 140px;
        text-align: left;
    }
}
</style>