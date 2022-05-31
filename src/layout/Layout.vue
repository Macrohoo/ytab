<template>
  <div class="layout-wrapper">
    <Sidebar class="sidebar-container flex justify-center align-center" />
    <div class="main-container">
      <AppMain />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Sidebar, AppMain } from "./components";

export default defineComponent({
  components: {
    Sidebar,
    AppMain
  },
});
</script>

<style scoped lang="scss">
.layout-wrapper {
  width: 100%;
  height: 100%;
  .main-container {
    height: 100%;
    margin-left: $sideBarWidth;
    position: relative;
    background-color: $greyColor;
  }
  .sidebar-container {
    width: $sideBarWidth !important;
    background: $greyColor;
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
  }
}
</style>
