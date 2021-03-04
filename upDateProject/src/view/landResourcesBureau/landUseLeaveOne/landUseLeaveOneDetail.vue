<template>
  <!--国土局---农村土地利用现状一级分类面积汇总表  新增 查看 编辑-->
    <div id="landUseLeaveOneDetail" class="pageContent" v-loading="loading">
        <section class="sectionContent-40">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div class="titleContent">
                            <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>行政区域总面积</span>
                                <span class="titleRight">产量总合计：<span class="valueStyle">{{ruleForm.totalArea}}</span> 吨</span>
                            </div>
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
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
                            <el-form-item label="年份：" prop="dataYear" class="formItem formSelect">
                                <el-date-picker
                                    v-model="ruleForm.dataYear"
                                    type="year"
                                    value-format='yyyy'
                                    format='yyyy'
                                    :disabled="urlType"
                                    :picker-options="pickerBeginDateAfter"
                                    placeholder="选择年">
                                    </el-date-picker>
                            </el-form-item> 
                            <div style="clear:both;"></div>
                            <el-form-item label="耕地：" class="formItem">
                                <el-input v-model="ruleForm.gd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入耕地数量"></el-input> （亩）
                            </el-form-item>
                            <el-form-item label="园地：" class="formItem">
                                <el-input v-model="ruleForm.yd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入园地数量"></el-input> （亩）
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="林地：" class="formItem">
                                <el-input v-model="ruleForm.ld" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入林地数量"></el-input> （亩）
                            </el-form-item>
                            <el-form-item label="草地：" class="formItem">
                                <el-input v-model="ruleForm.cd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入草地数量"></el-input> （亩）
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="城镇村及工矿用地：" class="formItem">
                                <el-input v-model="ruleForm.czcjgk" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入城镇村及工矿用地数量"></el-input> （亩）
                            </el-form-item>
                            <el-form-item label="交通运输用地：" class="formItem">
                                <el-input v-model="ruleForm.jtys" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入交通运输用地数量"></el-input> （亩）
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="水域及水利设施用地：" class="formItem">
                                <el-input v-model="ruleForm.syjsl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入水域及水利设施用地数量"></el-input> （亩）
                            </el-form-item>
                            <el-form-item label="其他土地：" class="formItem">
                                <el-input v-model="ruleForm.qttd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入其他土地数量"></el-input> （亩）
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
import { landUseLeaveOneDetail,landUseLeaveOneUpdate, landUseLeaveOneInsert } from '@/utils/api/landResourcesBureau/landUseLeaveOne' //商务局---农产品交易价格数据
import {townshipOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
export default {
    name:'landUseLeaveOneDetail',
    data() {
        return {
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() > new Date()-8.64e7;
                }
            },
            activeNames: ['1'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            id:'', //数据的id
            formDate:[], //自定义表单数据，传值给子组件
            ruleForm: {
                township:'', //乡镇
                dataYear:'', //年份
                totalArea:0, //总面积
                gd:0,  //耕地
                yd:0, //园地
                ld:0,  //林地
                cd:0,  //草地
                czcjgk:0,  //城镇村及工矿用地
                jtys:0,  //交通运输用地
                syjsl:0,  //水域及水利设施用地
                qttd:0   //其他土地
            },
            townshipOption:townshipOption, //乡镇
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
    computed: {
      testDataNew() {
        return JSON.parse(JSON.stringify(this.ruleForm))
      }
    },
    watch:{
        //监听数量变化，进行加减
        testDataNew: {
            handler(newVal) {
                let totalArea = 0;//水产品总产量
                let gd = isNaN(parseFloat(newVal['gd']))?0:parseFloat(newVal['gd']) ;
                let yd = isNaN(parseFloat(newVal['yd']))?0:parseFloat(newVal['yd']);
                let ld =isNaN(parseFloat(newVal['ld']))?0:parseFloat(newVal['ld']);
                let cd = isNaN(parseFloat(newVal['cd']))?0:parseFloat(newVal['cd']);
                let czcjgk = isNaN(parseFloat(newVal['czcjgk']))?0:parseFloat(newVal['czcjgk']);
                let jtys = isNaN(parseFloat(newVal['jtys']))?0:parseFloat(newVal['jtys']);
                let syjsl = isNaN(parseFloat(newVal['syjsl']))?0:parseFloat(newVal['syjsl']);
                let qttd = isNaN(parseFloat(newVal['qttd']))?0:parseFloat(newVal['qttd']);
                                              
                totalArea =gd + yd + ld + cd + czcjgk + jtys + syjsl+ qttd;
                this.ruleForm.totalArea = totalArea;  //水产品总产量
           },
          deep: true // 监听这个对象中的每一个属性变化
        },
    },
    mounted(){
        this.nameFlag = this.activeNames;
        this.urlType = this.$route.query.type == 'detail'?true:false;
        this.miniNav = this.$route.query.toMiniNav; //左上角导航
        this.id = this.$route.query.id; //查看详情数据的id值
        this.initData(); //初始化数据
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
            let res = await landUseLeaveOneDetail({id:this.id});
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
            let res = await landUseLeaveOneUpdate(updateObj);
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
            let res = await landUseLeaveOneInsert(addObj);
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