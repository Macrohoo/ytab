<template>
  <div>
    <SearchEngine class="se"></SearchEngine>
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
.se {
  position: fixed;
  top: 50px;
  left: 250px;
}

</style>
