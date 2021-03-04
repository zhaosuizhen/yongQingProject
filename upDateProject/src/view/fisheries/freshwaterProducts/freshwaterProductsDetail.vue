<template>
    <!----渔业局---淡水养殖产品产量添加编辑详情---->
    <div id="freshwaterProductsDetail" class="pageContent"  v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                            <span>基本信息</span>
                            <span class="titleRight">产量总合计：<span class="valueStyle">{{ruleForm.totalWeight}}</span> 吨</span>
                        </div> <!---->
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
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
                        <el-collapse  v-model="activeNames" @change="handleChange">
                            <el-collapse-item name="1-1">
                                <template slot="title">
                                    <div class="titleContent"><i class="collapseDownIcon" :class="[nameFlag.indexOf('1-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span>鱼类淡水养殖产量</span>
                                        <span class="titleRight">鱼类产量总合计：<span class="valueStyle">{{ruleForm.yldsyzcl}}</span> 吨</span>
                                    </div> 
                                </template>
                                <div class="formContent">
                                <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                    <el-form-item label="青鱼：" class="formItem">
                                        <el-input v-model="ruleForm.qy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入青鱼数量"></el-input> (吨)
                                    </el-form-item>
                                    <el-form-item label="鳙鱼：" class="formItem">
                                        <el-input v-model="ruleForm.yy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入鳙鱼数量"></el-input> (吨)
                                    </el-form-item>
                                    <div style="clear:both;"></div>
                                    <el-form-item label="草鱼：" class="formItem">
                                        <el-input v-model="ruleForm.cy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入草鱼数量"></el-input> (吨)
                                    </el-form-item>
                                    <el-form-item label="鲤鱼：" class="formItem">
                                        <el-input v-model="ruleForm.liy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入鲤鱼数量"></el-input> (吨)
                                    </el-form-item>
                                    <div style="clear:both;"></div>
                                    <el-form-item label="鲢鱼：" class="formItem">
                                        <el-input v-model="ruleForm.ly" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入鲢鱼数量"></el-input> (吨)
                                    </el-form-item>
                                    <el-form-item label="泥鳅：" class="formItem">
                                        <el-input v-model="ruleForm.nq" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入泥鳅数量"></el-input> (吨)
                                    </el-form-item>
                                    <div style="clear:both;"></div>
                                    <el-form-item label="鲶鱼：" class="formItem">
                                        <el-input v-model="ruleForm.ny" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入鲶鱼数量"></el-input> (吨)
                                    </el-form-item>  
                                    <el-form-item label="鮰鱼：" class="formItem">
                                        <el-input v-model="ruleForm.hy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入鮰鱼数量"></el-input> (吨)
                                    </el-form-item> 
                                    <div style="clear:both;"></div>
                                    <el-form-item label="斑点叉尾鮰：" class="formItem">
                                        <el-input v-model="ruleForm.bdcwh" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入斑点叉尾鮰数量"></el-input> (吨)
                                    </el-form-item>  
                                    <el-form-item label="黄颡鱼：" class="formItem">
                                        <el-input v-model="ruleForm.hsy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入黄颡鱼数量"></el-input> (吨)
                                    </el-form-item>    
                                    <div style="clear:both;"></div>
                                    <el-form-item label="鲑鱼：" class="formItem">
                                        <el-input v-model="ruleForm.gy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入鲑鱼数量"></el-input> (吨)
                                    </el-form-item>
                                    <el-form-item label="鳟鱼：" class="formItem">
                                        <el-input v-model="ruleForm.zy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入鳟鱼数量"></el-input> (吨)
                                    </el-form-item> 
                                    <div style="clear:both;"></div>
                                    <el-form-item label="河鲀：" class="formItem">
                                        <el-input v-model="ruleForm.ht" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入河鲀数量"></el-input> (吨)
                                    </el-form-item> 
                                    <el-form-item label="短盖巨脂鲤：" class="formItem">
                                        <el-input v-model="ruleForm.dujzl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入短盖巨脂鲤数量"></el-input> (吨)
                                    </el-form-item> 
                                    <div style="clear:both;"></div>
                                    <el-form-item label="长吻鮠：" class="formItem">
                                        <el-input v-model="ruleForm.cww" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入长吻鮠数量"></el-input> (吨)
                                    </el-form-item>   
                                    <el-form-item label="黄鳝：" class="formItem">
                                        <el-input v-model="ruleForm.hs" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入黄鳝数量"></el-input> (吨)
                                    </el-form-item> 
                                    <div style="clear:both;"></div>
                                    <el-form-item label="乌鳢：" class="formItem">
                                        <el-input v-model="ruleForm.wl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入乌鳢数量"></el-input> (吨)
                                    </el-form-item>    
                                    <el-form-item label="鳜鱼：" class="formItem">
                                        <el-input v-model="ruleForm.jy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入鳜鱼数量"></el-input> (吨)
                                    </el-form-item> 
                                    <div style="clear:both;"></div>
                                    <el-form-item label="罗非鱼：" class="formItem">
                                        <el-input v-model="ruleForm.lfy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入罗非鱼数量"></el-input> (吨)
                                    </el-form-item>   
                                    <el-form-item label="池沼公鱼：" class="formItem">
                                        <el-input v-model="ruleForm.czgy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入池沼公鱼数量"></el-input> (吨)
                                    </el-form-item>   
                                    <div style="clear:both;"></div>   
                                    <el-form-item label="鲟鱼：" class="formItem">
                                        <el-input v-model="ruleForm.xy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入鲟鱼数量"></el-input> (吨)
                                    </el-form-item>
                                    <el-form-item label="银鱼：" class="formItem">
                                        <el-input v-model="ruleForm.yiny" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入银鱼数量"></el-input> (吨)
                                    </el-form-item> 
                                    <div style="clear:both;"></div>
                                    <el-form-item label="鳗鲡：" class="formItem">
                                        <el-input v-model="ruleForm.my" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入鳗鲡数量"></el-input> (吨)
                                    </el-form-item>   
                                    <el-form-item label="鲈鱼：" class="formItem">
                                        <el-input v-model="ruleForm.luy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入鲈鱼数量"></el-input> (吨)
                                    </el-form-item> 
                                    <div style="clear:both;"></div>
                                    <el-form-item label="翘嘴红鮊：" class="formItem">
                                        <el-input v-model="ruleForm.qzhb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入翘嘴红鮊数量"></el-input> (吨)
                                    </el-form-item>            
                                </el-form>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="1-2">
                                <template slot="title">
                                    <div class="titleContent"><i class="collapseDownIcon" :class="[nameFlag.indexOf('1-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span>虾类淡水养殖产量</span>
                                        <span class="titleRight">虾类产量总合计：<span class="valueStyle">{{ruleForm.xldsyzcl}}</span> 吨</span>
                                    </div> 
                                </template>
                                <div class="formContent">
                                <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                    <el-form-item label="虾：" class="formItem">
                                        <el-input v-model="ruleForm.shrimp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入虾数量"></el-input> (吨)
                                    </el-form-item>   
                                    <el-form-item label="罗氏沼虾：" class="formItem">
                                        <el-input v-model="ruleForm.lszshrimp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入罗氏沼虾数量"></el-input> (吨)
                                    </el-form-item> 
                                    <div style="clear:both;"></div>
                                    <el-form-item label="青虾：" class="formItem">
                                        <el-input v-model="ruleForm.qshrimp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入青虾数量"></el-input> (吨)
                                    </el-form-item> 
                                    <el-form-item label="克氏原螯虾：" class="formItem">
                                        <el-input v-model="ruleForm.ksyashrimp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入克氏原螯虾数量"></el-input> (吨)
                                    </el-form-item> 
                                    <div style="clear:both;"></div>
                                    <el-form-item label="蟹(河蟹)：" class="formItem">
                                        <el-input v-model="ruleForm.crab" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入蟹(河蟹)数量"></el-input> (吨)
                                    </el-form-item> 
                                    <el-form-item label="南美白对虾：" class="formItem">
                                        <el-input v-model="ruleForm.nmbdshrimp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入南美白对虾数量"></el-input> (吨)
                                    </el-form-item> 
                                    <div style="clear:both;"></div>
                                    <el-form-item label="其它虾类：" class="formItem">
                                        <el-input v-model="ruleForm.qtshrimp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入其它虾类数量"></el-input> (吨)
                                    </el-form-item> 
                                </el-form>  
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="1-3">
                                <template slot="title">
                                    <div class="titleContent"><i class="collapseDownIcon" :class="[nameFlag.indexOf('1-3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span>贝壳类淡水养殖产量</span>
                                        <span class="titleRight">贝壳类产量总合计：<span class="valueStyle">{{ruleForm.bkldayz}}</span> 吨</span>
                                    </div> 
                                </template>
                                <div class="formContent">
                                    <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                        <el-form-item label="河蚌：" class="formItem">
                                            <el-input v-model="ruleForm.mussel" :disabled="urlType" placeholder="请输入河蚌数量"></el-input> (吨)
                                        </el-form-item> 
                                        <el-form-item label="螺：" class="formItem">
                                            <el-input v-model="ruleForm.snail" :disabled="urlType" placeholder="请输入螺数量"></el-input> (吨)
                                        </el-form-item> 
                                        <div style="clear:both;"></div>
                                        <el-form-item label="蚬：" class="formItem">
                                            <el-input v-model="ruleForm.xian" :disabled="urlType" placeholder="请输入蚬数量"></el-input> (吨)
                                        </el-form-item> 
                                        <el-form-item label="其它贝类：" class="formItem">
                                            <el-input v-model="ruleForm.qybl" :disabled="urlType" placeholder="请输入其它贝类数量"></el-input> (吨)
                                        </el-form-item>   
                                        <div style="clear:both;"></div>
                                    </el-form>  
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="1-4">
                                <template slot="title">
                                    <div class="titleContent"><i class="collapseDownIcon" :class="[nameFlag.indexOf('1-4') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span>藻类淡水养殖产量</span>
                                        <span class="titleRight">藻类产量总合计：<span class="valueStyle">{{ruleForm.zldsyzcl}}</span> 吨</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                    <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                        <el-form-item label="螺旋藻：" class="formItem">
                                            <el-input v-model="ruleForm.lxz" :disabled="urlType" placeholder="请输入螺旋藻数量"></el-input> (吨)
                                        </el-form-item> 
                                    </el-form>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="1-5">
                                <template slot="title">
                                    <div class="titleContent"><i class="collapseDownIcon" :class="[nameFlag.indexOf('1-5') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span>其他类淡水养殖产量</span>
                                        <span class="titleRight">其他类产量总合计：<span class="valueStyle">{{ruleForm.qtldsyzcl}}</span> 吨</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                    <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                        <el-form-item label="龟：" class="formItem">
                                            <el-input v-model="ruleForm.turtle" :disabled="urlType" placeholder="请输入龟数量"></el-input> (吨)
                                        </el-form-item>
                                        <el-form-item label="鳖：" class="formItem">
                                            <el-input v-model="ruleForm.bieTurtle" :disabled="urlType" placeholder="请输入鳖数量"></el-input> (吨)
                                        </el-form-item>
                                        <div style="clear:both;"></div>
                                        <el-form-item label="蛙：" class="formItem">
                                            <el-input v-model="ruleForm.frog" :disabled="urlType" placeholder="请输入蛙数量"></el-input> (吨)
                                        </el-form-item>
                                        <el-form-item label="珍珠：" class="formItem">
                                            <el-input v-model="ruleForm.pearl" :disabled="urlType" placeholder="请输入珍珠数量"></el-input> (吨)
                                        </el-form-item>
                                        <div style="clear:both;"></div>
                                        <el-form-item label="其他：" class="formItem">
                                            <el-input v-model="ruleForm.qt" :disabled="urlType" placeholder="请输入其他数量"></el-input> (吨)
                                        </el-form-item>
                                        <el-form-item label="观赏鱼：" class="formItem">
                                            <el-input v-model="ruleForm.gsy" :disabled="urlType" placeholder="请输入观赏鱼数量"></el-input> (吨)
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
import { freshwaterProductsDetail, freshwaterProductsUpdate,freshwaterProductsInsert } from '@/utils/api/fisheries/freshwaterProducts'; //渔业局--淡水养殖产品产量
import {townshipOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
export default {
    name:'freshwaterProductsDetail',
    data() {
        return {
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() > new Date()-8.64e7;
                }
            },
            activeNames: ['1','1-1','1-2','1-3','1-4','1-5'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            id:'', //数据的id
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            townshipOption:townshipOption, //乡镇
            formDate:[], //自定义表单数据，传值给子组件
            ruleForm: {
                township:'', //乡镇
                dataYear:'',//年份
                bkldayz:0,//贝壳类淡水养殖产量
                zldsyzcl:0,//藻类淡水养殖产量
                qtldsyzcl:0,//其他类淡水养殖产量
                xldsyzcl:0,//虾类淡水养殖产量
                yldsyzcl:0,//鱼类淡水养殖产量
                totalWeight:0,//总产量
                qy:0,  //青鱼
                yy:0, //鳙鱼
                cy:0, //草鱼
                liy:0, //鲤鱼
                ly:0, //鲢鱼
                nq:0, //泥鳅
                ny:0, //鲶鱼
                hy:0, //鮰鱼
                bdcwh:0, //斑点叉尾鮰
                hsy:0,//黄颡鱼
                gy:0, //鲑鱼
                zy:0, //鳟鱼
                ht:0,//河鲀
                dujzl:0,//短盖巨脂鲤
                cww:0, //长吻鮠
                hs:0, //黄鳝
                wl:0, //乌鳢
                jy:0, //鳜鱼
                lfy:0, //罗非鱼
                czgy:0,//池沼公鱼
                xy:0, //鲟鱼
                yiny:0,//银鱼
                my:0, //鳗鲡
                luy:0,//鲈鱼
                qzhb:0,//翘嘴红鮊
                shrimp:0,//虾
                lszshrimp:0,//罗氏沼虾
                qshrimp:0, //青虾
                ksyashrimp:0, //克氏原螯虾
                crab:0,//蟹(河蟹)
                nmbdshrimp:0,//南美白对虾
                qtshrimp:0,//其它虾类
                mussel:0,//河蚌
                snail:0,//螺
                xian:0,//蚬
                qybl:0,//其它贝类
                lxz:0,//螺旋藻
                turtle:0,//龟
                bieTurtle:0,//鳖
                frog:0,//蛙
                pearl:0,//珍珠
                qt:0,//其他
                gsy:0,//观赏鱼
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
                let xldsyzcl=0;//虾类淡水养殖产量
                let shrimp = isNaN(parseFloat(newVal['shrimp']))?0:parseFloat(newVal['shrimp']) ;
                let lszshrimp = isNaN(parseFloat(newVal['lszshrimp']))?0:parseFloat(newVal['lszshrimp']);
                let qshrimp = isNaN(parseFloat(newVal['qshrimp']))?0:parseFloat(newVal['qshrimp']);
                let ksyashrimp = isNaN(parseFloat(newVal['ksyashrimp']))?0:parseFloat(newVal['ksyashrimp']) ;
                let crab = isNaN(parseFloat(newVal['crab']))?0:parseFloat(newVal['crab']);
                let nmbdshrimp = isNaN(parseFloat(newVal['nmbdshrimp']))?0:parseFloat(newVal['nmbdshrimp']);
                let qtshrimp = isNaN(parseFloat(newVal['qtshrimp']))?0:parseFloat(newVal['qtshrimp']);
                


                let yldsyzcl=0;//鱼类淡水养殖产量
                let qy = isNaN(parseFloat(newVal['qy']))?0:parseFloat(newVal['qy']) ;
                let yy = isNaN(parseFloat(newVal['yy']))?0:parseFloat(newVal['yy']);
                let cy = isNaN(parseFloat(newVal['cy']))?0:parseFloat(newVal['cy']);
                let liy = isNaN(parseFloat(newVal['liy']))?0:parseFloat(newVal['liy']) ;
                let ly = isNaN(parseFloat(newVal['ly']))?0:parseFloat(newVal['ly']);
                let nq = isNaN(parseFloat(newVal['nq']))?0:parseFloat(newVal['nq']);
                let ny = isNaN(parseFloat(newVal['ny']))?0:parseFloat(newVal['ny']);
                let hy = isNaN(parseFloat(newVal['hy']))?0:parseFloat(newVal['hy']) ;
                let bdcwh = isNaN(parseFloat(newVal['bdcwh']))?0:parseFloat(newVal['bdcwh']);
                let hsy = isNaN(parseFloat(newVal['hsy']))?0:parseFloat(newVal['hsy']);
                let gy = isNaN(parseFloat(newVal['gy']))?0:parseFloat(newVal['gy']) ;
                let zy = isNaN(parseFloat(newVal['zy']))?0:parseFloat(newVal['zy']);
                let ht = isNaN(parseFloat(newVal['ht']))?0:parseFloat(newVal['ht']);
                let dujzl = isNaN(parseFloat(newVal['dujzl']))?0:parseFloat(newVal['dujzl']);
                let cww = isNaN(parseFloat(newVal['cww']))?0:parseFloat(newVal['cww'])
                let hs = isNaN(parseFloat(newVal['hs']))?0:parseFloat(newVal['hs']);
                let wl = isNaN(parseFloat(newVal['wl']))?0:parseFloat(newVal['wl']);
                let jy = isNaN(parseFloat(newVal['jy']))?0:parseFloat(newVal['jy']) ;
                let lfy = isNaN(parseFloat(newVal['lfy']))?0:parseFloat(newVal['lfy']);
                let czgy = isNaN(parseFloat(newVal['czgy']))?0:parseFloat(newVal['czgy']);
                let xy = isNaN(parseFloat(newVal['xy']))?0:parseFloat(newVal['xy']);
                let yiny = isNaN(parseFloat(newVal['yiny']))?0:parseFloat(newVal['yiny'])
                let my = isNaN(parseFloat(newVal['my']))?0:parseFloat(newVal['my']) ;
                let luy = isNaN(parseFloat(newVal['luy']))?0:parseFloat(newVal['luy']);
                let qzhb = isNaN(parseFloat(newVal['qzhb']))?0:parseFloat(newVal['qzhb']);

                let bkldayz = 0;//贝壳类淡水养殖产量        
                let mussel = isNaN(parseFloat(newVal['mussel']))?0:parseFloat(newVal['mussel']) ;
                let snail = isNaN(parseFloat(newVal['snail']))?0:parseFloat(newVal['snail']);
                let xian =isNaN(parseFloat(newVal['xian']))?0:parseFloat(newVal['xian']);
                let qybl = isNaN(parseFloat(newVal['qybl']))?0:parseFloat(newVal['qybl']);

                let zldsyzcl = 0; //藻类淡水养殖产量
                let lxz = isNaN(parseFloat(newVal['lxz']))?0:parseFloat(newVal['lxz']);

                let qtldsyzcl = 0; //其他类淡水养殖产量          
                let turtle = isNaN(parseFloat(newVal['turtle']))?0:parseFloat(newVal['turtle']) ;
                let bieTurtle = isNaN(parseFloat(newVal['bieTurtle']))?0:parseFloat(newVal['bieTurtle']);
                let frog = isNaN(parseFloat(newVal['frog']))?0:parseFloat(newVal['frog']);
                let pearl = isNaN(parseFloat(newVal['pearl']))?0:parseFloat(newVal['pearl']) ;
                let qt = isNaN(parseFloat(newVal['qt']))?0:parseFloat(newVal['qt']);
                let gsy = isNaN(parseFloat(newVal['gsy']))?0:parseFloat(newVal['gsy']);
                
                                              
                bkldayz =mussel+snail+xian+qybl ;  //贝壳类淡水养殖产量 
                zldsyzcl = lxz;  //藻类淡水养殖产量
                qtldsyzcl = turtle + bieTurtle + frog + pearl + qt + gsy ; //其他类淡水养殖产量 
                xldsyzcl = shrimp + lszshrimp + qshrimp + ksyashrimp  + crab +  nmbdshrimp +qtshrimp; //虾类淡水养殖产量
                yldsyzcl = qy + yy + cy + liy + ly+nq + ny + hy+bdcwh +hsy + gy + zy+ht+dujzl+cww+hs+wl+jy+lfy+czgy+xy+yiny+my+luy+qzhb; //鱼类淡水养殖产量
                this.ruleForm.bkldayz = bkldayz;  //贝壳类淡水养殖产量 
                this.ruleForm.zldsyzcl = zldsyzcl; //藻类淡水养殖产量
                this.ruleForm.qtldsyzcl = qtldsyzcl; //其他类淡水养殖产量 
                this.ruleForm.xldsyzcl = xldsyzcl; //虾类淡水养殖产量 
                this.ruleForm.yldsyzcl = yldsyzcl; //鱼类淡水养殖产量 
                this.ruleForm.totalWeight =  bkldayz+ zldsyzcl+qtldsyzcl+xldsyzcl+yldsyzcl;

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
            let res = await freshwaterProductsDetail({id:this.id});
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
            let res = await freshwaterProductsUpdate(updateObj);
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
            let res = await freshwaterProductsInsert(addObj);
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