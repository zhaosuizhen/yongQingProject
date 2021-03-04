<template>
<!--质检办---经营主体数据详情-->
    <div id="doBusinessEntityDetail" class="pageContent" v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>基本信息</div>
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        
                            <el-form-item label="村名称" prop="villageName" >
                                <el-input  :disabled="urlType" v-model="ruleForm.villageName" placeholder="请输入姓名"></el-input>
                            </el-form-item>

                            <el-form-item label="所属乡镇" prop="township" class="formSelect">
                                <el-select v-model="ruleForm.township" filterable clearable :disabled="urlType" placeholder="请选择所属乡镇">
                                    <el-option
                                    v-for="item in townshipOption"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="建成时间" prop="createTime" >
                                <el-date-picker
                                    v-model="ruleForm.createTime"
                                    :disabled="urlType"
                                    type="date"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </el-form-item>

                            <el-form-item label="省、市等级" prop="level" class="formSelect">
                                <el-select v-model="ruleForm.level" filterable clearable :disabled="urlType" placeholder="请选择省、市等级">
                                    <el-option
                                    v-for="item in ProvinceCity"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="项目名称" prop="projectName" class="formSelect">
                                <el-select v-model="ruleForm.projectN" filterable clearable :disabled="urlType" @change="changeProject" placeholder="请选择项目名称">
                                    <el-option
                                    v-for="item in projectNames"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                            

                            
                            <!-- <el-form-item label="行业名称：" prop="industry" class="formItem">
                                <el-input v-model="ruleForm.state" :disabled="urlType" placeholder="请输入行业名称"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="产品名称：" prop="subjectType" class="formItem">
                                <el-input v-model="ruleForm.subjectType" :disabled="urlType" placeholder="请输入产品名称"></el-input>
                            </el-form-item>
                            <el-form-item label="产品类型：" prop="registeredCapital" class="formItem">
                                <el-input v-model="ruleForm.registeredCapital" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" placeholder="请输入产品类型"></el-input> (万元)
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="经营类别：" prop="manageType" class="formItem formSelect">
                                <el-select v-model="ruleForm.manageType" filterable clearable :disabled="urlType" placeholder="请选择经营类别">
                                    <el-option
                                    v-for="item in enterpriseTypeOption"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="成立时间：" prop="establishTime" class="formItem">
                                <el-date-picker
                                    v-model="ruleForm.establishTime" 
                                    class="pickerWidth" 
                                    type="date" 
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择成立时间"></el-date-picker>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="公司类型：" class="formItem">
                                <el-input v-model="ruleForm.companyType" :disabled="urlType" placeholder="请输入公司类型"></el-input>
                            </el-form-item>
                            <el-form-item label="统一社会信用代码：" class="formItem">
                                <el-input v-model="ruleForm.companyNum" :disabled="urlType" placeholder="请输入统一社会信用代码"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="法定代表人："  prop="legalPerson" class="formItem">
                                <el-input v-model="ruleForm.legalPerson" :disabled="urlType" placeholder="请输入法定代表人"></el-input>
                            </el-form-item>
                            <el-form-item label="联系电话：" prop="phone" class="formItem">
                                <el-input v-model="ruleForm.phone" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入联系电话"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="邮箱：" prop="email" class="formItem">
                                <el-input v-model="ruleForm.email" :disabled="urlType" placeholder="请输入邮箱"></el-input>
                            </el-form-item>
                            <el-form-item label="占地面积：" prop="landArea" class="formItem">
                                <el-input v-model="ruleForm.landArea" :disabled="urlType" placeholder="请输入占地面积"></el-input> (亩)
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="网址：" class="formItem">
                                <el-input v-model="ruleForm.companyUrl" :disabled="urlType" placeholder="请输入网站"></el-input>
                            </el-form-item>
                            <el-form-item label="基地面积：" prop="baseArea" class="formItem">
                                <el-input v-model="ruleForm.baseArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入基地面积"></el-input> (亩)
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="经营范围：" class="formItem-textarea">
                                <el-input v-model="ruleForm.scope" type="textarea" :rows="2" :disabled="urlType" class="formTextarea" placeholder="请输入经营范围"></el-input>
                            </el-form-item>
                            <el-form-item label="所属乡镇：" prop="township" class="formItem formSelect">
                                <el-select v-model="ruleForm.township" filterable clearable :disabled="urlType" placeholder="请选择所属乡镇">
                                    <el-option
                                    v-for="item in townshipOption"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            
                            <el-form-item label="地址：" class="formItem" prop="adress">
                                <el-input v-model="ruleForm.adress" :disabled="urlType" placeholder="请输入经营范围"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="经度：" prop="longitude" class="formItem">
                                <el-input v-model="ruleForm.longitude" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入经度"></el-input>
                            </el-form-item>
                            
                            <el-form-item label="纬度：" prop="latitude" class="formItem">
                                <el-input v-model="ruleForm.latitude" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入纬度"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div> -->
                        </el-form>

                         <!-- <el-form :model="ruleForm" status-icon class="demo-ruleForm mapContent">
                             <el-form-item label="地图：">
                                <Baidu-map
                                @syncCenterAndZoom='syncCenterAndZoom'
                                @getClickInfo='getClickInfo'
                                ></Baidu-map>
                            </el-form-item>
                         </el-form> -->
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
import { getEnterpriseNameList } from '@/utils/api/industryDo/doBusinessEntity' //产业办---经营主体数据
import { ruralDataInsert,ruralDataDetail,ruralDataUpdate } from '@/utils/api/ruralLivable/livableVillageData' //宜居乡村---乡村数据
import { livableProjectManageList } from '@/utils/api/ruralLivable/livableProjectManage'  //宜居乡村---项目管理接口
import {townshipOption,subjectTypeOption,enterpriseTypeOption,enterpriseKindOption,productType,ProvinceCity} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
// import BaiduMap from '@/components/baiduMap/BaiduMap';
import validate from '@/utils/validator'; //检验
export default {
    name:'doBusinessEntityDetail',
    data() {
        return {
            activeNames: ['1'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            id:'', //数据的id
            formDate:[], //自定义表单数据，传值给子组件
            ruleForm: {
                enterpriseName:'',//企业名称
                villageName:'',//村名称
                township:'',//所属乡镇
                level:'',//省、市等级
                industry:'',//行业名称
                productName:'',//产品名称
                productType:'',//产品类型
                ProvinceCity:'',//省、市
                enterpriseType:'',//单位性质
                projectId:'',//项目标识
                projectName:'',//项目名称
                projectN:'',//项目名称--展示
                contact:'',//姓名
                phone:'',//联系电话
                scale:'',//种植面积
                yield:'',//产量
                address:'',//地址
                remark:'',//备注
                createTime:'',//创建时间
                updateTime:'',//更新时间
                buildUser:'0',//创建人
                checkUser:'0',//审核人
            },
            townshipOption:townshipOption, //乡镇
            subjectTypeOption:subjectTypeOption,  //单位性质
            enterpriseTypeOption:enterpriseTypeOption, //企业类型
            productType:productType,//产品类型
            ProvinceCity:ProvinceCity,//省、市
            projectNames:[],//项目名称
            enterpriseKindOption:enterpriseKindOption, //经营类别
            rules: {
                projectName:[
                      {required: true, message: '请输入村名称',trigger: 'blur', }
                ],
                startTime:[
                      {required: true, message: '请选择建成时间',trigger: 'blur', }
                ],
                township: [
                    { required: true, message: '请选择乡镇',trigger: 'blur' }
                ],
                villageName:[
                     { required: true, message: '请输入村名称',trigger: 'blur' }
                ],
                createTime: [
                    { required: true, message: '请选择建成时间',trigger: 'blur' }
                ],
                industry: [
                    { required: true, message: '请选择行业名称',trigger: 'blur'}
                ],
                productName: [
                    { required: true, message: '请选择产品名称',trigger: 'blur'}
                ],
                productType: [
                    { required: true, message: '请选择产品类型',trigger: 'blur'}
                ],
                enterpriseType: [
                    { required: true, message: '请选择单位性质',trigger: 'blur'}
                ],
                phone: [
                    { required: true, message: '请输入联系电话',trigger: 'blur'}
                ],
                scale: [
                    { required: true, message: '请输入种植面积',trigger: 'blur'}
                ],
                yield: [
                    { required: true, message: '请输入产量',trigger: 'blur'}
                ],
                registeredCapital:[
                    { required: true, message: '请输入注册资本',trigger: 'blur' }
                ],
                establishTime:[
                    { required: true, message: '请选择成立时间',trigger: 'blur' }
                ],
                subjectType:[
                     { required: true, message: '请选择主体类型',trigger: 'blur' }
                ],
                email:[
                    { required: false },
                    {validator: validate.FormValidate.Form().validateEmail,trigger: 'blur'}
                ],
                landArea:[
                    { required: true, message: '请输入占地面积',trigger: 'blur' }
                ],
                baseArea:[
                    { required: true, message: '请输入基地面积',trigger: 'blur' }
                ],
                contact:[
                    { required: true, message: '请输入姓名',trigger: 'blur' }
                ],
                longitude:[
                     { required: true, message: '请输入纬度',trigger: 'blur' }
                ],
                latitude:[
                     { required: true, message: '请输入维度',trigger: 'blur' }
                ],
            },
            enterpriseNameOption:[], //企业名称列表
            timeout:  null
        }
    },
    components:{
        'Custom-form':CustomForm,
        // 'Baidu-map':BaiduMap
    },
    mounted(){
        this.getMenuList()
        this.nameFlag = this.activeNames;
        this.urlType = this.$route.query.type == 'detail'?true:false;
        this.miniNav = this.$route.query.toMiniNav; //左上角导航
        this.id = this.$route.query.id; //查看详情数据的id值
        this.initData(); //初始化数据
    },
    methods:{
        changeProject(val){
           console.log(val)
           this.projectNames.forEach(item => {
               if(item.id == val){
                   this.ruleForm.projectName = item.name
                   this.ruleForm.projectId = val
               }
           })
           console.log(this.ruleForm.projectId)
        },
        async getMenuList(){
            let res = await livableProjectManageList({
                queryStartTime:'',
                queryEndTime:'',
                isCheck:'',
                queryKey:'',
                pageSize:100,
                currentPage:1
            })
            this.projectNames = res.data.entitys.records.map((item) => {
                return {
                    id:item.id,
                    name:item.projectName,
                    value:item.projectName
                }
            })
        },
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
            let res = await ruralDataDetail({id:this.id});
            
             if(res.data.status== 0){
                this.ruleForm =  res.data.entitys;
                this.ruleForm.projectN = res.data.entitys.projectName
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
            // this.ruleForm.customDataList = this.formDate;//自定义表单list
            let updateObj = JSON.stringify(this.ruleForm);
            let res = await ruralDataUpdate(updateObj);
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
            console.log(this.ruleForm)
            this.loading = true; //显示加载框
            this.ruleForm.id = this.id; //数据id
            this.ruleForm.updateTime = getData(); //更新时间
            this.ruleForm.createTime = getData(); //创建时间
            this.ruleForm.customDataList = this.formDate;//自定义表单list
            let addObj = JSON.stringify(this.ruleForm);
            let res = await ruralDataInsert(addObj);
            console.log(res)
             if(res.data.status== 0){
                this.$message({
                    message:'新增成功',
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
        //地图获取经纬度
        getClickInfo (e) {
            this.ruleForm.longitude = e.point.lng
            this.ruleForm.latitude = e.point.lat
        },
        //地图缩放
        syncCenterAndZoom (e) {
            const {lng,lat} = e.target.getCenter()
            this.ruleForm.longitude = lng
            this.ruleForm.latitude = lat
            this.zoom = e.target.getZoom()
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