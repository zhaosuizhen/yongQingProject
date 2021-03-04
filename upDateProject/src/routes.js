import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
import Home from './view/home';   //主页面 导航
import index from './view/index';   //主页面 导航


//农村改革与服务体系股
import ruralReform from './view/ruralReform/ruralReform' //农村改革与服务体系股
import reformBusinessEntity from  './view/industryDo/doBusinessEntity/doBusinessEntity' //农村改革与服务体系股--经营主体
import reformBusinessEntityDetail from  './view/industryDo/doBusinessEntity/doBusinessEntityDetail' //农村改革与服务体系股--经营主体添加编辑详情
import reformEnterpriseQuality from './view/ruralReform/reformEnterpriseQuality/reformEnterpriseQuality' //农村改革与服务体系股---三品一标企业列表
import reformEnterpriseQualityDetail from './view/ruralReform/reformEnterpriseQuality/reformEnterpriseQualityDetail' //农村改革与服务体系股---三品一标企业添加编辑详情

//宜居乡村股
import ruralLivable from './view/ruralLivable/ruralLivable' //宜居乡村股
import livableProjectManage from './view/ruralLivable/livableProjectManage/livableProjectManage' //宜居乡村股---项目管理列表
import livableProjectManageDetail from './view/ruralLivable/livableProjectManage/livableProjectManageDetail' //宜居乡村股---项目管理详情
import livableVillageData from  './view/ruralLivable/livableVillageData/livableVillageData' //宜居乡村股--乡村数据汇总
import livableVillageDataDetail from  './view/ruralLivable/livableVillageData/livableVillageDataDetail' //宜居乡村股--乡村数据汇总添加编辑详情

//政策法规股
import policy from './view/policy/policy' //政策法规股
import policyPesticideBan from './view/policy/policyPesticideBan/policyPesticideBan' //政策法规股---禁用农药列表
import policyPesticideBanDetail from './view/policy/policyPesticideBan/policyPesticideBanDetail' //政策法规股---禁用农药详情

//农经股
import ruralEconomy from './view/ruralEconomy/ruralEconomy' //农经股
import areaFoodPlant from './view/ruralEconomy/areaFoodPlant/areaFoodPlant' //粮食作物播种面积
import areaFoodPlantDetail from './view/ruralEconomy/areaFoodPlant/areaFoodPlantDetail' //粮食作物播种面积 新增编辑页
import yieldFoodPlant from './view/ruralEconomy/yieldFoodPlant/yieldFoodPlant' //粮食作物产量
import yieldFoodPlantDetail from './view/ruralEconomy/yieldFoodPlant/yieldFoodPlantDetail' //粮食作物产量 新增编辑页
import unitFoodPlant from './view/ruralEconomy/unitFoodPlant/unitFoodPlant' //粮食作物产量
import unitFoodPlantDetail from './view/ruralEconomy/unitFoodPlant/unitFoodPlantDetail' //粮食作物产量 新增编辑页
import areaEconomicsPlant from './view/ruralEconomy/areaEconomicsPlant/areaEconomicsPlant' //经济作物面积
import areaEconomicsPlantDetail from './view/ruralEconomy/areaEconomicsPlant/areaEconomicsPlantDetail' //经济作物面积 新增编辑页
import yieldEconomicsPlant from './view/ruralEconomy/yieldEconomicsPlant/yieldEconomicsPlant' //经济作物产量
import yieldEconomicsPlantDetail from './view/ruralEconomy/yieldEconomicsPlant/yieldEconomicsPlantDetail' //经济作物产量 新增编辑页
import unitEconomicsPlant from './view/ruralEconomy/unitEconomicsPlant/unitEconomicsPlant' //经济作物单产
import unitEconomicsPlantDetail from './view/ruralEconomy/unitEconomicsPlant/unitEconomicsPlantDetail' //经济作物单产 新增编辑页
import townPlantArea from './view/ruralEconomy/townPlantArea/townPlantArea' //各乡镇种植面积
import townPlantAreaDetail from './view/ruralEconomy/townPlantArea/townPlantAreaDetail' //各乡镇种植面积 新增编辑页

//种植业股
import planting from './view/planting/planting'//种植业股
import seedEnterprise from './view/planting/seedEnterprise/seedEnterprise' //种子企业备案
import seedEnterpriseDetail from './view/planting/seedEnterprise/seedEnterpriseDetail' //种子企业备案 新增编辑页
import agriculturalProduction from './view/planting/agriculturalProduction/agriculturalProduction' //农业生产条件
import agriculturalProductionDetail from './view/planting/agriculturalProduction/agriculturalProductionDetail' //农业生产条件 新增编辑页
import landLevel from './view/planting/landLevel/landLevel' //耕地地力等级
import landLevelDetail from './view/planting/landLevel/landLevelDetail' //耕地地力等级 新增编辑页
import agriculturalRecycling from './view/planting/agriculturalRecycling/agriculturalRecycling' //农膜覆盖及回收利用情况
import agriculturalRecyclingDetail from './view/planting/agriculturalRecycling/agriculturalRecyclingDetail' //农膜覆盖及回收利用情况 新增编辑页
import agriculturalStoreInfo from './view/planting/agriculturalStoreInfo/agriculturalStoreInfo' //农资店信息
import agriculturalStoreInfoDetail from './view/planting/agriculturalStoreInfo/agriculturalStoreInfoDetail' //农资店信息 新增编辑页
import orchardArea from './view/planting/orchardArea/orchardArea'//果园面积    *****永清新增*****
import orchardAreaDetail from './view/planting/orchardArea/orchardAreaDetail'//果园面积新增编辑页    *****永清新增*****
import freshFruitYield from './view/planting/freshFruitYield/freshFruitYield'//鲜果产量    *****永清新增*****
import freshFruitYieldDetail from './view/planting/freshFruitYield/freshFruitYieldDetail'//鲜果产量新增编辑页    *****永清新增*****
import forestryProduct from './view/planting/forestryProduct/forestryProduct'//林业生产    *****永清新增*****
import forestryProductDetail from './view/planting/forestryProduct/forestryProductDetail'//林业生产新增编辑页    *****永清新增*****
import cultivatedLandArea from './view/planting/cultivatedLandArea/cultivatedLandArea'//耕地面积    *****永清新增*****
import cultivatedLandAreaDetail from './view/planting/cultivatedLandArea/cultivatedLandAreaDetail'//耕地面积新增编辑页    *****永清新增*****
import CZ_NLMY from './view/planting/CZ_NLMY/CZ_NLMY'//农林牧渔产值    *****永清新增*****
import CZ_NLMYDetail from './view/planting/CZ_NLMY/CZ_NLMYDetail'//农林牧渔产值新增编辑页    *****永清新增*****
import ZJZ_NLMY from './view/planting/ZJZ_NLMY/ZJZ_NLMY'//农林牧渔增加值    *****永清新增*****
import ZJZ_NLMYDetail from './view/planting/ZJZ_NLMY/ZJZ_NLMYDetail'//农林牧渔增加值新增编辑页    *****永清新增*****


//渔业渔政股
import fisheriesAdministration from './view/fisheriesAdministration/fisheriesAdministration'//渔业渔政股
import aquaticMachining from './view/fisheriesAdministration/aquaticMachining/aquaticMachining' //水产加工
import aquaticMachiningDetail from './view/fisheriesAdministration/aquaticMachining/aquaticMachiningDetail' //水产加工 新增编辑页
import fisheriesPopulation from './view/fisheriesAdministration/fisheriesPopulation/fisheriesPopulation' //渔业人口情况
import fisheriesPopulationDetail from './view/fisheriesAdministration/fisheriesPopulation/fisheriesPopulationDetail' //渔业人口情况 新增编辑页
import freshwaterFishingYield from './view/fisheriesAdministration/freshwaterFishingYield/freshwaterFishingYield' //淡水捕捞产量
import freshwaterFishingYieldDetail from './view/fisheriesAdministration/freshwaterFishingYield/freshwaterFishingYieldDetail' //淡水捕捞产量 新增编辑页
import aquaticSeedling from './view/fisheriesAdministration/aquaticSeedling/aquaticSeedling' //主要水产苗种
import aquaticSeedlingDetail from './view/fisheriesAdministration/aquaticSeedling/aquaticSeedlingDetail' //主要水产苗种 新增编辑页
import reservoirProduction from './view/fisheriesAdministration/reservoirProduction/reservoirProduction' //水库渔业生产情况
import reservoirProductionDetail from './view/fisheriesAdministration/reservoirProduction/reservoirProductionDetail' //水库渔业生产情况 新增编辑页
import fisheryYield from './view/fisheriesAdministration/fisheryYield/fisheryYield' //渔业产值
import fisheryYieldDetail from './view/fisheriesAdministration/fisheryYield/fisheryYieldDetail' //渔业产值 新增编辑页
import fisheryAddYield from './view/fisheriesAdministration/fisheryAddYield/fisheryAddYield' //渔业增加值
import fisheryAddYieldDetail from './view/fisheriesAdministration/fisheryAddYield/fisheryAddYieldDetail' //渔业增加值 新增编辑页
import fisheryEnforcement from './view/fisheriesAdministration/fisheryEnforcement/fisheryEnforcement' //渔业执法情况
import fisheryEnforcementDetail from './view/fisheriesAdministration/fisheryEnforcement/fisheryEnforcementDetail' //渔业执法情况 新增编辑页

