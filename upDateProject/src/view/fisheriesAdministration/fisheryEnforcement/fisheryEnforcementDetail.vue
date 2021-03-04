<template>
    <!----统计局---渔业产值 添加编辑详情---->
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

                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="1000px" class="demo-ruleForm">
                        
                        <el-form-item label="年份" prop="years" class="formItem" style="width:50%;margin-top:10px">
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
                        <div style="clear:both;"></div>
                    </el-form>

                    <el-collapse-item name="1">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>春季禁渔</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.usableTotal}}</span> 座</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                <el-form-item label="开展专项行动" class="formItem">
                                    <el-input v-model="ruleForm.cjjyZsxd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入开展专项行动次数"></el-input> （次）
                                </el-form-item>
                                <el-form-item label="出动执法人员" class="formItem">
                                    <el-input v-model="ruleForm.cjjyCdzfry" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入出动执法人员人数"></el-input> （人次）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="出动车辆" class="formItem">
                                    <el-input v-model="ruleForm.cjjyCdcl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入出动车辆"></el-input> （台次）
                                </el-form-item>
                                <el-form-item label="查获渔获物" class="formItem">
                                    <el-input v-model="ruleForm.cjjyChyhw" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入查获渔获物重量"></el-input> （公斤）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="收缴违法渔具" class="formItem">
                                    <el-input v-model="ruleForm.cjjySjwfyj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入收缴违法渔具数量"></el-input> （件）
                                </el-form-item>
                                <el-form-item label="行政案件" class="formItem">
                                    <el-input v-model="ruleForm.cjjyXzaj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入行政案件数量"></el-input> （件）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="行政处罚" class="formItem">
                                    <el-input v-model="ruleForm.cjjyXzcf" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入行政处罚数量"></el-input> （人次）
                                </el-form-item>
                                <el-form-item label="罚款" class="formItem">
                                    <el-input v-model="ruleForm.cjjyFk" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入罚款总额"></el-input> （元）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="行政结案" class="formItem">
                                    <el-input v-model="ruleForm.cjjyXzja" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入结案数量"></el-input> （件）
                                </el-form-item>
                                <el-form-item label="移送案件" class="formItem">
                                    <el-input v-model="ruleForm.cjjyYsaj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入移送案件数量"></el-input> （件）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="刑事立案" class="formItem">
                                    <el-input v-model="ruleForm.cjjyXsla" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入刑事立案数量"></el-input> （件）
                                </el-form-item>
                                <el-form-item label="刑事处罚" class="formItem">
                                    <el-input v-model="ruleForm.cjjyXscf" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入刑事处罚数量"></el-input> （人次）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="刑事结案" class="formItem">
                                    <el-input v-model="ruleForm.cjjyXsja" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入结案数量"></el-input> （件）
                                </el-form-item>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="2">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>日常监管</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.usedTotal}}</span> 座</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                <el-form-item label="开展专项行动" class="formItem">
                                    <el-input v-model="ruleForm.rcjgZsxd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入开展专项行动次数"></el-input> （次）
                                </el-form-item>
                                <el-form-item label="出动执法人员" class="formItem">
                                    <el-input v-model="ruleForm.rcjgCdzfry" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入出动执法人员人数"></el-input> （人次）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="出动车辆" class="formItem">
                                    <el-input v-model="ruleForm.rcjgCdcl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入出动车辆"></el-input> （台次）
                                </el-form-item>
                                <el-form-item label="查获渔获物" class="formItem">
                                    <el-input v-model="ruleForm.rcjgChyhw" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入查获渔获物重量"></el-input> （公斤）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="收缴违法渔具" class="formItem">
                                    <el-input v-model="ruleForm.rcjgSjwfyj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入收缴违法渔具数量"></el-input> （件）
                                </el-form-item>
                                <el-form-item label="行政案件" class="formItem">
                                    <el-input v-model="ruleForm.rcjgXzaj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入行政案件数量"></el-input> （件）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="行政处罚" class="formItem">
                                    <el-input v-model="ruleForm.rcjgXzcf" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入行政处罚数量"></el-input> （人次）
                                </el-form-item>
                                <el-form-item label="罚款" class="formItem">
                                    <el-input v-model="ruleForm.rcjgFk" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入罚款总额"></el-input> （元）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="行政结案" class="formItem">
                                    <el-input v-model="ruleForm.rcjgXzja" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入结案数量"></el-input> （件）
                                </el-form-item>
                                <el-form-item label="移送案件" class="formItem">
                                    <el-input v-model="ruleForm.rcjgYsaj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入移送案件数量"></el-input> （件）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="刑事立案" class="formItem">
                                    <el-input v-model="ruleForm.rcjgXsla" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入刑事立案数量"></el-input> （件）
                                </el-form-item>
                                <el-form-item label="刑事处罚" class="formItem">
                                    <el-input v-model="ruleForm.rcjgXscf" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入刑事处罚数量"></el-input> （人次）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="刑事结案" class="formItem">
                                    <el-input v-model="ruleForm.rcjgXsja" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入结案数量"></el-input> （件）
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="3">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>种质资源保护区</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.farmableTotal}}</span> 公顷</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                <el-form-item label="开展专项行动" class="formItem">
                                    <el-input v-model="ruleForm.zzzybhqZsxd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入开展专项行动次数"></el-input> （次）
                                </el-form-item>
                                <el-form-item label="出动执法人员" class="formItem">
                                    <el-input v-model="ruleForm.zzzybhqCdzfry" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入出动执法人员人数"></el-input> （人次）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="出动车辆" class="formItem">
                                    <el-input v-model="ruleForm.zzzybhqCdcl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入出动车辆"></el-input> （台次）
                                </el-form-item>
                                <el-form-item label="查获渔获物" class="formItem">
                                    <el-input v-model="ruleForm.zzzybhqChyhw" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入查获渔获物重量"></el-input> （公斤）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="收缴违法渔具" class="formItem">
                                    <el-input v-model="ruleForm.zzzybhqSjwfyj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入收缴违法渔具数量"></el-input> （件）
                                </el-form-item>
                                <el-form-item label="行政案件" class="formItem">
                                    <el-input v-model="ruleForm.zzzybhqXzaj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入行政案件数量"></el-input> （件）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="行政处罚" class="formItem">
                                    <el-input v-model="ruleForm.zzzybhqXzcf" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入行政处罚数量"></el-input> （人次）
                                </el-form-item>
                                <el-form-item label="罚款" class="formItem">
                                    <el-input v-model="ruleForm.zzzybhqFk" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入罚款总额"></el-input> （元）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="行政结案" class="formItem">
                                    <el-input v-model="ruleForm.zzzybhqXzja" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入结案数量"></el-input> （件）
                                </el-form-item>
                                <el-form-item label="移送案件" class="formItem">
                                    <el-input v-model="ruleForm.zzzybhqYsaj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入移送案件数量"></el-input> （件）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="刑事立案" class="formItem">
                                    <el-input v-model="ruleForm.zzzybhqXsla" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入刑事立案数量"></el-input> （件）
                                </el-form-item>
                                <el-form-item label="刑事处罚" class="formItem">
                                    <el-input v-model="ruleForm.zzzybhqXscf" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入刑事处罚数量"></el-input> （人次）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="刑事结案" class="formItem">
                                    <el-input v-model="ruleForm.zzzybhqXsja" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入结案数量"></el-input> （件）
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="4">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('4') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>“三鱼两药”</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.farmableTotal}}</span> 公顷</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                <el-form-item label="开展专项行动" class="formItem">
                                    <el-input v-model="ruleForm.sylyZsxd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入开展专项行动次数"></el-input> （次）
                                </el-form-item>
                                <el-form-item label="出动执法人员" class="formItem">
                                    <el-input v-model="ruleForm.sylyCdzfry" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入出动执法人员人数"></el-input> （人次）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="出动车辆" class="formItem">
                                    <el-input v-model="ruleForm.sylyCdcl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入出动车辆"></el-input> （台次）
                                </el-form-item>
                                <el-form-item label="查获渔获物" class="formItem">
                                    <el-input v-model="ruleForm.sylyChyhw" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入查获渔获物重量"></el-input> （公斤）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="收缴违法渔具" class="formItem">
                                    <el-input v-model="ruleForm.sylySjwfyj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入收缴违法渔具数量"></el-input> （件）
                                </el-form-item>
                                <el-form-item label="行政案件" class="formItem">
                                    <el-input v-model="ruleForm.sylyXzaj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入行政案件数量"></el-input> （件）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="行政处罚" class="formItem">
                                    <el-input v-model="ruleForm.sylyXzcf" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入行政处罚数量"></el-input> （人次）
                                </el-form-item>
                                <el-form-item label="罚款" class="formItem">
                                    <el-input v-model="ruleForm.sylyFk" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入罚款总额"></el-input> （元）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="行政结案" class="formItem">
                                    <el-input v-model="ruleForm.sylyXzja" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入结案数量"></el-input> （件）
                                </el-form-item>
                                <el-form-item label="移送案件" class="formItem">
                                    <el-input v-model="ruleForm.sylyYsaj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入移送案件数量"></el-input> （件）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="刑事立案" class="formItem">
                                    <el-input v-model="ruleForm.sylyXsla" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入刑事立案数量"></el-input> （件）
                                </el-form-item>
                                <el-form-item label="刑事处罚" class="formItem">
                                    <el-input v-model="ruleForm.sylyXscf" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入刑事处罚数量"></el-input> （人次）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="刑事结案" class="formItem">
                                    <el-input v-model="ruleForm.sylyXsja" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入结案数量"></el-input> （件）
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="5">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('5') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>生产安全</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.farmableTotal}}</span> 公顷</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                <el-form-item label="开展专项行动" class="formItem">
                                    <el-input v-model="ruleForm.scaqZsxd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入开展专项行动次数"></el-input> （次）
                                </el-form-item>
                                <el-form-item label="出动执法人员" class="formItem">
                                    <el-input v-model="ruleForm.scaqCdzfry" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入出动执法人员人数"></el-input> （人次）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="出动车辆" class="formItem">
                                    <el-input v-model="ruleForm.scaqCdcl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入出动车辆"></el-input> （台次）
                                </el-form-item>
                                <el-form-item label="查获渔获物" class="formItem">
                                    <el-input v-model="ruleForm.scaqChyhw" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入查获渔获物重量"></el-input> （公斤）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="收缴违法渔具" class="formItem">
                                    <el-input v-model="ruleForm.scaqSjwfyj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入收缴违法渔具数量"></el-input> （件）
                                </el-form-item>
                                <el-form-item label="行政案件" class="formItem">
                                    <el-input v-model="ruleForm.scaqXzaj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入行政案件数量"></el-input> （件）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="行政处罚" class="formItem">
                                    <el-input v-model="ruleForm.scaqXzcf" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入行政处罚数量"></el-input> （人次）
                                </el-form-item>
                                <el-form-item label="罚款" class="formItem">
                                    <el-input v-model="ruleForm.scaqFk" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入罚款总额"></el-input> （元）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="行政结案" class="formItem">
                                    <el-input v-model="ruleForm.scaqXzja" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入结案数量"></el-input> （件）
                                </el-form-item>
                                <el-form-item label="移送案件" class="formItem">
                                    <el-input v-model="ruleForm.scaqYsaj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入移送案件数量"></el-input> （件）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="刑事立案" class="formItem">
                                    <el-input v-model="ruleForm.scaqXsla" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入刑事立案数量"></el-input> （件）
                                </el-form-item>
                                <el-form-item label="刑事处罚" class="formItem">
                                    <el-input v-model="ruleForm.scaqXscf" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入刑事处罚数量"></el-input> （人次）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="刑事结案" class="formItem">
                                    <el-input v-model="ruleForm.scaqXsja" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入结案数量"></el-input> （件）
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="6">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('6') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>船舶安全</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.farmableTotal}}</span> 公顷</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                <el-form-item label="开展专项行动" class="formItem">
                                    <el-input v-model="ruleForm.cbaqZsxd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入开展专项行动次数"></el-input> （次）
                                </el-form-item>
                                <el-form-item label="出动执法人员" class="formItem">
                                    <el-input v-model="ruleForm.cbaqCdzfry" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入出动执法人员人数"></el-input> （人次）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="出动车辆" class="formItem">
                                    <el-input v-model="ruleForm.cbaqCdcl" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入出动车辆"></el-input> （台次）
                                </el-form-item>
                                <el-form-item label="查获渔获物" class="formItem">
                                    <el-input v-model="ruleForm.cbaqChyhw" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入查获渔获物重量"></el-input> （公斤）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="收缴违法渔具" class="formItem">
                                    <el-input v-model="ruleForm.cbaqSjwfyj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入收缴违法渔具数量"></el-input> （件）
                                </el-form-item>
                                <el-form-item label="行政案件" class="formItem">
                                    <el-input v-model="ruleForm.cbaqXzaj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入行政案件数量"></el-input> （件）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="行政处罚" class="formItem">
                                    <el-input v-model="ruleForm.cbaqXzcf" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入行政处罚数量"></el-input> （人次）
                                </el-form-item>
                                <el-form-item label="罚款" class="formItem">
                                    <el-input v-model="ruleForm.cbaqFk" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入罚款总额"></el-input> （元）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="行政结案" class="formItem">
                                    <el-input v-model="ruleForm.cbaqXzja" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入结案数量"></el-input> （件）
                                </el-form-item>
                                <el-form-item label="移送案件" class="formItem">
                                    <el-input v-model="ruleForm.cbaqYsaj" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入移送案件数量"></el-input> （件）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="刑事立案" class="formItem">
                                    <el-input v-model="ruleForm.cbaqXsla" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入刑事立案数量"></el-input> （件）
                                </el-form-item>
                                <el-form-item label="刑事处罚" class="formItem">
                                    <el-input v-model="ruleForm.cbaqXscf" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入刑事处罚数量"></el-input> （人次）
                                </el-form-item>
                                <div style="clear:both;"></div>
                                <el-form-item label="刑事结案" class="formItem">
                                    <el-input v-model="ruleForm.cbaqXsja" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入结案数量"></el-input> （件）
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
//统计局---渔业产值 接口
import { fisheryEnforcementDetail,fisheryEnforcementUpdate, fisheryEnforcementInsert } from '@/utils/api/fisheriesAdministration/fisheryEnforcement' 
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
            activeNames: ['0','1','2','3','4','5','6'], //默认折叠板全部打开
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
                
                // 春季禁渔
                cjjyZsxd:'',//开展专项行动
                cjjyCdzfry:'',//出动执法人员
                cjjyCdcl:'',//出动车辆
                cjjyChyhw:'',//查获渔获物
                cjjySjwfyj:'',//收缴违法渔具
                cjjyXzaj:'',//行政案件
                cjjyXzcf:'',//行政处罚
                cjjyFk:'',//罚款
                cjjyXzja:'',//行政结案
                cjjyYsaj:'',//移送案件
                cjjyXsla:'',//刑事立案
                cjjyXscf:'',//刑事处罚
                cjjyXsja:'',//刑事结案

                // 日常监管
                rcjgZsxd:'',//开展专项行动
                rcjgCdzfry:'',//出动执法人员
                rcjgCdcl:'',//出动车辆
                rcjgChyhw:'',//查获渔获物
                rcjgSjwfyj:'',//收缴违法渔具
                rcjgXzaj:'',//行政案件
                rcjgXzcf:'',//行政处罚
                rcjgFk:'',//罚款
                rcjgXzja:'',//行政结案
                rcjgYsaj:'',//移送案件
                rcjgXsla:'',//刑事立案
                rcjgXscf:'',//刑事处罚
                rcjgXsja:'',//刑事结案

                // 种质资源保护区
                zzzybhqZsxd:'',//开展专项行动
                zzzybhqCdzfry:'',//出动执法人员
                zzzybhqCdcl:'',//出动车辆
                zzzybhqChyhw:'',//查获渔获物
                zzzybhqSjwfyj:'',//收缴违法渔具
                zzzybhqXzaj:'',//行政案件
                zzzybhqXzcf:'',//行政处罚
                zzzybhqFk:'',//罚款
                zzzybhqXzja:'',//行政结案
                zzzybhqYsaj:'',//移送案件
                zzzybhqXsla:'',//刑事立案
                zzzybhqXscf:'',//刑事处罚
                zzzybhqXsja:'',//刑事结案

                // 三鱼两药
                sylyZsxd:'',//开展专项行动
                sylyCdzfry:'',//出动执法人员
                sylyCdcl:'',//出动车辆
                sylyChyhw:'',//查获渔获物
                sylySjwfyj:'',//收缴违法渔具
                sylyXzaj:'',//行政案件
                sylyXzcf:'',//行政处罚
                sylyFk:'',//罚款
                sylyXzja:'',//行政结案
                sylyYsaj:'',//移送案件
                sylyXsla:'',//刑事立案
                sylyXscf:'',//刑事处罚
                sylyXsja:'',//刑事结案

                //生产安全
                scaqZsxd:'',//开展专项行动
                scaqCdzfry:'',//出动执法人员
                scaqCdcl:'',//出动车辆
                scaqChyhw:'',//查获渔获物
                scaqSjwfyj:'',//收缴违法渔具
                scaqXzaj:'',//行政案件
                scaqXzcf:'',//行政处罚
                scaqFk:'',//罚款
                scaqXzja:'',//行政结案
                scaqYsaj:'',//移送案件
                scaqXsla:'',//刑事立案
                scaqXscf:'',//刑事处罚
                scaqXsja:'',//刑事结案

                // 船舶安全
                cbaqZsxd:'',//开展专项行动
                cbaqCdzfry:'',//出动执法人员
                cbaqCdcl:'',//出动车辆
                cbaqChyhw:'',//查获渔获物
                cbaqSjwfyj:'',//收缴违法渔具
                cbaqXzaj:'',//行政案件
                cbaqXzcf:'',//行政处罚
                cbaqFk:'',//罚款
                cbaqXzja:'',//行政结案
                cbaqYsaj:'',//移送案件
                cbaqXsla:'',//刑事立案
                cbaqXscf:'',//刑事处罚
                cbaqXsja:'',//刑事结案

                createTime:'',//创建时间
                updateTime:'',//更新时间


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
                this.ruleForm.usableTotal = newVal.usableSmall * 1 + newVal.usableMiddle * 1 + newVal.usableLarge * 1
                this.ruleForm.usedTotal = newVal.usedSmall * 1 + newVal.usedMiddle * 1 + newVal.usedLarge * 1
                this.ruleForm.farmableTotal = newVal.farmableSmall * 1 + newVal.farmableMiddle * 1 + newVal.farmableLarge * 1
                this.ruleForm.farmedTotal = newVal.farmedSmall * 1 + newVal.farmedMiddle * 1 + newVal.farmedLarge * 1
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
            let res = await fisheryEnforcementDetail({id:this.id});
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
            let res = await fisheryEnforcementUpdate(updateObj);
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
            let res = await fisheryEnforcementInsert(addObj);
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