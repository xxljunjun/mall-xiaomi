<template>
  <div class="x_home" id="home">
    <div class="searchBox">
      <div class="logoBox">
        <img :src="$img.logo_xiaomi" class="logo" />
      </div>
      <div class="search">
        <van-search
          v-model="value"
          placeholder="搜索商品名称"
          @focus="toSearch"
        />
      </div>
      <div class="login" @click="toLogin">
        <van-icon name="manager-o" />
      </div>
    </div>
    <div class="tab_1">
      <van-tabs v-model="active">
        <van-tab title="推荐">
          <Recommend />
        </van-tab>
        <van-tab title="手机">
          <Phone />
        </van-tab>
        <van-tab title="智能">
          <Intelligence />
        </van-tab>
        <van-tab title="电视">
          <Television />
        </van-tab>
        <van-tab title="家电">
          <Appliances />
        </van-tab>
        <van-tab title="笔记本">
          <Notebook />
        </van-tab>
      </van-tabs>
      <div class="openelse" @click="openelse">
        <van-icon name="arrow-up" v-if="tab_2" />
        <van-icon name="arrow-down" v-else />
      </div>
    </div>
    <div class="tab_2" v-if="tab_2">
      <p>全部</p>
      <span
        v-for="item in tabArr"
        :key="item.id"
        class="tabname"
        :class="item.id === active ? 'tabFocus' : ''"
        @click="toShopping(item.id)"
      >
        {{ item.name }}
      </span>
    </div>
    <!-- toup -->
    <div class="toUp_box" v-if="settoUp" @click="toUP"></div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import { TabBar } from "@/components/";
import {
  Recommend,
  Appliances,
  Intelligence,
  Notebook,
  Phone,
  Television,
} from "@/pages/home/components/";
import { Search, Icon, Tab, Tabs, Button } from "vant";
export default {
  name: "Home",
  data() {
    return {
      value: "",
      active: 0,
      tab_2: false,
      tabArr: [
        { id: 0, name: "推荐" },
        { id: 1, name: "手机" },
        { id: 2, name: "智能" },
        { id: 3, name: "电视" },
        { id: 4, name: "家电" },
        { id: 5, name: "笔记本" },
      ],
      settoUp: false,
      scrollTop:0
    };
  },
  methods: {
    openelse() {
      this.tab_2 = !this.tab_2;
    },
    toShopping(id) {
      console.log(id);
      this.tab_2 = false;
      this.active = id;
    },
    toLogin() {
      this.$router.push({ path: "/user" });
    },
    toSearch() {
      this.$router.push({ path: "/search" });
    },
    scrollHandle() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if(this.scrollTop>700){
          this.settoUp = true
      }else{
          this.settoUp = false
      }
    },
    toUP(){
    //     let top = document.documentElement.scrollTop || document.body.scrollTop;
    //   // 实现滚动效果 
    //   const timeTop = setInterval(() => {
    //     document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
    //     if (top <= 0) {
    //       clearInterval(timeTop);
    //     }
    //   }, 10);

    //无动画
      document.getElementById("home").scrollIntoView();
    }
  },
  components: {
    TabBar,
    Recommend,
    Appliances,
    Intelligence,
    Notebook,
    Phone,
    Television,
    [Search.name]: Search,
    [Icon.name]: Icon,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Button.name]: Button,
  },
  created() {
    window.addEventListener("scroll", this.scrollHandle);
  },
  mounted() {},
  destroyed() {
    window.removeEventListener("scroll", this.scrollHandle);
  },
};
</script>

<style lang="scss" scoped>
.x_home {
  height: 100%;
  position: relative;
  padding-bottom: 0.666667rem;
  padding-top: 0.533333rem;
  background-color: whitesmoke;
  .searchBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 0.586667rem;
    background: #f2f2f2;
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    .logoBox {
      .logo {
        width: 0.4rem;
        margin-left: 0.2rem;
      }
    }
    .login {
      .van-icon {
        font-size: 24px;
        margin-right: 0.2rem;
      }
    }
    .search {
      .van-search {
        width: 3.6rem;
        height: 0.44rem;
        padding: 0;
        .van-search__content {
          background: #fff;
          border: 1px solid #e5e5e5;
        }
      }
    }
  }
  .tab_1 {
    position: relative;
    .van-tabs {
      padding-top: 0.44rem;
      /deep/.van-tabs__wrap {
        height: 0.44rem;
        position: fixed;
        top: 0.533333rem;
        z-index: 20;
        width: 100%;
        /deep/.van-tabs__content {
          background-color: whitesmoke;
        }
        .van-tabs__nav {
          background: #f2f2f2;
          padding: 0;
          padding-right: 0.4rem;
          padding-bottom: 0.133333rem;
          .van-tab {
            height: 0.4rem;
            // .van-tab__text {
            //   font-size: 0.26rem;
            // }
          }
        }
      }
    }
    .openelse {
      position: fixed;
      top: 0.6rem;
      right: 0.133333rem;
      z-index: 999;
    }
  }
  .tab_2 {
    position: fixed;
    top: 0.533333rem;
    z-index: 99;
    width: 100%;
    box-sizing: border-box;
    height: 1.733333rem;
    background: red;
    background: #f2f2f2;
    padding-left: 0.133333rem;
    padding-top: 0.266667rem;
    p {
      margin-bottom: 0.133333rem;
    }
    .tabname {
      box-sizing: border-box;
      padding-top: 0.04rem;
      background: #fff;
      text-align: center;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      display: inline-block;
      width: 1.066667rem;
      height: 0.4rem;
      margin-right: 0.133333rem;
      margin-bottom: 0.133333rem;
    }
    .tabFocus {
      background-color: #fde0d5;
      border-color: #ff6700;
      color: #ff6700;
    }
  }
  .toUp_box {
    position: fixed;
    bottom: 0.933333rem;
    right: 0.266667rem;
    z-index: 99;
    background: #f2f2f2;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
  }
}
</style>