<template>
    <div class="good" >
        <img src="@/images/good.jpg" class="img">
        <p class="text">{{message.text}}</p>
        <p class="price">{{message.price}}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                 message:
                     {id:1,text:"米家直流变频落地扇1X",price:"￥299"}
            }
        },
        components:{

        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
.good{
    width: 2.466667rem;
    height: 3.253333rem;
    background: #fff;
    .img{
        width: 2.466667rem;
    }
}
</style>