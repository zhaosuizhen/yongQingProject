<template>
    <!----统计局---畜产品产量 添加编辑详情---->
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
                        <el-form-item label="年份：" prop="years" class="formSelect" style="width:50%;margin-top:10px">
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
                    </el-form>
                
                    <el-collapse-item name="1">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>乡镇种植面积</span>
                                <!-- <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.YLBZMJData}}</span> 吨</span> -->
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <el-form-item label="潼川" class="formItem">
                                    <el-input v-model="ruleForm.tc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入潼川面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="芦溪" class="formItem">
                                    <el-input v-model="ruleForm.lx" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入芦溪面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="景福" class="formItem">
                                    <el-input v-model="ruleForm.jf" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入景福面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="富顺" class="formItem">
                                    <el-input v-model="ruleForm.fs" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入富顺面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="刘营" class="formItem">
                                    <el-input v-model="ruleForm.ly" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入刘营面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="西平" class="formItem">
                                    <el-input v-model="ruleForm.xp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入西平面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="安居" class="formItem">
                                    <el-input v-model="ruleForm.aj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入安居面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="塔山" class="formItem">
                                    <el-input v-model="ruleForm.ts" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入塔山面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="乐安" class="formItem">
                                    <el-input v-model="ruleForm.la" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入乐安面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="金石" class="formItem">
                                    <el-input v-model="ruleForm.js" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入金石面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="观桥" class="formItem">
                                    <el-input v-model="ruleForm.gq" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入观桥面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="新生" class="formItem">
                                    <el-input v-model="ruleForm.xs" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入新生面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="古井" class="formItem">
                                    <el-input v-model="ruleForm.gj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入古井面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="中太" class="formItem">
                                    <el-input v-model="ruleForm.zt" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入中太面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="中新" class="formItem">
                                    <el-input v-model="ruleForm.zx" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入中新面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="石安" class="formItem">
                                    <el-input v-model="ruleForm.sa" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入石安面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="秋林" class="formItem">
                                    <el-input v-model="ruleForm.ql" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入秋林面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="建设" class="formItem">
                                    <el-input v-model="ruleForm.jsz" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入建设面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="三元" class="formItem">
                                    <el-input v-model="ruleForm.sy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入三元面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="万安" class="formItem">
                                    <el-input v-model="ruleForm.wa" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入万安面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="郪江" class="formItem">
                                    <el-input v-model="ruleForm.qj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入郪江面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="龙树" class="formItem">
                                    <el-input v-model="ruleForm.ls" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入龙树面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="鲁班" class="formItem">
                                    <el-input v-model="ruleForm.lb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入鲁班面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="紫河" class="formItem">
                                    <el-input v-model="ruleForm.zh" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入紫河面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="建平" class="formItem">
                                    <el-input v-model="ruleForm.jp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入建平面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="新鲁" class="formItem">
                                    <el-input v-model="ruleForm.xl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入新鲁面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="立新" class="formItem">
                                    <el-input v-model="ruleForm.lxz" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入立新面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="灵兴" class="formItem">
                                    <el-input v-model="ruleForm.lingxing" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入灵兴面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="八洞" class="formItem">
                                    <el-input v-model="ruleForm.bd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入八洞面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="凯河" class="formItem">
                                    <el-input v-model="ruleForm.kh" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入凯河面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="花园" class="formItem">
                                    <el-input v-model="ruleForm.hy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入花园面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="东塔" class="formItem">
                                    <el-input v-model="ruleForm.dt" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入东塔面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="光辉" class="formItem">
                                    <el-input v-model="ruleForm.gh" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入光辉面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="百顷" class="formItem">
                                    <el-input v-model="ruleForm.bq" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入百顷面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="前锋" class="formItem">
                                    <el-input v-model="ruleForm.qf" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入前锋面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="新德" class="formItem">
                                    <el-input v-model="ruleForm.xd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入新德面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="柳池" class="formItem">
                                    <el-input v-model="ruleForm.lc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入柳池面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="北坝" class="formItem">
                                    <el-input v-model="ruleForm.bb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入北坝面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="永明" class="formItem">
                                    <el-input v-model="ruleForm.ym" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入永明面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="永新" class="formItem">
                                    <el-input v-model="ruleForm.yx" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入永新面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="黎曙" class="formItem">
                                    <el-input v-model="ruleForm.lsz" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入黎曙面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="金鼓" class="formItem">
                                    <el-input v-model="ruleForm.jg" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入金鼓面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="乐加" class="formItem">
                                    <el-input v-model="ruleForm.lj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入乐加面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="里程" class="formItem">
                                    <el-input v-model="ruleForm.lcz" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入里程面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="幸福" class="formItem">
                                    <el-input v-model="ruleForm.xf" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入幸福面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="菊河" class="formItem">
                                    <el-input v-model="ruleForm.jh" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入菊河面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="老马" class="formItem">
                                    <el-input v-model="ruleForm.lm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入老马面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="建中" class="formItem">
                                    <el-input v-model="ruleForm.jz" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入建中面积"></el-input> 亩
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="断石" class="formItem">
                                    <el-input v-model="ruleForm.ds" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入断石面积"></el-input> 亩
                                </el-form-item>
                                <el-form-item label="下新" class="formItem">
                                    <el-input v-model="ruleForm.xsz" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入下新面积"></el-input> 亩
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
//统计局---畜产品产量 接口
import { townPlantAreaDetail,townPlantAreaUpdate, townPlantAreaInsert } from '@/utils/api/ruralEconomy/townPlantArea' 
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
            activeNames: ['0','1','2','3','4','5','6','7','7-1','7-2','7-3','7-4','7-5','7-6','7-7','7-8','7-9','7-10','8','9'], //默认折叠板全部打开
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
                
                aj:'',//安居
                bb:'',//北坝
                bd:'',//八洞
                bq:'',//百顷
                ds:'',//断石
                dt:'',//东塔
                fs:'',//富顺
                gh:'',//光辉
                gj:'',//古井
                gq:'',//观桥
                hy:'',//花园
                jf:'',//景福
                jg:'',//金鼓
                jh:'',//菊河
                jp:'',//建平
                js:'',//金石
                jsz:'',//建设镇
                jz:'',//建中
                kh:'',//凯河
                la:'',//乐安
                lb:'',//鲁班
                lc:'',//柳池
                lcz:'',//里程镇
                lingxing:'',//灵兴
                lj:'',//乐加
                lm:'',//老马
                ls:'',//龙树
                lsz:'',//黎曙
                lx:'',//芦溪
                lxz:'',//立新镇
                ly:'',//刘营
                qf:'',//前锋
                qj:'',//郪江
                ql:'',//秋林
                sa:'',//石安
                sy:'',//三元
                tc:'',//潼川
                ts:'',//塔山
                wa:'',//万安
                xd:'',//新德
                xf:'',//幸福
                xl:'',//新鲁
                xp:'',//西平
                xs:'',//新生
                xsz:'',//下新
                ym:'',//永明
                yx:'',//永新
                zh:'',//紫河
                zt:'',//中太
                zx:'',//中新

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

                this.ruleForm.allData = this.ruleForm.YLBZMJData + this.ruleForm.MHBZMJData + this.ruleForm.SMBZMJData + this.ruleForm.TLBZMJData + 
                                        this.ruleForm.YYData + this.ruleForm.ZCYCData + this.ruleForm.SCJSYJData + this.ruleForm.GGLData
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
            let res = await townPlantAreaDetail({id:this.id});
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
            let res = await townPlantAreaUpdate(updateObj);
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
            let res = await townPlantAreaInsert(addObj);
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