

//路由懒加载
const Home = () => import('./home/Home.vue')
const Buy = () => import('./buy/Buy.vue')
const Message = () => import('./message/Message.vue')
const Sell = () => import('./sell/Sell.vue')
const User = () => import('./user/User.vue')
const Search = () => import('@/components/Search.vue')

/* 1.export与export default均可用于导出常量、函数、文件、模块等

2.在一个文件或模块中，export、import可以有多个，export default仅有一个

3.通过export方式导出，在导入时要加{ }，export default则不需要

(1) 输出单个值，使用export default
(2) 输出多个值，使用export
(3) export default与普通的export不要同时使用 */

//路由匹配规则
//router:路由
//routes:录像
 const routes =[
    {path:'/',component:Home},
    {path:'/buy',component:Buy},
    {path:'/message',component:Message},
    {path:'/sell',component:Sell},
    {path:'/user',component:User},
    {path:'/search',component:Search},
]
export default routes