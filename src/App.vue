<template>
  <router-view />
</template>
<script lang="ts">
import DataBeforeGuard from '@/dataBeforeGuard';
import { useWallpaperStore } from '@/store/wallpaper';

export default defineComponent({
  beforeCreate() {
    DataBeforeGuard.initWp();
  },
  mounted() {
    // 目前先这里尝试把第二张静态壁纸设置为当前壁纸
    this.setCurrentWallpaper();
    this.$nextTick(() => {
      const domApp = document.querySelector('#app') as HTMLElement;
      domApp.style.background = `url(${useWallpaperStore().getCurrentWallpaper.url}) no-repeat`;
      domApp.style.backgroundSize = 'cover';
      domApp.style.backgroundAttachment = 'fixed';
    });
  },

  setup() {
    const wallpaperStore = useWallpaperStore();
    const setCurrentWallpaper = () => {
      wallpaperStore.SET_CURRENTWALLPAPER(wallpaperStore.getAllPictureWallpaper[1]);
    };

    return {
      setCurrentWallpaper
    };
  }
});
</script>
<style lang="scss">
</style>
