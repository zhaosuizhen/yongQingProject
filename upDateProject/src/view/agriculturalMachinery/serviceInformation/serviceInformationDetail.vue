<template>
    <!----统计局---畜产品产量 添加编辑详情---->
    <div id="liveProductValueDetail"  class="pageContent" v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="0">
                    <template slot="title">
                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('0') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                            <span>基本信息</span>
                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.allData}}</span> 吨</span> -->
                        </div>
                    </template>

                    <el-form :model="ruleForm" status-icon :rules="rules" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="年份：" prop="dataYear" class="formSelect" style="width:50%;margin-top:10px">
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
                    </el-form>
                
                    <el-collapse-item name="1">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>农机服务组织及农机户</span>
                                <!-- <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.YLBZMJData}}</span> 吨</span> -->
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="农机服务组织" class="formItem">
                                    <el-input v-model="ruleForm.serviceCount" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农机服务组织"></el-input> （个）
                                </el-form-item>
                                <el-form-item label="农机服务组织人数" class="formItem">
                                    <el-input v-model="ruleForm.servicePopulation" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农机服务组织人数"></el-input> （人）
                                </el-form-item>
                                <el-form-item label="农机户" class="formItem">
                                    <el-input v-model="ruleForm.householdCount" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农机户"></el-input> （个）
                                </el-form-item>
                                <el-form-item label="农机户人数" class="formItem">
                                    <el-input v-model="ruleForm.householdPopulation" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农机户人数"></el-input> （人）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="2">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>农机维修厂及维修点</span>
                                <!-- <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.maintenanceShop}}</span> 个</span> -->
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="农机维修厂及维修点" class="formItem">
                                    <el-input v-model="ruleForm.repairStationCount" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农机维修厂及维修点"></el-input> （个）
                                </el-form-item>
                                <el-form-item label="农机维修厂及维修点人数" class="formItem">
                                    <el-input v-model="ruleForm.repairStationPopulation" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农机维修厂及维修点人数"></el-input> （人）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="3">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>乡村农机从业人员</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.ruralWorkPeople}}</span> 人</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="持有拖拉机驾驶证人员" class="formItem">
                                    <el-input v-model="ruleForm.populationTractor" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入持有拖拉机驾驶证人员"></el-input> （人）
                                </el-form-item>
                                <el-form-item label="持有联合收割机驾驶证人员" class="formItem">
                                    <el-input v-model="ruleForm.populationCombine" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入持有联合收割机驾驶证人员"></el-input> （人）
                                </el-form-item>
                                <el-form-item label="同时持有拖拉机、联合收割机驾驶证人员" class="formItem">
                                    <el-input v-model="ruleForm.populationBoth" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入同时持有拖拉机、联合收割机驾驶证人员"></el-input> （人）
                                </el-form-item>
                                <el-form-item label="农机维修人员" class="formItem">
                                    <el-input v-model="ruleForm.populationRepair" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农机维修人员"></el-input> （人）
                                </el-form-item>
                                <el-form-item label="持有职业资格证书人员" class="formItem">
                                    <el-input v-model="ruleForm.populationProfession" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入持有职业资格证书人员"></el-input> （人）
                                </el-form-item>
                                <el-form-item label="其他人数" class="formItem">
                                    <el-input v-model="ruleForm.populationOther" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入其他人数"></el-input> （人）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="4">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('4') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>农机化投入</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.investment}}</span> 万元</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="科研" class="formItem">
                                    <el-input v-model="ruleForm.science	" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入科研"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="推广" class="formItem">
                                    <el-input v-model="ruleForm.extension" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入推广"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="安全监理" class="formItem">
                                    <el-input v-model="ruleForm.supervisor" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入安全监理"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="试验鉴定" class="formItem">
                                    <el-input v-model="ruleForm.docimasia" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入试验鉴定"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="基本建设" class="formItem">
                                    <el-input v-model="ruleForm.construction" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入基本建设"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="农业机械购置" class="formItem">
                                    <el-input v-model="ruleForm.purchase" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农业机械购置"></el-input> （万元）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="5">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('5') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>农机服务收入</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.income}}</span> 万元</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="农机作业服务收入" class="formItem">
                                    <el-input v-model="ruleForm.revenueService" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农机作业服务收入"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="其他" class="formItem">
                                    <el-input v-model="ruleForm.revenueOther" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入其他"></el-input> （万元）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>


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
//农业机械化与设施股---农机服务情况 接口
import { serviceInformationDetail,serviceInformationUpdate, serviceInformationInsert } from '@/utils/api/agriculturalMachinery/serviceInformation' 
import {townshipOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
export default {
    name:'liveProductValueDetail',
    data() {
        return {
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() > new Date()-8.64e7;
                }
            },
            activeNames: ['0','1','2','3','4','5'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            id:'', //数据的id
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            townshipOption:townshipOption, //乡镇
            formDate:[], //自定义表单数据，传值给子组件
            valueTotal:0,//总合计
            ruleForm: {
                township:'', //乡镇
                dataYear:'',//年份
                
                serviceCount:'',//农机服务组织
                servicePopulation:'',//农机服务组织人数
                householdCount:'',//农机户
                householdPopulation:'',//农机户人数
                repairStationCount	:'',//农机维修厂及维修点
                repairStationPopulation:'',//农机维修厂及维修点人数
                populationTractor:'',//持有拖拉机驾驶证人员
                populationCombine:'',//持有联合收割机驾驶证人员
                populationBoth:'',//同时持有拖拉机、联合收割机驾驶证人员
                populationRepair:'',//农机维修人员
                populationProfession:'',//持有职业资格证书人员
                populationOther:'',//其他人数
                science:'',//科研
                extension:'',//推广
                supervisor:'',//安全监理
                docimasia:'',//试验鉴定
                construction:'',//基本建设
                purchase:'',//农业机械购置
                revenueService:'',//农机作业服务收入
                revenueOther:'',//其他
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
    computed: {
      testDataNew() {
        return JSON.parse(JSON.stringify(this.ruleForm))
      }
    },
    watch:{
        //监听数量变化，进行加减
        testDataNew: {
            handler(newVal) {
                this.ruleForm.ruralWorkPeople = newVal.populationTractor * 1 + newVal.populationCombine * 1 + newVal.populationBoth * 1 +
                                           newVal.populationRepair * 1 + newVal.populationProfession * 1 + newVal.populationOther * 1
                this.ruleForm.investment = newVal.science * 1 + newVal.extension * 1 + newVal.supervisor * 1 + 
                                           newVal.docimasia * 1 + newVal.construction * 1 + newVal.purchase * 1
                this.ruleForm.income = newVal.revenueService * 1 + newVal.revenueOther * 1
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
            let res = await serviceInformationDetail({id:this.id});
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
            //删除不需要传值给后端的字段
            delete this.ruleForm.pageSize;
            delete this.ruleForm.currentPage
            delete this.ruleForm.queryStartTime
            delete this.ruleForm.queryEndTime
            delete this.ruleForm.queryKey
            delete this.ruleForm.buildUser
            delete this.ruleForm.checkUser
            this.ruleForm.id = this.id; //数据id
            this.ruleForm.customDataList = this.formDate;//自定义表单list
            this.ruleForm.updateTime = getData(); //更新时间
            let updateObj = JSON.stringify(this.ruleForm);
            let res = await serviceInformationUpdate(updateObj);
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
            let res = await serviceInformationInsert(addObj);
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