//畜牧股
import rearLivestockShare from './view/rearLivestockShare/rearLivestockShare' //畜牧股
import pigBreeList from './view/rearLivestockShare/pigBree/pigBreeList.vue' //畜牧股---生猪养殖列表
import pigBreeDetail from './view/rearLivestockShare/pigBree/pigBreeDetail.vue' //畜牧股---生猪养殖详情
import rearBusinessEntity from  './view/industryDo/doBusinessEntity/doBusinessEntity' //畜牧股--经营主体
import rearBusinessEntityDetail from  './view/industryDo/doBusinessEntity/doBusinessEntityDetail' //畜牧股--经营主体添加编辑详情
import rearProductValue from './view/statisticalBureau/liveProductValue/liveProductValue'; //统计局---畜产品产量
import rearProductValueDetail from './view/statisticalBureau/liveProductValue/liveProductValueDetail' //统计局---畜产品产量 新增编辑详情
import breedingCostData from './view/rearLivestockShare/breedingCostData/breedingCostData.vue' //畜牧股---生猪养殖列表
import breedingCostDataDetail from './view/rearLivestockShare/breedingCostData/breedingCostDataDetail.vue' //畜牧股---生猪养殖详情
import muXuYangZhi from './view/rearLivestockShare/muXuYangZhi/muXuYangZhi.vue' //畜牧股---生猪养殖列表
import muXuYangZhiDetail from './view/rearLivestockShare/muXuYangZhi/muXuYangZhiDetail.vue' //畜牧股---生猪养殖详情

//兽医兽药股
import veterinaryMedicine from './view/veterinaryMedicine/veterinaryMedicine' //兽医兽药股
import veterinaryStation from './view/veterinaryMedicine/veterinaryStation/veterinaryStation.vue' //兽医兽药股---兽医站
import veterinaryStationDetail from './view/veterinaryMedicine/veterinaryStation/veterinaryStationDetail.vue' //兽医兽药股---兽医站
import veterinaryMedicineEnterprise from './view/veterinaryMedicine/veterinaryMedicineEnterprise/veterinaryMedicineEnterprise.vue' //兽医兽药股---兽药经营企业
import veterinaryMedicineEnterpriseDetail from './view/veterinaryMedicine/veterinaryMedicineEnterprise/veterinaryMedicineEnterpriseDetail.vue' //兽医兽药股---兽药经营企业
import veterinaryHospital from './view/veterinaryMedicine/veterinaryHospital/veterinaryHospital.vue' //兽医兽药股---诊疗机构
import veterinaryHospitalDetail from './view/veterinaryMedicine/veterinaryHospital/veterinaryHospitalDetail.vue' //兽医兽药股---诊疗机构
import pigSlaughterhouse from './view/veterinaryMedicine/pigSlaughterhouse/pigSlaughterhouse.vue' //兽医兽药股---生猪定点屠宰场
import pigSlaughterhouseDetail from './view/veterinaryMedicine/pigSlaughterhouse/pigSlaughterhouseDetail.vue' //兽医兽药股---生猪定点屠宰场

//农业机械化与设施股
import agriculturalMachinery from './view/agriculturalMachinery/agriculturalMachinery' //农业机械化与设施股
import NJJYZT from './view/agriculturalMachinery/NJJYZT/NJJYZT.vue' //兽医兽药股---农机拥有量-动力
import NJJYZTDetail from './view/agriculturalMachinery/NJJYZT/NJJYZTDetail.vue' //兽医兽药股---农机拥有量-动力
import havePower from './view/agriculturalMachinery/havePower/havePower.vue' //兽医兽药股---农机拥有量-动力
import havePowerDetail from './view/agriculturalMachinery/havePower/havePowerDetail.vue' //兽医兽药股---农机拥有量-动力
import haveCount from './view/agriculturalMachinery/haveCount/haveCount.vue' //兽医兽药股---农机拥有量-数量
import haveCountDetail from './view/agriculturalMachinery/haveCount/haveCountDetail.vue' //兽医兽药股---农机拥有量-数量
import workSituation from './view/agriculturalMachinery/workSituation/workSituation.vue' //兽医兽药股---农机作业情况
import workSituationDetail from './view/agriculturalMachinery/workSituation/workSituationDetail.vue' //兽医兽药股---农机作业情况
import serviceInformation from './view/agriculturalMachinery/serviceInformation/serviceInformation.vue' //兽医兽药股---农机服务
import serviceInformationDetail from './view/agriculturalMachinery/serviceInformation/serviceInformationDetail.vue' //兽医兽药股---农机服务

//粮油站
import grainAndOil from './view/grainAndOil/grainAndOil' //农业机械化与设施股
import industryLeavePoor from './view/grainAndOil/industryLeavePoor/industryLeavePoor.vue' //兽医兽药股---农机拥有量-动力
import industryLeavePoorDetail from './view/grainAndOil/industryLeavePoor/industryLeavePoorDetail.vue' //兽医兽药股---农机拥有量-动力

//执法大队
import enforcementTeam from './view/enforcementTeam/enforcementTeam' //执法大队
import enforcementAccount from './view/enforcementTeam/enforcementAccount/enforcementAccount.vue' //执法大队---执法台账
import enforcementAccountDetail from './view/enforcementTeam/enforcementAccount/enforcementAccountDetail.vue' //执法大队---执法台账
import pesticidesBusiness from './view/enforcementTeam/pesticidesBusiness/pesticidesBusiness.vue' //执法大队---农药经营主体
import pesticidesBusinessDetail from './view/enforcementTeam/pesticidesBusiness/pesticidesBusinessDetail.vue' //执法大队---农药经营主体

//县委秘书办
import secretaryOffice from './view/secretaryOffice/secretaryOffice' //县委秘书办
import newsDynamic from './view/secretaryOffice/newsDynamic/newsDynamic.vue' //县委秘书办---新闻动态
import newsDynamicDetail from './view/secretaryOffice/newsDynamic/newsDynamicDetail.vue' //县委秘书办---新闻动态
import bannerImgMaintain from './view/secretaryOffice/bannerImgMaintain/bannerImgMaintain.vue' //县委秘书办---banner图维护
import bannerImgMaintainDetail from './view/secretaryOffice/bannerImgMaintain/bannerImgMaintainDetail.vue' //县委秘书办---banner图维护

//经作站
import cashCropStation from './view/cashCropStation/cashCropStation' //经作站
import fruitAndVegetable from './view/cashCropStation/fruitAndVegetable/fruitAndVegetable.vue' //经作站---乡镇果蔬标准化基地
import fruitAndVegetableDetail from './view/cashCropStation/fruitAndVegetable/fruitAndVegetableDetail.vue' //经作站---乡镇果蔬标准化基地
import maiDongManagement from './view/cashCropStation/maiDongManagement/maiDongManagement.vue' //经作站---麦冬经营主体
import maiDongManagementDetail from './view/cashCropStation/maiDongManagement/maiDongManagementDetail.vue' //经作站---麦冬经营主体
import maiDongMainArea from './view/cashCropStation/maiDongMainArea/maiDongMainArea.vue' //经作站---麦冬主产区面积
import maiDongMainAreaDetail from './view/cashCropStation/maiDongMainArea/maiDongMainAreaDetail.vue' //经作站---麦冬主产区面积
import maiDongProducts from './view/cashCropStation/maiDongProducts/maiDongProducts.vue' //经作站---麦冬加工产品
import maiDongProductsDetail from './view/cashCropStation/maiDongProducts/maiDongProductsDetail.vue' //经作站---麦冬加工产品
import maiDongYield from './view/cashCropStation/maiDongYield/maiDongYield.vue' //经作站---麦冬产量
import maiDongYieldDetail from './view/cashCropStation/maiDongYield/maiDongYieldDetail.vue' //经作站---麦冬产量

