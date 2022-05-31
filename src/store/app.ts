import { defineStore } from 'pinia'
import { constantRoutes } from '@/router'
import { RouterTy } from '~/router'


function filterRoutes(routes: RouterTy) {
  return routes.filter(v => v.path !== '/')
}

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      sidebar: { opened: true },
      cachedViews: [] as Array<string>,
      routes: filterRoutes(constantRoutes), //目前这里只有静态路由集合
    }
  },
  actions: {
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
