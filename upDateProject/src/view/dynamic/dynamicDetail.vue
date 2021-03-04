<template>
  <!--园区动态  新增 查看 编辑-->
    <div id="dynamicDetail" class="pageContent" v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div class="titleContent">
                            <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>新闻信息</span>
                            </div>
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="文章标题：" prop="title">
                                <el-input v-model="ruleForm.title" :disabled="urlType" placeholder="请输入文章标题"></el-input>
                            </el-form-item>
                            <el-form-item label="作者：" prop="author">
                                <el-input v-model="ruleForm.author" :disabled="urlType" placeholder="请输入作者"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="农场名称：" prop="farmName">
                                <el-input v-model="ruleForm.farmName" :disabled="urlType" placeholder="请输入农场名称"></el-input>
                            </el-form-item>
                            <el-form-item label="简介：" prop="introduce">
                                <el-input v-model="ruleForm.introduce" :disabled="urlType" placeholder="请输入简介"></el-input> 
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="上传封面：" prop="enterpriseName">
                                <!-- <img :src="item" v-for="(item,index) in ruleForm.coverImg.split(',')" :key="index"/> -->
                                <!-- <el-upload
                                    action="string"
                                    :file-list="showFiles"
                                    list-type="picture"
                                    :http-request="handlePictureCardPreview"
                                   >
                                <i class="el-icon-plus"></i>
                                </el-upload>
                                <el-dialog :visible.sync="dialogVisible">
                                    <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog> -->
                                <el-upload
                                    class="avatar-uploader"
                                    action="string"
                                    :show-file-list="false"
                                    :http-request="handlePictureCardPreview"
                                    :disabled="urlType"
                                    >
                                    <img v-if="imgUrl" :src="imgIp+'/'+imgUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>


                                <!-- <el-upload
    :multiple="false"
    :show-file-list="false"
    :http-request="handleChange"
    action='string'
>
    <el-button size="medium" type="primary">上传文件</el-button>
</el-upload> -->
                            </el-form-item>
                            <el-form-item label="文章内容：" prop="content">
                                <div class="edit_container">
                                    <quill-editor 
                                        v-model="ruleForm.content"
                                        ref="myQuillEditor"
                                        class="editer"
                                        :options="editorOption" @ready="onEditorReady($event)">
                                       

                                    </quill-editor>
                                </div>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-collapse-item>
            </el-collapse>
            <!--自定义表单组件-->
            <Custom-form v-if="formDate.length>0" :formDate.sync = formDate :type='urlType' @customDatavalueChange='customDatavalueChange'></Custom-form>
            <el-row type='flex' justify="center" class="footrBtnGroup" v-if='!urlType'>
            <el-button  type="primary" class="submitBtnMargin" @click="submit">提交</el-button>
            <el-button @click="cancel">取消</el-button>
        </el-row>
        </section>
        
    </div>
