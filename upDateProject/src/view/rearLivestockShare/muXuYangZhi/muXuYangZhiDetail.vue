<template>
    <!----畜牧股---牧畜养殖 添加编辑详情---->
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

                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="年份：" prop="years" class="formItem formSelect">
                                <el-date-picker
                                    v-model="ruleForm.years"
                                    type="year"
                                    value-format='yyyy'
                                    format='yyyy'
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
                    </el-form>
                
                    <el-collapse-item name="1">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>牛</span>
                                <!-- <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.guWuData}}</span> 吨</span> -->
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

                                <el-form-item label="年内出栏" class="formItem">
                                    <el-input v-model="ruleForm.cattleOutColumn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入年内出栏"></el-input> （百头）
                                </el-form-item>
                                <el-form-item label="年末存栏" class="formItem">
                                    <el-input v-model="ruleForm.cattleExistColumn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入年末存栏"></el-input> （百头）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="2">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>羊</span>
                                <!-- <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.guWuData}}</span> 吨</span> -->
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

                                <el-form-item label="年内出栏" class="formItem">
                                    <el-input v-model="ruleForm.sheepOutColumn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入年内出栏"></el-input> （百只）
                                </el-form-item>
                                <el-form-item label="年末存栏" class="formItem">
                                    <el-input v-model="ruleForm.sheepExistColumn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入年末存栏"></el-input> （百只）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="3">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>家禽</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SCPJGCLData}}</span> 吨</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            <el-collapse v-model="activeNames" @change="handleChange">
                                <el-collapse-item name="3-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>鸡</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.HSJGCPData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                        <el-form-item label="年内出栏" class="formItem">
                                            <el-input v-model="ruleForm.chickenOutColumn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入年内出栏"></el-input> （百只）
                                        </el-form-item>
                                        <el-form-item label="年末存栏" class="formItem">
                                            <el-input v-model="ruleForm.chickenExistColumn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入年末存栏"></el-input> （百只）
                                        </el-form-item>
                                            <div style="clear:both;"></div>
                                        </el-form>
                                        <el-collapse-item name="3-1-1">
                                            <template slot="title">
                                                <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-1-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                                    <span>鸭</span>
                                                    <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SCLDPData}}</span> 吨</span> -->
                                                </div>
                                            </template>
                                            <div class="formContent">
                                                <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                                    <el-form-item label="年内出栏" class="formItem">
                                                        <el-input v-model="ruleForm.duckOutColumn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入年内出栏"></el-input> （百只）
                                                    </el-form-item>
                                                    <el-form-item label="年末存栏" class="formItem">
                                                        <el-input v-model="ruleForm.duckExistColumn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入年末存栏"></el-input> （百只）
                                                    </el-form-item>
                                                </el-form>
                                            </div>
                                        </el-collapse-item>

                                        <el-collapse-item name="3-1-2">
                                            <template slot="title">
                                                <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-1-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                                    <span>鹅</span>
                                                    <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.YMZPData}}</span> 吨</span> -->
                                                </div>
                                            </template>
                                            <div class="formContent">
                                                <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                                    <el-form-item label="年内出栏" class="formItem">
                                                        <el-input v-model="ruleForm.gooseOutColumn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入年内出栏"></el-input> （百只）
                                                    </el-form-item>
                                                    <el-form-item label="年末存栏" class="formItem">
                                                        <el-input v-model="ruleForm.gooseExistColumn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入年末存栏"></el-input> （百只）
                                                    </el-form-item>
                                                </el-form>
                                            </div>
                                        </el-collapse-item>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="4">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('4') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>猪</span>
                                <!-- <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.YYJGData}}</span> 吨</span> -->
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

                                <el-form-item label="年内出栏" class="formItem">
                                    <el-input v-model="ruleForm.rabbitOutColumn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入年内出栏"></el-input> （百只）
                                </el-form-item>
                                <el-form-item label="年末存栏" class="formItem">
                                    <el-input v-model="ruleForm.rabbitExistColumn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入年末存栏"></el-input> （百只）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="5">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('5') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>禽蛋</span>
                                <!-- <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.BFSCPNJGLData}}</span> 吨</span> -->
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

                                <el-form-item label="总产量" class="formItem">
                                    <el-input v-model="ruleForm.yields	" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入总产量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="鸡蛋产量" class="formItem">
                                    <el-input v-model="ruleForm.eggYield" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入鸡蛋产量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="鹅蛋产量" class="formItem">
                                    <el-input v-model="ruleForm.gooseeggYiled" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入鹅蛋产量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="鸭蛋产量" class="formItem">
                                    <el-input v-model="ruleForm.duckeggYiled" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入鸭蛋产量"></el-input> （吨）
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
        <BackListPage v-if="urlType"></BackListPage>
        </section>
        
    </div>
