<template>
    <div id="home">
        <el-container class="container">
            
            <el-header  class="header">
                <div class="header-left">
                    <span class="header-logo">农业数据资源接入系统</span>
                </div>
            <div class="header-right">
                <div class="backIndex" style="width:200px" @click="backIndex" v-show="isShowIndex">
                    <img src="../assets/backIndex.png" class="iconImg"/> <span>平台主页</span>
                </div>
                <div class="dropdownContent">
                    <el-dropdown class="logo-out">
                        <span class="el-dropdown-link ">
                            欢迎您 {{userAccount}} &nbsp; <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown" class="dropDown" >
                            <el-dropdown-item @click.native="loginOut">退出</el-dropdown-item>
                            <!-- <el-dropdown-item>退出</el-dropdown-item> -->
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            </el-header>
            <el-container class="container-2">
                <el-aside class="aside">
                    <el-scrollbar class="_scroll">
                    <!--:default-openeds="['1']"   menu-item-group    el-icon-message leftIcon-->
                    <el-menu default-active="userList" class="menu" router  unique-opened @open='open' :default-openeds='openItem'>
                        <el-menu-item index="index" :class="{menuItem:true,checkMenu:$route.path == '/index'}" @click="remenberPath('index')">
                            <!-- <i class="el-icon-setting"></i> -->
                            <span slot="title" style="font-size:16px;color:#000">平台首页</span>
                        </el-menu-item>
                        <el-submenu :index="items.menuUrl" class="submenu" v-for="(items,index) in menuList" :key="items.menuId">
                                <template slot="title" >
                                    <!-- <i :class="items.modIcon?items.modIcon:'el-icon-message leftIcon'"></i> -->
                                    <span>{{items.menuName}}</span></template>
                                <el-menu-item-group class="menu-item-group" v-for='item in menuList[index].children' :key="item.menuId">
                                    <el-menu-item
                                    @click="remenberPath(item.menuUrl)"
                                    :index="item.menuUrl" 
                                    :class="{menuItem:true,checkMenu:$route.path.indexOf(item.menuUrl.slice(0,-4)) >=0}">
                                        <!-- <i :class="item.modIcon?item.modIcon:'el-icon-menu leftIcon'"></i> -->
                                        <span>{{item.menuName}}</span>
                                    </el-menu-item>
                                </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                    </el-scrollbar>
                </el-aside>
                <el-main class="el-main">
                    <router-view style="height:100%"></router-view>
                </el-main>  
            </el-container>
        </el-container>       
    </div>
