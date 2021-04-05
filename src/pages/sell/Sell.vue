<template>
    <div class="xingqiu">
        <div class="top">
            <van-tabs v-model="active">
                <van-tab title="推荐">
                    <Youlike/>
                </van-tab>
                <van-tab title="Note 9">
                    <Note9/>
                </van-tab>
                <van-tab title="10X系列">
                    <Ten10x/>
                </van-tab>
            </van-tabs>
            <img src="@/assets/lingdang.png" class="lingdang">
            <div class="headerimg">
                <img src="" >
            </div>
        </div>
        <TabBar></TabBar>
    </div>
</template>

<script>
import { Tab, Tabs } from 'vant';
import {TabBar} from '@/components/'
import {Youlike,Ten10x,Note9} from "@/pages/sell/components/"
    export default {
        name:'Message',
        data(){
            return{
                active:""
            }
        },
        components:{
            TabBar,
            Youlike,
            Ten10x,
            Note9,
            [Tab.name]:Tab,
            [Tabs.name]:Tabs
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
.xingqiu{
    height: 100%;
    .top{
        height: .573333rem;
        width: 100%;
        position: fixed;
        top: 0;
        height: 100%;
        /deep/.van-tabs {
            // height: .573333rem;
            height: 100%;
             .van-tabs__content{
                 height: 100%;
                background: #f5f5f5;
                 .van-tab__pane{
                     height: 100%;
                 }
             }
            .van-tab{
                line-height: .533333rem;
                font-weight: 700;
                font-size: .24rem;
                padding: 0;
                flex: 0;
               
                .van-tab__text{
                    display: inline-block;
                    width: 1rem;
                    text-align: center;
                }
            }
            .van-tab--active{
                color: #ff6700;
            }
            .van-tabs__wrap{
                .van-tabs__nav{
                    width: 100%;
                    .van-tabs__line{
                        display: none;
                    }
                }
            }
        }
        .lingdang{
            position: absolute;
            top: 0;
            right: .6rem;
            width: .546667rem;
        }
        .headerimg{
            position: absolute;
            top: .08rem;
            right: .133333rem;
            background: #f2f2f2;
            height: .36rem;
            width: .36rem;
            border-radius:50% ;
        }
    }
}
</style>