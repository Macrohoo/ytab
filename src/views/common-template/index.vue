<template>
  <div class="ya-matter flex flex-direction align-center">
    <header class="flex justify-center align-center">
      <SearchEngine class="se" />
    </header>
    <main>

    </main>
  </div>
</template>

<script lang="ts">
import SearchEngine from '@/components/SearchEngine.vue'

export default defineComponent({
  components: {
    SearchEngine
  },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="scss">
header {
  width: 100%;
  height: 30vh;
}

main {
  width: 90%;
  height: 70vh;
  background-color: rgba(255, 228, 196, 0.294);
}
</style>
