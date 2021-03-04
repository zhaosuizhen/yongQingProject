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

                            <el-form-item label="品种名称" prop="cropName" class="formSelect">
                                <el-select v-model="ruleForm.cropName" filterable clearable :disabled="urlType" placeholder="请选择病害类型" @change="changeVarietiesName">
                                    <el-option
                                    v-for="item in varietiesName"
                                    :key="item.cropId"
                                    :label="item.cropName"
                                    :value="item.cropName">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="病害名称" prop="diseaseName" class="formSelect">
                                <el-select v-model="ruleForm.diseaseName" filterable clearable :disabled="urlType" placeholder="请选择病害类型">
                                    <el-option
                                    v-for="item in diseaseName[varietiesNameFlag]"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="病害类型" prop="diseaseType" class="formSelect">
                                <el-select v-model="ruleForm.diseaseType" filterable clearable :disabled="urlType" placeholder="请选择病害类型">
                                    <el-option
                                    v-for="item in diseaseType"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="发病部位" prop="parts" >
                                <el-input  :disabled="urlType" v-model="ruleForm.parts" placeholder="请输入发病部位"></el-input>
                            </el-form-item>

                            <el-form-item label="病害描述" prop="content" class="formItem-textarea">
                                <el-input type="textarea" v-model="ruleForm.content" :rows="5" :disabled="urlType"></el-input>
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
        <BackListPage v-if="urlType"></BackListPage>
        </section>
        
    </div>
