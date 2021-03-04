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

                    <el-collapse-item name="2">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>水稻</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SCJSYJData}}</span> 吨</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">

                                <el-collapse-item name="2-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>发生面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.YCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="稻瘟病" class="formItem">
                                                <el-input v-model="ruleForm.sdHappenDwb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入稻瘟病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="纹枯病" class="formItem">
                                                <el-input v-model="ruleForm.sdHappenWkb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入纹枯病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="稻曲病" class="formItem">
                                                <el-input v-model="ruleForm.sdHappenDqb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入稻曲病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="二化螟" class="formItem">
                                                <el-input v-model="ruleForm.sdHappenEhm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入二化螟"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="三化螟" class="formItem">
                                                <el-input v-model="ruleForm.sdHappenShm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入三化螟"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="稻纵卷叶螟" class="formItem">
                                                <el-input v-model="ruleForm.sdHappenDzjym" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入稻纵卷叶螟"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="稻飞虱" class="formItem">
                                                <el-input v-model="ruleForm.sdHappenDfs" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入稻飞虱"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="大螟" class="formItem">
                                                <el-input v-model="ruleForm.sdHappenDm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入大螟"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="稻苞虫" class="formItem">
                                                <el-input v-model="ruleForm.sdHappenDbc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入稻苞虫"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="稻蝗" class="formItem">
                                                <el-input v-model="ruleForm.sdHappenDh" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入稻蝗"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="2-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>防治面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.BCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="稻瘟病" class="formItem">
                                                <el-input v-model="ruleForm.sdDefenseDwb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入稻瘟病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="纹枯病" class="formItem">
                                                <el-input v-model="ruleForm.sdDefenseWkb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入纹枯病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="稻曲病" class="formItem">
                                                <el-input v-model="ruleForm.sdDefenseDqb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入稻曲病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="二化螟" class="formItem">
                                                <el-input v-model="ruleForm.sdDefenseEhm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入二化螟"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="三化螟" class="formItem">
                                                <el-input v-model="ruleForm.sdDefenseShm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入三化螟"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="稻纵卷叶螟" class="formItem">
                                                <el-input v-model="ruleForm.sdDefenseDzjym" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入稻纵卷叶螟"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="稻飞虱" class="formItem">
                                                <el-input v-model="ruleForm.sdDefenseDfs" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入稻飞虱"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="大螟" class="formItem">
                                                <el-input v-model="ruleForm.sdDefenseDm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入大螟"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="稻苞虫" class="formItem">
                                                <el-input v-model="ruleForm.sdDefenseDbc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入稻苞虫"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="稻蝗" class="formItem">
                                                <el-input v-model="ruleForm.sdDefenseDh" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入稻蝗"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                            </el-collapse>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="3">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>小麦</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SCJSYJData}}</span> 吨</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">

                                <el-collapse-item name="3-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>发生面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.YCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="小麦条锈病" class="formItem">
                                                <el-input v-model="ruleForm.xmHappenXmtxb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小麦条锈病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="小麦叶锈病" class="formItem">
                                                <el-input v-model="ruleForm.xmHappenXmyxb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小麦叶锈病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="小麦赤霉病" class="formItem">
                                                <el-input v-model="ruleForm.xmHappenXmcmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小麦赤霉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="小麦白粉病" class="formItem">
                                                <el-input v-model="ruleForm.xmHappenXmbfb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小麦白粉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="小麦纹枯病" class="formItem">
                                                <el-input v-model="ruleForm.xmHappenXmwkb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小麦纹枯病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="小麦黑穗病" class="formItem">
                                                <el-input v-model="ruleForm.xmHappenXmhsb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小麦黑穗病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="蚜虫" class="formItem">
                                                <el-input v-model="ruleForm.xmHappenYc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蚜虫"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="麦蜘蛛" class="formItem">
                                                <el-input v-model="ruleForm.xmHappenMzz" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入麦蜘蛛"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="蛴螬" class="formItem">
                                                <el-input v-model="ruleForm.xmHappenQc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蛴螬"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="蝼蛄" class="formItem">
                                                <el-input v-model="ruleForm.xmHappenLg" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蝼蛄"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="金针虫" class="formItem">
                                                <el-input v-model="ruleForm.xmHappenJzc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入金针虫"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="3-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>防治面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.BCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="小麦条锈病" class="formItem">
                                                <el-input v-model="ruleForm.xmDefenseXmtxb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小麦条锈病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="小麦叶锈病" class="formItem">
                                                <el-input v-model="ruleForm.xmDefenseXmyxb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小麦叶锈病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="小麦赤霉病" class="formItem">
                                                <el-input v-model="ruleForm.xmDefenseXmcmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小麦赤霉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="小麦白粉病" class="formItem">
                                                <el-input v-model="ruleForm.xmDefenseXmbfb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小麦白粉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="小麦纹枯病" class="formItem">
                                                <el-input v-model="ruleForm.xmDefenseXmwkb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小麦纹枯病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="小麦黑穗病" class="formItem">
                                                <el-input v-model="ruleForm.xmDefenseXmhsb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小麦黑穗病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="蚜虫" class="formItem">
                                                <el-input v-model="ruleForm.xmDefenseYc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蚜虫"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="麦蜘蛛" class="formItem">
                                                <el-input v-model="ruleForm.xmDefenseMzz" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入麦蜘蛛"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="蛴螬" class="formItem">
                                                <el-input v-model="ruleForm.xmDefenseQc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蛴螬"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="蝼蛄" class="formItem">
                                                <el-input v-model="ruleForm.xmDefenseLg" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蝼蛄"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="金针虫" class="formItem">
                                                <el-input v-model="ruleForm.xmDefenseJzc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入金针虫"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                            </el-collapse>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="4">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('4') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>玉米</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SCJSYJData}}</span> 吨</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">

                                <el-collapse-item name="4-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('4-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>发生面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.YCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="玉米大斑病" class="formItem">
                                                <el-input v-model="ruleForm.ymHappenYmdbb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入玉米大斑病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="玉米小斑病" class="formItem">
                                                <el-input v-model="ruleForm.ymHappenYmxbb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入玉米小斑病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="玉米纹枯病" class="formItem">
                                                <el-input v-model="ruleForm.ymHappenYmwkb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入玉米纹枯病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="玉米螟" class="formItem">
                                                <el-input v-model="ruleForm.ymHappenYmm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入玉米螟"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="粘虫" class="formItem">
                                                <el-input v-model="ruleForm.ymHappenZc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入粘虫"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="地老虎" class="formItem">
                                                <el-input v-model="ruleForm.ymHappenDlh" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入地老虎"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="4-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('4-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>防治面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.BCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="玉米大斑病" class="formItem">
                                                <el-input v-model="ruleForm.ymDefenseYmdbb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入玉米大斑病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="玉米小斑病" class="formItem">
                                                <el-input v-model="ruleForm.ymDefenseYmxbb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入玉米小斑病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="玉米纹枯病" class="formItem">
                                                <el-input v-model="ruleForm.ymDefenseYmwkb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入玉米纹枯病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="玉米螟" class="formItem">
                                                <el-input v-model="ruleForm.ymDefenseYmm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入玉米螟"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="粘虫" class="formItem">
                                                <el-input v-model="ruleForm.ymDefenseZc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入粘虫"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="地老虎" class="formItem">
                                                <el-input v-model="ruleForm.ymDefenseDlh" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入地老虎"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="5">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('5') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>大豆</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SCJSYJData}}</span> 吨</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">

                                <el-collapse-item name="5-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('5-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>发生面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.YCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="大豆锈病" class="formItem">
                                                <el-input v-model="ruleForm.ddHappenDdxb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入大豆锈病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="大豆霜霉病" class="formItem">
                                                <el-input v-model="ruleForm.ddHappenDdsmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入大豆霜霉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="大豆菌核病" class="formItem">
                                                <el-input v-model="ruleForm.ddHappenDdjhb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入大豆菌核病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="大豆蚜" class="formItem">
                                                <el-input v-model="ruleForm.ddHappenDdy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入大豆蚜"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="棉铃虫" class="formItem">
                                                <el-input v-model="ruleForm.ddHappenMlc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入棉铃虫"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="草地螟" class="formItem">
                                                <el-input v-model="ruleForm.ddHappenCdm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入草地螟"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="豆荚螟" class="formItem">
                                                <el-input v-model="ruleForm.ddHappenDjm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入豆荚螟"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="蛴螬" class="formItem">
                                                <el-input v-model="ruleForm.ddHappenQc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蛴螬"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="地老虎" class="formItem">
                                                <el-input v-model="ruleForm.ddHappenDlh" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入地老虎"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="5-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('5-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>防治面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.BCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="大豆锈病" class="formItem">
                                                <el-input v-model="ruleForm.ddDefenseDdxb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入大豆锈病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="大豆霜霉病" class="formItem">
                                                <el-input v-model="ruleForm.ddDefenseDdsmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入大豆霜霉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="大豆菌核病" class="formItem">
                                                <el-input v-model="ruleForm.ddDefenseDdjhb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入大豆菌核病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="大豆蚜" class="formItem">
                                                <el-input v-model="ruleForm.ddDefenseDdy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入大豆蚜"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="棉铃虫" class="formItem">
                                                <el-input v-model="ruleForm.ddDefenseMlc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入棉铃虫"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="草地螟" class="formItem">
                                                <el-input v-model="ruleForm.ddDefenseCdm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入草地螟"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="豆荚螟" class="formItem">
                                                <el-input v-model="ruleForm.ddDefenseDjm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入豆荚螟"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="蛴螬" class="formItem">
                                                <el-input v-model="ruleForm.ddDefenseQc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蛴螬"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="地老虎" class="formItem">
                                                <el-input v-model="ruleForm.ddDefenseDlh" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入地老虎"></el-input> （万亩次）
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
                                <span>马铃薯</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SCJSYJData}}</span> 吨</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">

                                <el-collapse-item name="6-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('6-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>发生面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.YCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="晚疫病" class="formItem">
                                                <el-input v-model="ruleForm.tdHappenWyb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入晚疫病"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="6-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('6-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>防治面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.BCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="晚疫病" class="formItem">
                                                <el-input v-model="ruleForm.tdDefenseWyb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入晚疫病"></el-input> （万亩次）
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
                                <span>油菜</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SCJSYJData}}</span> 吨</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">

                                <el-collapse-item name="8-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('7-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>发生面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.YCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="菌核病" class="formItem">
                                                <el-input v-model="ruleForm.ycHappenJhb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入菌核病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="霜霉病" class="formItem">
                                                <el-input v-model="ruleForm.ycHappenSmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入霜霉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="根肿病" class="formItem">
                                                <el-input v-model="ruleForm.ycHappenGzb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入根肿病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="油菜蚜虫" class="formItem">
                                                <el-input v-model="ruleForm.ycHappenYcyc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入油菜蚜虫"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="小菜蛾" class="formItem">
                                                <el-input v-model="ruleForm.ycHappenXce" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小菜蛾"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="菜青虫" class="formItem">
                                                <el-input v-model="ruleForm.ycHappenCqc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入菜青虫"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="7-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('7-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>防治面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.BCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="菌核病" class="formItem">
                                                <el-input v-model="ruleForm.ycDefenseJhb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入菌核病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="霜霉病" class="formItem">
                                                <el-input v-model="ruleForm.ycDefenseSmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入霜霉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="根肿病" class="formItem">
                                                <el-input v-model="ruleForm.ycDefenseGzb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入根肿病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="油菜蚜虫" class="formItem">
                                                <el-input v-model="ruleForm.ycDefenseYcyc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入油菜蚜虫"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="小菜蛾" class="formItem">
                                                <el-input v-model="ruleForm.ycDefenseXce" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小菜蛾"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="菜青虫" class="formItem">
                                                <el-input v-model="ruleForm.ycDefenseCqc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入菜青虫"></el-input> （万亩次）
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
                                <span>白菜</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SCJSYJData}}</span> 吨</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">

                                <el-collapse-item name="8-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('8-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>发生面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.YCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="霜霉病" class="formItem">
                                                <el-input v-model="ruleForm.bcHappenSmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入霜霉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="软腐病" class="formItem">
                                                <el-input v-model="ruleForm.bcHappenRfb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入软腐病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="菜蚜" class="formItem">
                                                <el-input v-model="ruleForm.bcHappenCy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入菜蚜"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="菜粉蝶" class="formItem">
                                                <el-input v-model="ruleForm.bcHappenCfd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入菜粉蝶"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="甜菜夜蛾" class="formItem">
                                                <el-input v-model="ruleForm.bcHappenTcye" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入甜菜夜蛾"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="小菜蛾" class="formItem">
                                                <el-input v-model="ruleForm.bcHappenXce" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小菜蛾"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="8-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('8-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>防治面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.BCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="霜霉病" class="formItem">
                                                <el-input v-model="ruleForm.bcDefenseSmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入霜霉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="软腐病" class="formItem">
                                                <el-input v-model="ruleForm.bcDefenseRfb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入软腐病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="菜蚜" class="formItem">
                                                <el-input v-model="ruleForm.bcDefenseCy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入菜蚜"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="菜粉蝶" class="formItem">
                                                <el-input v-model="ruleForm.bcDefenseCfd" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入菜粉蝶"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="甜菜夜蛾" class="formItem">
                                                <el-input v-model="ruleForm.bcDefenseTcye" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入甜菜夜蛾"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="小菜蛾" class="formItem">
                                                <el-input v-model="ruleForm.bcDefenseXce" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小菜蛾"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="9">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('9') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>番茄</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SCJSYJData}}</span> 吨</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">

                                <el-collapse-item name="9-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('9-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>发生面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.YCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="晚疫病" class="formItem">
                                                <el-input v-model="ruleForm.fqHappenWyb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入晚疫病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="灰霉病" class="formItem">
                                                <el-input v-model="ruleForm.fqHappenHmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入灰霉病"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="9-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('9-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>防治面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.BCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="晚疫病" class="formItem">
                                                <el-input v-model="ruleForm.fqDefenseWyb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入晚疫病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="灰霉病" class="formItem">
                                                <el-input v-model="ruleForm.fqDefenseHmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入灰霉病"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="10">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('10') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>辣椒</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SCJSYJData}}</span> 吨</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">

                                <el-collapse-item name="10-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('10-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>发生面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.YCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="青枯病" class="formItem">
                                                <el-input v-model="ruleForm.ljHappenQkb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入青枯病"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="10-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('10-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>防治面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.BCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="青枯病" class="formItem">
                                                <el-input v-model="ruleForm.ljDefenseQkb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入青枯病"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="11">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('11') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>瓜类</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SCJSYJData}}</span> 吨</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">

                                <el-collapse-item name="11-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('11-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>发生面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.YCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="白粉病" class="formItem">
                                                <el-input v-model="ruleForm.scHappenGlbfb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入白粉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="黄瓜霜霉病" class="formItem">
                                                <el-input v-model="ruleForm.scHappenHgsmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入黄瓜霜霉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="美洲斑潜蝇" class="formItem">
                                                <el-input v-model="ruleForm.hgHappenMzbqy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入美洲斑潜蝇"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="11-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('11-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>防治面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.BCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="白粉病" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseGlbfb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入白粉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="黄瓜霜霉病" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseHgsmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入黄瓜霜霉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="美洲斑潜蝇" class="formItem">
                                                <el-input v-model="ruleForm.hgDefenseMzbqy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入美洲斑潜蝇"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="12">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('4') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>柑橘</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SCJSYJData}}</span> 吨</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">

                                <el-collapse-item name="12-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('12-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>发生面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.YCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="柑桔叶螨" class="formItem">
                                                <el-input v-model="ruleForm.gjHappenGjym" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入柑桔叶螨"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="柑橘蚧虫" class="formItem">
                                                <el-input v-model="ruleForm.gjHappenGjjc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入柑橘蚧虫"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="柑桔潜叶虫" class="formItem">
                                                <el-input v-model="ruleForm.gjHappenGjqyc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入柑桔潜叶虫"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="12-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('12-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>防治面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.BCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="柑桔叶螨" class="formItem">
                                                <el-input v-model="ruleForm.gjDefenseGjym" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入柑桔叶螨"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="柑橘蚧虫" class="formItem">
                                                <el-input v-model="ruleForm.gjDefenseGjjc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入柑橘蚧虫"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="柑桔潜叶虫" class="formItem">
                                                <el-input v-model="ruleForm.gjDefenseGjqyc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入柑桔潜叶虫"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="13">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('13') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>花生</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SCJSYJData}}</span> 吨</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">

                                <el-collapse-item name="13-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('13-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>发生面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.YCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="花生叶斑病" class="formItem">
                                                <el-input v-model="ruleForm.hsHappenHsybb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入花生叶斑病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="花生锈病" class="formItem">
                                                <el-input v-model="ruleForm.hsHappenHsxb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入花生锈病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="花生蚜虫" class="formItem">
                                                <el-input v-model="ruleForm.hsHappenHsyc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入花生蚜虫"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="花生叶螨" class="formItem">
                                                <el-input v-model="ruleForm.hsHappenHsym" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入花生叶螨"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="蛴螬" class="formItem">
                                                <el-input v-model="ruleForm.hsHappenQc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蛴螬"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="蝼蛄" class="formItem">
                                                <el-input v-model="ruleForm.hsHappenLg" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蝼蛄"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="13-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('13-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>防治面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.BCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="花生叶斑病" class="formItem">
                                                <el-input v-model="ruleForm.hsDefenseHsybb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入花生叶斑病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="花生锈病" class="formItem">
                                                <el-input v-model="ruleForm.hsDefenseHsxb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入花生锈病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="花生蚜虫" class="formItem">
                                                <el-input v-model="ruleForm.hsDefenseHsyc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入花生蚜虫"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="花生叶螨" class="formItem">
                                                <el-input v-model="ruleForm.hsDefenseHsym" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入花生叶螨"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="蛴螬" class="formItem">
                                                <el-input v-model="ruleForm.hsDefenseQc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蛴螬"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="蝼蛄" class="formItem">
                                                <el-input v-model="ruleForm.hsDefenseLg" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蝼蛄"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="14">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('14') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>其他蔬菜和粮食</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SCJSYJData}}</span> 吨</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">

                                <el-collapse-item name="14-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('14-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>发生面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.YCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="白菜霜霉病" class="formItem">
                                                <el-input v-model="ruleForm.scHappenBcsmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入白菜霜霉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="白菜软腐病" class="formItem">
                                                <el-input v-model="ruleForm.scHappenBcrfb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入白菜软腐病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="番茄晚疫病" class="formItem">
                                                <el-input v-model="ruleForm.scHappenFqwyb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入番茄晚疫病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="番茄灰霉病" class="formItem">
                                                <el-input v-model="ruleForm.scHappenFqhmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入番茄灰霉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="辣椒青枯病" class="formItem">
                                                <el-input v-model="ruleForm.scHappenLjqkb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入辣椒青枯病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="瓜类白粉病" class="formItem">
                                                <el-input v-model="ruleForm.scHappenGlbfb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入瓜类白粉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="瓜类霜霉病" class="formItem">
                                                <el-input v-model="ruleForm.scHappenGlsmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入瓜类霜霉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="黄瓜霜霉病" class="formItem">
                                                <el-input v-model="ruleForm.scHappenHgsmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入黄瓜霜霉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="菜蚜" class="formItem">
                                                <el-input v-model="ruleForm.scHappenCy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入菜蚜"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="菜青虫" class="formItem">
                                                <el-input v-model="ruleForm.scHappenCqc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入菜青虫"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="小菜蛾" class="formItem">
                                                <el-input v-model="ruleForm.scHappenXce" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小菜蛾"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="甜菜夜蛾" class="formItem">
                                                <el-input v-model="ruleForm.scHappenTcye" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入甜菜夜蛾"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="南美斑潜蝇" class="formItem">
                                                <el-input v-model="ruleForm.scHappenNmbqy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入南美斑潜蝇"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="豆荚螟" class="formItem">
                                                <el-input v-model="ruleForm.scHappenDjm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入豆荚螟"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="烟青虫" class="formItem">
                                                <el-input v-model="ruleForm.scHappenYqc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入烟青虫"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="蔬菜红蜘蛛" class="formItem">
                                                <el-input v-model="ruleForm.scHappenSchzz" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蔬菜红蜘蛛"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="美洲斑潜蝇" class="formItem">
                                                <el-input v-model="ruleForm.scHappenMzbqy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入美洲斑潜蝇"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="蛴螬" class="formItem">
                                                <el-input v-model="ruleForm.scHappenQc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蛴螬"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="14-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('14-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>防治面积</span>
                                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.BCLData}}</span> 吨</span> -->
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="白菜霜霉病" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseBcsmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入白菜霜霉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="白菜软腐病" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseBcrfb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入白菜软腐病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="番茄晚疫病" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseFqwyb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入番茄晚疫病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="番茄灰霉病" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseFqhmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入番茄灰霉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="辣椒青枯病" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseLjqkb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入辣椒青枯病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="瓜类白粉病" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseGlbfb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入瓜类白粉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="瓜类霜霉病" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseGlsmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入瓜类霜霉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="黄瓜霜霉病" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseHgsmb" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入黄瓜霜霉病"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="菜蚜" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseCy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入菜蚜"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="菜青虫" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseCqc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入菜青虫"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="小菜蛾" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseXce" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入小菜蛾"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="甜菜夜蛾" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseTcye" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入甜菜夜蛾"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="南美斑潜蝇" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseNmbqy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入南美斑潜蝇"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="豆荚螟" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseDjm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入豆荚螟"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="烟青虫" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseYqc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入烟青虫"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="蔬菜红蜘蛛" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseSchzz" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蔬菜红蜘蛛"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="美洲斑潜蝇" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseMzbqy" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入美洲斑潜蝇"></el-input> （万亩次）
                                            </el-form-item>
                                            <el-form-item label="蛴螬" class="formItem">
                                                <el-input v-model="ruleForm.scDefenseQc" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蛴螬"></el-input> （万亩次）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>
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
import { preventionAndCureDetail,preventionAndCureUpdate, preventionAndCureInsert } from '@/utils/api/plantProtectionStation/preventionAndCure' 
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
                years:'',//年份
                
                bcDefenseCfd:'',//白菜-菜粉蝶（防治面积）
                bcDefenseCy:'',//白菜-菜蚜（防治面积）
                bcDefenseRfb:'',//白菜-软腐病（防治面积）
                bcDefenseSmb:'',//白菜-霜霉病（防治面积）
                bcDefenseTcye:'',//白菜-甜菜夜蛾（防治面积）
                bcDefenseXce:'',//白菜-小菜蛾（防治面积）
                bcHappenCfd:'',//白菜-菜粉蝶（发生面积）
                bcHappenCy:'',//白菜-菜蚜（发生面积）
                bcHappenRfb:'',//白菜-软腐病（发生面积）
                bcHappenSmb:'',//白菜-霜霉病（发生面积）
                bcHappenTcye:'',//白菜-甜菜夜蛾（发生面积）
                bcHappenXce:'',//白菜-小菜蛾（发生面积）
                ddDefenseCdm:'',//大豆-草地螟（防治面积）
                ddDefenseDdjhb:'',//大豆-大豆菌核病（防治面积）
                ddDefenseDdsmb:'',//大豆-大豆霜霉病（防治面积）
                ddDefenseDdxb:'',//大豆-大豆锈病（防治面积）
                ddDefenseDdy:'',//大豆-大豆蚜（防治面积）
                ddDefenseDjm:'',//大豆-豆荚螟（防治面积）
                ddDefenseDlh:'',//大豆-地老虎（防治面积）
                ddDefenseMlc:'',//大豆-棉铃虫（防治面积）
                ddDefenseQc:'',//大豆-蛴螬（防治面积）
                ddHappenCdm:'',//大豆-草地螟（发生面积）
                ddHappenDdjhb:'',//大豆-大豆菌核病（发生面积）
                ddHappenDdsmb:'',//大豆-大豆霜霉病（发生面积）
                ddHappenDdxb:'',//大豆-大豆锈病（发生面积）
                ddHappenDdy:'',//大豆-大豆蚜（发生面积）
                ddHappenDjm:'',//大豆-豆荚螟（发生面积）
                ddHappenDlh:'',//大豆-地老虎（发生面积）
                ddHappenMlc:'',//大豆-棉铃虫（发生面积）
                ddHappenQc:'',//大豆-蛴螬（发生面积）
                fqDefenseHmb:'',//番茄-灰霉病（防治面积）
                fqDefenseWyb:'',//番茄-晚疫病（防治面积）
                fqHappenHmb:'',//番茄-灰霉病（发生面积）
                fqHappenWyb:'',//番茄-晚疫病（发生面积）
                gjDefenseGjjc:'',//柑橘-柑橘蚧虫（防治面积）
                gjDefenseGjqyc:'',//柑橘-柑桔潜叶虫（防治面积）
                gjDefenseGjym:'',//柑橘-柑桔叶螨（防治面积）
                gjHappenGjjc:'',//柑橘-柑橘蚧虫（发生面积）
                gjHappenGjqyc:'',//柑橘-柑桔潜叶虫（发生面积）
                gjHappenGjym:'',//柑橘-柑桔叶螨（发生面积）
                hgDefenseBfb:'',//黄瓜-白粉病（防治面积）
                hgDefenseMzbqy:'',//黄瓜-美洲斑潜蝇（防治面积）
                hgDefenseSmb:'',//黄瓜-霜霉病（防治面积）
                hgHappenBfb:'',//黄瓜-白粉病（发生面积）
                hgHappenMzbqy:'',//黄瓜-美洲斑潜蝇（发生面积）
                hgHappenSmb:'',//黄瓜-霜霉病（发生面积）
                hsDefenseHsxb:'',//花生-花生锈病（防治面积）
                hsDefenseHsybb:'',//花生-花生叶斑病（防治面积）
                hsDefenseHsyc:'',//花生-花生蚜虫（防治面积）
                hsDefenseHsym:'',//花生-花生叶螨（防治面积）
                hsDefenseLg:'',//花生-蝼蛄（防治面积）
                hsDefenseQc:'',//花生-蛴螬（防治面积）
                hsHappenHsxb:'',//花生-花生锈病（发生面积）
                hsHappenHsybb:'',//花生-花生叶斑病（发生面积）
                hsHappenHsyc:'',//花生-花生蚜虫（发生面积）
                hsHappenHsym:'',//花生-花生叶螨（发生面积）
                hsHappenLg:'',//花生-蝼蛄（发生面积）
                hsHappenQc:'',//花生-蛴螬（发生面积）
                ljDefenseQkb:'',//辣椒-青枯病（防治面积）
                ljHappenQkb:'',//辣椒-青枯病（发生面积）
                scDefenseBcrfb:'',//蔬菜-白菜软腐病（防治面积）
                scDefenseBcsmb:'',//蔬菜-白菜霜霉病（防治面积）
                scDefenseCy:'',//蔬菜-菜青虫（防治面积）
                scDefenseCqc:'',//蔬菜-菜蚜（防治面积）
                scDefenseDjm:'',//蔬菜-豆荚螟（防治面积）
                scDefenseFqhmb:'',//蔬菜-番茄灰霉病（防治面积）
                scDefenseFqwyb:'',//蔬菜-番茄晚疫病（防治面积）
                scDefenseGlbfb:'',//蔬菜-瓜类白粉病（防治面积）
                scDefenseGlsmb:'',//蔬菜-瓜类霜霉病（防治面积）
                scDefenseHgsmb:'',//蔬菜-黄瓜霜霉病（防治面积）
                scDefenseLjqkb:'',//蔬菜-辣椒青枯病（防治面积）
                scDefenseMzbqy:'',//蔬菜-美洲斑潜蝇（防治面积）
                scDefenseNmbqy:'',//蔬菜-南美斑潜蝇（防治面积）
                scDefenseQc:'',//蔬菜-蛴螬（防治面积）
                scDefenseSchzz:'',//蔬菜-蔬菜红蜘蛛（防治面积）
                scDefenseTcye:'',//蔬菜-甜菜夜蛾（防治面积）
                scDefenseXce:'',//蔬菜-小菜蛾（防治面积）
                scDefenseYqc:'',//蔬菜-烟青虫（防治面积）
                scHappenBcrfb:'',//蔬菜-白菜软腐病（发生面积）
                scHappenBcsmb:'',//蔬菜-白菜霜霉病（发生面积）
                scHappenCqc:'',//蔬菜-菜青虫（发生面积）
                scHappenCy:'',//蔬菜-菜蚜（发生面积）
                scHappenDjm:'',//蔬菜-豆荚螟（发生面积）
                scHappenFqhmb:'',//蔬菜-番茄灰霉病（发生面积）
                scHappenFqwyb:'',//蔬菜-番茄晚疫病（发生面积）
                scHappenGlbfb:'',//蔬菜-瓜类白粉病（发生面积）
                scHappenGlsmb:'',//蔬菜-瓜类霜霉病（发生面积）
                scHappenHgsmb:'',//蔬菜-黄瓜霜霉病（发生面积）
                scHappenLjqkb:'',//蔬菜-辣椒青枯病（发生面积）
                scHappenMzbqy:'',//蔬菜-美洲斑潜蝇（发生面积）
                scHappenNmbqy:'',//蔬菜-南美斑潜蝇（发生面积）
                scHappenQc:'',//蔬菜-蛴螬（发生面积）
                scHappenSchzz:'',//蔬菜-蔬菜红蜘蛛（发生面积）
                scHappenTcye:'',//蔬菜-甜菜夜蛾（发生面积）
                scHappenXce:'',//蔬菜-小菜蛾（发生面积）
                scHappenYqc:'',//蔬菜-烟青虫（发生面积）
                sdDefenseDbc:'',//水稻-稻苞虫（防治面积）
                sdDefenseDfs:'',//水稻-稻飞虱（防治面积）
                sdDefenseDh:'',//水稻-稻蝗（防治面积）
                sdDefenseDm:'',//水稻-大螟（防治面积）
                sdDefenseDqb:'',//水稻-稻曲病 （防治面积）
                sdDefenseDwb:'',//水稻-稻瘟病（防治面积）
                sdDefenseDzjym:'',//水稻-稻纵卷叶螟（防治面积）
                sdDefenseEhm:'',//水稻-二化螟（防治面积）
                sdDefenseShm:'',//水稻-三化螟（防治面积）
                sdDefenseWkb:'',//水稻-纹枯病（防治面积）
                sdHappenDfs:'',//水稻-稻飞虱（发生面积）
                sdHappenDh:'',//水稻-稻蝗（发生面积）
                sdHappenDm:'',//水稻-大螟（发生面积）
                sdHappenDqb:'',//水稻-稻曲病 （发生面积）
                sdHappenDwb:'',//水稻-稻瘟病（发生面积）
                sdHappenDzjym:'',//水稻-稻纵卷叶螟（发生面积）
                sdHappenEhm:'',//水稻-二化螟（发生面积）
                sdHappenShm:'',//水稻-三化螟（发生面积）
                sdHappenWkb:'',//水稻-纹枯病（发生面积）
                tdDefenseWyb:'',//马铃薯-晚疫病（防治面积）
                tdHappenWyb:'',//马铃薯-晚疫病（发生面积）
                xmDefenseJzc:'',//小麦-金针虫（防治面积）
                xmDefenseLg:'',//小麦-蝼蛄（防治面积）
                xmDefenseMzz:'',//小麦-麦蜘蛛（防治面积）
                xmDefenseQc:'',//小麦-蛴螬（防治面积）
                xmDefenseXmbfb:'',//小麦-小麦白粉病（防治面积）
                xmDefenseXmcmb:'',//小麦-小麦赤霉病（防治面积）
                xmDefenseXmhsb:'',//小麦-小麦黑穗病（防治面积）
                xmDefenseXmtxb:'',//小麦-小麦条锈病（防治面积）
                xmDefenseXmwkb:'',//小麦-小麦纹枯病（防治面积）
                xmDefenseXmyxb:'',//小麦-小麦叶锈病 （防治面积）
                xmDefenseYc:'',//小麦-蚜虫（防治面积）
                xmHappenJzc:'',//小麦-金针虫（发生面积）
                xmHappenLg:'',//小麦-蝼蛄（发生面积）
                xmHappenMzz:'',//小麦-麦蜘蛛（发生面积）
                xmHappenQc:'',//小麦-蛴螬（发生面积）
                xmHappenXmbfb:'',//小麦-小麦白粉病（发生面积）
                xmHappenXmcmb:'',//小麦-小麦赤霉病（发生面积）
                xmHappenXmhsb:'',//小麦-小麦黑穗病（发生面积）
                xmHappenXmtxb:'',//小麦-小麦条锈病（发生面积）
                xmHappenXmwkb:'',//小麦-小麦纹枯病（发生面积）
                xmHappenXmyxb:'',//小麦-小麦叶锈病 （发生面积）
                xmHappenYc:'',//小麦-蚜虫（发生面积）
                ycDefenseCqc:'',//油菜-菜青虫（防治面积）
                ycDefenseGzb:'',//油菜-根肿病（防治面积）
                ycDefenseJhb:'',//油菜-菌核病（防治面积）
                ycDefenseSmb:'',//油菜-霜霉病（防治面积）
                ycDefenseXce:'',//油菜-小菜蛾（防治面积）
                ycDefenseYcyc:'',//油菜-油菜蚜虫（防治面积）
                ycHappenCqc:'',//油菜-菜青虫（发生面积）
                ycHappenGzb:'',//油菜-根肿病（发生面积）
                ycHappenJhb:'',//油菜-菌核病（发生面积）
                ycHappenSmb:'',//油菜-霜霉病（发生面积）
                ycHappenXce:'',//油菜-小菜蛾（发生面积）
                ycHappenYcyc:'',//油菜-油菜蚜虫（发生面积）
                ymDefenseDlh:'',//玉米-地老虎（防治面积）
                ymDefenseYmdbb:'',//玉米-玉米大斑病（防治面积）
                ymDefenseYmm:'',//玉米-玉米螟（防治面积）
                ymDefenseYmwkb:'',//玉米-玉米纹枯病（防治面积）
                ymDefenseYmxbb:'',//玉米-玉米小斑病（防治面积）
                ymDefenseZc:'',//玉米-粘虫（防治面积）
                ymHappenDlh:'',//玉米-地老虎（发生面积）
                ymHappenYmdbb:'',//玉米-玉米大斑病（发生面积）
                ymHappenYmm:'',//玉米-玉米螟（发生面积）
                ymHappenYmwkb:'',//玉米-玉米纹枯病（发生面积）
                ymHappenYmxbb:'',//玉米-玉米小斑病（发生面积）
                ymHappenZc:'',//玉米-粘虫（发生面积）
                
                defenseArea:0,//防治面积
                happenArea:0,//发生面积
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
            let res = await preventionAndCureDetail({id:this.id});
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
            let res = await preventionAndCureUpdate(updateObj);
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
            let res = await preventionAndCureInsert(addObj);
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