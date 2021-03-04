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
                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.allData}}</span> 吨</span> -->
                        </div>
                    </template>

                    <el-form :model="ruleForm" ref="ruleForm" status-icon :rules="rules" label-width="100px" class="demo-ruleForm">
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
                        <el-form-item label="年产量" class="formItem">
                            <el-input v-model="ruleForm.annualOutPut" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入年产量"></el-input>
                        </el-form-item>
                        <el-form-item label="地址" class="formItem">
                            <el-input v-model="ruleForm.address" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入地址"></el-input>
                        </el-form-item>
                        <el-form-item label="经度" class="formItem">
                            <el-input v-model="ruleForm.longitude" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入经度"></el-input>
                        </el-form-item>
                        <el-form-item label="纬度" class="formItem">
                            <el-input v-model="ruleForm.latitude" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入纬度"></el-input>
                        </el-form-item>
                    </el-form>

                    <el-collapse-item name="2">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>检测项目</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SCJSYJData}}</span> 吨</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">

                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="缓效钾" class="formItem">
                                                <el-input v-model="ruleForm.slowActingPotassium" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入缓效钾"></el-input> （mg/kg）
                                            </el-form-item>
                                            <el-form-item label="碱解氮" class="formItem">
                                                <el-input v-model="ruleForm.alkaliHydrolyzedNitrogen" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入碱解氮"></el-input> （mg/kg）
                                            </el-form-item>
                                            <el-form-item label="水溶性盐总量" class="formItem">
                                                <el-input v-model="ruleForm.totalWaterSolubleSalts" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入水溶性盐总量"></el-input> （mg/kg）
                                            </el-form-item>
                                            <el-form-item label="有效硫" class="formItem">
                                                <el-input v-model="ruleForm.availableSulfur" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入有效硫"></el-input> （mg/kg）
                                            </el-form-item>
                                            <el-form-item label="有效铁" class="formItem">
                                                <el-input v-model="ruleForm.availableIron" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入有效铁"></el-input> （mg/kg）
                                            </el-form-item>
                                            <el-form-item label="有效铜" class="formItem">
                                                <el-input v-model="ruleForm.availableCopper" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入有效铜"></el-input> （mg/kg）
                                            </el-form-item>
                                            <el-form-item label="有效锌" class="formItem">
                                                <el-input v-model="ruleForm.availableZinc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入有效锌"></el-input> （mg/kg）
                                            </el-form-item>
                                            <el-form-item label="有效硼" class="formItem">
                                                <el-input v-model="ruleForm.availableBoron" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入有效硼"></el-input> （mg/kg）
                                            </el-form-item>
                                            <el-form-item label="有效钼" class="formItem">
                                                <el-input v-model="ruleForm.availableMolybdenum" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入有效钼"></el-input> （mg/kg）
                                            </el-form-item>
                                            <el-form-item label="有效硅" class="formItem">
                                                <el-input v-model="ruleForm.availableSilicon" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入有效硅"></el-input> （mg/kg）
                                            </el-form-item>
                                            <el-form-item label="总汞" class="formItem">
                                                <el-input v-model="ruleForm.totalMercury" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入总汞"></el-input> （mg/kg）
                                            </el-form-item>
                                            <el-form-item label="总砷" class="formItem">
                                                <el-input v-model="ruleForm.totalArsenic" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入总砷"></el-input> （mg/kg）
                                            </el-form-item>
                                            <el-form-item label="总铅" class="formItem">
                                                <el-input v-model="ruleForm.totalLead" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入总铅"></el-input> （mg/kg）
                                            </el-form-item>
                                            <el-form-item label="总镉" class="formItem">
                                                <el-input v-model="ruleForm.totalCadmium" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入总镉"></el-input> （mg/kg）
                                            </el-form-item>
                                            <el-form-item label="总铬" class="formItem">
                                                <el-input v-model="ruleForm.totalChromium" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入总铬"></el-input> （mg/kg）
                                            </el-form-item>
                                        </el-form>
                                    </div>

                            </el-collapse>
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
//农业机械化与设施股---农机拥有量-动力 接口
import { monitoringPointDataDetail,monitoringPointDataUpdate, monitoringPointDataInsert } from '@/utils/api/plantProtectionStation/monitoringPointData' 
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
            activeNames: ['0','2','2-1','2-2','3','3-1','3-2','4','4-1','4-2','5','5-1','5-2','6','6-1','6-2','7','7-1','7-2','8','8-1','8-2','9','9-1','9-2','10','10-1','10-2','11','11-1','11-2','12','12-1','12-2','13','13-1','13-2','14','14-1','14-2'], //默认折叠板全部打开
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
                annualOutPut:'',//年产量
                address:'',//地址
                longitude:'',//经度
                latitude:'',//纬度

                slowActingPotassium:'',//缓效钾
                alkaliHydrolyzedNitrogen:'',//碱解氮
                totalWaterSolubleSalts:'',//水溶性盐总量
                availableSulfur:'',//有效硫
                availableIron:'',//有效铁
                availableCopper:'',//有效铜
                availableZinc:'',//有效锌
                availableBoron:'',//有效硼
                availableMolybdenum:'',//有效钼
                availableSilicon:'',//有效硅
                totalMercury:'',//总汞
                totalArsenic:'',//总砷
                totalLead:'',//总铅
                totalCadmium:'',//总镉
                totalChromium:'',//总铬
                
                
            },
            rules: {
                dataYear: [
                    { required: true, message: '请选择年份',trigger: 'blur' }
                ],
                townShip: [
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
                // console.log(newVal)
                this.ruleForm.defenseArea = (newVal.bcDefenseCfd * 1 + newVal.bcDefenseCy * 1 + newVal.bcDefenseRfb * 1 + newVal.bcDefenseSmb * 1 + newVal.bcDefenseTcye * 1 +
                                            newVal.bcDefenseXce * 1 + newVal.ddDefenseCdm * 1 + newVal.ddDefenseDdjhb * 1 + newVal.ddDefenseDdsmb * 1 + newVal.ddDefenseDdxb * 1 +
                                            newVal.ddDefenseDdy * 1 + newVal.ddDefenseDjm * 1 + newVal.ddDefenseDlh * 1 + newVal.ddDefenseMlc * 1 + newVal.ddDefenseQc * 1 +
                                            newVal.fqDefenseHmb * 1 + newVal.fqDefenseWyb * 1 + newVal.gjDefenseGjjc * 1 + newVal.gjDefenseGjqyc * 1 + newVal.gjDefenseGjym * 1 +
                                            newVal.hgDefenseBfb * 1 + newVal.hgDefenseMzbqy * 1 + newVal.hgDefenseSmb * 1 + newVal.hsDefenseHsxb * 1 + newVal.hsDefenseHsybb * 1 +
                                            newVal.hsDefenseHsyc * 1 + newVal.hsDefenseHsym * 1 + newVal.hsDefenseLg * 1 + newVal.hsDefenseQc * 1 + newVal.ljDefenseQkb * 1 +
                                            newVal.scDefenseBcrfb * 1 + newVal.scDefenseBcsmb * 1 + newVal.scDefenseCqc * 1 + newVal.scDefenseCy * 1 + newVal.scDefenseDjm * 1 +
                                            newVal.scDefenseFqhmb * 1 + newVal.scDefenseFqwyb * 1 + newVal.scDefenseGlbfb * 1 + newVal.scDefenseGlsmb * 1 + newVal.scDefenseHgsmb * 1 +
                                            newVal.scDefenseLjqkb * 1 + newVal.scDefenseMzbqy * 1 + newVal.scDefenseNmbqy * 1 + newVal.scDefenseQc * 1 + newVal.scDefenseSchzz * 1 +
                                            newVal.scDefenseTcye * 1 + newVal.scDefenseXce * 1 + newVal.scDefenseYqc * 1 + newVal.sdDefenseDbc * 1 + newVal.sdDefenseDfs * 1 +
                                            newVal.sdDefenseDh * 1 + newVal.sdDefenseDm * 1 + newVal.sdDefenseDqb * 1 + newVal.sdDefenseDwb * 1 + newVal.sdDefenseDzjym * 1 +
                                            newVal.sdDefenseEhm * 1 + newVal.sdDefenseShm * 1 + newVal.sdDefenseWkb * 1 + newVal.tdDefenseWyb * 1 + newVal.xmDefenseJzc * 1 +
                                            newVal.xmDefenseLg * 1 + newVal.xmDefenseMzz * 1 + newVal.xmDefenseQc * 1 + newVal.xmDefenseXmbfb * 1 + newVal.xmDefenseXmcmb * 1 +
                                            newVal.xmDefenseXmhsb * 1 + newVal.xmDefenseXmtxb * 1 + newVal.xmDefenseXmwkb * 1 + newVal.xmDefenseXmyxb * 1 + newVal.xmDefenseYc * 1 +
                                            newVal.ycDefenseCqc * 1 + newVal.ycDefenseGzb * 1 + newVal.ycDefenseJhb * 1 + newVal.ycDefenseSmb * 1 + newVal.ycDefenseXce * 1 +
                                            newVal.ycDefenseYcyc * 1 + newVal.ymDefenseDlh * 1 + newVal.ymDefenseYmdbb * 1 + newVal.ymDefenseYmm * 1 + newVal.ymDefenseYmwkb * 1 +
                                            newVal.ymDefenseYmxbb * 1 + newVal.ymDefenseZc * 1).toFixed(2)
                this.ruleForm.happenArea = (newVal.bcHappenCfd * 1 + newVal.bcHappenCy * 1 + newVal.bcHappenRfb * 1 + newVal.bcHappenSmb * 1 + newVal.bcHappenTcye * 1 +
                                            newVal.bcHappenXce * 1 + newVal.ddHappenCdm * 1 + newVal.ddHappenDdjhb * 1 + newVal.ddHappenDdsmb * 1 + newVal.ddHappenDdxb * 1 +
                                            newVal.ddHappenDdy * 1 + newVal.ddHappenDjm * 1 + newVal.ddHappenDlh * 1 + newVal.ddHappenMlc * 1 + newVal.ddHappenQc * 1 +
                                            newVal.fqHappenHmb * 1 + newVal.fqHappenWyb * 1 + newVal.gjHappenGjjc * 1 + newVal.gjHappenGjqyc * 1 + newVal.gjHappenGjym * 1 +
                                            newVal.hgHappenBfb * 1 + newVal.hgHappenMzbqy * 1 + newVal.hgHappenSmb * 1 + newVal.hsHappenHsxb * 1 + newVal.hsHappenHsybb * 1 +
                                            newVal.hsHappenHsyc * 1 + newVal.hsHappenHsym * 1 + newVal.hsHappenLg * 1 + newVal.hsHappenQc * 1 + newVal.ljHappenQkb * 1 +
                                            newVal.scHappenBcrfb * 1 + newVal.scHappenBcsmb * 1 + newVal.scHappenCqc * 1 + newVal.scHappenCy * 1 + newVal.scHappenDjm * 1 +
                                            newVal.scHappenFqhmb * 1 + newVal.scHappenFqwyb * 1 + newVal.scHappenGlbfb * 1 + newVal.scHappenGlsmb * 1 + newVal.scHappenHgsmb * 1 +
                                            newVal.scHappenLjqkb * 1 + newVal.scHappenMzbqy * 1 + newVal.scHappenNmbqy * 1 + newVal.scHappenQc * 1 + newVal.scHappenSchzz * 1 +
                                            newVal.scHappenTcye * 1 + newVal.scHappenXce * 1 + newVal.scHappenYqc * 1 + newVal.sdHappenDbc * 1 + newVal.sdHappenDfs * 1 +
                                            newVal.sdHappenDh * 1 + newVal.sdHappenDm * 1 + newVal.sdHappenDqb * 1 + newVal.sdHappenDwb * 1 + newVal.sdHappenDzjym * 1 +
                                            newVal.sdHappenEhm * 1 + newVal.sdHappenShm * 1 + newVal.sdHappenWkb * 1 + newVal.tdHappenWyb * 1 + newVal.xmHappenJzc * 1 +
                                            newVal.xmHappenLg * 1 + newVal.xmHappenMzz * 1 + newVal.xmHappenQc * 1 + newVal.xmHappenXmbfb * 1 + newVal.xmHappenXmcmb * 1 +
                                            newVal.xmHappenXmhsb * 1 + newVal.xmHappenXmtxb * 1 + newVal.xmHappenXmwkb * 1 + newVal.xmHappenXmyxb * 1 + newVal.xmHappenYc * 1 +
                                            newVal.ycHappenCqc * 1 + newVal.ycHappenGzb * 1 + newVal.ycHappenJhb * 1 + newVal.ycHappenSmb * 1 + newVal.ycHappenXce * 1 +
                                            newVal.ycHappenYcyc * 1 + newVal.ymHappenDlh * 1 + newVal.ymHappenYmdbb * 1 + newVal.ymHappenYmm * 1 + newVal.ymHappenYmwkb * 1 +
                                            newVal.ymHappenYmxbb * 1 + newVal.ymHappenZc * 1).toFixed(2)
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
            let res = await monitoringPointDataDetail({id:this.id});
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
            let res = await monitoringPointDataUpdate(updateObj);
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
            let res = await monitoringPointDataInsert(addObj);
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