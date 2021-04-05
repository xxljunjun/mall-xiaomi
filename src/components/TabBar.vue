<template>
    <div class="qf-tabbar">
        <van-tabbar v-model="active" route active-color='#FF0040'>
            <van-tabbar-item icon="wap-home-o" to='/'>首页</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o" to='/buy' >分类</van-tabbar-item>
            <van-tabbar-item  to='/sell'>
                <span>星球</span>
                <template #icon="props">
                    <img :src="props.active ? icon.active : icon.inactive" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item icon="chat-o"  to='/message'>购物车</van-tabbar-item>
            <van-tabbar-item icon="manager-o"  to='/user'>我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { 
    Tabbar, 
    TabbarItem ,
    Icon
} from 'vant';
    export default {
        data(){
            return {
                active:'',
                icon: {
                    active: 'https://img.yzcdn.cn/vant/user-active.png',
                    inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
                },
            }
        },
        components:{
            [Tabbar.name]:Tabbar,
            [TabbarItem.name]:TabbarItem,
            [Icon.name]:Icon
        }
    }
</script>

<style lang="scss" scoped>
.qf-tabbar{
    // position: fixed;
    // bottom: 0;
    .van-tabbar{
        .van-tabbar-item{
             background: #fff;
        }
        background: #fff;
    }
    
    
}
</style>