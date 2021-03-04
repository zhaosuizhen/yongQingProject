<template>
    <!----统计局---畜产品产量 添加编辑详情---->
    <div id="liveProductValueDetail"  class="pageContent" v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="0">
                    <template slot="title">
                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                            <span>基本信息</span>
                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.allData}}</span> 吨</span> -->
                        </div>
                    </template>

                    <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
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
                                <span>乡村人口与从业人员</span>
                                <!-- <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.YLBZMJData}}</span> 吨</span> -->
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="乡村户数" style="width:100%">
                                    <el-input v-model="ruleForm.popHouse" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入乡村户数"></el-input> （户）
                                </el-form-item>
                                <el-form-item label="乡村人口（男）" class="formItem">
                                    <el-input v-model="ruleForm.popMan" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入乡村人口（男）"></el-input> （人）
                                </el-form-item>
                                <el-form-item label="乡村人口（女）" class="formItem">
                                    <el-input v-model="ruleForm.popWoman" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入乡村人口（女）"></el-input> （人）
                                </el-form-item>
                                <el-form-item label="乡村劳动力资源数（男）" class="formItem">
                                    <el-input v-model="ruleForm.popLaborMan" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入乡村劳动力资源数（男）"></el-input> （人）
                                </el-form-item>
                                <el-form-item label="乡村劳动力资源数（女）" class="formItem">
                                    <el-input v-model="ruleForm.popLaborWoman" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入乡村劳动力资源数（女）"></el-input> （人）
                                </el-form-item>
                                <el-form-item label="乡村从业人员人数（男）" class="formItem">
                                    <el-input v-model="ruleForm.popJobMan" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入乡村从业人员人数（男）"></el-input> （人）
                                </el-form-item>
                                <el-form-item label="乡村从业人员人数（女）" class="formItem">
                                    <el-input v-model="ruleForm.popJobWoman" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入乡村从业人员人数（女）"></el-input> （人）
                                </el-form-item>
                                <el-form-item label="农业从业人员人数（男）" class="formItem">
                                    <el-input v-model="ruleForm.popWorkMan" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农业从业人员人数（男）"></el-input> （人）
                                </el-form-item>
                                <el-form-item label="农业从业人员人数（女）" class="formItem">
                                    <el-input v-model="ruleForm.popWorkWoman" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农业从业人员人数（女）"></el-input> （人）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="2">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>农村基础设施</span>
                                <!-- <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.MHBZMJData}}</span> 吨</span> -->
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <el-form-item label="自来水受益村数" class="formItem">
                                    <el-input v-model="ruleForm.facilityWater" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入自来水受益村数"></el-input> （个）
                                </el-form-item>
                                <el-form-item label="通宽带村数" class="formItem">
                                    <el-input v-model="ruleForm.facilityWideband" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入通宽带村数"></el-input> （个）
                                </el-form-item>
                                <el-form-item label="其他" class="formItem">
                                    <el-input v-model="ruleForm.facilityOther" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入其他"></el-input> （个）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="3">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>农业主要物质消耗</span>
                                <!-- <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.SMBZMJData}}</span> 吨</span> -->
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="地膜覆盖面积" class="formItem">
                                    <el-input v-model="ruleForm.materialMulchArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入地膜覆盖面积"></el-input> （亩）
                                </el-form-item>
                                <el-form-item label="农用柴油使用量" class="formItem">
                                    <el-input v-model="ruleForm.materialDieselUse" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农用柴油使用量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="农药使用量" class="formItem">
                                    <el-input v-model="ruleForm.materialPesticideUse" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农药使用量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="农村用电量" class="formItem">
                                    <el-input v-model="ruleForm.materialPowerUse" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农村用电量"></el-input> （万千瓦时）
                                </el-form-item>
                                
                            </el-form>
                            <el-collapse v-model="activeNames" @change="handleChange">

                                <el-collapse-item name="3-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>农用化肥施用量（折纯）</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.YCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="氮肥" class="formItem">
                                                <el-input v-model="ruleForm.materialN" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入氮肥量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="钾肥" class="formItem">
                                                <el-input v-model="ruleForm.materialK" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入钾肥量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="磷肥" class="formItem">
                                                <el-input v-model="ruleForm.materialP" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入磷肥量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="复合肥" class="formItem">
                                                <el-input v-model="ruleForm.materialCompound" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入复合肥量"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="3-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>农用塑料薄膜使用量（吨）</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.BCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="地膜使用量" class="formItem">
                                                <el-input v-model="ruleForm.materialMulchUse" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入地膜使用量"></el-input> （亩）
                                            </el-form-item>
                                            <el-form-item label="其他" class="formItem">
                                                <el-input v-model="ruleForm.materialOther" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入其他"></el-input> （亩）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                            </el-collapse>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="4">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('4') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>农业用地情况</span>
                                <!-- <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.TLBZMJData}}</span> 吨</span> -->
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="园地" class="formItem">
                                    <el-input v-model="ruleForm.landField" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入园地"></el-input> （亩）
                                </el-form-item>
                                <el-form-item label="草地" class="formItem">
                                    <el-input v-model="ruleForm.landGrass" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入草地"></el-input> （亩）
                                </el-form-item>
                                <el-form-item label="林地" class="formItem">
                                    <el-input v-model="ruleForm.landForest" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入林地"></el-input> （亩）
                                </el-form-item>
                                <el-form-item label="设施农业用地" class="formItem">
                                    <el-input v-model="ruleForm.landAgriculture" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入设施农业用地"></el-input> （亩）
                                </el-form-item>
                                
                            </el-form>

                            <el-collapse v-model="activeNames" @change="handleChange">

                                <el-collapse-item name="4-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('4-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>年末耕地面积（亩）</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.YCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="水田" class="formItem">
                                                <el-input v-model="ruleForm.landPaddy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入水田"></el-input> （亩）
                                            </el-form-item>
                                            <el-form-item label="旱地" class="formItem">
                                                <el-input v-model="ruleForm.landDry" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入旱地"></el-input> （亩）
                                            </el-form-item>
                                            <el-form-item label="水浇地" class="formItem">
                                                <el-input v-model="ruleForm.landWater" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入水浇地"></el-input> （亩）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                            </el-collapse>
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
        <BackListPage v-if="urlType"></BackListPage>
        </section>
        
    </div>
