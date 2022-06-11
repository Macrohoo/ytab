import { defineStore } from 'pinia'
import { swallpaperTy } from '~/wallpaper'

export const useWallpaperStore = defineStore('wallpaper', {
  state: () => {
    return {
      currentWallpaper: {} as swallpaperTy
    }
  },
  getters: {
    getCurrentWallpaper: (state) => state.currentWallpaper,
    getAllPictureWallpaper: () => JSON.parse(localStorage.getItem('WALLPAPER-PICTURE') as string),
    getCurrentWallpaperThemeColor: (state) => state.currentWallpaper.themeColor
  },
  actions: {
    SET_CURRENTWALLPAPER(swallpaperObj: swallpaperTy) :void{
      this.$patch((state) => {
        state.currentWallpaper = swallpaperObj
        localStorage.setItem('CURRENTWALLPAPER', JSON.stringify(swallpaperObj))
      })
    }
  }
})
