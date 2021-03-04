<template>
    <!--质检办——农产品农残检测情况信息表 新增、编辑、详情页面-->
    <div id="qualityDetectionOfAgriculturalDetail" class="pageContent" v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>基本信息</div> <!---->
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
                           <el-form-item label="年份：" prop="dataYear" class="formItem formSelect">
                                <el-date-picker
                                    v-model="ruleForm.dataYear"
                                    type="year"
                                    value-format="yyyy"
                                    format="yyyy"
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
                        <div><i class="collapseDownIcon" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>受检产品信息</div>
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="被检单位：" prop="enterpeiseChecked" class="formItem">
                                <el-input v-model="ruleForm.enterpeiseChecked" :disabled="urlType" placeholder="请输入被检单位"></el-input>
                            </el-form-item>
                            <el-form-item label="限量标准：" class="formItem">
                                <el-input v-model="ruleForm.limitBenchmark" :disabled="urlType" placeholder="请输入限量标准"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="样本名称：" prop="productName" class="formItem">
                                <el-input v-model="ruleForm.productName" :disabled="urlType" placeholder="请输入样本名称"></el-input>
                            </el-form-item>
                            <el-form-item label="限量值：" class="formItem">
                                <el-input v-model="ruleForm.limitValue" :disabled="urlType" placeholder="请输入限量值"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="样本产地：" prop="productCity" class="formItem">
                                <el-input v-model="ruleForm.productCity" :disabled="urlType" placeholder="请输入样本产地"></el-input>
                            </el-form-item>
                            <el-form-item label="检测数值：" prop="checkValue" class="formItem">
                                <el-input v-model="ruleForm.checkValue" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入检测数值"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="检测结果：" prop="checkResult" class="formItem">
                                <el-input v-model="ruleForm.checkResult" :disabled="urlType" placeholder="请输入检测结果"></el-input>
                            </el-form-item>
                            <el-form-item label="检测时间：" prop="checkTime" class="formItem">
                                <el-date-picker v-model="ruleForm.checkTime" type="date" placeholder="选择日期"></el-date-picker>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="样本编码：" class="formItem">
                                <el-input v-model="ruleForm.productNum" :disabled="urlType" placeholder="请输入样本编码"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="3">
                    <template slot="title">
                        <div><i class="collapseDownIcon" :class="[nameFlag.indexOf('3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>监测单位信息</div>
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm3" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="检测单位：" prop="productCheckpointId" class="formItem">
                                <el-input v-model="ruleForm.productCheckpointId" :disabled="urlType" placeholder="请输入检测单位"></el-input>
                            </el-form-item> 
                            <el-form-item label="检测项目：" prop="project" class="formItem">
                                <el-input v-model="ruleForm.project" :disabled="urlType" placeholder="请输入检测项目"></el-input>
                            </el-form-item> 
                            <div style="clear:both;"></div>
                            <el-form-item label="检测站编号：" class="formItem">
                                <el-input v-model="ruleForm.productCheckpointNum" :disabled="urlType" placeholder="请输入检测站编号"></el-input>
                            </el-form-item> 
                            <el-form-item label="设备类型：" class="formItem">
                                <el-input v-model="ruleForm.deviceType" :disabled="urlType" placeholder="请输入设备类型"></el-input>
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
import { qualityProductCheckDetail, qualityProductCheckUpdate,qualityProductCheckInsert} from '@/utils/api/qualityInspection/qualityDetectionOfAgricultural'; //质检办--农产品农残检测情况信息表
import {townshipOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime'
import CustomForm from '@/components/customForm/CustomForm';
export default {
    name:'qualityDetectionOfAgriculturalDetail',
    data() {
        return {
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() > new Date()-8.64e7;
                }
            },
            activeNames: ['1','2','3'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            id:'', //数据的id
            loading:false, //加载框
            formDate:[], //自定义表单数据，传值给子组件
            ruleForm: {
                dataYear:'', //年份
                township:'', //乡镇
                enterpeiseChecked:'', //备检单位
                limitBenchmark:'', //限量标准
                productName:'', //样品名称
                limitValue:'', //限量值
                productCity:'', //样本产地
                checkValue:'', //检测数值
                checkResult:'', //检测结果
                checkTime:'', //检测时间
                productNum:'', //样本编码
                productCheckpointId:'', //检测单位
                project:'', //检测项目
                productCheckpointNum:'', //监测站编码
                deviceType:'', //设备类型
            },
            townshipOption:townshipOption, //乡镇
            rules: {
                dataYear: [
                    {required: true, message: '请选择年份',trigger: 'blur', }
                ],
                township: [
                    { required: true, message: '请选择乡镇',trigger: 'blur' }
                ],
                enterpeiseChecked: [
                    { required: true, message: '请输入被检单位',trigger: 'blur' }
                ],
                productName:[
                    { required: true, message: '请输入样品名称',trigger: 'blur' }
                ],
                productCity:[
                    { required: true, message: '请输入样本产地',trigger: 'blur' }
                ],
                checkValue:[
                    { required: true, message: '请输入检测数值',trigger: 'blur' }
                ],
                checkResult:[
                     { required: true, message: '请输入检测结果',trigger: 'blur' }
                ],
                checkTime:[
                     { required: true, message: '请选择检测时间',trigger: 'blur' }
                ],
                productCheckpointId:[
                      { required: true, message: '请输入监测单位',trigger: 'blur' }
                ],
                project:[
                      { required: true, message: '请输入检测项目',trigger: 'blur' }
                ],


                approvedProduction:[
                      { required: true, message: '请输入核准产量',trigger: 'blur' }
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
            let res = await qualityProductCheckDetail({id:this.id});
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
                let valid1 = await this.$refs.ruleForm1.validate();
                let valid2 = await this.$refs.ruleForm2.validate();
                let valid3 = await this.$refs.ruleForm3.validate();
                if(valid1 && valid2 && valid3){
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
            let res = await qualityProductCheckUpdate(updateObj);
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
            let res = await qualityProductCheckInsert(addObj);
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