import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/famousBrand',//设置默认指向的路径
    component: () => import('../views/Home'),
    children:[
      {
        path: '/famousBrand',
        name: '知名品牌',
        component: () => import('../views/famousBrand'),
      },
      {
        path: '/dataAnalysis',
            name: '数据分析',
            redirect: '/dataAnalysis/vegetable',
            component: () => import('../views/dataAnalysis'),
            children: [
              {
                path: 'vegetable',
                name: '蔬菜',
                component: () => import('../views/dataAnalysis/components/vegetable')
              },
              {
                path: 'fruit',
                name: '水果',
                component: () => import('../views/dataAnalysis/components/fruit')
              },
              {
                path: 'animalHusbandry',
                name: '牧畜',
                component: () => import('../views/dataAnalysis/components/animalHusbandry')
              },
              {
                path: 'aquaticProducts',
                name: '水产',
                component: () => import('../views/dataAnalysis/components/aquaticProducts')
              },
            ]
      },
      {
        path: '/knowledgeExchange',
        name: '知识交流',
        redirect: '/knowledgeExchange/vegetable',
        component: () => import('../views/knowledgeExchange'),
        children: [
          {
            path: 'vegetable',
            name: '蔬菜',
            component: () => import('../views/knowledgeExchange/components/vegetable')
          },
          {
            path: 'fruit',
            name: '水果',
            component: () => import('../views/knowledgeExchange/components/fruit')
          },
          {
            path: 'animalHusbandry',
            name: '牧畜',
            component: () => import('../views/knowledgeExchange/components/animalHusbandry')
          },
          {
            path: 'aquaticProducts',
            name: '水产',
            component: () => import('../views/knowledgeExchange/components/aquaticProducts')
          },
        ]
      },
      {
        path: '/technologyPromotion',
        name: '技术推广',
        redirect: '/technologyPromotion/growSeedlings',
        component: () => import('../views/technologyPromotion'),
        children: [
          {
            path: 'growSeedlings',
            name: '育苗',
            component: () => import('../views/technologyPromotion/components/growSeedlings'),
            children: [
              {
                path: 'content',
                name: '详情',
                component: () => import('../views/technologyPromotion/components/util/content')
              }
            ]
          },
          {
            path: 'meansOfAgricultural',
            name: '农资',
            component: () => import('../views/technologyPromotion/components/meansOfAgricultural'),
            children: [
              {
                path: 'content',
                name: '详情',
                component: () => import('../views/technologyPromotion/components/util/content')
              }
            ]
          },
          {
            path: 'plantProtection',
            name: '植保',
            component: () => import('../views/technologyPromotion/components/plantProtection'),
            children: [
              {
                path: 'content',
                name: '详情',
                component: () => import('../views/technologyPromotion/components/util/content')
              }
            ]
          },
          {
            path: 'breed',
            name: '养殖',
            component: () => import('../views/technologyPromotion/components/breed'),
            children: [
              {
                path: 'content',
                name: '详情',
                component: () => import('../views/technologyPromotion/components/util/content')
              }
            ]
          }
        ]
      },
      {
        path: '/onlineVideo',
        redirect: '/onlineVideo/VideoVegetables',
        name: '在线视频',
        component: () => import('../views/onlineVideo'),
        children:[
          {
            path:'VideoVegetables',
            name:'蔬菜视频',
            component:()=> import('../views/onlineVideo/components/VideoVegetables.vue')
          },
          {
            path:'VideoFruit',
            name:'水果视频',
            component:()=> import('../views/onlineVideo/components/VideoFruit.vue')
          }
        ]
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
