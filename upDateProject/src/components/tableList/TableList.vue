<template>
    <div id="qualityInspection-list-component">
         <div class="miniNav-2">{{miniNav}}</div>
        <el-row class="searchContent">
            <el-col :span='12' class="toolLeft">
                <div class="upLoadContent" v-if='this.featureFlag !== "自定义表单"'>
                    <label for="file" class="upLoadLable" >导入</label>
                    <input id="file" type="file" name="file" @change="upLoadFile($event)" value="导入" style="visibility: hidden;position:absolute;"/>
                </div>
                <el-button type="primary" size="small" @click="add" v-if='this.featureFlag !== "自定义表单"'>新增</el-button><!-- :disabled="!allDeleteID.length"-->
                <el-button type="primary" size="small" v-if='this.featureFlag !== "自定义表单"' @click="downLoadTemplate">下载</el-button>
                <!-- <el-button type="primary" size="small" :disabled="!allSelectionID.length" @click="allAudit">审核</el-button> -->
                <el-button type="primary" size="small" :disabled="!allSelectionID.length" @click="flag = true">审核</el-button>
                <el-button type="primary" size="small" plain :disabled="!allSelectionID.length" @click="allDelete" v-if='this.featureFlag !== "自定义表单"'>删除</el-button> 
            </el-col>
            <el-col :span='12' class="toolRight">
                <div class="searchCriteria">
                    <span>选择日期：</span>
                    <el-date-picker 
                        class="pickerWidth" 
                        size="small" 
                        v-model="filters.queryStartTime" 
                        type="date" 
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期"></el-date-picker>
                     -
                    <el-date-picker
                        v-model="filters.queryEndTime" 
                        size="small" 
                        class="pickerWidth" 
                        type="date" 
                        value-format="yyyy-MM-dd"
                        :picker-options="pickerBeginDateAfter"
                        placeholder="选择日期"></el-date-picker>
                    <span>审核状态：</span><el-select v-model="filters.isCheck" clearable size="small" class="pickerWidth formSelect" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                    <span>关键字：</span><el-input v-model="filters.queryKey" class="pickerWidth" size="small" placeholder="关键字"></el-input>
                    <el-button class="primary searchBtn" size="small" type="primary" @click="searchBtn">查询</el-button>
                </div>
            </el-col>
        </el-row>
        <!-- :formatter="formatState"-->
        <el-table highlight-current-row :data="tableData.records" @selection-change="selsChange" v-loading="listLoading" style="margin-top:80px" height="65vh">
            <el-table-column type="selection" align="center" fixed width="55"></el-table-column>
            <el-table-column
                align="center"
                v-for="(item,index) in qualityInspectionelem"
                :key="index"
                :width="item.width"
                :label="item.labelName"
                :prop="item.prop" 
                :formatter="formatter"
            >
            </el-table-column>
            <el-table-column label="审核结果"  fixed="right" align="center">
                <template slot-scope="scope">
                    <p class="blue" v-show='scope.row.isCheck== "待审核"'>{{scope.row.isCheck}}</p>
                    <p class="green" v-show='scope.row.isCheck== "已审核"'>{{scope.row.isCheck}}</p>
                    <p class="red" v-show='scope.row.isCheck== "审核未通过"'>{{scope.row.isCheck}}</p>
                </template>
            </el-table-column>
            <el-table-column label="操作" :width="btnColumnWidth"  fixed="right"  align="center">
                <template slot-scope="scope">
                    <el-button size="small" type="warning" plain v-if='featureFlag === "自定义表单"' @click="downLoadTemplate(scope.row)">下载模板</el-button>
                    <el-button size="small" type="primary" plain @click="goDetail(scope.row)">查看</el-button>
                    <el-button size="small" type="warning" plain @click="goEdit(scope.row)">编辑</el-button>
                    <el-button type="danger" size="small" plain @click="handleDelItem(scope.row)" v-if='featureFlag !== "自定义表单"'>删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-row type='flex' justify="space-between" align="middle">
            <div class="pageDics">
                显示第{{filters.showNum>0?1:0}} 到第{{filters.showNum}}条记录，总共{{filters.pageSize}}条记录，每页显示
                <el-select v-model="filters.pageSize" size="mini" placeholder="请选择" class="choicePageSize formSelect" @change="pageSizeChange">
                    <el-option v-for="item in pageOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                条记录
            </div>
            <el-pagination
                layout="prev, pager, next"
                background
                :page-size="filters.pageSize"
                :current-page="filters.currentPage"
                :total="filters.total"
                @current-change="handleCurrentChange"
                style="margin: 20px 0"
                >
            </el-pagination>
        </el-row>

        <el-dialog
            title="提示"
            :visible.sync="flag"
            width="30%"
            :before-close="handleClose"
            style="border-radio:50px">
            <span>选择是否通过审核</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="examineClose">取 消</el-button>
                <el-button type="danger" @click="examineFalse">拒 绝</el-button>
                <el-button type="primary" @click="examineTrue">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import {handleCofirm} from '@/utils/messageBox/confirm'
import { qualityOrganicSelectList, qualityOrganicDelete, qualityOrganicAudit } from '@/utils/api/qualityInspection/qualityOrganicProducts'; //质检办--有机食品企业产品数据列表查询
import { qualityPollutionSelectList, qualityPollutionDeleteItems,qualityPollutionAudit } from '@/utils/api/qualityInspection/qualityPollutionProducts'; //质检办--无公害企业产品数据 列表分页 
import { qualityProductCheckSelectList, qualityProductCheckDelete, qualityProductCheckAudit } from '@/utils/api/qualityInspection/qualityDetectionOfAgricultural'; //质检办--农产品农残检测情况信息表
import { qualityCheckStationSelectList, qualityCheckStationDelete, qualityCheckStationAudit } from '@/utils/api/qualityInspection/qualityAgriculturalCheckStation';  //质检办--农产品检测站信息
import { qualityGreenFoodSelectList, qualityGreenFoodDelete, qualityGreenFoodAudit } from '@/utils/api/qualityInspection/qualityGreenfoodEnterprises' //质检办--绿色食品企业产品数据
import { occurrenceSelectList, occurrenceDelete, occurrenceAudit } from '@/utils/api/plantProtectiveStation/occurrenceAndArea' //植保站--虫鼠害发生和防治面积
import { fisheryBasicInfoSelectList,fisheryBasicInfoDelete, fisheryBasicInfoAudit } from '@/utils/api/fisheries/basicInformationOfFishery' //渔业局--渔业生产基本情况
import { freshwaterProductsSelectList,freshwaterProductsDelete, freshwaterProductsAudit } from '@/utils/api/fisheries/freshwaterProducts' //渔业局--淡水养殖产品产量
import { specialFreshSelectList,specialFreshDelete, specialFreshAudit } from '@/utils/api/fisheries/specialFreshwaterArea' //渔业局--淡水特种水产品养殖面积 --------接口待开发
import { basicPointsSelectList,basicPointsDelete, basicPointsAudit } from '@/utils/api/tuFeiZhan/basicSituationOfPoints' //土肥站---监测点基本情况
import { inputUsageSelectList,inputUsageDelete, inputUsageAudit } from '@/utils/api/tuFeiZhan/inputUsage' //土肥站---投入品使用情况
import { farmlandQualitySelectList,farmlandQualityDelete, farmlandQualityAudit } from '@/utils/api/tuFeiZhan/farmlandQualityData' //土肥站---监测点耕地质量数据
import { agriculturalMachinerySelectList,agriculturalMachineryDelete, agriculturalMachineryAudit } from '@/utils/api/agriculturalBureau/agriculturalMachineryShip' //农机局--农机拥有量
import { landContractDataSelectList,landContractDataDelete, landContractDataAudit } from '@/utils/api/nongJingBan/landContractData' //农经办---土地承包数据
import { doCropSownAreaSelectList,doCropSownAreaDelete, doCropSownAreaAudit } from '@/utils/api/industryDo/doCropSownArea' //农经办---农作物播种面积
import { doAgriculturalOutputValueSelectList,doAgriculturalOutputValueDelete, doAgriculturalOutputValueAudit } from '@/utils/api/industryDo/doAgriculturalOutputValue' //产业办---农产品企业产值
import { doBusinessEntitySelectList,doBusinessEntityDelete, doBusinessEntityAudit } from '@/utils/api/industryDo/doBusinessEntity' //产业办---经营主体数据 和 商业局--经营主体
import { agriculturalMarketInfoSelectList,agriculturalMarketInfoDelete, agriculturalMarketInfoAudit } from '@/utils/api/bureauCommerce/agriculturalMarketInfo' //商业局---农产品批发市场信息
import { agriculturalPriceSelectList,agriculturalPriceDelete, agriculturalPriceAudit } from '@/utils/api/bureauCommerce/agriculturalPriceData' //商业局---农产品交易价格数据
import { agrYieldUnitAreaSelectList,agrYieldUnitAreaDelete, agrYieldUnitAreaAudit } from '@/utils/api/statisticalBureau/agrYieldUnitArea' //统计局---主要农产品单位面积产量
import { agrOutputProductSelectList,agrOutputProductDelete, agrOutputProductAudit } from '@/utils/api/statisticalBureau/agrOutputProduct' //统计局---主要农产品产量
import { statistTotalValueSelectList,statistTotalValueDelete, statistTotalValueAudit } from '@/utils/api/statisticalBureau/statistTotalValue' //统计局---主要农产品产量
import { liveProductValueSelectList,liveProductValueDelete, liveProductValueAudit } from '@/utils/api/statisticalBureau/liveProductValue' //统计局---畜产品产量
import { landUseLeaveOneSelectList,landUseLeaveOneDelete, landUseLeaveOneAudit } from '@/utils/api/landResourcesBureau/landUseLeaveOne' //国土局---农村土地利用现状一级分类面积汇总表
import { landUseLeaveTwoSelectList,landUseLeaveTwoDelete, landUseLeaveTwoAudit } from '@/utils/api/landResourcesBureau/landUseLeaveTwo' //国土局---农村土地利用现状二级分类面积汇总表
import { newsTrendsSelectList,newsTrendsDelete, newsTrendsAudit } from '@/utils/api/newsTrends/newsTrends'  //新闻动态
import { dynamicSelectList,dynamicDelete, dynamicAudit } from '@/utils/api/dynamic/dynamic'  //新闻动态
import { customFormSelectList,customFormDelete, customFormAudit, downLoadTemplate, inputExcelTable } from '@/utils/api/customForm/customForm'  //自定义表单
import { pigBreedSelectList, pigBreedDelete, pigBreedAudit } from '@/utils/api/rearLivestockShare/pigBreed'  //畜牧股---养殖成本接口
import { breedingCostDataList, breedingCostDataDelete, breedingCostDataAudit } from '@/utils/api/rearLivestockShare/breedingCostData'  //畜牧股---生猪养殖接口
import { muXuYangZhiList, muXuYangZhiDelete, muXuYangZhiAudit } from '@/utils/api/rearLivestockShare/muXuYangZhi'  //畜牧股---生猪养殖接口
import { managementSubjectList, managementSubjectDelete, managementSubjectAudit } from '@/utils/api/managementSubject/management'  //农村改革与服务体系股---经营主体接口
import { threePoneBList, threePoneBDelete, threePoneBAudit } from '@/utils/api/threePoneB/threePoneB'  //农村改革与服务体系股---三品一标接口
import { livableProjectManageList, livableProjectManageDelete, livableProjectManageAudit } from '@/utils/api/ruralLivable/livableProjectManage'  //宜居乡村---项目管理接口
import { ruralDataList, ruralDataDelete, ruralDataAudit } from '@/utils/api/ruralLivable/livableVillageData'  //宜居乡村---乡村数据接口
import { noPesticidesList, noPesticidesDelete, noPesticidesAudit } from '@/utils/api/policy/policyPesticideBan'  //政策法规---禁用农药接口
import { foodPlantAreaList, foodPlantAreaDelete, foodPlantAreaAudit } from '@/utils/api/ruralEconomy/foodPlantArea'  //农经股---粮食作物播种面积接口
import { foodPlantYieldList, foodPlantYieldDelete, foodPlantYieldAudit } from '@/utils/api/ruralEconomy/foodPlantYield'  //农经股---粮食作物产量接口
import { foodPlantUtilList, foodPlantUtilDelete, foodPlantUtilAudit } from '@/utils/api/ruralEconomy/foodPlantUtil'  //农经股---粮食作物单产接口
import { economicsPlantAreaList, economicsPlantAreaDelete, economicsPlantAreaAudit } from '@/utils/api/ruralEconomy/economicsPlantArea'  //农经股---经济作物面积接口
import { economicsPlantYieldList, economicsPlantYieldDelete, economicsPlantYieldAudit } from '@/utils/api/ruralEconomy/economicsPlantYield'  //农经股---经济作物产量接口
import { economicsPlantUtilList, economicsPlantUtilDelete, economicsPlantUtilAudit } from '@/utils/api/ruralEconomy/economicsPlantUtil'  //农经股---经济作物单产接口
import { townPlantAreaList, townPlantAreaDelete, townPlantAreaAudit } from '@/utils/api/ruralEconomy/townPlantArea'  //农经股---各乡镇种植面积
import { seedEnterpriseList, seedEnterpriseDelete, seedEnterpriseAudit } from '@/utils/api/planting/seedEnterprise'  //种植业股---种子企业备案接口
import { agriculturalProductionList, agriculturalProductionDelete, agriculturalProductionAudit } from '@/utils/api/planting/agriculturalProduction'  //种植业股---农业生产条件
import { landLevelList, landLevelDelete, landLevelAudit } from '@/utils/api/planting/landLevel'  //种植业股---耕地地力等级
import { agriculturalRecyclingList, agriculturalRecyclingDelete, agriculturalRecyclingAudit } from '@/utils/api/planting/agriculturalRecycling'  //种植业股---农膜覆盖及回收利用情况
import { agriculturalStoreInfoList, agriculturalStoreInfoDelete, agriculturalStoreInfoAudit } from '@/utils/api/planting/agriculturalStoreInfo'  //种植业股---农资店信息
import { aquaticMachiningList, aquaticMachiningDelete, aquaticMachiningAudit } from '@/utils/api/fisheriesAdministration/aquaticMachining'  //渔业渔政股---水产加工
import { fisheriesPopulationList, fisheriesPopulationDelete, fisheriesPopulationAudit } from '@/utils/api/fisheriesAdministration/fisheriesPopulation'  //渔业渔政股---水产加工
import { freshwaterFishingYieldList, freshwaterFishingYieldDelete, freshwaterFishingYieldAudit } from '@/utils/api/fisheriesAdministration/freshwaterFishingYield'  //渔业渔政股---淡水捕捞产量
import { aquaticSeedlingList, aquaticSeedlingDelete, aquaticSeedlingAudit } from '@/utils/api/fisheriesAdministration/aquaticSeedling'  //渔业渔政股---主要水产苗种
import { reservoirProductionList, reservoirProductionDelete, reservoirProductionAudit } from '@/utils/api/fisheriesAdministration/reservoirProduction'  //渔业渔政股---水库渔业生产
import { fisheryYieldList, fisheryYieldDelete, fisheryYieldAudit } from '@/utils/api/fisheriesAdministration/fisheryYield'  //渔业渔政股---渔业产值
import { fisheryAddYieldList, fisheryAddYieldDelete, fisheryAddYieldAudit } from '@/utils/api/fisheriesAdministration/fisheryAddYield'  //渔业渔政股---渔业产值
import { fisheryEnforcementList, fisheryEnforcementDelete, fisheryEnforcementAudit } from '@/utils/api/fisheriesAdministration/fisheryEnforcement'  //渔业渔政股---渔业执法情况
import { veterinaryStationList, veterinaryStationDelete, veterinaryStationAudit } from '@/utils/api/veterinaryMedicine/veterinaryStation'  //兽医兽药股---兽医站
import { veterinaryMedicineEnterpriseList, veterinaryMedicineEnterpriseDelete, veterinaryMedicineEnterpriseAudit } from '@/utils/api/veterinaryMedicine/veterinaryMedicineEnterprise'  //兽医兽药股---兽药经营企业
import { veterinaryHospitalList, veterinaryHospitalDelete, veterinaryHospitalAudit } from '@/utils/api/veterinaryMedicine/veterinaryHospital'  //兽医兽药股---诊疗机构
import { pigSlaughterhouseList, pigSlaughterhouseDelete, pigSlaughterhouseAudit } from '@/utils/api/veterinaryMedicine/pigSlaughterhouse'  //兽医兽药股---生猪定点屠宰场
import { NJJYZTList, NJJYZTDelete, NJJYZTAudit } from '@/utils/api/agriculturalMachinery/NJJYZT'  //农业机械化与设施股---农机拥有量-动力
import { havePowerList, havePowerDelete, havePowerAudit } from '@/utils/api/agriculturalMachinery/havePower'  //农业机械化与设施股---农机拥有量-动力
import { haveCountList, haveCountDelete, haveCountAudit } from '@/utils/api/agriculturalMachinery/haveCount'  //农业机械化与设施股---农机拥有量-数量
import { workSituationList, workSituationDelete, workSituationAudit } from '@/utils/api/agriculturalMachinery/workSituation'  //农业机械化与设施股---农机作业情况
import { serviceInformationList, serviceInformationDelete, serviceInformationAudit } from '@/utils/api/agriculturalMachinery/serviceInformation'  //农业机械化与设施股---农机服务情况
import { fruitAndVegetableList, fruitAndVegetableDelete, fruitAndVegetableAudit } from '@/utils/api/cashCropStation/fruitAndVegetable'  //经作站---乡镇果蔬标准化基地
import { maiDongManagementList, maiDongManagementDelete, maiDongManagementAudit } from '@/utils/api/cashCropStation/maiDongManagement'  //经作站---麦冬经营主体
import { maiDongMainAreaList, maiDongMainAreaDelete, maiDongMainAreaAudit } from '@/utils/api/cashCropStation/maiDongMainArea'  //经作站---麦冬主产区面积
import { maiDongProductsList, maiDongProductsDelete, maiDongProductsAudit } from '@/utils/api/cashCropStation/maiDongProducts'  //经作站---麦冬加工产品
import { maiDongYieldList, maiDongYieldDelete, maiDongYieldAudit } from '@/utils/api/cashCropStation/maiDongYield'  //经作站---麦冬产量
import { animalDiseaseList, animalDiseaseDelete, animalDiseaseAudit } from '@/utils/api/animalDisease/animalDisease'  //动物疫病预防控制中心---动物疫病防控
import { diseaseDescribeList, diseaseDescribeDelete, diseaseDescribeAudit } from '@/utils/api/plantProtectionStation/diseaseDescribe'  //植保站---病害描述
import { preventionAndCureList, preventionAndCureDelete, preventionAndCureAudit } from '@/utils/api/plantProtectionStation/preventionAndCure'  //植保站---病虫害防止趋势
import { monitoringPointDataList, monitoringPointDataDelete, monitoringPointDataAudit } from '@/utils/api/plantProtectionStation/monitoringPointData'  //植保站---监测点数据
import { industryLeavePoorList, industryLeavePoorDelete, industryLeavePoorAudit } from '@/utils/api/grainAndOil/industryLeavePoor'  //粮油站---产业脱贫
import { newsDynamicList, newsDynamicDelete, newsDynamicAudit } from '@/utils/api/secretaryOffice/newsDynamic'  //县委秘书办---新闻动态
import { bannerImgMaintainList, bannerImgMaintainDelete, bannerImgMaintainAudit } from '@/utils/api/secretaryOffice/bannerImgMaintain'  //县委秘书办---banner
import { enforcementAccountList, enforcementAccountDelete, enforcementAccountAudit } from '@/utils/api/enforcementTeam/enforcementAccount'  //执法大队---执法台账
import { pesticidesBusinessList, pesticidesBusinessDelete, pesticidesBusinessAudit } from '@/utils/api/enforcementTeam/pesticidesBusiness'  //执法大队---农药经营主体
//永清新增模块
import { orchardAreaList, orchardAreaDelete, orchardAreaAudit } from '@/utils/api/planting/orchardArea'  //种植业股---果园面积
import { feedEnterpriseList, feedEnterpriseDelete, feedEnterpriseAudit } from '@/utils/api/feed/feedEnterprise'  //饲料办---饲料企业
import { freshFruitYieldList, freshFruitYieldDelete, freshFruitYieldAudit } from '@/utils/api/planting/freshFruitYield'  //种植业股---鲜果产量
import { forestryProductList, forestryProductDelete, forestryProductAudit } from '@/utils/api/planting/forestryProduct'  //种植业股---林业生产
import { CZ_NLMYList, CZ_NLMYDelete, CZ_NLMYAudit } from '@/utils/api/planting/CZ_NLMY'  //种植业股---农林牧渔产值
import { ZJZ_NLMYList, ZJZ_NLMYDelete, ZJZ_NLMYAudit } from '@/utils/api/planting/ZJZ_NLMY'  //种植业股---农林牧渔增加值
import { cultivatedLandAreaList, cultivatedLandAreaDelete, cultivatedLandAreaAudit } from '@/utils/api/planting/cultivatedLandArea'  //种植业股---耕地面积

