<template>
    <!--渔业局——渔业生产基本情况新增、编辑、详情页面-->
    <div id="basicInformationOfFisheryDetail" class="pageContent" v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>水产品基本信息</div> <!---->
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                           <el-form-item label="年份：" prop="dataYear" class="formItem formSelect">
                                <el-date-picker
                                    v-model="ruleForm.dataYear"
                                    type="year"
                                    value-format='yyyy'
                                    format='yyyy'
                                    :picker-options="pickerBeginDateAfter"
                                    placeholder="选择年">
                                    </el-date-picker>
                            </el-form-item>  
                            <el-form-item label="乡镇：" prop="township" class="formItem formSelect">
                                <el-select v-model="ruleForm.township" filterable clearable :disabled="urlType" placeholder="请选择">
                                    <el-option
                                    v-for="item in townshipOption"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="2">
                    <template slot="title">
                        <div class="titleContent">
                            <i class="collapseDownIcon" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                            <span>水产品总产量</span>
                            <span class="titleRight">水产品总产量：<span class="valueStyle">{{ruleForm.scpzcl}}</span> 吨</span>
                            </div>
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                            <el-form-item label="海洋捕捞水产品总产量：" class="formItem">
                                <el-input v-model="ruleForm.hyblscp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入海洋捕捞水产品总产量"></el-input>(吨)
                            </el-form-item>
                            <el-form-item label="淡水捕捞水产品总产量：" class="formItem">
                                <el-input v-model="ruleForm.dsblscp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入淡水捕捞水产品总产量"></el-input>(吨)
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="远洋渔业水产品总产量：" class="formItem">
                                <el-input v-model="ruleForm.yyblscp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入远洋渔业水产品总产量"></el-input>(吨)
                            </el-form-item>
                            <el-form-item label="淡水养殖水产品总产量：" class="formItem">
                                <el-input v-model="ruleForm.dsyzscp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入淡水养殖水产品总产量"></el-input>(吨)
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="海水养殖水产品总产量：" class="formItem">
                                <el-input v-model="ruleForm.hsyzscp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入海水养殖水产品总产量"></el-input>(吨)
                            </el-form-item>
                        </el-form>
                    </div>   
                </el-collapse-item>
                <el-collapse-item name="3">
                    <template slot="title">
                        <div class="titleContent">
                            <i class="collapseDownIcon" :class="[nameFlag.indexOf('3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                            <span>水产品总产值</span>
                            <span class="titleRight">水产品总产值：<span class="valueStyle">{{ruleForm.scpzcz}}</span> 万元</span>
                            </div>
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                            <el-form-item label="一二三产产值(渔业总产值)：" class="formItem">
                                <el-input v-model="ruleForm.yesccz" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入一二三产产值(渔业总产值)"></el-input>(万元)
                            </el-form-item> 
                            <el-form-item label="一二三产增加值(渔业增加值)：" class="formItem">
                                <el-input v-model="ruleForm.yesczjz" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入一二三产增加值(渔业增加值)"></el-input>(万元)
                            </el-form-item> 
                            <div style="clear:both;"></div>
                            <el-form-item label="一产(渔业)产值：" class="formItem">
                                <el-input v-model="ruleForm.yccz" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入一产(渔业)产值"></el-input>(万元)
                            </el-form-item> 
                            <el-form-item label="一产(渔业)增加值：" class="formItem">
                                <el-input v-model="ruleForm.yczjz" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入一产(渔业)增加值"></el-input>(万元)
                            </el-form-item> 
                            <div style="clear:both;"></div>
                        </el-form>  
                    </div>  
                </el-collapse-item>
                <el-collapse-item name="4">
                    <template slot="title">
                        <div class="titleContent">
                        <i class="collapseDownIcon" :class="[nameFlag.indexOf('4') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                            <span>养殖面积信息</span>
                            <span class="titleRight">养殖面积信息：<span class="valueStyle">{{ruleForm.yamjxx}}</span> 亩</span>
                        </div>
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                            <el-form-item label="水产养殖面积：" class="formItem">
                                <el-input v-model="ruleForm.scyzmj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入水产养殖面积"></el-input>(亩)
                            </el-form-item> 
                            <el-form-item label="海水养殖面积：" class="formItem">
                                <el-input v-model="ruleForm.hsyzmj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入海水养殖面积"></el-input>(亩)
                            </el-form-item> 
                            <div style="clear:both;"></div>
                            <el-form-item label="淡水养殖面积：" class="formItem">
                                <el-input v-model="ruleForm.dsyzmj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入淡水养殖面积"></el-input>(亩)
                            </el-form-item>   
                            <div style="clear:both;"></div>
                        </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="5">
                    <template slot="title">
                        <div><i class="collapseDownIcon" :class="[nameFlag.indexOf('5') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>渔船信息</div>
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                            <el-form-item label="机动渔船数量：" class="formItem">
                                <el-input v-model="ruleForm.jdycsl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入机动渔船数量"></el-input>(艘)
                            </el-form-item> 
                            <el-form-item label="机动渔船总吨位：" class="formItem">
                                <el-input v-model="ruleForm.jdyczdw" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入机动渔船总吨位"></el-input>(总吨)
                            </el-form-item> 
                            <div style="clear:both;"></div>
                            <el-form-item label="机动渔船功率：" class="formItem">
                                <el-input v-model="ruleForm.jdycgl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入机动渔船功率"></el-input>(千瓦)
                            </el-form-item> 
                            <div style="clear:both;"></div>
                        </el-form>
                    </div>
                </el-collapse-item>
            </el-collapse>
            <!--自定义表单组件-->
            <Custom-form v-if="formDate.length>0" :formDate.sync = formDate :type='urlType' @customDatavalueChange='customDatavalueChange'></Custom-form>
            <el-row type='flex' justify="center" class="footrBtnGroup"  v-if="!urlType">
            <el-button  type="primary" class="submitBtnMargin"  @click="submit">提交</el-button>
            <el-button @click="cancel">取消</el-button>
        </el-row>
        </section>
        
    </div>
