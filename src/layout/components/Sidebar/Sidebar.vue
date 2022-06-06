<template>
  <div id="sidebar" class="sd flex flex-direction justify-center align-center">
    <div class="sd-top"></div>
    <div class="sd-mid flex flex-direction justify-around align-center">
        <Link :to="resolvePath(routes[0].path, item.path)" v-for="item in routes[0].children" :key="item.path">
          <div
            class="sd-mid-div flex flex-direction justify-around align-center"
            :class="{active: selectedRouteName === item.name}"
            @click.stop="chooseBlock(item.name)"
          >
            <AntdIcon
              :name="item.meta?.icon"
              :style="atdIconSelected(item.name)"
            ></AntdIcon>
            <span class="text-white-sm sg-omit-sm" :class="{active: selectedRouteName === item.name}">{{ item.meta?.title }}</span>
          </div>
        </Link>
    </div>
    <div class="sd-bottom"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useAppStore } from "@/store/app";
import Link from "./Link.vue";
import path from "path";
import { isExternal } from "@/utils/validate";

export default defineComponent({
  components: {
    Link,
  },
  methods: {
    atdIconSelected(name: string | undefined) {
      if(this.selectedRouteName === name) {
        return 'font-size: 20px; color: #40a9ff'
      } else {
        return 'font-size: 20px; color: #eeeeee'
      }
    }
  },
  setup() {
    const appStore = useAppStore();

    const routes = computed(() => {
      return appStore.routes;
    });

    //二级子路由需要拼接path 例如：/noob-guide/account-login
    const resolvePath = (basePath: string, routePath: string) => {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(basePath)) {
        return basePath;
      }

      return path.resolve(basePath, routePath);
    };

    let selectedRouteName = ref<string | undefined>('')
    const chooseBlock = (routeName: string | undefined) => {
      selectedRouteName.value = routeName
    }

    // const openKeys = ref<string[]>(["sub1"]);
    // const selectedKeys = ref<string[]>(["1"]);
    // const handleClick: MenuProps["onClick"] = (e) => {
    //   console.log("click", e);
    // };
    // const titleClick = (e: Event) => {
    //   console.log("titleClick", e);
    // };
    // watch(
    //   () => openKeys,
    //   (val) => {
    //     console.log("openKeys", val);
    //   }
    // );

    return {
      routes,
      resolvePath,
      chooseBlock,
      selectedRouteName
    };
  },
});
</script>

<style scoped lang="scss">
.sd {
  width: 100%;
  height: 100%;
  background-color: #6eacb374;
  backdrop-filter: blur(2px);

  .sd-mid {
    width: 100%;
    height: 60%;
    .sd-mid-div {
      width: 50px;
      height: 50px;
      &.active{
        background-color: #c6d3dd;
        color: #40a9ff;
      }
      span {
        font-weight: 500;
        &.active{
          color: #40a9ff;
        }
      }
    }
  }
}
</style>