//动物疫病预防控制中心
import animalDisease from './view/animalDisease/animalDisease' //动物疫病预防控制中心
import animalDiseasePage from './view/animalDisease/animalDiseasePage/animalDiseasePage.vue' //动物疫病预防控制中心---动物疫病防控
import animalDiseasePageDetail from './view/animalDisease/animalDiseasePage/animalDiseasePageDetail.vue' //动物疫病预防控制中心---动物疫病防控

//植保站
import plantProtectionStation from './view/plantProtectionStation/plantProtectionStation' //植保站
import diseaseDescribe from './view/plantProtectionStation/diseaseDescribe/diseaseDescribe.vue' //植保站---病害描述
import diseaseDescribeDetail from './view/plantProtectionStation/diseaseDescribe/diseaseDescribeDetail.vue' //植保站---病害描述
import preventionAndCure from './view/plantProtectionStation/preventionAndCure/preventionAndCure.vue' //植保站---病虫害防治趋势
import preventionAndCureDetail from './view/plantProtectionStation/preventionAndCure/preventionAndCureDetail.vue' //植保站---病虫害防治趋势
import monitoringPointData from './view/plantProtectionStation/monitoringPointData/monitoringPointData.vue' //植保站---监测点数据
import monitoringPointDataDetail from './view/plantProtectionStation/monitoringPointData/monitoringPointDataDetail.vue' //植保站---监测点数据

//数据备份
import dataSecurity from './view/dataSecurity/dataSecurity' //数据备份
import runningStatus from './view/dataSecurity/RunningStatus' //运行状态
import dataBackup from './view/dataSecurity/DataBackup' //数据备份

//质检办
import qualityInspection from './view/qualityInspection/qualityInspection'; //质检办
import qualityOrganicProductsList from './view/qualityInspection/qualityOrganicProducts/qualityOrganicProductsList'; //质检办---有机食品企业产品数据列表
import qualityOrganicProductsDetail from './view/qualityInspection/qualityOrganicProducts/qualityOrganicProductsDetail'; //质检办---有机食品企业产品数据添加修改详情
import qualityPollutionProductsList from './view/qualityInspection/qualityPollutionProducts/qualityPollutionProductsList'; //质检办---无公害企业产品数据列表
import qualityPollutionProductsDetail from './view/qualityInspection/qualityPollutionProducts/qualityPollutionProductsDetail'; //质检办---无公害企业产品数据添加修改详情
import qualityDetectionOfAgriculturalList from './view/qualityInspection/qualityDetectionOfAgricultural/qualityDetectionOfAgriculturalList'; //质检办---农产品农残检测情况信息表列表
import qualityDetectionOfAgriculturalDetail from './view/qualityInspection/qualityDetectionOfAgricultural/qualityDetectionOfAgriculturalDetail'; //质检办---农产品农残检测情况信息表添加修改详情
import qualityAgriculturalCheckStationList from './view/qualityInspection/qualityAgriculturalCheckStation/qualityAgriculturalCheckStationList'; //质检办---农产品检测站信息列表
import qualityAgriculturalCheckStationDetail from './view/qualityInspection/qualityAgriculturalCheckStation/qualityAgriculturalCheckStationDetail'; //质检办---农产品检测站信息添加修改详情
import qualityGreenfoodEnterprisesList from './view/qualityInspection/qualityGreenfoodEnterprises/qualityGreenfoodEnterprisesList'; //质检办---绿色食品企业产品数据列表
import qualityGreenfoodEnterprisesDetail from './view/qualityInspection/qualityGreenfoodEnterprises/qualityGreenfoodEnterprisesDetail'; //质检办---绿色食品企业产品数据添加修改详情

//植保站
import plantProtectiveStation from './view/plantProtectiveStation/plantProtectiveStation'; //植保站
import occurrenceAndAreaList from './view/plantProtectiveStation/occurrenceAndArea/occurrenceAndAreaList' //虫鼠害发生和防治面积列表
import occurrenceAndAreaDetail from './view/plantProtectiveStation/occurrenceAndArea/occurrenceAndAreaDetail' //虫鼠害发生和防治面积添加编辑详情

//渔业局
import fisheries from './view/fisheries/fisheries' //渔业局
import basicInformationOfFisheryList from './view/fisheries/basicInformationOfFishery/basicInformationOfFisheryList' //渔业局--渔业生产基本情况列表
import basicInformationOfFisheryDetail from './view/fisheries/basicInformationOfFishery/basicInformationOfFisheryDetail' //渔业局--渔业生产基本情况添加编辑详情
import freshwaterProductsList from './view/fisheries/freshwaterProducts/freshwaterProductsList' //渔业局--淡水养殖产品产量列表
import freshwaterProductsDetail from './view/fisheries/freshwaterProducts/freshwaterProductsDetail' //渔业局--淡水养殖产品产量添加编辑详情

//土肥站
import tuFeiZhan from './view/tuFeiZhan/tuFeiZhan' //土肥站
import basicSituationOfPointsList from './view/tuFeiZhan/basicSituationOfPoints/basicSituationOfPointsList' //土肥站--监测点基本情况
import basicSituationOfPointsDetail from './view/tuFeiZhan/basicSituationOfPoints/basicSituationOfPointsDetail' //土肥站--监测点基本情况添加编辑详情
import inputUsageList from './view/tuFeiZhan/inputUsage/inputUsageList' //土肥站--投入品使用情况
import inputUsageDetail from './view/tuFeiZhan/inputUsage/inputUsageDetail' //土肥站--投入品使用情况添加编辑详情
import farmlandQualityDataList from './view/tuFeiZhan/farmlandQualityData/farmlandQualityData' //土肥站--监测点耕地质量数据
import farmlandQualityDataDetail from './view/tuFeiZhan/farmlandQualityData/farmlandQualityDataDetail' //土肥站--监测点耕地质量数据添加编辑详情

//农机局
import agriculturalBureau from './view/agriculturalBureau/agriculturalBureau' //农机局主路由
import agriculturalMachineryShipList from './view/agriculturalBureau/agriculturalMachineryShip/agriculturalMachineryShip' //农机局--农机拥有量
import agriculturalMachineryShipDetail from './view/agriculturalBureau/agriculturalMachineryShip/agriculturalMachineryShipDetail' //农机局--农机拥有量添加编辑详情

//农经办
import nongJingBan from './view/nongJingBan/nongJingBan' //农经办 --主路由
import landContractData from './view/nongJingBan/landContractData/landContractData' //农机局--土地承包数据
import landContractDataDetail from './view/nongJingBan/landContractData/landContractDataDetail' //农机局--土地承包数据添加编辑详情

