<template>
  <ContentLayout>
    <div class="al-main flex flex-direction justify-around align-center">
      <div class="al-main-top flex justify-between align-center">
        <div class="top-lf flex flex-direction justify-around align-center">
          <span class="title">基础功能</span>
          <div class="top-lf-mid flex flex-direction justify-around align-center">
            <div class="mid-item" v-for="item in basicFeat">
              <SvgIcon
                :name="item.icon"
                class="icon"
              ></SvgIcon>
              <div class="flex flex-direction justify-between align-start" style="width: 256px;">
                <span class="text1">{{item.title}}</span>
                <span class="text2">{{item.message}}</span>
              </div>
            </div>
          </div>
          <a-button style="width: 304px; height: 48px">暂不登录</a-button>
        </div>
        <div class="top-rg flex flex-direction justify-around align-center">
          <span class="title">登录后享有更多权益</span>
          <div class="top-rg-mid flex flex-direction justify-around align-center">
            <div class="mid-item" v-for="item in loginedFeat">
              <SvgIcon
                :name="item.icon"
                class="icon"
              ></SvgIcon>
              <div class="flex flex-direction justify-between align-start" style="width: 256px;">
                <span class="text1">{{item.title}}</span>
                <span class="text2">{{item.message}}</span>
              </div>
            </div>
          </div>
          <a-button type="primary" style="width: 304px; height: 48px; position: relative;">
            立即登录
            <span class="btn-span">推荐</span>
          </a-button>
        </div>
      </div>
      <div class="al-main-bottom text-grey-sm">
        登录后完成新用户引导即可获得勋章：初出茅庐
      </div>
    </div>
  </ContentLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContentLayout from "@/components/ContentLayout.vue";
import { message } from "ant-design-vue";

export default defineComponent({
  components: {
    ContentLayout,
  },
  data() {
    return {
      basicFeat: [
        {
          icon: 'tasks',
          title: '标签组',
          message: '一键锁定常用标签，一键分享标签组'
        },
        {
          icon: 'search',
          title: '全局搜索',
          message: '快捷键随时唤起，直达目标内容'
        },
        {
          icon: 'apps',
          title: '应用',
          message: '网页一键转为应用，带来原生体验'
        },
        {
          icon: 'desktop',
          title: '桌面',
          message: '便签，小组件等个性化新建标签页'
        },
        {
          icon: 'message',
          title: '消息中心',
          message: '统一的通知管理中心'
        },
      ],
      loginedFeat: [
        {
          icon: 'sync',
          title: '数据同步',
          message: '跨终端设备同步你的浏览数据，多用户空间支持'
        },
        {
          icon: 'team',
          title: '团队协作',
          message: '一键邀请加入团队，共享收藏夹、应用等资源'
        },
        {
          icon: 'meta',
          title: '元社区',
          message: '专属交流社区，专注内容分享和效率提升'
        }
      ]
    }
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.al-main {
  width: 100%;
  height: 100%;
  .al-main-top {
    height: 501px;
    width: 820px;
    .top-lf {
      width: 386px;
      height: 100%;
      border: 1px solid transparent;
      &:hover {
        background-color: rgba(80, 139, 254, 0.1);
        border-radius: 8px;
        border: 1px solid rgba(80, 139, 254, 1);
      }
      .top-lf-mid {
        width: 304px;
        height: 64%;
      }
    }
    .top-rg {
      width: 386px;
      height: 100%;
      border: 1px solid transparent;
      &:hover {
        background-color: rgba(80, 139, 254, 0.1);
        border-radius: 8px;
        border: 1px solid rgba(80, 139, 254, 1);
      }
      .top-rg-mid {
        width: 304px;
        height: 64%;
      }
    }
    .mid-item {
      min-height: 53px;
      width: 304px;
      display: flex;
      justify-content: start;
      align-items: start;
      .icon {
        width: 28px;
        height: 28px;
        margin-right: 20px;
      }
      .text1 {
        color: rgba(0, 0, 0, 0.85);
        font-size: 18px;
      }
      .text2 {
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
      }
    }
    .title {
      font-size: 20px;
      color: rgba(0, 0, 0, 0.85);
    }
    .btn-span {
      width: 40px;
      height: 24px;
      position: absolute;
      right: 0px;
      top: 0px;
      background-color: rgba(250, 173, 20, 1);
      font-size: 14px;
      color: rgba(255, 255, 255, 1);
    }
  }
  .al-main-bottom {
    height: 50px;
  }
}
</style>
