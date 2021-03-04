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
                                <span>农机作业总体情况</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.njzyTotal}}</span> 公顷</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="机耕面积" class="formItem">
                                    <el-input v-model="ruleForm.ploughArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机耕面积"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="机播面积" class="formItem">
                                    <el-input v-model="ruleForm.seedArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机播面积"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="机电灌溉面积" class="formItem">
                                    <el-input v-model="ruleForm.irrigationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机电灌溉面积"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="机械植保面积" class="formItem">
                                    <el-input v-model="ruleForm.protectArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械植保面积"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="机收面积" class="formItem">
                                    <el-input v-model="ruleForm.harvestArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机收面积"></el-input> （公顷）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="2">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>拖拉机及配套机械</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.tljTotal}}</span> 千瓦</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="小型（22.1千瓦及以下）">
                                    <el-input v-model="ruleForm.small" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder=""></el-input> （千瓦）
                                </el-form-item>
                                <el-form-item label="中型（22.1-73.5千瓦）">
                                    <el-input v-model="ruleForm.middle" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder=""></el-input> （千瓦）
                                </el-form-item>
                                <el-form-item label="大型及以上（73.5千瓦及以上）">
                                    <el-input v-model="ruleForm.large" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder=""></el-input> （千瓦）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="3">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>主要农作物生产机械化作业情况</span>
                                <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.zyzwTotal}}</span> 公顷</span>
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">

                                <el-collapse-item name="3-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>小麦</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.XMData}}</span> 公顷</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="机耕面积" class="formItem">
                                                <el-input v-model="ruleForm.wheatPloughArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机耕面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机播面积" class="formItem">
                                                <el-input v-model="ruleForm.wheatSeedArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机播面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机收面积" class="formItem">
                                                <el-input v-model="ruleForm.wheatHarvestArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机收面积"></el-input> （公顷）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="3-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>水稻</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SDData}}</span> 公顷</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="机耕面积" class="formItem">
                                                <el-input v-model="ruleForm.ricePloughArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机耕面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机播面积" class="formItem">
                                                <el-input v-model="ruleForm.riceSeedArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机播面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机收面积" class="formItem">
                                                <el-input v-model="ruleForm.riceHarvestArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机收面积"></el-input> （公顷）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="3-4">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-4') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>玉米</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.YMData}}</span> 公顷</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="机耕面积" class="formItem">
                                                <el-input v-model="ruleForm.cornPloughArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机耕面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机播面积" class="formItem">
                                                <el-input v-model="ruleForm.cornSeedArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机播面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机收面积" class="formItem">
                                                <el-input v-model="ruleForm.cornHarvestArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机收面积"></el-input> （公顷）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="3-5">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-5') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>大豆</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.DDData}}</span> 公顷</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="机耕面积" class="formItem">
                                                <el-input v-model="ruleForm.soybeanPloughArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机耕面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机播面积" class="formItem">
                                                <el-input v-model="ruleForm.soybeanSeedArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机播面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机收面积" class="formItem">
                                                <el-input v-model="ruleForm.soybeanHarvestArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机收面积"></el-input> （公顷）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="3-6">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-6') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>油菜</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.YCData}}</span> 公顷</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="机耕面积" class="formItem">
                                                <el-input v-model="ruleForm.rapePloughArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机耕面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机播面积" class="formItem">
                                                <el-input v-model="ruleForm.rapeSeedArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机播面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机收面积" class="formItem">
                                                <el-input v-model="ruleForm.rapeHarvestArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机收面积"></el-input> （公顷）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="3-7">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-7') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>马铃薯</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.MLSData}}</span> 公顷</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="机耕面积" class="formItem">
                                                <el-input v-model="ruleForm.potatoPloughArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机耕面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机播面积" class="formItem">
                                                <el-input v-model="ruleForm.potatoSeedArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机播面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机收面积" class="formItem">
                                                <el-input v-model="ruleForm.potatoHarvestArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机收面积"></el-input> （公顷）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="3-8">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-8') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>棉花</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.MHData}}</span> 公顷</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="机耕面积" class="formItem">
                                                <el-input v-model="ruleForm.cottonPloughArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机耕面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机播面积" class="formItem">
                                                <el-input v-model="ruleForm.cottonSeedArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机播面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机收面积" class="formItem">
                                                <el-input v-model="ruleForm.cottonHarvestArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机收面积"></el-input> （公顷）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="3-9">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-9') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>花生</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.HSData}}</span> 公顷</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="机耕面积" class="formItem">
                                                <el-input v-model="ruleForm.peanutPloughArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机耕面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机播面积" class="formItem">
                                                <el-input v-model="ruleForm.peanutSeedArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机播面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机收面积" class="formItem">
                                                <el-input v-model="ruleForm.peanutHarvestArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机收面积"></el-input> （公顷）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="3-10">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-10') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>水果</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SGData}}</span> 公顷</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="机械中耕面积" class="formItem">
                                                <el-input v-model="ruleForm.fruitPloughArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械中耕面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机械施肥面积" class="formItem">
                                                <el-input v-model="ruleForm.fruitFertilizeArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械施肥面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机械植保面积" class="formItem">
                                                <el-input v-model="ruleForm.fruitProtectArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械植保面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机械修剪面积" class="formItem">
                                                <el-input v-model="ruleForm.fruitPruneArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械修剪面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机械采收产量" class="formItem">
                                                <el-input v-model="ruleForm.fruitHarvestYield" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械采收产量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="机械田间转运产量" class="formItem">
                                                <el-input v-model="ruleForm.fruitTransportYield" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械田间转运产量"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="3-11">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-11') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>茶叶</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.CYData}}</span> 公顷</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="机械中耕面积" class="formItem">
                                                <el-input v-model="ruleForm.teaPloughArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械中耕面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机械施肥面积" class="formItem">
                                                <el-input v-model="ruleForm.teaFertilizeArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械施肥面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机械植保面积" class="formItem">
                                                <el-input v-model="ruleForm.teaProtectArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械植保面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机械修剪面积" class="formItem">
                                                <el-input v-model="ruleForm.teaPruneArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械修剪面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="机械采收产量" class="formItem">
                                                <el-input v-model="ruleForm.teaHarvestYield" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械采收产量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="机械田间转运产量" class="formItem">
                                                <el-input v-model="ruleForm.teaTransportYield" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械田间转运产量"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                

                            </el-collapse>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="4">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('4') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>单项农机作业情况</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.dxnjTotal}}</span> 公顷</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="机械深耕面积" class="formItem">
                                    <el-input v-model="ruleForm.areaDeepPlough" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械深耕面积"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="机械免耕播种面积" class="formItem">
                                    <el-input v-model="ruleForm.areaNoTillage" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械免耕播种面积"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="精量播种面积" class="formItem">
                                    <el-input v-model="ruleForm.areaPrecise" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入精量播种面积"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="机械修剪面积" class="formItem">
                                    <el-input v-model="ruleForm.areaPrune" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械修剪面积"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="机械深施化肥面积" class="formItem">
                                    <el-input v-model="ruleForm.areaDeepFertilize" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械深施化肥面积"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="机械铺膜面积" class="formItem">
                                    <el-input v-model="ruleForm.areaFilm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械铺膜面积"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="农田机械节水灌溉面积" class="formItem">
                                    <el-input v-model="ruleForm.areaWater" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农田机械节水灌溉面积"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="机械播种牧草面积" class="formItem">
                                    <el-input v-model="ruleForm.areaGrass" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械播种牧草面积"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="机械化秸秆还田面积" class="formItem">
                                    <el-input v-model="ruleForm.areaStraw" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械化秸秆还田面积"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="秸秆捡拾打捆面积" class="formItem">
                                    <el-input v-model="ruleForm.areaStrawBind" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入秸秆捡拾打捆面积"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="农用航空器作业面积" class="formItem">
                                    <el-input v-model="ruleForm.areaAircraft" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农用航空器作业面积"></el-input> （公顷）
                                </el-form-item>
                                <el-form-item label="机械化青贮秸秆数量" class="formItem">
                                    <el-input v-model="ruleForm.areaStrawSilage" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械化青贮秸秆数量"></el-input> （公顷）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="5">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('5') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>农机社会化服务作业情况</span>
                                <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.njshTotal}}</span> 公顷</span>
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">
                                <div class="formContent">
                                    <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                        <el-form-item label="农机专业合作社作业服务面积" class="formItem">
                                            <el-input v-model="ruleForm.areaService" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农机专业合作社作业服务面积"></el-input> （公顷）
                                        </el-form-item>
                                        <el-form-item label="生产托管作业面积" class="formItem">
                                            <el-input v-model="ruleForm.areaManage" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入生产托管作业面积"></el-input> （公顷）
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <el-collapse-item name="5-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('5-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>农机跨区作业面积</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.NJKQZYData}}</span> 公顷</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="跨区机耕面积" class="formItem">
                                                <el-input v-model="ruleForm.areaPloughAcross" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入跨区机耕面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="跨区机播面积" class="formItem">
                                                <el-input v-model="ruleForm.areaSeedAcross" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入跨区机播面积"></el-input> （公顷）
                                            </el-form-item>
                                            <el-form-item label="跨区机收面积" class="formItem">
                                                <el-input v-model="ruleForm.areaHarvestAcross" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入跨区机收面积"></el-input> （公顷）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="6">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('6') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>农产品初加工机械化作业情况</span>
                                <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.cjgTotal}}</span> 吨</span>
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">
                                <div class="formContent">
                                </div>
                                <el-collapse-item name="6-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('6-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>机械脱出农产品数量</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.JXTCNCPData}}</span> 吨</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="机械脱出粮食数量" class="formItem">
                                                <el-input v-model="ruleForm.yieldOutFood" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械脱出粮食数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="机械脱出油料数量" class="formItem">
                                                <el-input v-model="ruleForm.yieldOutOil" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械脱出油料数量"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="6-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('6-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>机械清选农产品数量</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.JXQXNCPData}}</span> 吨</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="机械清选蔬菜数量" class="formItem">
                                                <el-input v-model="ruleForm.yieldCleanVegetable" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械清选蔬菜数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="机械清选水果数量" class="formItem">
                                                <el-input v-model="ruleForm.yieldCleanFruit" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械清选水果数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="机械清选棉花数量" class="formItem">
                                                <el-input v-model="ruleForm.yieldCleanCotton" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械清选棉花数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="其他" class="formItem">
                                                <el-input v-model="ruleForm.yieldCleanOther" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入其他"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="6-3">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('6-3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>机械保质农产品数量</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.JXZBNCPData}}</span> 吨</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="机械保质粮食数量" class="formItem">
                                                <el-input v-model="ruleForm.yieldQualityFood	" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械保质粮食数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="机械保质水果数量" class="formItem">
                                                <el-input v-model="ruleForm.yieldQualityFruit" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械保质水果数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="机械保质油料数量" class="formItem">
                                                <el-input v-model="ruleForm.yieldQualityOil	" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械保质油料数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="机械保质棉花数量" class="formItem">
                                                <el-input v-model="ruleForm.yieldQualityCotton" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械保质棉花数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="机械保质蔬菜数量" class="formItem">
                                                <el-input v-model="ruleForm.yieldQualityVegetable	" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械保质蔬菜数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="机械保质茶叶数量" class="formItem">
                                                <el-input v-model="ruleForm.yieldQualityTea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械保质茶叶数量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="其他" class="formItem">
                                                <el-input v-model="ruleForm.yieldQualityOther" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入其他"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="7">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('7') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>畜牧养殖机械化作业情况</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SCJSYJData}}</span> 公顷</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">
                                <div class="formContent">
                                    <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                        <el-form-item label="机械收获饲草秸秆量" class="formItem">
                                            <el-input v-model="ruleForm.yieldGrassHarvest" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械收获饲草秸秆量"></el-input> （吨）
                                        </el-form-item>
                                        <el-form-item label="机械化饲草料加工数量" class="formItem">
                                            <el-input v-model="ruleForm.yieldGrassProcess" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械化饲草料加工数量"></el-input> （吨）
                                        </el-form-item>
                                        <el-form-item label="机械饲喂的畜禽数量（折算为羊单位）" class="formItem">
                                            <el-input v-model="ruleForm.countLivestockFeed" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械饲喂的畜禽数量（折算为羊单位）"></el-input> （个）
                                        </el-form-item>
                                        <el-form-item label="机械清粪的畜禽数量（折算为羊单位）" class="formItem">
                                            <el-input v-model="ruleForm.countLivestockDung" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械清粪的畜禽数量（折算为羊单位）"></el-input> （个）
                                        </el-form-item>
                                        <el-form-item label="机械环控的畜禽数量（折算为羊单位" class="formItem">
                                            <el-input v-model="ruleForm.countLivestockControl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械环控的畜禽数量（折算为羊单位"></el-input> （个）
                                        </el-form-item>
                                        <el-form-item label="机械挤奶的家畜数量（折算为羊单位）" class="formItem">
                                            <el-input v-model="ruleForm.countLivestockMilk" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械挤奶的家畜数量（折算为羊单位）"></el-input> （个）
                                        </el-form-item>
                                        <el-form-item label="机械剪毛的畜禽数量（折算为羊单位）" class="formItem">
                                            <el-input v-model="ruleForm.countLivestockCut" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械剪毛的畜禽数量（折算为羊单位）"></el-input> （个）
                                        </el-form-item>
                                        <el-form-item label="机械捡蛋的蛋禽数量（折算为羊单位）" class="formItem">
                                            <el-input v-model="ruleForm.countLivestockEgg" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械捡蛋的蛋禽数量（折算为羊单位）"></el-input> （个）
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <el-collapse-item name="7-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('7-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>池塘养殖</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.CTYZData}}</span> 吨</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="机械投饲池塘养殖产量" class="formItem">
                                                <el-input v-model="ruleForm.yieldPondFeed" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械投饲池塘养殖产量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="机械水质调控池塘养殖产量" class="formItem">
                                                <el-input v-model="ruleForm.yieldPondControl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械水质调控池塘养殖产量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="机械起捕池塘养殖产量" class="formItem">
                                                <el-input v-model="ruleForm.yieldPondCatch" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械起捕池塘养殖产量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="机械清淤池塘养殖产量" class="formItem">
                                                <el-input v-model="ruleForm.yieldPondDredge" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械清淤池塘养殖产量"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="7-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('7-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>网箱养殖</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.WXYZData}}</span> 吨</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="机械投饲网箱养殖产量" class="formItem">
                                                <el-input v-model="ruleForm.yieldCageFeed" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械投饲网箱养殖产量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="机械清洗网箱养殖产量" class="formItem">
                                                <el-input v-model="ruleForm.yieldCageClean" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械清洗网箱养殖产量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="机械起捕网箱养殖产量" class="formItem">
                                                <el-input v-model="ruleForm.yieldCageCatch" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械起捕网箱养殖产量"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="7-3">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('7-3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>工厂化养殖</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.GCHData}}</span> 吨</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="机械投饲工厂化养殖产量" class="formItem">
                                                <el-input v-model="ruleForm.yieldFactoryFeed" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械投饲工厂化养殖产量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="机械起捕工厂化养殖产量" class="formItem">
                                                <el-input v-model="ruleForm.yieldFactoryCatch" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械起捕工厂化养殖产量"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="7-4">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('7-4') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>筏式吊笼及底播养殖</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.FSDLData}}</span> 吨</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="机械投苗养殖产量" class="formItem">
                                                <el-input v-model="ruleForm.yieldRaftSeed" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械投苗养殖产量"></el-input> （吨）
                                            </el-form-item>
                                            <el-form-item label="机械采收养殖产量" class="formItem">
                                                <el-input v-model="ruleForm.yieldRaftHarvest	" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机械采收养殖产量"></el-input> （吨）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="8">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('8') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>水产养殖机械化作业情况</span>
                                <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.scyzTotal}}</span> 公顷</span>
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">
                                <div class="formContent">
                                    <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                        <el-form-item label="耕整地机械化面积" class="formItem">
                                            <el-input v-model="ruleForm.areaFarm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入耕整地机械化面积"></el-input> （公顷）
                                        </el-form-item>
                                        <el-form-item label="种植机械化面积" class="formItem">
                                            <el-input v-model="ruleForm.areaPlant" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入种植机械化面积"></el-input> （公顷）
                                        </el-form-item>
                                        <el-form-item label="采运机械化面积" class="formItem">
                                            <el-input v-model="ruleForm.areaHarvest" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入采运机械化面积"></el-input> （公顷）
                                        </el-form-item>
                                        <el-form-item label="灌溉施肥机械化面积" class="formItem">
                                            <el-input v-model="ruleForm.areaIrrigation" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入灌溉施肥机械化面积"></el-input> （公顷）
                                        </el-form-item>
                                        <el-form-item label="环境调控机械化面积" class="formItem">
                                            <el-input v-model="ruleForm.areaControl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入环境调控机械化面积"></el-input> （公顷）
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
        </section>
        
    </div>