</template>
<script>
//统计局---畜产品产量 接口
import { agriculturalProductionDetail,agriculturalProductionUpdate, agriculturalProductionInsert } from '@/utils/api/planting/agriculturalProduction' 
import {townshipOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
import BackListPage from '@/view/backListPage'
export default {
    name:'liveProductValueDetail',
    data() {
        return {
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() > new Date()-8.64e7;
                }
            },
            activeNames: ['0','1','2','3','3-1','3-2','4','4-1','5','6','7','7-1','7-2','7-3','7-4','7-5','7-6','7-7','7-8','7-9','7-10','8','9'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            id:'', //数据的id
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            townshipOption:townshipOption, //乡镇
            formDate:[], //自定义表单数据，传值给子组件
            valueTotal:0,//总合计
            ruleForm: {
                buildUser:'',//创建人
                checkUser:'',//审核人
                createTime:'',//创建时间

                dataYear:'',//年份
                facilityOther:'',//其他农村基础设施（个）
                facilityWater:'',//自来水受益村数（个）
                facilityWideband:'',//通宽带村数（个）
                landAgriculture:'',//设施农业用地（亩）
                landDry:'',//旱地（亩）
                landField:'',//园地（亩）
                landForest:'',//林地（亩）
                landGrass:'',//草地（亩）
                landPaddy:'',//水田（亩）
                landWater:'',//水浇地（亩）
                materialCompound:'',//复合肥（吨）
                materialDieselUse:'',//农用柴油使用量（吨）
                materialK:'',//钾肥（吨）
                materialMulchArea:'',//地膜覆盖面积（亩）
                materialMulchUse:'',//地膜使用量（吨）
                materialN:'',//氮肥（吨）
                materialOther:'',//其他农用塑料薄膜使用量（吨）
                materialP:'',//磷肥（吨）
                materialPesticideUse:'',//农药使用量（吨）
                materialPowerUse:'',//农村用电量（万千瓦时）
                popHouse:'',//乡村户数
                popJobMan:'',//乡村从业人数（男）
                popJobWoman:'',//乡村从业人数（女）
                popLaborMan:'',//乡村劳动力资源数（男）
                popLaborWoman:'',//乡村劳动力资源数（女）
                popMan:'',//乡村人口（男）
                popWoman:'',//乡村人口（女）
                popWorkMan:'',//农业从业人数（男）
                popWorkWoman:'',//农业从业人数（女）
                

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
        'Custom-form':CustomForm,
        BackListPage
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
                console.log(newVal)
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
            let res = await agriculturalProductionDetail({id:this.id});
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
            let res = await agriculturalProductionUpdate(updateObj);
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
            let res = await agriculturalProductionInsert(addObj);
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