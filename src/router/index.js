import Vue from 'vue'
import Router from 'vue-router'
import Layout from "@/layout"


Vue.use(Router)

export const constantRoutes = [
    {
        path: '/',
        name: "登陆页",
        component: () => import('@/views/login/index'),
        hidden: true
    },
    {
        path: '/login',
        redirect: "/",
        component: () => import('@/views/login/index'),
    },
    {
        path: '/index', // 路由地址
        component: Layout,  // 组件地址
        name: 'VUEX博客系统',
        children: [{
            path: '', // 路由地址
            name: 'VUEX博客系统',
            component: () => import('@/views/index/index'),
            meta: { title: '首页', icon: 'dashboard' }
        }]
    },
    {
        path: '/article', // 路由地址
        component: Layout,  // 组件地址
        name: '文章页面',
        children: [{
            path: '', // 路由地址
            name: '文章页面',
            component: () => import('@/views/article/index'),
            meta: { title: '文章页面', icon: 'dashboard' }
        }]
    },
    {
        path: '/category', // 路由地址
        component: Layout,  // 组件地址
        name: '文章列表',
        children: [{
            path: '', // 路由地址
            name: '文章列表',
            component: () => import('@/views/category/index'),
            meta: { title: '文章列表', icon: 'dashboard' }
        }]
    },
    {
        path: '/404',
        name: "404",
        component: () => import('@/views/404'),
        hidden: true
    },
    // 404 page must be placed at the end !!!如果是静态路由，放这里就可以
    { path: '*', redirect: '/404', hidden: true }
]


const createRouter = () => new Router({
    // mode: 'history', // require service support
    // mode: 'hash', // require service support
    scrollBehavior: () => ({ y: 0 }),
    base: '/', // 配置项目的基础地址
    routes: [...constantRoutes] // 临时合并所有的路由
})


const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router