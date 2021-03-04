<template>
    <!----国土局---农村土地利用现状二级分类面积汇总表 添加编辑详情---->
    <div id="landUseLeaveTwoDetail" class="pageContent"  v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                            <span>农村土地利用现状二级分类面积汇总表</span>
                            <span class="titleRight">产量总合计：<span class="valueStyle">{{allTotal}}</span> 吨</span>
                        </div> 
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
                           <el-form-item label="年份：" prop="dataYear" class="formItem formSelect">
                                <el-date-picker
                                    v-model="ruleForm.dataYear"
                                    :disabled="urlType"
                                    type="year"
                                    value-format='yyyy'
                                    format='yyyy'
                                    :picker-options="pickerBeginDateAfter"
                                    placeholder="选择年">
                                    </el-date-picker>
                            </el-form-item>  
                            <div style="clear:both;"></div>
                        </el-form>
                        <el-collapse  v-model="activeNames" @change="handleChange">
                            <el-collapse-item name="1-1">
                                <template slot="title">
                                    <div class="titleContent">
                                        <i class="collapseDownIcon" :class="[nameFlag.indexOf('1-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span>耕地</span>
                                        <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.gdhj}}</span> 吨</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                    <el-form-item label="水田：" class="formItem">
                                        <el-input v-model="ruleForm.st" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入水田数量"></el-input>(亩)
                                    </el-form-item>
                                    <el-form-item label="水浇地：" class="formItem">
                                        <el-input v-model="ruleForm.sjd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入水浇地数量"></el-input>(亩)
                                    </el-form-item>
                                    <div style="clear:both;"></div>
                                    <el-form-item label="旱地：" class="formItem">
                                        <el-input v-model="ruleForm.hd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入旱地数量"></el-input>(亩)
                                    </el-form-item>     
                                </el-form>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="1-2">
                                <template slot="title">
                                    <div class="titleContent">
                                        <i class="collapseDownIcon" :class="[nameFlag.indexOf('1-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span>园地</span>
                                        <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.ydhj}}</span> 吨</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                    <el-form-item label="果园：" class="formItem">
                                        <el-input v-model="ruleForm.gy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入果园数量"></el-input>(亩)
                                    </el-form-item>   
                                    <el-form-item label="茶园：" class="formItem">
                                        <el-input v-model="ruleForm.cy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入茶园数量"></el-input>(亩))
                                    </el-form-item> 
                                    <div style="clear:both;"></div>
                                    <el-form-item label="其他园地：" class="formItem">
                                        <el-input v-model="ruleForm.qtyd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入其他园地数量"></el-input>(亩)
                                    </el-form-item> 
                                </el-form>
                                </div>
                            </el-collapse-item>  
                            <el-collapse-item name="1-3">
                                <template slot="title">
                                    <div class="titleContent">
                                        <i class="collapseDownIcon" :class="[nameFlag.indexOf('1-3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span>林地</span>
                                        <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.ldhj}}</span> 吨</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                    <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                        <el-form-item label="有林地：" class="formItem">
                                            <el-input v-model="ruleForm.yld" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入有林地数量"></el-input>(亩)
                                        </el-form-item>   
                                        <el-form-item label="灌木林地：" class="formItem">
                                            <el-input v-model="ruleForm.gmld" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入灌木林地数量"></el-input>(亩))
                                        </el-form-item> 
                                        <div style="clear:both;"></div>
                                        <el-form-item label="其他林地：" class="formItem">
                                            <el-input v-model="ruleForm.qtld" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入其他林地数量"></el-input>(亩)
                                        </el-form-item> 
                                    </el-form>
                                </div>
                            </el-collapse-item>  
                            <el-collapse-item name="1-4">
                                <template slot="title">
                                    <div class="titleContent">
                                        <i class="collapseDownIcon" :class="[nameFlag.indexOf('1-4') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span>草地</span>
                                        <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.cdhj}}</span> 吨</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                    <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                        <el-form-item label="天然牧草地" class="formItem">
                                            <el-input v-model="ruleForm.trmcd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入天然牧草地数量"></el-input>(亩)
                                        </el-form-item>   
                                        <el-form-item label="人工牧草地：" class="formItem">
                                            <el-input v-model="ruleForm.rgmcd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入人工牧草地数量"></el-input>(亩))
                                        </el-form-item> 
                                        <div style="clear:both;"></div>
                                        <el-form-item label="其他草地：" class="formItem">
                                            <el-input v-model="ruleForm.qtcd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入其他草地数量"></el-input>(亩)
                                        </el-form-item> 
                                    </el-form> 
                                </div>
                            </el-collapse-item> 
                            <el-collapse-item name="1-5">
                                <template slot="title">
                                    <div class="titleContent">
                                        <i class="collapseDownIcon" :class="[nameFlag.indexOf('1-5') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span>城镇村及工矿用地</span>
                                        <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.czcjgkyd}}</span> 吨</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                    <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                        <el-form-item label="城市：" class="formItem">
                                            <el-input v-model="ruleForm.city" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入城市数量"></el-input>(亩)
                                        </el-form-item>   
                                        <el-form-item label="建制镇：" class="formItem">
                                            <el-input v-model="ruleForm.town" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入人建制镇数量"></el-input>(亩))
                                        </el-form-item> 
                                        <div style="clear:both;"></div>
                                        <el-form-item label="村庄：" class="formItem">
                                            <el-input v-model="ruleForm.village" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入村庄数量"></el-input>(亩)
                                        </el-form-item> 
                                        <el-form-item label="采矿用地：" class="formItem">
                                            <el-input v-model="ruleForm.ckyd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入采矿用地数量"></el-input>(亩)
                                        </el-form-item> 
                                        <div style="clear:both;"></div>
                                        <el-form-item label="风景名胜及特殊用地：" class="formItem">
                                            <el-input v-model="ruleForm.fjms" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入风景名胜及特殊用地数量"></el-input>(亩)
                                        </el-form-item> 
                                    </el-form>
                                </div>
                            </el-collapse-item> 
                            <el-collapse-item name="1-6">
                                <template slot="title">
                                    <div class="titleContent">
                                        <i class="collapseDownIcon" :class="[nameFlag.indexOf('1-6') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span>交通运输用地</span>
                                        <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.jtys}}</span> 吨</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                    <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                        <el-form-item label="铁路用地：" class="formItem">
                                            <el-input v-model="ruleForm.tlyd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入铁路用地数量"></el-input>(亩)
                                        </el-form-item>   
                                        <el-form-item label="公路用地：" class="formItem">
                                            <el-input v-model="ruleForm.glyd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入公路用地数量"></el-input>(亩))
                                        </el-form-item> 
                                        <div style="clear:both;"></div>
                                        <el-form-item label="农村道路：" class="formItem">
                                            <el-input v-model="ruleForm.ncdl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入农村道路数量"></el-input>(亩)
                                        </el-form-item> 
                                        <el-form-item label="机场用地：" class="formItem">
                                            <el-input v-model="ruleForm.jcyd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入机场用地数量"></el-input>(亩)
                                        </el-form-item> 
                                        <div style="clear:both;"></div>
                                        <el-form-item label="港口码头用地：" class="formItem">
                                            <el-input v-model="ruleForm.gkmtyd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入港口码头用地数量"></el-input>(亩)
                                        </el-form-item> 
                                        <el-form-item label="管道运输用地：" class="formItem">
                                            <el-input v-model="ruleForm.gdysyd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入管道运输用地数量"></el-input>(亩)
                                        </el-form-item> 
                                    </el-form>
                                </div>
                            </el-collapse-item> 
                            <el-collapse-item name="1-7">
                                <template slot="title">
                                    <div class="titleContent">
                                        <i class="collapseDownIcon" :class="[nameFlag.indexOf('1-7') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span>水域及水利设施用地</span>
                                        <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.syjsl}}</span> 吨</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                    <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                        <el-form-item label="河流水面：" class="formItem">
                                            <el-input v-model="ruleForm.hlsm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入河流水面数量"></el-input>(亩)
                                        </el-form-item>   
                                        <el-form-item label="湖泊水面：" class="formItem">
                                            <el-input v-model="ruleForm.hpsm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入湖泊水面数量"></el-input>(亩))
                                        </el-form-item> 
                                        <div style="clear:both;"></div>
                                        <el-form-item label="水库水面：" class="formItem">
                                            <el-input v-model="ruleForm.sksm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入水库水面数量"></el-input>(亩)
                                        </el-form-item> 
                                        <el-form-item label="坑塘水面：" class="formItem">
                                            <el-input v-model="ruleForm.ktsm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入坑塘水面数量"></el-input>(亩)
                                        </el-form-item> 
                                        <div style="clear:both;"></div>
                                        <el-form-item label="沿海滩涂：" class="formItem">
                                            <el-input v-model="ruleForm.yhtt" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入沿海滩涂数量"></el-input>(亩)
                                        </el-form-item> 
                                        <el-form-item label="内陆滩涂：" class="formItem">
                                            <el-input v-model="ruleForm.nltt" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入内陆滩涂数量"></el-input>(亩)
                                        </el-form-item> 
                                        <div style="clear:both;"></div>
                                        <el-form-item label="冰川及永久积雪：" class="formItem">
                                            <el-input v-model="ruleForm.bcjyjjx" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入冰川及永久积雪数量"></el-input>(亩)
                                        </el-form-item> 
                                    </el-form>                                   
                                </div>
                            </el-collapse-item> 
                            <el-collapse-item name="1-8">
                                <template slot="title">
                                    <div class="titleContent">
                                        <i class="collapseDownIcon" :class="[nameFlag.indexOf('1-8') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span>其他土地</span>
                                        <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.qttdhj}}</span> 吨</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                    <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                        <el-form-item label="设施农用地：" class="formItem">
                                            <el-input v-model="ruleForm.ssnyd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入设施农用地数量"></el-input>(亩)
                                        </el-form-item>   
                                        <el-form-item label="田坎：" class="formItem">
                                            <el-input v-model="ruleForm.tk" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入田坎数量"></el-input>(亩))
                                        </el-form-item> 
                                        <div style="clear:both;"></div>
                                        <el-form-item label="盐碱地：" class="formItem">
                                            <el-input v-model="ruleForm.yjd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入盐碱地数量"></el-input>(亩)
                                        </el-form-item> 
                                        <el-form-item label="沼泽地：" class="formItem">
                                            <el-input v-model="ruleForm.zzd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入沼泽地数量"></el-input>(亩)
                                        </el-form-item> 
                                        <div style="clear:both;"></div>
                                        <el-form-item label="沙地：" class="formItem">
                                            <el-input v-model="ruleForm.sd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入沙地数量"></el-input>(亩)
                                        </el-form-item> 
                                        <el-form-item label="裸地：" class="formItem">
                                            <el-input v-model="ruleForm.ld" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入裸地数量"></el-input>(亩)
                                        </el-form-item> 
                                    </el-form>
                                    
                                </div>
                            </el-collapse-item> 
                        </el-collapse>
                    </div>
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
import { landUseLeaveTwoDetail, landUseLeaveTwoUpdate,landUseLeaveTwoInsert } from '@/utils/api/landResourcesBureau/landUseLeaveTwo'; //国土局---农村土地利用现状二级分类面积汇总表
import {townshipOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
export default {
    name:'landUseLeaveTwoDetail',
    data() {
        return {
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() > new Date()-8.64e7;
                }
            },
            activeNames: ['1','1-1','1-2','1-3','1-4','1-5','1-6','1-7','1-8'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
             id:'', //数据的id
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            townshipOption:townshipOption, //乡镇
            formDate:[], // 自定义表单对象，传值给子组件显示
            allTotal:0, //总计显示数值
            ruleForm: {
                bcjyjjx:0, //冰川及永久积雪
                cdhj:0, //草地合计
                city:0, //城市
                ckyd:0, //采矿用地
                cy:0, //茶园
                czcjgkyd:0, //城镇村及工矿用地合计
                dataYear:'', //年份
                fjms:0, //风景名胜及特殊用地
                gdhj:0, //耕地合计
                gdysyd:0, //管道运输用地
                gkmtyd:0, //港口码头用地
                glyd:0, //公路用地
                gmld:0, //灌木林地
                gq:0, //沟渠
                gy:0, //果园
                hd:0, //旱地
                hlsm:0, //河流水面
                hpsm:0, //湖泊水面
                jcyd:0, //机场用地
                jtys:0, //交通运输用地合计
                ktsm:0, //坑塘水面
                ld:0, //裸地
                ldhj:0, //林地合计
                ncdl:0, //农村道路
                nltt:0, //内陆滩涂
                qtcd:0, //其他草地
                qtld:0, //其他林地
                qttdhj:0, //其他土地合计
                qtyd:0, //其它园地
                rgmcd:0, //人工牧草地
                sd:0, //沙地
                sgjzyd:0, //水工建筑用地
                sjd:0, //水浇地
                sksm:0, //水库水面
                ssnyd:0, //设施农用地
                st:0, //水田
                syjsl:0, //水域及水利设施用地合计
                tk:0, //田坎
                tlyd:0, //铁路用地
                town:0, //建制镇
                township:'', //乡镇
                trmcd:0, //天然牧草地
                village:0, //村庄
                ydhj:0, //园地合计
                yhtt:0, //沿海滩涂
                yjd:0, //盐碱地
                yld:0, //有林地
                zzd:0, //沼泽地
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
                let st = isNaN(parseFloat(newVal['st']))?0:parseFloat(newVal['st']) ;   // 水田 
                let sjd = isNaN(parseFloat(newVal['sjd']))?0:parseFloat(newVal['sjd']) ;   // 水浇地 
                let hd = isNaN(parseFloat(newVal['hd']))?0:parseFloat(newVal['hd']) ;   // 旱地
                this.ruleForm.gdhj = st + sjd + hd; //耕地合计

                let gy = isNaN(parseFloat(newVal['gy']))?0:parseFloat(newVal['gy']) ;   // 果园 
                let cy = isNaN(parseFloat(newVal['cy']))?0:parseFloat(newVal['cy']) ;   // 茶园 
                let qtyd = isNaN(parseFloat(newVal['qtyd']))?0:parseFloat(newVal['qtyd']) ;   // 其他园地
                this.ruleForm.ydhj = gy + cy + qtyd; //园地合计

                let yld = isNaN(parseFloat(newVal['yld']))?0:parseFloat(newVal['yld']) ;   // 有林地 
                let gmld = isNaN(parseFloat(newVal['gmld']))?0:parseFloat(newVal['gmld']) ;   // 灌木林地 
                let qtld = isNaN(parseFloat(newVal['qtld']))?0:parseFloat(newVal['qtld']) ;   // 其他林地
                this.ruleForm.ldhj = yld + gmld + qtld; //林地合计

                let trmcd = isNaN(parseFloat(newVal['trmcd']))?0:parseFloat(newVal['trmcd']) ;   // 天然牧草地 
                let rgmcd = isNaN(parseFloat(newVal['rgmcd']))?0:parseFloat(newVal['rgmcd']) ;   // 人工牧草地： 
                let qtcd = isNaN(parseFloat(newVal['qtcd']))?0:parseFloat(newVal['qtcd']) ;   // 其他草地：
                this.ruleForm.cdhj = trmcd + rgmcd + qtcd; //草地合计

                let city = isNaN(parseFloat(newVal['city']))?0:parseFloat(newVal['city']) ;   // 城市： 
                let town = isNaN(parseFloat(newVal['town']))?0:parseFloat(newVal['town']) ;   // 建制镇： 
                let village = isNaN(parseFloat(newVal['village']))?0:parseFloat(newVal['village']) ;   // 村庄：
                let ckyd = isNaN(parseFloat(newVal['ckyd']))?0:parseFloat(newVal['ckyd']) ;   // 采矿用地： 
                let fjms = isNaN(parseFloat(newVal['fjms']))?0:parseFloat(newVal['fjms']) ;   // 风景名胜及特殊用地： 
                this.ruleForm.czcjgkyd = city + town + village + ckyd + fjms; //城镇村及工矿用地合计

                let tlyd = isNaN(parseFloat(newVal['tlyd']))?0:parseFloat(newVal['tlyd']) ;   // 铁路用地： 
                let glyd = isNaN(parseFloat(newVal['glyd']))?0:parseFloat(newVal['glyd']) ;   // 公路用地： 
                let ncdl = isNaN(parseFloat(newVal['ncdl']))?0:parseFloat(newVal['ncdl']) ;   // 农村道路：
                let jcyd = isNaN(parseFloat(newVal['jcyd']))?0:parseFloat(newVal['jcyd']) ;   // 机场用地： 
                let gkmtyd = isNaN(parseFloat(newVal['gkmtyd']))?0:parseFloat(newVal['gkmtyd']) ;   // 港口码头用地： 
                let gdysyd = isNaN(parseFloat(newVal['gdysyd']))?0:parseFloat(newVal['gdysyd']) ;   // 管道运输用地：
                this.ruleForm.jtys = tlyd + glyd + ncdl + jcyd + gkmtyd + gdysyd; //交通运输用地合计

                let hlsm = isNaN(parseFloat(newVal['hlsm']))?0:parseFloat(newVal['hlsm']) ;   // 河流水面： 
                let hpsm = isNaN(parseFloat(newVal['hpsm']))?0:parseFloat(newVal['hpsm']) ;   // 湖泊水面： 
                let sksm = isNaN(parseFloat(newVal['sksm']))?0:parseFloat(newVal['sksm']) ;   // 水库水面：
                let ktsm = isNaN(parseFloat(newVal['ktsm']))?0:parseFloat(newVal['ktsm']) ;   // 坑塘水面： 
                let yhtt = isNaN(parseFloat(newVal['yhtt']))?0:parseFloat(newVal['yhtt']) ;   // 沿海滩涂： 
                let nltt = isNaN(parseFloat(newVal['nltt']))?0:parseFloat(newVal['nltt']) ;   // 内陆滩涂：
                let bcjyjjx = isNaN(parseFloat(newVal['bcjyjjx']))?0:parseFloat(newVal['bcjyjjx']) ;   // 冰川及永久积雪：
                this.ruleForm.syjsl = hlsm + hpsm + sksm + ktsm + yhtt + nltt + bcjyjjx; //水域及水利设施用地

                let ssnyd = isNaN(parseFloat(newVal['ssnyd']))?0:parseFloat(newVal['ssnyd']) ;   // 设施农用地： 
                let tk = isNaN(parseFloat(newVal['tk']))?0:parseFloat(newVal['tk']) ;   // 田坎： 
                let yjd = isNaN(parseFloat(newVal['yjd']))?0:parseFloat(newVal['yjd']) ;   // 盐碱地：
                let zzd = isNaN(parseFloat(newVal['zzd']))?0:parseFloat(newVal['zzd']) ;   // 沼泽地： 
                let sd = isNaN(parseFloat(newVal['sd']))?0:parseFloat(newVal['sd']) ;   // 沙地： 
                let ld = isNaN(parseFloat(newVal['ld']))?0:parseFloat(newVal['ld']) ;   // 裸地：
                this.ruleForm.qttdhj = ssnyd + tk + yjd + zzd + sd + ld ; //其他土地

                //总计
                this.allTotal = this.ruleForm.gdhj + this.ruleForm.ydhj + this.ruleForm.ldhj + this.ruleForm.cdhj + this.ruleForm.czcjgkyd + this.ruleForm.jtys + this.ruleForm.syjsl + this.ruleForm.qttdhj;

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
            let res = await landUseLeaveTwoDetail({id:this.id});
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
            let res = await landUseLeaveTwoUpdate(updateObj);
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
            let res = await landUseLeaveTwoInsert(addObj);
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