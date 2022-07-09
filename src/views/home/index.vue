<template>
  <div class="ya-matter flex flex-direction align-center">
    <header class="flex justify-center align-center">
      <SearchEngine class="se" />
      <button type="button" @click="addNewWidget('https://files.codelife.cc/website/12306.svg', '12306')">Add
        Widget</button>
    </header>
    <a-dropdown :trigger="['contextmenu']">
      <main>
        <section class="grid-stack beautiful-sm-scroll"></section>
      </main>
      <template #overlay>
        <a-menu>
          <a-menu-item key="1">
            <AntdIcon :name="'SwapOutlined'" :style="'font-size: 14px'" />
            切换壁纸
          </a-menu-item>
          <a-menu-item key="2">
            <AntdIcon :name="'PlusOutlined'" :style="'font-size: 14px'" />
            添加图标或组件
          </a-menu-item>
          <a-menu-item key="3">3rd menu item</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script lang="ts">
import SearchEngine from '@/components/SearchEngine.vue'
import { GridStack } from 'gridstack';
import { useGridsStore } from '@/store/grids'

export default defineComponent({
  components: {
    SearchEngine
  },
  setup() {
    const $message: { success: Function } = inject('$message')!
    let grid: any;

    onMounted(() => {
      grid = GridStack.init({
        float: false,
        cellHeight: "8vh",
        minRow: 1,
      });
      grid.enableResize(false);

      //监听到dragstop
      grid.on("dragstop", (event: any, element: any) => {
        const node = element.gridstackNode;
        $message.success(`成功移动至${node.y / 2 + 1}行${node.x + 1}列`)
      });

      loadHomeJson()
    });

    function loadHomeJson() {
      useGridsStore().getSelectedGrids.icon.forEach(v => {
        addNewWidget(v.src, v.name)
      })
    }

    function addNewWidget(src: string, name: string) {
      const el = `
        <div class="grid-stack-item">
          <div class="grid-stack-item-content flex flex-direction justify-around align-center">
            <img src="${src}" style="width: 5vw; height: 5vw; border-radius: 20px;" class="shadow-md" />
            <p class="cl-ant-p sg-omit-sm text-white-sm">${name}</p>
          </div>
        </div>
      `
      grid.addWidget(el, { w: 1, h: 2 });
    }

    return {
      addNewWidget,
    };
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
  //background-color: rgba(255, 228, 196, 0.294);


  section {
    width: 100%;
    max-height: 100%;
    overflow-y: scroll;
  }
}
</style>