//产业办
import industryDo from './view/industryDo/industryDo' //产业办--主路由
import doOrganicFoodEnter from './view/industryDo/doOrganicFoodEnterprises/doOrganicFoodEnter' //产业办--有机食品企业产品数据
import doOrganicFoodEnterDetail from './view/industryDo/doOrganicFoodEnterprises/doOrganicFoodEnterDetail' //产业办--有机食品企业产品数据添加编辑详情
import doHarmlessProductsEnter from './view/industryDo/doHarmlessProductsEnter/doHarmlessProductsEnter' //产业办--无公害企业产品数据
import doHarmlessProductsEnterDetail from './view/industryDo/doHarmlessProductsEnter/doHarmlessProductsEnterDetail' //产业办--无公害企业产品数据添加编辑详情
import doCropSownArea from './view/industryDo/doCropSownArea/doCropSownArea' //产业办--农作物播种面积
import doCropSownAreaDetail from './view/industryDo/doCropSownArea/doCropSownAreaDetail' //产业办--农作物播种面积添加编辑详情
import doAgriculturalOutputValue from './view/industryDo/doAgriculturalOutputValue/doAgriculturalOutputValue' //产业办--农产品企业产值
import doAgriculturalOutputValueDetail from './view/industryDo/doAgriculturalOutputValue/doAgriculturalOutputValueDetail' //产业办--农产品企业产值添加编辑详情
import doGreenFoodValue from './view/industryDo/doGreenFoodValue/doGreenFoodValue' //产业办--绿色食品企业产品数据
import doGreenFoodValueDetail from './view/industryDo/doGreenFoodValue/doGreenFoodValueDetail' //产业办--绿色食品企业产品数据添加编辑详情
import doBusinessEntity from  './view/industryDo/doBusinessEntity/doBusinessEntity' //产业办--经营主体
import doBusinessEntityDetail from  './view/industryDo/doBusinessEntity/doBusinessEntityDetail' //产业办--经营主体添加编辑详情

//商务局
import bureauCommerce from './view/bureauCommerce/bureauCommerce'; //商务局总路由
import agriculturalMarketInfo from './view/bureauCommerce/agriculturalMarketInfo/agriculturalMarketInfo'; //商务局--农产品批发市场信息 列表路由
import agriculturalMarketInfoDetail from './view/bureauCommerce/agriculturalMarketInfo/agriculturalMarketInfoDetail'; //商务局--农产品批发市场信息 详情
import marketBusinessEntity from  './view/bureauCommerce/marketBusinessEntity/marketBusinessEntity' //商务局--经营主体
import marketBusinessEntityDetail from  './view/bureauCommerce/marketBusinessEntity/marketBusinessEntityDetail' //商务局--经营主体添加编辑详情
import agriculturalPriceData from  './view/bureauCommerce/agriculturalPriceData/agriculturalPriceData' //商务局--农产品交易价格数据
import agriculturalPriceDataDetail from  './view/bureauCommerce/agriculturalPriceData/agriculturalPriceDataDetail' //商务局--农产品交易价格数据 添加编辑详情

//统计局
import statisticalBureau from './view/statisticalBureau/statisticalBureau'; //统计局 总路由
import agrYieldUnitArea from './view/statisticalBureau/agrYieldUnitArea/agrYieldUnitArea'; //统计局--主要农产品单位面积产量 列表
import agrYieldUnitAreaDetail from './view/statisticalBureau/agrYieldUnitArea/agrYieldUnitAreaDetail'; //统计局--主要农产品单位面积产量  详情
import agrOutputProduct from './view/statisticalBureau/agrOutputProduct/agrOutputProduct'; //统计局--要农产品产量
import agrOutputProductDetail from './view/statisticalBureau/agrOutputProduct/agrOutputProductDetail'; //统计局--要农产品产量 详情
import statistInputUsage from './view/statisticalBureau/statistInputUsage/statistInputUsage'; //统计局---投入品使用情况
import statistInputUsageDetail from './view/statisticalBureau/statistInputUsage/statistInputUsageDetail'; //统计局---投入品使用情况 详情
import statistCropSownArea from './view/statisticalBureau/statistCropSownArea/statistCropSownArea'; //统计局---农作物播种面积
import statistCropSownAreaDetail from './view/statisticalBureau/statistCropSownArea/statistCropSownAreaDetail'; //统计局---农作物播种面积 详情
import statistMachineryList from './view/statisticalBureau/statistMachineryList/statistMachineryList'; //统计局---农机拥有量（台）
import statistMachineryListDetail from './view/agriculturalBureau/agriculturalMachineryShip/agriculturalMachineryShipDetail' //统计局---农机拥有量 和 农机局--农机拥有量添加编辑详情 使用统一页面
import statistTotalValue from './view/statisticalBureau/statistTotalValue/statistTotalValue'; //统计局---农林牧渔总产值
import statistTotalValueDetail from './view/statisticalBureau/statistTotalValue/statistTotalValueDetail' //统计局---农林牧渔总产值 新增编辑详情
import liveProductValue from './view/statisticalBureau/liveProductValue/liveProductValue'; //统计局---畜产品产量
import liveProductValueDetail from './view/statisticalBureau/liveProductValue/liveProductValueDetail' //统计局---畜产品产量 新增编辑详情

//国土局
import landResourcesBureau from './view/landResourcesBureau/landResourcesBureau'; //国土局总路由
import landUseLeaveOneList from './view/landResourcesBureau/landUseLeaveOne/landUseLeaveOne'; //国土局---农村土地利用现状一级分类面积汇总表
import landUseLeaveOneDetail from './view/landResourcesBureau/landUseLeaveOne/landUseLeaveOneDetail' //国土局---农村土地利用现状一级分类面积汇总表 新增编辑详情
import landUseLeaveTwoList from './view/landResourcesBureau/landUseLeaveTwo/landUseLeaveTwo'; //国土局---农村土地利用现状二级分类面积汇总表
import landUseLeaveTwoDetail from './view/landResourcesBureau/landUseLeaveTwo/landUseLeaveTwoDetail' //国土局---农村土地利用现状二级分类面积汇总表 新增编辑详情

//工商局
import industrialBureau from './view/industrialBureau/industrialBureau'; //工商局总路由
import industrialBusinessEntity from  './view/industrialBureau/industrialBusinessEntity/industrialBusinessEntity' //工商局--经营主体
import industrialBusinessEntityDetail from  './view/industrialBureau/industrialBusinessEntity/industrialBusinessEntityDetail' //工商局--经营主体添加编辑详情

//新闻动态

import newsTrends from './view/newsTrends/newsTrends'; //新闻动态 列表页
import newsTrendsDetail from './view/newsTrends/newsTrendsDetail'; //新闻动态 详情页

//园区动态
import dynamic from './view/dynamic/dynamic'; //园区动态 列表页
import dynamicDetail from './view/dynamic/dynamicDetail'; //园区动态 详情页

//自定义表单
import customForm from './view/customForm/customForm'; //自定义表单 列表页
import customFormDetail from './view/customForm/customFormDetail'; //自定义表单 详情页

//数据处理页面
import dataHandle from './view/dataHandle';

//数据共享页面
import dataShare from './view/dataShare';

//饲料办*****永清新增*****
import feed from './view/feed/feed';//饲料办 总路由 *****永清新增*****
import feedEnterprise from './view/feed/feedEnterprise/feedEnterprise';//饲料企业    *****永清新增*****
import feedEnterpriseDetail from './view/feed/feedEnterprise/feedEnterpriseDetail';//饲料企业新增编辑页    *****永清新增*****

//404页面
import noFount from './view/404';


