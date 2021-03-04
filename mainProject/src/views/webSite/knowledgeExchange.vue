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
                    <el-menu-item :class="this.address == '蔬菜' ? 'is-active' : ''" index="蔬菜"><span slot="title">蔬 菜</span></el-menu-item>
                    <el-menu-item :class="this.address == '水果' ? 'is-active' : ''" index="水果"><span slot="title">水 果</span></el-menu-item>
                    <el-menu-item :class="this.address == '畜牧' ? 'is-active' : ''" index="畜牧"><span slot="title">畜 牧</span></el-menu-item>
                    <el-menu-item :class="this.address == '水产' ? 'is-active' : ''" index="水产"><span slot="title">水 产</span></el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="20" style="margin-left: 2%">
                <div class="content">
                    <template v-if="userType == '专家'">
                        <el-button v-if="list.id" class="answer_btn" size="mini" type="success" @click="ckick_answer_btn" >{{answer_btn_text}}</el-button>
                    </template>
                    

                    <h1 style="margin-bottom:40px">{{list.title}}</h1>

                    <img width="40%" :src="list.titleImage" alt="">

                    <div style="margin-bottom:40px" class="question_comtent">
                        <span v-html="list.content"></span>
                        <el-button v-if="list.id" class="look_comment_btn" size="mini" type="success" @click="lookComment">{{comment_btn_text}}</el-button>
                    </div>

                    

                    <template v-if="showText">
                        <quill-editor 
                            v-model="submit_content" 
                            ref="myQuillEditor" 
                            :options="editorOption" 
                            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                            @change="onEditorChange($event)">
                        </quill-editor>
                        <el-button class="submit_btn" size="mini" type="success" @click="submitAnswer">提交回答</el-button>
                    </template>
                    
                    <template v-if="showComment">
                        <div class="commentList" v-for="(item,index) in commentList" :key="index">
                            <div class="header">
                                <div class="img_box">
                                    <img width="60" :src="item.image" alt="">
                                </div>
                                <span>{{item.commentUsername}}</span>
                            </div>
                            <div class="content">
                                <p v-html="item.content"></p>
                            </div>
                        </div>
                    </template>
                    

                </div>
            </el-col>
          </el-row>
          <!-- <el-pagination style="margin-top:100px" background layout="prev, pager, next" :total="total" :page-size="1" :current-page="currentPage" @current-change="changePage"></el-pagination> -->
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
export default {
    data(){
        return{
            currentPage: 1,
            total: 0,
            userType: '',
            id: null,
            name: '',
            image: null,
            showText: false,
            showComment:false,
            comment_btn_text: '查看评论',
            answer_btn_text: '我要回答',
            address: '蔬菜',
            type: 1,
            submit_content: '',
            list: {
                answerCount: "",
                commentList: [],
                content: "",
                createTime: "",
                id: null,
                title: "",
                titleImage: "",
                type: "",
                updateTime: "",
                userAccount: "",
                userId: "",
                userImage: ""
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
    components:{
        
    },
    async created(){
        console.log(this.$route.query)
        
        if(this.$route.query.id){
            this.list.id = this.$route.query.id
            this.getDetails(this.list.id)

            if(this.$route.query.type == 1){
                this.address = '蔬菜'
            }else if(this.$route.query.type == 2){
                this.address = '水果'
            }else if(this.$route.query.type == 3){
                this.address = '畜牧'
            }else if(this.$route.query.type == 4){
                this.address = '水产'
            }
        }else{
            //查看问题发布分页
            await this.getPageList(1)
        }
        
        // this.commentUserId = this.$route.query.commentUserId
        // this.commentUsername = this.$route.query.commentUsername
        // this.image = this.$route.query.image
    },
    mounted(){
        this.getUserInFo()
        setInterval(() => {
            this.getUserInFo()
        },100)
    },
    methods:{
        //获取用户信息
        getUserInFo(){
            this.id = sessionStorage.getItem('userInfo_id')
            this.name = sessionStorage.getItem('userInfo_name')
            this.image = sessionStorage.getItem('userInfo_image')
            this.userType = sessionStorage.getItem('userType')
        },
        //选择菜单
        choiceItem(index){
            this.$router.push({
                path: '/knowledgeExchange'
            })
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
            //查看问题发布分页
            this.getPageList(1)
            this.showComment = false
            this.comment_btn_text = this.showComment ? '收起评论' : '查看评论'
            this.showText = false
            this.answer_btn_text = this.showText ? '收起回答' : '我要回答' 
        },
        //查看所有发布的问题
        async getPageList(currentPage){
            let res = await pageList({
                currentPage,
                pageSize: 1,
                type: this.type
            })
            this.total = res.data.data.totalPage
            console.log(res.data.data)
            if(res.data.data.pageData.length){
                this.list = res.data.data.pageData[0]
                this.list.titleImage = imgUrl + this.list.titleImage
                this.getDetails(this.list.id)
            }else{
                this.list = {
                    answerCount: "",
                    commentList: null,
                    content: "",
                    createTime: "",
                    id: null,
                    title: "",
                    titleImage: "",
                    type: "",
                    updateTime: "",
                    userAccount: "",
                    userId: "",
                    userImage: ""
                }
            }
        },
        //翻页
        changePage(val){
                this.commentList = []
            this.getPageList(val)
        },
        //查看问题回复
        async getDetails(id){
            if(id){
                let res = await details({id})
                this.list.title = res.data.data.title
                this.list.content = res.data.data.content
                this.list.titleImage = imgUrl + res.data.data.titleImage
                console.log(res.data.data)
                res.data.data.commentList.forEach((item,index) => {
                    if(item.userImage){
                        res.data.data.commentList[index].image = imgUrl + item.userImage
                    }
                })
                this.commentList = res.data.data.commentList
            }else{
                this.commentList = []
            }
            
        },
        //点击“查看评论”按钮
        async lookComment(){
            await this.getDetails(this.list.id)
            this.showText = !this.showText
            this.showText = !this.showText
            this.showComment = !this.showComment
            this.comment_btn_text = this.showComment ? '收起评论' : '查看评论'
        },
        //点击“我要回答”按钮
        ckick_answer_btn(){
            this.showText = !this.showText
            this.answer_btn_text = this.showText ? '收起回答' : '我要回答' 
        },
        //点击“提交回答”按钮
        async submitAnswer(){
            this.getUserInFo()
            if(!this.id){
                this.$message({
                    message: '请先登录再进行评论',
                    type: 'warning'
                })
                return
            }
            let obj = {
                askQuestionsId: this.list.id,
                commentUserId: this.id,
                commentUsername: this.name,
                content: this.submit_content,
                image: this.image
            }
            let res = await addComment(obj)
            console.log(res.data.msg)
            let type = res.data.msg.includes('成功') ? 'success' : 'warning'
            if(type == 'success'){
                this.submit_content = ''
            }
            this.$message({
                message: res.data.msg,
                type
            })
        },


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