</template>
<script>
//农业机械化与设施股---农机作业情况 接口
import { workSituationDetail,workSituationUpdate, workSituationInsert } from '@/utils/api/agriculturalMachinery/workSituation' 
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
            activeNames: ['0','1','2','3','3-1','3-2','3-3','3-4','3-5','3-6','3-7','3-8','3-9','3-10','3-11','4','5','5-1','6','6-1','6-2','6-3','7','7-1','7-2','7-3','7-4','8'], //默认折叠板全部打开
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
                
                ploughArea:'',//机耕面积
                seedArea:'',//机播面积
                irrigationArea:'',//机电灌溉面积
                protectArea:'',//机械植保面积
                harvestArea:'',//机收面积
                small:'',//小型（22.1千瓦及以下）
                middle:'',//中型（22.1-73.5千瓦）
                large:'',//大型及以上（73.5千瓦及以上）
                wheatPloughArea:'',//小麦机耕面积
                wheatSeedArea:'',//小麦机播面积
                wheatHarvestArea:'',//小麦机收面积
                ricePloughArea:'',//水稻机耕面积
                riceSeedArea:'',//水稻机播面积
                riceHarvestArea:'',//水稻机收面积
                cornPloughArea:'',//玉米机耕面积
                cornSeedArea:'',//玉米机播面积
                cornHarvestArea:'',//玉米机收面积
                soybeanPloughArea:'',//大豆机耕面积
                soybeanSeedArea:'',//大豆机播面积
                soybeanHarvestArea:'',//大豆机收面积
                rapePloughArea:'',//油菜机耕面积
                rapeSeedArea:'',//油菜机播面积
                rapeHarvestArea:'',//油菜机收面积
                potatoPloughArea:'',//马铃薯机耕面积
                potatoSeedArea:'',//马铃薯机播面积
                potatoHarvestArea:'',//马铃薯机收面积
                cottonPloughArea:'',//棉花机耕面积
                cottonSeedArea:'',//棉花机播面积
                cottonHarvestArea:'',//棉花机收面积
                peanutPloughArea:'',//花生机耕面积
                peanutSeedArea:'',//花生机播面积
                peanutHarvestArea:'',//花生机收面积
                fruitPloughArea:'',//水果机械中耕面积
                fruitFertilizeArea:'',//水果机械施肥面积
                fruitProtectArea:'',//水果机械植保面积
                fruitPruneArea:'',//水果机械修剪面积
                fruitHarvestYield:'',//水果机械采收产量
                fruitTransportYield:'',//水果机械田间转运产量
                teaPloughArea:'',//茶叶机械中耕面积
                teaFertilizeArea:'',//茶叶机械施肥面积
                teaProtectArea:'',//茶叶机械植保面积
                teaPruneArea:'',//茶叶机械修剪面积
                teaHarvestYield:'',//茶叶机械采收产量
                teaTransportYield:'',//茶叶机械田间转运产量
                areaDeepPlough:'',//机械深耕面积
                areaNoTillage:'',//机械免耕播种面积
                areaPrecise:'',//精量播种面积
                areaPrune:'',//机械修剪面积
                areaDeepFertilize:'',//机械深施化肥面积
                areaFilm:'',//机械铺膜面积
                areaWater:'',//农田机械节水灌溉面积
                areaGrass:'',//机械播种牧草面积
                areaStraw:'',//机械化秸秆还田面积
                areaStrawBind:'',//秸秆捡拾打捆面积
                areaAircraft:'',//农用航空器作业面积
                areaStrawSilage:'',//机械化青贮秸秆数量
                areaService:'',//农机专业合作社作业服务面积
                areaManage:'',//生产托管作业面积
                areaPloughAcross:'',//跨区机耕面积
                areaSeedAcross:'',//跨区机播面积
                areaHarvestAcross:'',//跨区机收面积
                yieldOutFood:'',//机械脱出粮食数量
                yieldOutOil:'',//机械脱出油料数量
                yieldCleanVegetable:'',//机械清选蔬菜数量
                yieldCleanFruit:'',//机械清选水果数量
                yieldCleanCotton:'',//机械清选棉花数量
                yieldCleanOther:'',//机械清选其他数量
                yieldQualityFood:'',//机械保质粮食数量
                yieldQualityFruit:'',//机械保质水果数量
                yieldQualityOil:'',//机械保质油料数量
                yieldQualityCotton:'',//机械保质棉花数量
                yieldQualityVegetable:'',//机械保质蔬菜数量
                yieldQualityTea:'',//机械保质茶叶数量
                yieldQualityOther:'',//机械保质其他数量
                yieldGrassHarvest:'',//机械收获饲草秸秆量
                yieldGrassProcess:'',//机械化饲草料加工数量
                countLivestockFeed:'',//机械饲喂的畜禽数量
                countLivestockDung:'',//机械清粪的畜禽数量
                countLivestockControl:'',//机械环控的畜禽数量
                countLivestockMilk:'',//机械挤奶的家畜数量
                countLivestockCut:'',//机械剪毛的畜禽数量
                countLivestockEgg:'',//机械捡蛋的蛋禽数量
                yieldPondFeed:'',//机械投饲池塘养殖产量
                yieldPondControl:'',//机械水质调控池塘养殖产量
                yieldPondCatch:'',//机械起捕池塘养殖产量
                yieldPondDredge:'',//机械清淤池塘养殖产量
                yieldCageFeed:'',//机械投饲网箱养殖产量
                yieldCageClean:'',//机械清洗网箱养殖产量
                yieldCageCatch:'',//机械起捕网箱养殖产量
                yieldFactoryFeed:'',//机械投饲工厂化养殖产量
                yieldFactoryCatch:'',//机械起捕工厂化养殖产量
                yieldRaftSeed:'',//机械投苗养殖产量
                areaFarm:'',//耕整地机械化面积
                areaPlant:'',//种植机械化面积
                areaHarvest:'',//采运机械化面积
                areaIrrigation:'',//灌溉施肥机械化面积
                areaControl:'',//环境调控机械化面积

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
                this.ruleForm.njzyTotal = newVal.ploughArea * 1 + newVal.seedArea * 1 + newVal.irrigationArea * 1 + 
                                          newVal.protectArea * 1 + newVal.harvestArea * 1
                this.ruleForm.tljTotal = newVal.small * 1 + newVal.middle * 1 + newVal.large * 1

                this.ruleForm.XMData = newVal.wheatHarvestArea * 1 + newVal.wheatPloughArea * 1 + newVal.wheatSeedArea * 1
                this.ruleForm.SDData = newVal.riceHarvestArea * 1 + newVal.ricePloughArea * 1 + newVal.riceSeedArea * 1
                this.ruleForm.YMData = newVal.cornHarvestArea * 1 + newVal.cornPloughArea * 1 + newVal.cornSeedArea * 1
                this.ruleForm.DDData = newVal.soybeanHarvestArea * 1 + newVal.soybeanPloughArea * 1 + newVal.soybeanSeedArea * 1
                this.ruleForm.YCData = newVal.rapeHarvestArea * 1 + newVal.rapePloughArea * 1 + newVal.rapeSeedArea * 1
                this.ruleForm.MLSData = newVal.potatoHarvestArea * 1 + newVal.potatoPloughArea * 1 + newVal.potatoSeedArea * 1
                this.ruleForm.MHData = newVal.cottonHarvestArea * 1 + newVal.cottonPloughArea * 1 + newVal.cottonSeedArea * 1
                this.ruleForm.HSData = newVal.peanutHarvestArea * 1 + newVal.peanutPloughArea * 1 + newVal.peanutSeedArea * 1
                this.ruleForm.zyzwTotal = this.ruleForm.XMData + this.ruleForm.SDData + this.ruleForm.YMData + this.ruleForm.DDData + 
                                          this.ruleForm.YCData + this.ruleForm.MLSData + this.ruleForm.MHData + this.ruleForm.HSData

                this.ruleForm.dxnjTotal = newVal.areaDeepPlough * 1 + newVal.areaNoTillage * 1 + newVal.areaPrecise * 1 + 
                                          newVal.areaPrune * 1 + newVal.areaDeepFertilize * 1 + newVal.areaFilm * 1 + 
                                          newVal.areaWater * 1 + newVal.areaGrass * 1 + newVal.areaStraw * 1 + 
                                          newVal.areaStrawBind * 1 + newVal.areaAircraft * 1 + newVal.areaStrawSilage * 1 
                
                this.ruleForm.NJKQZYData = newVal.areaPloughAcross * 1 + newVal.areaSeedAcross * 1 + newVal.areaHarvestAcross * 1
                this.ruleForm.njshTotal = this.ruleForm.NJKQZYData + newVal.areaService * 1 + newVal.areaManage * 1

                this.ruleForm.JXTCNCPData = newVal.yieldOutFood * 1 + newVal.yieldOutOil * 1
                this.ruleForm.JXQXNCPData = newVal.yieldCleanVegetable * 1 + newVal.yieldCleanFruit * 1 + newVal.yieldCleanCotton * 1 + newVal.yieldCleanOther * 1
                this.ruleForm.JXZBNCPData = newVal.yieldQualityFood * 1 + newVal.yieldQualityFruit * 1 + newVal.yieldQualityOil * 1 + newVal.yieldQualityCotton * 1 +
                                            newVal.yieldQualityVegetable * 1 + newVal.yieldQualityTea * 1 + newVal.yieldQualityOther * 1
                this.ruleForm.cjgTotal = this.ruleForm.JXTCNCPData + this.ruleForm.JXQXNCPData + this.ruleForm.JXZBNCPData

                this.ruleForm.CTYZData = newVal.yieldPondFeed * 1 + newVal.yieldPondControl * 1 + newVal.yieldPondCatch * 1 + newVal.yieldPondDredge * 1
                this.ruleForm.WXYZData = newVal.yieldCageFeed * 1 + newVal.yieldCageClean * 1 + newVal.yieldCageCatch * 1
                this.ruleForm.GCHData = newVal.yieldFactoryFeed * 1 + newVal.yieldFactoryCatch * 1
                this.ruleForm.FSDLData = newVal.yieldRaftSeed * 1 + newVal.yieldRaftHarvest * 1

                this.ruleForm.scyzTotal = newVal.areaFarm * 1 + newVal.areaPlant * 1 + newVal.areaHarvest * 1 + newVal.areaIrrigation * 1 + newVal.areaControl * 1
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
            let res = await workSituationDetail({id:this.id});
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
            let res = await workSituationUpdate(updateObj);
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
            let res = await workSituationInsert(addObj);
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