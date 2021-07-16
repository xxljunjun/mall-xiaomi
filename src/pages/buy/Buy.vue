<template>
  <van-skeleton title avatar :row="3" :loading="loading">
    <div class="buy">
      <div class="header">
        <van-nav-bar
          title="分类"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        >
          <template #right>
            <van-icon name="search" size="18" />
          </template>
        </van-nav-bar>
      </div>
      <div class="Variety">
        <van-sidebar v-model="activeKey" class="left">
          <van-sidebar-item
            :title="item.name"
            v-for="item in variety"
            :key="item.id"
          />
        </van-sidebar>
        <div class="right">1111111111</div>
      </div>
      <TabBar></TabBar>
    </div>
  </van-skeleton>
</template>

<script>
import { NavBar, Icon, Sidebar, SidebarItem, Skeleton } from 'vant'
import { TabBar } from '@/components/'
export default {
  name: 'Message',
  data() {
    return {
      loading: true,
      activeKey: 0,
      variety: [
        { id: 0, name: '小米手机' },
        { id: 1, name: 'Redmi手机' },
        { id: 2, name: '黑鲨手机' },
        { id: 3, name: '电视' },
        { id: 4, name: '大家电' },
        { id: 5, name: '电脑办公' },
        { id: 6, name: '小爱音箱' },
        { id: 7, name: '路由器' },
        { id: 8, name: '生活电器' },
        { id: 9, name: '厨房电器' },
        { id: 10, name: '智能穿戴' },
        { id: 11, name: '智能家居' },
      ],
    }
  },
  components: {
    TabBar,
    [Skeleton.name]: Skeleton,
    [Icon.name]: Icon,
    [NavBar.name]: NavBar,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
  },
  methods: {
    onClickLeft() {
      console.log(11)
      this.$router.push({ path: '/' })
    },
    onClickRight() {
      console.log(22)
    },
  },
}
</script>

<style lang="scss" scoped>
.buy {
  padding-top: 0.666667rem;
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    .van-nav-bar {
      height: 0.666667rem;
      background: #f2f2f2;
    }
  }
  .Variety {
    .left {
      position: absolute;
      top: 0.666667rem;
      left: 0;
      bottom: 0.666667rem;
      overflow: auto;
      border-right: 1px solid #efefef;
      background: #fefefe;
      width: 1.066667rem;
      /deep/.van-sidebar-item {
        padding-left: 0;
        padding-right: 0;
        text-align: center;
      }
      .van-sidebar-item--select {
        background-color: #f7f8fa;
        color: #fb7d34;
        font-weight: 600;
        &::before {
          display: none;
        }
      }
      /deep/.van-sidebar-item__text {
        font-size: 0.186667rem;
      }
    }
    .right {
      position: absolute;
      left: 1.066667rem;
      top: 0.666667rem;
      bottom: 0.666667rem;
      overflow: auto;
    }
  }
}
</style>