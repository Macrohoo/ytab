import { createRouter, createWebHashHistory, Router } from 'vue-router'
import Layout from '@/layout'
import { RouterTy } from '~/router'

export const constantRoutes: RouterTy = [
  {
    path: '/',
    component: Layout,
    redirect: '/mvideo',
    meta: { title: '关于想天浏览器', icon: 'tsbrowser' },
    children: [
      {
        path: 'mvideo',
        name: 'Mvideo',
        component: () => import('@/views/mvideo/index.vue'),
        meta: { title: '关于想天浏览器', icon: 'tsbrowser' },
      }
    ]
  },
  {
    path: '/noob-guide',
    component: Layout,
    meta: { title: '新用户引导', icon: 'SmileTwoTone' },
    children: [
      {
        path: 'account-login',
        name: 'AccountLogin',
        component: () => import('@/views/noob-guide/account-login/index.vue'),
        meta: { title: '账号登录', icon: '1' },
      },
      {
        path: 'career',
        name: 'Career',
        component: () => import('@/views/noob-guide/career/index.vue'),
        meta: { title: '职业选择', icon: '2' },
      },
      {
        path: 'migration',
        name: 'Migration',
        component: () => import('@/views/noob-guide/migration/index.vue'),
        meta: { title: '快速迁移', icon: '3' },
      },
      // {
      //   path: 'ad-blocking',
      //   name: 'AdBlocking',
      //   component: () => import('@/views/noob-guide/ad-blocking/index.vue'),
      //   meta: { title: '追踪和广告拦截', icon: '4' },
      // },
      // {
      //   path: 'personalise',
      //   name: 'Personalise',
      //   component: () => import('@/views/noob-guide/personalise/index.vue'),
      //   meta: { title: '个性化', icon: '4' },
      // },
    ]
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
  routes: constantRoutes
})


export default router

