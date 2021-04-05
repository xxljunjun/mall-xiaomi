<template>
    <div class="search">
        <div class="top_search">
            <van-icon name="arrow-left" class="left_icon" @click="back"/>
            <input type="text" placeholder="请输入搜索关键词" v-model="value" class="input">
            <van-icon name="search" class="right_icon"/>
        </div>
       <h1 class="title">搜索发现</h1>
       <div class="ad">
           <img src="">
       </div>
       <div class="discovery">

       </div>
    </div>
</template>

<script>
import { Icon } from 'vant';
    export default {
        data(){
            return{
                value:"",
            }
        },
        components:{
            [Icon.name]:Icon,
        },
        methods:{
            back(){
                this.$router.back()
            }
        }
    }
</script>

<style lang="scss" scoped>
.search{
    .top_search{
        background: #f2f2f2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: .533333rem;
        .left_icon{
            margin-left:.133333rem ;
            font-size: .24rem;
        }
        .right_icon{
            font-size: .24rem;
            margin-right:.133333rem ;
        }
        .input{
            background: #fff;
            width: 3.68rem;
            height: .346667rem;
            padding-left:.133333rem ;
        }
    }
}
</style>