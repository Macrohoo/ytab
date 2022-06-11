<template>
  <component :is="AntdSvg[`${name}`]" :style="style" :rotate="rotate" :spin="spin" :twoToneColor="twoToneColor"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as AntdSvg from '@ant-design/icons-vue';

export default defineComponent({
  props: {
    name: {
      require: true,
      type: String
    },
    rotate: {
      require: false,
      type: Number
    },
    spin: {
      require: false,
      default: false,
      type: Boolean
    },
    style: {
      require: false,
      type: String
    },
    twoToneColor: {
      require: false,
      type: String
    }
  },
  setup() {
    return { AntdSvg: <any> AntdSvg };
  }
});
</script>

<style scoped>

</style>
