<template>
    <!----土肥站---投入品使用情况 添加编辑详情---->
    <div id="inputUsageDetail" class="pageContent" v-loading="loading">
       <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                            <span>基本信息</span>
                            <span class="titleRight">总合计：<span class="valueStyle">{{ruleForm.total}}</span> 吨</span>
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
                                    :disabled="urlType"
                                    type="year"
                                    value-format="yyyy"
                                    format="yyyy"
                                    :picker-options="pickerBeginDateAfter"
                                    placeholder="选择年">
                                    </el-date-picker>
                            </el-form-item>  
                            <div style="clear:both;"></div>
                            <el-form-item label="农药使用量：" class="formItem"> 
                                <el-input v-model="ruleForm.nysyl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农药使用量"></el-input> (吨)
                            </el-form-item>
                            <el-form-item label="农村用电量：" class="formItem">
                                <el-input v-model="ruleForm.ncydl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农村用电量"></el-input> (吨)
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="农村柴油使用量：" class="clearFloat">
                                <el-input v-model="ruleForm.nycysyl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农村柴油使用量"></el-input> (吨)
                            </el-form-item>
                        </el-form>
                        <el-collapse  v-model="activeNames" @change="handleChange">
                            <el-collapse-item name="1-1">
                                <template slot="title">
                                    <div class="titleContent">
                                        <i class="collapseDownIcon" :class="[nameFlag.indexOf('1-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span>化肥施用量实物量总计</span>
                                        <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.hfsylsw}}</span> 吨</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                    <el-form-item label="氮肥：" class="formItem">
                                        <el-input v-model="ruleForm.df" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入氮肥数量"></el-input> (吨)
                                    </el-form-item>
                                    <el-form-item label="磷肥：" class="formItem">
                                        <el-input v-model="ruleForm.lf" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入磷肥数量"></el-input> (吨)
                                    </el-form-item>
                                    <div style="clear:both;"></div>
                                    <el-form-item label="钾肥：" class="formItem">
                                        <el-input v-model="ruleForm.jf" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入钾肥数量"></el-input> (吨)
                                    </el-form-item>            
                                </el-form>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="1-2">
                                <template slot="title">
                                    <div class="titleContent">
                                        <i class="collapseDownIcon" :class="[nameFlag.indexOf('1-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span>农用塑料薄膜数据</span>
                                        <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.nyslbms}}</span> 吨</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                    <el-form-item label="农用塑料薄膜使用量：" class="formItem">
                                        <el-input v-model="ruleForm.nyslbmsyl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农用塑料薄膜使用量"></el-input> (吨)
                                    </el-form-item>   
                                    <el-form-item label="农用塑料薄膜—地膜覆盖面积：" class="formItem">
                                        <el-input v-model="ruleForm.dmfwmj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农用塑料薄膜——地膜覆盖面积"></el-input> (吨)
                                    </el-form-item> 
                                    <div style="clear:both;"></div>
                                    <el-form-item label="农用塑料薄膜—地膜使用量：" class="formItem">
                                        <el-input v-model="ruleForm.dmsyl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农用塑料薄膜——地膜使用量"></el-input> (吨)
                                    </el-form-item> 
                                </el-form>
                                </div>
                            </el-collapse-item>  
                        </el-collapse>
                    </div>
                </el-collapse-item>
            </el-collapse>
            <!--自定义表单组件-->
            <Custom-form v-if="formDate.length>0" :formDate.sync = formDate :type='urlType' @customDatavalueChange='customDatavalueChange'></Custom-form>
            <el-row type='flex' justify="center" class="footrBtnGroup" v-if="!urlType">
                <el-button  type="primary" class="submitBtnMargin"  @click="submit">提交</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-row>
        </section>
        
    </div>
</template>
<script>
import { inputUsageDetail, inputUsageUpdate,inputUsageInsert } from '@/utils/api/tuFeiZhan/inputUsage'; //土肥站---投入品使用情况
import {townshipOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
export default {
    name:'inputUsageDetail',
    data() {
        return {
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() > new Date()-8.64e7;
                }
            },
            activeNames: ['1','1-1','1-2','2'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
             id:'', //数据的id
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            townshipOption:townshipOption, //乡镇
            formDate:[], // 自定义表单对象，传值给子组件显示
            ruleForm: {
                township:'', //乡镇
                dataYear:'',//年份
                total:0, //总量
                hfsylsw: 0,//化肥施用量实物量总计
                nyslbms: 0, //农用塑料薄膜数据
                nysyl:0,//农药使用量
                ncydl:0, //农村用电量
                nycysyl:0,//农用柴油使用量
                df:0, //氮肥
                lf:0, //磷肥
                jf:0,//钾肥
                nyslbmsyl:0, //农用塑料薄膜使用量
                dmfwmj:0, //农用塑料薄膜——地膜覆盖面积
                dmsyl:0, //农用塑料薄膜——地膜使用量
            },
            rules: {
                dataYear: [
                    { required: true, message: '请选择年份',trigger: 'blur' }
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
                let hfsylsw = 0;//化肥施用量实物量总计
                let nyslbms = 0; //农用塑料薄膜数据
                let other = 0; //其他        
                let df = isNaN(parseFloat(newVal['df']))?0:parseFloat(newVal['df']);
                let lf = isNaN(parseFloat(newVal['lf']))?0:parseFloat(newVal['lf']);
                let jf = isNaN(parseFloat(newVal['jf']))?0:parseFloat(newVal['jf']);
                hfsylsw =df+lf+jf;
                let nyslbmsyl = isNaN(parseFloat(newVal['nyslbmsyl']))?0:parseFloat(newVal['nyslbmsyl']);
                let dmfwmj = isNaN(parseFloat(newVal['dmfwmj']))?0:parseFloat(newVal['dmfwmj']);
                let dmsyl = isNaN(parseFloat(newVal['dmsyl']))?0:parseFloat(newVal['dmsyl']);
                nyslbms = nyslbmsyl+dmfwmj+dmsyl;
                let nysyl = isNaN(parseFloat(newVal['nysyl']))?0:parseFloat(newVal['nysyl']);
                let ncydl = isNaN(parseFloat(newVal['ncydl']))?0:parseFloat(newVal['ncydl']);
                let nycysyl = isNaN(parseFloat(newVal['nycysyl']))?0:parseFloat(newVal['nycysyl']);
                other = nysyl+ncydl+nycysyl;
                this.ruleForm.hfsylsw = hfsylsw;
                this.ruleForm.nyslbms = nyslbms;
                this.ruleForm.total = hfsylsw + nyslbms + other;
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
            let res = await inputUsageDetail({id:this.id});
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
            let res = await inputUsageUpdate(updateObj);
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
            let res = await inputUsageInsert(addObj);
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