<template>
    <!----种植业股---耕地面积 添加编辑详情---->
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

                    <el-form :model="ruleForm" :rules="rules" status-icon label-width="100px" class="demo-ruleForm">
                        <el-form-item label="年份：" prop="dataYear" class="formSelect" style="width:50%;margin-top:10px;">
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
                        <!-- <el-form-item label="所属乡镇：" prop="townShip" class="formItem formSelect" style="float:right;margin-top:10px">
                            <el-select v-model="ruleForm.townShip" filterable clearable :disabled="urlType" placeholder="请选择所属乡镇">
                                <el-option
                                v-for="item in townshipOption"
                                :key="item.id"
                                :label="item.name"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item> -->
                    </el-form>
                
                    <el-collapse-item name="1">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>耕地面积</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.sumArea}}</span> 公顷</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="永清镇" class="formItem">
                                    <el-input v-model="ruleForm.yongqingTownArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入永清镇数量"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="后  奕" class="formItem">
                                    <el-input v-model="ruleForm.houyiArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入后  奕数量"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="韩  村" class="formItem">
                                    <el-input v-model="ruleForm.hanArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入韩  村数量"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="别古庄" class="formItem">
                                    <el-input v-model="ruleForm.bieguzhuangArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入别古庄数量"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="里澜城" class="formItem">
                                    <el-input v-model="ruleForm.lilanchengArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入里澜城数量"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="龙虎庄" class="formItem">
                                    <el-input v-model="ruleForm.longhuzhuangArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入龙虎庄数量"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="刘  街" class="formItem">
                                    <el-input v-model="ruleForm.liujieArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入刘  街数量"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="三圣口" class="formItem">
                                    <el-input v-model="ruleForm.sanshengkouArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入三圣口数量"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="曹家务" class="formItem">
                                    <el-input v-model="ruleForm.caojiawuArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入曹家务数量"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="管家务" class="formItem">
                                    <el-input v-model="ruleForm.guanjianwuArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入管家务数量"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="城  关" class="formItem">
                                    <el-input v-model="ruleForm.chengguanArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入城  关数量"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="大辛阁" class="formItem">
                                    <el-input v-model="ruleForm.daxingeArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入大辛阁数量"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="养马庄" class="formItem">
                                    <el-input v-model="ruleForm.yangmazhuangArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入养马庄数量"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="亦  庄" class="formItem">
                                    <el-input v-model="ruleForm.yizhuangArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入亦  庄数量"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="园  区" class="formItem">
                                    <el-input v-model="ruleForm.yuanquArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入园  区数量"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="县  直" class="formItem">
                                    <el-input v-model="ruleForm.xianzhiArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入县  直数量"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="北辛溜" class="formItem">
                                    <el-input v-model="ruleForm.beixinliuArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入县  直数量"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="刘其营" class="formItem">
                                    <el-input v-model="ruleForm.liuqiyingArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入县  直数量"></el-input> （公顷）
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
//种植业股---耕地面积 接口
import { cultivatedLandAreaDetail,cultivatedLandAreaUpdate, cultivatedLandAreaInsert } from '@/utils/api/planting/cultivatedLandArea' 
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
            activeNames: ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17'], //默认折叠板全部打开
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
                
                yongqingTownArea:'',//永清镇
                houyiArea:'',//后奕
                hanArea:'',//韩村
                bieguzhuangArea:'',//别古庄
                lilanchengArea:'',//里澜城
                longhuzhuangArea:'',//龙虎庄
                liujieArea:'',//刘街
                sanshengkouArea:'',//三圣口
                caojiawuArea:'',//曹家务
                guanjianwuArea:'',//管家务
                chengguanArea:'',//城关
                daxingeArea:'',//大辛阁
                yangmazhuangArea:'',//养马庄
                yizhuangArea:'',//亦庄
                yuanquArea:'',//园区
                xianzhiArea:'',//县直
                beixinliuArea:'',//北辛溜
                liuqiyingArea:'',//刘其营

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
                //总和
                this.ruleForm.sumArea = newVal.yongqingTownArea * 1 + newVal.houyiArea * 1 + newVal.hanArea * 1 + newVal.bieguzhuangArea * 1 + 
                                         newVal.lilanchengArea * 1 + newVal.longhuzhuangArea * 1 + newVal.liujieArea * 1 + newVal.sanshengkouArea * 1 + 
                                         newVal.caojiawuArea * 1 + newVal.guanjianwuArea * 1 + newVal.chengguanArea * 1 + newVal.daxingeArea * 1 + 
                                         newVal.yangmazhuangArea * 1 + newVal.yizhuangArea * 1 + newVal.yuanquArea * 1 + newVal.xianzhiArea * 1 + 
                                         newVal.beixinliuArea * 1 + newVal.liuqiyingArea * 1
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
            let res = await cultivatedLandAreaDetail({id:this.id});
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
            let res = await cultivatedLandAreaUpdate(updateObj);
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
            
            this.ruleForm.isDelete = "0"; //是否删除
            this.ruleForm.isCheck = "0"; //是否发布

            this.ruleForm.updateTime = getData(); //更新时间
            this.ruleForm.createTime = getData(); //创建时间
            this.ruleForm.customDataList = this.formDate;//自定义表单list
            let addObj = JSON.stringify(this.ruleForm);
            let res = await cultivatedLandAreaInsert(addObj);
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