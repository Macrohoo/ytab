import { defineStore } from 'pinia'
import { constantRoutes } from '@/router'
import { RouterTy, RouterRowTy } from '~/router'


export const useAppStore = defineStore('app', {
  state: () => {
    return {
      cachedViews: [] as Array<string>,
      routes: constantRoutes, //静态路由和动态路由集合
      isInitAsyncRoutes: false as boolean
    }
  },
  getters: {
    getAsyncRoutes: () => JSON.parse(localStorage.getItem('ASYNC_ROUTES')!),
    getIsInitAsyncRoutes: (state) => state.isInitAsyncRoutes
  },
  actions: {
    ADD_ASYNC_ROUTES(routeObj: RouterRowTy) {
      this.$patch((state) => {
        state.routes[0].children?.push(routeObj)
      })
    },
    MODIFY_ISINITASYNCROUTES(bool: boolean) {
      this.$patch(state => {
        state.isInitAsyncRoutes = bool
      })
    },

    /*keepAlive缓存操作*/  //缓存性能优化后面再搞，先放一下
    ADD_CACHED_VIEW(view: string) {
      this.$patch((state) => {
        if (state.cachedViews.includes(view)) return
        state.cachedViews.push(view)
      })
    },
    DEL_CACHED_VIEW(view: string) {
      this.$patch((state) => {
        const index = state.cachedViews.indexOf(view)
        index > -1 && state.cachedViews.splice(index, 1)
      })
    },
    RESET_CACHED_VIEW() {
      this.$patch((state) => {
        state.cachedViews = []
      })
    },
  }
})