</template>
<script>
import { dynamicDetail,dynamicUpdate, dynamicInsert,dynamicUpload } from '@/utils/api/dynamic/dynamic' //商务局---农产品交易价格数据
import {townshipOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
import { quillEditor } from 'vue-quill-editor' //调用编辑器
import { addQuillTitle } from '@/assets/js/quill-title.js'
import '@/assets/css/font.css'
//import api from '@/utils/request'
//  // 自定义字体大小
//   let Size = Quill.import('attributors/style/size')
//   Size.whitelist = ['10px', '12px', '14px', '16px', '18px', '20px']
//   Quill.register(Size, true)

//   // 自定义字体类型
//   var fonts = ['SimSun', 'SimHei', 'Microsoft-YaHei', 'KaiTi', 'FangSong', 'Arial', 'Times-New-Roman', 'sans-serif',
//     '宋体', '黑体'
//   ]
//   var Font = Quill.import('formats/font')
//   Font.whitelist = fonts
//   Quill.register(Font, true)
export default {
    name:'dynamicDetail',
    data() {
        return {
            activeNames: ['1'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            id:'', //数据的id
            imgUrl:'', //图片路径集合
            showFiles:[], //展示文件
            formDate:[], //自定义表单数据，传值给子组件
            ruleForm: {
                township:'', //文章标题：
                dataYear:'', //类型：
                            //简介：
                content:'',   //新闻内容：
            },
            townshipOption:townshipOption, //乡镇
             rules: {
                title: [
                    {required: true, message: '请填写文章标题',trigger: 'blur', }
                ],
                farmName: [
                    {required: true, message: '请填写农场名称',trigger: 'blur', }
                ],
                author: [
                    {required: true, message: '请填写作者',trigger: 'blur', }
                ],
                introduce: [
                    { required: true, message: '请填写新闻简介',trigger: 'blur' }
                ],
                content: [
                    { required: true, message: '请填写文章内容',trigger: 'blur' }
                ]
            },
            dialogImageUrl: '',
            dialogVisible: false,
            editorOption:{
                    placeholder: "请输入新闻内容",
                    modules:{
                        toolbar:[
                            ['bold', 'italic', 'underline', 'strike'],['blockquote', 'code-block'],
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                            [{ 'script': 'sub'}, { 'script': 'super' }],
                            [{ 'indent': '-1'}, { 'indent': '+1' }],
                            [{ 'direction': 'rtl' }] ,
                          //  [{'size':['10px',false,'14px','16px','18px','20px','22px','24px']}],
                            [{ size: ["small", false, "large", "huge"] }], // 字体大小
                            [{ 'color': [] }, { 'background': [] }], 
                            [{ 'align': [] }]
                        ]
                    }
                }
        }
    },
    components:{
        'Custom-form':CustomForm,
        quillEditor,//编辑器
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted(){
        addQuillTitle();
        this.nameFlag = this.activeNames;
        this.urlType = this.$route.query.type == 'detail'?true:false;
        this.miniNav = this.$route.query.toMiniNav; //左上角导航
        this.id = this.$route.query.id; //查看详情数据的id值
        this.initData(); //初始化数据
    },
    methods:{
        onEditorReady(editor) {
            console.log(editor)
        },
        //自定义表单数值更改，父组件同步
        customDatavalueChange(data){
            this.formDate = data;
        },
        //折叠版折叠，打开，图标变化
        handleChange(val){
            if(val instanceof Array){
                val.sort();
                this.nameFlag = val
                console.log(this.nameFlag )
            }else{
                this.nameFlag[0] = val
            }  
        },
        //初始化页面数据
        initData(){
            this.getDataDetail(); //调用初始化接口
        },
        //详情接口，获取详情数据
        async getDataDetail(){
            this.loading = true; //显示加载框
            if(this.$route.query.type === 'add'){ // 新增时没有id，将id置空
                this.id = ''
            }
            let res = await dynamicDetail({id:this.id});
             if(res.data.status== 0){
                this.ruleForm =  res.data.entitys;
                this.imgUrl = this.ruleForm.coverImg


                this.formDate =  res.data.entitys.customDataList; //自定义表单数据
            }else if(res.data.status== -1 || res.data.status== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
            }else if(res.data.status == -2){
                handleCofirm(res.data.msg, 'warning', false).then(() => {
                    window.loginOut();
                })
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.loading = false; //隐藏加载框
        },
        //取消按钮
        cancel(){
            this.$router.go(-1); //返回上一路由
        },
        //提交事件
        async submit(){
            try{
                let valid = await this.$refs.ruleForm.validate();
                if(valid){
                    this.$confirm('确认提交吗？', '提示', {}).then(() => {
                        if(this.$route.query.type === 'add'){
                            this.addData(); //新增数据
                        }else{
                            this.updateData();//更新信息
                        } 
                    })
                }
            }catch(err){
                console.log(err)
            } 
        },
        //编辑接口调用
        async updateData(){
            this.loading = true; //显示加载框
            this.ruleForm.id = this.id; //数据id
            this.ruleForm.coverImg = this.imgUrl;
            this.ruleForm.customDataList = this.formDate;//自定义表单list
            let updateObj = JSON.stringify(this.ruleForm);
            let res = await dynamicUpdate(updateObj);
             if(res.data.status== 0){
                this.$message({
                    message: '编辑成功',
                    type: 'success'
                })
                this.$router.go(-1); //返回上一路由
            }else if(res.data.status== -1 || res.data.status== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
            }else if(res.data.status == -2){
                handleCofirm(res.data.msg, 'warning', false).then(() => {
                    window.loginOut();
                })
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.loading = false; //隐藏加载框
        },
         //新增数据
        async addData(){
            this.loading = true; //显示加载框
            //删除不需要传给后台的值
            delete this.ruleForm.pageSize;
            delete this.ruleForm.currentPage;
            delete this.ruleForm.queryStartTime;
            delete this.ruleForm.queryEndTime;
            delete this.ruleForm.queryKey;
            delete this.ruleForm.isDelete;
            delete this.ruleForm.isCheck;
            delete this.ruleForm.buildUser;
            delete this.ruleForm.checkUser;
             delete this.ruleForm.id //数据id
            this.ruleForm.updateTime = getData(); //更新时间
            this.ruleForm.createTime = getData(); //创建时间
            this.ruleForm.coverImg = this.imgUrl;
            this.ruleForm.customDataList = this.formDate;//自定义表单list
            let addObj = JSON.stringify(this.ruleForm);
            let res = await dynamicInsert(addObj);
             if(res.data.status== 0){
                this.$message({
                    message: '新增成功',
                    type: 'success'
                })
                this.$router.go(-1); //返回上一路由
            }else if(res.data.status== -1 || res.data.status== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
            }else if(res.data.status == -2){
                handleCofirm(res.data.msg, 'warning', false).then(() => {
                    window.loginOut();
                })
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.loading = false; //隐藏加载框
        }, 
        //文件上传
        async handlePictureCardPreview(param) {
            console.log('文件',param)
            let fd = new FormData();
            fd.append('file',param.file);//传文件
            fd.append('folder','dynamic');//传文件
            this.dialogVisible = true;
            let res = await dynamicUpload(fd);

            this.imgUrl = res.data;

            // if(res.data.status== 0){
            //     this.$message({
            //         message: '新增成功',
            //         type: 'success'
            //     })
            //     this.$router.go(-1); //返回上一路由
            // }else if(res.data.status== -1 || res.data.status== 500){
            //     this.$message({
            //         message: res.data.msg,
            //         type: 'warning'
            //     })
            // }else if(res.data.status == -2){
            //     handleCofirm(res.data.msg, 'warning', false).then(() => {
            //         window.loginOut();
            //     })
            // }else{
            //     this.$message({
            //         message: '服务器异常，请稍后再试',
            //         type: 'warning'
            //     })
            // }
            this.loading = false; //隐藏加载框

        }
            
    }
}
</script>
<style lang="scss">
    
</style>