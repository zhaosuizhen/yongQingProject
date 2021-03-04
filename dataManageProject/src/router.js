//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)
//引用page1页面

import home  from './view/home';

//数据资源目录
import release from "./view/dataResourceDirectory/release"
import catalog from "./view/dataResourceDirectory/catalog"
//数据存储管理
import dataBackups from "./view/dataStorageManage/dataBackups"
import dataReduction from "./view/dataStorageManage/dataReduction"
import serverInfo from "./view/dataStorageManage/serverInfo"
//数据安全管理
import interfacePublishing from "./view/dataSecurityManagement/interfacePublishing"
import interfaceAccount from "./view/dataSecurityManagement/interfaceAccount"
//数据交换管理
import databaseAccess from "./view/dataExchangeManagement/databaseAccess"
import dataImport from "./view/dataExchangeManagement/dataImport"
import dataClean from "./view/dataExchangeManagement/dataClean"
//数据分析挖掘管理
import userBehaviorAnalysis from "./view/dataAnalysisAndManagement/userBehaviorAnalysis"
import resourceMaintenance from "./view/dataAnalysisAndManagement/resourceMaintenance"


//定义routes路由的集合，数组类型
const routes=[
    //单个路由均为对象类型，path代表的是路径，component代表组件
    {
      path: '/',
      redirect: '/catalog' // 强制跳转
    },
    {
        path:'/home',
        component:home,
        children: [
            {
                path: '/release',
                component:release
            },
            {
                path: '/catalog',
                component:catalog
            },
            {
                path: '/dataBackups',
                component:dataBackups
            },
            {
                path: '/dataReduction',
                component:dataReduction
            },
            {
                path: '/serverInfo',
                component:serverInfo
            },
            {
                path: '/interfacePublishing',
                component:interfacePublishing
            },
            {
                path: '/interfaceAccount',
                component:interfaceAccount
            },
            {
                path: '/databaseAccess',
                component:databaseAccess
            },
            {
                path: '/dataImport',
                component:dataImport
            },
            {
                path: '/dataClean',
                component:dataClean
            },
            {
                path: '/userBehaviorAnalysis',
                component:userBehaviorAnalysis
            },
            {
                path: '/resourceMaintenance',
                component:resourceMaintenance
            }
        ]
    },
    {
      path: '/test',
      component: () => import('@/view/test')
    },
]

//实例化VueRouter并将routes添加进去
const router=new VueRouter({
//ES6简写，等于routes：routes
    routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router