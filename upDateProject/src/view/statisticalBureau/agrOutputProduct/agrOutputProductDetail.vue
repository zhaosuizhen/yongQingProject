<template>
    <!----统计局---主要农产品产量 添加编辑详情---->
    <div id="agrOutputProductDetail" class="pageContent" v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                            <span>基本信息</span>
                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.totalarea}}</span> 亩</span>
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
                            <el-form-item label="棉花：" class="formItem">
                                <el-input v-model="ruleForm.cotton" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入棉花数量"></el-input> （吨）
                            </el-form-item>
                            <el-form-item label="麻类：" class="formItem">
                                <el-input v-model="ruleForm.flax" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入芝麻数量"></el-input> （吨）
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="糖类：" class="formItem">
                                <el-input v-model="ruleForm.sugar" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入糖类数量"></el-input> （吨）
                            </el-form-item>
                            <el-form-item label="中药材：" class="formItem">
                                <el-input v-model="ruleForm.cmedicine" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入中药材数量"></el-input> （吨）
                            </el-form-item>  
                            <div style="clear:both;"></div>
                            <el-form-item label="蔬菜：" class="formItem">
                                <el-input v-model="ruleForm.vegetables" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蔬菜数量"></el-input> （吨）
                            </el-form-item>
                        </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="2">
                    <template slot="title">
                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                            <span>粮食</span>
                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.foodstuff}}</span> 亩</span>
                        </div>
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                            <el-form-item label="豆类：" class="formItem">
                                <el-input v-model="ruleForm.beans" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入豆类数量"></el-input> （亩）
                            </el-form-item>
                            <el-form-item label="薯类：" class="formItem">
                                <el-input v-model="ruleForm.tubers" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入薯类数量"></el-input> （亩）
                            </el-form-item>
                        </el-form>
                         <el-collapse v-model="activeNames" @change="handleChange">
                            <el-collapse-item name="2-1">
                                 <template slot="title">
                                    <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span>谷物</span>
                                        <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.grain}}</span> 亩</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                    <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                        <el-form-item label="稻谷：" class="formItem">
                                            <el-input v-model="ruleForm.rice" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入稻谷数量"></el-input> （亩）
                                        </el-form-item>
                                        <el-form-item label="小麦：" class="formItem">
                                            <el-input v-model="ruleForm.wheat" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小麦数量"></el-input> （亩）
                                        </el-form-item>
                                        <div style="clear:both;"></div>
                                        <el-form-item label="玉米：" class="formItem">
                                            <el-input v-model="ruleForm.corn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入玉米数量"></el-input> （亩）
                                        </el-form-item>
                                    </el-form>
                                </div>
                            </el-collapse-item>
                         </el-collapse>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="3">
                    <template slot="title">
                        <div class="titleContent">
                            <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                            <span>油料</span>
                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.oil}}</span> 亩</span>
                        </div> 
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                           <el-form-item label="花生：" class="formItem">
                                <el-input v-model="ruleForm.peanut" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入花生数量"></el-input> （亩）
                            </el-form-item>
                            <el-form-item label="油菜：" class="formItem">
                                <el-input v-model="ruleForm.rape" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入油菜数量"></el-input> （亩）
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="芝麻：" class="formItem">
                                <el-input v-model="ruleForm.sesame" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入芝麻数量"></el-input> （亩）
                            </el-form-item>
                            
                        </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="4">
                    <template slot="title">
                        <div class="titleContent">
                            <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('4') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                            <span>瓜果类</span>
                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.melonsFruitsm}}</span> 亩</span>
                        </div> 
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                           <el-form-item label="西瓜：" class="formItem">
                                <el-input v-model="ruleForm.watermelon" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入西瓜数量"></el-input> （亩）
                            </el-form-item>
                            <el-form-item label="甜瓜：" class="formItem">
                                <el-input v-model="ruleForm.muskmelon" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入甜瓜数量"></el-input> （亩）
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="草莓：" class="formItem">
                                <el-input v-model="ruleForm.strawberry" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入草莓数量"></el-input> （亩）
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
import { agrOutputProductDetail,agrOutputProductUpdate, agrOutputProductInsert } from '@/utils/api/statisticalBureau/agrOutputProduct' //统计局---主要农产品产量
import {townshipOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
export default {
    name:'agrOutputProductDetail',
    data() {
        return {
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() > new Date()-8.64e7;
                }
            },
            activeNames: ['1','2','2-1','3','4'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            id:'', //数据的id
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            townshipOption:townshipOption, //乡镇
            formDate:[], //自定义表单数据，传值给子组件
            ruleForm: {
                totalarea:0, //总合计
                dataYear:"", //	年份
                township:"", //	乡镇
                foodstuff:0, //	粮食
                beans:0, //	豆类
                tubers:0,//	薯类
                grain:0,//	谷物
                rice:0,//	稻谷
                wheat:0,//	小麦
                corn:0,//	玉米
                oil:0,//	油料
                peanut:0,//	花生
                rape:0,//	油菜
                sesame:0,//	芝麻
                melonsFruitsm:0,//	瓜果类
                watermelon:0,//	西瓜
                muskmelon:0,//	甜瓜
                strawberry:0,//	草莓
                othersType:0,//	其他类
                cotton:0,//	棉花
                flax:0,//	麻类
                sugar:0,//	糖类
                cmedicine:0,//	中药材
                vegetables:0,//	蔬菜
                otherCrops:0,//	其他农作物
 
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
                let foodstuff = 0;//粮食
                let beans = isNaN(parseFloat(newVal['beans']))?0:parseFloat(newVal['beans']);
                let tubers = isNaN(parseFloat(newVal['tubers']))?0:parseFloat(newVal['tubers']);
                let rice = isNaN(parseFloat(newVal['rice']))?0:parseFloat(newVal['rice']);
                let wheat = isNaN(parseFloat(newVal['wheat']))?0:parseFloat(newVal['wheat']);
                let corn = isNaN(parseFloat(newVal['corn']))?0:parseFloat(newVal['corn']);
                let grain = 0;//谷物
                let oil = 0;//油料
                let peanut = isNaN(parseFloat(newVal['peanut']))?0:parseFloat(newVal['peanut']);
                let rape = isNaN(parseFloat(newVal['rape']))?0:parseFloat(newVal['rape']);
                let sesame = isNaN(parseFloat(newVal['sesame']))?0:parseFloat(newVal['sesame']);
                let melonsFruitsm = 0; //瓜果类
                let watermelon = isNaN(parseFloat(newVal['watermelon']))?0:parseFloat(newVal['watermelon']);
                let muskmelon = isNaN(parseFloat(newVal['muskmelon']))?0:parseFloat(newVal['muskmelon']);
                let strawberry = isNaN(parseFloat(newVal['strawberry']))?0:parseFloat(newVal['strawberry']);
                let otherCrops = 0; //其他类
                let cotton = isNaN(parseFloat(newVal['cotton']))?0:parseFloat(newVal['cotton']);
                let flax = isNaN(parseFloat(newVal['flax']))?0:parseFloat(newVal['flax']);
                let sugar = isNaN(parseFloat(newVal['sugar']))?0:parseFloat(newVal['sugar']);
                let cmedicine = isNaN(parseFloat(newVal['cmedicine']))?0:parseFloat(newVal['cmedicine']);
                let vegetables = isNaN(parseFloat(newVal['vegetables']))?0:parseFloat(newVal['vegetables']);
                foodstuff =beans + tubers + rice + wheat + corn ;
                grain = rice + wheat + corn;
                oil =peanut +rape+sesame;
                melonsFruitsm = watermelon +muskmelon+strawberry;
                otherCrops = cotton +flax+sugar+cmedicine+vegetables;
                this.ruleForm.foodstuff = foodstuff;
                this.ruleForm.grain = grain;
                this.ruleForm.oil = oil;
                this.ruleForm.melonsFruitsm = melonsFruitsm;
                this.ruleForm.otherCrops = otherCrops;
                this.ruleForm.totalarea = foodstuff + oil + melonsFruitsm + otherCrops;

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
            let res = await agrOutputProductDetail({id:this.id});
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
            this.ruleForm.updateTime = getData(); //更新时间
            this.ruleForm.customDataList = this.formDate;//自定义表单list
            let updateObj = JSON.stringify(this.ruleForm);
            let res = await agrOutputProductUpdate(updateObj);
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
            let res = await agrOutputProductInsert(addObj);
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