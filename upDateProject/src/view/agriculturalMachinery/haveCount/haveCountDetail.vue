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

                    <el-collapse-item name="2">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>拖拉机及配套机械</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.tractorTotalCount}}</span> 台</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="小型（22.1千瓦及以下）">
                                    <el-input v-model="ruleForm.small" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder=""></el-input> （台）
                                </el-form-item>
                                <el-form-item label="中型（22.1-73.5千瓦）">
                                    <el-input v-model="ruleForm.middle" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder=""></el-input> （台）
                                </el-form-item>
                                <el-form-item label="大型及以上（73.5千瓦及以上）">
                                    <el-input v-model="ruleForm.large" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder=""></el-input> （台）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="3">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>种植业机械</span>
                                <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.plantMechanicsTotalCount}}</span> 台</span>
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">

                                <el-collapse-item name="3-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>耕整地机械</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.GZDJXData}}</span> 台</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="耕整机" class="formItem">
                                                <el-input v-model="ruleForm.tillageCultivator" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入耕整机数量"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="深松机" class="formItem">
                                                <el-input v-model="ruleForm.tillageSubsoiler" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入深松机数量"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="微耕机" class="formItem">
                                                <el-input v-model="ruleForm.tillageTiller" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入微耕机数量"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="机引耙" class="formItem">
                                                <el-input v-model="ruleForm.tillageHarrow" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机引耙数量"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="机引犁" class="formItem">
                                                <el-input v-model="ruleForm.tillagePlow" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入菠菜数量"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="铺膜机" class="formItem">
                                                <el-input v-model="ruleForm.tillageFilm" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入油菜数量"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="旋耕机" class="formItem">
                                                <el-input v-model="ruleForm.tillageRotary" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入芹菜数量"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="联合整地机" class="formItem">
                                                <el-input v-model="ruleForm.tillageCombine" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入菠菜数量"></el-input> （台）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="3-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>种植施肥机械</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.ZZSFData}}</span> 台</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="免耕播种机" class="formItem">
                                                <el-input v-model="ruleForm.planterNoTill" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入免耕播种机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="水稻插秧机" class="formItem">
                                                <el-input v-model="ruleForm.planterRice" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入水稻插秧机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="精量播种机" class="formItem">
                                                <el-input v-model="ruleForm.planterPrecision" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入精量播种机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="秧苗移栽机" class="formItem">
                                                <el-input v-model="ruleForm.planterTransplanter" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入秧苗移栽机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="整地施肥播种机" class="formItem">
                                                <el-input v-model="ruleForm.planterFertilizer" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入整地施肥播种机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="水稻直播机" class="formItem">
                                                <el-input v-model="ruleForm.planterPaddy	" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入水稻直播机"></el-input> （台）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="3-3">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>排灌机械</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.PGJXData}}</span> 台</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="水泵" class="formItem">
                                                <el-input v-model="ruleForm.waterPump" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入水泵"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="节水灌溉类机械" class="formItem">
                                                <el-input v-model="ruleForm.waterMachine" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入节水灌溉类机械"></el-input> （台）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="3-4">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-4') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>田间管理机械</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.TJGLData}}</span> 台</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="田园管理机" class="formItem">
                                                <el-input v-model="ruleForm.manageField" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入田园管理机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="机动植保机械" class="formItem">
                                                <el-input v-model="ruleForm.managePlantProtect" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机动植保机械"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="茶树修剪机" class="formItem">
                                                <el-input v-model="ruleForm.trimmerTea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入茶树修剪机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="果树修剪机" class="formItem">
                                                <el-input v-model="ruleForm.trimmerFruit" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入果树修剪机"></el-input> （台）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="3-5">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-5') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>收获机械</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SHJXData}}</span> 台</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="稻麦联合收割机" class="formItem">
                                                <el-input v-model="ruleForm.harvesterPaddy	" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入稻麦联合收割机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="玉米联合收割机" class="formItem">
                                                <el-input v-model="ruleForm.harvesterCorn" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入玉米联合收割机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="大豆收获机" class="formItem">
                                                <el-input v-model="ruleForm.harvesterSoybean" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入大豆收获机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="油菜籽收获机" class="formItem">
                                                <el-input v-model="ruleForm.harvesterRapeseed" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入油菜籽收获机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="马铃薯收获机" class="formItem">
                                                <el-input v-model="ruleForm.harvesterPotato" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入马铃薯收获机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="花生收获机" class="formItem">
                                                <el-input v-model="ruleForm.harvesterPeanut" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入花生收获机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="甜菜收获机" class="formItem">
                                                <el-input v-model="ruleForm.harvesterSugarbeet" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入甜菜收获机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="甘蔗收获机" class="formItem">
                                                <el-input v-model="ruleForm.harvesterSugarcane" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入甘蔗收获机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="棉花收获机" class="formItem">
                                                <el-input v-model="ruleForm.harvesterCotton" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入棉花收获机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="蔬菜收获机械" class="formItem">
                                                <el-input v-model="ruleForm.harvesterVegetable" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入蔬菜收获机械"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="采茶机" class="formItem">
                                                <el-input v-model="ruleForm.harvesterTea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入采茶机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="青饲料收获机" class="formItem">
                                                <el-input v-model="ruleForm.harvesterGreenfeed" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入青饲料收获机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="牧草收获机" class="formItem">
                                                <el-input v-model="ruleForm.harvesterGrass" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入牧草收获机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="秸秆粉碎还田机" class="formItem">
                                                <el-input v-model="ruleForm.harvesterStraw" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入秸秆粉碎还田机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="打（压）捆机" class="formItem">
                                                <el-input v-model="ruleForm.bander" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入打（压）捆机"></el-input> （台）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="3-6">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-6') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>收获后处理机械</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SHHCLData}}</span> 台</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="机动脱粒机" class="formItem">
                                                <el-input v-model="ruleForm.thresher" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入机动脱粒机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="谷物烘干机" class="formItem">
                                                <el-input v-model="ruleForm.dryerGrain" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入谷物烘干机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="果蔬烘干机" class="formItem">
                                                <el-input v-model="ruleForm.dryerFruit" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入果蔬烘干机"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="种子加工机械" class="formItem">
                                                <el-input v-model="ruleForm.seedProcess" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入种子加工机械"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="保鲜储藏设备" class="formItem">
                                                <el-input v-model="ruleForm.freshKeep" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入保鲜储藏设备"></el-input>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="3-7">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('3-7') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>设施农业设备</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.SSNYSBData}}</span> 台</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="连栋温室" class="formItem">
                                                <el-input v-model="ruleForm.greenhouseGutter" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入连栋温室"></el-input> （平方米）
                                            </el-form-item>
                                            <el-form-item label="日光温室" class="formItem">
                                                <el-input v-model="ruleForm.greenhouseHelio" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入日光温室"></el-input> （平方米）
                                            </el-form-item>
                                            <el-form-item label="塑料大棚" class="formItem">
                                                <el-input v-model="ruleForm.greenhousePlastic" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入塑料大棚"></el-input> （平方米）
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
                                <span>农产品初加工机械</span>
                                <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.agricultureMechanicsTotalCount}}</span> 台</span>
                            </div>
                        </template>
                        <div class="formContent">
                            
                            <el-collapse v-model="activeNames" @change="handleChange">

                                <el-collapse-item name="4-1">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('4-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>农产品初加工动力机械</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.NCPCJGDLData}}</span> 台</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="柴油机" class="formItem">
                                                <el-input v-model="ruleForm.engineDiesel" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入耕整机数量"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="电动机" class="formItem">
                                                <el-input v-model="ruleForm.motorElectric" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入深松机数量"></el-input> （台）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>

                                <el-collapse-item name="4-2">
                                    <template slot="title">
                                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('4-2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                            <span>农产品初加工作业机械</span>
                                            <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.NCPCJGZYData}}</span> 台</span>
                                        </div>
                                    </template>
                                    <div class="formContent">
                                        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="粮食初加工机械" class="formItem">
                                                <el-input v-model="ruleForm.processorFood" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入粮食初加工机械"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="油料初加工机械" class="formItem">
                                                <el-input v-model="ruleForm.processorOil" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入油料初加工机械"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="棉花初加工机械" class="formItem">
                                                <el-input v-model="ruleForm.processorCotton" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入棉花初加工机械"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="果蔬初加工机械" class="formItem">
                                                <el-input v-model="ruleForm.processorFruit" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入果蔬初加工机械"></el-input> （台）
                                            </el-form-item>
                                            <el-form-item label="茶叶加工机械" class="formItem">
                                                <el-input v-model="ruleForm.processorTea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入茶叶加工机械"></el-input> （台）
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="5">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('5') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>畜牧机械</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.animalMechanicsTotalCount}}</span> 台</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="饲料（草）加工机械设备" class="formItem">
                                    <el-input v-model="ruleForm.processorFeed" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入饲料（草）加工机械设备"></el-input> （台）
                                </el-form-item>
                                <el-form-item label="饲养机械" class="formItem">
                                    <el-input v-model="ruleForm.machineFeed" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入饲养机械"></el-input> （台）
                                </el-form-item>
                                <el-form-item label="畜产品采集加工机械设备" class="formItem">
                                    <el-input v-model="ruleForm.processorProduct" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入畜产品采集加工机械设备"></el-input> （台）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="6">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('6') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>水产机械</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.waterMechanicsTotalCount}}</span> 台</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="增氧机" class="formItem">
                                    <el-input v-model="ruleForm.machineOxygen" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入增氧机"></el-input> （台）
                                </el-form-item>
                                <el-form-item label="水产捕捞机械" class="formItem">
                                    <el-input v-model="ruleForm.machineFish" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入水产捕捞机械"></el-input> （台）
                                </el-form-item>
                                <el-form-item label="投饲机" class="formItem">
                                    <el-input v-model="ruleForm.machineAutofeed" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入投饲机"></el-input> （台）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="7">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('7') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>农田基本建设机械</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.buildMechanicsTotalCount}}</span> 台</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="农田基本建设机械" class="formItem">
                                    <el-input v-model="ruleForm.machineBasic" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入农田基本建设机械"></el-input> （台）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="8">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('8') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>农用航空器</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.agricultureAircraftCount}}</span> 架</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="有人驾驶农用飞机" class="formItem">
                                    <el-input v-model="ruleForm.machineAircraft" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入有人驾驶农用飞机"></el-input> （架）
                                </el-form-item>
                                <el-form-item label="植保无人机" class="formItem">
                                    <el-input v-model="ruleForm.machineDrone" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入植保无人机"></el-input> （架）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="9">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('9') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>其他机械</span>
                                <span class="titleRight">总计：<span class="valueStyle">{{ruleForm.mechanicsOtherCount}}</span> 台</span>
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="其他机械" class="formItem">
                                    <el-input v-model="ruleForm.machineOther" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入其他机械"></el-input> （台）
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
//农业机械化与设施股---农机拥有量-动力 接口
import { haveCountDetail,haveCountUpdate, haveCountInsert } from '@/utils/api/agriculturalMachinery/haveCount' 
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
            activeNames: ['0','1','2','3','3-1','3-2','3-3','3-4','3-5','3-6','3-7','4','4-1','4-2','5','6','7','8','9'], //默认折叠板全部打开
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
                
                powerDiesel:'',//柴油发动机动力
                powerElectric:'',//电动机动力
                powerPetrol:'',//汽油发动机动力
                powerOther:'',//其它机械动力
                small:'',//小型（22.1千瓦及以下）
                middle:'',//中型（22.1-73.5千瓦）
                large:'',//大型及以上（73.5千瓦及以上）
                tillageCultivator:'',//耕整机
                tillageSubsoiler:'',//深松机
                tillageTiller:'',//微耕机
                tillageHarrow:'',//机引耙
                tillagePlow:'',//机引犁
                tillageFilm:'',//铺膜机
                tillageRotary:'',//旋耕机
                tillageCombine:'',//联合整地机
                planterNoTill:'',//免耕播种机
                planterRice:'',//水稻插秧机
                planterPrecision:'',//精量播种机
                planterFertilizer:'',//整地施肥播种机
                planterPaddy:'',//水稻直播机
                waterPump:'',//水泵
                manageField:'',//田园管理机
                managePlantProtect:'',//机动植保机械
                trimmerTea:'',//茶树修剪机
                trimmerFruit:'',//果树修剪机
                harvesterPaddy:'',//稻麦联合收割机
                harvesterCorn:'',//玉米联合收割机
                harvesterSoybean:'',//大豆收获机
                harvesterRapeseed:'',//油菜籽收获机
                harvesterPotato:'',//马铃薯收获机
                harvesterPeanut:'',//花生收获机
                harvesterSugarbeet:'',//甜菜收获机
                harvesterSugarcane:'',//甘蔗收获机
                harvesterCotton:'',//棉花收获机
                harvesterVegetable:'',//蔬菜收获机械
                harvesterTea:'',//采茶机
                harvesterGreenfeed:'',//青饲料收获机
                harvesterGrass:'',//牧草收获机
                harvesterStraw:'',//秸秆粉碎还田机
                bander:'',//打（压）捆机
                thresher:'',//机动脱粒机
                dryerGrain:'',//谷物烘干机
                dryerFruit:'',//果蔬烘干机
                seedProcess:'',//种子加工机械
                freshKeep:'',//保鲜储藏设备
                greenhouseGutter:'',//连栋温室
                greenhouseHelio:'',//日光温室
                greenhousePlastic:'',//塑料大棚
                engineDiesel:'',//柴油机
                motorElectric:'',//电动机
                processorFood:'',//粮食初加工机械
                processorOil:'',//油料初加工机械
                processorCotton:'',//棉花初加工机械
                processorFruit:'',//果蔬初加工机械
                processorTea:'',//茶叶加工机械
                processorFeed:'',//饲料（草）加工机械设备
                machineFeed:'',//饲养机械
                processorProduct:'',//畜产品采集加工机械设备
                machineOxygen:'',//增氧机
                machineFish:'',//水产捕捞机械
                machineAutofeed:'',//投饲机
                machineBasic:'',//农田基本建设机械
                machineAircraft:'',//有人驾驶农用飞机
                machineDrone:'',//植保无人机
                machineOther:'',//其他机械

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
                this.ruleForm.agriculturalMachineryTotalCount = newVal.powerDiesel * 1 + newVal.powerElectric * 1 + newVal.powerOther * 1 + newVal.powerPetrol * 1
                this.ruleForm.tractorTotalCount = newVal.small * 1 + newVal.middle * 1 + newVal.large * 1
                
                this.ruleForm.GZDJXData = newVal.tillageCultivator * 1 + newVal.tillageSubsoiler * 1 + newVal.tillageTiller * 1 + newVal.tillageHarrow * 1 +
                                          newVal.tillagePlow * 1 + newVal.tillageFilm * 1 + newVal.tillageRotary * 1 + newVal.tillageCombine * 1
                this.ruleForm.ZZSFData = newVal.planterNoTill * 1 + newVal.planterRice * 1 + newVal.planterPrecision * 1 +
                                          newVal.planterTransplanter * 1 + newVal.planterFertilizer * 1 + newVal.planterPaddy * 1
                this.ruleForm.PGJXData = newVal.waterPump * 1 + newVal.waterMachine * 1
                this.ruleForm.TJGLData = newVal.manageField * 1 + newVal.managePlantProtect	* 1 + newVal.trimmerTea * 1 + newVal.trimmerFruit * 1
                this.ruleForm.SHJXData = newVal.harvesterPaddy * 1 + newVal.harvesterCorn * 1 + newVal.harvesterSoybean * 1 + newVal.harvesterRapeseed * 1 +
                                         newVal.harvesterPotato * 1 + newVal.harvesterPeanut * 1 + newVal.harvesterSugarbeet * 1 + newVal.harvesterSugarcane * 1 +
                                         newVal.harvesterTea * 1 + newVal.harvesterGreenfeed * 1 + newVal.harvesterGrass * 1 + newVal.harvesterStraw * 1 +
                                         newVal.bander * 1 + newVal.harvesterCotton * 1 + newVal.harvesterVegetable * 1
                this.ruleForm.SHHCLData = newVal.thresher * 1 + newVal.dryerGrain * 1 + newVal.dryerFruit * 1 + newVal.seedProcess * 1 + newVal.freshKeep * 1
                this.ruleForm.SSNYSBData = newVal.greenhouseGutter * 1 + newVal.greenhouseHelio * 1 + newVal.greenhousePlastic * 1
                this.ruleForm.plantMechanicsTotalCount = this.ruleForm.GZDJXData + this.ruleForm.ZZSFData + this.ruleForm.PGJXData + this.ruleForm.TJGLData +
                                                         this.ruleForm.SHJXData + this.ruleForm.SHHCLData + this.ruleForm.SSNYSBData

                this.ruleForm.NCPCJGDLData = newVal.engineDiesel * 1 + newVal.motorElectric * 1
                this.ruleForm.NCPCJGZYData = newVal.processorFood * 1 + newVal.processorOil * 1 + newVal.processorCotton * 1 +
                                             newVal.processorFruit * 1 + newVal.processorTea * 1
                this.ruleForm.agricultureMechanicsTotalCount = this.ruleForm.NCPCJGDLData + this.ruleForm.NCPCJGZYData
                this.ruleForm.animalMechanicsTotalCount = newVal.processorFeed * 1 + newVal.machineFeed * 1 + newVal.processorProduct * 1
                this.ruleForm.waterMechanicsTotalCount = newVal.machineOxygen * 1 + newVal.machineFish * 1 + newVal.machineAutofeed * 1
                this.ruleForm.buildMechanicsTotalCount = newVal.machineBasic * 1 + 0
                this.ruleForm.agricultureAircraftCount = newVal.machineAircraft * 1 + newVal.machineDrone * 1
                this.ruleForm.mechanicsOtherCount = newVal.machineOther * 1 + 0
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
            let res = await haveCountDetail({id:this.id});
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
            let res = await haveCountUpdate(updateObj);
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
            let res = await haveCountInsert(addObj);
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