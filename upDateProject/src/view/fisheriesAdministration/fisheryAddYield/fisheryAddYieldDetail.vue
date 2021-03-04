<template>
    <!----统计局---渔业增加值 添加编辑详情---->
    <div id="liveProductValueDetail"  class="pageContent" v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="0">
                    <template slot="title">
                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('0') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                            <span>基本信息</span>
                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.allData}}</span> 吨</span> -->
                        </div>
                    </template>

                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="1000px" class="demo-ruleForm">
                        
                        <el-form-item label="年份" prop="years" class="formItem" style="width:50%;margin-top:10px">
                            <el-date-picker
                                v-model="ruleForm.years"
                                :disabled="urlType"
                                type="year"
                                value-format="yyyy"
                                format="yyyy"
                                :picker-options="pickerBeginDateAfter"
                                placeholder="选择年">
                            </el-date-picker>
                        </el-form-item>
                        <div style="clear:both;"></div>
                    </el-form>

                    <el-collapse-item name="1">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>渔业</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.usableTotal}}</span> 座</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                <el-form-item label="海洋捕捞" class="formItem">
                                    <el-input v-model="ruleForm.marineFishing" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入海洋捕捞产值"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="海水养殖" class="formItem">
                                    <el-input v-model="ruleForm.mariculture" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入海水养殖产值"></el-input> （万元）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="淡水捕捞" class="formItem">
                                    <el-input v-model="ruleForm.freshwaterFishing" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入淡水捕捞产值"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="淡水养殖" class="formItem">
                                    <el-input v-model="ruleForm.freshwaterCultureing" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入淡水养殖产值"></el-input> （万元）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="水产苗种" class="formItem">
                                    <el-input v-model="ruleForm.aquaticFry" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入水产苗种产值"></el-input> （万元）
                                </el-form-item>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="2">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>渔业工业和建筑业</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.usedTotal}}</span> 座</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                <el-form-item label="水产品加工" class="formItem">
                                    <el-input v-model="ruleForm.productsProcess" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入水产品加工产值"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="渔用机具制造" class="formItem">
                                    <el-input v-model="ruleForm.machineryManufactu" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入渔用机具制造产值"></el-input> （万元）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="渔用饲料" class="formItem">
                                    <el-input v-model="ruleForm.fishFeed" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入渔用饲料产值"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="渔用药物" class="formItem">
                                    <el-input v-model="ruleForm.fisheryMedicine" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入渔用药物产值"></el-input> （万元）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="建筑" class="formItem">
                                    <el-input v-model="ruleForm.architecture" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入建筑产值"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="其它" class="formItem">
                                    <el-input v-model="ruleForm.fisheryOther" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入其它产值"></el-input> （万元）
                                </el-form-item>
                                <div style="clear:both;"></div>
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="3">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>渔业流通和服务业</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.farmableTotal}}</span> 公顷</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                <el-form-item label="水产流通" class="formItem">
                                    <el-input v-model="ruleForm.productsCirculation" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入水产流通产值"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="水产（仓储）运输" class="formItem">
                                    <el-input v-model="ruleForm.storageTransportation" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入水产（仓储）运输产值"></el-input> （万元）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="休闲渔业" class="formItem">
                                    <el-input v-model="ruleForm.recreationalFishery" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入休闲渔业增加值"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="其它" class="formItem">
                                    <el-input v-model="ruleForm.other" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入其它产值"></el-input> （万元）
                                </el-form-item>
                                <div style="clear:both;"></div>
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
//统计局---渔业增加值 接口
import { fisheryAddYieldDetail,fisheryAddYieldUpdate, fisheryAddYieldInsert } from '@/utils/api/fisheriesAdministration/fisheryAddYield' 
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
            activeNames: ['0','1','2','3','4'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            id:'', //数据的id
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            townshipOption:townshipOption, //乡镇
            formDate:[], //自定义表单数据，传值给子组件
            valueTotal:0,//总合计
            ruleForm: {
                township:'', //乡镇
                dataYear:'',//年份
                
                farmableLarge:'',//可养殖大型水库（座）
                farmableMiddle:'',//可养殖中型水库（座）
                farmableSmall:'',//可养殖小型水库（座）
                farmedLarge:'',//已养殖大型水库（座）
                farmedMiddle:'',//已养殖中型水库（座）
                farmedSmall:'',//已养殖小型水库（座）
                netCageArea:'',//水库网箱养鱼面积（公顷）
                netCageYeild:'',//水库网箱养鱼产量（吨）
                nuisancelessArea:'',//无公害养殖面积（公顷）
                nuisancelessYeild:'',//无公害养殖产量（吨）
                seedPut:'',//投放鱼种（吨）
                usableLarge:'',//可利用大型水库（座）
                usableMiddle:'',//可利用中型水库（座）
                usableSmall:'',//可利用小型水库（座）
                usedLarge:'',//已利用大型水库（座）
                usedMiddle:'',//已利用中型水库（座）
                usedSmall:'',//已利用小型水库（座）
                yeild:'',//产量（吨）

                createTime:'',//创建时间
                updateTime:'',//更新时间


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
                this.ruleForm.usableTotal = newVal.usableSmall * 1 + newVal.usableMiddle * 1 + newVal.usableLarge * 1
                this.ruleForm.usedTotal = newVal.usedSmall * 1 + newVal.usedMiddle * 1 + newVal.usedLarge * 1
                this.ruleForm.farmableTotal = newVal.farmableSmall * 1 + newVal.farmableMiddle * 1 + newVal.farmableLarge * 1
                this.ruleForm.farmedTotal = newVal.farmedSmall * 1 + newVal.farmedMiddle * 1 + newVal.farmedLarge * 1
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
            let res = await fisheryAddYieldDetail({id:this.id});
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
            let res = await fisheryAddYieldUpdate(updateObj);
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
            let res = await fisheryAddYieldInsert(addObj);
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