<template>
  <router-view />
  <video  autoplay muted loop :src="$pinia.state.value.wallpaper.currentWallpaper.url" id="video" v-show="$pinia.state.value.wallpaper.currentWallpaper.atrribute === 'video'"></video>
</template>
<script lang="ts">
import DataBeforeGuard from '@/dataBeforeGuard';
import { useWallpaperStore } from '@/store/wallpaper';

export default defineComponent({
  beforeCreate() {
    DataBeforeGuard.initWp();
    DataBeforeGuard.initSearchEngine()
  },
  mounted() {
    // 目前先这里尝试把第二张静态壁纸设置为当前壁纸
    this.setCurrentWallpaper();
    this.$nextTick(() => {
      this.transBackground();
    });
  },
  methods: {
    transBackground() :void {
      if (useWallpaperStore().getCurrentWallpaper.attribute === 'picture') {
        console.log(this.$pinia.state.value.wallpaper);
        // 设置的背景是图片的话
        const domApp = document.querySelector('#app') as HTMLElement;
        domApp.style.background = `url(${useWallpaperStore().getCurrentWallpaper.url}) no-repeat`;
        domApp.style.backgroundSize = 'cover';
        domApp.style.backgroundAttachment = 'fixed';
      } else {
        // 设置的背景是视频的话
      }
    }
  },
  provide() {
    return {
      '$message': this.$message
    }
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
#video {
  position: fixed;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;

  /* 这几个属性为poster图片过度用的 */
  /* transition: .3s;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; */
}
</style>
