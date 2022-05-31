<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <component :is="Component" :key="key" />
    </router-view>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const key = computed(() => route.path)
</script>

<style scoped lang="scss">
.app-main {
  padding: $appMainPadding;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -40px;
}

</style>
