import Vue from 'vue'
import Router from 'vue-router'

// *****服务平台*****
import webSite from '@/views/webSite/webSite'       //菜单
import newAbout from '@/views/webSite/newAbout'     //关于平台
import knowledgeExchange from '@/views/webSite/knowledgeExchange'     //知识交流社区
import knowledgeExchangeList from '@/views/webSite/knowledgeExchangeList'     //知识交流社区列表
import accountSettings from '@/views/webSite/accountSettings'     //账号设置
//基础数据组件
import baseData from '@/views/webSite/BaseData'
import webSiteBaseDataJYZT from '@/views/webSite/webSiteBaseDataJYZT'
import webSiteBaseDataNYTRP from '@/views/webSite/webSiteBaseDataNYTRP'
import webSiteBaseDataNCPJY from '@/views/webSite/webSiteBaseDataNCPJY'
import webSiteBaseDataTDXX from '@/views/webSite/webSiteBaseDataTDXX'
import webSiteBaseDataZZXX from '@/views/webSite/webSiteBaseDataZZXX'
import webSiteBaseDataNSXX from '@/views/webSite/webSiteBaseDataNSXX'
import webSiteBaseDataNZWD from '@/views/webSite/webSiteBaseDataNZWD'

//信息服务组件
import infoService from '@/views/webSite/InfoService'
import webSiteInfoServiceDiseases from '@/views/webSite/webSiteInfoServiceDiseases'
import webSiteInfoServiceNews from '@/views/webSite/webSiteInfoServiceNews'
import webSiteInfoServicePolicy from '@/views/webSite/webSiteInfoServicePolicy'
import webSiteInfoServiceWorld from '@/views/webSite/webSiteInfoServiceWorld'
import webSiteInfoServicePolicyDetail from '@/views/webSite/webSiteInfoServicePolicyDetail'
import webSiteInfoServiceDiseasesDetail from '@/views/webSite/webSiteInfoServiceDiseasesDetail'
import webSiteInfoServiceNewsDetail from '@/views/webSite/webSiteInfoServiceNewsDetail'
import webSiteInfoServiceWorldDetail from '@/views/webSite/webSiteInfoServiceWorldDetail'
// *****管理平台*****
import industryAnalysis from '@/views/visualiza/industryAnalysis'
import industryAnalysisIndex from '@/views/visualiza/industryAnalysisIndex'     //主页
import visManage from '@/views/visualiza/visManage'             //经营主体
import visGeography from '@/views/visualiza/visGeography'       //地理信息
import visGrainAndOil from '@/views/visualiza/visGrainAndOil'       //粮油种植
import visAgriculturalData from '@/views/visualiza/visAgriculturalData'       //农机数据
import visPlant from '@/views/visualiza/visPlant'               //生产种植
import visEnvironment from '@/views/visualiza/visEnvironment'   //生产环境
import visProcess from '@/views/visualiza/visProcess'           //生产过程
import visDiseases from '@/views/visualiza/visDiseases'         //病虫害
import visMarket from '@/views/visualiza/visMarket'             //市场交易
import visInputs from '@/views/visualiza/visInputs'             //投入品数据
import visSource from '@/views/visualiza/visSource'             //质量溯源
import visLivestock from '@/views/visualiza/visLivestock'       //畜禽养殖
import visOphiopogon from '@/views/visualiza/visOphiopogon'       //麦冬种植
import visVegetables from '@/views/visualiza/visVegetables'       //麦冬种植
import visRattanPepper from '@/views/visualiza/visRattanPepper'       //藤椒种植
import visAnimalHusbandry from '@/views/visualiza/visAnimalHusbandry'       //畜牧养殖


import visLivestockWX from '@/views/wxPage/visLivestockWX'       //生猪--微信
import visManageWX from '@/views/wxPage/visManageWX'       //经营主体--微信
import visOphiopogonWX from '@/views/wxPage/visOphiopogonWX'       //麦冬--微信
import visDiseasesWX from '@/views/wxPage/visDiseasesWX'       //病虫害--微信
import visGeographyWX from '@/views/wxPage/visGeographyWX'       //土壤--微信


// *****404页面*****
import Page404 from '@/views/404page'       //麦冬种植
import MAP from '@/views/visualiza/home_map'       //麦冬种植
// import Video from '@/views/Video'       //麦冬种植

