import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import '@/icons' // icon

// 注册自己的插件，这个use方法会调用上边的install
import Component from '@/components'
Vue.use(Component)

// Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