</template>
<script>
import { fisheryBasicInfoDetail, fisheryBasicInfoUpdate,fisheryBasicInfoInsert } from '@/utils/api/fisheries/basicInformationOfFishery'; //渔业局--渔业生产基本情况
import {townshipOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
export default {
    name:'basicInformationOfFisheryDetail',
    data() {
        return {
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() > new Date()-8.64e7;
                }
            },
            activeNames: ['1','2','3','4','5'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            id:'', //数据的id
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            townshipOption:townshipOption, //乡镇
            formDate:[], //自定义表单数据，传值给子组件
            ruleForm: {
                dataYear:'', //年份
                township:'', //乡镇
                scpzcl:0,//水产品总产量
                scpzcz:0, //水产品总产值
                yamjxx:0, //养殖面积信息
                hyblscp:0, //海洋捕捞水产品总产量
                dsblscp:0, //淡水捕捞水产品总产量
                yyblscp:0, //远洋渔业水产品总产量
                dsyzscp:0, //淡水养殖水产品总产量
                hsyzscp:0, //海水养殖水产品总产量
                yesccz:0, //一二三产产值(渔业总产值)
                yesczjz:0, //一二三产增加值(渔业增加值)
                yccz:0, //一产(渔业)产值
                yczjz:0, //一产(渔业)增加值
                scyzmj:0, //水产养殖面积
                hsyzmj:0, //海水养殖面积
                dsyzmj:0, //淡水养殖面积
                jdycsl:0, //机动渔船数量
                jdyczdw:0,//机动渔船总吨位
                jdycgl:0//机动渔船功率
            },
            rules: {
                dataYear: [
                    {required: true, message: '请选择年份',trigger: 'blur', }
                ],
                township: [
                    { required: true, message: '请选择乡镇',trigger: 'blur' }
                ]
            }
        }
    },
    components:{
        'Custom-form':CustomForm
    },
    mounted(){
        this.nameFlag = this.activeNames;
        this.urlType = this.$route.query.type == 'detail'?true:false;
        this.miniNav = this.$route.query.toMiniNav; //左上角导航
        this.id = this.$route.query.id; //查看详情数据的id值
        this.initData(); //初始化数据
    },
    computed: {
      testDataNew() {
        return JSON.parse(JSON.stringify(this.ruleForm))
      }
    },
    watch:{
        //监听数量变化，进行加减
        testDataNew: {
            handler(newVal) {
                let scpzcl = 0;//水产品总产量
                let hyblscp = isNaN(parseFloat(newVal['hyblscp']))?0:parseFloat(newVal['hyblscp']) ;
                let dsblscp = isNaN(parseFloat(newVal['dsblscp']))?0:parseFloat(newVal['dsblscp']);
                let yyblscp =isNaN(parseFloat(newVal['yyblscp']))?0:parseFloat(newVal['yyblscp']);
                let dsyzscp = isNaN(parseFloat(newVal['dsyzscp']))?0:parseFloat(newVal['dsyzscp']);
                let hsyzscp = isNaN(parseFloat(newVal['hsyzscp']))?0:parseFloat(newVal['hsyzscp']);
                let scpzcz = 0; //水产品总产值
                let yesccz = isNaN(parseFloat(newVal['yesccz']))?0:parseFloat(newVal['yesccz']);
                let yesczjz = isNaN(parseFloat(newVal['yesczjz']))?0:parseFloat(newVal['yesczjz']);
                let yccz = isNaN(parseFloat(newVal['yccz']))?0:parseFloat(newVal['yccz']);
                let yczjz = isNaN(parseFloat(newVal['yczjz']))?0:parseFloat(newVal['yczjz']);
                let yamjxx = 0; //养殖面积信息
                let scyzmj = isNaN(parseFloat(newVal['scyzmj']))?0:parseFloat(newVal['scyzmj']) ;
                let hsyzmj = isNaN(parseFloat(newVal['hsyzmj']))?0:parseFloat(newVal['hsyzmj']);
                let dsyzmj = isNaN(parseFloat(newVal['dsyzmj']))?0:parseFloat(newVal['dsyzmj']);
                
                                              
                scpzcl =hyblscp+dsblscp+yyblscp+dsyzscp+hsyzscp;
                scpzcz = yesccz+yccz+yczjz+yesczjz;
                yamjxx = scyzmj+hsyzmj+dsyzmj;
                this.ruleForm.scpzcl = scpzcl;  //水产品总产量
                this.ruleForm.scpzcz = scpzcz; //水产品总产值
                this.ruleForm.yamjxx = yamjxx;  //养殖面积信息
           },
          deep: true // 监听这个对象中的每一个属性变化
        },
    },
    methods:{
        //自定义表单数值更改，父组件同步
        customDatavalueChange(data){
            this.formDate = data;
        },
        //折叠版折叠，打开，图标变化
        handleChange(val){
            if(val instanceof Array){
                val.sort();
                this.nameFlag = val
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
            let res = await fisheryBasicInfoDetail({id:this.id});
             if(res.data.status== 0){
                this.ruleForm =  res.data.entitys;
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
        //取消
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
            this.ruleForm.updateTime = getData(); //更新时间
            this.ruleForm.customDataList = this.formDate;//自定义表单list
            let updateObj = JSON.stringify(this.ruleForm);
            let res = await fisheryBasicInfoUpdate(updateObj);
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
            this.ruleForm.id = this.id; //数据id
            this.ruleForm.updateTime = getData(); //更新时间
            this.ruleForm.createTime = getData(); //创建时间
            this.ruleForm.customDataList = this.formDate;//自定义表单list
            let addObj = JSON.stringify(this.ruleForm);
            let res = await fisheryBasicInfoInsert(addObj);
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
        }
    }
}
</script>
<style scoped lang="scss">

</style>