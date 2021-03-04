<template>
    <!----统计局---畜产品产量 添加编辑详情---->
    <div id="liveProductValueDetail"  class="pageContent" v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="0">
                    <template slot="title">
                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('0') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                            <span>基本信息</span>
                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.allData}}</span> 亩/公斤</span>
                        </div>
                    </template>

                    <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                        <el-form-item label="年份：" prop="dataYear" class="formSelect" style="width:50%;margin-top:10px;float:left">
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
                        <el-form-item label="所属乡镇：" prop="townShip" class="formItem formSelect" style="float:right;margin-top:10px">
                            <el-select v-model="ruleForm.townShip" filterable clearable :disabled="urlType" placeholder="请选择所属乡镇">
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
                                <span>谷物</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.guWuData}}</span> 亩/公斤</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="大麦" class="formItem">
                                    <el-input v-model="ruleForm.grainBarley" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入大麦数量"></el-input> （亩/公斤）
                                </el-form-item>
                                <el-form-item label="高粱" class="formItem">
                                    <el-input v-model="ruleForm.grainBroomcorn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入高粱数量"></el-input> （亩/公斤）
                                </el-form-item>
                                <el-form-item label="荞麦" class="formItem">
                                    <el-input v-model="ruleForm.grainBuckwheat" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入荞麦数量"></el-input> （亩/公斤）
                                </el-form-item>
                                <el-form-item label="玉米" class="formItem">
                                    <el-input v-model="ruleForm.grainCorn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入玉米数量"></el-input> （亩/公斤）
                                </el-form-item>
                                <el-form-item label="谷子" class="formItem">
                                    <el-input v-model="ruleForm.grainMillet" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入谷子数量"></el-input> （亩/公斤）
                                </el-form-item>
                                <el-form-item label="燕麦" class="formItem">
                                    <el-input v-model="ruleForm.grainOat" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入燕麦数量"></el-input> （亩/公斤）
                                </el-form-item>
                                <el-form-item label="稻谷" class="formItem">
                                    <el-input v-model="ruleForm.grainRice" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入稻谷数量"></el-input> （亩/公斤）
                                </el-form-item>
                                <el-form-item label="春小麦" class="formItem">
                                    <el-input v-model="ruleForm.grainWheatSpring" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入春小麦数量"></el-input> （亩/公斤）
                                </el-form-item>
                                <el-form-item label="冬小麦" class="formItem">
                                    <el-input v-model="ruleForm.grainWheatWinter" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入冬小麦数量"></el-input> （亩/公斤）
                                </el-form-item>
                                <el-form-item label="其他" class="formItem">
                                    <el-input v-model="ruleForm.grainOther" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入其他谷物数量"></el-input> （亩/公斤）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item name="2">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>豆类</span>
                                <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.douLeiData}}</span> 亩/公斤</span>
                            </div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                <el-form-item label="红小豆" class="formItem">
                                    <el-input v-model="ruleForm.beanAzuki" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入红小豆数量"></el-input> （亩/公斤）
                                </el-form-item>
                                <el-form-item label="绿豆" class="formItem">
                                    <el-input v-model="ruleForm.beanMung" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入绿豆数量"></el-input> （亩/公斤）
                                </el-form-item>
                                <el-form-item label="大豆" class="formItem">
                                    <el-input v-model="ruleForm.beanSoya" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入大豆数量"></el-input> （亩/公斤）
                                </el-form-item>
                                <el-form-item label="其他" class="formItem">
                                    <el-input v-model="ruleForm.beanOther" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入其他豆类数量"></el-input> （亩/公斤）
                                </el-form-item>
                            </el-form>
                            <el-collapse v-model="activeNames" @change="handleChange">
                                
                            </el-collapse>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item name="2-1">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>薯类</span>
                                <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.shuLeiData}}</span> 亩/公斤</span>
                            </div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                <el-form-item label="洋芋" class="formItem">
                                    <el-input v-model="ruleForm.tuberPotato" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入洋芋数量"></el-input> （亩/公斤）
                                </el-form-item>
                                <el-form-item label="红苕" class="formItem">
                                    <el-input v-model="ruleForm.tuberYam" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入红苕数量"></el-input> （亩/公斤）
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
//统计局---畜产品产量 接口
import { foodPlantUtilDetail,foodPlantUtilUpdate, foodPlantUtilInsert } from '@/utils/api/ruralEconomy/foodPlantUtil' 
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
            activeNames: ['0','1','2','2-1'], //默认折叠板全部打开
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
                
                grainBarley:'',//大麦
                grainBroomcorn:'',//高粱
                grainBuckwheat:'',//荞麦
                grainCorn:'',//玉米
                grainMillet:'',//谷子
                grainOat:'',//燕麦
                grainRice:'',//稻谷
                grainWheatSpring:'',//春小麦
                grainWheatWinter:'',//冬小麦
                grainOther:'',//其他谷物

                beanAzuki:'',//红小豆
                beanMung:'',//绿豆
                beanSoya:'',//大豆
                beanOther:'',//其他豆类
                
                tuberPotato:'',//洋芋
                tuberYam:'',//红苕

                createTime:'',//创建时间
                updateTime:'',//更新时间

                allData:'',//全部总合
                guWuData:'',//谷物总和合
                douLeiData:'',//豆类总和
                shuLeiData:'',//薯类总和

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
                //薯类总和
                this.ruleForm.shuLeiData = newVal.tuberPotato * 1 + newVal.tuberYam * 1
                //豆类总和
                this.ruleForm.douLeiData = newVal.beanAzuki * 1 + newVal.beanMung * 1 + newVal.beanSoya * 1 + newVal.beanOther * 1
                //谷物总和
                this.ruleForm.guWuData = newVal.grainBarley * 1 + newVal.grainBroomcorn * 1 + newVal.grainBuckwheat * 1 +
                 newVal.grainCorn * 1 + newVal.grainMillet * 1 + newVal.grainOat * 1 + newVal.grainRice * 1 +
                  newVal.grainWheatSpring * 1 + newVal.grainWheatWinter * 1 + newVal.grainOther * 1
                //全部总和
                this.ruleForm.allData = this.ruleForm.shuLeiData + this.ruleForm.douLeiData + this.ruleForm.guWuData
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
            let res = await foodPlantUtilDetail({id:this.id});
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
            let res = await foodPlantUtilUpdate(updateObj);
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
            let res = await foodPlantUtilInsert(addObj);
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