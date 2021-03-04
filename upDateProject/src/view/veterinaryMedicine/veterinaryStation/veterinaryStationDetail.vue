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
                            <el-form-item label="兽医站名称"  prop="vetName" class="formItem">
                                <el-input v-model="ruleForm.vetName" :disabled="urlType" placeholder="请输入兽医站名称"></el-input>
                            </el-form-item>
                            <el-form-item label="经营状态" class="formItem">
                                <el-input v-model="ruleForm.state" :disabled="urlType" placeholder="请输入经营状态"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="法定代表人"  prop="legalPerson" class="formItem">
                                <el-input v-model="ruleForm.legalPerson" :disabled="urlType" placeholder="请输入法定代表人"></el-input>
                            </el-form-item>
                            <el-form-item label="联系电话" class="formItem">
                                <el-input v-model="ruleForm.phone" :disabled="urlType" placeholder="请输入联系电话"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="固定电话" class="formItem">
                                <el-input v-model="ruleForm.telephone" :disabled="urlType" placeholder="请输入固定电话"></el-input>
                            </el-form-item>
                            <el-form-item label="单位人数" class="formItem">
                                <el-input v-model="ruleForm.personCount" :disabled="urlType" placeholder="请输入单位人数"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            
                            <el-form-item label="备注" class="formItem-textarea">
                                <el-input v-model="ruleForm.remark" type="textarea" :rows="5" :disabled="urlType" class="formTextarea" placeholder="请输入备注"></el-input>
                            </el-form-item>
                            
                            <el-form-item label="详细地址" class="formItem" prop="address">
                                <el-input v-model="ruleForm.address" :disabled="urlType" placeholder="请输入详细地址"></el-input>
                            </el-form-item>
                            <el-form-item label="所属乡镇" prop="township" class="formItem formSelect">
                                <el-select v-model="ruleForm.township" filterable clearable :disabled="urlType" placeholder="请选择所属乡镇">
                                    <el-option
                                    v-for="item in townshipOption"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            
                            <div style="clear:both;"></div>
                            <el-form-item label="经度" prop="longitude" class="formItem">
                                <el-input v-model="ruleForm.longitude" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入经度"></el-input>
                            </el-form-item>
                            
                            <el-form-item label="纬度" prop="latitude" class="formItem">
                                <el-input v-model="ruleForm.latitude" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入纬度"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                        </el-form>
                         <el-form :model="ruleForm" status-icon class="demo-ruleForm mapContent">
                             <el-form-item label="地图">
                                <Baidu-map
                                @syncCenterAndZoom='syncCenterAndZoom'
                                @getClickInfo='getClickInfo'
                                ></Baidu-map>
                            </el-form-item>
                         </el-form>
                    </div>
                </el-collapse-item>
            </el-collapse>
            <!--自定义表单组件-->
            <!-- <Custom-form v-if="formDate.length>0" :formDate.sync = formDate :type='urlType' @customDatavalueChange='customDatavalueChange'></Custom-form> -->
            <el-row type='flex' justify="center" class="footrBtnGroup" v-if='!urlType'>
                <el-button  type="primary" class="submitBtnMargin" @click="submit">提交</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-row>
        </section>
        
    </div>
</template>
<script>
import { getEnterpriseNameList } from '@/utils/api/industryDo/doBusinessEntity' //产业办---经营主体数据
import { veterinaryStationUpdate, veterinaryStationInsert,veterinaryStationDetail } from '@/utils/api/veterinaryMedicine/veterinaryStation' //兽医兽药股---兽医站
import {townshipOption,subjectTypeOption,enterpriseTypeOption,enterpriseKindOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
// import CustomForm from '@/components/customForm/CustomForm';
import BaiduMap from '@/components/baiduMap/BaiduMap';
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
                address:'',//详细地址
                vetName:'',//兽医站名称
                state:'',//经营状态
                legalPerson:'',//:'',//法定代表人
                phone:'',//联系电话
                telephone:'',//固定电话
                personCount:'',//单位人数
                remark:'',//备注
                latitude:'',//纬度
                longitude:'',//经度
                township:'',//所属乡镇
                baseArea:'',//基地面积小
                buildUser:'',//创建人
                checkUser:'',//审核人
                city:'',//所属城市
                companyNum:'',//统一社会信用代码
                companyType:'',//公司类型
                companyUrl:'',//网址
                county:'',//所属区县
                createTime:'',//创建时间
                currentPage:'',//:'',//当前页
                email:'',//邮箱
                establishTime:'',//成立日期
                isCheck:'',//是否审核
                isDelete:'',//是否删除
                landArea:'',//占地面积大
                manageType:'',//经营类别
                province:'',//所属省份
                registeredCapital:'',//注册资本
                scope:'',//经营范围
                subjectType:'',//主体类型
                updateTime:'',//更新时间
            },
            townshipOption:townshipOption, //乡镇
            subjectTypeOption:subjectTypeOption,  //主体类型
            enterpriseTypeOption:enterpriseTypeOption, //企业类型
            enterpriseKindOption:enterpriseKindOption, //经营类别
            rules: {
                legalPerson:[
                      {required: true, message: '请输入法定代表人',trigger: 'blur', }
                ],
                township: [
                    { required: true, message: '请选择乡镇',trigger: 'blur' }
                ],
                manageType:[
                     { required: true, message: '请选择经营类别',trigger: 'blur' }
                ],
                vetName: [
                    { required: true, message: '请输入兽医站名称',trigger: 'blur' }
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
                address:[
                    { required: true, message: '请输入地址',trigger: 'blur' }
                ],
                phone:[
                    { required: false },
                    {validator: validate.FormValidate.Form().validatePhone,trigger: 'blur'}
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
                    { required: true, message: '请输入联系人',trigger: 'blur' }
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
        // 'Custom-form':CustomForm,
        'Baidu-map':BaiduMap
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
            let res = await veterinaryStationDetail({id:this.id});
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
            let updateObj = JSON.stringify(this.ruleForm);
            let res = await veterinaryStationUpdate(updateObj);
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
            let res = await veterinaryStationInsert(addObj);
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