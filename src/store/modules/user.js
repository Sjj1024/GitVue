import { getUserInfo } from "@/api/user";
import { setItem, getItem, removeItem } from "../../utils/storage";

const state = {
  userInfo: "userInfo",
  token: "agalsdflajsljflajslfjaslfjals",
  userInfo: getItem("userInfo") || {} // 定义一个空的对象 不是null 因为后边我要开发userInfo的属性给别人用userInfo.name
}

const mutations = {
  setToken(state, token) {
    state.token = token;
    // setToken(token);
  },
  removeToken(state) {
    state.token = null
    // removeToken()
  },
  // 设置用户信息
  setUserInfo(state, userInfo) {
    //state.userInfo = userInfo; // 这个也是响应式，直接修改对象本身的数据
    //也可以如下写法：
    state.userInfo = { ...userInfo } // 用 浅拷贝的方式去赋值对象 因为这样数据更新之后，才会触发组件的更新
    // 持久化存储到localstorage中
    setItem("userInfo", userInfo)
  },
  // 删除用户信息
  reomveUserInfo(state) {
    state.userInfo = {}
    removeItem("userInfo")
  }
}

const actions = {
  // **`调用登录接口`**，**`成功后设置token到vuex`**，**`失败则返回失败`**
  async login(context, data) {
    // 异步调用登录接口
    console.log('调用登陆接口');
    // 假数据
    let userInfo = {}
    // context.commit("user/setUserInfo", userInfo)
  },
  // 获取用户资料action，以下代码时异步操作，放入actions中
  async getUserInfo(context) {
    console.log('获取用户资料');
    let userInfo = await getUserInfo()
    // console.log('得到的userInfo' + userInfo);
    context.commit("setUserInfo", userInfo)
  },
  // 登出的action（写在actions中）
  logout(context) {
    console.log("退出登陆接口");
    context.commit("reomveUserInfo");
  }
}

const getters = {
  staffPhoto: state => state.userInfo.avatar,
  name: state => state.userInfo.username
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

