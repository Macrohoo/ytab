<template>
  <div class="top-search flex justify-between align-center">
    <a-popover placement="bottomLeft" trigger="click" overlayClassName="poppop" v-model:visible="visible">
      <template #content>
        <div class="card-list flex flex-wrap justify-center align-center">
          <div v-for="(item, index) in allSearchEngines" :key="index" class="card flex justify-start align-center"
            @click="chooseSearch(item)">
            <SvgIcon :name="item.slinkLogo" style="font-size: 30px; margin-left: 20px;"></SvgIcon>
            <div style="margin-left: 15px">{{ item.name }}</div>
          </div>
        </div>
      </template>
      <template #title>
        <div class="card-head flex justify-between">
          <div class="left flex align-center justify-center">选择您的默认搜索引擎:</div>
          <div class="right flex align-center justify-center">
            <p>搜索热词:</p>
          </div>
        </div>
      </template>
      <SvgIcon :name="currentSearchEngine.slinkLogo" style="font-size: 30px; margin-left: 20px;"></SvgIcon>
    </a-popover>
    <input type="text" class="search" :value="searchWord"
      @input="searchWord = ($event.target as HTMLInputElement).value" style="font-size: 20px"
      @keyup.enter="enterSubmit" />
    <i class="search-logo el-icon-search" @click="enterSubmit"></i>
  </div>
</template>

<script lang="ts">
import { useSearchEngineStore } from '@/store/searchEngine'
import { searchEngineTy } from '~/searchEngine'

export default defineComponent({
  data() {
    return {
      visible: false,
      searchWord: '',
    }
  },
  methods: {
    chooseSearch(item: searchEngineTy) {
      useSearchEngineStore().SET_CURRENTSEARCH_ENGINE(item)
      this.visible = false
    },
    enterSubmit() {
      location.href = useSearchEngineStore().getCurrentSearchEngine.frontLink + this.searchWord
    }
  },
  setup() {
    const allSearchEngines = useSearchEngineStore().getAllSearchEngines
    const currentSearchEngine = computed(() => useSearchEngineStore().getCurrentSearchEngine)

    return {
      allSearchEngines,
      currentSearchEngine
    }
  }
})
</script>

<style scoped lang="scss">
.top-search {
  width: 706px;
  height: 54px;
  border-radius: 100px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  position: relative;

  .search {
    width: 580px;
    height: 50px;
  }

  .search-logo {
    cursor: pointer;
    z-index: 20;
    margin-right: 20px;
    font-size: 30px;

    &:hover {
      color: #1890ff;
    }
  }
}

.poppop {
  .card-head {
    width: 600px;
    height: 30px;

    .left {
      font-size: 14px;
      color: #999;
      margin-left: 10px;
    }

    .right {
      margin-right: 20px;
    }
  }

  .card-list {
    width: 640px;
    height: 300px;
    overflow: auto;
    cursor: pointer;

    .card {
      width: 28%;
      height: 18%;
      background-color: #f9f9f9;
      margin: 10px;
      border-radius: 5px;
      transition: all 1000ms cubic-bezier(0.215, 0.61, 0.355, 1);

      &:hover {
        background: rgba(163, 162, 162, 0.8);
        color: #1890ff;
      }

      img {
        margin-left: 10px;
        width: 30px;
      }

      div {
        margin-left: 10px;
      }
    }
  }
}
</style>