const routes = [
    {
        path: '/',
        component: Home,
        name: '首页',
        meta: {
            requireAuth: true,
            isShowEnterpriseMap: false
        },
        redirect:'/index',
        children: [
            {path: '/index', component: index, name: '平台首页', meta: {requireAuth: true}},
            {path: '/newsTrends', component: newsTrends, name: '新闻动态', meta: {requireAuth: true}},
            {path: '/newsTrendsDetail', component: newsTrendsDetail, name: '新闻动态详情', meta: {requireAuth: true}},
            {path: '/dynamic', component: dynamic, name: '园区动态', meta: {requireAuth: true}},
            {path: '/dynamicDetail', component: dynamicDetail, name: '园区动态详情', meta: {requireAuth: true}},
            {path: '/customForm', component: customForm, name: '自定义表单', meta: {requireAuth: true}},
            {path: '/customFormDetail', component: customFormDetail, name: '自定义表单详情', meta: {requireAuth: true}},
            { //农村改革与服务体系股
                path:'/ruralReform',
                component:ruralReform,
                redirect:'reformBusinessEntity',
                children:[
                    {path: '/reformBusinessEntity', component: reformBusinessEntity, name: '经营主体', meta: {requireAuth: true}},
                    {path: '/reformBusinessEntityDetail', component: reformBusinessEntityDetail, name: '经营主体添加修改详情', meta: {requireAuth: true}},
                    {path: '/reformEnterpriseQuality', component: reformEnterpriseQuality, name: '三品一标企业', meta: {requireAuth: true}},
                    {path: '/reformEnterpriseQualityDetail', component: reformEnterpriseQualityDetail, name: '三品一标企业添加修改详情', meta: {requireAuth: true}},
                ]
            },
            { //宜居乡村股
                path:'/ruralLivable',
                component:ruralLivable,
                redirect:'livableProjectManage', 
                children:[
                    {path: '/livableProjectManage', component: livableProjectManage, name: '项目管理', meta: {requireAuth: true}},
                    {path: '/livableProjectManageDetail', component: livableProjectManageDetail, name: '项目管理添加修改详情', meta: {requireAuth: true}},
                    {path: '/livableVillageData', component: livableVillageData, name: '乡村数据汇总', meta: {requireAuth: true}},
                    {path: '/livableVillageDataDetail', component: livableVillageDataDetail, name: '乡村数据汇总添加修改详情', meta: {requireAuth: true}},
                ]
            },
            { //政策法规股
                path:'/policy',
                component:policy,
                redirect:'policyPesticideBan', 
                children:[
                    {path: '/policyPesticideBan', component: policyPesticideBan, name: '禁用农药', meta: {requireAuth: true}},
                    {path: '/policyPesticideBanDetail', component: policyPesticideBanDetail, name: '禁用农药添加修改详情', meta: {requireAuth: true}},
                ]
            },
            { //农经股
                path:'/ruralEconomy',
                component:ruralEconomy,
                redirect:'areaFoodPlant', 
                children:[
                    {path: '/areaFoodPlant', component: areaFoodPlant, name: '粮食作物播种面积', meta: {requireAuth: true}},
                    {path: '/areaFoodPlantDetail', component: areaFoodPlantDetail, name: '粮食作物播种面积修改详情', meta: {requireAuth: true}},
                    {path: '/yieldFoodPlant', component: yieldFoodPlant, name: '粮食作物产量', meta: {requireAuth: true}},
                    {path: '/yieldFoodPlantDetail', component: yieldFoodPlantDetail, name: '粮食作物产量修改详情', meta: {requireAuth: true}},
                    {path: '/unitFoodPlant', component: unitFoodPlant, name: '粮食作物单产', meta: {requireAuth: true}},
                    {path: '/unitFoodPlantDetail', component: unitFoodPlantDetail, name: '粮食作物单产修改详情', meta: {requireAuth: true}},
                    {path: '/areaEconomicsPlant', component: areaEconomicsPlant, name: '经济作物面积', meta: {requireAuth: true}},
                    {path: '/areaEconomicsPlantDetail', component: areaEconomicsPlantDetail, name: '经济作物面积修改详情', meta: {requireAuth: true}},
                    {path: '/yieldEconomicsPlant', component: yieldEconomicsPlant, name: '经济作物产量', meta: {requireAuth: true}},
                    {path: '/yieldEconomicsPlantDetail', component: yieldEconomicsPlantDetail, name: '经济作物产量修改详情', meta: {requireAuth: true}},
                    {path: '/unitEconomicsPlant', component: unitEconomicsPlant, name: '经济作物单产', meta: {requireAuth: true}},
                    {path: '/unitEconomicsPlantDetail', component: unitEconomicsPlantDetail, name: '经济作物单产修改详情', meta: {requireAuth: true}},
                    {path: '/townPlantArea', component: townPlantArea, name: '各乡镇种植面积', meta: {requireAuth: true}},
                    {path: '/townPlantAreaDetail', component: townPlantAreaDetail, name: '各乡镇种植面积修改详情', meta: {requireAuth: true}}
                ]
            },
            { //种植业股
                path:'/planting',
                component:planting,
                redirect:'areaFoodPlant', 
                children:[
                    {path: '/seedEnterprise', component: seedEnterprise, name: '种子企业备案', meta: {requireAuth: true}},
                    {path: '/seedEnterpriseDetail', component: seedEnterpriseDetail, name: '种子企业备案修改详情', meta: {requireAuth: true}},
                    {path: '/agriculturalProduction', component: agriculturalProduction, name: '农业生产条件', meta: {requireAuth: true}},
                    {path: '/agriculturalProductionDetail', component: agriculturalProductionDetail, name: '农业生产条件修改详情', meta: {requireAuth: true}},
                    {path: '/landLevel', component: landLevel, name: '耕地地力等级', meta: {requireAuth: true}},
                    {path: '/landLevelDetail', component: landLevelDetail, name: '耕地地力等级修改详情', meta: {requireAuth: true}},
                    {path: '/agriculturalRecycling', component: agriculturalRecycling, name: '农膜覆盖及回收利用情况', meta: {requireAuth: true}},
                    {path: '/agriculturalRecyclingDetail', component: agriculturalRecyclingDetail, name: '农膜覆盖及回收利用情况修改详情', meta: {requireAuth: true}},
                    {path: '/agriculturalStoreInfo', component: agriculturalStoreInfo, name: '农资店信息', meta: {requireAuth: true}},
                    {path: '/agriculturalStoreInfoDetail', component: agriculturalStoreInfoDetail, name: '农资店信息修改详情', meta: {requireAuth: true}},
                    // *****永清新增*****
                    {path: '/orchardArea', component: orchardArea, name: '果园面积', meta: {requireAuth: true}},
                    {path: '/orchardAreaDetail', component: orchardAreaDetail, name: '果园面积修改详情', meta: {requireAuth: true}},
                    {path: '/freshFruitYield', component: freshFruitYield, name: '鲜果产量', meta: {requireAuth: true}},
                    {path: '/freshFruitYieldDetail', component: freshFruitYieldDetail, name: '鲜果产量修改详情', meta: {requireAuth: true}},
                    {path: '/forestryProduct', component: forestryProduct, name: '林业生产', meta: {requireAuth: true}},
                    {path: '/forestryProductDetail', component: forestryProductDetail, name: '林业生产修改详情', meta: {requireAuth: true}},
                    {path: '/cultivatedLandArea', component: cultivatedLandArea, name: '耕地面积', meta: {requireAuth: true}},
                    {path: '/cultivatedLandAreaDetail', component: cultivatedLandAreaDetail, name: '耕地面积修改详情', meta: {requireAuth: true}},
                    {path: '/CZ_NLMY', component: CZ_NLMY, name: '农林牧渔产值', meta: {requireAuth: true}},
                    {path: '/CZ_NLMYDetail', component: CZ_NLMYDetail, name: '农林牧渔产值修改详情', meta: {requireAuth: true}},
                    {path: '/ZJZ_NLMY', component: ZJZ_NLMY, name: '农林牧渔增加值', meta: {requireAuth: true}},
                    {path: '/ZJZ_NLMYDetail', component: ZJZ_NLMYDetail, name: '农林牧渔增加值修改详情', meta: {requireAuth: true}},

                ]
            },
            { //渔业渔政股
                path:'/fisheriesAdministration',
                component:fisheriesAdministration,
                redirect:'aquaticMachining', 
                children:[
                    {path: '/aquaticMachining', component: aquaticMachining, name: '水产加工', meta: {requireAuth: true}},
                    {path: '/aquaticMachiningDetail', component: aquaticMachiningDetail, name: '水产加工修改详情', meta: {requireAuth: true}},
                    {path: '/fisheryYield', component: fisheryYield, name: '渔业产值', meta: {requireAuth: true}},
                    {path: '/fisheryYieldDetail', component: fisheryYieldDetail, name: '渔业产值修改详情', meta: {requireAuth: true}},
                    {path: '/fisheryAddYield', component: fisheryAddYield, name: '渔业产值', meta: {requireAuth: true}},
                    {path: '/fisheryAddYieldDetail', component: fisheryAddYieldDetail, name: '渔业产值修改详情', meta: {requireAuth: true}},
                    {path: '/fisheryEnforcement', component: fisheryEnforcement, name: '渔业执法情况', meta: {requireAuth: true}},
                    {path: '/fisheryEnforcementDetail', component: fisheryEnforcementDetail, name: '渔业执法情况修改详情', meta: {requireAuth: true}},
                    {path: '/fisheriesPopulation', component: fisheriesPopulation, name: '渔业人口情况', meta: {requireAuth: true}},
                    {path: '/fisheriesPopulationDetail', component: fisheriesPopulationDetail, name: '渔业人口情况修改详情', meta: {requireAuth: true}},
                    {path: '/freshwaterFishingYield', component: freshwaterFishingYield, name: '淡水捕捞产量', meta: {requireAuth: true}},
                    {path: '/freshwaterFishingYieldDetail', component: freshwaterFishingYieldDetail, name: '淡水捕捞产量修改详情', meta: {requireAuth: true}},
                    {path: '/aquaticSeedling', component: aquaticSeedling, name: '主要水产苗种', meta: {requireAuth: true}},
                    {path: '/aquaticSeedlingDetail', component: aquaticSeedlingDetail, name: '主要水产苗种修改详情', meta: {requireAuth: true}},
                    {path: '/reservoirProduction', component: reservoirProduction, name: '水库渔业生产情况', meta: {requireAuth: true}},
                    {path: '/reservoirProductionDetail', component: reservoirProductionDetail, name: '水库渔业生产情况修改详情', meta: {requireAuth: true}},
                    {path: '/basicInformationOfFisheryList', component: basicInformationOfFisheryList, name: '渔业生产基本情况列表', meta: {requireAuth: true}},
                    {path: '/basicInformationOfFisheryDetail', component: basicInformationOfFisheryDetail, name: '渔业生产基本情况添加编辑详情', meta: {requireAuth: true}},
                    {path: '/freshwaterProductsList', component: freshwaterProductsList, name: '淡水养殖产品产量列表', meta: {requireAuth: true}},
                    {path: '/freshwaterProductsDetail', component: freshwaterProductsDetail, name: '淡水养殖产品产量添加编辑详情', meta: {requireAuth: true}},
                ]
            },
            { //畜牧股
                path:'/rearLivestockShare',
                component:rearLivestockShare,
                redirect:'pigBreeList', 
                children:[
                    {path: '/pigBreeList', component: pigBreeList, name: '生猪养殖', meta: {requireAuth: true}},
                    {path: '/pigBreeDetail', component: pigBreeDetail, name: '生猪养殖添加修改详情', meta: {requireAuth: true}},
                    {path: '/rearBusinessEntity', component: rearBusinessEntity, name: '生猪养殖', meta: {requireAuth: true}},
                    {path: '/rearBusinessEntityDetail', component: rearBusinessEntityDetail, name: '生猪养殖添加修改详情', meta: {requireAuth: true}},
                    {path: '/rearProductValue', component: rearProductValue, name: '畜产品产量', meta: {requireAuth: true}},
                    {path: '/rearProductValueDetail', component: rearProductValueDetail, name: '畜产品产量添加修改详情', meta: {requireAuth: true}},
                    {path: '/breedingCostData', component: breedingCostData, name: '养殖成本数据', meta: {requireAuth: true}},
                    {path: '/breedingCostDataDetail', component: breedingCostDataDetail, name: '养殖成本数据添加修改详情', meta: {requireAuth: true}},
                    {path: '/muXuYangZhi', component: muXuYangZhi, name: '牧畜养殖', meta: {requireAuth: true}},
                    {path: '/muXuYangZhiDetail', component: muXuYangZhiDetail, name: '牧畜养殖添加修改详情', meta: {requireAuth: true}},
                ]
            },
            { //兽医兽药股
                path:'/veterinaryMedicine',
                component:veterinaryMedicine,
                redirect:'veterinaryStation', 
                children:[
                    {path: '/veterinaryStation', component: veterinaryStation, name: '兽医站', meta: {requireAuth: true}},
                    {path: '/veterinaryStationDetail', component: veterinaryStationDetail, name: '兽医站添加修改详情', meta: {requireAuth: true}},
                    {path: '/veterinaryMedicineEnterprise', component: veterinaryMedicineEnterprise, name: '兽药经营企业', meta: {requireAuth: true}},
                    {path: '/veterinaryMedicineEnterpriseDetail', component: veterinaryMedicineEnterpriseDetail, name: '兽药经营企业添加修改详情', meta: {requireAuth: true}},
                    {path: '/veterinaryHospital', component: veterinaryHospital, name: '兽药经营企业', meta: {requireAuth: true}},
                    {path: '/veterinaryHospitalDetail', component: veterinaryHospitalDetail, name: '兽药经营企业添加修改详情', meta: {requireAuth: true}},
                    {path: '/pigSlaughterhouse', component: pigSlaughterhouse, name: '生猪定点屠宰场', meta: {requireAuth: true}},
                    {path: '/pigSlaughterhouseDetail', component: pigSlaughterhouseDetail, name: '生猪定点屠宰场添加修改详情', meta: {requireAuth: true}}
                ]
            },
            { //农业机械化与设施股
                path:'/agriculturalMachinery',
                component:agriculturalMachinery,
                redirect:'veterinaryStation', 
                children:[
                    {path: '/NJJYZT', component: NJJYZT, name: '农机经营主体', meta: {requireAuth: true}},
                    {path: '/NJJYZTDetail', component: NJJYZTDetail, name: '农机经营主体添加修改详情', meta: {requireAuth: true}},
                    {path: '/havePower', component: havePower, name: '农机拥有量-动力', meta: {requireAuth: true}},
                    {path: '/havePowerDetail', component: havePowerDetail, name: '农机拥有量-动力添加修改详情', meta: {requireAuth: true}},
                    {path: '/haveCount', component: haveCount, name: '农机拥有量-数量', meta: {requireAuth: true}},
                    {path: '/haveCountDetail', component: haveCountDetail, name: '农机拥有量-数量添加修改详情', meta: {requireAuth: true}},
                    {path: '/workSituation', component: workSituation, name: '农机作业情况', meta: {requireAuth: true}},
                    {path: '/workSituationDetail', component: workSituationDetail, name: '农机作业情况添加修改详情', meta: {requireAuth: true}},
                    {path: '/serviceInformation', component: serviceInformation, name: '农机服务', meta: {requireAuth: true}},
                    {path: '/serviceInformationDetail', component: serviceInformationDetail, name: '农机服务添加修改详情', meta: {requireAuth: true}}
                ]
            },
            { //粮油站
                path:'/grainAndOil',
                component:grainAndOil,
                redirect:'industryLeavePoor', 
                children:[
                    {path: '/industryLeavePoor', component: industryLeavePoor, name: '产业脱贫', meta: {requireAuth: true}},
                    {path: '/industryLeavePoorDetail', component: industryLeavePoorDetail, name: '产业脱贫添加修改详情', meta: {requireAuth: true}}
                ]
            },
            { //执法大队
                path:'/enforcementTeam',
                component:enforcementTeam,
                redirect:'enforcementAccount', 
                children:[
                    {path: '/enforcementAccount', component: enforcementAccount, name: '执法台账', meta: {requireAuth: true}},
                    {path: '/enforcementAccountDetail', component: enforcementAccountDetail, name: '执法台账添加修改详情', meta: {requireAuth: true}},
                    {path: '/pesticidesBusiness', component: pesticidesBusiness, name: '农药经营主体', meta: {requireAuth: true}},
                    {path: '/pesticidesBusinessDetail', component: pesticidesBusinessDetail, name: '农药经营主体添加修改详情', meta: {requireAuth: true}},
                ]
            },
            { //县委秘书办
                path:'/secretaryOffice',
                component:secretaryOffice,
                redirect:'newsDynamic', 
                children:[
                    {path: '/newsDynamic', component: newsDynamic, name: '新闻动态', meta: {requireAuth: true}},
                    {path: '/newsDynamicDetail', component: newsDynamicDetail, name: '新闻动态添加修改详情', meta: {requireAuth: true}},
                    {path: '/bannerImgMaintain', component: bannerImgMaintain, name: 'banner图维护', meta: {requireAuth: true}},
                    {path: '/bannerImgMaintainDetail', component: bannerImgMaintainDetail, name: 'banner图维护添加修改详情', meta: {requireAuth: true}}
                ]
            },
            { //经作站
                path:'/cashCropStation',
                component:cashCropStation,
                redirect:'veterinaryStation', 
                children:[
                    {path: '/fruitAndVegetable', component: fruitAndVegetable, name: '乡镇果蔬标准化基地', meta: {requireAuth: true}},
                    {path: '/fruitAndVegetableDetail', component: fruitAndVegetableDetail, name: '乡镇果蔬标准化基地添加修改详情', meta: {requireAuth: true}},
                    {path: '/maiDongManagement', component: maiDongManagement, name: '麦冬经营主体', meta: {requireAuth: true}},
                    {path: '/maiDongManagementDetail', component: maiDongManagementDetail, name: '麦冬经营主体添加修改详情', meta: {requireAuth: true}},
                    {path: '/maiDongMainArea', component: maiDongMainArea, name: '麦冬主产区面积', meta: {requireAuth: true}},
                    {path: '/maiDongMainAreaDetail', component: maiDongMainAreaDetail, name: '麦冬主产区面积添加修改详情', meta: {requireAuth: true}},
                    {path: '/maiDongProducts', component: maiDongProducts, name: '麦冬加工产品', meta: {requireAuth: true}},
                    {path: '/maiDongProductsDetail', component: maiDongProductsDetail, name: '麦冬加工产品添加修改详情', meta: {requireAuth: true}},
                    {path: '/maiDongYield', component: maiDongYield, name: '麦冬产量', meta: {requireAuth: true}},
                    {path: '/maiDongYieldDetail', component: maiDongYieldDetail, name: '麦冬产量添加修改详情', meta: {requireAuth: true}},
                ]
            },
            { //动物疫病预防控制中心
                path:'/animalDisease',
                component:animalDisease,
                redirect:'animalDiseasePage', 
                children:[
                    {path: '/animalDiseasePage', component: animalDiseasePage, name: '动物疫病防控', meta: {requireAuth: true}},
                    {path: '/animalDiseasePageDetail', component: animalDiseasePageDetail, name: '动物疫病防控添加修改详情', meta: {requireAuth: true}}
                ]
            },
            { //植保站
                path:'/plantProtectionStation',
                component:plantProtectionStation,
                redirect:'diseaseDescribe', 
                children:[
                    {path: '/diseaseDescribe', component: diseaseDescribe, name: '病害描述', meta: {requireAuth: true}},
                    {path: '/diseaseDescribeDetail', component: diseaseDescribeDetail, name: '病害描述添加修改详情', meta: {requireAuth: true}},
                    {path: '/preventionAndCure', component: preventionAndCure, name: '病虫害防治趋势', meta: {requireAuth: true}},
                    {path: '/preventionAndCureDetail', component: preventionAndCureDetail, name: '病虫害防治趋势添加修改详情', meta: {requireAuth: true}},
                    {path: '/monitoringPointData', component: monitoringPointData, name: '监测点数据', meta: {requireAuth: true}},
                    {path: '/monitoringPointDataDetail', component: monitoringPointDataDetail, name: '监测点数据添加修改详情', meta: {requireAuth: true}}
                ]
            },
            { //数据备份
                path:'/dataSecurity',
                component:dataSecurity,
                redirect:'runningStatus', 
                children:[
                    {path: '/runningStatus', component: runningStatus, name: '运行状态', meta: {requireAuth: true}},
                    {path: '/dataBackup', component: dataBackup, name: '数据备份', meta: {requireAuth: true}},
                ]
            },
            {  //质检办下的数据列表和添加修改详情的子路由配置
                path:'/qualityInspection',
                component:qualityInspection,
                redirect:'qualityOrganicProductsList',
                children:[
                    {path: '/qualityOrganicProductsList', component: qualityOrganicProductsList, name: '有机食品企业产品数据列表', meta: {requireAuth: true}},
                    {path: '/qualityOrganicProductsDetail', component: qualityOrganicProductsDetail, name: '有机食品企业产品数据添加修改详情', meta: {requireAuth: true}},
                    {path: '/qualityPollutionProductsList', component: qualityPollutionProductsList, name: '无公害企业产品数据列表', meta: {requireAuth: true}},
                    {path: '/qualityPollutionProductsDetail', component: qualityPollutionProductsDetail, name: '无公害企业产品数据添加修改详情', meta: {requireAuth: true}},
                    {path: '/qualityDetectionOfAgriculturalList', component: qualityDetectionOfAgriculturalList, name: '农产品农残检测情况信息表列表', meta: {requireAuth: true}},
                    {path: '/qualityDetectionOfAgriculturalDetail', component: qualityDetectionOfAgriculturalDetail, name: '农产品农残检测情况信息表添加修改详情', meta: {requireAuth: true}},
                    {path: '/qualityAgriculturalCheckStationList', component: qualityAgriculturalCheckStationList, name: '农产品检测站信息列表', meta: {requireAuth: true}},
                    {path: '/qualityAgriculturalCheckStationDetail', component: qualityAgriculturalCheckStationDetail, name: '农产品检测站信息添加修改详情', meta: {requireAuth: true}},
                    {path: '/qualityGreenfoodEnterprisesList', component: qualityGreenfoodEnterprisesList, name: '绿色食品企业产品数据列表', meta: {requireAuth: true}},
                    {path: '/qualityGreenfoodEnterprisesDetail', component: qualityGreenfoodEnterprisesDetail, name: '绿色食品企业产品数据添加修改详情', meta: {requireAuth: true}},
                    
                ]
            },
            {  //植保站--虫鼠害发生和防治面积 子路由
                path:'/plantProtectiveStation',
                component:plantProtectiveStation,
                redirect: '/occurrenceAndAreaList',
                children: [
                    {path: '/occurrenceAndAreaList', component: occurrenceAndAreaList, name: '渔业生产基本情况列表', meta: {requireAuth: true}},
                    {path: '/occurrenceAndAreaDetail', component: occurrenceAndAreaDetail, name: '渔业生产基本情况添加编辑详情', meta: {requireAuth: true}},
                ]
            },
            {   //渔业局 以下子路由
                path:'/fisheries',
                component:fisheries,
                redirect: '/basicInformationOfFisheryList',
                children: [
                    {path: '/basicInformationOfFisheryList', component: basicInformationOfFisheryList, name: '渔业生产基本情况列表', meta: {requireAuth: true}},
                    {path: '/basicInformationOfFisheryDetail', component: basicInformationOfFisheryDetail, name: '渔业生产基本情况添加编辑详情', meta: {requireAuth: true}},
                    {path: '/freshwaterProductsList', component: freshwaterProductsList, name: '淡水养殖产品产量列表', meta: {requireAuth: true}},
                    {path: '/freshwaterProductsDetail', component: freshwaterProductsDetail, name: '淡水养殖产品产量添加编辑详情', meta: {requireAuth: true}},
                ]
            },
            {   //土肥站 以下子路由
                path:'/tuFeiZhan',
                component:tuFeiZhan,
                redirect: '/basicSituationOfPointsList',
                children: [
                    {path: '/basicSituationOfPointsList', component: basicSituationOfPointsList, name: '监测点基本情况', meta: {requireAuth: true}},
                    {path: '/basicSituationOfPointsDetail', component: basicSituationOfPointsDetail, name: '监测点基本情况添加编辑详情', meta: {requireAuth: true}},
                    {path: '/inputUsageList', component: inputUsageList, name: '投入品使用情况', meta: {requireAuth: true}},
                    {path: '/inputUsageDetail', component: inputUsageDetail, name: '投入品使用情况添加编辑详情', meta: {requireAuth: true}},
                    {path: '/farmlandQualityDataList', component: farmlandQualityDataList, name: '监测点耕地质量数据', meta: {requireAuth: true}},
                    {path: '/farmlandQualityDataDetail', component: farmlandQualityDataDetail, name: '监测点耕地质量数据添加编辑详情', meta: {requireAuth: true}},
                ]
            },
            {
                //农机局 及以下子路由
                path:'/agriculturalBureau',
                component:agriculturalBureau,
                redirect: '/agriculturalMachineryShipList',
                children: [
                    {path: '/agriculturalMachineryShipList', component: agriculturalMachineryShipList, name: '农机拥有量', meta: {requireAuth: true}},
                    {path: '/agriculturalMachineryShipDetail', component: agriculturalMachineryShipDetail, name: '农机拥有量添加编辑详情', meta: {requireAuth: true}},
                ]
            },
            {
                //农经办 及以下子路由
                path:'/nongJingBan',
                component:nongJingBan,
                redirect: '/landContractData',
                children: [
                    {path: '/landContractData', component: landContractData, name: '土地承包数据', meta: {requireAuth: true}},
                    {path: '/landContractDataDetail', component: landContractDataDetail, name: '土地承包数据添加编辑详情', meta: {requireAuth: true}},
                ]
            },
            {
                //产业办 及以下子路由
                path:'/industryDo',
                component:industryDo,
                redirect: '/doOrganicFoodEnter',
                children: [
                    {path: '/doOrganicFoodEnter', component: doOrganicFoodEnter, name: '有机食品企业产品数据', meta: {requireAuth: true}},
                    {path: '/doOrganicFoodEnterDetail', component: doOrganicFoodEnterDetail, name: '有机食品企业产品数据添加编辑详情', meta: {requireAuth: true}},
                    {path: '/doHarmlessProductsEnter', component: doHarmlessProductsEnter, name: '无公害企业产品数据', meta: {requireAuth: true}},
                    {path: '/doHarmlessProductsEnterDetail', component: doHarmlessProductsEnterDetail, name: '无公害企业产品数据添加编辑详情', meta: {requireAuth: true}},
                    {path: '/doCropSownArea', component: doCropSownArea, name: '农作物播种面积', meta: {requireAuth: true}},
                    {path: '/doCropSownAreaDetail', component: doCropSownAreaDetail, name: '农作物播种面积添加编辑详情', meta: {requireAuth: true}},
                    {path: '/doAgriculturalOutputValue', component: doAgriculturalOutputValue, name: '农产品企业产值', meta: {requireAuth: true}},
                    {path: '/doAgriculturalOutputValueDetail', component: doAgriculturalOutputValueDetail, name: '农产品企业产值添加编辑详情', meta: {requireAuth: true}},
                    {path: '/doGreenFoodValue', component: doGreenFoodValue, name: '绿色食品企业产品数据', meta: {requireAuth: true}},
                    {path: '/doGreenFoodValueDetail', component: doGreenFoodValueDetail, name: '绿色食品企业产品数据添加编辑详情', meta: {requireAuth: true}},
                    {path: '/doBusinessEntity', component: doBusinessEntity, name: '经营主体', meta: {requireAuth: true}},
                    {path: '/doBusinessEntityDetail', component: doBusinessEntityDetail, name: '经营主体添加编辑详情', meta: {requireAuth: true}},
                ]
            },
            {
                //商务局 及以下子路由
                path:'/bureauCommerce',
                component:bureauCommerce,
                redirect: '/agriculturalMarketInfo',
                children: [
                    {path: '/agriculturalMarketInfo', component: agriculturalMarketInfo, name: '农产品批发市场信息', meta: {requireAuth: true}},
                    {path: '/agriculturalMarketInfoDetail', component: agriculturalMarketInfoDetail, name: '农产品批发市场信息添加编辑详情', meta: {requireAuth: true}},
                    {path: '/marketBusinessEntity', component: marketBusinessEntity, name: '经营主体', meta: {requireAuth: true}},
                    {path: '/marketBusinessEntityDetail', component: marketBusinessEntityDetail, name: '经营主体添加编辑详情', meta: {requireAuth: true}},
                    {path: '/agriculturalPriceData', component: agriculturalPriceData, name: '农产品交易价格数据', meta: {requireAuth: true}},
                    {path: '/agriculturalPriceDataDetail', component: agriculturalPriceDataDetail, name: '农产品交易价格数据添加编辑详情', meta: {requireAuth: true}},
                ]
            },
            {
                //统计局 及以下子路由
                path:'/statisticalBureau',
                component:statisticalBureau,
                redirect: '/agrYieldUnitArea',
                children: [
                    {path: '/agrYieldUnitArea', component: agrYieldUnitArea, name: '主要农产品单位面积产量', meta: {requireAuth: true}},
                    {path: '/agrYieldUnitAreaDetail', component: agrYieldUnitAreaDetail, name: '主要农产品单位面积产量添加编辑详情', meta: {requireAuth: true}},
                    {path: '/agrOutputProduct', component: agrOutputProduct, name: '主要农产品产量', meta: {requireAuth: true}},
                    {path: '/agrOutputProductDetail', component: agrOutputProductDetail, name: '主要农产品产量添加编辑详情', meta: {requireAuth: true}},
                    {path: '/statistInputUsage', component: statistInputUsage, name: '投入品使用情况', meta: {requireAuth: true}},
                    {path: '/statistInputUsageDetail', component: statistInputUsageDetail, name: '投入品使用情况添加编辑详情', meta: {requireAuth: true}},
                    {path: '/statistCropSownArea', component: statistCropSownArea, name: '农作物播种面积', meta: {requireAuth: true}},
                    {path: '/statistCropSownAreaDetail', component: statistCropSownAreaDetail, name: '农作物播种面积添加编辑详情', meta: {requireAuth: true}},
                    {path: '/statistMachineryList', component: statistMachineryList, name: '农作物播农机拥有量（台）种面积', meta: {requireAuth: true}},
                    {path: '/statistMachineryListDetail', component: statistMachineryListDetail, name: '农机拥有量（台）添加编辑详情', meta: {requireAuth: true}},
                    {path: '/statistTotalValue', component: statistTotalValue, name: '农林牧渔总产值', meta: {requireAuth: true}},
                    {path: '/statistTotalValueDetail', component: statistTotalValueDetail, name: '农林牧渔总产值添加编辑详情', meta: {requireAuth: true}},
                    {path: '/liveProductValue', component: liveProductValue, name: '畜产品产量', meta: {requireAuth: true}},
                    {path: '/liveProductValueDetail', component: liveProductValueDetail, name: '畜产品产量添加编辑详情', meta: {requireAuth: true}},
                    
                ]
            },
            {
                path:'/landResourcesBureau',
                component:landResourcesBureau, //国土局
                redirect: '/landUseLeaveOneList',
                children:[
                    {path: '/landUseLeaveOneList', component: landUseLeaveOneList, name: '农村土地利用现状一级分类面积汇总表', meta: {requireAuth: true}},
                    {path: '/landUseLeaveOneDetail', component: landUseLeaveOneDetail, name: '农村土地利用现状一级分类面积汇总表详情', meta: {requireAuth: true}  } ,
                    {path: '/landUseLeaveTwoList', component: landUseLeaveTwoList, name: '农村土地利用现状二级分类面积汇总表', meta: {requireAuth: true}},
                    {path: '/landUseLeaveTwoDetail', component: landUseLeaveTwoDetail, name: '农村土地利用现状二级分类面积汇总表详情', meta: {requireAuth: true}  }   
                ]
            },
            {
                //工商局 及以下子路由
                path:'/industrialBureau',
                component:industrialBureau,
                redirect: '/industrialBusinessEntity',
                children: [
                    {path: '/industrialBusinessEntity', component: industrialBusinessEntity, name: '经营主体', meta: {requireAuth: true}},
                    {path: '/industrialBusinessEntityDetail', component: industrialBusinessEntityDetail, name: '经营主体添加编辑详情', meta: {requireAuth: true}},
                ]
            },
            {
                //数据处理
                path:'/dataHandle',
                component:dataHandle,
                redirect: '/dataHandle',
                children: [
                    {path: '/dataHandle', component: dataHandle, name: '数据处理', meta: {requireAuth: true}}
                ]
            },
            {
                //数据共享
                path:'/dataShare',
                component:dataShare,
                redirect: '/dataShare',
                children: [
                    {path: '/dataShare', component: dataShare, name: '数据共享', meta: {requireAuth: true}}
                ]
            },
            //饲料办*****永清新增*****
            {
                //饲料企业
                path:'/feed',
                component:feed,
                redirect: '/areaFoodPlant',
                children: [
                    {path: '/feedEnterprise', component: feedEnterprise, name: '饲料企业', meta: {requireAuth: true}},
                    {path: '/feedEnterpriseDetail', component: feedEnterpriseDetail, name: '饲料企业添加编辑详情', meta: {requireAuth: true}}
                ]
            },

        ]
    },
    {
        path: '/Home',
        component: Home,
        name: '测试',
        meta: {
            requireAuth: true,
            isShowEnterpriseMap: false
        },
        iconCls: 'fa fa-address-card',
        children: [
            {
                path: '/404',
                component:noFount
            }
        ]
    },

    {
        path: '*',
        redirect: '/404'
    }

]
var router =  new VueRouter({
    routes
})

export default router