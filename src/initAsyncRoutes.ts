import router from '@/router'
import {RouterRowTy} from '~/router'
import { useAppStore } from '@/store/app';

function initAsnycRoutes() {
  const asyncRoutes = useAppStore().getAsyncRoutes
  asyncRoutes && asyncRoutes.forEach((e: RouterRowTy) => {
    e.component = () => import('@/views/common-template/index.vue')
    router.addRoute('father', e)
    useAppStore().ADD_BACKUP_ASYNC_ROUTES(e)
    useAppStore().ADD_ASYNC_ROUTES(e)
  })
}

router.beforeEach((to, from, next) => {
  if(useAppStore().getIsInitAsyncRoutes) {
    next()
  } else {
    initAsnycRoutes()
    next({ ...to, replace: true })
  }
})
