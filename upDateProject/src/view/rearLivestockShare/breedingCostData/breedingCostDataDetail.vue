<template>
    <!----统计局---畜产品产量 添加编辑详情---->
    <div id="liveProductValueDetail"  class="pageContent" v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div  class="titleContent">
                            <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                            <span>基本信息</span>
                            <!-- <span class="titleRight">总计<span class="valueStyle">{{valueTotal}}</span> 吨</span> -->
                        </div> 
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                           <el-form-item label="时间" prop="dateTime" class="formItem formSelect">
                                <el-date-picker
                                    v-model="ruleForm.dateTime"
                                    :disabled="urlType" 
                                    type="date" 
                                    value-format="yyyy-MM-dd"
                                    format="yyyy-MM-dd"
                                    :picker-options="pickerBeginDateAfter"
                                    placeholder="选择时间">
                                    </el-date-picker>
                            </el-form-item>  
                            <el-form-item label="豆粕全国" prop="soybeanCountry" class="formItem">
                                <el-input v-model="ruleForm.soybeanCountry" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入豆粕全国数量"></el-input> （元/吨）
                            </el-form-item>
                            <el-form-item label="饲料成本" prop="feedCost" class="formItem">
                                <el-input v-model="ruleForm.feedCost" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入饲料成本数量"></el-input> （元/头）
                            </el-form-item>
                            <el-form-item label="豆粕四川" prop="soybeanSc" class="formItem">
                                <el-input v-model="ruleForm.soybeanSc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入豆粕四川数量"></el-input> （元/吨）
                            </el-form-item>
                            <el-form-item label="猪仔成本" prop="pigCost" class="formItem">
                                <el-input v-model="ruleForm.pigCost" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入中猪仔成本数量"></el-input> （元/头）
                            </el-form-item>  
                            <el-form-item label="玉米全国" prop="cornCountry" class="formItem">
                                <el-input v-model="ruleForm.cornCountry" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入玉米全国数量"></el-input> （元/吨）
                            </el-form-item>
                            <el-form-item label="养殖成本" prop="breedCost" class="formItem">
                                <el-input v-model="ruleForm.breedCost" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入养殖成本数量"></el-input> （元/头）
                            </el-form-item>
                            <el-form-item label="玉米四川" prop="cornSc" class="formItem">
                                <el-input v-model="ruleForm.cornSc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入中玉米四川数量"></el-input> （元/吨）
                            </el-form-item>  
                        </el-form>
                    </div>
                </el-collapse-item>
            </el-collapse>
            <!--自定义表单组件-->
             <!-- <Custom-form v-if="formDate.length>0" :formDate.sync = formDate :type='urlType' @customDatavalueChange='customDatavalueChange'></Custom-form> -->
            <el-row type='flex' justify="center" class="footrBtnGroup" v-if="!urlType">
            <el-button  type="primary" class="submitBtnMargin"  @click="submit">提交</el-button>
            <el-button @click="cancel">取消</el-button>
        </el-row>
        </section>
        
    </div>
</template>
<script>
//统计局---畜产品产量 接口
import { breedingCostDataDetail,breedingCostDataUpdate, breedingCostDataInsert } from '@/utils/api/rearLivestockShare/breedingCostData' 
import {townshipOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
// import CustomForm from '@/components/customForm/CustomForm';
export default {
    name:'breedingCostDataDetail',
    data() {
        return {
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() > new Date()-8.64e7;
                }
            },
            activeNames: ['1','2','2-1'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            id:'', //数据的id
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            townshipOption:townshipOption, //乡镇
            formDate:[], //自定义表单数据，传值给子组件
            valueTotal:0,//总合计
            ruleForm: {
                dateTime:'',//时间
                soybeanCountry:'',//豆粕全国
                feedCost:'',//饲料成本
                soybeanSc:'',//豆粕四川
                pigCost:'',//猪仔成本
                cornCountry:'',//玉米全国
                breedCost:'',//养殖成本
                cornSc:'',//玉米四川

            },
            rules: {
                dateTime: [
                    { required: true, message: '请选择时间',trigger: 'blur' }
                ],
                soybeanCountry: [
                    { required: true, message: '请选择豆粕全国',trigger: 'blur' }
                ],
                feedCost: [
                    { required: true, message: '请选择饲料成本',trigger: 'blur' }
                ],
                soybeanSc: [
                    { required: true, message: '请选择豆粕四川',trigger: 'blur' }
                ],
                pigCost: [
                    { required: true, message: '请选择仔猪成本',trigger: 'blur' }
                ],
                cornCountry: [
                    { required: true, message: '请选择玉米全国',trigger: 'blur' }
                ],
                breedCost: [
                    { required: true, message: '请选择养殖成本',trigger: 'blur' }
                ],
                cornSc: [
                    { required: true, message: '请选择玉米四川',trigger: 'blur' }
                ],
            }
        }
    },
    components:{
        // 'Custom-form':CustomForm
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
                let meatAll = 0; //肉类

                let milk = isNaN(parseFloat(newVal['milk']))?0:parseFloat(newVal['milk']);
                let honey = isNaN(parseFloat(newVal['honey']))?0:parseFloat(newVal['honey']);
                let egg = isNaN(parseFloat(newVal['egg']))?0:parseFloat(newVal['egg']);
                let cocoon = isNaN(parseFloat(newVal['cocoon']))?0:parseFloat(newVal['cocoon']);

                let otherMeat = isNaN(parseFloat(newVal['otherMeat']))?0:parseFloat(newVal['otherMeat']);
                let pork = isNaN(parseFloat(newVal['pork']))?0:parseFloat(newVal['pork']);
                let beef = isNaN(parseFloat(newVal['beef']))?0:parseFloat(newVal['beef']);
                let mutton = isNaN(parseFloat(newVal['mutton']))?0:parseFloat(newVal['mutton']);
                let porkBeefMutton = 0; //猪牛羊肉
                let other = milk +honey + egg + cocoon;
                meatAll =otherMeat +pork+beef+mutton  ;
                porkBeefMutton = pork+beef+mutton ;
                this.ruleForm.meatAll = meatAll;
                this.ruleForm.porkBeefMutton = porkBeefMutton;
                this.valueTotal = meatAll+other
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
            let res = await breedingCostDataDetail({id:this.id});
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
            let res = await breedingCostDataUpdate(updateObj);
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
            let res = await breedingCostDataInsert(addObj);
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