<template>
 <!--土肥站---监测点基本情况 新增，详情，编辑-->
    <div id="basicSituationOfPointsDetail"  class="pageContent" v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>基本信息</div> <!---->
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="监测点名称：" prop="testingPlaceName" class="formItem">
                                <!-- <el-select v-model="ruleForm.testingPlaceName" filterable clearable :disabled="urlType" placeholder="请选择">
                                    <el-option
                                    v-for="item in testOption"
                                    :key="item.id"
                                    :label="item.testingPlaceName"
                                    :value="item.id">
                                    </el-option>
                                </el-select> -->
                                <el-input v-model="ruleForm.testingPlaceName" :disabled="urlType" placeholder="请输入监测点名称"></el-input>
                            </el-form-item>
                            <el-form-item label="建点年份：" prop="dataYear" class="formItem formSelect">
                                <el-date-picker
                                    v-model="ruleForm.dataYear"
                                    type="year"
                                    value-format="yyyy"
                                    format="yyyy"
                                    :disabled="urlType"
                                    :picker-options="pickerBeginDateAfter"
                                    placeholder="选择年">
                                    </el-date-picker>
                            </el-form-item>  
                        </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="2">
                    <template slot="title">
                        <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>监测站信息</div> <!---->
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
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
                            <el-form-item label="地块名称：" prop="parcelName" class="formItem">
                                <el-input v-model="ruleForm.parcelName" :disabled="urlType" placeholder="请输入地块名称"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="详细地址：" prop="address" class="formItem">
                                <el-input v-model="ruleForm.address" :disabled="urlType" placeholder="请输入详细地址"></el-input>
                            </el-form-item>
                            <el-form-item label="经度：" prop="longitude" class="formItem">
                                <el-input v-model="ruleForm.longitude" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入经度"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="纬度：" prop="latitude" class="clearFloat">
                                <el-input v-model="ruleForm.latitude" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入纬度"></el-input>
                            </el-form-item> 
                            <div style="clear:both;"></div>
                        </el-form>
                        <div style="clear:both;"></div>
                        <el-form :model="ruleForm" status-icon class="demo-ruleForm mapContent">
                             <el-form-item label="地图：">
                                <Baidu-map
                                @syncCenterAndZoom='syncCenterAndZoom'
                                @getClickInfo='getClickInfo'
                                ></Baidu-map>
                            </el-form-item>
                         </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="3">
                    <template slot="title">
                        <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>监测点地理信息</div> <!---->
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="常年降水量：" class="formItem">
                                <el-input v-model="ruleForm.cnjsl" :disabled="urlType" placeholder="请输入常年降水量"></el-input>
                            </el-form-item>
                            <el-form-item label="坡度 ：" class="formItem">
                                <el-input v-model="ruleForm.slope" :disabled="urlType" placeholder="请输入坡度 "></el-input> (°)
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="常年有效积温：" class="formItem">
                                <el-input v-model="ruleForm.cnyxjw" :disabled="urlType" placeholder="请输入常年有效积温"></el-input> (℃)
                            </el-form-item>
                            <el-form-item label="海拔高度："  class="formItem">
                                <el-input v-model="ruleForm.testingPlaceName" :disabled="urlType" placeholder="请输入海拔高度"></el-input> (m)
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="常年无霜期 ："  class="formItem">
                                <el-input v-model="ruleForm.cnwsq" :disabled="urlType" placeholder="请输入常年无霜期 "></el-input> (d)
                            </el-form-item>
                            <el-form-item label="潜水埋深：" class="formItem">
                                <el-input v-model="ruleForm.testingPlaceName" :disabled="urlType" placeholder="请输入潜水埋深"></el-input> (m)
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="地形部位 ：" class="formItem">
                                <el-input v-model="ruleForm.testingPlaceName" :disabled="urlType" placeholder="请输入地形部位 "></el-input> 
                            </el-form-item>
                            <el-form-item label="障碍因素：" class="formItem">
                                <el-input v-model="ruleForm.testingPlaceName" :disabled="urlType" placeholder="请输入障碍因素"></el-input> 
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="地力水平：" class="formItem">
                                <el-input v-model="ruleForm.dlsp" :disabled="urlType" placeholder="请输入地力水平"></el-input> 
                            </el-form-item>
                        </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="4">
                    <template slot="title">
                        <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('4') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>监测点种植信息</div> <!---->
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="灌溉能力：" class="formItem">
                                <el-input v-model="ruleForm.ggnl" :disabled="urlType" placeholder="请输入灌溉能力"></el-input>
                            </el-form-item>
                            <el-form-item label="排水能力：" class="formItem">
                                <el-input v-model="ruleForm.psnl" :disabled="urlType" placeholder="请输入排水能力 "></el-input> 
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="地域分区：" class="formItem">
                                <el-input v-model="ruleForm.dyfq" :disabled="urlType" placeholder="请输入地域分区"></el-input>
                            </el-form-item>
                            <el-form-item label="熟制分区："  class="formItem">
                                <el-input v-model="ruleForm.szfq" :disabled="urlType" placeholder="请输入熟制分区"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="典型种植制度："  class="formItem">
                                <el-input v-model="ruleForm.dxzhzd" :disabled="urlType" placeholder="请输入典型种植制度 "></el-input>
                            </el-form-item>
                            <el-form-item label="产量水平：" class="formItem">
                                <el-input v-model="ruleForm.clsp" :disabled="urlType" placeholder="请输入产量水平"></el-input> (Kg/hm2)
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="化肥：" class="formItem">
                                <el-input v-model="ruleForm.fertilizers" :disabled="urlType" placeholder="请输入化肥名称"></el-input> 
                            </el-form-item>
                            <el-form-item label="有机肥：" class="formItem">
                                <el-input v-model="ruleForm.organic_fertilizers" :disabled="urlType" placeholder="请输入有机肥名称"></el-input> 
                            </el-form-item>
                        </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="5">
                    <template slot="title">
                        <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('5') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>监测点田块信息</div> <!---->
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="田块面积：" class="formItem">
                                <el-input v-model="ruleForm.dkmj" :disabled="urlType" placeholder="请输入田块面积"></el-input> (hm2)
                            </el-form-item>
                            <el-form-item label="代表面积：" class="formItem">
                                <el-input v-model="ruleForm.dbmj" :disabled="urlType" placeholder="请输入代表面积 "></el-input> 
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="土壤代码：" class="formItem">
                                <el-input v-model="ruleForm.soilNum" :disabled="urlType" placeholder="请输入土壤代码"></el-input>
                            </el-form-item>
                            <el-form-item label="成土母质："  class="formItem">
                                <el-input v-model="ruleForm.ctmz" :disabled="urlType" placeholder="请输入成土母质"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="土类："  class="formItem">
                                <el-input v-model="ruleForm.soilType" :disabled="urlType" placeholder="请输入土类 "></el-input>
                            </el-form-item>
                            <el-form-item label="亚类：" class="formItem">
                                <el-input v-model="ruleForm.subsoil" :disabled="urlType" placeholder="请输入亚类"></el-input> 
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="土属：" class="formItem">
                                <el-input v-model="ruleForm.soilGenus" :disabled="urlType" placeholder="请输入土属"></el-input> 
                            </el-form-item>
                            <el-form-item label="土种：" class="formItem">
                                <el-input v-model="ruleForm.soilSpecies" :disabled="urlType" placeholder="请输入土种"></el-input> 
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
import { basicPointsDetail, basicPointsUpdate, basicPointsInsert} from '@/utils/api/tuFeiZhan/basicSituationOfPoints'; //土肥站---监测点基本情况
import {townshipOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
import BaiduMap from '@/components/baiduMap/BaiduMap';
export default {
    name:'basicSituationOfPointsDetail',
    data() {
        return {
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() > new Date()-8.64e7;
                }
            },
            activeNames: ['1','2','3','4','5'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            id:'', //数据的id
            formDate:[], // 自定义表单对象，传值给子组件显示
            ruleForm: {
                testingPlaceName:'',//检测站名称
                dataYear:'',//建点年份
                township:'', //乡镇
                address:'', //地址
                parcelName:'', //地块名称
                longitude:'',//经度
                latitude:'', //纬度
                cnjsl:'', //常年降水量
                slope:'', //坡度
                cnyxjw:'',//常年有效积温
                hbgd:'', //海拔高度
                cnwsq:'',//常年无霜期
                qsms:'', //潜水埋深
                position:'',//地形部位
                zays:'',//障碍因素
                dlsp:'',//地力水平
                ggnl:'',//灌溉能力
                psnl:'',//排水能力
                dyfq:'', //地域分区
                szfq:'',  //熟制分区
                dxzhzd:'' , //典型种植制度
                clsp:'',  //产量水平
                fertilizers:'',//化肥
                organic_fertilizers:'',//有机肥
                dkmj:'',//田块面积
                dbmj:'',//代表面积
                soilNum:'', //土壤代码
                ctmz:'', //成土母质
                soilType:'',//土类
                subsoil:'', //亚类
                soilGenus:'',//土属
                soilSpecies:'',//土种

            },
            townshipOption:townshipOption, //乡镇
            rules: {
                testingPlaceName: [
                    {required: true, message: '请输入检测站名称',trigger: 'blur', }
                ],
                dataYear: [
                    { required: true, message: '请选择建点年份',trigger: 'blur' }
                ],
                township: [
                    { required: true, message: '请选择乡镇',trigger: 'blur' }
                ],
                address:[
                    { required: true, message: '请输入地址',trigger: 'blur' }
                ],
                parcelName:[
                    { required: true, message: '请输入地块名称',trigger: 'blur' }
                ],
                longitude:[
                     { required: true, message: '请输入纬度',trigger: 'blur' }
                ],
                latitude:[
                     { required: true, message: '请输入维度',trigger: 'blur' }
                ],
            },
            options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],

                
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
            let res = await basicPointsDetail({id:this.id});
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
            this.ruleForm.customDataList = this.formDate;//自定义表单list
            let updateObj = JSON.stringify(this.ruleForm);
            let res = await basicPointsUpdate(updateObj);
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
            let res = await basicPointsInsert(addObj);
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
    }
}
</script>
<style scoped lang="scss">

</style>