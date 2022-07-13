// 导入路由
import router from "./router";
import { getItem } from "./utils/storage";

// 白名单列表
const whiteList = ["/login", "/404", "/"]

// 路有导航守卫
router.beforeEach(async (to, from, next) => {
  // console.log(getItem("userInfo"));
  let userInfo = JSON.stringify(getItem("userInfo"))
  // debugger
  if (userInfo !== "{}") {
    // 如果存在token，并且访问的是登陆页，就跳转到主页
    document.title = to.name || "VUEX博客系统"
    console.log('document.title' + document.title);
    next()
  } else {
    // 没有token，判断是否是白名单，然后放行还是跳到登陆页
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next("/login")
    }
  }
})