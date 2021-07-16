<template>
  <div class="user" v-if="loading">
    <header>
      <div class="name">
        <img src="@/images/touxiang.png" class="touxiang" />
      </div>
      <span class="tologin">登录/注册</span>
      <img src="@/images/userback.png" class="beijing" />
    </header>
    <van-cell-group>
      <van-cell title="我的订单" value="全部订单>" />
    </van-cell-group>
    <div class="grid">
      <van-grid :column-num="3">
        <van-grid-item
          v-for="value in 3"
          :key="value"
          icon="photo-o"
          text="文字"
        />
      </van-grid>
    </div>
    <div class="muban">
      <van-cell title="会员中心" icon="location-o" value=">" />
      <van-cell title="我的优惠" icon="location-o" value=">" />
    </div>
    <div class="muban">
      <van-cell title="服务中心" icon="location-o" value=">" />
      <van-cell title="小米之家" icon="location-o" value=">" />
    </div>
    <div class="muban">
      <van-cell title="我的F码" icon="location-o" value=">" />
      <van-cell title="礼品码兑换" icon="location-o" value=">" />
    </div>
    <van-cell title="设置" icon="location-o" value=">" />
    <TabBar></TabBar>
  </div>
  <content-loader
    v-else
    :width="414"
    :height="836"
    :speed="0.5"
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="6" y="10" rx="5" ry="5" width="100" height="20" />
    <rect x="11" y="54" rx="0" ry="0" width="384" height="110" />
    <rect x="7" y="176" rx="0" ry="0" width="400" height="125" />
    <rect x="320" y="235" rx="0" ry="0" width="24" height="0" />
    <rect x="123" y="17" rx="0" ry="0" width="274" height="20" />
    <circle cx="36" cy="329" r="15" />
    <rect x="13" y="352" rx="0" ry="0" width="51" height="5" />
    <circle cx="124" cy="329" r="15" />
    <rect x="101" y="352" rx="0" ry="0" width="51" height="5" />
    <circle cx="211" cy="329" r="15" />
    <rect x="184" y="352" rx="0" ry="0" width="51" height="5" />
    <circle cx="289" cy="329" r="15" />
    <rect x="263" y="352" rx="0" ry="0" width="51" height="5" />
    <circle cx="371" cy="329" r="15" />
    <rect x="345" y="352" rx="0" ry="0" width="51" height="5" />
    <circle cx="37" cy="394" r="15" />
    <rect x="11" y="423" rx="0" ry="0" width="51" height="5" />
    <circle cx="126" cy="394" r="15" />
    <rect x="101" y="423" rx="0" ry="0" width="51" height="5" />
    <circle cx="213" cy="394" r="15" />
    <rect x="195" y="424" rx="0" ry="0" width="52" height="0" />
    <rect x="187" y="423" rx="0" ry="0" width="51" height="5" />
    <circle cx="288" cy="394" r="15" />
    <rect x="263" y="423" rx="0" ry="0" width="51" height="5" />
    <circle cx="371" cy="394" r="15" />
    <rect x="13" y="443" rx="0" ry="0" width="357" height="76" />
    <rect x="56" y="537" rx="0" ry="0" width="103" height="60" />
    <rect x="224" y="537" rx="0" ry="0" width="103" height="60" />
    <rect x="59" y="606" rx="0" ry="0" width="100" height="5" />
    <rect x="59" y="616" rx="0" ry="0" width="100" height="5" />
    <rect x="59" y="627" rx="0" ry="0" width="100" height="5" />
    <rect x="225" y="607" rx="0" ry="0" width="100" height="5" />
    <rect x="227" y="618" rx="0" ry="0" width="100" height="5" />
    <rect x="227" y="627" rx="0" ry="0" width="100" height="5" />
  </content-loader>
</template>

<script>
import { Cell, CellGroup, Grid, GridItem } from 'vant'
import { TabBar } from '@/components/'
import { ContentLoader } from 'vue-content-loader'
export default {
  name: 'Message',
  data() {
    return {
      value: '',
      loading: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = true
    }, 2000)
  },
  components: {
    ContentLoader,
    TabBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
  },
}
</script>

<style lang="scss" scoped>
.user {
  height: 100%;
  background: #f5f5f5;
  padding-bottom: 0.4rem;
  header {
    height: 1.12rem;
    background: #f37d0f;
    position: relative;
    .beijing {
      height: 1.12rem;
      width: 100%;
    }
    .name {
      position: absolute;
      top: 0.2rem;
      left: 0.266667rem;
      .touxiang {
        height: 0.586667rem;
      }
    }
    .tologin {
      position: absolute;
      top: 0.333333rem;
      left: 1.066667rem;
      color: #fff;
    }
  }
  .grid {
    margin-bottom: 0.133333rem;
  }
  .muban {
    margin-bottom: 0.133333rem;
  }
}
.van-cell {
  height: 0.72rem;
  display: flex;
  align-items: center;
}
</style>