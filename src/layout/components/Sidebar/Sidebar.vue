<template>
  <div id="sidebar">
    <a-menu
      class="menu-vertical"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      @click="handleClick"
      style="width: 260px"
    >
      <Link :to="'/'">
        <a-menu-item>
          <template #icon>
            <SvgIcon
              :name="'tsbrowser'"
              style="width: 22px; height: 22px"
            ></SvgIcon>
          </template>
          关于想天浏览器
        </a-menu-item>
      </Link>
      <a-sub-menu
        v-for="route in routes"
        :key="route.path"
        @titleClick="titleClick"
      >
        <template #icon>
          <AntdIcon
            :name="route.meta?.icon"
            :style="'font-size: 20px'"
          ></AntdIcon>
        </template>
        <template #title>{{ route.meta?.title }}</template>
        <a-menu-item
          v-for="route2 in route.children"
          :key="route2.path"
          class="child-menu-item"
        >
          <Link :to="resolvePath(route.path, route2.path)">
            <SvgIcon
              :name="route2.meta?.icon"
              style="
                position: absolute;
                left: 24px;
                top: 10px;
                width: 20px;
                height: 20px;
              "
            ></SvgIcon>
            {{ route2.meta?.title }}
          </Link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import type { MenuProps } from "ant-design-vue";
import { useAppStore } from "@/store/app";
import Link from "./Link.vue";
import path from "path";
import { isExternal } from "@/utils/validate";

export default defineComponent({
  components: {
    Link,
  },
  setup() {
    const appStore = useAppStore();
    //const route = useRoute()

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

    const openKeys = ref<string[]>(["sub1"]);
    const selectedKeys = ref<string[]>(["1"]);
    const handleClick: MenuProps["onClick"] = (e) => {
      console.log("click", e);
    };
    const titleClick = (e: Event) => {
      console.log("titleClick", e);
    };
    watch(
      () => openKeys,
      (val) => {
        console.log("openKeys", val);
      }
    );

    return {
      openKeys,
      selectedKeys,
      handleClick,
      titleClick,
      routes,
      resolvePath,
    };
  },
});
</script>

<style scoped lang="scss">
.child-menu-item {
  position: relative;
}
//child-menu-item细节位置调整
:deep .child-menu-item .ant-menu-title-content {
  padding-left: 6px;
}

:deep .ant-menu {
  background: $greyColor;
}
:deep .ant-menu-inline {
  border-right: 0px;
}

:deep .ant-menu-submenu-open {
  background: #ffffff;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  .ant-menu-sub {
    background: #ffffff;
    border-radius: 8px;
  }
}
:deep .ant-menu-item {
  &::after {
    border-right: 0px;
  }
}
:deep .ant-menu-title-content {
  color: rgba(0, 0, 0, 0.85);
}

</style>
