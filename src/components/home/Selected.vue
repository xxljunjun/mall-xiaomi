<template>
    <div class="selected">
        <img src="@/images/phone.jpg" class="shop">
        <h3 v-text="item.title" class="title"></h3>
        <p v-text="item.text" class="text"></p>
        <p>
            <span v-text="item.price" class="price"></span>
            <span v-text="item.preprice" class="preprice"></span>
        </p>
        <span class="buy">立即购买</span>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                item: {id:0,title:"小米电视4A 65英寸",text:"4K HDR,人工智能语音系统",preprice:"￥2999",price:"￥2699"}
            }
        }
    }
</script>

<style lang="scss" scoped>
.selected{
    background: #fff;
    width: 2.373333rem;
    height: 3.373333rem;
    text-align: center;
    font-size: 0.18rem;
    .shop{
        width: 100%;
    }
    .title{
        
    }
    .text{

    }
    .price{

    }
    .preprice{

    }
    .buy{
        box-sizing: border-box;
        display: inline-block;
        width: 1rem;
        height: 0.3rem;
        background: #ea625b;
        border-radius: .05rem;
        color: #fff;
        font-weight: 700;
    }
}
</style>