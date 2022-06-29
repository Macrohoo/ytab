import router from '@/router'
import { RouterRowTy } from '~/router'
import { useAppStore } from '@/store/app';
import { RouteLocationNormalized } from 'vue-router'   //to参数的类型 在vue-router包的声明文件中已经全局导出
import { useGridsStore } from '@/store/grids'

function initAsnycRoutes() {
  const asyncRoutes = useAppStore().getAsyncRoutes
  if (asyncRoutes) {
    asyncRoutes.forEach((e: RouterRowTy) => {
      e.component = () => import('@/views/common-template/index.vue')
      router.addRoute('father', e)
      useAppStore().MODIFY_ISINITASYNCROUTES(true)
      useAppStore().ADD_ASYNC_ROUTES(e)
    })
  } else {
    useAppStore().MODIFY_ISINITASYNCROUTES(true)
  }
}

router.beforeEach((to: RouteLocationNormalized, from, next) => {
  console.log(to, '????????????????')
  if (useAppStore().getIsInitAsyncRoutes) {
    useGridsStore().SYNC_SELECTED_GRIDS(to.meta.title as string)
    next()
  } else {
    initAsnycRoutes()
    next({ ...to, replace: true })
  }
})