</template>
<script>
import { getEnterpriseNameList } from '@/utils/api/industryDo/doBusinessEntity' //产业办---经营主体数据
import { diseaseDescribeInsert,diseaseDescribeDetail,diseaseDescribeUpdate,diseaseDescribeGetCropList } from '@/utils/api/plantProtectionStation/diseaseDescribe' //植保站---病害描述
import {townshipOption,subjectTypeOption,enterpriseTypeOption,enterpriseKindOption,productType,diseaseType} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
// import BaiduMap from '@/components/baiduMap/BaiduMap';
import validate from '@/utils/validator'; //检验
import BackListPage from '@/view/backListPage'
export default {
    name:'doBusinessEntityDetail',
    data() {
        return {
            varietiesName:[
                // {id:0,name:'水稻',value:'水稻'},
                // {id:1,name:'小麦',value:'小麦'},
                // {id:2,name:'玉米',value:'玉米'},
                // {id:3,name:'大豆',value:'大豆'},
                // {id:4,name:'马铃薯',value:'马铃薯'},
                // {id:5,name:'油菜',value:'油菜'},
                // {id:6,name:'白菜',value:'白菜'},
                // {id:7,name:'番茄',value:'番茄'},
                // {id:8,name:'辣椒',value:'辣椒'},
                // {id:9,name:'瓜类',value:'瓜类'},
                // {id:10,name:'柑橘',value:'柑橘'},
                // {id:11,name:'花生',value:'花生'},
                // {id:12,name:'其他粮食作物',value:'其他粮食作物'},
                // {id:13,name:'蔬菜',value:'蔬菜'},
            ],//品种名称
            varietiesNameFlag:-1,//品种名称标志

            diseaseName:[
                [
                    {id:0,name:'稻瘟病',value:'稻瘟病'},
                    {id:1,name:'纹枯病',value:'纹枯病'},
                    {id:2,name:'稻曲病 ',value:'稻曲病 '},
                    {id:3,name:'二化螟',value:'二化螟'},
                    {id:4,name:'三化螟',value:'三化螟'},
                    {id:5,name:'稻纵卷叶螟',value:'稻纵卷叶螟'},
                    {id:6,name:'稻飞虱',value:'稻飞虱'},
                    {id:7,name:'大螟',value:'大螟'},
                    {id:8,name:'稻苞虫',value:'稻苞虫'},
                    {id:9,name:'稻蝗',value:'稻蝗'}
                ],
                [
                    {id:0,name:'小麦条锈病',value:'小麦条锈病'},
                    {id:1,name:'小麦叶锈病 ',value:'小麦叶锈病 '},
                    {id:2,name:'小麦赤霉病',value:'小麦赤霉病'},
                    {id:3,name:'小麦白粉病',value:'小麦白粉病'},
                    {id:4,name:'小麦纹枯病',value:'小麦纹枯病'},
                    {id:5,name:'小麦黑穗病',value:'小麦黑穗病'},
                    {id:6,name:'蚜虫',value:'蚜虫'},
                    {id:7,name:'麦蜘蛛',value:'麦蜘蛛'},
                    {id:8,name:'蛴螬',value:'蛴螬'},
                    {id:9,name:'蝼蛄',value:'蝼蛄'},
                    {id:10,name:'金针虫',value:'金针虫'}
                ],
                [
                    {id:0,name:'玉米大斑病',value:'玉米大斑病'},
                    {id:1,name:'玉米小斑病',value:'玉米小斑病'},
                    {id:2,name:'玉米纹枯病',value:'玉米纹枯病'},
                    {id:3,name:'玉米螟',value:'玉米螟'},
                    {id:4,name:'粘虫',value:'粘虫'},
                    {id:5,name:'地老虎',value:'地老虎'}
                ],
                [
                    {id:0,name:'大豆锈病',value:'大豆锈病'},
                    {id:1,name:'大豆霜霉病',value:'大豆霜霉病'},
                    {id:2,name:'大豆菌核病',value:'大豆菌核病'},
                    {id:3,name:'大豆蚜',value:'大豆蚜'},
                    {id:4,name:'棉铃虫',value:'棉铃虫'},
                    {id:5,name:'草地螟',value:'草地螟'},
                    {id:6,name:'豆荚螟',value:'豆荚螟'},
                    {id:7,name:'蛴螬',value:'蛴螬'},
                    {id:8,name:'地老虎',value:'地老虎'}
                ],
                [
                    {id:0,name:'晚疫病',value:'晚疫病'}
                ],
                [
                    {id:0,name:'菌核病',value:'菌核病'},
                    {id:1,name:'霜霉病',value:'霜霉病'},
                    {id:2,name:'根肿病',value:'根肿病'},
                    {id:3,name:'油菜蚜虫',value:'油菜蚜虫'},
                    {id:4,name:'小菜蛾',value:'小菜蛾'},
                    {id:5,name:'菜青虫',value:'菜青虫'}
                ],
                [
                    {id:0,name:'霜霉病',value:'霜霉病'},
                    {id:1,name:'软腐病',value:'软腐病'},
                    {id:2,name:'菜蚜',value:'菜蚜'},
                    {id:3,name:'菜粉蝶',value:'菜粉蝶'},
                    {id:4,name:'甜菜夜蛾',value:'甜菜夜蛾'},
                    {id:5,name:'小菜蛾',value:'小菜蛾'}
                ],
                [
                    {id:0,name:'晚疫病',value:'晚疫病'},
                    {id:1,name:'灰霉病',value:'灰霉病'}
                ],
                [
                    {id:0,name:'青枯病',value:'青枯病'}
                ],
                [
                    {id:0,name:'白粉病',value:'白粉病'},
                    {id:1,name:'黄瓜霜霉病',value:'黄瓜霜霉病'},
                    {id:2,name:'美洲斑潜蝇',value:'美洲斑潜蝇'}
                ],
                [
                    {id:0,name:'柑桔叶螨',value:'柑桔叶螨'},
                    {id:1,name:'柑橘蚧虫',value:'柑橘蚧虫'},
                    {id:2,name:'柑桔潜叶虫',value:'柑桔潜叶虫'}
                ],
                [
                    {id:0,name:'花生叶斑病',value:'花生叶斑病'},
                    {id:1,name:'花生锈病',value:'花生锈病'},
                    {id:2,name:'花生蚜虫',value:'花生蚜虫'},
                    {id:3,name:'花生叶螨',value:'花生叶螨'},
                    {id:4,name:'蛴螬',value:'蛴螬'},
                    {id:5,name:'蝼蛄',value:'蝼蛄'}
                ],
                [
                    {id:0,name:'蛴螬',value:'蛴螬'}
                ],
                [
                    {id:0,name:'白菜霜霉病',value:'白菜霜霉病'},
                    {id:1,name:'白菜软腐病',value:'白菜软腐病'},
                    {id:2,name:'番茄晚疫病',value:'番茄晚疫病'},
                    {id:3,name:'番茄灰霉病',value:'番茄灰霉病'},
                    {id:4,name:'辣椒青枯病',value:'辣椒青枯病'},
                    {id:5,name:'瓜类白粉病',value:'瓜类白粉病'},
                    {id:6,name:'瓜类霜霉病',value:'瓜类霜霉病'},
                    {id:7,name:'黄瓜霜霉病',value:'黄瓜霜霉病'},
                    {id:8,name:'菜蚜',value:'菜蚜'},
                    {id:9,name:'菜青虫',value:'菜青虫'},
                    {id:10,name:'小菜蛾',value:'小菜蛾'},
                    {id:11,name:'甜菜夜蛾',value:'甜菜夜蛾'},
                    {id:12,name:'南美斑潜蝇',value:'南美斑潜蝇'},
                    {id:13,name:'豆荚螟',value:'豆荚螟'},
                    {id:14,name:'烟青虫',value:'烟青虫'},
                    {id:15,name:'蔬菜红蜘蛛',value:'蔬菜红蜘蛛'},
                    {id:16,name:'美洲斑潜蝇',value:'美洲斑潜蝇'}
                ]
            ],//病害名称

            activeNames: ['1'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            id:'', //数据的id
            formDate:[], //自定义表单数据，传值给子组件
            ruleForm: {
                diseaseName:'',//病害名称
                diseaseType:'',//病害类型
                parts:'',//发病部位
                content:'',//病害描述
                cropId:'',//病害描述
                cropName:'',//病害描述

                createTime:'',//创建时间
                updateTime:'',//更新时间
                buildUser:'0',//创建人
                checkUser:'0',//审核人
            },
            townshipOption:townshipOption, //乡镇
            subjectTypeOption:subjectTypeOption,  //单位性质
            enterpriseTypeOption:enterpriseTypeOption, //企业类型
            productType:productType,//产品类型
            diseaseType:diseaseType,//病害类型
            enterpriseKindOption:enterpriseKindOption, //经营类别
            rules: {
                legalPerson:[
                      {required: true, message: '请输入法定代表人',trigger: 'blur', }
                ],
                diseaseName:[
                      {required: true, message: '请输入病害名称',trigger: 'blur', }
                ],
                startTime:[
                      {required: true, message: '请选择项目启动时间',trigger: 'blur', }
                ],
                parts: [
                    { required: true, message: '请输入发病部位',trigger: 'blur' }
                ],
                diseaseType:[
                     { required: true, message: '请选择品种名称',trigger: 'blur' }
                ],
                content: [
                    { required: true, message: '请输入病害描述',trigger: 'blur' }
                ],
                cropId: [
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
        BackListPage
        // 'Baidu-map':BaiduMap
    },
    mounted(){
        this.getList()
        this.nameFlag = this.activeNames;
        this.urlType = this.$route.query.type == 'detail'?true:false;
        this.miniNav = this.$route.query.toMiniNav; //左上角导航
        this.id = this.$route.query.id; //查看详情数据的id值
        this.initData(); //初始化数据
    },
    methods:{
        //获取列表
        async getList(){
            let res = await diseaseDescribeGetCropList()
            this.varietiesName = res.data.entitys
            console.log(res.data.entitys)
        },
        changeVarietiesName(val){
            this.varietiesName.forEach(item => {
                if(item.cropName == val){
                    this.ruleForm.cropId = item.cropId
                }
            })
            if(val == '水稻'){
                this.varietiesNameFlag = 0
            }else if(val == '小麦'){
                this.varietiesNameFlag = 1
            }else if(val == '玉米'){
                this.varietiesNameFlag = 2
            }else if(val == '大豆'){
                this.varietiesNameFlag = 3
            }else if(val == '马铃薯'){
                this.varietiesNameFlag = 4
            }else if(val == '油菜'){
                this.varietiesNameFlag = 5
            }else if(val == '白菜'){
                this.varietiesNameFlag = 6
            }else if(val == '番茄'){
                this.varietiesNameFlag = 7
            }else if(val == '辣椒'){
                this.varietiesNameFlag = 8
            }else if(val == '瓜类'){
                this.varietiesNameFlag = 9
            }else if(val == '柑橘'){
                this.varietiesNameFlag = 10
            }else if(val == '花生'){
                this.varietiesNameFlag = 11
            }else if(val == '其他粮食作物'){
                this.varietiesNameFlag = 12
            }else if(val == '蔬菜'){
                this.varietiesNameFlag = 13
            }
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
            console.log(this.id)
            let res = await diseaseDescribeDetail({id:this.id});
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
            // this.ruleForm.customDataList = this.formDate;//自定义表单list
            let updateObj = JSON.stringify(this.ruleForm);
            let res = await diseaseDescribeUpdate(updateObj);
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
            let res = await diseaseDescribeInsert(addObj);
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