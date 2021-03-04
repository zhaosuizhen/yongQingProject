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

                    <el-form :model="ruleForm" status-icon :rules="rules" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="年份：" prop="dataYear" class="formSelect" style="width:50%;margin-top:10px">
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
                    </el-form>
                
                    <el-collapse-item name="1">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>发布疫苗</span>
                                <!-- <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.YLBZMJData}}</span> 吨</span> -->
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="牛羊口蹄疫疫苗" class="formItem">
                                    <el-input v-model="ruleForm.vaccineSheep" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入牛羊口蹄疫疫苗"></el-input> （万毫升）
                                </el-form-item>
                                <el-form-item label="禽流感疫苗" class="formItem">
                                    <el-input v-model="ruleForm.vaccineInfluenza" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入禽流感疫苗"></el-input> （万毫升）
                                </el-form-item>
                                <el-form-item label="鸡新城疫苗" class="formItem">
                                    <el-input v-model="ruleForm.vaccineChicken" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入鸡新城疫苗"></el-input> （万羽份）
                                </el-form-item>
                                <el-form-item label="猪瘟疫苗" class="formItem">
                                    <el-input v-model="ruleForm.vaccineSwine" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入猪瘟疫苗"></el-input> （万头份）
                                </el-form-item>
                                <el-form-item label="狂犬病疫苗" class="formItem">
                                    <el-input v-model="ruleForm.vaccineRabies" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入狂犬病疫苗"></el-input> （万头份）
                                </el-form-item>
                                <el-form-item label="小反刍兽疫疫苗" class="formItem">
                                    <el-input v-model="ruleForm.vaccineSmall" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小反刍兽疫疫苗"></el-input> （万头份）
                                </el-form-item>
                                <el-form-item label="消毒药" class="formItem">
                                    <el-input v-model="ruleForm.disinfectant" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入消毒药"></el-input> （万公斤）
                                </el-form-item>
                                <el-form-item label="消毒物资" class="formItem">
                                    <el-input v-model="ruleForm.disinfectionMaterial" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入消毒物资"></el-input> （吨）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="2">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>春、秋动物集中防疫情况</span>
                                <!-- <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.YLBZMJData}}</span> 吨</span> -->
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="生猪" class="formItem">
                                    <el-input v-model="ruleForm.countPig" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入生猪"></el-input> （万头）
                                </el-form-item>
                                <el-form-item label="牛" class="formItem">
                                    <el-input v-model="ruleForm.countCow" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入牛"></el-input> （万头）
                                </el-form-item>
                                <el-form-item label="羊" class="formItem">
                                    <el-input v-model="ruleForm.countSheep" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入羊"></el-input> （万只）
                                </el-form-item>
                                <el-form-item label="家禽" class="formItem">
                                    <el-input v-model="ruleForm.countPoultry" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入家禽"></el-input> （万只人）
                                </el-form-item>
                                <el-form-item label="鸽子" class="formItem">
                                    <el-input v-model="ruleForm.countPigeon" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入鸽子"></el-input> （万只）
                                </el-form-item>
                                <el-form-item label="消毒畜禽圈舍" class="formItem">
                                    <el-input v-model="ruleForm.enclosure" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入消毒畜禽圈舍"></el-input> （万平方米）
                                </el-form-item>
                                <el-form-item label="犬" class="formItem">
                                    <el-input v-model="ruleForm.countDog" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入犬"></el-input> （只）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="3">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>防疫监测</span>
                                <!-- <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.YLBZMJData}}</span> 吨</span> -->
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="猪血清" class="formItem">
                                    <el-input v-model="ruleForm.serumPig" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入猪血清"></el-input> （份）
                                </el-form-item>
                                <el-form-item label="牛羊血清" class="formItem">
                                    <el-input v-model="ruleForm.serumSheep" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入猪血清"></el-input> （份）
                                </el-form-item>
                                <el-form-item label="家禽血清" class="formItem">
                                    <el-input v-model="ruleForm.serumPoultry" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入家禽血清"></el-input> （份）
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
//动物疫病预防控制中心---动物疫病防控 接口
import { animalDiseaseDetail,animalDiseaseUpdate, animalDiseaseInsert } from '@/utils/api/animalDisease/animalDisease' 
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
            activeNames: ['0','1','2','3','4','5'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            id:'', //数据的id
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            townshipOption:townshipOption, //乡镇
            formDate:[], //自定义表单数据，传值给子组件
            valueTotal:0,//总合计
            ruleForm: {
                dataYear:'',//年份
                
                vaccineSheep:'',//牛羊口蹄疫疫苗
                vaccineInfluenza:'',//禽流感疫苗
                vaccineChicken:'',//鸡新城疫苗
                vaccineSwine:'',//猪瘟疫苗
                vaccineRabies	:'',//狂犬病疫苗
                vaccineSmall:'',//小反刍兽疫疫苗
                disinfectant:'',//消毒药
                disinfectionMaterial:'',//消毒物资
                countPig:'',//生猪
                countCow:'',//牛
                countSheep:'',//羊
                countPoultry:'',//家禽
                countPigeon:'',//鸽子
                enclosure:'',//消毒畜禽圈舍
                countDog:'',//犬
                serumPig:'',//猪血清
                serumSheep:'',//牛羊血清
                serumPoultry:'',//家禽血清
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
                this.ruleForm.YLBZMJData = newVal.oilPeanut * 1 + newVal.oilRapeseed * 1 + newVal.oilSesame * 1 +
                                           newVal.oilSesameHu * 1 + newVal.oilSunflower * 1 + newVal.oilOther * 1
                this.ruleForm.MHBZMJData = newVal.cotton * 1
                this.ruleForm.SMBZMJData = newVal.linenJute * 1 + newVal.linenHemp * 1 + newVal.linenRamee * 1 + 
                                           newVal.linenFlax * 1 + newVal.linenOther * 1
                this.ruleForm.TLBZMJData = newVal.sugarCane * 1 + newVal.sugarBeet * 1
                this.ruleForm.YYData = newVal.tobacco * 1
                this.ruleForm.ZCYCData = newVal.tcmGinseng * 1 + newVal.tcmLycium * 1 + newVal.tcmLiquorice * 1

                this.ruleForm.YCLData = newVal.veggieCelery * 1 + newVal.veggieSpinach * 1 + newVal.veggieRape * 1
                this.ruleForm.BCLData = newVal.veggieCabbage * 1
                this.ruleForm.GLLData = newVal.veggieRepollo * 1
                this.ruleForm.GJLData = newVal.veggieRadish * 1 + newVal.veggieGinger * 1 + newVal.veggieCarrot * 1 + newVal.veggieMustard * 1
                this.ruleForm.GCLData = newVal.veggieCuke * 1 + newVal.veggieWinterMelon * 1 + newVal.veggiePumpkin * 1
                this.ruleForm.DLData = newVal.veggieCowpea * 1 + newVal.veggieKidneyBean * 1
                this.ruleForm.QGLData = newVal.veggieEggplant * 1 + newVal.veggiePepper * 1 + newVal.veggieTomato * 1
                this.ruleForm.CSLData = newVal.veggieLeeks * 1 + newVal.veggieGarlic * 1
                this.ruleForm.SSCData = newVal.veggieLotusRoot * 1
                this.ruleForm.SYJData = newVal.fungusShiitake * 1 + newVal.fungusBlack * 1 + newVal.fungusMushroom * 1

                this.ruleForm.SCJSYJData = this.ruleForm.YCLData + this.ruleForm.GJLData + this.ruleForm.GCLData + this.ruleForm.DLData + 
                                           this.ruleForm.QGLData + this.ruleForm.CSLData + this.ruleForm.SYJData + newVal.veggieCabbage * 1 + 
                                           newVal.veggieRepollo * 1 + newVal.veggieLotusRoot * 1
                
                this.ruleForm.GGLData = newVal.melonWater * 1 + newVal.melonBerry * 1 + newVal.melonMusk * 1 + newVal.melonOther * 1
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
            let res = await animalDiseaseDetail({id:this.id});
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
            let res = await animalDiseaseUpdate(updateObj);
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
            let res = await animalDiseaseInsert(addObj);
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