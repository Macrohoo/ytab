import router from '@/router'
import {RouterRowTy} from '~/router'
import { useAppStore } from '@/store/app';

function initAsnycRoutes() {
  const asyncRoutes = useAppStore().getAsyncRoutes
  if(asyncRoutes) {
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

router.beforeEach((to, from, next) => {
  if(useAppStore().getIsInitAsyncRoutes) {
    next()
  } else {
    initAsnycRoutes()
    next({ ...to, replace: true })
  }
})
