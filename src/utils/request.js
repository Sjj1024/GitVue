import axios from 'axios'
import { Message } from 'element-ui'
// import store from '@/store'
import router from '@/router'

// 创建一个axios实例，并配置跟路径和超时时间
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

// request interceptor
service.interceptors.request.use(
    config => {
        // 请求配置对象，里面包含有method，url等信息
        // console.log(config);
        // 判断如果存在token，就加上
        // if (store.getters.token) {
        //     config.headers["Authorization"] = `Bearer ${store.getters.token}`
        // }
        return config
    },
    error => {
        Message.error(error.message) // 提示错误信息
        return Promise.reject(error) // 返回执行错误 让当前的执行链跳出成功 直接进入 catch
    }
)

// response interceptor
service.interceptors.response.use(
    // 正常发送请求时会执行的处理函数
    res => {
        // 将数据解包，得到里面的内容
        const { success, message, data } = res.data
        // 根据success判断是否执行后面的操作
        if (success) {
            return data
        } else {
            // 如果获取到的数据有问题，就报错误信息
            Message.error(message)
            return Promise.reject(new Error(message))
        }
    },
    // 出现网络错误等出现的错误捕获
    async error => {
        //判断错误码： error 有response对象 
        if (error.response && error.response.data) {
            if (error.response.data.code == 10002 || error.response.status == 401) {
                // 后端告诉前端token超时了
                // await store.dispatch('user/logout') // 调用登出action
                router.push('/login') // 跳到登录页
                Message.error(error.response.data.message)
                return Promise.reject(error)
            }
        }
        Message.error(error.message)
        return Promise.reject(error)
    }
)

export default service