Vue.use(Router)
/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
export default new Router({
  //mode: 'hash',
  routes: [
    // *****服务平台*****
    {
      path: '/',
      component: webSite,
      name: '网站',
      redirect: '/newAbout',
      //redirect: '/webSiteIndex',      /*刷新默认进去的页面*/
      children: [
        {
          path: '/newAbout',
          name: '首页',
          component: newAbout
        },
        {
          path: '/baseData',
          name: '基础数据',
          component: baseData,
          redirect: '/baseData/webSiteBaseDataJYZT',
          children: [
            {
              path: '/baseData/webSiteBaseDataJYZT',
              name: '基础数据-经营主体数据',
              component: webSiteBaseDataJYZT
            },
            {
              path: '/baseData/webSiteBaseDataNYTRP',
              name: '基础数据-农业投入品数据',
              component: webSiteBaseDataNYTRP
            },
            {
              path: '/baseData/webSiteBaseDataNCPJY',
              name: '基础数据-农产品交易数据',
              component: webSiteBaseDataNCPJY
            },
            {
              path: '/baseData/webSiteBaseDataTDXX',
              name: '基础数据-土地信息数据',
              component: webSiteBaseDataTDXX
            },
            {
              path: '/baseData/webSiteBaseDataZZXX',
              name: '基础数据-种植信息数据',
              component: webSiteBaseDataZZXX
            },
            {
              path: '/baseData/webSiteBaseDataNSXX',
              name: '基础数据-农事信息数据',
              component: webSiteBaseDataNSXX
            },
            {
              path: '/baseData/webSiteBaseDataNZWD',
              name: '基础数据-农资网点数据',
              component: webSiteBaseDataNZWD
            },
          ]
        },
        {
          path: '/infoService',
          name: '信息服务',
          component: infoService,
          redirect: '/infoService/webSiteInfoServicePolicy',
          children: [
            {
              path: '/infoService/webSiteInfoServiceDiseases',
              name: '信息服务-病害虫防治',
              component: webSiteInfoServiceDiseases
            },
            {
              path: '/infoService/webSiteInfoServiceNews',
              name: '信息服务-农业新闻',
              component: webSiteInfoServiceNews
            },
            {
              path: '/infoService/webSiteInfoServicePolicy',
              name: '信息服务-政策信息',
              component: webSiteInfoServicePolicy
            },
            {
              path: '/infoService/webSiteInfoServiceWorld',
              name: '信息服务-农技技术',
              component: webSiteInfoServiceWorld
            },
            {
              path: '/infoService/webSiteInfoServiceWorldDetail',
              name: '信息服务-农技技术详情',
              component: webSiteInfoServiceWorldDetail
            },
            {
              path: '/infoService/webSiteInfoServiceDiseasesDetail',
              name: '信息服务-病害虫防治详情',
              component: webSiteInfoServiceDiseasesDetail
            },
            {
              path: '/infoService/webSiteInfoServiceNewsDetail',
              name: '信息服务-农业新闻详情',
              component: webSiteInfoServiceNewsDetail
            },
            {
              path: '/infoService/webSiteInfoServicePolicyDetail',
              name: '信息服务-政策信息详情',
              component: webSiteInfoServicePolicyDetail
            },
          ]
        },
        {
          path: '/knowledgeExchange',
          component: knowledgeExchange,
          name: '知识交流社区',
          children: [
            
          ]
        },
        {
          path: '/knowledgeExchangeList',
          component: knowledgeExchangeList,
          name: '知识交流社区',
          children: [
            
          ]
        },
        {
          path: '/accountSettings',
          component: accountSettings,
          name: '账号设置',
          children: [

          ]
        }
      ]
    },
    // *****管理平台*****
    {
      path: '/',
      component: industryAnalysis,
      name: '',
      children: [
        {path: '/industryAnalysisIndex', name: '农业一张图', component: industryAnalysisIndex},  //主页
        {path: '/visManage', name: '经营主体', component: visManage},                      //经营主体
        {path: '/visGeography', name: '地理信息', component: visGeography},                //地理信息
        {path: '/visGrainAndOil', name: '地理信息', component: visGrainAndOil},                //粮油种植
        {path: '/visAgriculturalData', name: '生产种植', component: visAgriculturalData},                //农机数据
        {path: '/visPlant', name: '生产种植', component: visPlant},                        //生产种植
        {path: '/visEnvironment', name: '生产环境', component: visEnvironment},            //生产环境
        {path: '/visProcess', name: '生产过程', component: visProcess},                    //农事数据
        {path: '/visDiseases', name: '产业园区', component: visDiseases},                    //病虫害
        {path: '/visMarket', name: '农业价格', component: visMarket},                      //市场交易
        {path: '/visInputs', name: '畜禽产量', component: visInputs},                    //投入品数据
        {path: '/visSource', name: '质量溯源', component: visSource},                      //质量溯源
        {path: '/visLivestock', name: '生猪养殖', component: visLivestock},                //畜禽养殖
        {path: '/visOphiopogon', name: '畜禽养殖', component: visOphiopogon},                //麦冬养殖
        {path: '/visVegetables', name: '蔬菜种植', component: visVegetables},                //蔬菜种植
        {path: '/visRattanPepper', name: '农业概览', component: visRattanPepper},                //藤椒种植
        {path: '/visAnimalHusbandry', name: '林果产业', component: visAnimalHusbandry},                //畜牧养殖
        {path: '/404', name: '页面开发中', component: Page404},                             //蔬菜种植
        {path: '/map', name: '地图', component: MAP},                //麦冬养殖

        // {path: '/video', name: '视频测试', component: Video},                //麦冬养殖
      ]
    },
    {path: '/visLivestockWX', name: '生猪', component: visLivestockWX},                //生猪--微信
    {path: '/visManageWX', name: '经营主体', component: visManageWX},                //经营主体--微信
    {path: '/visOphiopogonWX', name: '麦冬', component: visOphiopogonWX},                //麦冬--微信
    {path: '/visDiseasesWX', name: '病虫害', component: visDiseasesWX},                //病虫害--微信
    {path: '/visGeographyWX', name: '土壤', component: visGeographyWX},                //土壤--微信


  ]

})