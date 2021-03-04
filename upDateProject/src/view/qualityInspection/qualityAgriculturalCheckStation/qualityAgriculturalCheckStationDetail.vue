<template>
<!--质检办---农产品检测站信息详情-->
    <div id="qualityAgriculturalCheckStationDetail" class="pageContent" v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>监测站信息</div> <!---->
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="监测站名称：" prop="checkpoint" class="formItem">
                                <el-input v-model="ruleForm.checkpoint" :disabled="urlType" placeholder="请输入监测站名称"></el-input>
                            </el-form-item>
                            <el-form-item label="联系人：" prop="contact" class="formItem">
                                <el-input v-model="ruleForm.contact" :disabled="urlType" placeholder="请输入联系人"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="主检测项目：" prop="mainCheck" class="formItem">
                                <el-input v-model="ruleForm.mainCheck" :disabled="urlType" placeholder="请输入主检测项目"></el-input>
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
                            <el-form-item label="地址：" prop="address" class="formItem">
                                <el-input v-model="ruleForm.address" :disabled="urlType" placeholder="请输入地址"></el-input>
                            </el-form-item>
                            <el-form-item label="联系人电话：" prop="phone" class="formItem">
                                <el-input v-model="ruleForm.phone" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入联系人电话"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="经度：" prop="longitude" class="formItem">
                                <el-input v-model="ruleForm.longitude" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入经度"></el-input>
                            </el-form-item>
                            <el-form-item label="纬度：" prop="latitude" class="formItem">
                                <el-input v-model="ruleForm.latitude" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入纬度"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                        </el-form>
                        <div style="clear:both"></div>
                        <el-form :model="ruleForm" status-icon class="demo-ruleForm">
                             <el-form-item label="地图：">
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
           <Custom-form v-if="formDate.length>0" :formDate.sync = formDate :type='urlType' @customDatavalueChange='customDatavalueChange'></Custom-form>
            <el-row type='flex' justify="center" class="footrBtnGroup" v-if='!urlType'>
                <el-button  type="primary" class="submitBtnMargin" @click="submit">提交</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-row>
        </section>
        
        
    </div>
</template>
<script>
import { qualityCheckStationDetail, qualityCheckStationUpdate, qualityCheckStationInsert} from '@/utils/api/qualityInspection/qualityAgriculturalCheckStation'; //质检办--农产品检测站信息
import {townshipOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
import BaiduMap from '@/components/baiduMap/BaiduMap';
import validate from '@/utils/validator'; //检验
export default {
    name:'qualityOrganicProductsDetail',
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
                checkpoint:'',//检测站名称
                township:'', //乡镇
                address:'', //地址
                phone:'',//联系电话
                contact:'', //联系人
                mainCheck:'', //主检测项目
                longitude:'',//经度
                latitude:'', //纬度
            },
            townshipOption:townshipOption, //乡镇
            rules: {
                checkpoint: [
                    {required: true, message: '请输入检测站名称',trigger: 'blur', }
                ],
                township: [
                    { required: true, message: '请选择乡镇',trigger: 'blur' }
                ],
                mainCheck: [
                    { required: true, message: '请输入主检测项目',trigger: 'blur' }
                ],
                address:[
                    { required: true, message: '请输入地址',trigger: 'blur' }
                ],
                phone:[
                    { required: true, message: '请输入联系电话',trigger: 'blur' },
                    {validator: validate.FormValidate.Form().validatePhone,trigger: 'blur'}
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
            }
        }
    },
    components:{
        'Custom-form':CustomForm,
        'Baidu-map':BaiduMap,
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
            let res = await qualityCheckStationDetail({id:this.id});
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
            this.ruleForm.id = this.id; //数据id
            this.ruleForm.updateTime = getData(); //更新时间
            this.ruleForm.customDataList = this.formDate;//自定义表单list
            let updateObj = JSON.stringify(this.ruleForm);
            let res = await qualityCheckStationUpdate(updateObj);
             if(res.data.status== 0){
                this.$message({
                    message: '编辑成功',
                    type: 'success'
                })
                this.$router.go(-1);
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
            let res = await qualityCheckStationInsert(addObj);
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
        //地图获取经纬度坐标
        getClickInfo (e) {
            this.ruleForm.longitude = e.point.lng
            this.ruleForm.latitude = e.point.lat
        },
        //设置坐标中心及缩放
        syncCenterAndZoom (e) {
            const {lng,lat} = e.target.getCenter()
            this.ruleForm.longitude = lng
            this.ruleForm.latitude = lat
            this.zoom = e.target.getZoom()
        }, 
    }
}
</script>
<style scoped lang="scss">

</style>