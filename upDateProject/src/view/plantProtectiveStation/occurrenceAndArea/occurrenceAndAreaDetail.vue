<template>
    <!----植保站---虫鼠害发生和防治面积添加编辑详情---->
    <div id="occurrenceAndAreaDetail" class="pageContent"  v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>基本信息</div> <!---->
                    </template>
                    <div class="formContent">
                        <el-form :model="dataType1" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                           <el-form-item label="年份：" prop="dataYear" class="formItem formSelect">
                                <el-date-picker
                                    v-model="dataType1.dataYear"
                                    type="year"
                                    value-format="yyyy"
                                    format="yyyy"
                                    :disabled="urlType"
                                    :picker-options="pickerBeginDateAfter"
                                    placeholder="选择年">
                                    </el-date-picker>
                            </el-form-item>  
                            <el-form-item label="乡镇：" prop="township" class="formItem formSelect">
                                <el-select v-model="dataType1.township" filterable clearable :disabled="urlType" placeholder="请选择">
                                    <el-option
                                    v-for="item in townshipOption"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="2">
                    <template slot="title">
                        <div><i class="collapseDownIcon" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>农作物受害防治信息</div>
                    </template>
                    <div class="formContent">
                        <el-collapse  v-model="activeNames" @change="handleChange">
                            <el-collapse-item name="2-1">
                                <template slot="title">
                                    <div class="titleList">
                                        <i class="collapseDownIcon" :class="[nameFlag.indexOf('2-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span class="width15">飞蝗信息统计</span>
                                        <span>飞蝗发生面积 <span class="valueStyle">{{total.fhxxtjTotal1}}</span> (万亩次)</span>
                                        <span>飞蝗防治面积 <span class="valueStyle">{{total.fhxxtjTotal2}}</span> (万亩次)</span>
                                        <span>飞蝗挽回损失 <span class="valueStyle">{{total.fhxxtjTotal3}}</span> (吨)</span>
                                        <span>飞蝗实际损失 <span class="valueStyle">{{total.fhxxtjTotal4}}</span> (吨)</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                    <table style="width:100%" border="0" cellspacing="1"  align='center' class="table">
                                        <tr>
                                            <th>飞蝗种类</th>
                                            <th v-for="(item,index) in thObj" :key="index">{{item.label}}</th>
                                        </tr>
                                        <tr>
                                            <td>东亚飞蝗</td>
                                            <td><el-input v-model="dataType1.dyfh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType2.dyfh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType3.dyfh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType4.dyfh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                        </tr>
                                        <tr>
                                            <td>夏蝗</td>
                                            <td><el-input v-model="dataType1.xh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType2.xh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType3.xh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType4.xh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                        </tr>
                                        <tr>
                                            <td>秋蝗</td>
                                            <td><el-input v-model="dataType1.qh" :disabled="urlType"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType2.qh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType3.qh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType4.qh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                        </tr>
                                        <tr>
                                            <td>亚洲飞蝗</td>
                                            <td><el-input v-model="dataType1.yzfh" :disabled="urlType"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType2.yzfh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType3.yzfh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType4.yzfh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                        </tr>
                                        <tr>
                                            <td>西藏飞蝗</td>
                                            <td><el-input v-model="dataType1.xzfh" :disabled="urlType"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType2.xzfh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType3.xzfh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType4.xzfh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                        </tr>
                                         <tr>
                                            <td>土蝗（农牧交错）</td>
                                            <td><el-input v-model="dataType1.th" :disabled="urlType"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType2.th" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType3.th" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType4.th" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                        </tr>
                                        <tr>
                                            <td>草地螟（农牧交错）</td>
                                            <td><el-input v-model="dataType1.cdm" :disabled="urlType"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType2.cdm" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType3.cdm" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType4.cdm" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                        </tr>
                                    </table>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="2-2">
                                <template slot="title">
                                    <div class="titleList"><i class="collapseDownIcon" :class="[nameFlag.indexOf('2-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span class="width15">农田鼠害统计</span>
                                        <span>农田鼠害发生面积 <span class="valueStyle">{{total.ntshTotal1}}</span> (万亩次)</span>
                                        <span>农田鼠害防治面积 <span class="valueStyle">{{total.ntshTotal2}}</span> (万亩次)</span>
                                        <span>农田鼠害挽回损失 <span class="valueStyle">{{total.ntshTotal3}}</span> (吨)</span>
                                        <span>农田鼠害实际损失 <span class="valueStyle">{{total.ntshTotal4}}</span> (吨)</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                    <table style="width:100%" border="0" cellspacing="1"  align='center' class="table">
                                        <tr>
                                            <th>鼠害种类</th>
                                            <th v-for="(item,index) in thObj" :key="index">{{item.label}}</th>
                                        </tr>
                                        <tr>
                                            <td> 农田鼠害</td>
                                            <td><el-input v-model="dataType1.ntsh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType2.ntsh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType3.ntsh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType4.ntsh" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                        </tr>
                                    </table>
                                </div>

                            </el-collapse-item>
                            <el-collapse-item name="2-3">
                                <template slot="title">
                                    <div class="titleList"><i class="collapseDownIcon" :class="[nameFlag.indexOf('2-3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span class="width15">农田草害统计</span>
                                        <span>农田草害发生面积 <span class="valueStyle">{{total.ntchtjTotal1}}</span> (万亩次)</span> 
                                        <span>农田草害防治面积 <span class="valueStyle">{{total.ntchtjTotal2}}</span> (万亩次)</span>
                                        <span>农田草害挽回损失 <span class="valueStyle">{{total.ntchtjTotal3}}</span> (吨)</span>
                                        <span>农田草害实际损失 <span class="valueStyle">{{total.ntchtjTotal4}}</span> (吨)</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                    <table style="width:100%" border="0" cellspacing="1"  align='center' class="table">
                                        <tr>
                                            <th>农田草害统计</th>
                                            <th v-for="(item,index) in thObj" :key="index">{{item.label}}</th>
                                        </tr>
                                        <tr>
                                            <td>水稻田杂草</td>
                                            <td><el-input v-model="dataType1.sdtzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType2.sdtzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType3.sdtzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType4.sdtzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                        </tr>
                                        <tr>
                                            <td>麦田杂草</td>
                                            <td><el-input v-model="dataType1.mtzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType2.mtzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType3.mtzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType4.mtzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                        </tr>
                                        <tr>
                                            <td>玉米田杂草</td>
                                            <td><el-input v-model="dataType1.ymtzc" :disabled="urlType"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType2.ymtzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType3.ymtzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType4.ymtzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                        </tr>
                                        <tr>
                                            <td>大豆田杂草</td>
                                            <td><el-input v-model="dataType1.ddtzc" :disabled="urlType"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType2.ddtzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType3.ddtzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType4.ddtzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                        </tr>
                                        <tr>
                                            <td>马铃薯田杂草</td>
                                            <td><el-input v-model="dataType1.mlstzc" :disabled="urlType"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType2.mlstzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType3.mlstzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType4.mlstzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                        </tr>
                                         <tr>
                                            <td>其他粮作田杂草</td>
                                            <td><el-input v-model="dataType1.qtlztzc" :disabled="urlType"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType2.qtlztzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType3.qtlztzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType4.qtlztzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                        </tr>
                                        <tr>
                                            <td>棉花田杂草</td>
                                            <td><el-input v-model="dataType1.mhtzc" :disabled="urlType"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType2.mhtzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType3.mhtzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType4.mhtzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                        </tr>
                                        <tr>
                                            <td>油菜田杂草</td>
                                            <td><el-input v-model="dataType1.yctzc" :disabled="urlType"  onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType2.yctzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType3.yctzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType4.yctzc" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                        </tr>
                                    </table>
                                </div>
                            </el-collapse-item>
                             <el-collapse-item name="2-4">
                                <template slot="title">
                                    <div  class="titleList"><i class="collapseDownIcon" :class="[nameFlag.indexOf('2-4') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                        <span class="width15">农田螺害合计</span>
                                        <span>农田螺害发生面积 <span class="valueStyle">{{total.ntlhhjTotal1}}</span> (万亩次)</span>
                                        <span>农田螺害防治面积 <span class="valueStyle">{{total.ntlhhjTotal2}}</span> (万亩次)</span>
                                        <span>农田螺害挽回损失 <span class="valueStyle">{{total.ntlhhjTotal3}}</span> (吨)</span>
                                        <span>农田螺害实际损失 <span class="valueStyle">{{total.ntlhhjTotal4}}</span> (吨)</span>
                                    </div>
                                </template>
                                <div class="formContent">
                                    <table style="width:100%" border="0" cellspacing="1"  align='center' class="table">
                                        <tr>
                                            <th>螺害种类</th>
                                            <th v-for="(item,index) in thObj" :key="index">{{item.label}}</th>
                                        </tr>
                                        <tr>
                                            <td> 福寿螺</td>
                                            <td><el-input v-model="dataType1.fsl" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType2.fsl" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType3.fsl" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType4.fsl" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                        </tr>
                                        <tr>
                                            <td> 蜗牛</td>
                                            <td><el-input v-model="dataType1.wn" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType2.wn" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType3.wn" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                            <td><el-input v-model="dataType4.wn" :disabled="urlType" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"></el-input></td>
                                        </tr>
                                    </table>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                </el-collapse-item>
            </el-collapse>
            <!--自定义表单组件-->
            <Custom-form v-if="formDate.length>0" :formDate.sync = formDate :type='urlType' @customDatavalueChange='customDatavalueChange'></Custom-form>
            <el-row type='flex' justify="center" class="footrBtnGroup" v-if="!urlType">
            <el-button  type="primary" class="submitBtnMargin" @click="submit">提交</el-button>
            <el-button @click="cancel">取消</el-button>
        </el-row>
        </section>
        
    </div>
