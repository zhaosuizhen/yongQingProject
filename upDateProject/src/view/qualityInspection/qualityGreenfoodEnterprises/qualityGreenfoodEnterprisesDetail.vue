<template>
  <!--质检办—— 绿色食品企业产品数据 详情-->
    <div id="qualityOrganicProductsDetail" class="pageContent" v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>企业产品信息</div> <!---->
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="企业名称：" prop="enterpriseName" class="formItem autocomplete">
                                <el-autocomplete
                                    v-model="ruleForm.enterpriseName"
                                    :fetch-suggestions="querySearchAsync"
                                    placeholder="请输入内容"
                                    @select="handleSelect"
                                ></el-autocomplete>
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
                            <el-form-item label="企业类型：" prop="enterpriseType" class="formItem formSelect" >
                                <el-select v-model="ruleForm.enterpriseType" filterable clearable :disabled="urlType" placeholder="请选择">
                                    <el-option
                                    v-for="item in enterpriseTypeOption"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="品种：" prop="varieties" class="formItem">
                                 <el-input v-model="ruleForm.varieties" :disabled="urlType" placeholder="请输入品种"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="联系人：" prop="contact" class="formItem">
                                <el-input v-model="ruleForm.contact" :disabled="urlType" placeholder="请输入联系人"></el-input>
                            </el-form-item>
                            <el-form-item label="企业品牌：" prop="make" class="formItem">
                                <el-input v-model="ruleForm.make" :disabled="urlType" placeholder="请输入企业品牌"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="产地监测面积：" prop="monitorArea" class="formItem">
                                <el-input v-model="ruleForm.monitorArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入产地监测面积"></el-input>（亩）
                            </el-form-item>
                            <el-form-item label="联系电话：" prop="phone" class="formItem">
                                <el-input v-model="ruleForm.phone" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入联系电话"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="认证开始时间：" prop="startTime" class="formItem">
                                <el-date-picker 
                                    v-model="ruleForm.startTime" 
                                    :disabled="urlType" 
                                    type="date" 
                                    value-format="yyyy-MM-dd"
                                    :picker-options="pickerBeginDateBefore"
                                    placeholder="选择日期"></el-date-picker>
                            </el-form-item>
                            <el-form-item label="认证结束时间：" prop="endTime" class="formItem">
                                <el-date-picker 
                                    v-model="ruleForm.endTime" 
                                    :disabled="urlType" 
                                    type="date" 
                                    value-format="yyyy-MM-dd"
                                    :picker-options="pickerBeginDateAfter"
                                    placeholder="选择日期"></el-date-picker>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="核准产量：" prop="approvedProduction" class="formItem">
                                <el-input v-model="ruleForm.approvedProduction" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入核准产量"></el-input>（吨）
                            </el-form-item>
                            <el-form-item label="认证编号：" class="formItem">
                                <el-input v-model="ruleForm.certificateNum" :disabled="urlType" placeholder="请输入认证编号"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                        </el-form>
                    </div>
                </el-collapse-item>
            </el-collapse>
            <!--自定义表单组件-->
             <Custom-form v-if="formDate.length>0" :formDate.sync = formDate :type='urlType' @customDatavalueChange='customDatavalueChange'></Custom-form>
            <el-row type='flex' justify="center" class="footrBtnGroup" v-if="!urlType">
            <el-button  type="primary" class="submitBtnMargin" @click="submit">提交</el-button>
            <el-button @click="cancel">取消</el-button>
        </el-row>
        </section>
        
    </div>