</template>
<script>
//畜牧股---牧畜养殖 接口
import { muXuYangZhiDetail,muXuYangZhiUpdate, muXuYangZhiInsert } from '@/utils/api/rearLivestockShare/muXuYangZhi' 
import {townshipOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
import BackListPage from '@/view/backListPage'
export default {
    name:'liveProductValueDetail',
    data() {
        return {
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() > new Date()-8.64e7;
                }
            },
            activeNames: ['0','1','2','3','3-1','3-1-1','3-1-2','4','5'], //默认折叠板全部打开
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
                years:'',//年份

                cattleOutColumn:'',//牛（年内出栏）
                cattleExistColumn:'',//牛（年末存栏）
                
                enterpriseCapacity:'',//加工能力（吨/年）
                enterpriseCount:'',//加工企业（个）
                freezerCapacity:'',//冷藏能力（吨/次）
                freezerCount:'',//水产冷库（个）
                freezerFrozen:'',//冻结能力（吨/日）
                freezerIceMaker:'',//制冰能力（吨/日）
                freshwaterProduct:'',//淡水加工产品（吨）
                processClarkii:'',//克氏原螯虾加工量（吨）
                processEel:'',//鳗鱼加工量（吨）
                processFreshwater:'',//淡水产品加工量（吨）
                processOther:'',//其他水产品加工量（吨）
                processPrawn:'',//对虾加工量（吨）
                processPunctate:'',//斑点叉尾鮰加工量（吨）
                processSeawater:'',//海水产品加工量（吨）
                processTilapia:'',//罗非鱼加工量（吨）
                seawaterAlgae:'',//藻类加工品（吨）
                seawaterCan:'',//罐制品（吨）
                seawaterDry:'',//干腌制品（吨）
                seawaterFeed:'',//水产饲料（鱼粉）（吨）
                seawaterFrozen:'',//冷冻品（吨）
                seawaterFrozenProcess:'',//冷冻加工品（吨）
                seawaterMinced:'',//鱼糜制品（吨）
                seawaterOil:'',//鱼油制品（吨）
                seawaterOther:'',//其他海水加工产品（吨）

                createTime:'',//创建时间
                updateTime:'',//更新时间


            },
            rules: {
                years: [
                    { required: true, message: '请选择年份',trigger: 'blur' }
                ],
                township: [
                    { required: true, message: '请选择乡镇',trigger: 'blur' }
                ]
            }
        }
    },
    components:{
        'Custom-form':CustomForm,
        BackListPage
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
                this.ruleForm.YMZPData = newVal.seawaterMinced * 1 + newVal.seawaterDry * 1
                this.ruleForm.SCLDPData = newVal.seawaterFrozen * 1 + newVal.seawaterFrozenProcess * 1

                this.ruleForm.HSJGCPData = this.ruleForm.YMZPData * 1 + this.ruleForm.SCLDPData * 1 + newVal.seawaterAlgae * 1 + 
                                           newVal.seawaterCan * 1 + newVal.seawaterFeed * 1 + newVal.seawaterOil * 1 + newVal.seawaterOther * 1

                this.ruleForm.SCPJGCLData = this.ruleForm.HSJGCPData * 1 + newVal.freshwaterProduct * 1

                this.ruleForm.YYJGData = newVal.processFreshwater * 1 + newVal.processSeawater * 1

                this.ruleForm.BFSCPNJGLData = newVal.processPrawn * 1 + newVal.processEel * 1 + newVal.processClarkii * 1 + 
                                              newVal.processPunctate * 1 + newVal.processTilapia * 1 + newVal.processOther * 1
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
            let res = await muXuYangZhiDetail({id:this.id});
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
            let res = await muXuYangZhiUpdate(updateObj);
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
            let res = await muXuYangZhiInsert(addObj);
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