</template>
<script>
import { occurrenceDetail, occurrenceUpdate,occurrenceInsert, occurrenceIsAddByYear } from '@/utils/api/plantProtectiveStation/occurrenceAndArea'; //植保站--虫鼠害发生和防治面积
import {townshipOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
// import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
export default {
    name:'qualityOrganicProductsDetail',
    data() {
        return {
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() > new Date()-8.64e7;
                }
            },
            activeNames: ['1','2','2-1','2-2','2-3','2-4'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            id:'', //数据的id
            year:'', //列表传过来的年份
            loading:false, //加载框
            townshipOption:townshipOption, //乡镇
            formDate:[], //自定义表单数据，传值给子组件
            ruleForm: {
                dataType:[],//数据类型
                dataYear:'',//年份
                township:'',//乡镇
            },
            //页面总计显示
            total:{
                fhxxtjTotal1:0, //飞蝗信息统计总计 发生面积
                fhxxtjTotal2:0, //飞蝗信息统计总计 防治面积
                fhxxtjTotal3:0, //飞蝗信息统计总计 挽回损失
                fhxxtjTotal4:0, //飞蝗信息统计总计 实际损失
                ntshTotal1:0, //农田鼠害 总计  发生面积
                ntshTotal2:0, //农田鼠害 总计  防治面积
                ntshTotal3:0, //农田鼠害 总计  挽回损失
                ntshTotal4:0, //农田鼠害 总计  实际损失
                ntchtjTotal1:0, //农田草害统计 总计  发生面积
                ntchtjTotal2:0, //农田草害统计 总计  防治面积
                ntchtjTotal3:0, //农田草害统计 总计  挽回损失
                ntchtjTotal4:0, //农田草害统计 总计  实际损失
                ntlhhjTotal1:0, //农田螺害合计 总计  发生面积
                ntlhhjTotal2:0, //农田螺害合计 总计  防治面积
                ntlhhjTotal3:0, //农田螺害合计 总计  挽回损失
                ntlhhjTotal4:0, //农田螺害合计 总计  实际损失

            },
            dataType1:{
                cdm:'',//草地螟（农牧交错）
                chzl:'',//草害种类
                dataType:1,//数据类型
                ddtzc:'',//大豆田杂草
                dyfh:'',//东亚飞蝗
                fhxxtj:'',//飞蝗信息统计
                fhzl:'',//飞蝗种类
                fsl:'',//福寿螺
                mhtzc:'',//棉花田杂草
                mlstzc:'',//马铃薯田杂草
                mtzc:'',//麦田杂草
                ntchtj:'',//农田草害统计
                ntlhhj:'',//农田螺害合计
                ntsh:'',//农田鼠害
                ntshtj:'',//农田鼠害统计
                qh:'',//秋蝗
                qtlztzc:'',//其他粮作田杂草
                sdtzc:'',//水稻田杂草
                shzl:'',//鼠害种类
                th:'',//土蝗（农牧交错）
                wn:'',//蜗牛
                xh:'',//夏蝗
                xzfh:'',//西藏飞蝗
                yctzc:'',//油菜田杂草
                ymtzc:'',//玉米田杂草
                yzfh:'',//亚洲飞蝗
                dataYear:'',//年份
                township:'',//乡镇
                id:'',
            },
             dataType2:{
                cdm:'',//草地螟（农牧交错）
                chzl:'',//草害种类
                dataType:2,//数据类型
                ddtzc:'',//大豆田杂草
                dyfh:'',//东亚飞蝗
                fhxxtj:'',//飞蝗信息统计
                fhzl:'',//飞蝗种类
                fsl:'',//福寿螺
                mhtzc:'',//棉花田杂草
                mlstzc:'',//马铃薯田杂草
                mtzc:'',//麦田杂草
                ntchtj:'',//农田草害统计
                ntlhhj:'',//农田螺害合计
                ntsh:'',//农田鼠害
                ntshtj:'',//农田鼠害统计
                qh:'',//秋蝗
                qtlztzc:'',//其他粮作田杂草
                sdtzc:'',//水稻田杂草
                shzl:'',//鼠害种类
                th:'',//土蝗（农牧交错）
                wn:'',//蜗牛
                xh:'',//夏蝗
                xzfh:'',//西藏飞蝗
                yctzc:'',//油菜田杂草
                ymtzc:'',//玉米田杂草
                yzfh:'',//亚洲飞蝗
                dataYear:'',//年份
                township:'',//乡镇
                id:'',
            },
             dataType3:{
                cdm:'',//草地螟（农牧交错）
                chzl:'',//草害种类
                dataType:3,//数据类型
                ddtzc:'',//大豆田杂草
                dyfh:'',//东亚飞蝗
                fhxxtj:'',//飞蝗信息统计
                fhzl:'',//飞蝗种类
                fsl:'',//福寿螺
                mhtzc:'',//棉花田杂草
                mlstzc:'',//马铃薯田杂草
                mtzc:'',//麦田杂草
                ntchtj:'',//农田草害统计
                ntlhhj:'',//农田螺害合计
                ntsh:'',//农田鼠害
                ntshtj:'',//农田鼠害统计
                qh:'',//秋蝗
                qtlztzc:'',//其他粮作田杂草
                sdtzc:'',//水稻田杂草
                shzl:'',//鼠害种类
                th:'',//土蝗（农牧交错）
                wn:'',//蜗牛
                xh:'',//夏蝗
                xzfh:'',//西藏飞蝗
                yctzc:'',//油菜田杂草
                ymtzc:'',//玉米田杂草
                yzfh:'',//亚洲飞蝗
                dataYear:'',//年份
                township:'',//乡镇
                id:'',
            },
             dataType4:{
                cdm:'',//草地螟（农牧交错）
                chzl:'',//草害种类
                dataType:4,//数据类型
                ddtzc:'',//大豆田杂草
                dyfh:'',//东亚飞蝗
                fhxxtj:'',//飞蝗信息统计
                fhzl:'',//飞蝗种类
                fsl:'',//福寿螺
                mhtzc:'',//棉花田杂草
                mlstzc:'',//马铃薯田杂草
                mtzc:'',//麦田杂草
                ntchtj:'',//农田草害统计
                ntlhhj:'',//农田螺害合计
                ntsh:'',//农田鼠害
                ntshtj:'',//农田鼠害统计
                qh:'',//秋蝗
                qtlztzc:'',//其他粮作田杂草
                sdtzc:'',//水稻田杂草
                shzl:'',//鼠害种类
                th:'',//土蝗（农牧交错）
                wn:'',//蜗牛
                xh:'',//夏蝗
                xzfh:'',//西藏飞蝗
                yctzc:'',//油菜田杂草
                ymtzc:'',//玉米田杂草
                yzfh:'',//亚洲飞蝗
                dataYear:'',//年份
                township:'',//乡镇
                id:'',
            },
            rules: {
                dataYear: [
                    {required: true, message: '请选择年份',trigger: 'blur', }
                ],
                township: [
                    { required: true, message: '请选择乡镇',trigger: 'blur' }
                ]
            },
            thObj: [
                {label: '发生面积(万亩次)'}, 
                {label: '防治面积(万亩次)'}, 
                {label: '挽回损失(吨)'},
                {label: '实际损失(吨)'}
            ],
            
        }
    },
    components:{
        'Custom-form':CustomForm
    },
    computed: {
        dataTypeObj1() {
            return JSON.parse(JSON.stringify(this.dataType1))
        },
        dataTypeObj2() {
            return JSON.parse(JSON.stringify(this.dataType2))
        },
        dataTypeObj3() {
            return JSON.parse(JSON.stringify(this.dataType3))
        },
        dataTypeObj4() {
            return JSON.parse(JSON.stringify(this.dataType4))
        }
    },
    watch:{
        //监听数量变化，进行加减
        dataTypeObj1: {
            handler(newVal) {
                //飞蝗
                let dyfh = isNaN(parseFloat(newVal['dyfh']))?0:parseFloat(newVal['dyfh']); //东亚飞蝗
                let xh = isNaN(parseFloat(newVal['xh']))?0:parseFloat(newVal['xh']); //夏蝗
                let qh = isNaN(parseFloat(newVal['qh']))?0:parseFloat(newVal['qh']) ; //秋蝗
                let yzfh = isNaN(parseFloat(newVal['yzfh']))?0:parseFloat(newVal['yzfh']); ////亚洲飞蝗
                let xzfh = isNaN(parseFloat(newVal['xzfh']))?0:parseFloat(newVal['xzfh']);  //西藏飞蝗
                let th = isNaN(parseFloat(newVal['th']))?0:parseFloat(newVal['th']);  //土蝗（农牧交错）
                let cdm = isNaN(parseFloat(newVal['cdm']))?0:parseFloat(newVal['cdm']) ; //草地螟（农牧交错）
                this.total.fhxxtjTotal1 = dyfh + xh + qh + yzfh + xzfh + th + cdm;

                //鼠害
                let ntsh = isNaN(parseFloat(newVal['ntsh']))?0:parseFloat(newVal['ntsh']);//农田鼠害
                this.total.ntshTotal1 = ntsh;

                //农田草害统计
                let sdtzc = isNaN(parseFloat(newVal['sdtzc']))?0:parseFloat(newVal['sdtzc']);  //水稻田杂草
                let mtzc = isNaN(parseFloat(newVal['mtzc']))?0:parseFloat(newVal['mtzc']); //麦田杂草
                let yctzc = isNaN(parseFloat(newVal['yctzc']))?0:parseFloat(newVal['yctzc']);  //油菜田杂草
                let ymtzc = isNaN(parseFloat(newVal['ymtzc']))?0:parseFloat(newVal['ymtzc']); //玉米田杂草
                let ddtzc =isNaN(parseFloat(newVal['ddtzc']))?0:parseFloat(newVal['ddtzc']); //大豆田杂草
                let mlstzc = isNaN(parseFloat(newVal['mlstzc']))?0:parseFloat(newVal['mlstzc']); //马铃薯田杂草
                let mhtzc = isNaN(parseFloat(newVal['mhtzc']))?0:parseFloat(newVal['mhtzc']); //棉花田杂草
                let qtlztzc = isNaN(parseFloat(newVal['qtlztzc']))?0:parseFloat(newVal['qtlztzc']);//其他粮作田杂草
                this.total.ntchtjTotal1 = sdtzc + mtzc + yctzc + ymtzc + ddtzc + mlstzc + mhtzc + qtlztzc;

                //农田螺害合计
                let fsl = isNaN(parseFloat(newVal['fsl']))?0:parseFloat(newVal['fsl']); //福寿螺
                let wn = isNaN(parseFloat(newVal['wn']))?0:parseFloat(newVal['wn']);  //蜗牛
                this.total.ntlhhjTotal1 = fsl + wn 
            },
            deep: true // 监听这个对象中的每一个属性变化
        },
        dataTypeObj2: {
            handler(newVal) {
                //飞蝗
                let dyfh = isNaN(parseFloat(newVal['dyfh']))?0:parseFloat(newVal['dyfh']); //东亚飞蝗
                let xh = isNaN(parseFloat(newVal['xh']))?0:parseFloat(newVal['xh']); //夏蝗
                let qh = isNaN(parseFloat(newVal['qh']))?0:parseFloat(newVal['qh']) ; //秋蝗
                let yzfh = isNaN(parseFloat(newVal['yzfh']))?0:parseFloat(newVal['yzfh']); ////亚洲飞蝗
                let xzfh = isNaN(parseFloat(newVal['xzfh']))?0:parseFloat(newVal['xzfh']);  //西藏飞蝗
                let th = isNaN(parseFloat(newVal['th']))?0:parseFloat(newVal['th']);  //土蝗（农牧交错）
                let cdm = isNaN(parseFloat(newVal['cdm']))?0:parseFloat(newVal['cdm']) ; //草地螟（农牧交错）
                this.total.fhxxtjTotal2 = dyfh + xh + qh + yzfh + xzfh + th + cdm;

                //鼠害
                let ntsh = isNaN(parseFloat(newVal['ntsh']))?0:parseFloat(newVal['ntsh']);//农田鼠害
                this.total.ntshTotal2 = ntsh;

                //农田草害统计
                let sdtzc = isNaN(parseFloat(newVal['sdtzc']))?0:parseFloat(newVal['sdtzc']);  //水稻田杂草
                let mtzc = isNaN(parseFloat(newVal['mtzc']))?0:parseFloat(newVal['mtzc']); //麦田杂草
                let yctzc = isNaN(parseFloat(newVal['yctzc']))?0:parseFloat(newVal['yctzc']);  //油菜田杂草
                let ymtzc = isNaN(parseFloat(newVal['ymtzc']))?0:parseFloat(newVal['ymtzc']); //玉米田杂草
                let ddtzc =isNaN(parseFloat(newVal['ddtzc']))?0:parseFloat(newVal['ddtzc']); //大豆田杂草
                let mlstzc = isNaN(parseFloat(newVal['mlstzc']))?0:parseFloat(newVal['mlstzc']); //马铃薯田杂草
                let mhtzc = isNaN(parseFloat(newVal['mhtzc']))?0:parseFloat(newVal['mhtzc']); //棉花田杂草
                let qtlztzc = isNaN(parseFloat(newVal['qtlztzc']))?0:parseFloat(newVal['qtlztzc']);//其他粮作田杂草
                this.total.ntchtjTotal2 = sdtzc + mtzc + yctzc + ymtzc + ddtzc + mlstzc + mhtzc + qtlztzc;

                //农田螺害合计
                let fsl = isNaN(parseFloat(newVal['fsl']))?0:parseFloat(newVal['fsl']); //福寿螺
                let wn = isNaN(parseFloat(newVal['wn']))?0:parseFloat(newVal['wn']);  //蜗牛
                this.total.ntlhhjTotal2 = fsl + wn 
            },
            deep: true // 监听这个对象中的每一个属性变化
        },
        dataTypeObj3: {
            handler(newVal) {
                //飞蝗
                let dyfh = isNaN(parseFloat(newVal['dyfh']))?0:parseFloat(newVal['dyfh']); //东亚飞蝗
                let xh = isNaN(parseFloat(newVal['xh']))?0:parseFloat(newVal['xh']); //夏蝗
                let qh = isNaN(parseFloat(newVal['qh']))?0:parseFloat(newVal['qh']) ; //秋蝗
                let yzfh = isNaN(parseFloat(newVal['yzfh']))?0:parseFloat(newVal['yzfh']); ////亚洲飞蝗
                let xzfh = isNaN(parseFloat(newVal['xzfh']))?0:parseFloat(newVal['xzfh']);  //西藏飞蝗
                let th = isNaN(parseFloat(newVal['th']))?0:parseFloat(newVal['th']);  //土蝗（农牧交错）
                let cdm = isNaN(parseFloat(newVal['cdm']))?0:parseFloat(newVal['cdm']) ; //草地螟（农牧交错）
                this.total.fhxxtjTotal3 = dyfh + xh + qh + yzfh + xzfh + th + cdm;

                //鼠害
                let ntsh = isNaN(parseFloat(newVal['ntsh']))?0:parseFloat(newVal['ntsh']);//农田鼠害
                this.total.ntshTotal3 = ntsh;

                //农田草害统计
                let sdtzc = isNaN(parseFloat(newVal['sdtzc']))?0:parseFloat(newVal['sdtzc']);  //水稻田杂草
                let mtzc = isNaN(parseFloat(newVal['mtzc']))?0:parseFloat(newVal['mtzc']); //麦田杂草
                let yctzc = isNaN(parseFloat(newVal['yctzc']))?0:parseFloat(newVal['yctzc']);  //油菜田杂草
                let ymtzc = isNaN(parseFloat(newVal['ymtzc']))?0:parseFloat(newVal['ymtzc']); //玉米田杂草
                let ddtzc =isNaN(parseFloat(newVal['ddtzc']))?0:parseFloat(newVal['ddtzc']); //大豆田杂草
                let mlstzc = isNaN(parseFloat(newVal['mlstzc']))?0:parseFloat(newVal['mlstzc']); //马铃薯田杂草
                let mhtzc = isNaN(parseFloat(newVal['mhtzc']))?0:parseFloat(newVal['mhtzc']); //棉花田杂草
                let qtlztzc = isNaN(parseFloat(newVal['qtlztzc']))?0:parseFloat(newVal['qtlztzc']);//其他粮作田杂草
                this.total.ntchtjTotal3 = sdtzc + mtzc + yctzc + ymtzc + ddtzc + mlstzc + mhtzc + qtlztzc;

                //农田螺害合计
                let fsl = isNaN(parseFloat(newVal['fsl']))?0:parseFloat(newVal['fsl']); //福寿螺
                let wn = isNaN(parseFloat(newVal['wn']))?0:parseFloat(newVal['wn']);  //蜗牛
                this.total.ntlhhjTotal3= fsl + wn 
            },
            deep: true // 监听这个对象中的每一个属性变化
        },
        dataTypeObj4: {
            handler(newVal) {
                //飞蝗
                let dyfh = isNaN(parseFloat(newVal['dyfh']))?0:parseFloat(newVal['dyfh']); //东亚飞蝗
                let xh = isNaN(parseFloat(newVal['xh']))?0:parseFloat(newVal['xh']); //夏蝗
                let qh = isNaN(parseFloat(newVal['qh']))?0:parseFloat(newVal['qh']) ; //秋蝗
                let yzfh = isNaN(parseFloat(newVal['yzfh']))?0:parseFloat(newVal['yzfh']); ////亚洲飞蝗
                let xzfh = isNaN(parseFloat(newVal['xzfh']))?0:parseFloat(newVal['xzfh']);  //西藏飞蝗
                let th = isNaN(parseFloat(newVal['th']))?0:parseFloat(newVal['th']);  //土蝗（农牧交错）
                let cdm = isNaN(parseFloat(newVal['cdm']))?0:parseFloat(newVal['cdm']) ; //草地螟（农牧交错）
                this.total.fhxxtjTotal4 = dyfh + xh + qh + yzfh + xzfh + th + cdm;

                //鼠害
                let ntsh = isNaN(parseFloat(newVal['ntsh']))?0:parseFloat(newVal['ntsh']);//农田鼠害
                this.total.ntshTotal4 = ntsh;

                //农田草害统计
                let sdtzc = isNaN(parseFloat(newVal['sdtzc']))?0:parseFloat(newVal['sdtzc']);  //水稻田杂草
                let mtzc = isNaN(parseFloat(newVal['mtzc']))?0:parseFloat(newVal['mtzc']); //麦田杂草
                let yctzc = isNaN(parseFloat(newVal['yctzc']))?0:parseFloat(newVal['yctzc']);  //油菜田杂草
                let ymtzc = isNaN(parseFloat(newVal['ymtzc']))?0:parseFloat(newVal['ymtzc']); //玉米田杂草
                let ddtzc =isNaN(parseFloat(newVal['ddtzc']))?0:parseFloat(newVal['ddtzc']); //大豆田杂草
                let mlstzc = isNaN(parseFloat(newVal['mlstzc']))?0:parseFloat(newVal['mlstzc']); //马铃薯田杂草
                let mhtzc = isNaN(parseFloat(newVal['mhtzc']))?0:parseFloat(newVal['mhtzc']); //棉花田杂草
                let qtlztzc = isNaN(parseFloat(newVal['qtlztzc']))?0:parseFloat(newVal['qtlztzc']);//其他粮作田杂草
                this.total.ntchtjTotal4 = sdtzc + mtzc + yctzc + ymtzc + ddtzc + mlstzc + mhtzc + qtlztzc;

                //农田螺害合计
                let fsl = isNaN(parseFloat(newVal['fsl']))?0:parseFloat(newVal['fsl']); //福寿螺
                let wn = isNaN(parseFloat(newVal['wn']))?0:parseFloat(newVal['wn']);  //蜗牛
                this.total.ntlhhjTotal4 =  fsl + wn 
            },
            deep: true // 监听这个对象中的每一个属性变化
        },
    },
    mounted(){
        this.nameFlag = this.activeNames;
        this.urlType = this.$route.query.type == 'detail'?true:false;
        this.miniNav = this.$route.query.toMiniNav; //左上角导航
        this.year = this.$route.query.year; //查看详情数据的年份值
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
                this.year = ''
            }
            let res = await occurrenceDetail({year:this.year});
            if(res.data.status== 0){
                if(res.data.entitys.length>0){ // 新增时没有id，将id置空
                    if(res.data.entitys.length == 1){
                        this.dataType1 = res.data.entitys[0];
                        this.formDate =  res.data.entitys[0].customDataList; //自定义表单数据
                    }else if(res.data.entitys.length == 2){
                        this.dataType1 = res.data.entitys[0];
                        this.formDate =  res.data.entitys[0].customDataList; //自定义表单数据
                        this.dataType2 = res.data.entitys[1];
                    }else if(res.data.entitys.length == 3){
                        this.dataType1 = res.data.entitys[0];
                        this.formDate =  res.data.entitys[0].customDataList; //自定义表单数据
                        this.dataType2 = res.data.entitys[1];
                        this.dataType3 = res.data.entitys[2];
                    }else if(res.data.entitys.length == 4){
                        this.dataType1 = res.data.entitys[0];
                        this.formDate =  res.data.entitys[0].customDataList; //自定义表单数据
                        this.dataType2 = res.data.entitys[1];
                        this.dataType3 = res.data.entitys[2];
                        this.dataType4 = res.data.entitys[3];
                    }      
                }else{
                    this.formDate =  res.data.entitys.customDataList; //自定义表单数据
                }
               
                    

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
                             this.occurrenceIsAddByYear(); //校验年份是否重复，返回 true--时间重复，false -可以提交
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
            let entitys = [];
            entitys.push(this.dataType1);
            entitys.push(this.dataType2);
            entitys.push(this.dataType3);
            entitys.push(this.dataType4);
            // this.ruleForm.dataType = dataType;
            // this.ruleForm.updateTime = getData(); //更新时间
            // this.ruleForm.customDataList = this.formDate;//自定义表单list
            let updateObj = JSON.stringify(entitys);
            let res = await occurrenceUpdate(updateObj);
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
            let entitys = [];
            entitys.push(this.dataType1);
            entitys.push(this.dataType2);
            entitys.push(this.dataType3);
            entitys.push(this.dataType4);
            
            // this.ruleForm.customDataList = this.formDate;//自定义表单list
            let addObj = JSON.stringify(entitys);
            let res = await occurrenceInsert(addObj);
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
        //判断新增和编辑的时候时间是否重复
        async occurrenceIsAddByYear(){
            let res = await occurrenceIsAddByYear({year:this.dataType1.dataYear});
            if(res.data.entitys){ //true 可添加
                if(this.$route.query.type === 'add'){
                    this.addData(); //新增数据
                }
            }else{
                this.$message({
                    message: '已存在年份，请重新修改再提交',
                    type: 'warning'
                })
            }
        }
    }
}
</script>
<style scoped lang="scss">
    .formContent{
        .table{
            border:solid #EBEEF5; border-width:1px 0px 0px 1px;
            td{border:solid #EBEEF5; border-width:0px 1px 1px 0px; padding:10px 0px;text-align: center;}
            th{border:solid #EBEEF5; border-width:0px 1px 1px 0px; padding:10px 0px;text-align: center;}
            .el-input{
                width: 100% !important;
                border: 0 !important;
            }
        }
    } 
    .titleList{
        width: 100%;
        span{display: inline-block;width:21%;text-align: center;}
        .width15{width: 10%;}
    }
</style>