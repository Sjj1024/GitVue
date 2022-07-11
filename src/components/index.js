import Plate from "./Plate"
import Summary from "./Summary"
// 使用插件的形式全局注册组件，然后
export default {
    install(Vue) {
        //  注册全局的通用栏组件对象
        Vue.component('Plate', Plate)
        Vue.component('Summary', Summary)
    }
}