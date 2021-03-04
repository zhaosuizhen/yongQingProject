<template>
    <!----土肥站---监测点耕地质量数据 添加编辑详情---->
    <div id="farmlandQualityDataDetail" class="pageContent" v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                            <span>基本信息</span>
                        </div>
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                           
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
                            <div style="clear:both;"></div>
                            <el-form-item label="监测点：" prop="testingPlaceName" class="formItem formSelect">
                                <el-select v-model="ruleForm.testingPlaceName" filterable clearable :disabled="urlType" placeholder="请选择">
                                    <el-option
                                    v-for="item in testOption"
                                    :key="item.id"
                                    :label="item.testingPlaceName"
                                    :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                       
                    </div>
                    </el-collapse-item>
                    <el-collapse-item name="2">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>作物信息</span>
                            </div> 
                        </template>
                        <el-collapse  v-model="activeNames" @change="handleChange">
                            <el-collapse-item name="2-1">
                                <template slot="title">
                                    <div><i class="collapseDownIcon" :class="[nameFlag.indexOf('2-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span>作物第一季度信息</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                     <el-form-item label="作物名称：" class="formItem">
                                        <el-input v-model="quarter1.productName" :disabled="urlType" placeholder="请输入作物名称"></el-input>
                                    </el-form-item>
                                    <el-form-item label="作物产量：" class="formItem">
                                        <el-input v-model="quarter1.productYield" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入作物产量"></el-input> (kg/亩)
                                    </el-form-item>
                                    <div style="clear:both;"></div>
                                    <el-form-item label="有机肥-N：" class="formItem">
                                        <el-input v-model="quarter1.yjfn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入有机肥-N"></el-input> (kg/亩)
                                    </el-form-item> 
                                    <el-form-item label="化肥-N：" class="formItem">
                                        <el-input v-model="quarter1.hfn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入化肥-N"></el-input> (kg/亩)
                                    </el-form-item> 
                                    <div style="clear:both;"></div>
                                    <el-form-item label="有机肥-P2O5：" class="formItem">
                                        <el-input v-model="quarter1.yjfp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入有机肥-P2O5"></el-input> (kg/亩)
                                    </el-form-item>  
                                    <el-form-item label="化肥-P2O5：" class="formItem">
                                        <el-input v-model="quarter1.hfp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入化肥-P2O5"></el-input> (kg/亩)
                                    </el-form-item>  
                                    <div style="clear:both;"></div>   
                                    <el-form-item label="有机肥-K2O：" class="formItem">
                                        <el-input v-model="quarter1.yjfk" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入有机肥-K2O"></el-input> (kg/亩)
                                    </el-form-item>   
                                    <el-form-item label="化肥-K2O：" class="formItem">
                                        <el-input v-model="quarter1.hfk" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入化肥-K2O"></el-input> (kg/亩)
                                    </el-form-item>  
                                </el-form>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="2-2">
                                <template slot="title">
                                    <div><i class="collapseDownIcon" :class="[nameFlag.indexOf('2-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span>作物第二季度信息</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                     <el-form-item label="作物名称：" class="formItem">
                                        <el-input v-model="quarter2.productName" :disabled="urlType" placeholder="请输入作物名称"></el-input>
                                    </el-form-item>
                                    <el-form-item label="作物产量：" class="formItem">
                                        <el-input v-model="quarter2.productYield" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入作物产量"></el-input> (kg/亩)
                                    </el-form-item>
                                    <div style="clear:both;"></div>
                                    <el-form-item label="有机肥-N：" class="formItem">
                                        <el-input v-model="quarter2.yjfn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入有机肥-N"></el-input> (kg/亩)
                                    </el-form-item> 
                                    <el-form-item label="化肥-N：" class="formItem">
                                        <el-input v-model="quarter2.hfn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入化肥-N"></el-input> (kg/亩)
                                    </el-form-item> 
                                    <div style="clear:both;"></div>
                                    <el-form-item label="有机肥-P2O5：" class="formItem">
                                        <el-input v-model="quarter2.yjfp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入有机肥-P2O5"></el-input> (kg/亩)
                                    </el-form-item>  
                                    <el-form-item label="化肥-P2O5：" class="formItem">
                                        <el-input v-model="quarter2.hfp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入化肥-P2O5"></el-input> (kg/亩)
                                    </el-form-item>     
                                    <div style="clear:both;"></div>
                                    <el-form-item label="有机肥-K2O：" class="formItem">
                                        <el-input v-model="quarter2.yjfk" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入有机肥-K2O"></el-input> (kg/亩)
                                    </el-form-item>   
                                    <el-form-item label="化肥-K2O：" class="formItem">
                                        <el-input v-model="quarter2.hfk" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入化肥-K2O"></el-input> (kg/亩)
                                    </el-form-item>  
                                </el-form>
                                </div>
                            </el-collapse-item>  
                            <el-collapse-item name="2-3">
                                <template slot="title">
                                    <div><i class="collapseDownIcon" :class="[nameFlag.indexOf('2-3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span>作物第三季度信息</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                     <el-form-item label="作物名称：" class="formItem">
                                        <el-input v-model="quarter3.productName" :disabled="urlType" placeholder="请输入作物名称"></el-input>
                                    </el-form-item>
                                    <el-form-item label="作物产量：" class="formItem">
                                        <el-input v-model="quarter3.productYield" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入作物产量"></el-input> (kg/亩)
                                    </el-form-item>
                                    <div style="clear:both;"></div>
                                    <el-form-item label="有机肥-N：" class="formItem">
                                        <el-input v-model="quarter3.yjfn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入有机肥-N"></el-input> (kg/亩)
                                    </el-form-item> 
                                    <el-form-item label="化肥-N：" class="formItem">
                                        <el-input v-model="quarter3.hfn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入化肥-N"></el-input> (kg/亩)
                                    </el-form-item> 
                                    <div style="clear:both;"></div>
                                    <el-form-item label="有机肥-P2O5：" class="formItem">
                                        <el-input v-model="quarter3.yjfp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入有机肥-P2O5"></el-input> (kg/亩)
                                    </el-form-item>  
                                    <el-form-item label="化肥-P2O5：" class="formItem">
                                        <el-input v-model="quarter3.hfp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入化肥-P2O5"></el-input> (kg/亩)
                                    </el-form-item>   
                                    <div style="clear:both;"></div>  
                                    <el-form-item label="有机肥-K2O：" class="formItem">
                                        <el-input v-model="quarter3.yjfk" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入有机肥-K2O"></el-input> (kg/亩)
                                    </el-form-item>   
                                    <el-form-item label="化肥-K2O：" class="formItem">
                                        <el-input v-model="quarter3.hfk" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入化肥-K2O"></el-input> (kg/亩)
                                    </el-form-item>  
                                </el-form>
                                </div>
                            </el-collapse-item>  
                        </el-collapse>
                    </el-collapse-item>
                <el-collapse-item name="3">
                    <template slot="title">
                        <div><i class="collapseDownIcon" :class="[nameFlag.indexOf('3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>土壤化验结果信息</div>
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                            <el-form-item label="PH：" class="formItem">
                                <el-input v-model="ruleForm.ph" placeholder="请输入PH值" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType"></el-input>
                            </el-form-item>
                            <el-form-item label="有机质：" class="formItem">
                                <el-input v-model="ruleForm.organicMatter" placeholder="请输入有机质" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" ></el-input> (g/kg)
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="碱解氮：" class="formItem">
                                <el-input v-model="ruleForm.jjd" placeholder="请输入碱解氮" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" ></el-input> (mg/kg)
                            </el-form-item>
                            <el-form-item label="有效磷：" class="formItem">
                                <el-input v-model="ruleForm.olsenP" placeholder="请输入有效磷" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" ></el-input> (mg/kg)
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="速效钾：" class="formItem">
                                <el-input v-model="ruleForm.sxj" placeholder="请输入速效钾" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" ></el-input> (mg/kg)
                            </el-form-item>
                            <el-form-item label="缓效钾：" class="formItem">
                                <el-input v-model="ruleForm.hxj" placeholder="请输入缓效钾" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" ></el-input> (mg/kg)
                            </el-form-item>
                        </el-form>
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
import { farmlandQualityDetail, farmlandQualityUpdate,farmlandQualityInsert } from '@/utils/api/tuFeiZhan/farmlandQualityData'; //土肥站---监测点耕地质量数据
import { testingOption } from '@/utils/api/tuFeiZhan/basicSituationOfPoints';
import {townshipOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
export default {
    name:'farmlandQualityDataDetail',
    data() {
        return {
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() > new Date()-8.64e7;
                }
            },
            activeNames: ['1','2','2-1','2-2','2-3','3'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
             id:'', //数据的id
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            townshipOption:townshipOption, //乡镇
            testOption:[], //监测点list
            formDate:[], // 自定义表单对象，传值给子组件显示
            ruleForm: {
                township:'', //乡镇
                dataYear:'',//年份
                testingPlaceName:'', //监测点
                quarter:[
                    {
                        productName:"",//作物名称
                        productYield:"",//作物产量
                        yjfn:"",//有机肥-N
                        hfn:"",//化肥-N
                        yjfp:"",//有机肥-P2O5
                        hfp:"",//化肥-P2O5
                        yjfk:"",//有机肥-K2O
                        hfk:"",//化肥-K2O
                        quarter:1,//季度
                    },
                    {
                        productName:"",//作物名称
                        productYield:"",//作物产量
                        yjfn:"",//有机肥-N
                        hfn:"",//化肥-N
                        yjfp:"",//有机肥-P2O5
                        hfp:"",//化肥-P2O5
                        yjfk:"",//有机肥-K2O
                        hfk:"",//化肥-K2O
                        quarter:2,//季度
                    },
                    {
                        productName:"",//作物名称
                        productYield:"",//作物产量
                        yjfn:"",//有机肥-N
                        hfn:"",//化肥-N
                        yjfp:"",//有机肥-P2O5
                        hfp:"",//化肥-P2O5
                        yjfk:"",//有机肥-K2O
                        hfk:"",//化肥-K2O
                        quarter:3,//季度
                    },
                ],
                ph:'',  //PH
                organicMatter:'', //有机质
                jjd:'', //碱解氮
                olsenP:'',   //有效磷
                sxj:'', //速效钾
                hxj:'',  //缓效钾
            },
            quarter1:{
                        productName:"",//作物名称
                        productYield:"",//作物产量
                        yjfn:"",//有机肥-N
                        hfn:"",//化肥-N
                        yjfp:"",//有机肥-P2O5
                        hfp:"",//化肥-P2O5
                        yjfk:"",//有机肥-K2O
                        hfk:"",//化肥-K2O
                        quarter:1,//季度
                    },
                    quarter2:{
                        productName:"",//作物名称
                        productYield:"",//作物产量
                        yjfn:"",//有机肥-N
                        hfn:"",//化肥-N
                        yjfp:"",//有机肥-P2O5
                        hfp:"",//化肥-P2O5
                        yjfk:"",//有机肥-K2O
                        hfk:"",//化肥-K2O
                        quarter:2,//季度
                    },
                    quarter3:{
                        productName:"",//作物名称
                        productYield:"",//作物产量
                        yjfn:"",//有机肥-N
                        hfn:"",//化肥-N
                        yjfp:"",//有机肥-P2O5
                        hfp:"",//化肥-P2O5
                        yjfk:"",//有机肥-K2O
                        hfk:"",//化肥-K2O
                        quarter:3,//季度
                    },
            rules: {
                dataYear: [
                    { required: true, message: '请选择年份',trigger: 'blur' }
                ],
                township: [
                    { required: true, message: '请选择乡镇',trigger: 'blur' }
                ],
                testingPlaceName: [
                    { required: true, message: '请选择监测点',trigger: 'blur' }
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
        this.getTestOption();
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
            let res = await farmlandQualityDetail({id:this.id});
             if(res.data.status== 0){
                if(this.$route.query.type !== 'add'){ // 新增时没有id，将id置空
                    this.ruleForm =  res.data.entitys;
                    this.ruleForm.testingPlaceName = res.data.entitys.testingPlaceId;
                    if(res.data.entitys.quarters.length>0){
                        this.quarter1=  res.data.entitys.quarters[0];
                        this.quarter2=  res.data.entitys.quarters[1];
                        this.quarter3=  res.data.entitys.quarters[2];
                    }
                }
                if(res.data.entitys.customDataList.length>0){
                    this.formDate =  res.data.entitys.customDataList; //自定义表单数据
                }
                
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
            this.ruleForm.testingPlaceId =  this.ruleForm.testingPlaceName;
            delete this.ruleForm.testingPlaceName ;
            delete this.ruleForm.quarters;
            let quarters = [];
            quarters.push(this.quarter1)
            quarters.push(this.quarter2)
            quarters.push(this.quarter3)
            this.ruleForm.quarters = quarters;
            this.ruleForm.id = this.id; //数据id
            this.ruleForm.updateTime = getData(); //更新时间   
            if(this.formDate.length>0){
                this.ruleForm.customDataList = this.formDate;//自定义表单list
            }else{
                this.ruleForm.customDataList = [];
            }                    
           
            let updateObj = JSON.stringify(this.ruleForm);
            let res = await farmlandQualityUpdate(updateObj);
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
            this.ruleForm.testingPlaceId =  this.ruleForm.testingPlaceName;
            delete this.ruleForm.testingPlaceName ;
            this.ruleForm.updateTime = getData(); //更新时间
            this.ruleForm.createTime = getData(); //创建时间
            if(this.formDate.length>0){
                this.ruleForm.customDataList = this.formDate;//自定义表单list
            }else{
                this.ruleForm.customDataList = [];
            } 
            let addObj = JSON.stringify(this.ruleForm);
            let res = await farmlandQualityInsert(addObj);
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
        async getTestOption(){
            let res = await testingOption({});
            if(res.data.status== 0){
                this.testOption = res.data.entitys;
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
            
        }
    }
}
</script>
<style scoped lang="scss">

</style>