</template>
<script>
import { qualityGreenFoodDetail, qualityGreenFoodUpdate, qualityGreenFoodInsert } from '@/utils/api/qualityInspection/qualityGreenfoodEnterprises'; //质检办--绿色食品企业产品数据
import { getEnterpriseNameList } from '@/utils/api/industryDo/doBusinessEntity'; // 获取企业名称列表数据
import {townshipOption,enterpriseTypeOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime'
import CustomForm from '@/components/customForm/CustomForm';
import validate from '@/utils/validator'; //检验
export default {
    name:'qualityOrganicProductsDetail',
    data() {
        return {
            //设置开始时间最大到今天
             pickerBeginDateBefore: {
                disabledDate: time => {
                    return time.getTime() >= Date.now() - 24 * 60 * 60 * 1000
                }
            },
            //结束时间时间选择范围
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() < new Date(this.ruleForm.startTime.replace(/-/g, '/')).getTime()
                }
            },
            activeNames: ['1'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            id:'', //数据的id
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            formDate:[], //自定义表单数据，传值给子组件
            ruleForm: {
                enterpriseName:'',//企业名称
                enterpriseType:'',//企业类型
                township:'', //乡镇
                make:'', //企业品牌
                phone:'',//联系电话
                contact:'', //联系人
                startTime:'',//认证开始时间
                endTime:'', //认证结束时间
                certificateNum:'',//认证编号
                varieties:'', //种植品种
                monitorArea:'',///产地监测面积
                approvedProduction:'',//核准产量
            },
            rules: {
                enterpriseName: [
                    {required: true, message: '请选择企业名称',trigger: 'blur', }
                ],
                enterpriseType: [
                    { required: true, message: '请选择企业类型',trigger: 'blur' }
                ],
                township: [
                    { required: true, message: '请选择乡镇',trigger: 'blur' }
                ],
                make:[
                    { required: true, message: '请输入企业品牌',trigger: 'blur' }
                ],
                phone:[
                    { required: true, message: '请输入联系电话',trigger: 'blur' },
                    {validator: validate.FormValidate.Form().validatePhone,trigger: 'blur'}
                ],
                contact:[
                    { required: true, message: '请输入联系人',trigger: 'blur' }
                ],
                startTime:[
                     { required: true, message: '请选择认证开始时间',trigger: 'blur' }
                ],
                endTime:[
                     { required: true, message: '请选择认证结束时间',trigger: 'blur' }
                ],
                varieties:[
                      { required: true, message: '请输入品种',trigger: 'blur' }
                ],
                monitorArea:[
                      { required: true, message: '请输入产地监测面积',trigger: 'blur' }
                ],
                approvedProduction:[
                      { required: true, message: '请输入核准产量',trigger: 'blur' }
                ]
            },
            townshipOption:townshipOption, //乡镇
            enterpriseTypeOption:enterpriseTypeOption, //企业类型
            enterpriseNameOption:[], //企业名称列表
            timeout:  null
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
            let res = await qualityGreenFoodDetail({id:this.id});
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
                    if(validate.FormValidate.Form().compareDate(this.ruleForm.startTime,this.ruleForm.endTime)){
                        this.$message({
                            message: '开始时间不能大于结束时间',
                            type: 'warning'
                        });
                        return false;
                    }else{
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            if(this.$route.query.type === 'add'){
                                this.addData(); //新增数据
                            }else{
                                this.updateData();//更新信息
                            } 
                        })
                    }
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
            let res = await qualityGreenFoodUpdate(updateObj);
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
            let res = await qualityGreenFoodInsert(addObj);
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
        //获取企业名称列表数据
        async getEnterpriseNameList(queryString,cb){
            let res = await getEnterpriseNameList({enterpriseName:queryString});
            if(res.data.status== 0){
                this.enterpriseNameOption = res.data.entitys; //企业名称列表数据
                for(let i of this.enterpriseNameOption){
                    i.value = i.enterpriseName;  //将想要展示的数据作为value
                }
                var results = queryString ? this.enterpriseNameOption.filter(this.createStateFilter(queryString)) : this.enterpriseNameOption ;
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    cb(results);
                }, 100 * Math.random());
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
        },

        //模糊查询
        querySearchAsync(queryString,cb) {
            this.getEnterpriseNameList(queryString,cb);
        },
        createStateFilter(queryString) {
            return (state) => {
                return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        handleSelect(item) {
            console.log(item);
        }


    }
}
</script>
<style scoped lang="scss">

</style>