<template>
    <div class="user">
        <header>
            <div class="name">
                <img src="@/images/touxiang.png" class="touxiang">
            </div>
            <span class="tologin">登录/注册</span>
            <img src="@/images/userback.png" class="beijing">
        </header>
        <van-cell-group>
            <van-cell title="我的订单" value="全部订单>" />
        </van-cell-group>
        <div class="grid">
            <van-grid :column-num="3">
                <van-grid-item v-for="value in 3" :key="value" icon="photo-o" text="文字" />
            </van-grid>
        </div>
        <div class="muban">
            <van-cell title="会员中心" icon="location-o" value=">"/>
            <van-cell title="我的优惠" icon="location-o" value=">"/>
        </div>
        <div class="muban">
            <van-cell title="服务中心" icon="location-o" value=">"/>
            <van-cell title="小米之家" icon="location-o" value=">"/>
        </div>
         <div class="muban">
            <van-cell title="我的F码" icon="location-o" value=">"/>
            <van-cell title="礼品码兑换" icon="location-o" value=">"/>
        </div>
        <van-cell title="设置" icon="location-o" value=">"/>
        <TabBar></TabBar>
    </div>
</template>

<script>
import { Cell, CellGroup, Grid, GridItem  } from 'vant';
import {TabBar} from '@/components/'
    export default {
        name:'Message',
        data(){
            return{
                value:""
            }
        },
        components:{
            TabBar,
            [Cell.name]:Cell,
            [CellGroup.name]:CellGroup,
            [Grid.name]:Grid,
            [GridItem.name]:GridItem
        }
    }
</script>

<style lang="scss" scoped>
.user{
    height: 100%;
    background: #f5f5f5;
    padding-bottom:.4rem ;
    header{
        height: 1.12rem;
        background: #f37d0f;
        position: relative;
        .beijing{
            height: 1.12rem;
            width: 100%;
        }
        .name{
            position: absolute;
            top: .2rem;
            left: .266667rem;
            .touxiang{
                height: .586667rem;
            }
        }
        .tologin{
            position: absolute;
            top: .333333rem;
            left:1.066667rem;
            color: #fff;
        }
    }
    .grid{
        margin-bottom:.133333rem ;
    }
    .muban{
         margin-bottom:.133333rem ;
    }
}
.van-cell{
    height: .72rem;
    display: flex;
    align-items: center;
}
</style>