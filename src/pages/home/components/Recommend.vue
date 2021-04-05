<template>
    <div class="Recom">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img :src="$img.lunbo_1" >
            </van-swipe-item>
            <van-swipe-item>
                <img :src="$img.lunbo_2" >
            </van-swipe-item>
        </van-swipe>
        <div class="grid">
            <van-grid :column-num="5">
                <van-grid-item 
                v-for="value in values" 
                :key="value.id" 
                icon="photo-o" 
                :text="value.text" 
                />
            </van-grid>
        </div>
        <div class="banner_box">
            <div class="chun">
                <img src="@/images/banner_1.webp" >
                <img src="@/images/banner_2.webp" >
                <img src="@/images/banner_3.gif" >
            </div>
            <div style="display:flex;">
                <div>
                    <img src="@/images/banner_4.webp" style="width: 2.40rem;margin-right:0.02rem;">
                </div>
                <div>
                    <img src="@/images/banner_5.webp" style="width: 2.40rem;">
                    <img src="@/images/banner_6.webp" style="width: 2.40rem;">
                </div>
            </div>
            <img src="@/images/banner.webp" style="width:100%;margin-bottom:0.1rem;">
        </div>
        <div class="box">
            <img src="@/images/banner0.webp" style="width:100%;">
            <div v-for ="item in 2" :key="item" class="shopping">
                <Selected/>
                <Selected/>
            </div>
            <p class="more">更多小米手机产品></p>
        </div>
        <div class="box">
            <img src="@/images/banner0.webp" style="width:100%;">
            <div v-for ="item in 3" :key="item" class="shopping">
                <Selected/>
                <Selected/>
            </div>
            <p class="more">更多小米电视产品></p>
        </div>
        <div class="box">
            <img src="@/images/banner0.webp" style="width:100%;">
            <div v-for ="item in 1" :key="item" class="shopping">
                <Selected/>
                <Selected/>
            </div>
            <p class="more">更多小米笔记本产品></p>
        </div>
        <div class="box">
            <img src="@/images/mijia.webp" style="width:100%;">
            <div v-for ="item in 3" :key="item" class="shopping">
                <Selected/>
                <Selected/>
            </div>
            <p class="more">更多小米家电产品></p>
        </div>
        <div class="box">
            <img src="@/images/mijia.webp" style="width:100%;">
            <div v-for ="item in 3" :key="item" class="shopping">
                <Selected/>
                <Selected/>
            </div>
            <p class="more">更多小米智能产品></p>
        </div>
        <!-- 了解小米 -->
        <div class="understand">
            <div class="imgbox" v-for="item in 3" :key="item" style="display:flex;">
                <img src="@/images/study.webp" >
                <img src="@/images/study.webp" >
            </div>
        </div>
        <img src="@/images/old.webp" style="width:100%">
        <p class="mores">了解小米</p>
    </div>
</template>

<script>
import { Swipe, SwipeItem,Grid, GridItem  } from 'vant';
import {Selected} from "@/components/"
export default {
    data(){
        return {
            values:[
                {id:0,text:"小米秒杀",path:""},
                {id:1,text:"小米秒杀",path:""},
                {id:2,text:"小米秒杀",path:""},
                {id:3,text:"小米秒杀",path:""},
                {id:4,text:"小米秒杀",path:""},
                {id:5,text:"小米秒杀",path:""},
                {id:6,text:"小米秒杀",path:""},
                {id:7,text:"小米秒杀",path:""},
                {id:8,text:"小米秒杀",path:""},
                {id:9,text:"小米秒杀",path:""},

            ]
        }
    },
    components:{
        Selected,
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem,
        [Grid.name]:Grid,
        [GridItem.name]:GridItem,
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
.Recom{
    // background-color: rgb(245, 245, 245);
    .my-swipe{
        height: 2.493333rem;
        img{
            height: 2.493333rem;
        }
    }
    .banner_box{
        background-color: whitesmoke;
        .chun{
            display: flex;
            margin-top:.2rem ;
            width: 100%;
            img{
                width: 1.6rem;
            }
        }
    }
    .box{
        margin-bottom:.133333rem ;
        background: #fff;
        .shopping{
            display: flex;
            justify-content: space-between;
            padding: 0 .066667rem;
        }
        .more{
            height: .693333rem;
            text-align: center;
            line-height: .693333rem;
        }
    }
    .understand{
        justify-content: space-between;
        margin-bottom:.133333rem ;
        .imgbox{
            justify-content: space-between;
            img{
                width: 49%;
            }
        }
    }
}

.mores{
    height: .693333rem;
    text-align: center;
    line-height: .693333rem;
    background: #fff;
    margin: .133333rem 0;
}
</style>