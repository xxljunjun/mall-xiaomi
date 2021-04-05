<template>
    <div class="shop_Car">
        <div class="header">
            <van-nav-bar 
                title="购物车" 
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
        <van-notice-bar
            wrapable
            :scrollable="false"
            text=" 发货提示：中小件类下单7日内发货，大家电类除部分地区正常发货外，其余18日起陆续发货，详见公告。"
            mode="closeable"
            class="gun"
        />
        <div class="goLogin_box">
            <p>登录后享受更多优惠</p>
            <span class="goLogin">
                去登录
                <van-icon name="arrow" />
            </span>
        </div>
        <div class="nodata">
            <p>
                购物车还是空的
                <span class="goindex" @click="goindex">去逛逛</span>
            </p>
        </div>
        <div class="guess">
            <img src="@/images/guess.jpg" >
        </div>
        <div class="goodBox" v-for="item in 10" :key="item">
            <GoodItem/>
            <GoodItem/>
        </div>
        <TabBar></TabBar>
    </div>
</template>

<script>
import { NavBar,Icon,NoticeBar  } from 'vant';
import {TabBar} from '@/components/'
import GoodItem from "@/components/GoodItem.vue"
    export default {
        name:'Message',
        data(){
            return{

            }
        },
        components:{
            TabBar,
            GoodItem,
            [Icon.name]:Icon,
            [NavBar.name]:NavBar,
            [NoticeBar.name]:NoticeBar
        },
        methods:{
            onClickLeft(){
                console.log(11)
                this.$router.push({path:"/"})
            },
            onClickRight(){
                console.log(22)
            },
            goindex(){
                this.$router.push({path:"/"})
            }
        }
    }
</script>

<style lang="scss" scoped>
.shop_Car{
    padding-top:.666667rem ;
    padding-bottom: .666667rem;
    .header{
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 10;
        .van-nav-bar{
            height: .666667rem;
            background: #f2f2f2;
        }
    }
    .gun{
        font-size: .173333rem;
    }
    .goLogin_box{
        position: relative;
        height: .72rem;
        background: #fff;
        line-height: .72rem;
        .goLogin{
            position: absolute;
            right: 0;
            top: 0;
        }
    }
    .nodata{
        height: .826667rem;
        background: #ebebeb;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            display: inline-block;
            border: 1px solid rgba(0,0,0,.15);
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            height: .5rem;
            line-height: .5rem;
            padding: 0 .24rem;
            color: rgba(0,0,0,.87);
            font-style: normal;
        }
    }
    .guess{
        img{
            width: 100%;
        }
    }
    .goodBox{
        display: flex;
        justify-content: space-between;
    }
}

</style>