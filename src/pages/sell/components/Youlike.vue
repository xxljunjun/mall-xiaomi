<template>
    <div class="youlike">
        <div class="top_box">
            <p class="top">
                <span>兴趣圈</span>
                <span>两万人已加入</span>
                <span>图片</span>
                    <van-icon name="arrow" />
            </p>
            <div class="lun">
               
            </div>
        </div>
        <div class="ketang">
            <div class="ketang_content" v-for="item in 4" :key="item">

            </div>
        </div>
        <div class="boxes">
            
        </div>
    </div>
</template>

<script>
import { Icon } from 'vant';
    export default {
        data(){
            return{

            }
        },
        components:{
            [Icon.name]:Icon
        }
    }
</script>

<style lang="scss" scoped>
.youlike{
   height: 100%;
   overflow: auto;
   .top_box{
       width: 4.666667rem;
       height: 2.48rem;
       background: #fff;
        padding-top: .36rem;
        padding-bottom: .24rem;
        border-radius: 0 0 .16rem .16rem;
        margin-left:.133333rem ;
        box-sizing: border-box;
       .top{
            margin-bottom: .34rem;
            height: .266667rem;
            width: 100%;
        }
        .lun{
            height: 1.4rem;
            display: flex;
            justify-content: flex-start;
            width: 100%;
        }
    }
    .ketang{
        display: flex;
        justify-content: space-around;
        margin: .266667rem 0;
        .ketang_content{
            width: 1.08rem;
            height: 1.106667rem;
            background: #fff;

        }
    }
   
}
</style>