export default {
    data() {
        return {
            flag:false,
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() < new Date(this.filters.queryStartTime.replace(/-/g, '/')).getTime()
                }
            },
            listLoading:false, //加载框
            tableData:{},
            allSelectionID:[], //全选，选择的id
            qualityInspectionelem:this.tableKey,
            filters:{
                queryStartTime:'', //查询开始日期
                queryEndTime:'', //查询截至日期
                isCheck:'', //审核状态
                queryKey:'', //关键字
                pageSize:10,
                total:0,
                currentPage:1,
                showNum:0 //从第一条显示到第showNum条
            },
            pageOptions:[ 
                {value: 5,abel: '5'},
                {value: 10,label:'10'}, 
                {value: 15,label:'15'}, 
                {value: 20,label:'20'}, 
            ],
            options: [
                {value: '',label: '全部'}, 
                {value: '0',label: '待审核'}, 
                {value: '1',label: '已审核'}, 
                {value: '2',label: '审核不通过'}
            ],
            btnColumnWidth:0,
        }
    },
    props:{
        tableKey: {
            type: Array,
            default: function() {
                return []
            }
        },
        miniNav:{
            type:String,
            default: function() {
                return '有机食品企业产品数据'
            }
        },
        featureFlag:{
            type:String,
            default: function() {
                return ''
            }
        },
        btnWidth:{
            type:Number,
            default: function() {
                return 260
            }
        }
    },
    mounted(){  
        this.btnColumnWidth = this.btnWidth;
        this.queryListByPage();
    },
    methods:{
        formatter(row,column,cellValue){
            if(cellValue){
                if(typeof cellValue == 'string'){
                    if(cellValue.indexOf('-')>0 && cellValue.indexOf(':')>0 && cellValue.indexOf('-') === 4){
                    if(cellValue.indexOf('T')>0){
                        return cellValue.split('T')[0];
                    }else{
                        return cellValue.split(' ')[0];
                    }
                }
            }   
            return cellValue;    
            }else{
                return '--'
            }
        },
        upLoadFile(event){
            this.inputExcelTableFile(event)
        },

        async inputExcelTableFile(e){
            let formData = new FormData();
           formData.append('file', e.target.files[0]);
            let res = await inputExcelTable(formData);
            console.log(res.data)
            if(res.data.status== 0){
                this.$message({
                    message: '导入文件成功',
                    type: 'sucess'
                })
                this.queryListByPage();
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
        },


        //点击查看
        goDetail(rowData){
            this.$emit('goDetail',rowData)
        },
        //点击编辑
        goEdit(rowData){
            this.$emit('goEdit',rowData)
        },
        handleDelItem(row){
            this.$confirm('确定删除吗？', '提示', {}).then(() => {
                //植保站删除传参为year
                if(this.$route.path.indexOf("/occurrenceAndArea") >= 0){
                    this.deleteItems(row.dataYear)
                }else{ //其他模块传参为id
                    this.deleteItems(row.id)
                }
               
            })    
        },
        //多选删除
        allDelete(){
            this.$confirm('确定删除吗？', '提示', {}).then(() => {
                // if(this.$route.path.indexOf("/occurrenceAndArea") >= 0){
                //     let years =  this.allSelectionID.join(',')
                //     this.deleteItems(years);
                // }else{
                    let ids = this.allSelectionID
                    this.deleteItems(ids);
               // }
                    
            })
        },
        //点击审核按钮，多选审核
        examineClose(){
            this.flag = false
        },
        examineFalse(){
            this.flag = false
            let ids = this.allSelectionID
            this.auditItems(ids,2);
        },
        examineTrue(){
            this.flag = false
            let ids = this.allSelectionID
            this.auditItems(ids,1);
        },
        // allAudit(){
        //     this.$confirm('确定审核吗？', '提示', 
        //         {
        //             confirmButtonText: '确定',
        //             cancelButtonText: '拒绝',
        //         }).then(() => {
        //             let ids = this.allSelectionID
        //             this.auditItems(ids,1);
        //         }).catch(() => {
        //             let ids = this.allSelectionID
        //             this.auditItems(ids,2);
        //         })
        // },
        //新增
        add(){
            this.$emit('add')
        },
        //表格复选框
        selsChange(selection) {
            if(this.$route.path.indexOf("/customForm") >= 0){
                this.allSelectionID = selection.map(item => {
                    return  item.customTable
                })
            }if(this.$route.path.indexOf("/occurrenceAndArea") >= 0){
                this.allSelectionID = selection.map(item => {
                    return  item.dataYear
                })
            }else{
                this.allSelectionID = selection.map(item => {
                 return  item.id
                })
            }
            
            
            console.log( this.allSelectionID)
        },
        //查询
        searchBtn(){
            this.filters.currentPage = 1; //手动查询时将当前页更改为1
            this.queryListByPage();
        },
        //分页查询接口
        async queryListByPage(){
            this.listLoading = true;
            let obj = {
                queryStartTime:this.filters.queryStartTime,     //查询开始时间
                queryEndTime:this.filters.queryEndTime,         //查询结束时间
                isCheck:this.filters.isCheck,       //是否审核
                queryKey:this.filters.queryKey,     //模糊查询关键字
                pageSize:this.filters.pageSize,     //每页数量
                currentPage:this.filters.currentPage//页码
            }
            let res = '';
            if(this.$route.path.indexOf("/qualityOrganicProducts") >= 0  || this.$route.path.indexOf("/doOrganicFoodEnter") >= 0){
                res = await qualityOrganicSelectList(obj); //质检办--有机食品企业产品数据,产业办--有机食品企业产品数据 分页列表查询
            }else if(this.$route.path.indexOf("/qualityPollutionProducts") >= 0 || this.$route.path.indexOf("/doHarmlessProductsEnter") >= 0) {
                res = await qualityPollutionSelectList(obj); //质检办--无公害企业产品数据  ，产业办--无公害企业产品数据分页列表查询
            }else if(this.$route.path.indexOf("/qualityDetectionOfAgricultural") >= 0) { 
                res = await qualityProductCheckSelectList(obj); //质检办--农产品农残检测情况信息表 分页列表查询
            }else if(this.$route.path.indexOf("/qualityAgriculturalCheckStation") >= 0) { 
                res = await qualityCheckStationSelectList(obj); //质检办--农产品检测站信息 分页列表查询
            }else if(this.$route.path.indexOf("/qualityGreenfoodEnterprises") >= 0 || this.$route.path.indexOf("/doGreenFoodValue") >= 0){ 
                res = await qualityGreenFoodSelectList(obj);  //质检办--绿色食品企业产品数据，产业办--绿色食品企业产品数据 分页列表查询
            }else if(this.$route.path.indexOf("/occurrenceAndArea") >= 0){
                res = await occurrenceSelectList(obj);  //植保站--虫鼠害发生和防治面积 分页列表查询
            }else if(this.$route.path.indexOf("/basicInformationOfFishery") >= 0){
                res = await fisheryBasicInfoSelectList(obj);  //渔业局--渔业生产基本情况 分页列表查询
            }else if(this.$route.path.indexOf("/freshwaterProducts") >= 0){
                res = await freshwaterProductsSelectList(obj);  //渔业局--淡水养殖产品产量 分页列表查询
            }else if(this.$route.path.indexOf("/specialFreshwaterArea") >= 0){
                res = await specialFreshSelectList(obj);  //渔业局--淡水特种水产品养殖面积  分页列表查询
            }else if(this.$route.path.indexOf("/basicSituationOfPoints") >= 0){
                res = await basicPointsSelectList(obj);  //土肥站---监测点基本情况  分页列表查询
            }else if(this.$route.path.indexOf("/inputUsage") >= 0 || this.$route.path.indexOf("/statistInputUsage")>=0 ){
                res = await inputUsageSelectList(obj);  //土肥站---投入品使用情况, 统计局--投入品使用情况  分页列表查询
            }else if(this.$route.path.indexOf("/farmlandQuality") >= 0 ){
                res = await farmlandQualitySelectList(obj);  //土肥站--- 监测点耕地质量数据 分页列表查询
            }else if(this.$route.path.indexOf("/agriculturalMachineryShip") >= 0 || this.$route.path.indexOf("/statistMachineryList") >= 0){
                res = await agriculturalMachinerySelectList(obj);  //农机局---农机拥有量 和 统计局--农机拥有量  分页列表查询
            }else if(this.$route.path.indexOf("/landContractData") >= 0){
                res = await landContractDataSelectList(obj);  //农经办---土地承包数据  分页列表查询
            }else if(this.$route.path.indexOf("/doCropSownArea") >= 0 || this.$route.path.indexOf("/statistCropSownArea") >= 0){
                res = await doCropSownAreaSelectList(obj);  //农经办---农作物播种面积 和 统计局---农作物播种面积  分页列表查询
            }else if(this.$route.path.indexOf("/doAgriculturalOutputValue") >= 0){
                res = await doAgriculturalOutputValueSelectList(obj);  //农经办---农产品企业产值  分页列表查询
            }else if(this.$route.path.indexOf("/doBusinessEntity") >= 0 
                    || this.$route.path.indexOf("/marketBusinessEntity") >= 0 
                    ||  this.$route.path.indexOf("/industrialBusinessEntity") >= 0 
                    || this.$route.path.indexOf("/rearBusinessEntity") >= 0 
                ){
                //农经办---经营主体数据 和商业局--经营主体 和工商局经营主体 和 畜牧股--经营主体  分页列表查询
                res = await doBusinessEntitySelectList(obj);  
            }else if(this.$route.path.indexOf("/agriculturalMarketInfo") >= 0){
                res = await agriculturalMarketInfoSelectList(obj);  //商业局---农产品批发市场信息  分页列表查询
            }else if(this.$route.path.indexOf("/agriculturalPriceData") >= 0){
                res = await agriculturalPriceSelectList(obj);  //商业局---农产品交易价格数据  分页列表查询
            }else if(this.$route.path.indexOf("/agrYieldUnitArea") >= 0){
                res = await agrYieldUnitAreaSelectList(obj);  //统计局---主要农产品单位面积产量  分页列表查询
            }else if(this.$route.path.indexOf("/agrOutputProduct") >= 0){
                res = await agrOutputProductSelectList(obj);  //统计局---主要农产品产量  分页列表查询
            }else if(this.$route.path.indexOf("/statistTotalValue") >= 0){
                res = await statistTotalValueSelectList(obj);  //统计局---农林牧渔总产值  分页列表查询
            }else if(this.$route.path.indexOf("/liveProductValue") >= 0 || this.$route.path.indexOf("/rearProductValue") >= 0){
                res = await liveProductValueSelectList(obj);  //统计局---畜产品产量   和 畜牧股--畜产品产量 分页列表查询
            }else if(this.$route.path.indexOf("/landUseLeaveOne") >= 0){
                res = await landUseLeaveOneSelectList(obj);  //国土局---农村土地利用现状一级分类面积汇总表  分页列表查询
            }else if(this.$route.path.indexOf("/landUseLeaveTwo") >= 0){
                res = await landUseLeaveTwoSelectList(obj);  //国土局---农村土地利用现二级分类面积汇总表  分页列表查询
            }else if(this.$route.path.indexOf("/newsTrends") >= 0){
                res = await newsTrendsSelectList(obj);  //新闻动态  分页列表查询
            }else if(this.$route.path.indexOf("/dynamic") >= 0){
                res = await dynamicSelectList(obj);  //园区动态  分页列表查询
            }else if(this.$route.path.indexOf("/customForm") >= 0){
                res = await customFormSelectList(obj);  //自定义表单  分页列表查询
            }else if(this.$route.path.indexOf("/pigBree") >= 0){
                res = await pigBreedSelectList(obj);  //畜牧股---生猪养殖  分页列表查询
            }else if(this.$route.path.indexOf("/breedingCostData") >= 0){
                res = await breedingCostDataList(obj);  //畜牧股---养殖成本  分页列表查询
            }else if(this.$route.path.indexOf("/muXuYangZhi") >= 0){
                res = await muXuYangZhiList(obj);  //畜牧股---牧畜养殖  分页列表查询
                res.data.entitys.records.forEach(item => {
                    item.JQCL_out = item.chickenOutColumn + item.duckOutColumn + item.gooseOutColumn
                    item.JQCL_in = item.chickenExistColumn + item.duckExistColumn + item.gooseExistColumn
                })
            }else if(this.$route.path.indexOf("/reformBusinessEntity") >= 0){
                res = await managementSubjectList(obj);  //农村改革与服务体系股---经营主体  分页列表查询
            }else if(this.$route.path.indexOf("/reformEnterpriseQuality") >= 0){
                res = await threePoneBList(obj);  //农村改革与服务体系股---三品一标  分页列表查询
            }else if(this.$route.path.indexOf("/livableProjectManage") >= 0){
                res = await livableProjectManageList(obj);  //宜居乡村---项目管理  分页列表查询
            }else if(this.$route.path.indexOf("/livableVillageData") >= 0){
                res = await ruralDataList(obj);  //宜居乡村---乡村数据  分页列表查询
            }else if(this.$route.path.indexOf("/policyPesticideBan") >= 0){
                res = await noPesticidesList(obj);  //政策法规---禁用农药  分页列表查询
            }else if(this.$route.path.indexOf("/areaFoodPlant") >= 0){
                res = await foodPlantAreaList(obj);  //农经股---粮食作物播种面积  分页列表查询
                res.data.entitys.records.forEach(item => {
                    item.grainTotalArea = item.grainBarley + item.grainBroomcorn + item.grainBuckwheat + item.grainCorn + item.grainOther +
                                      item.grainMillet + item.grainOat + item.grainRice + item.grainWheatSpring + item.grainWheatWinter
                    item.beanTotalArea = item.beanAzuki + item.beanMung + item.beanSoya + item.beanOther
                    item.tubersTotalArea = item.tuberPotato + item.tuberYam
                })
            }else if(this.$route.path.indexOf("/yieldFoodPlant") >= 0){
                res = await foodPlantYieldList(obj);  //农经股---粮食作物产量  分页列表查询
                res.data.entitys.records.forEach(item => {
                    item.grainTotalYield = item.grainBarley + item.grainBroomcorn + item.grainBuckwheat + item.grainCorn + item.grainOther +
                                      item.grainMillet + item.grainOat + item.grainRice + item.grainWheatSpring + item.grainWheatWinter
                    item.beanTotalYield = item.beanAzuki + item.beanMung + item.beanSoya + item.beanOther
                    item.tubersTotalYield = item.tuberPotato + item.tuberYam
                })
            }else if(this.$route.path.indexOf("/unitFoodPlant") >= 0){
                res = await foodPlantUtilList(obj);  //农经股---粮食作物单产  分页列表查询
                res.data.entitys.records.forEach(item => {
                    item.grainTotalUtil = item.grainBarley + item.grainBroomcorn + item.grainBuckwheat + item.grainCorn + item.grainOther +
                                      item.grainMillet + item.grainOat + item.grainRice + item.grainWheatSpring + item.grainWheatWinter
                    item.beanTotalUtil = item.beanAzuki + item.beanMung + item.beanSoya + item.beanOther
                    item.tubersTotalUtil = item.tuberPotato + item.tuberYam
                })
            }else if(this.$route.path.indexOf("/areaEconomicsPlant") >= 0){
                res = await economicsPlantAreaList(obj);  //农经股---经济作物面积  分页列表查询
                res.data.entitys.records.forEach(item => {
                    item.oilTotalArea = item.oilPeanut + item.oilRapeseed + item.oilSesame + item.oilSesameHu + item.oilSunflower
                    item.cottonTotalArea = item.cotton
                    item.hempTotalArea = item.linenFlax + item.linenHemp + item.linenJute + item.linenOther + item.linenRamee
                    item.sugarTotalArea = item.sugarBeet + item.sugarCane
                    item.tobaccoTotalArea = item.tobacco
                    item.medicineTotalArea = item.tcmGinseng + item.tcmLiquorice + item.tcmLycium
                    item.vegetablesTotalArea = item.veggieCelery + item.veggieSpinach + item.veggieRape + item.veggieCabbage + item.veggieRepollo + 
                                           item.veggieRadish + item.veggieMustard + item.veggieCarrot + item.veggieGinger + item.veggiePumpkin + 
                                           item.veggieWinterMelon + item.veggieCuke + item.veggieCowpea + item.veggieKidneyBean + item.veggiePepper + 
                                           item.veggieTomato + item.veggieEggplant + item.veggieLeeks + item.veggieGarlic + item.veggieLotusRoot + 
                                           item.fungusBlack + item.fungusMushroom + item.fungusShiitake
                    item.melonTotalArea = item.melonBerry + item.melonMusk + item.melonOther + item.melonWater
                })
            }else if(this.$route.path.indexOf("/yieldEconomicsPlant") >= 0){
                res = await economicsPlantYieldList(obj);  //农经股---经济作物产量  分页列表查询
                res.data.entitys.records.forEach(item => {
                    item.oilTotalYield = item.oilPeanut + item.oilRapeseed + item.oilSesame + item.oilSesameHu + item.oilSunflower
                    item.cottonTotalYield = item.cotton
                    item.hempTotalYield = item.linenFlax + item.linenHemp + item.linenJute + item.linenOther + item.linenRamee
                    item.sugarTotalYield = item.sugarBeet + item.sugarCane
                    item.tobaccoTotalYield = item.tobacco
                    item.medicineTotalYield = item.tcmGinseng + item.tcmLiquorice + item.tcmLycium
                    item.vegetablesTotalYield = item.veggieCelery + item.veggieSpinach + item.veggieRape + item.veggieCabbage + item.veggieRepollo + 
                                           item.veggieRadish + item.veggieMustard + item.veggieCarrot + item.veggieGinger + item.veggiePumpkin + 
                                           item.veggieWinterMelon + item.veggieCuke + item.veggieCowpea + item.veggieKidneyBean + item.veggiePepper + 
                                           item.veggieTomato + item.veggieEggplant + item.veggieLeeks + item.veggieGarlic + item.veggieLotusRoot + 
                                           item.fungusBlack + item.fungusMushroom + item.fungusShiitake
                    item.melonTotalYield = item.melonBerry + item.melonMusk + item.melonOther + item.melonWater
                })
            }else if(this.$route.path.indexOf("/unitEconomicsPlant") >= 0){
                res = await economicsPlantUtilList(obj);  //农经股---经济作物单产  分页列表查询
                res.data.entitys.records.forEach(item => {
                    item.oilTotalUtil = item.oilPeanut + item.oilRapeseed + item.oilSesame + item.oilSesameHu + item.oilSunflower
                    item.cottonTotalUtil = item.cotton
                    item.hempTotalUtil = item.linenFlax + item.linenHemp + item.linenJute + item.linenOther + item.linenRamee
                    item.sugarTotalUtil = item.sugarBeet + item.sugarCane
                    item.tobaccoTotalUtil = item.tobacco
                    item.medicineTotalUtil = item.tcmGinseng + item.tcmLiquorice + item.tcmLycium
                    item.vegetablesTotalUtil = item.veggieCelery + item.veggieSpinach + item.veggieRape + item.veggieCabbage + item.veggieRepollo + 
                                           item.veggieRadish + item.veggieMustard + item.veggieCarrot + item.veggieGinger + item.veggiePumpkin + 
                                           item.veggieWinterMelon + item.veggieCuke + item.veggieCowpea + item.veggieKidneyBean + item.veggiePepper + 
                                           item.veggieTomato + item.veggieEggplant + item.veggieLeeks + item.veggieGarlic + item.veggieLotusRoot + 
                                           item.fungusBlack + item.fungusMushroom + item.fungusShiitake
                    item.melonTotalUtil = item.melonBerry + item.melonMusk + item.melonOther + item.melonWater
                })
            }else if(this.$route.path.indexOf("/townPlantArea") >= 0){
                res = await townPlantAreaList(obj);  //农经股---各乡镇种植面积  分页列表查询
            }else if(this.$route.path.indexOf("/seedEnterprise") >= 0){
                res = await seedEnterpriseList(obj);  //种植业股---种子企业备案  分页列表查询
            }else if(this.$route.path.indexOf("/agriculturalProduction") >= 0){
                res = await agriculturalProductionList(obj);  //种植业股---农业生产条件  分页列表查询
                res.data.entitys.records.forEach(item => {
                    item.endYearArea = item.landPaddy + item.landWater + item.landDry
                })
            }else if(this.$route.path.indexOf("/landLevel") >= 0){
                res = await landLevelList(obj);  //种植业股---耕地地力等级  分页列表查询
            }else if(this.$route.path.indexOf("/agriculturalRecycling") >= 0){
                res = await agriculturalRecyclingList(obj);  //种植业股---农膜覆盖及回收利用情况  分页列表查询
            }else if(this.$route.path.indexOf("/agriculturalStoreInfo") >= 0){
                res = await agriculturalStoreInfoList(obj);  //种植业股---农资店信息  分页列表查询
            }else if(this.$route.path.indexOf("/aquaticMachining") >= 0){
                res = await aquaticMachiningList(obj);  //渔业渔政股---水产加工  分页列表查询
                res.data.entitys.records.forEach(item => {
                    item.aquaticYieldTotal = item.freshwaterProduct + item.seawaterAlgae + item.seawaterCan + item.seawaterFeed + item.seawaterOil + 
                                             item.seawaterOther + item.seawaterFrozen + item.seawaterFrozenProcess + item.seawaterMinced + item.seawaterDry
                    item.useAquaticYieldTotal = item.processFreshwater + item.processSeawater
                    item.aquaticYearYieldTotal = item.processPrawn + item.processEel + item.processClarkii + item.processPunctate + item.processTilapia + item.processOther
                })
            }else if(this.$route.path.indexOf("/fisheriesPopulation") >= 0){
                res = await fisheriesPopulationList(obj);  //渔业渔政股---渔业人口情况  分页列表查询
                res.data.entitys.records.forEach(item => {
                    item.workingPeopleTotal = item.professFish + item.professBreed + item.professOther + item.professWoman + item.parergonMan + item.parergonWoman + 
                                              item.temporaryMan + item.temporaryWoman
                })
            }else if(this.$route.path.indexOf("/freshwaterFishingYield") >= 0){
                res = await freshwaterFishingYieldList(obj);  //渔业渔政股---淡水捕捞  分页列表查询
                res.data.entitys.records.forEach(item => {
                    item.carapaceTotal = item.shrimp + item.crab
                })
            }else if(this.$route.path.indexOf("/aquaticSeedling") >= 0){
                res = await aquaticSeedlingList(obj);  //渔业渔政股---主要水产苗种  分页列表查询
            }else if(this.$route.path.indexOf("/reservoirProduction") >= 0){
                res = await reservoirProductionList(obj);  //渔业渔政股---水库渔业生产  分页列表查询
                res.data.entitys.records.forEach(item => {
                    item.usableTotal = item.usableLarge + item.usableMiddle + item.usableSmall
                    item.farmableTotal = item.farmableLarge + item.farmableMiddle + item.farmableSmall
                    item.usedTotal = item.usedLarge + item.usedMiddle + item.usedSmall
                    item.farmedTotal = item.farmedLarge + item.farmedMiddle + item.farmedSmall
                })
            }else if(this.$route.path.indexOf("/fisheryYield") >= 0){
                res = await fisheryYieldList(obj);  //渔业渔政股  渔业产值  分页列表查询
                res.data.entitys.records.forEach(item => {
                    item.totalFish = item.marineFishing * 1 + item.mariculture * 1 + item.freshwaterFishing * 1 + item.freshwaterCultureing * 1	+ item.aquaticFry * 1
                    item.totalFishBuild = item.productsProcess * 1 + item.machineryManufactu * 1 + item.fishFeed * 1 + item.fisheryMedicine * 1 + item.architecture * 1 + item.fisheryOther * 1
                    item.totalFishService = item.productsCirculation * 1 + item.storageTransportation * 1 + item.recreationalFishery * 1 + item.other * 1
                })
            }else if(this.$route.path.indexOf("/fisheryAddYield") >= 0){
                res = await fisheryAddYieldList(obj);  //渔业渔政股  渔业增加值  分页列表查询
                res.data.entitys.records.forEach(item => {
                    item.totalFish = item.marineFishing * 1 + item.mariculture * 1 + item.freshwaterFishing * 1 + item.freshwaterCultureing * 1	+ item.aquaticFry * 1
                    item.totalFishBuild = item.productsProcess * 1 + item.machineryManufactu * 1 + item.fishFeed * 1 + item.fisheryMedicine * 1 + item.architecture * 1 + item.fisheryOther * 1
                    item.totalFishService = item.productsCirculation * 1 + item.storageTransportation * 1 + item.recreationalFishery * 1 + item.other * 1
                })
            }else if(this.$route.path.indexOf("/fisheryEnforcement") >= 0){
                res = await fisheryEnforcementList(obj);  //渔业渔政股  渔业执法情况  分页列表查询
                res.data.entitys.records.forEach(item => {
                    item.zxxd = item.cbaqZsxd * 1 + item.cjjyZsxd * 1 + item.rcjgZsxd * 1 + item.scaqZsxd * 1 + item.sylyZsxd * 1 + item.zzzybhqZsxd * 1
                    item.zfry = item.cbaqCdzfry * 1 + item.cjjyCdzfry * 1 + item.rcjgCdzfry * 1 + item.scaqCdzfry * 1 + item.sylyCdzfry * 1 + item.zzzybhqCdzfry * 1
                    item.cdcl = item.cbaqCdcl * 1 + item.cjjyCdcl * 1 + item.rcjgCdcl * 1 + item.scaqCdcl * 1 + item.sylyCdcl * 1 + item.zzzybhqCdcl * 1
                    item.chyhw = item.cbaqChyhw * 1 + item.cjjyChyhw * 1 + item.rcjgChyhw * 1 + item.scaqChyhw * 1 + item.sylyChyhw * 1 + item.zzzybhqChyhw * 1
                    item.wfyj = item.cbaqSjwfyj * 1 + item.cjjySjwfyj * 1 + item.rcjgSjwfyj * 1 + item.scaqSjwfyj * 1 + item.sylySjwfyj * 1 + item.zzzybhqSjwfyj * 1
                    item.xzaj = item.cbaqXzaj * 1 + item.cjjyXzaj * 1 + item.rcjgXzaj * 1 + item.scaqXzaj * 1 + item.sylyXzaj * 1 + item.zzzybhqXzaj * 1
                    item.xzcf = item.cbaqXzcf * 1 + item.cjjyXzcf * 1 + item.rcjgXzcf * 1 + item.scaqXzcf * 1 + item.sylyXzcf * 1 + item.zzzybhqXzcf * 1
                    item.fk = item.cbaqFk * 1 + item.cjjyFk * 1 + item.rcjgFk * 1 + item.scaqFk * 1 + item.sylyFk * 1 + item.zzzybhqFk * 1
                    item.xzja = item.cbaqXzja * 1 + item.cjjyXzja * 1 + item.rcjgXzja * 1 + item.scaqXzja * 1 + item.sylyXzja * 1 + item.zzzybhqXzja * 1
                    item.ysaj = item.cbaqYsaj * 1 + item.cjjyYsaj * 1 + item.rcjgYsaj * 1 + item.scaqYsaj * 1 + item.sylyYsaj * 1 + item.zzzybhqYsaj * 1
                    item.xsla = item.cbaqXsla * 1 + item.cjjyXsla * 1 + item.rcjgXsla * 1 + item.scaqXsla * 1 + item.sylyXsla * 1 + item.zzzybhqXsla * 1
                    item.xscf = item.cbaqXscf * 1 + item.cjjyXscf * 1 + item.rcjgXscf * 1 + item.scaqXscf * 1 + item.sylyXscf * 1 + item.zzzybhqXscf * 1
                    item.xsja = item.cbaqXsja * 1 + item.cjjyXsja * 1 + item.rcjgXsja * 1 + item.scaqXsja * 1 + item.sylyXsja * 1 + item.zzzybhqXsja * 1
                })
            }else if(this.$route.path.indexOf("/veterinaryStation") >= 0){
                res = await veterinaryStationList(obj);  //兽医兽药---兽医站  分页列表查询
            }else if(this.$route.path.indexOf("/veterinaryMedicineEnterprise") >= 0){
                res = await veterinaryMedicineEnterpriseList(obj);  //兽医兽药---兽药经营企业  分页列表查询
            }else if(this.$route.path.indexOf("/veterinaryHospital") >= 0){
                res = await veterinaryHospitalList(obj);  //兽医兽药---诊疗机构  分页列表查询
            }else if(this.$route.path.indexOf("/pigSlaughterhouse") >= 0){
                res = await pigSlaughterhouseList(obj);  //兽医兽药---生猪定点屠宰场  分页列表查询
            }else if(this.$route.path.indexOf("/NJJYZT") >= 0){
                res = await NJJYZTList(obj);  //农业机械化与设施股---农机经营主体  分页列表查询
            }else if(this.$route.path.indexOf("/havePower") >= 0){
                res = await havePowerList(obj);  //农业机械化与设施股---农机拥有量-动力  分页列表查询
            }else if(this.$route.path.indexOf("/haveCount") >= 0){
                res = await haveCountList(obj);  //农业机械化与设施股---农机拥有量-数量  分页列表查询
                res.data.entitys.records.forEach(item => {
                    item.plantMechanicsTotal = item.tillageCultivator + item.tillageSubsoiler + item.tillageTiller + item.tillageHarrow	+
                                               item.tillagePlow + item.tillageFilm + item.tillageRotary + item.tillageCombine + item.planterNoTill + 
                                               item.planterRice + item.planterPrecision	 + item.planterTransplanter + item.planterFertilizer + 
                                               item.planterPaddy + item.waterPump + item.waterMachine + item.manageField + item.managePlantProtect + 
                                               item.trimmerTea + item.trimmerFruit + item.harvesterPaddy + item.harvesterCorn + item.harvesterSoybean + 
                                               item.harvesterRapeseed + item.harvesterPotato + item.harvesterPeanut + item.harvesterSugarbeet + item.harvesterSugarcane + 
                                               item.harvesterCotton + item.harvesterVegetable + item.harvesterTea + item.harvesterGreenfeed + item.harvesterGrass + 
                                               item.harvesterStraw + item.bander + item.thresher + item.dryerGrain + item.dryerFruit + item.seedProcess + 
                                               item.freshKeep
                    item.agricultureMechanicsTotal = item.engineDiesel + item.motorElectric + item.processorFood + item.processorOil + 
                                                     item.processorCotton + item.processorFruit + item.processorTea
                    item.animalMechanicsTotal = item.processorFeed + item.machineFeed + item.processorProduct
                    item.waterMechanicsTotal = item.machineOxygen + item.machineFish + item.machineAutofeed
                    item.buildMechanicsTotal = item.machineBasic
                    item.tractorTotal = item.small + item.middle + item.large
                })
            }else if(this.$route.path.indexOf("/workSituation") >= 0){
                res = await workSituationList(obj);  //农业机械化与设施股---农机作业情况  分页列表查询
                res.data.entitys.records.forEach(item => {
                    item.njzyTotal = item.ploughArea + item.seedArea + item.irrigationArea + item.protectArea + item.harvestArea
                    item.tljTotal = item.small + item.middle + item.large
                    item.zyzwTotal = item.wheatHarvestArea + item.wheatPloughArea + item.wheatSeedArea + 
                                     item.riceHarvestArea + item.ricePloughArea + item.riceSeedArea + 
                                     item.cornHarvestArea + item.cornPloughArea + item.cornSeedArea + 
                                     item.soybeanHarvestArea + item.soybeanPloughArea + item.soybeanSeedArea + 
                                     item.rapeHarvestArea + item.rapePloughArea + item.rapeSeedArea + 
                                     item.potatoHarvestArea + item.potatoPloughArea + item.potatoSeedArea + 
                                     item.cottonHarvestArea + item.cottonPloughArea + item.cottonSeedArea + 
                                     item.peanutHarvestArea + item.peanutPloughArea + item.peanutSeedArea + 
                                     item.fruitFertilizeArea + item.fruitHarvestYield + item.fruitPloughArea + item.fruitProtectArea + item.fruitPruneArea + item.fruitTransportYield + 
                                     item.teaFertilizeArea + item.teaHarvestYield + item.teaPloughArea + item.teaProtectArea + item.teaPruneArea + item.teaTransportYield
                    item.dxnjTotal = item.areaDeepPlough + item.areaNoTillage + item.areaPrecise + item.areaPrune + 
                                     item.areaDeepFertilize + item.areaFilm + item.areaWater + item.areaGrass + 
                                     item.areaStraw + item.areaStrawBind + item.areaAircraft + item.areaStrawSilage
                    item.njshTotal = item.areaService + item.areaManage + item.areaPloughAcross + item.areaSeedAcross + item.areaHarvestAcross
                    item.cjgTotal =  item.yieldOutFood + item.yieldOutOil + item.yieldCleanVegetable + item.yieldCleanFruit + item.yieldCleanCotton + 
                                     item.yieldCleanOther + item.yieldQualityFood + item.yieldQualityFruit + item.yieldQualityOil + item.yieldQualityCotton + 
                                     item.yieldQualityVegetable + item.yieldQualityTea + item.yieldQualityOther
                    item.scyzTotal = item.areaFarm + item.areaPlant + item.areaHarvest + item.areaIrrigation + item.areaControl
                })
            }else if(this.$route.path.indexOf("/serviceInformation") >= 0){
                res = await serviceInformationList(obj);  //农业机械化与设施股---农机服务情况  分页列表查询
                res.data.entitys.records.forEach(item => {
                    item.organizationCount = item.serviceCount + item.householdCount
                    item.organizationNum = item.servicePopulation + item.householdPopulation
                    item.investment = item.science + item.extension + item.supervisor + item.docimasia + item.construction + item.purchase
                    item.income = item.revenueService + item.revenueOther
                })
            }else if(this.$route.path.indexOf("/fruitAndVegetable") >= 0){
                res = await fruitAndVegetableList(obj);  //经作站---乡镇果蔬标准化基地  分页列表查询
            }else if(this.$route.path.indexOf("/maiDongManagement") >= 0){
                res = await maiDongManagementList(obj);  //经作站---麦冬经营主体  分页列表查询
            }else if(this.$route.path.indexOf("/maiDongMainArea") >= 0){
                res = await maiDongMainAreaList(obj);  //经作站---麦冬主产区面积  分页列表查询
            }else if(this.$route.path.indexOf("/maiDongProducts") >= 0){
                res = await maiDongProductsList(obj);  //经作站---麦冬加工产品  分页列表查询
            }else if(this.$route.path.indexOf("/maiDongYield") >= 0){
                res = await maiDongYieldList(obj);  //经作站---麦冬产量  分页列表查询
            }else if(this.$route.path.indexOf("/animalDisease") >= 0){
                res = await animalDiseaseList(obj);  //经作站---动物疫病预防控制中心  动物疫病防控
            }else if(this.$route.path.indexOf("/diseaseDescribe") >= 0){
                res = await diseaseDescribeList(obj);  //植保站---病害描述  动物疫病防控
            }else if(this.$route.path.indexOf("/preventionAndCure") >= 0){
                res = await preventionAndCureList(obj);  //植保站---  病虫害防止趋势
            }else if(this.$route.path.indexOf("/monitoringPointData") >= 0){
                res = await monitoringPointDataList(obj);  //植保站---  监测点数据
            }else if(this.$route.path.indexOf("/industryLeavePoor") >= 0){
                res = await industryLeavePoorList(obj);  //粮油站---  产业脱贫
            }else if(this.$route.path.indexOf("/newsDynamic") >= 0){
                res = await newsDynamicList(obj);  //县委秘书办---  新闻动态
                console.log(res)
                res.data.entitys.records.forEach(item => {
                    if(item.dataType == "1"){
                        item.dataType_num = '政策信息'
                    }else if(item.dataType == "2"){
                        item.dataType_num = '农业新闻'
                    }else if(item.dataType == "3"){
                        item.dataType_num = '农技技术'
                    }
                    
                })
            }else if(this.$route.path.indexOf("/bannerImgMaintain") >= 0){
                res = await bannerImgMaintainList(obj);  //县委秘书办---  banner
            }else if(this.$route.path.indexOf("/enforcementAccount") >= 0){
                res = await enforcementAccountList(obj);  //执法大队---  执法台账
            }else if(this.$route.path.indexOf("/pesticidesBusiness") >= 0){
                res = await pesticidesBusinessList(obj);  //执法大队---  农药经营主体
            }
            //永清新增模块
            else if(this.$route.path.indexOf("/orchardArea") >= 0){
                res = await orchardAreaList(obj);  //种植业股---  果园面积
            }else if(this.$route.path.indexOf("/feedEnterprise") >= 0){
                res = await feedEnterpriseList(obj);  //饲料办---  饲料企业
            }else if(this.$route.path.indexOf("/freshFruitYield") >= 0){
                res = await freshFruitYieldList(obj);  //种植业股---  鲜果产量
            }else if(this.$route.path.indexOf("/forestryProduct") >= 0){
                res = await forestryProductList(obj);  //种植业股---  林业生产
            }else if(this.$route.path.indexOf("/CZ_NLMY") >= 0){
                res = await CZ_NLMYList(obj);  //种植业股---  农林牧渔产值
            }else if(this.$route.path.indexOf("/ZJZ_NLMY") >= 0){
                res = await ZJZ_NLMYList(obj);  //种植业股---  农林牧渔增加值
            }else if(this.$route.path.indexOf("/cultivatedLandArea") >= 0){
                res = await cultivatedLandAreaList(obj);  //种植业股---  耕地面积
            }






            
            if(res.data.status== 0){
                this.tableData =  res.data.entitys;
                this.tableData.records.forEach(item =>{
                    if(item.isCheck == 0 || item.isCheck == null){
                        item.isCheck = '待审核'
                    }else if(item.isCheck == 1  ){
                        item.isCheck = '已审核'
                    }else if(item.isCheck == 2){
                        item.isCheck = '审核未通过'
                    }
                })
                this.filters.total = this.tableData.total; //数据总数
                this.filters.showNum = res.data.entitys.records.length; //显示数据条数
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
            this.listLoading = false;
        },
        //删除接口调用
        async deleteItems(ids){
            this.listLoading = true;
            if(this.$route.path.indexOf("/occurrenceAndArea") >= 0){
                 if(ids instanceof Array == false){ 
                    ids = ids.split()
                }
            }else{
                if(ids instanceof Array == false){ 
                    ids = ids.toString().split().map(Number)
                }
            }
            
            
            let deletRes = '';
            if(this.$route.path.indexOf("/qualityOrganicProducts") >= 0 || this.$route.path.indexOf("/doOrganicFoodEnter") >= 0){
                deletRes = await qualityOrganicDelete(ids); //质检办--有机食品企业产品数据 ,产业办--有机食品企业产品数据 删除
            }else if(this.$route.path.indexOf("/qualityPollutionProducts") >= 0 || this.$route.path.indexOf("/doHarmlessProductsEnter") >= 0) {
                deletRes = await qualityPollutionDeleteItems(ids); //质检办--无公害企业产品数据  ，产业办--无公害企业产品数据删除
            }else if(this.$route.path.indexOf("/qualityDetectionOfAgricultural") >= 0) { 
                deletRes = await qualityProductCheckDelete(ids); //质检办--农产品农残检测情况信息表  删除
            }else if(this.$route.path.indexOf("/qualityAgriculturalCheckStation") >= 0) { 
                deletRes = await qualityCheckStationDelete(ids); //质检办--农产品检测站信息  删除
            }else if(this.$route.path.indexOf("/qualityGreenfoodEnterprises") >= 0 || this.$route.path.indexOf("/doGreenFoodValue") >= 0){ 
                deletRes = await qualityGreenFoodDelete(ids);  //质检办--绿色食品企业产品数据 ，产业办--绿色食品企业产品数据  删除
            }else if(this.$route.path.indexOf("/occurrenceAndArea") >= 0){
                deletRes = await occurrenceDelete(ids);  //植保站--虫鼠害发生和防治面积   删除
            }else if(this.$route.path.indexOf("/basicInformationOfFishery") >= 0){
                deletRes = await fisheryBasicInfoDelete(ids);  //渔业局--渔业生产基本情况   删除
            }else if(this.$route.path.indexOf("/freshwaterProducts") >= 0){
                deletRes = await freshwaterProductsDelete(ids);  //渔业局--淡水养殖产品产量  删除
            }else if(this.$route.path.indexOf("/specialFreshwaterArea") >= 0){
                deletRes = await specialFreshDelete(ids);  //渔业局--淡水特种水产品养殖面积  删除
            }else if(this.$route.path.indexOf("/basicSituationOfPoints") >= 0){
                deletRes = await basicPointsDelete(ids);  //土肥站---监测点基本情况  删除
            }else if(this.$route.path.indexOf("/inputUsage") >= 0 || this.$route.path.indexOf("/statistInputUsage")>=0 ){
                deletRes = await inputUsageDelete(ids);  //土肥站---投入品使用情况, 统计局--投入品使用情况  删除
            }else if(this.$route.path.indexOf("/farmlandQuality") >= 0 ){
                deletRes = await farmlandQualityDelete(ids);  //土肥站--- 监测点耕地质量数据 删除
            }else if(this.$route.path.indexOf("/agriculturalMachineryShip") >= 0 || this.$route.path.indexOf("/statistMachineryList") >= 0){
                deletRes = await agriculturalMachineryDelete(ids);  //农机局---农机拥有量 和 统计局--农机拥有量  删除
            }else if(this.$route.path.indexOf("/landContractData") >= 0){
                deletRes = await landContractDataDelete(ids);  //农经办---土地承包数据  删除
            }else if(this.$route.path.indexOf("/doCropSownArea") >= 0 || this.$route.path.indexOf("/statistCropSownArea") >= 0 ){
                deletRes = await doCropSownAreaDelete(ids);  //农经办---农作物播种面积,统计局---农作物播种面积  删除
            }else if(this.$route.path.indexOf("/doAgriculturalOutputValue") >= 0){
                deletRes = await doAgriculturalOutputValueDelete(ids);  //农经办---农产品企业产值  删除
            }else if(this.$route.path.indexOf("/doBusinessEntity") >= 0 
                    || this.$route.path.indexOf("/marketBusinessEntity") >= 0 
                    ||  this.$route.path.indexOf("/industrialBusinessEntity") >= 0
                    ||  this.$route.path.indexOf("/rearBusinessEntity") >= 0
                ){
                deletRes = await doBusinessEntityDelete(ids);  //农经办---经营主体数据 和商业局--经营主体 和工商局-经营主体 和 畜牧股--经营主体 删除
            }else if(this.$route.path.indexOf("/agriculturalMarketInfo") >= 0){
                deletRes = await agriculturalMarketInfoDelete(ids);  //商业局---农产品批发市场信息  删除
            }else if(this.$route.path.indexOf("/agriculturalPriceData") >= 0){
                deletRes = await agriculturalPriceDelete(ids);  //商业局---农产品交易价格数据  删除
            }else if(this.$route.path.indexOf("/agrYieldUnitArea") >= 0){
                deletRes = await agrYieldUnitAreaDelete(ids);  //统计局---主要农产品单位面积产量  删除
            }else if(this.$route.path.indexOf("/agrOutputProduct") >= 0){
                deletRes = await agrOutputProductDelete(ids);  //统计局---主要农产品产量  删除
            }else if(this.$route.path.indexOf("/statistTotalValue") >= 0){
                deletRes = await statistTotalValueDelete(ids);  //统计局---农林牧渔总产值  删除
            }else if(this.$route.path.indexOf("/liveProductValue") >= 0 || this.$route.path.indexOf("/rearProductValue") >= 0){
                deletRes = await liveProductValueDelete(ids);  //统计局---畜产品产量   和 畜牧股--畜产品产量 删除
            }else if(this.$route.path.indexOf("/landUseLeaveOne") >= 0){
                deletRes = await landUseLeaveOneDelete(ids);  //国土局---农村土地利用现状一级分类面积汇总表  删除
            }else if(this.$route.path.indexOf("/landUseLeaveTwo") >= 0){
                deletRes = await landUseLeaveTwoDelete(ids);  //国土局---农村土地利用现二级分类面积汇总表  删除
            }else if(this.$route.path.indexOf("/newsTrends") >= 0){
                deletRes = await newsTrendsDelete(ids);  //新闻动态  删除
            }else if(this.$route.path.indexOf("/dynamic") >= 0){
                deletRes = await dynamicDelete(ids);  //园区动态  删除
            }else if(this.$route.path.indexOf("/customForm") >= 0){
                deletRes = await customFormDelete(ids);  //自定义表单  删除
            }else if(this.$route.path.indexOf("/pigBree") >= 0){
                deletRes = await pigBreedDelete(ids);  //畜牧股----生猪养殖  删除managementSubjectDelete
            }else if(this.$route.path.indexOf("/breedingCostData") >= 0){
                deletRes = await breedingCostDataDelete(ids);  //畜牧股----养殖成本  删除managementSubjectDelete
            }else if(this.$route.path.indexOf("/muXuYangZhi") >= 0){
                deletRes = await muXuYangZhiDelete(ids);  //畜牧股----牧畜养殖  删除managementSubjectDelete
            }else if(this.$route.path.indexOf("/reformBusinessEntity") >= 0){
                deletRes = await managementSubjectDelete(ids);  //农村改革与服务体系股----经营主体  删除
            }else if(this.$route.path.indexOf("/reformEnterpriseQuality") >= 0){
                deletRes = await threePoneBDelete(ids);  //农村改革与服务体系股----三品一标  删除
            }else if(this.$route.path.indexOf("/livableProjectManage") >= 0){
                deletRes = await livableProjectManageDelete(ids);  //----宜居乡村---项目管理  删除
            }else if(this.$route.path.indexOf("/livableVillageData") >= 0){
                deletRes = await ruralDataDelete(ids);  //----宜居乡村---项目管理  删除
            }else if(this.$route.path.indexOf("/policyPesticideBan") >= 0){
                deletRes = await noPesticidesDelete(ids);  //----政策法规---禁用农药  删除
            }else if(this.$route.path.indexOf("/areaFoodPlant") >= 0){
                deletRes = await foodPlantAreaDelete(ids);  //----农经股---粮食作物播种面积  删除
            }else if(this.$route.path.indexOf("/yieldFoodPlant") >= 0){
                deletRes = await foodPlantYieldDelete(ids);  //----农经股---粮食作物产量  删除
            }else if(this.$route.path.indexOf("/unitFoodPlant") >= 0){
                deletRes = await foodPlantUtilDelete(ids);  //----农经股---粮食作物单产  删除
            }else if(this.$route.path.indexOf("/areaEconomicsPlant") >= 0){
                deletRes = await economicsPlantAreaDelete(ids);  //----农经股---经济作物面积  删除
            }else if(this.$route.path.indexOf("/yieldEconomicsPlant") >= 0){
                deletRes = await economicsPlantYieldDelete(ids);  //----农经股---经济作物产量  删除
            }else if(this.$route.path.indexOf("/unitEconomicsPlant") >= 0){
                deletRes = await economicsPlantUtilDelete(ids);  //----农经股---经济作物单产  删除
            }else if(this.$route.path.indexOf("/townPlantArea") >= 0){
                deletRes = await townPlantAreaDelete(ids);  //----农经股---各乡镇种植面积  删除
            }else if(this.$route.path.indexOf("/seedEnterprise") >= 0){
                deletRes = await seedEnterpriseDelete(ids);  //----种植业股---种子企业备案  删除
            }else if(this.$route.path.indexOf("/agriculturalProduction") >= 0){
                deletRes = await agriculturalProductionDelete(ids);  //----种植业股---农业生产条件  删除
            }else if(this.$route.path.indexOf("/landLevel") >= 0){
                deletRes = await landLevelDelete(ids);  //----种植业股---耕地地力等级  删除
            }else if(this.$route.path.indexOf("/agriculturalRecycling") >= 0){
                deletRes = await agriculturalRecyclingDelete(ids);  //----种植业股---农膜覆盖及回收利用情况  删除
            }else if(this.$route.path.indexOf("/agriculturalStoreInfo") >= 0){
                deletRes = await agriculturalStoreInfoDelete(ids);  //----种植业股---农资店信息  删除
            }else if(this.$route.path.indexOf("/aquaticMachining") >= 0){
                deletRes = await aquaticMachiningDelete(ids);  //----渔业渔政股---水产加工  删除
            }else if(this.$route.path.indexOf("/fisheriesPopulation") >= 0){
                deletRes = await fisheriesPopulationDelete(ids);  //----渔业渔政股---渔业人口情况  删除
            }else if(this.$route.path.indexOf("/freshwaterFishingYield") >= 0){
                deletRes = await freshwaterFishingYieldDelete(ids);  //----渔业渔政股---淡水捕捞产量  删除
            }else if(this.$route.path.indexOf("/aquaticSeedling") >= 0){
                deletRes = await aquaticSeedlingDelete(ids);  //----渔业渔政股---主要水产苗种  删除
            }else if(this.$route.path.indexOf("/reservoirProduction") >= 0){
                deletRes = await reservoirProductionDelete(ids);  //----渔业渔政股---水库渔业生产  删除
            }else if(this.$route.path.indexOf("/fisheryYield") >= 0){
                deletRes = await fisheryYieldDelete(ids);  //----渔业渔政股---渔业产值  删除
            }else if(this.$route.path.indexOf("/fisheryAddYield") >= 0){
                deletRes = await fisheryAddYieldDelete(ids);  //----渔业渔政股---渔业增加值  删除
            }else if(this.$route.path.indexOf("/fisheryEnforcement") >= 0){
                deletRes = await fisheryEnforcementDelete(ids);  //----渔业渔政股---渔业执法情况  删除
            }else if(this.$route.path.indexOf("/veterinaryStation") >= 0){
                deletRes = await veterinaryStationDelete(ids);  //----兽医兽药股---兽医站  删除
            }else if(this.$route.path.indexOf("/veterinaryMedicineEnterprise") >= 0){
                deletRes = await veterinaryMedicineEnterpriseDelete(ids);  //----兽医兽药股---兽药经营企业  删除
            }else if(this.$route.path.indexOf("/veterinaryHospital") >= 0){
                deletRes = await veterinaryHospitalDelete(ids);  //----兽医兽药股---诊疗机构  删除
            }else if(this.$route.path.indexOf("/pigSlaughterhouse") >= 0){
                deletRes = await pigSlaughterhouseDelete(ids);  //----兽医兽药股---生猪定点屠宰场  删除
            }else if(this.$route.path.indexOf("/NJJYZT") >= 0){
                deletRes = await NJJYZTDelete(ids);  //----农业机械化与设施股---农机经营主体  删除
            }else if(this.$route.path.indexOf("/havePower") >= 0){
                deletRes = await havePowerDelete(ids);  //----农业机械化与设施股---农机拥有量-动力  删除
            }else if(this.$route.path.indexOf("/haveCount") >= 0){
                deletRes = await haveCountDelete(ids);  //----农业机械化与设施股---农机拥有量-数量  删除
            }else if(this.$route.path.indexOf("/workSituation") >= 0){
                deletRes = await workSituationDelete(ids);  //----农业机械化与设施股---农机作业情况  删除
            }else if(this.$route.path.indexOf("/serviceInformation") >= 0){
                deletRes = await serviceInformationDelete(ids);  //----农业机械化与设施股---农机服务情况  删除
            }else if(this.$route.path.indexOf("/fruitAndVegetable") >= 0){
                deletRes = await fruitAndVegetableDelete(ids);  //----经作站=---乡镇果蔬标准化基地  删除
            }else if(this.$route.path.indexOf("/maiDongManagement") >= 0){
                deletRes = await maiDongManagementDelete(ids);  //----经作站=---麦冬经营主体  删除
            }else if(this.$route.path.indexOf("/maiDongMainArea") >= 0){
                deletRes = await maiDongMainAreaDelete(ids);  //----经作站=---麦冬主产区面积  删除
            }else if(this.$route.path.indexOf("/maiDongProducts") >= 0){
                deletRes = await maiDongProductsDelete(ids);  //----经作站=---麦冬加工产品  删除
            }else if(this.$route.path.indexOf("/maiDongYield") >= 0){
                deletRes = await maiDongYieldDelete(ids);  //----经作站=---麦冬产量  删除
            }else if(this.$route.path.indexOf("/animalDisease") >= 0){
                deletRes = await animalDiseaseDelete(ids);  //----动物疫病预防控制中心=---动物疫病防控  删除
            }else if(this.$route.path.indexOf("/diseaseDescribe") >= 0){
                deletRes = await diseaseDescribeDelete(ids);  //----植保站=---病害描述  删除
            }else if(this.$route.path.indexOf("/preventionAndCure") >= 0){
                deletRes = await preventionAndCureDelete(ids);  //----植保站=---病虫害防止趋势  删除
            }else if(this.$route.path.indexOf("/monitoringPointData") >= 0){
                deletRes = await monitoringPointDataDelete(ids);  //----植保站=---监测点数据  删除
            }else if(this.$route.path.indexOf("/industryLeavePoor") >= 0){
                deletRes = await industryLeavePoorDelete(ids);  //----粮油站=---产业脱贫  删除
            }else if(this.$route.path.indexOf("/newsDynamic") >= 0){
                deletRes = await newsDynamicDelete(ids);  //----县委秘书办=---新闻动态  删除
            }else if(this.$route.path.indexOf("/bannerImgMaintain") >= 0){
                deletRes = await bannerImgMaintainDelete(ids);  //----县委秘书办=---banner  删除
            }else if(this.$route.path.indexOf("/enforcementAccount") >= 0){
                deletRes = await enforcementAccountDelete(ids);  //----执法大队=---执法台账  删除
            }else if(this.$route.path.indexOf("/pesticidesBusiness") >= 0){
                deletRes = await pesticidesBusinessDelete(ids);  //----执法大队=---农药经营主体  删除
            }
            //永清新增模块
            else if(this.$route.path.indexOf("/orchardArea") >= 0){
                deletRes = await orchardAreaDelete(ids);  //----种植业股=---果园面积  删除
            }else if(this.$route.path.indexOf("/feedEnterprise") >= 0){
                deletRes = await feedEnterpriseDelete(ids);  //----饲料办=---饲料企业  删除
            }else if(this.$route.path.indexOf("/freshFruitYield") >= 0){
                deletRes = await freshFruitYieldDelete(ids);  //----种植业股=---鲜果产量  删除
            }else if(this.$route.path.indexOf("/forestryProduct") >= 0){
                deletRes = await forestryProductDelete(ids);  //----种植业股=---林业生产  删除
            }else if(this.$route.path.indexOf("/CZ_NLMY") >= 0){
                deletRes = await CZ_NLMYDelete(ids);  //----种植业股=---农林牧渔产值  删除
            }else if(this.$route.path.indexOf("/ZJZ_NLMY") >= 0){
                deletRes = await ZJZ_NLMYDelete(ids);  //----种植业股=---农林牧渔增加值  删除
            }else if(this.$route.path.indexOf("/cultivatedLandArea") >= 0){
                deletRes = await cultivatedLandAreaDelete(ids);  //----种植业股=---gdmj  删除
            }

            

            if(deletRes.data.status== 0){
                this.queryListByPage(); //删除成功后再一次查询分页列表 同步数据
            }else if(deletRes.data.status== -1 || deletRes.data.status== 500){
                this.$message({
                    message: deletRes.data.msg,
                    type: 'warning'
                })
            }else if(deletRes.data.status == -2){
                handleCofirm(deletRes.data.msg, 'warning', false).then(() => {
                    window.loginOut();
                })
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.listLoading = false;
        },

        //审核接口调用
        async auditItems (ids,status) {
            if(ids instanceof Array == false){ 
                ids = ids.toString().split().map(Number)
            }
            let auditRes = '';
            if(this.$route.path.indexOf("/qualityOrganicProducts") >= 0 || this.$route.path.indexOf("/doOrganicFoodEnter") >= 0){
                auditRes = await qualityOrganicAudit(ids,{status}); //质检办--有机食品企业产品数据 ,产业办--有机食品企业产品数据 审核
            }else if(this.$route.path.indexOf("/qualityPollutionProducts") >= 0 || this.$route.path.indexOf("/doHarmlessProductsEnter") >= 0 ) { 
                auditRes = await qualityPollutionAudit(ids,{status}); //质检办--无公害企业产品数据 ，产业办--无公害企业产品数据  审核
            }else if(this.$route.path.indexOf("/qualityDetectionOfAgricultural") >= 0) { 
                auditRes = await qualityProductCheckAudit(ids,{status}); //质检办--农产品农残检测情况信息表  审核
            }else if(this.$route.path.indexOf("/qualityAgriculturalCheckStation") >= 0) { 
                auditRes = await qualityCheckStationAudit(ids,{status}); //质检办--农产品检测站信息  审核
            }else if(this.$route.path.indexOf("/qualityGreenfoodEnterprises") >= 0 || this.$route.path.indexOf("/doGreenFoodValue") >= 0){ 
                auditRes = await qualityGreenFoodAudit(ids,{status});  //质检办--绿色食品企业产品数据  ，产业办--绿色食品企业产品数据 审核
            }else if(this.$route.path.indexOf("/occurrenceAndArea") >= 0){
                auditRes = await occurrenceAudit(ids,{status});  //植保站--虫鼠害发生和防治面积 审核
            }else if(this.$route.path.indexOf("/basicInformationOfFishery") >= 0){
                auditRes = await fisheryBasicInfoAudit(ids,{status});  //渔业局--渔业生产基本情况   审核
            }else if(this.$route.path.indexOf("/freshwaterProducts") >= 0){
                auditRes = await freshwaterProductsAudit(ids,{status});  //渔业局--淡水养殖产品产量 审核
            }else if(this.$route.path.indexOf("/specialFreshwaterArea") >= 0){
                auditRes = await specialFreshAudit(ids,{status});  //渔业局--淡水特种水产品养殖面积 审核
            }else if(this.$route.path.indexOf("/basicSituationOfPoints") >= 0){
                auditRes = await basicPointsAudit(ids,{status});  //土肥站---监测点基本情况  审核
            }else if(this.$route.path.indexOf("/inputUsage") >= 0 || this.$route.path.indexOf("/statistInputUsage")>=0 ){
                auditRes = await inputUsageAudit(ids,{status});  //土肥站---投入品使用情况, 统计局--投入品使用情况  审核
            }else if(this.$route.path.indexOf("/farmlandQuality") >= 0 ){
                auditRes = await farmlandQualityAudit(ids,{status});  //土肥站--- 监测点耕地质量数据 审核
            }else if(this.$route.path.indexOf("/agriculturalMachineryShip") >= 0 || this.$route.path.indexOf("/statistMachineryList") >= 0  ){
                auditRes = await agriculturalMachineryAudit(ids,{status});  //农机局---农机拥有量 和 统计局---农机拥有量  审核
            }else if(this.$route.path.indexOf("/landContractData") >= 0){
                auditRes = await landContractDataAudit(ids,{status});  //农经办---土地承包数据  审核
            }else if(this.$route.path.indexOf("/doCropSownArea") >= 0  || this.$route.path.indexOf("/statistCropSownArea") >= 0){
                auditRes = await doCropSownAreaAudit(ids,{status});  //农经办---农作物播种面积 和 统计局---农作物播种面积  审核
            }else if(this.$route.path.indexOf("/doAgriculturalOutputValue") >= 0){
                auditRes = await doAgriculturalOutputValueAudit(ids,{status});  //农经办---农产品企业产值  审核
            }else if(this.$route.path.indexOf("/doBusinessEntity") >= 0 
                    || this.$route.path.indexOf("/marketBusinessEntity") >= 0 
                    ||  this.$route.path.indexOf("/industrialBusinessEntity") >= 0
                    ||  this.$route.path.indexOf("/rearBusinessEntity") >= 0
                ){
                auditRes = await doBusinessEntityAudit(ids,{status});  //农经办---经营主体数据 和商业局--经营主体 和工商局-经营主体 和畜牧股-经营主体  审核
            }else if(this.$route.path.indexOf("/agriculturalMarketInfo") >= 0){
                auditRes = await agriculturalMarketInfoAudit(ids,{status});  //商业局---农产品批发市场信息  审核
            }else if(this.$route.path.indexOf("/agriculturalPriceData") >= 0){
                auditRes = await agriculturalPriceAudit(ids,{status});  //商业局---农产品交易价格数据  审核
            }else if(this.$route.path.indexOf("/agrYieldUnitArea") >= 0){
                auditRes = await agrYieldUnitAreaAudit(ids,{status});  //统计局---主要农产品单位面积产量  审核
            }else if(this.$route.path.indexOf("/agrOutputProduct") >= 0){
                auditRes = await agrOutputProductAudit(ids,{status});  //统计局---主要农产品产量  审核
            }else if(this.$route.path.indexOf("/statistTotalValue") >= 0){
                auditRes = await statistTotalValueAudit(ids,{status});  //统计局---农林牧渔总产值  审核
            }else if(this.$route.path.indexOf("/liveProductValue") >= 0 || this.$route.path.indexOf("/rearProductValue") >= 0){
                auditRes = await liveProductValueAudit(ids,{status});  //统计局---畜产品产量  和 畜牧股--畜产品产量 审核
            }else if(this.$route.path.indexOf("/landUseLeaveOne") >= 0){
                auditRes = await landUseLeaveOneAudit(ids,{status});  //国土局---农村土地利用现状一级分类面积汇总表  审核
            }else if(this.$route.path.indexOf("/landUseLeaveTwo") >= 0){
                auditRes = await landUseLeaveTwoAudit(ids,{status});  //国土局---农村土地利用现二级分类面积汇总表  审核
            }else if(this.$route.path.indexOf("/newsTrends") >= 0){
                auditRes = await newsTrendsAudit(ids,{status});  //新闻动态  审核
            }else if(this.$route.path.indexOf("/dynamic") >= 0){
                auditRes = await dynamicAudit(ids,{status});  //园区动态  审核
            }else if(this.$route.path.indexOf("/customForm") >= 0){
                auditRes = await customFormAudit(ids,{status});  //自定义表单  审核
            }else if(this.$route.path.indexOf("/pigBree") >= 0){
                auditRes = await pigBreedAudit(ids,{status});  //畜牧股----生猪养殖  审核
            }else if(this.$route.path.indexOf("/breedingCostData") >= 0){
                auditRes = await breedingCostDataAudit(ids,{status});  //畜牧股----养殖成本  审核
            }else if(this.$route.path.indexOf("/muXuYangZhi") >= 0){
                auditRes = await muXuYangZhiAudit(ids,{status});  //畜牧股----牧畜养殖  审核
            }else if(this.$route.path.indexOf("/reformBusinessEntity") >= 0){
                auditRes = await managementSubjectAudit(ids,{status});  //农村改革与服务体系股----经营主体  审核
            }else if(this.$route.path.indexOf("/reformEnterpriseQuality") >= 0){
                auditRes = await threePoneBAudit(ids,{status});  //农村改革与服务体系股----三品一标  审核
            }else if(this.$route.path.indexOf("/livableProjectManage") >= 0){
                console.log(status)
                auditRes = await livableProjectManageAudit(ids,{status});  //宜居乡村股----项目管理  审核
            }else if(this.$route.path.indexOf("/livableVillageData") >= 0){
                auditRes = await ruralDataAudit(ids,{status});  //农村改革与服务体系股----三品一标  审核
            }else if(this.$route.path.indexOf("/policyPesticideBan") >= 0){
                auditRes = await noPesticidesAudit(ids,{status});  //政策法规----禁用农药  审核
            }else if(this.$route.path.indexOf("/areaFoodPlant") >= 0){
                auditRes = await foodPlantAreaAudit(ids,{status});  //农经股----粮食作物播种面积  审核
            }else if(this.$route.path.indexOf("/yieldFoodPlant") >= 0){
                auditRes = await foodPlantYieldAudit(ids,{status});  //农经股----粮食作物产量  审核
            }else if(this.$route.path.indexOf("/unitFoodPlant") >= 0){
                auditRes = await foodPlantUtilAudit(ids,{status});  //农经股----粮食作物产量  审核
            }else if(this.$route.path.indexOf("/areaEconomicsPlant") >= 0){
                auditRes = await economicsPlantAreaAudit(ids,{status});  //农经股----经济作物面积  审核
            }else if(this.$route.path.indexOf("/yieldEconomicsPlant") >= 0){
                auditRes = await economicsPlantYieldAudit(ids,{status});  //农经股----经济作物产量  审核
            }else if(this.$route.path.indexOf("/unitEconomicsPlant") >= 0){
                auditRes = await economicsPlantUtilAudit(ids,{status});  //农经股----经济作物产量  审核
            }else if(this.$route.path.indexOf("/townPlantArea") >= 0){
                auditRes = await townPlantAreaAudit(ids,{status});  //农经股----各乡镇种植面积  审核
            }else if(this.$route.path.indexOf("/seedEnterprise") >= 0){
                auditRes = await seedEnterpriseAudit(ids,{status});  //种植业股----种子企业备案  审核
            }else if(this.$route.path.indexOf("/agriculturalProduction") >= 0){
                auditRes = await agriculturalProductionAudit(ids,{status});  //种植业股----农业生产条件  审核
            }else if(this.$route.path.indexOf("/landLevel") >= 0){
                auditRes = await landLevelAudit(ids,{status});  //种植业股----耕地地力等级  审核
            }else if(this.$route.path.indexOf("/agriculturalRecycling") >= 0){
                auditRes = await agriculturalRecyclingAudit(ids,{status});  //种植业股----农膜覆盖及回收利用情况  审核
            }else if(this.$route.path.indexOf("/agriculturalStoreInfo") >= 0){
                auditRes = await agriculturalStoreInfoAudit(ids,{status});  //种植业股----农资店信息  审核
            }else if(this.$route.path.indexOf("/aquaticMachining") >= 0){
                auditRes = await aquaticMachiningAudit(ids,{status});  //渔业渔政股----水产加工  审核
            }else if(this.$route.path.indexOf("/fisheriesPopulation") >= 0){
                auditRes = await fisheriesPopulationAudit(ids,{status});  //渔业渔政股----渔业人口情况  审核
            }else if(this.$route.path.indexOf("/freshwaterFishingYield") >= 0){
                auditRes = await freshwaterFishingYieldAudit(ids,{status});  //渔业渔政股----淡水捕捞产量  审核
            }else if(this.$route.path.indexOf("/aquaticSeedling") >= 0){
                auditRes = await aquaticSeedlingAudit(ids,{status});  //渔业渔政股----主要水产苗种  审核
            }else if(this.$route.path.indexOf("/reservoirProduction") >= 0){
                auditRes = await reservoirProductionAudit(ids,{status});  //渔业渔政股----水库渔业生产  审核
            }else if(this.$route.path.indexOf("/fisheryYield") >= 0){
                auditRes = await fisheryYieldAudit(ids,{status});  //渔业渔政股----渔业产值  审核
            }else if(this.$route.path.indexOf("/fisheryAddYield") >= 0){
                auditRes = await fisheryAddYieldAudit(ids,{status});  //渔业渔政股----渔业增加值  审核
            }else if(this.$route.path.indexOf("/fisheryEnforcement") >= 0){
                auditRes = await fisheryEnforcementAudit(ids,{status});  //渔业渔政股----渔业执法情况  审核
            }else if(this.$route.path.indexOf("/veterinaryStation") >= 0){
                auditRes = await veterinaryStationAudit(ids,{status});  //兽医兽药股----兽医站  审核
            }else if(this.$route.path.indexOf("/veterinaryMedicineEnterprise") >= 0){
                auditRes = await veterinaryMedicineEnterpriseAudit(ids,{status});  //兽医兽药股----兽药经营企业  审核
            }else if(this.$route.path.indexOf("/veterinaryHospital") >= 0){
                auditRes = await veterinaryHospitalAudit(ids,{status});  //兽医兽药股----诊疗机构  审核
            }else if(this.$route.path.indexOf("/pigSlaughterhouse") >= 0){
                auditRes = await pigSlaughterhouseAudit(ids,{status});  //兽医兽药股----生猪定点屠宰场  审核
            }else if(this.$route.path.indexOf("/NJJYZT") >= 0){
                auditRes = await NJJYZTAudit(ids,{status});  //农业机械化与设施股----农机经营主体  审核
            }else if(this.$route.path.indexOf("/havePower") >= 0){
                auditRes = await havePowerAudit(ids,{status});  //农业机械化与设施股----农机拥有量-动力  审核
            }else if(this.$route.path.indexOf("/haveCount") >= 0){
                auditRes = await haveCountAudit(ids,{status});  //农业机械化与设施股----农机拥有量-数量  审核
            }else if(this.$route.path.indexOf("/workSituation") >= 0){
                auditRes = await workSituationAudit(ids,{status});  //农业机械化与设施股----农机作业情况  审核
            }else if(this.$route.path.indexOf("/serviceInformation") >= 0){
                auditRes = await serviceInformationAudit(ids,{status});  //农业机械化与设施股----农机服务情况  审核
            }else if(this.$route.path.indexOf("/fruitAndVegetable") >= 0){
                auditRes = await fruitAndVegetableAudit(ids,{status});  //经作站----乡镇果蔬标准化基地  审核
            }else if(this.$route.path.indexOf("/maiDongManagement") >= 0){
                auditRes = await maiDongManagementAudit(ids,{status});  //经作站----麦冬经营主体  审核
            }else if(this.$route.path.indexOf("/maiDongMainArea") >= 0){
                auditRes = await maiDongMainAreaAudit(ids,{status});  //经作站----麦冬主产区面积  审核
            }else if(this.$route.path.indexOf("/maiDongProducts") >= 0){
                auditRes = await maiDongProductsAudit(ids,{status});  //经作站----麦冬加工产品  审核
            }else if(this.$route.path.indexOf("/maiDongYield") >= 0){
                auditRes = await maiDongYieldAudit(ids,{status});  //经作站----麦冬产量  审核
            }else if(this.$route.path.indexOf("/animalDisease") >= 0){
                auditRes = await animalDiseaseAudit(ids,{status});  //动物疫病预防控制中心----动物疫病防控  审核
            }else if(this.$route.path.indexOf("/diseaseDescribe") >= 0){
                auditRes = await diseaseDescribeAudit(ids,{status});  //植保站----病害描述  审核
            }else if(this.$route.path.indexOf("/preventionAndCure") >= 0){
                auditRes = await preventionAndCureAudit(ids,{status});  //植保站----病虫害防止趋势  审核
            }else if(this.$route.path.indexOf("/monitoringPointData") >= 0){
                auditRes = await monitoringPointDataAudit(ids,{status});  //植保站----监测点数据  审核
            }else if(this.$route.path.indexOf("/industryLeavePoor") >= 0){
                auditRes = await industryLeavePoorAudit(ids,{status});  //粮油站----产业脱贫  审核
            }else if(this.$route.path.indexOf("/newsDynamic") >= 0){
                auditRes = await newsDynamicAudit(ids,{status});  //县委秘书办----新闻动态  审核
            }else if(this.$route.path.indexOf("/bannerImgMaintain") >= 0){
                auditRes = await bannerImgMaintainAudit(ids,{status});  //县委秘书办----banner  审核
            }else if(this.$route.path.indexOf("/enforcementAccount") >= 0){
                auditRes = await enforcementAccountAudit(ids,{status});  //执法大队----执法台账  审核
            }else if(this.$route.path.indexOf("/pesticidesBusiness") >= 0){
                auditRes = await pesticidesBusinessAudit(ids,{status});  //执法大队----农药经营主体  审核
            }
            //永清新增模块
            else if(this.$route.path.indexOf("/orchardArea") >= 0){
                auditRes = await orchardAreaAudit(ids,{status});  //种植业股----果园面积  审核
            }else if(this.$route.path.indexOf("/feedEnterprise") >= 0){
                auditRes = await feedEnterpriseAudit(ids,{status});  //饲料办----饲料企业  审核
            }else if(this.$route.path.indexOf("/freshFruitYield") >= 0){
                auditRes = await freshFruitYieldAudit(ids,{status});  //种植业股----鲜果产量  审核
            }else if(this.$route.path.indexOf("/forestryProduct") >= 0){
                auditRes = await forestryProductAudit(ids,{status});  //种植业股----林业生产  审核
            }else if(this.$route.path.indexOf("/CZ_NLMY") >= 0){
                auditRes = await CZ_NLMYAudit(ids,{status});  //种植业股----农林牧渔产值  审核
            }else if(this.$route.path.indexOf("/ZJZ_NLMY") >= 0){
                auditRes = await ZJZ_NLMYAudit(ids,{status});  //种植业股----农林牧渔增加值  审核
            }else if(this.$route.path.indexOf("/cultivatedLandArea") >= 0){
                auditRes = await cultivatedLandAreaAudit(ids,{status});  //种植业股----gdmj  审核
            }



            if(auditRes.data.status== 0){
                this.queryListByPage(); //审核成功后再一次查询分页列表，同步数据
            }else if(auditRes.data.status== -1 || auditRes.data.status== 500){
                this.$message({
                    message: auditRes.data.msg,
                    type: 'warning'
                })
            }else if(auditRes.data.status == -2){
                handleCofirm(auditRes.data.msg, 'warning', false).then(() => {
                    window.loginOut();
                })
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.listLoading = false;
        },
        //操作分页触发
        handleCurrentChange(thisPage){
            this.filters.currentPage = thisPage;
            this.queryListByPage();

        },
        pageSizeChange(value){
            this.filters.pageSize = value;
            this.queryListByPage();
        },
        //下载模板
        async downLoadTemplate(row){
            let obj ={};
            let fileName = '';
            if(this.$route.path.indexOf("/qualityOrganicProducts") >= 0 || this.$route.path.indexOf("/doOrganicFoodEnter") >= 0){
                obj = {customTable:'organic_food_enterprise_product'}; //质检办--有机食品企业产品数据 ,产业办--有机食品企业产品数据 下载模板传参
                fileName = 'organic_food_enterprise_product.xls';
            }else if(this.$route.path.indexOf("/qualityPollutionProducts") >= 0 || this.$route.path.indexOf("/doHarmlessProductsEnter") >= 0 ) { 
                obj = {customTable:'nuisanceless'}; //质检办--无公害企业产品数据 ，产业办--无公害企业产品数据  下载模板传参
                fileName = 'nuisanceless.xls';
            }else if(this.$route.path.indexOf("/qualityDetectionOfAgricultural") >= 0) { 
                obj = {customTable:'product_check'}; //质检办--农产品农残检测情况信息表  下载模板传参
                fileName = 'product_check.xls';
            }else if(this.$route.path.indexOf("/qualityAgriculturalCheckStation") >= 0) { 
                obj = {customTable:'product_checkpoint'}; //质检办--农产品检测站信息  下载模板传参
                fileName = 'product_checkpoint.xls';
            }else if(this.$route.path.indexOf("/qualityGreenfoodEnterprises") >= 0 || this.$route.path.indexOf("/doGreenFoodValue") >= 0){ 
               obj = {customTable:'green_food_enterprise_product'};  //质检办--绿色食品企业产品数据  ，产业办--绿色食品企业产品数据 下载模板传参
                fileName = 'green_food_enterprise_product.xls';
            }else if(this.$route.path.indexOf("/occurrenceAndArea") >= 0){
                obj = {customTable:'nzwcsh'};  //植保站--虫鼠害发生和防治面积 下载模板传参
                fileName = 'nzwcsh.xls';
            }else if(this.$route.path.indexOf("/basicInformationOfFishery") >= 0){
                obj = {customTable:'fisheries_basic'}; //渔业局--渔业生产基本情况   下载模板传参
                fileName = 'fisheries_basic.xls';
            }else if(this.$route.path.indexOf("/freshwaterProducts") >= 0){
               obj = {customTable:'dsyz_product'};  //渔业局--淡水养殖产品产量 下载模板传参
               fileName = 'dsyz_product.xls';
            }else if(this.$route.path.indexOf("/basicSituationOfPoints") >= 0){
                obj = {customTable:'testing_place'};  //土肥站---监测点基本情况  下载模板传参
                fileName = 'testing_place.xls';
            }else if(this.$route.path.indexOf("/inputUsage") >= 0 || this.$route.path.indexOf("/statistInputUsage")>=0 ){
                obj = {customTable:'product_inputs'};  //土肥站---投入品使用情况, 统计局--投入品使用情况  下载模板传参
                 fileName = 'product_inputs.xls';
            }else if(this.$route.path.indexOf("/farmlandQuality") >= 0 ){
                obj = {customTable:'testing_place_check'};  //土肥站--- 监测点耕地质量数据 下载模板传参
                fileName = 'testing_place_check.xls';
            }else if(this.$route.path.indexOf("/agriculturalMachineryShip") >= 0 || this.$route.path.indexOf("/statistMachineryList") >= 0  ){
                obj = {customTable:'machine_num'};  //农机局---农机拥有量 和 统计局---农机拥有量  下载模板传参
                fileName = 'machine_num.xls';
            }else if(this.$route.path.indexOf("/landContractData") >= 0){
                obj = {customTable:'land_contract'};  //农经办---土地承包数据  下载模板传参
                fileName = 'land_contract.xls';
            }else if(this.$route.path.indexOf("/doCropSownArea") >= 0  || this.$route.path.indexOf("/statistCropSownArea") >= 0){
                obj = {customTable:'crop_area'};  //农经办---农作物播种面积 和 统计局---农作物播种面积  下载模板传参
                fileName = 'crop_area.xls';
            }else if(this.$route.path.indexOf("/doAgriculturalOutputValue") >= 0){
                obj = {customTable:'enterprise_output_value'};  //农经办---农产品企业产值  下载模板传参
                fileName = 'enterprise_output_value.xls';
            }else if(this.$route.path.indexOf("/doBusinessEntity") >= 0 || this.$route.path.indexOf("/marketBusinessEntity") >= 0 ||  this.$route.path.indexOf("/industrialBusinessEntity") >= 0){
                obj = {customTable:'enterprise'};  //农经办---经营主体数据 和商业局--经营主体 和工商局-经营主体  下载模板传参
                fileName = 'enterprise.xls';
            }else if(this.$route.path.indexOf("/agriculturalMarketInfo") >= 0){
                obj = {customTable:'market'};  //商业局---农产品批发市场信息  下载模板传参
                fileName = 'market.xls';
            }else if(this.$route.path.indexOf("/agriculturalPriceData") >= 0){
                obj = {customTable:'product_price'};  //商业局---农产品交易价格数据  下载模板传参
                fileName = 'product_price.xls';
            }else if(this.$route.path.indexOf("/agrYieldUnitArea") >= 0){
                obj = {customTable:'product_yield_area'}; //统计局---主要农产品单位面积产量  下载模板传参
                fileName = 'product_yield_area.xls';
            }else if(this.$route.path.indexOf("/agrOutputProduct") >= 0){
                obj = {customTable:'product_yield'};  //统计局---主要农产品产量  下载模板传参
                fileName = 'product_yield.xls';
            }else if(this.$route.path.indexOf("/statistTotalValue") >= 0){
                obj = {customTable:'nlmy'};  //统计局---农林牧渔总产值  下载模板传参
                fileName = 'nlmy.xls';
            }else if(this.$route.path.indexOf("/rearProductValue") >= 0){
                obj = {customTable:'animal_product_yield'}; //统计局---畜产品产量  下载模板传参
                fileName = 'animal_product_yield.xls';
            }else if(this.$route.path.indexOf("/landUseLeaveOne") >= 0){
                obj = {customTable:'land_area1'};  //国土局---农村土地利用现状一级分类面积汇总表  下载模板传参
                fileName = 'land_area1.xls';
            }else if(this.$route.path.indexOf("/landUseLeaveTwo") >= 0){
                obj = {customTable:'land_area2'}; //国土局---农村土地利用现二级分类面积汇总表  下载模板传参
                fileName = 'land_area2.xls';
            }else if(this.$route.path.indexOf("/newsTrends") >= 0){
                obj = {customTable:'news'};  //新闻动态  下载模板传参
                fileName = 'news.xls';
            }else if(this.$route.path.indexOf("/dynamic") >= 0){
                obj = {customTable:'park_dynamics'}; //园区动态 下载模板传参
                fileName = 'park_dynamics.xls';
            }else if(this.$route.path.indexOf("/customForm") >= 0){ 
                obj = {customTable:row.customTable}; //自定义表单下载模板传参
                fileName = `${row.customTable}.xls`;
            }else if(this.$route.path.indexOf("/pigBree") >= 0){ 
                obj = {customTable:'livestoc_breeding'}; //畜牧股---生猪养殖  下载模板传参
                fileName = 'livestoc_breeding.xls';
            }else if(this.$route.path.indexOf("/breedingCostData") >= 0){ 
                obj = {customTable:'animal_husbandry'}; //畜牧股---养殖成本数据  下载模板传参
                fileName = 'animal_husbandry.xls';
            }else if(this.$route.path.indexOf("/muXuYangZhi") >= 0){ 
                obj = {customTable:'animal_husbandry'}; //畜牧股---养殖成本数据  下载模板传参
                fileName = 'animal_husbandry.xls';
            }else if(this.$route.path.indexOf("/reformBusinessEntity") >= 0){ 
                obj = {customTable:'enterprise'}; //农村改革与服务体系股---经营主体  下载模板传参
                fileName = 'enterprise.xls';
            }else if(this.$route.path.indexOf("/reformEnterpriseQuality") >= 0){ 
                obj = {customTable:'enterprise_quality'}; //农村改革与服务体系股---三品一标  下载模板传参
                fileName = 'enterprise_quality.xls';
            }else if(this.$route.path.indexOf("/livableProjectManage") >= 0){ 
                obj = {customTable:'livable_project_manage'}; //宜居乡村股--- 项目管理 下载模板传参
                fileName = 'livable_project_manage.xls';
            }else if(this.$route.path.indexOf("/livableVillageData") >= 0){ 
                obj = {customTable:'livable_village_data'}; //宜居乡村股--- 乡村数据总汇 下载模板传参
                fileName = 'livable_village_data.xls';
            }else if(this.$route.path.indexOf("/policyPesticideBan") >= 0){ 
                obj = {customTable:'policy_pesticide_ban'}; //政策法规股--- 禁用农药 下载模板传参
                fileName = 'policy_pesticide_ban.xls';
            }else if(this.$route.path.indexOf("/areaFoodPlant") >= 0){ 
                obj = {customTable:'crop_food_area'}; //农经股--- 粮食作物播种面积 下载模板传参
                fileName = 'crop_food_area.xls';
            }else if(this.$route.path.indexOf("/yieldFoodPlant") >= 0){ 
                obj = {customTable:'crop_food_yield'}; //农经股--- 粮食作物产量 下载模板传参
                fileName = 'crop_food_yield.xls';
            }else if(this.$route.path.indexOf("/unitFoodPlant") >= 0){ 
                obj = {customTable:'crop_food_yield_area'}; //农经股--- 粮食作物单产 下载模板传参
                fileName = 'crop_food_yield_area.xls';
            }else if(this.$route.path.indexOf("/areaEconomicsPlant") >= 0){ 
                obj = {customTable:'crop_cash_area'}; //农经股--- 经济作物面积 下载模板传参
                fileName = 'crop_cash_area.xls';
            }else if(this.$route.path.indexOf("/yieldEconomicsPlant") >= 0){ 
                obj = {customTable:'crop_cash_yield'}; //农经股--- 经济作物产量 下载模板传参
                fileName = 'crop_cash_yield.xls';
            }else if(this.$route.path.indexOf("/unitEconomicsPlant") >= 0){ 
                obj = {customTable:'crop_cash_yield_area'}; //农经股--- 经济作物单产 下载模板传参
                fileName = 'crop_cash_yield_area.xls';
            }else if(this.$route.path.indexOf("/townPlantArea") >= 0){ 
                obj = {customTable:'township_plant_area'}; //农经股--- 各乡镇种植面积 下载模板传参
                fileName = 'township_plant_area.xls';
            }else if(this.$route.path.indexOf("/seedEnterprise") >= 0){ 
                obj = {customTable:'enterprise_seed'}; //种植业股--- 种子企业备案 下载模板传参
                fileName = 'enterprise_seed.xls';
            }else if(this.$route.path.indexOf("/agriculturalProduction") >= 0){ 
                obj = {customTable:'agricultural_production'}; //种植业股--- 农业生产条件 下载模板传参
                fileName = 'agricultural_production.xls';
            }else if(this.$route.path.indexOf("/landLevel") >= 0){ 
                obj = {customTable:'land_product_grade'}; //种植业股--- 耕地地力等级 下载模板传参
                fileName = 'land_product_grade.xls';
            }else if(this.$route.path.indexOf("/agriculturalRecycling") >= 0){ 
                obj = {customTable:'inputs_film'}; //种植业股--- 农膜覆盖及回收利用情况 下载模板传参
                fileName = 'inputs_film.xls';
            }else if(this.$route.path.indexOf("/agriculturalStoreInfo") >= 0){ 
                obj = {customTable:'agricultural_information'}; //种植业股--- 农资店信息 下载模板传参
                fileName = 'agricultural_information.xls';
            }else if(this.$route.path.indexOf("/aquaticMachining") >= 0){ 
                obj = {customTable:'fishery_aquatic_process'}; //渔业渔政股--- 水产加工 下载模板传参
                fileName = 'fishery_aquatic_process.xls';
            }else if(this.$route.path.indexOf("/fisheryYield") >= 0){ 
                obj = {customTable:'fishery_production'}; //渔业渔政股--- 渔业产值 下载模板传参
                fileName = 'fishery_production.xls';
            }else if(this.$route.path.indexOf("/fisheryAddYield") >= 0){ 
                obj = {customTable:'fishery_increase'}; //渔业渔政股--- 渔业增加值 下载模板传参
                fileName = 'fishery_increase.xls';
            }else if(this.$route.path.indexOf("/fisheryEnforcement") >= 0){ 
                obj = {customTable:'aquatic_enforcement'}; //渔业渔政股--- 渔业执法情况 下载模板传参
                fileName = 'aquatic_enforcement.xls';
            }else if(this.$route.path.indexOf("/fisheriesPopulation") >= 0){ 
                obj = {customTable:'fishery_population'}; //渔业渔政股--- 渔业人口情况 下载模板传参
                fileName = 'fishery_population.xls';
            }else if(this.$route.path.indexOf("/freshwaterFishingYield") >= 0){ 
                obj = {customTable:'fishery_freshwater_fish'}; //渔业渔政股--- 淡水捕捞产量 下载模板传参
                fileName = 'fishery_freshwater_fish.xls';
            }else if(this.$route.path.indexOf("/aquaticSeedling") >= 0){ 
                obj = {customTable:'fishery_aquatic_seed'}; //渔业渔政股--- 主要水产苗种 下载模板传参
                fileName = 'fishery_aquatic_seed.xls';
            }else if(this.$route.path.indexOf("/reservoirProduction") >= 0){ 
                obj = {customTable:'fishery_reservoir_product'}; //渔业渔政股--- 水库渔业生产情况 下载模板传参
                fileName = 'fishery_reservoir_product.xls';
            }else if(this.$route.path.indexOf("/veterinaryStation") >= 0){ 
                obj = {customTable:'vet_station'}; //兽医兽药股--- 兽医站 下载模板传参
                fileName = 'vet_station.xls';
            }else if(this.$route.path.indexOf("/veterinaryMedicineEnterprise") >= 0){ 
                obj = {customTable:'enterprise_vet'}; //兽医兽药股--- 兽药经营企业 下载模板传参
                fileName = 'enterprise_vet.xls';
            }else if(this.$route.path.indexOf("/veterinaryHospital") >= 0){ 
                obj = {customTable:'vet_hospital'}; //兽医兽药股--- 诊疗机构 下载模板传参
                fileName = 'vet_hospital.xls';
            }else if(this.$route.path.indexOf("/pigSlaughterhouse") >= 0){ 
                obj = {customTable:'vet_slaughter_house'}; //兽医兽药股--- 生猪定点屠宰场 下载模板传参
                fileName = 'vet_slaughter_house.xls';
            }else if(this.$route.path.indexOf("/NJJYZT") >= 0){ 
                obj = {customTable:'agricultural_subject'}; //农业机械化与设施股--- 农机拥有量-动力 下载模板传参
                fileName = 'agricultural_subject.xls';
            }else if(this.$route.path.indexOf("/havePower") >= 0){ 
                obj = {customTable:'machine_power'}; //农业机械化与设施股--- 农机拥有量-动力 下载模板传参
                fileName = 'machine_power.xls';
            }else if(this.$route.path.indexOf("/haveCount") >= 0){ 
                obj = {customTable:'machine_count'}; //农业机械化与设施股--- 农机拥有量-数量 下载模板传参
                fileName = 'machine_count.xls';
            }else if(this.$route.path.indexOf("/workSituation") >= 0){ 
                obj = {customTable:'machine_operation'}; //农业机械化与设施股--- 农机作业情况 下载模板传参
                fileName = 'machine_operation.xls';
            }else if(this.$route.path.indexOf("/serviceInformation") >= 0){ 
                obj = {customTable:'machine_service'}; //农业机械化与设施股--- 农机服务情况 下载模板传参
                fileName = 'machine_service.xls';
            }else if(this.$route.path.indexOf("/fruitAndVegetable") >= 0){ 
                obj = {customTable:'cash_standard_base'}; //经作站--- 乡镇果蔬标准化基地 下载模板传参
                fileName = 'cash_standard_base.xls';
            }else if(this.$route.path.indexOf("/maiDongManagement") >= 0){ 
                obj = {customTable:'cash_liriope_business'}; //经作站--- 麦冬经营主体 下载模板传参
                fileName = 'cash_liriope_business.xls';
            }else if(this.$route.path.indexOf("/maiDongMainArea") >= 0){ 
                obj = {customTable:'cash_liriope_plant'}; //经作站--- 麦冬主产区面积 下载模板传参
                fileName = 'cash_liriope_plant.xls';
            }else if(this.$route.path.indexOf("/maiDongProducts") >= 0){ 
                obj = {customTable:'liriope_product'}; //经作站--- 麦冬加工产品 下载模板传参
                fileName = 'liriope_product.xls';
            }else if(this.$route.path.indexOf("/maiDongYield") >= 0){ 
                obj = {customTable:'liriope_yield'}; //经作站--- 麦冬产量 下载模板传参
                fileName = 'liriope_yield.xls';
            }else if(this.$route.path.indexOf("/animalDisease") >= 0){ 
                obj = {customTable:'animal_disease_control'}; //动物疫病预防控制中心--- 动物疫病防控 下载模板传参
                fileName = 'animal_disease_control.xls';
            }else if(this.$route.path.indexOf("/diseaseDescribe") >= 0){ 
                obj = {customTable:'plant_disease'}; //植保站--- 病害描述 下载模板传参
                fileName = 'plant_disease.xls';
            }else if(this.$route.path.indexOf("/preventionAndCure") >= 0){ 
                obj = {customTable:'cash_liriope_plant'}; //植保站--- 病虫害防止趋势 下载模板传参
                fileName = 'cash_liriope_plant.xls';
            }else if(this.$route.path.indexOf("/monitoringPointData") >= 0){ 
                obj = {customTable:'land_distribution_yield'}; //植保站--- 土壤采样面积分布 下载模板传参
                fileName = 'land_distribution_yield.xls';
            }else if(this.$route.path.indexOf("/industryLeavePoor") >= 0){ 
                obj = {customTable:'industry_outpoor'}; //植保站--- 监测点数据 下载模板传参
                fileName = 'industry_outpoor.xls';
            }else if(this.$route.path.indexOf("/newsDynamic") >= 0){ 
                obj = {customTable:'c_policy_information'}; //县委秘书办--- 新闻动态 下载模板传参
                fileName = 'c_policy_information.xls';
            }else if(this.$route.path.indexOf("/bannerImgMaintain") >= 0){ 
                obj = {customTable:'banner_maintain'}; //县委秘书办--- banner 下载模板传参
                fileName = 'banner_maintain.xls';
            }else if(this.$route.path.indexOf("/enforcementAccount") >= 0){ 
                obj = {customTable:'law_enforcement_record'}; //执法大队--- 执法台账 下载模板传参
                fileName = 'law_enforcement_record.xls';
            }else if(this.$route.path.indexOf("/pesticidesBusiness") >= 0){ 
                obj = {customTable:'pesticidesl_subject'}; //执法大队--- 农药经营主体 下载模板传参
                fileName = 'pesticidesl_subject.xls';
            }
            //永清新增模块
            else if(this.$route.path.indexOf("/orchardArea") >= 0){ 
                obj = {customTable:'orchard_area'}; //种植业股--- 果园面积 下载模板传参
                fileName = 'orchard_area.xls';
            }else if(this.$route.path.indexOf("/freshFruitYield") >= 0){ 
                obj = {customTable:'fresh_fruit_yield'}; //种植业股--- 鲜果产量 下载模板传参
                fileName = 'fresh_fruit_yield.xls';
            }else if(this.$route.path.indexOf("/forestryProduct") >= 0){ 
                obj = {customTable:'forestry_production'}; //种植业股--- 林业生产 下载模板传参
                fileName = 'forestry_production.xls';
            }else if(this.$route.path.indexOf("/cultivatedLandArea") >= 0){ 
                obj = {customTable:'cultivated_land_area'}; //种植业股--- 耕地面积 下载模板传参
                fileName = 'cultivated_land_area.xls';
            }else if(this.$route.path.indexOf("/CZ_NLMY") >= 0){ 
                obj = {customTable:'agricultural_forestry_animal_fishery_production'}; //种植业股--- 农林牧渔产值 下载模板传参
                fileName = 'agricultural_forestry_animal_fishery_production.xls';
            }else if(this.$route.path.indexOf("/ZJZ_NLMY") >= 0){ 
                obj = {customTable:'agricultural_forestry_animal_fishery_addvalue'}; //种植业股--- 农林牧渔增加值 下载模板传参
                fileName = 'agricultural_forestry_animal_fishery_addvalue.xls';
            }else if(this.$route.path.indexOf("/feedEnterprise") >= 0){ 
                obj = {customTable:'feed_enterprise'}; //饲料办--- 饲料企业 下载模板传参
                fileName = 'feed_enterprise.xls';
            }

            
            let res = await downLoadTemplate(obj);
            console.log(res)
            if(res.data.status == 500 || res.data.status == -1){
                 this.$message({
                    message: '模板下载失败，请先更新模板',
                    type: 'warning'
                })
            }else{
                const content = res.data
                const blob = new Blob([content])//构造一个blob对象来处理数据
                //const fileName = '自定义表单.xls'
                //对于<a>标签，只有 Firefox 和 Chrome（内核） 支持 download 属性
                //IE10以上支持blob但是依然不支持download
                if ('download' in document.createElement('a')) { //支持a标签download的浏览器
                const link = document.createElement('a')//创建a标签
                link.download = fileName//a标签添加属性
                link.style.display = 'none'
                link.href = URL.createObjectURL(blob)
                document.body.appendChild(link)
                link.click()//执行下载
                URL.revokeObjectURL(link.href) //释放url
                document.body.removeChild(link)//释放标签
                } else { //其他浏览器
                navigator.msSaveBlob(blob, fileName)
                }
                
                this.listLoading = false;
        }
        }
    }
}
</script>
<style scoped lang="scss">
    .searchContent{
        width: 85vw;
        padding: 10px;
        position: fixed !important;
        top: 130px !important;
        z-index: 999;
        background-color: #FFF;
        .searchCriteria{

            @media (min-width: 1366px) {  

        .pickerWidth{
            width: 12% !important;
        }

    }

    @media (min-width: 1920px) {
                    .pickerWidth{
                width: 15% !important;
            }
    }
            span{
                margin-left: 2%;
                font-size: 14px;
            }
            .searchBtn{
                margin-left: 2%;
            }
        }
        
    }
    .red{color:red}
    .blue{color:#333}
    .green{color:#fba874}
    .upLoadContent{
        width:40px; display:inline-block;position:relative;margin-right:25px;
        .upLoadLable{
            display:inline-block;padding:8px;border-radius:3px;background-color:#409EFF;width:100%;text-align:center;font-size:12px;color:#FFF;
        }
        .upLoadLable:hover{
            background-color: #61B1FF;
        }
    }
    


    
</style>