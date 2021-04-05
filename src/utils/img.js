import logo from '@/assets/logo.png'
import logo_xiaomi from "@/assets/logo_xiaomi.png"
import lunbo_1 from "@/images/lunbo_1.jpg"
import lunbo_2 from "@/images/lunbo_2.jpg"

export default{
    logo,
    lunbo_1,
    lunbo_2,
    logo_xiaomi,
    imgBaseUrl:'http://10.20.158.29:9000',//上传图片使用的后端api地址
    imgUpUrl:'http://localhost:8080/api/v1/upload/img'//前端访问后端图片的url
}