</template>
<script>
// import { getMenuById, loginOut, getUrl } from "@/utils/api/home"
import { getMenuById, getUrl } from "@/utils/api/home"
import {handleCofirm} from '@/utils/messageBox/confirm';
let Base64 = require('js-base64').Base64
export default {
    name:'home',
    data() {
        return{
            firstMenuId:'',
            authToken:'',
            openItem:[],
            menuList:[],
            // menuList:[
            //     {
            //        "isDelete": 0,
            //        "menuId": 1041,
            //        "menuName": "种植业股",
            //        "menuUrl": "ruralEconomy",
            //        "menuType": 0,
            //        "parentId": 1,
            //        "children": [
            //            {
            //                "menuUrl": "yieldEconomicsPlant",
            //                "isDelete": 0,
            //                "menuOrderNum": 1,
            //                "menuId": 1045,
            //                "menuName": "经济作物产量",
            //                "menuType": 0,
            //                "modIcon": "el-icon-s-custom",
            //                "parentId": 2
            //            },
            //            {
            //                "menuUrl": "areaFoodPlant",
            //                "isDelete": 0,
            //                "menuOrderNum": 1,
            //                "menuId": 1041,
            //                "menuName": "粮食作物播种面积",
            //                "menuType": 0,
            //                "modIcon": "el-icon-s-custom",
            //                "parentId": 2
            //            },
            //            {
            //                "menuUrl": "yieldFoodPlant",
            //                "isDelete": 0,
            //                "menuOrderNum": 1,
            //                "menuId": 1042,
            //                "menuName": "粮食作物产量",
            //                "menuType": 0,
            //                "modIcon": "el-icon-s-custom",
            //                "parentId": 2
            //            },
            //            {
            //                "menuUrl": "unitFoodPlant",
            //                "isDelete": 0,
            //                "menuOrderNum": 1,
            //                "menuId": 1043,
            //                "menuName": "粮食作物单产",
            //                "menuType": 0,
            //                "modIcon": "el-icon-s-custom",
            //                "parentId": 2
            //            },
            //            {
            //                "menuUrl": "areaEconomicsPlant",
            //                "isDelete": 0,
            //                "menuOrderNum": 1,
            //                "menuId": 1044,
            //                "menuName": "经济作物播种面积",
            //                "menuType": 0,
            //                "modIcon": "el-icon-s-custom",
            //                "parentId": 2
            //            },

            //            {
            //                "menuUrl": "unitEconomicsPlant",
            //                "isDelete": 0,
            //                "menuOrderNum": 1,
            //                "menuId": 1046,
            //                "menuName": "经济作物单产",
            //                "menuType": 0,
            //                "modIcon": "el-icon-s-custom",
            //                "parentId": 2
            //            },
            //            /*{
            //                "menuUrl": "townPlantArea",
            //                "isDelete": 0,
            //                "menuOrderNum": 1,
            //                "menuId": 1047,
            //                "menuName": "各乡镇种植面积",
            //                "menuType": 0,
            //                "modIcon": "el-icon-s-custom",
            //                "parentId": 2
            //            },*/
            //            {
            //                "menuUrl": "orchardArea",
            //                "isDelete": 0,
            //                "menuOrderNum": 1,
            //                "menuId": 1222,
            //                "menuName": "果园面积",
            //                "menuType": 0,
            //                "modIcon": "el-icon-s-custom",
            //                "parentId": 2
            //            },
            //            {
            //                "menuUrl": "freshFruitYield",
            //                "isDelete": 0,
            //                "menuOrderNum": 1,
            //                "menuId": 1223,
            //                "menuName": "鲜果产量",
            //                "menuType": 0,
            //                "modIcon": "el-icon-s-custom",
            //                "parentId": 2
            //            },
            //            {
            //                "menuUrl": "forestryProduct",
            //                "isDelete": 0,
            //                "menuOrderNum": 1,
            //                "menuId": 1224,
            //                "menuName": "林业生产",
            //                "menuType": 0,
            //                "modIcon": "el-icon-s-custom",
            //                "parentId": 2
            //            },
            //            {
            //                "menuUrl": "cultivatedLandArea",
            //                "isDelete": 0,
            //                "menuOrderNum": 1,
            //                "menuId": 1225,
            //                "menuName": "耕地面积",
            //                "menuType": 0,
            //                "modIcon": "el-icon-s-custom",
            //                "parentId": 2
            //            },
            //            {
            //                "menuUrl": "CZ_NLMY",
            //                "isDelete": 0,
            //                "menuOrderNum": 1,
            //                "menuId": 1226,
            //                "menuName": "农林牧渔产值",
            //                "menuType": 0,
            //                "modIcon": "el-icon-s-custom",
            //                "parentId": 2
            //            },
            //            {
            //                "menuUrl": "ZJZ_NLMY",
            //                "isDelete": 0,
            //                "menuOrderNum": 1,
            //                "menuId": 1226,
            //                "menuName": "农林牧渔增加值",
            //                "menuType": 0,
            //                "modIcon": "el-icon-s-custom",
            //                "parentId": 2
            //            },
            //        ]
            //    },
            //     {
            //         "isDelete": 0,
            //         "menuId": 1101,
            //         "menuName": "植保站",
            //         "menuUrl": "plantProtectionStation",
            //         "menuType": 0,
            //         "parentId": 1,
            //         "children": [
            //             {
            //                 "menuUrl": "preventionAndCure",
            //                 "isDelete": 0,
            //                 "menuOrderNum": 1,
            //                 "menuId": 1101,
            //                 "menuName": "病虫害防治趋势",
            //                 "menuType": 0,
            //                 "modIcon": "el-icon-s-custom",
            //                 "parentId": 2
            //             },
            //             {
            //                 "menuUrl": "diseaseDescribe",
            //                 "isDelete": 0,
            //                 "menuOrderNum": 1,
            //                 "menuId": 1102,
            //                 "menuName": "病害描述",
            //                 "menuType": 0,
            //                 "modIcon": "el-icon-s-custom",
            //                 "parentId": 2
            //             },
            //             {
            //                 "menuUrl": "monitoringPointData",
            //                 "isDelete": 0,
            //                 "menuOrderNum": 1,
            //                 "menuId": 1103,
            //                 "menuName": "土壤采样面积分布",
            //                 "menuType": 0,
            //                 "modIcon": "el-icon-s-custom",
            //                 "parentId": 2
            //             }
            //         ]
            //     },
            //     {
            //         "isDelete": 0,
            //         "menuId": 100,
            //         "menuName": "畜牧饲料股",
            //         "menuUrl": "rearLivestockShare",
            //         "menuType": 0,
            //         "parentId": 1,
            //         "children": [
            //             {
            //                 "menuUrl": "muXuYangZhi",
            //                 "isDelete": 0,
            //                 "menuOrderNum": 1,
            //                 "menuId": 105,
            //                 "menuName": "生猪养殖",
            //                 "menuType": 0,
            //                 "modIcon": "el-icon-s-custom",
            //                 "parentId": 2
            //             },
            //             {
            //                 "menuUrl": "rearProductValue",
            //                 "isDelete": 0,
            //                 "menuOrderNum": 1,
            //                 "menuId": 103,
            //                 "menuName": "畜产品产量",
            //                 "menuType": 0,
            //                 "modIcon": "el-icon-s-custom",
            //                 "parentId": 2
            //             },
            //             {
            //                 "menuUrl": "agriculturalProduction",
            //                 "isDelete": 0,
            //                 "menuOrderNum": 1,
            //                 "menuId": 1052,
            //                 "menuName": "农业生产条件",
            //                 "menuType": 0,
            //                 "modIcon": "el-icon-s-custom",
            //                 "parentId": 2
            //             },
            //             // {
            //             //     "menuUrl": "pigBreeList",
            //             //     "isDelete": 0,
            //             //     "menuOrderNum": 1,
            //             //     "menuId": 101,
            //             //     "menuName": "生猪养殖",
            //             //     "menuType": 0,
            //             //     "modIcon": "el-icon-s-custom",
            //             //     "parentId": 2
            //             // },
            //             // {
            //             //     "menuUrl": "rearBusinessEntity",
            //             //     "isDelete": 0,
            //             //     "menuOrderNum": 1,
            //             //     "menuId": 102,
            //             //     "menuName": "经营主体",
            //             //     "menuType": 0,
            //             //     "modIcon": "el-icon-s-custom",
            //             //     "parentId": 2
            //             // },
            //             // {
            //             //     "menuUrl": "breedingCostData",
            //             //     "isDelete": 0,
            //             //     "menuOrderNum": 1,
            //             //     "menuId": 104,
            //             //     "menuName": "养殖成本数据",
            //             //     "menuType": 0,
            //             //     "modIcon": "el-icon-s-custom",
            //             //     "parentId": 2
            //             // },
            //         ]
            //     },
            //     //永清新增  饲料办
            //     {
            //         "isDelete": 0,
            //         "menuId": 123,
            //         "menuName": "饲料办",
            //         "menuUrl": "feed",
            //         "menuType": 0,
            //         "parentId": 1,
            //         "children": [
            //             {
            //                 "menuUrl": "feedEnterprise",
            //                 "isDelete": 0,
            //                 "menuOrderNum": 1,
            //                 "menuId": 1232,
            //                 "menuName": "饲料企业",
            //                 "menuType": 0,
            //                 "modIcon": "el-icon-s-custom",
            //                 "parentId": 2
            //             },

            //         ]
            //     },
            //     {
            //         "isDelete": 0,
            //         "menuId": 18,
            //         "menuName": "农机局",
            //         "menuUrl": "agriculturalBureau",
            //         "menuType": 0,
            //         "parentId": 1,
            //         "children": [
            //             {
            //                 "menuUrl": "NJJYZT",
            //                 "isDelete": 0,
            //                 "menuOrderNum": 1,
            //                 "menuId": 19,
            //                 "menuName": "农机主体",
            //                 "menuType": 0,
            //                 "modIcon": "el-icon-s-custom",
            //                 "parentId": 2
            //             }
            //         ]
            //     },
            //     {
            //         "isDelete": 0,
            //         "menuId": 1010,
            //         "menuName": "农经股",
            //         "menuUrl": "ruralReform",
            //         "menuType": 0,
            //         "parentId": 1,
            //         "children": [
            //             {
            //                 "menuUrl": "reformBusinessEntity",
            //                 "isDelete": 0,
            //                 "menuOrderNum": 1,
            //                 "menuId": 1011,
            //                 "menuName": "经营主体",
            //                 "menuType": 0,
            //                 "modIcon": "el-icon-s-custom",
            //                 "parentId": 2
            //             },
            //             {
            //                 "menuUrl": "reformEnterpriseQuality",
            //                 "isDelete": 0,
            //                 "menuOrderNum": 1,
            //                 "menuId": 1012,
            //                 "menuName": "三品一标企业",
            //                 "menuType": 0,
            //                 "modIcon": "el-icon-s-custom",
            //                 "parentId": 2
            //             }
            //         ]
            //     },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 1051,
            //     //     "menuName": "种植业股",
            //     //     "menuUrl": "planting",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         {
            //     //             "menuUrl": "seedEnterprise",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1051,
            //     //             "menuName": "种子企业备案",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "agriculturalProduction",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1052,
            //     //             "menuName": "农业生产条件",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "landLevel",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1053,
            //     //             "menuName": "耕地地力等级",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "agriculturalRecycling",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1054,
            //     //             "menuName": "农膜覆盖及回收利用情况",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "agriculturalStoreInfo",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1055,
            //     //             "menuName": "农资店信息",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },

            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 1010,
            //     //     "menuName": "农村改革与服务体系股",
            //     //     "menuUrl": "ruralReform",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         {
            //     //             "menuUrl": "reformBusinessEntity",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1011,
            //     //             "menuName": "经营主体",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "reformEnterpriseQuality",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1012,
            //     //             "menuName": "三品一标企业",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         }
            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 1021,
            //     //     "menuName": "宜居乡村股",
            //     //     "menuUrl": "ruralLivable",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         {
            //     //             "menuUrl": "livableProjectManage",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1021,
            //     //             "menuName": "项目管理",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "livableVillageData",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1022,
            //     //             "menuName": "乡村数据汇总",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         }  
            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 1031,
            //     //     "menuName": "政策法规股",
            //     //     "menuUrl": "policy",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         {
            //     //             "menuUrl": "policyPesticideBan",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1031,
            //     //             "menuName": "禁用农药",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         }
            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 1061,
            //     //     "menuName": "渔业渔政股",
            //     //     "menuUrl": "fisheriesAdministration",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         {
            //     //             "menuUrl": "aquaticMachining",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1061,
            //     //             "menuName": "水产加工",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "fisheriesPopulation",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1062,
            //     //             "menuName": "渔业人口情况",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "freshwaterFishingYield",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1063,
            //     //             "menuName": "淡水捕捞产量",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "aquaticSeedling",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1064,
            //     //             "menuName": "主要水产苗种",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "reservoirProduction",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1065,
            //     //             "menuName": "水库渔业生产情况",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "basicInformationOfFisheryList",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 11,
            //     //             "menuName": "渔业生产基本情况",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "freshwaterProductsList",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 12,
            //     //             "menuName": "淡水养殖产品产量",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "fisheryYield",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 13,
            //     //             "menuName": "渔业产值",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "fisheryAddYield",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 14,
            //     //             "menuName": "渔业增加值",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "fisheryEnforcement",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 15,
            //     //             "menuName": "渔业执法情况",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         }
            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 1071,
            //     //     "menuName": "兽医兽药股",
            //     //     "menuUrl": "veterinaryMedicine",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         {
            //     //             "menuUrl": "veterinaryStation",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1071,
            //     //             "menuName": "兽医站",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "veterinaryMedicineEnterprise",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1072,
            //     //             "menuName": "兽药经营企业",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "veterinaryHospital",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1073,
            //     //             "menuName": "诊疗机构",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "pigSlaughterhouse",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1074,
            //     //             "menuName": "生猪定点屠宰场",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         } 
            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 1081,
            //     //     "menuName": "农业机械化与设施股",
            //     //     "menuUrl": "agriculturalMachinery",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         {
            //     //             "menuUrl": "NJJYZT",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1085,
            //     //             "menuName": "农机经营主体",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "havePower",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1081,
            //     //             "menuName": "农机拥有量-动力",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "haveCount",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1082,
            //     //             "menuName": "农机拥有量-数量",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "workSituation",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1083,
            //     //             "menuName": "农机作业情况",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "serviceInformation",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1084,
            //     //             "menuName": "农机服务",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         } 
            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 1301,
            //     //     "menuName": "粮油站",
            //     //     "menuUrl": "grainAndOil",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         {
            //     //             "menuUrl": "industryLeavePoor",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1302,
            //     //             "menuName": "产业脱贫",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         }
            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 1303,
            //     //     "menuName": "执法大队",
            //     //     "menuUrl": "enforcementTeam",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         {
            //     //             "menuUrl": "enforcementAccount",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1304,
            //     //             "menuName": "执法台账",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "pesticidesBusiness",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1305,
            //     //             "menuName": "农药经营主体",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         }
            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 1401,
            //     //     "menuName": "县委秘书办",
            //     //     "menuUrl": "secretaryOffice",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         {
            //     //             "menuUrl": "newsDynamic",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1401,
            //     //             "menuName": "新闻动态",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "bannerImgMaintain",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1402,
            //     //             "menuName": "banner图维护",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         }
            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 1091,
            //     //     "menuName": "经作站",
            //     //     "menuUrl": "cashCropStation",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         {
            //     //             "menuUrl": "fruitAndVegetable",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1091,
            //     //             "menuName": "乡镇果蔬标准化基地",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "maiDongManagement",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1092,
            //     //             "menuName": "麦冬经营主体",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "maiDongMainArea",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1093,
            //     //             "menuName": "麦冬主产区面积",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "maiDongProducts",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1094,
            //     //             "menuName": "麦冬加工产品",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "maiDongYield",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1095,
            //     //             "menuName": "麦冬产量",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         }
            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 1111,
            //     //     "menuName": "动物疫病预防控制中心",
            //     //     "menuUrl": "animalDisease",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         {
            //     //             "menuUrl": "animalDisease",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1111,
            //     //             "menuName": "动物疫病防控",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         }
            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 1200,
            //     //     "menuName": "数据备份",
            //     //     "menuUrl": "runningStatus",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         {
            //     //             "menuUrl": "runningStatus",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1201,
            //     //             "menuName": "运行状态",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId":1200
            //     //         },
            //     //         {
            //     //             "menuUrl": "dataBackup",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 1202,
            //     //             "menuName": "数据备份与还原",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId":1200
            //     //         }
            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 1,
            //     //     "menuName": "质检办",
            //     //     "menuUrl": "qualityInspection",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         {
            //     //             "menuUrl": "qualityOrganicProductsList",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 2,
            //     //             "menuName": "有机食品企业产品数据",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "qualityPollutionProductsList",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 2,
            //     //             "menuId": 4,
            //     //             "menuName": "无公害企业产品数据",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-copy-document",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "qualityDetectionOfAgriculturalList",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 3,
            //     //             "menuId": 5,
            //     //             "menuName": "农产品农残检测情况信息表",
            //     //             "menuType": 0,
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "qualityAgriculturalCheckStationList",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 4,
            //     //             "menuId": 6,
            //     //             "menuName": "农产品检测站信息",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-user",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "qualityGreenfoodEnterprisesList",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 5,
            //     //             "menuId": 7,
            //     //             "menuName": "绿色食品企业产品数据",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-notebook-2",
            //     //             "parentId": 2
            //     //         }
            //     //     ],
                    
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 8,
            //     //     "menuName": "植保站",
            //     //     "menuUrl": "plantProtectiveStation",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         {
            //     //             "menuUrl": "occurrenceAndAreaList",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 9,
            //     //             "menuName": "虫鼠害发生和防治面积",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 10,
            //     //     "menuName": "渔业局",
            //     //     "menuUrl": "fisheries",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         // {
            //     //         //     "menuUrl": "basicInformationOfFisheryList",
            //     //         //     "isDelete": 0,
            //     //         //     "menuOrderNum": 1,
            //     //         //     "menuId": 11,
            //     //         //     "menuName": "渔业生产基本情况",
            //     //         //     "menuType": 0,
            //     //         //     "modIcon": "el-icon-s-custom",
            //     //         //     "parentId": 2
            //     //         // },
            //     //         // {
            //     //         //     "menuUrl": "freshwaterProductsList",
            //     //         //     "isDelete": 0,
            //     //         //     "menuOrderNum": 1,
            //     //         //     "menuId": 12,
            //     //         //     "menuName": "淡水养殖产品产量",
            //     //         //     "menuType": 0,
            //     //         //     "modIcon": "el-icon-s-custom",
            //     //         //     "parentId": 2
            //     //         // }
            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 14,
            //     //     "menuName": "土肥站",
            //     //     "menuUrl": "tuFeiZhan",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         {
            //     //             "menuUrl": "basicSituationOfPointsList",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 15,
            //     //             "menuName": "监测点基本情况",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "inputUsageList",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 16,
            //     //             "menuName": "投入品使用情况",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "farmlandQualityDataList",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 17,
            //     //             "menuName": "监测点耕地质量数据",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 20,
            //     //     "menuName": "农经办",
            //     //     "menuUrl": "nongJingBan",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         {
            //     //             "menuUrl": "landContractData",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 21,
            //     //             "menuName": "土地承包数据",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         }
            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 22,
            //     //     "menuName": "产业办",
            //     //     "menuUrl": "industryDo",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         {
            //     //             "menuUrl": "doOrganicFoodEnter",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 23,
            //     //             "menuName": "有机食品企业产品数据",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "doHarmlessProductsEnter",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 24,
            //     //             "menuName": "无公害企业产品数据",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "doCropSownArea", 
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 25,
            //     //             "menuName": "农作物播种面积",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "doAgriculturalOutputValue",  
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 26,
            //     //             "menuName": "农产品企业产值",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "doGreenFoodValue",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 27,
            //     //             "menuName": "绿色食品企业产品数据",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },
            //     //         {
            //     //             "menuUrl": "doBusinessEntity",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 28,
            //     //             "menuName": "经营主体",
            //     //             "menuType": 0,
            //     //             "parentId": 2
            //     //         },
            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 29,
            //     //     "menuName": "商务局",
            //     //     "menuUrl": "bureauCommerce",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [
            //     //         {
            //     //             "menuUrl": "agriculturalMarketInfo",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 30,
            //     //             "menuName": "农产品批发市场信息",
            //     //             "menuType": 0,
            //     //             "parentId": 2
            //     //         },{
            //     //             "menuUrl": "marketBusinessEntity",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 31,
            //     //             "menuName": "经营主体",
            //     //             "menuType": 0,
            //     //             "parentId": 2
            //     //         },{
            //     //             "menuUrl": "agriculturalPriceData",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 32,
            //     //             "menuName": "农产品交易价格数据",
            //     //             "menuType": 0,
            //     //             "parentId": 2
            //     //         },
            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 35,
            //     //     "menuName": "统计局",
            //     //     "menuUrl": "statisticalBureau",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [{
            //     //             "menuUrl": "agrYieldUnitArea",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 36,
            //     //             "menuName": "主要农产品单位面积产量",
            //     //             "menuType": 0,
            //     //             "parentId": 2
            //     //         },{
            //     //             "menuUrl": "agrOutputProduct",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 37,
            //     //             "menuName": "主要农产品产量",
            //     //             "menuType": 0,
            //     //             "parentId": 2
            //     //         },{ 
            //     //             "menuUrl": "statistInputUsage",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 38,
            //     //             "menuName": "投入品使用情况",
            //     //             "menuType": 0,
            //     //             "parentId": 2
            //     //         },{
            //     //             "menuUrl": "statistCropSownArea",  
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 39,
            //     //             "menuName": "农作物播种面积",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },{
            //     //             "menuUrl": "statistMachineryList",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 40,
            //     //             "menuName": "农机拥有量",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },{
            //     //             "menuUrl": "statistTotalValue",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 41,
            //     //             "menuName": "农林牧渔总产值",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         },{
            //     //             "menuUrl": "liveProductValue",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 42,
            //     //             "menuName": "畜产品产量",
            //     //             "menuType": 0,
            //     //             "modIcon": "el-icon-s-custom",
            //     //             "parentId": 2
            //     //         }    
            //     //     ]
            //     // },
            //     // {
            //     //     "isDelete": 0,
            //     //     "menuId": 43,
            //     //     "menuName": "国土局",
            //     //     "menuUrl": "landUseLeaveOneList",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [{
            //     //             "menuUrl": "landUseLeaveOneList",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 44,
            //     //             "menuName": "土地现状一级分类",
            //     //             "menuType": 0,
            //     //             "parentId": 2
            //     //         }
            //     //     ]
            //     // },
            //     //{
            //     //     "isDelete": 0,
            //     //     "menuId": 4343,
            //     //     "menuName": "高标准农田建设股",
            //     //     "menuUrl": "landUseLeaveTwoList",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [{
            //     //             "menuUrl": "landUseLeaveTwoList",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 45,
            //     //             "menuName": "农村土地利用",
            //     //             "menuType": 0,
            //     //             "parentId": 2
            //     //         },
            //     //     ]
            //     // },
            //     //{
            //     //     "isDelete": 0,
            //     //     "menuId": 33,
            //     //     "menuName": "工商局",
            //     //     "menuUrl": "industrialBureau",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [{
            //     //             "menuUrl": "industrialBusinessEntity",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 34,
            //     //             "menuName": "经营主体",
            //     //             "menuType": 0,
            //     //             "parentId": 2
            //     //         }
            //     //     ]
            //     // },
            //     //{
            //     //      "isDelete": 0,
            //     //     "menuId": 46,
            //     //     "menuName": "新闻动态",
            //     //     "menuUrl": "newsTrends",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [{
            //     //             "menuUrl": "newsTrends",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 47,
            //     //             "menuName": "新闻动态",
            //     //             "menuType": 0,
            //     //             "parentId": 2
            //     //         }
            //     //     ]
                    
            //     // },
            //     // {
            //     //      "isDelete": 0,
            //     //     "menuId": 48,
            //     //     "menuName": "园区动态",
            //     //     "menuUrl": "dynamic",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [{
            //     //             "menuUrl": "dynamic",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 49,
            //     //             "menuName": "园区动态",
            //     //             "menuType": 0,
            //     //             "parentId": 2
            //     //         }
            //     //     ]
                    
            //     // },
            //     // {
            //     //      "isDelete": 0,
            //     //     "menuId": 52,
            //     //     "menuName": "数据处理",
            //     //     "menuUrl": "dataHandle",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [{
            //     //             "menuUrl": "dataHandle",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 53,
            //     //             "menuName": "数据处理",
            //     //             "menuType": 0,
            //     //             "parentId": 2
            //     //         }
            //     //     ]
                    
            //     // },
            //     // {
            //     //      "isDelete": 0,
            //     //     "menuId": 54,
            //     //     "menuName": "数据共享",
            //     //     "menuUrl": "dataShare",
            //     //     "menuType": 0,
            //     //     "parentId": 1,
            //     //     "children": [{
            //     //             "menuUrl": "dataShare",
            //     //             "isDelete": 0,
            //     //             "menuOrderNum": 1,
            //     //             "menuId": 55,
            //     //             "menuName": "数据共享",
            //     //             "menuType": 0,
            //     //             "parentId": 2
            //     //         }
            //     //     ]
                    
            //     // },
            //     {
            //          "isDelete": 0,
            //         "menuId": 50,
            //         "menuName": "自定义表单",
            //         "menuUrl": "customForm",
            //         "menuType": 0,
            //         "parentId": 1,
            //         "children": [{
            //                 "menuUrl": "customForm",
            //                 "isDelete": 0,
            //                 "menuOrderNum": 1,
            //                 "menuId": 51,
            //                 "menuName": "自定义表单",
            //                 "menuType": 0,
            //                 "parentId": 2
            //             }
            //         ]
                    
            //     },

            // ],
       

            phoneNo:'', //手机号
            userAccount:'', //登录名称
            isShowIndex:''
        }
    },
      mounted(){   
        this.atob();
         this.getMenuList(); //获取菜单列表
        if(sessionStorage.getItem('currentMenu')){
            this.openItem.push(sessionStorage.getItem('currentMenu'))
        }else{
            this.openItem = []
        }
        this.isShowIndex =sessionStorage.getItem("encrypt");
        window.loginOut = () => {
            this.loginOut()
        }
    },
    
    methods:{
        open(menuName){
            this.openItem = [];
            let currentMenu = menuName
            sessionStorage.setItem('currentMenu',currentMenu)
            this.openItem.push(currentMenu)
            console.log('menuName==',menuName)
        },
        remenberPath(pathName){
            let currentMenu = pathName;
            sessionStorage.setItem('currentMenuItem',currentMenu)
        },
        atob(){
            //设置平台主页距离
            let rightWidth = document.getElementsByClassName('dropdownContent')[0].offsetWidth;
            document.getElementsByClassName('backIndex')[0].style.right = (rightWidth+150)+'px'
            let authToken = this.$route.query.authToken;
            let firstMenuId = this.$route.query.firstMenuId;
            let phoneNo = this.$route.query.phoneNo;
            let userAccount =this.$route.query.userAccount;
            let encrypt = this.$route.query.encrypt;
            console.log(userAccount+"---==-----")
            if(authToken){
               // sessionStorage.setItem("authToken",authToken);
               if(encrypt){
                    //sessionStorage.setItem("authToken", Crypto.decrypt(authToken ,'abcdeFgabctoken2'));  //token
                    sessionStorage.setItem("encrypt",encrypt);
                    sessionStorage.setItem("authToken",Base64.decode(authToken));
                    
                }else{
                     //sessionStorage.setItem("authToken", Crypto.decrypt(authToken,'abcdeFgabctoken1'));  //token
                     //sessionStorage.setItem("authToken",authToken);
                      sessionStorage.setItem("authToken",Base64.decode(authToken));

                      sessionStorage.setItem("encrypt",'');
                }
            }
            if(firstMenuId){
                //sessionStorage.setItem("firstMenuId",Crypto.decrypt(this.getQueryVariable('firstMenuId'),'abcdefgabcdefg12')); //第一级菜单id
                sessionStorage.setItem("firstMenuId",firstMenuId); //第一级菜单id
            }
            if(phoneNo){
                if(encrypt){
                     sessionStorage.setItem("phoneNo", phoneNo);   //token
                }else{
                     sessionStorage.setItem("phoneNo", phoneNo);   //token
                }
               
                //sessionStorage.setItem("phoneNo",phoneNo); //第一级菜单id
            }
            if(userAccount){
                sessionStorage.setItem("userAccount",userAccount);   //token
                //sessionStorage.setItem("userAccount",this.getQueryVariable('userAccount')); //用户名
            }
            

        },
        goTo(path){
            this.$router.replace(path);
        },
        //获取路径问号的参数
        getQueryVariable(variable){
            let hash = window.location.hash;
            let splitIndex = window.location.hash.indexOf('?')

            hash = hash.substring(splitIndex)
            var query = hash.substring(1);
            var vars = query.split("&");
            for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
                    if(pair[0] == variable){return pair[1];}
            }
            return(false);
        },
         //获取菜单列表
        async getMenuList(){ 
            this.firstMenuId = sessionStorage.getItem('firstMenuId');
            this.authToken = sessionStorage.getItem('authToken');
            this.phoneNo =  sessionStorage.getItem('phoneNo');
            this.userAccount = sessionStorage.getItem('userAccount');
            const res = await getMenuById({
                id:this.firstMenuId,
                // userAccount:this.userAccount
                phone:this.userAccount
            });
            if(res.data.code == 0 || res.data.code == 200){
                this.menuList = res.data.data;
                if(sessionStorage.getItem('currentMenuItem')){
                    this.goTo('/'+sessionStorage.getItem('currentMenuItem'));
                }else{
                    this.goTo('/index');
                }
                
            }else if(res.data.code == -2){
                handleCofirm(res.data.msg, 'warning', false).then(() => {
                    this.loginOut();
                })
            }else if(res.data.code== -1 || res.data.code== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
                }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            } 
        },

        //退出登录
        async loginOut(){
            sessionStorage.setItem('userAccount', '')
          sessionStorage.setItem('authToken', '')
          location.href = 'http://39.104.114.103:8082/home/#/login'
            // const res = await loginOut();
            // if(res.data.code == 0 || res.data.code == 200){
            //     this.getUrl('loginOut');
            // }else if(res.data.code== -1 || res.data.code== 500){
            //     this.$message({
            //         message: res.data.msg,
            //         type: 'warning'
            //     })
            //     }else{
            //     this.$message({
            //         message: '服务器异常，请稍后再试',
            //         type: 'warning'
            //     })
            // } 
        },

        //获取地址
        async getUrl(urlFlag){
            const res = await getUrl();
            if(res.data.code == 0 || res.data.code == 200){
                sessionStorage.setItem('currentMenu',''); //返回首页或退出登录后清空当前菜单的缓存
                sessionStorage.setItem('currentMenuItem',''); //返回首页或退出登录后清空当前菜单的缓存
                if(urlFlag === 'loginOut'){
                     sessionStorage.setItem("encrypt",'');
                    window.location.href = res.data.data.loginUrl;

                }else if(urlFlag === 'backIndex'){
                    window.location.href = res.data.data.homeUrl;
                }
            }else if(res.data.code== -1 || res.data.code== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
                }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            } 

        },
        backIndex(){
            // this.getUrl('backIndex')
            location.href = 'http://39.104.114.103:8082/home/#/home'
        }
    }
}
</script>
<style scoped lang="scss">
    #home{
        width: 100%;
        height: 100%;
        .header{
            position: fixed;
            width: 100%;
            height: 70px !important;
            z-index: 100;
            line-height: 70px;
            background: #1b3b62;
            .header-left {
                float: left;
                width: 50%;
                height: 70px;
                line-height: 70px;
                color: #fff;
                font-size: 26px;
                letter-spacing: 1px;
                font-weight: bold;
            }
            .header-logo{
                margin-left: 25px;
                letter-spacing: 3px;
            }
            .header-right {
                float: right;
                width: 50%;
                height: 70px;
                line-height: 70px;
                color: #fff;
                font-size: 14px;
                text-align: right;

                div {
                    display: inline-block;
                    height: 70px;
                    margin-left: 20px;
                }
                img {
                    width: 18px;
                    height: 20px;
                }
                .logo-out {
    
                    padding-right: 20px !important;
                    cursor: pointer;
                    font-size: 18px;
                    color: #FFF  !important;
                }

            }

            
        }
        .container{
            width: 100%;
            height: 100%; 
            .aside{
                
                
                .menu{
                    background-color: #FFF !important;
                    height: 100% !important;
                     overflow-x: hidden;
                    .menu-item-group{
                        background-color: #fff !important;
                        .menuItem{
                            color: #000 ;
                            height: 40px !important;
                            line-height: 40px  !important;
                        }
                    }
                }
                
            }
            .leftIcon{
                color: #000  !important;
            }
            .el-main{
               // box-sizing: border-box;
               // display:table-cell;
                 width: 100%;
                //  margin: 0 auto;
                //  border: 5px solid #F8F8F8;
                padding:0 0.5%  !important;
                height: calc(100% - 20px);
                overflow: hidden;
            }
        }
        .container-2{
            height: calc(100% - 70px);
            margin-top: 70px;
        }
    }
    .dropDown{
        background-color: #1b3b62 !important;
        color: #FFF !important;
        font-size: 14px;
        margin-top: -10px !important;
        .el-dropdown-menu__item{
            color: #FFF !important;
        }
    }
    .backIndex{
        cursor: pointer;
        .iconImg{vertical-align: middle;}
        span{
            color: #FFF;
            display: inline-block;
            font-size: 16px;
        }
    }
    ._scroll{
        height: 100%;
    }
    @media (min-width: 1366px) {
        .aside{   
            width: 14% !important;
            height: calc(100% - 80px);
        }
    }
    @media (min-width: 1920px) {
      .aside{
          width: 13% !important;
          height: calc(100% - 20px);
      }
    }
</style>
<style lang="scss">
    .el-menu{
        border:0 !important;
    }
    .el-submenu__title{
        color: #000 !important;
    }
    .checkMenu,.el-menu-item:focus {
        outline: 0px;
        background-color: #409EFF !important;
        border-radius: 5px;
        width: 96%;
        margin: 0 auto;
        color: #FFF !important;
    } 
    .el-menu-item-group__title {
        padding: 0 !important;
    }
    .el-submenu__title{
        font-size: 16px!important;
    }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-dropdown-menu__item:hover{
      background-color: #405373  !important;
       color: #FFF !important;
  }
      .el-scrollbar__wrap{
        overflow-y: scroll !important;
        overflow-x: hidden !important;
    }
</style>