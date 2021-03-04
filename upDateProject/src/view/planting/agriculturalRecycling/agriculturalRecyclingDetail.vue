<template>
    <!----统计局---农膜覆盖及回收利用情况 添加编辑详情---->
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
                        <el-form-item label="年份" prop="years" class="formItem formSelect" style="width:50%;margin-top:10px">
                             <el-date-picker
                                 v-model="ruleForm.years"
                                 :disabled="urlType"
                                 type="year"
                                 value-format="yyyy"
                                 format="yyyy"
                                 :picker-options="pickerBeginDateAfter"
                                 placeholder="选择年份">
                             </el-date-picker>
                         </el-form-item>
                        <el-form-item label="乡镇" prop="township" class="formItem formSelect" style="width:50%;margin-top:10px">
                            <el-select v-model="ruleForm.township" filterable clearable :disabled="urlType" placeholder="请选择乡镇：">
                                <el-option
                                v-for="item in townshipOption"
                                :key="item.id"
                                :label="item.name"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <div style="clear:both;"></div>
                        <el-form-item label="回收企业" class="formItem">
                            <el-input v-model="ruleForm.recoveryEnterprise" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入回收企业"></el-input> （个）
                        </el-form-item>
                        <el-form-item label="回收网点" class="formItem">
                            <el-input v-model="ruleForm.recoveryStation" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入回收网点"></el-input> （个）
                        </el-form-item>
                        <div style="clear:both;"></div>
                        <el-form-item label="农膜回收率" class="formItem">
                            <el-input v-model="ruleForm.rates" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农膜回收率"></el-input> （%）
                        </el-form-item>
                        <div style="clear:both;"></div>
                    </el-form>
                
                    <el-collapse-item name="1">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>地膜</span>
                                <!-- <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.YLBZMJData}}</span> 吨</span> -->
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="覆盖面积" class="formItem">
                                    <el-input v-model="ruleForm.filmCoverArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入覆盖面积"></el-input> （万亩）
                                </el-form-item>
                                <el-form-item label="用量" class="formItem">
                                    <el-input v-model="ruleForm.filmConsumption" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入用量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="回收量" class="formItem">
                                    <el-input v-model="ruleForm.filmRecovery" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入回收量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="回收率" class="formItem">
                                    <el-input v-model="ruleForm.filmRate" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入回收率"></el-input> （%）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="2">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>棚膜</span>
                                <!-- <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.MHBZMJData}}</span> 吨</span> -->
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="覆盖面积" class="formItem">
                                    <el-input v-model="ruleForm.plasticCoverArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入覆盖面积"></el-input> （人）
                                </el-form-item>
                                <el-form-item label="用量" class="formItem">
                                    <el-input v-model="ruleForm.plasticConsumption" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入用量"></el-input> （人）
                                </el-form-item>
                                <el-form-item label="回收量" class="formItem">
                                    <el-input v-model="ruleForm.plasticRecovery" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入回收量"></el-input> （人）
                                </el-form-item>
                                <el-form-item label="回收率" class="formItem">
                                    <el-input v-model="ruleForm.plasticRate" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入回收率"></el-input> （人）
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
//统计局---农膜覆盖及回收利用情况 接口
import { agriculturalRecyclingDetail,agriculturalRecyclingUpdate, agriculturalRecyclingInsert } from '@/utils/api/planting/agriculturalRecycling' 
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

                years:'',//年份
                township:'',//乡镇
                recoveryEnterprise:'',//回收企业
                recoveryStation:'',//回收站点
                rates:'',//回收率
                filmConsumption:'',//地膜用量
                filmCoverArea:'',//地膜覆盖面积
                filmRate:'',//地膜回收率
                filmRecovery:'',//地膜回收量
                plasticConsumption:'',//棚膜用量
                plasticCoverArea:'',//棚膜覆盖面积
                plasticRate:'',//棚膜回收率
                plasticRecovery:'',//棚膜回收量
                

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
            let res = await agriculturalRecyclingDetail({id:this.id});
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
            let res = await agriculturalRecyclingUpdate(updateObj);
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
            let res = await agriculturalRecyclingInsert(addObj);
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