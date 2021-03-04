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
                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.allData}}</span> 吨</span>
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
                                <span>油料播种面积</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.YLBZMJData}}</span> 吨</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="花生" class="formItem">
                                    <el-input v-model="ruleForm.oilPeanut" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入花生数量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="油菜籽" class="formItem">
                                    <el-input v-model="ruleForm.oilRapeseed" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入油菜籽数量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="芝麻" class="formItem">
                                    <el-input v-model="ruleForm.oilSesame" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入芝麻数量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="胡芝麻" class="formItem">
                                    <el-input v-model="ruleForm.oilSesameHu" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入胡芝麻数量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="葵花籽" class="formItem">
                                    <el-input v-model="ruleForm.oilSunflower" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入葵花籽数量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="其他油料" class="formItem">
                                    <el-input v-model="ruleForm.oilOther" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入其他油料数量"></el-input> （吨）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="2">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>棉花播种面积</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.MHBZMJData}}</span> 吨</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="棉花" class="formItem">
                                    <el-input v-model="ruleForm.cotton" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入棉花数量"></el-input> （吨）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="3">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>生麻播种面积</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.SMBZMJData}}</span> 吨</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="生黄红麻" class="formItem">
                                    <el-input v-model="ruleForm.linenJute" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入生黄红麻数量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="生大麻" class="formItem">
                                    <el-input v-model="ruleForm.linenHemp" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入生大麻数量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="生苎麻" class="formItem">
                                    <el-input v-model="ruleForm.linenRamee" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入生苎麻数量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="生亚麻" class="formItem">
                                    <el-input v-model="ruleForm.linenFlax" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入生亚麻数量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="其他" class="formItem">
                                    <el-input v-model="ruleForm.linenOther" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入其他数量"></el-input> （吨）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="4">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('4') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>糖料播种面积</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.TLBZMJData}}</span> 吨</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="甘蔗" class="formItem">
                                    <el-input v-model="ruleForm.sugarCane" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入甘蔗数量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="甜菜" class="formItem">
                                    <el-input v-model="ruleForm.sugarBeet" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入甜菜数量"></el-input> （吨）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="5">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('5') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>烟叶</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.YYData}}</span> 吨</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="烤烟" class="formItem">
                                    <el-input v-model="ruleForm.tobacco" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入烤烟数量"></el-input> （吨）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="6">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('6') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>中草药材</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.ZCYCData}}</span> 吨</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="人参" class="formItem">
                                    <el-input v-model="ruleForm.tcmGinseng" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入人参数量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="枸杞" class="formItem">
                                    <el-input v-model="ruleForm.tcmLycium" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入枸杞数量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="甘草" class="formItem">
                                    <el-input v-model="ruleForm.tcmLiquorice" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入甘草数量"></el-input> （吨）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="7">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('7') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>蔬菜及食用菌</span>
                                <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SCJSYJData}}</span> 吨</span>
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">

                                <el-collapse-item name="7-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('7-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>叶菜类</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.YCLData}}</span> 吨</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="芹菜" class="formItem">
                                                <el-input v-model="ruleForm.veggieCelery" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入芹菜数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="菠菜" class="formItem">
                                                <el-input v-model="ruleForm.veggieSpinach" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入菠菜数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="油菜" class="formItem">
                                                <el-input v-model="ruleForm.veggieRape" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入油菜数量"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="7-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('7-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>白菜类</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.BCLData}}</span> 吨</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="大白菜" class="formItem">
                                                <el-input v-model="ruleForm.veggieCabbage" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入大白菜数量"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="7-3">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('7-3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>甘蓝类</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.GLLData}}</span> 吨</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="卷心菜" class="formItem">
                                                <el-input v-model="ruleForm.veggieRepollo" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入卷心菜数量"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="7-4">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('7-4') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>根茎类</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.GJLData}}</span> 吨</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="白萝卜" class="formItem">
                                                <el-input v-model="ruleForm.veggieRadish" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入白萝卜数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="生姜" class="formItem">
                                                <el-input v-model="ruleForm.veggieGinger" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入生姜数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="胡萝卜" class="formItem">
                                                <el-input v-model="ruleForm.veggieCarrot" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入胡萝卜数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="榨菜头" class="formItem">
                                                <el-input v-model="ruleForm.veggieMustard" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入榨菜头数量"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="7-5">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('7-5') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>瓜菜类</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.GCLData}}</span> 吨</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="黄瓜" class="formItem">
                                                <el-input v-model="ruleForm.veggieCuke" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入黄瓜数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="冬瓜" class="formItem">
                                                <el-input v-model="ruleForm.veggieWinterMelon" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入冬瓜数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="南瓜" class="formItem">
                                                <el-input v-model="ruleForm.veggiePumpkin" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入南瓜数量"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="7-6">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('7-6') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>豆类</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.DLData}}</span> 吨</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="豇豆" class="formItem">
                                                <el-input v-model="ruleForm.veggieCowpea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入豇豆数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="四季豆" class="formItem">
                                                <el-input v-model="ruleForm.veggieKidneyBean" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入四季豆数量"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="7-7">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('7-7') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>茄果类</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.QGLData}}</span> 吨</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="茄子" class="formItem">
                                                <el-input v-model="ruleForm.veggieEggplant" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入茄子数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="辣椒" class="formItem">
                                                <el-input v-model="ruleForm.veggiePepper" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入辣椒数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="西红柿" class="formItem">
                                                <el-input v-model="ruleForm.veggieTomato" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入西红柿数量"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="7-8">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('7-8') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>葱蒜类</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.CSLData}}</span> 吨</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="大葱" class="formItem">
                                                <el-input v-model="ruleForm.veggieLeeks" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入大葱数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="蒜头" class="formItem">
                                                <el-input v-model="ruleForm.veggieGarlic" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蒜头数量"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="7-9">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('7-9') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>水生菜</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.veggieLotusRoot}}</span> 吨</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="莲藕" class="formItem">
                                                <el-input v-model="ruleForm.veggieLotusRoot" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入莲藕数量"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="7-10">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('7-10') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>食用菌</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SYJData}}</span> 吨</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="香菇" class="formItem">
                                                <el-input v-model="ruleForm.fungusShiitake" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入香菇数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="黑木耳" class="formItem">
                                                <el-input v-model="ruleForm.fungusBlack" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入黑木耳数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="蘑菇" class="formItem">
                                                <el-input v-model="ruleForm.fungusMushroom" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蘑菇数量"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                            </el-collapse>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="8">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('8') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>瓜果类</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.GGLData}}</span> 吨</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="西瓜" class="formItem">
                                    <el-input v-model="ruleForm.melonWater" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入西瓜数量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="草莓" class="formItem">
                                    <el-input v-model="ruleForm.melonBerry" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入草莓数量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="香瓜" class="formItem">
                                    <el-input v-model="ruleForm.melonMusk" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入香瓜数量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="其他" class="formItem">
                                    <el-input v-model="ruleForm.melonOther" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入其他数量"></el-input> （吨）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="9">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('9') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>其他作物</span>
                                <!-- <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.guWuData}}</span> 吨</span> -->
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="青饲料" class="formItem">
                                    <el-input v-model="ruleForm.otherGreenfeed" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入青饲料数量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="鲜切花" class="formItem">
                                    <el-input v-model="ruleForm.otherFreshFlower" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入鲜切花数量"></el-input> （万只）
                                </el-form-item>
                                <el-form-item label="花卉" class="formItem">
                                    <el-input v-model="ruleForm.otherFlower" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入香瓜数量"></el-input> （万只）
                                </el-form-item>
                                <el-form-item label="盆栽观赏植物" class="formItem">
                                    <el-input v-model="ruleForm.otherPlant" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入盆栽观赏植物数量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="花椒" class="formItem">
                                    <el-input v-model="ruleForm.otherWildPepper" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入花椒数量"></el-input> （吨）
                                </el-form-item>
                                <el-form-item label="八角" class="formItem">
                                    <el-input v-model="ruleForm.otherAnise" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入八角数量"></el-input> （吨）
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
import { economicsPlantYieldDetail,economicsPlantYieldUpdate, economicsPlantYieldInsert } from '@/utils/api/ruralEconomy/economicsPlantYield' 
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
                dataYear:'',//年份
                
                cotton:'',//棉花
                fungusBlack:'',//黑木耳
                fungusMushroom:'',//蘑菇
                fungusShiitake:'',//香菇
                linenFlax:'',//生亚麻
                linenHemp:'',//生大麻
                linenJute:'',//生黄红麻
                linenRamee:'',//生苎麻
                linenOther:'',//其他生麻
                melonBerry:'',//草莓
                melonMusk:'',//香瓜
                melonWater:'',//西瓜
                melonOther:'',//其他瓜果
                oilPeanut:'',//花生
                oilRapeseed:'',//油菜籽
                oilSesame:'',//芝麻
                oilSesameHu:'',//胡芝麻
                oilSunflower:'',//葵花籽
                oilOther:'',//其他油料
                otherAnise:'',//八角
                otherFlower:'',//花卉（万只）
                otherFreshFlower:'',//鲜切花（万只）
                otherGreenfeed:'',//青饲料
                otherPlant:'',//盆栽观赏植物（盆）
                otherWildPepper:'',//花椒
                sugarBeet:'',//甜菜
                sugarCane:'',//甘蔗
                tcmGinseng:'',//人参
                tcmLiquorice:'',//甘草
                tcmLycium:'',//枸杞
                tobacco:'',//烤烟
                veggieCabbage:'',//大白菜
                veggieCarrot:'',//胡萝卜
                veggieCelery:'',//芹菜
                veggieCowpea:'',//豇豆
                veggieCuke:'',//黄瓜
                veggieEggplant:'',//茄子
                veggieGarlic:'',//蒜头
                veggieGinger:'',//生姜
                veggieKidneyBean:'',//四季豆
                veggieLeeks:'',//大葱
                veggieLotusRoot:'',//莲藕
                veggieMustard:'',//榨菜头
                veggiePepper:'',//辣椒
                veggiePumpkin:'',//南瓜
                veggieRadish:'',//白萝卜
                veggieRape:'',//油菜
                veggieRepollo:'',//卷心菜
                veggieSpinach:'',//菠菜
                veggieTomato:'',//西红柿
                veggieWinterMelon:'',//冬瓜
                

                totalData:'',//全部总和

                YLBZMJData:'',//油料播种面积
                MHBZMJData:'',//棉花播种面积
                SMBZMJData:'',//生麻播种面积
                TLBZMJData:'',//糖料播种面积
                YYData:'',//烟叶
                ZCYCData:'',//中草药材

                SCJSYJData:'',//蔬菜及食用菌
                YCLData:'',//叶菜类
                BCLData:'',//白菜类
                GLLData:'',//甘蓝类
                GJLData:'',//根茎类
                GCLData:'',//瓜菜类
                DLData:'',//豆类
                QGLData:'',//茄果类
                CSLData:'',//葱蒜类
                SSCData:'',//水生菜
                SYJData:'',//食用菌

                GGLData:'',//瓜果类

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
            let res = await economicsPlantYieldDetail({id:this.id});
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
            let res = await economicsPlantYieldUpdate(updateObj);
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
            let res = await economicsPlantYieldInsert(addObj);
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