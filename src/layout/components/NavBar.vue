<template>
  <!-- <div class="navbar"> -->
  <div :class="{ navbar: true, totop: isTop }">
    <!-- 菜单栏 -->
    <ul class="bar">
      <li
        v-for="(item, index) in categorys"
        @click="toTarget(item, index)"
        :class="{ active: index === activeN }"
      >
        {{ item }}
        <div class="tool-arrow" v-if="item != '首页'"></div>
        <ul class="sub-menu" v-if="item != '首页'">
          <li><a @click="toTarget(item, index)">拍照记录</a></li>
          <li><a @click="toTarget(item, index)">拍照记录</a></li>
          <li><a @click="toTarget(item, index)">拍照记录</a></li>
          <li><a @click="toTarget(item, index)">拍照记录</a></li>
        </ul>
      </li>
      <!-- 用户头像 -->
      <el-dropdown class="avatar-container" trigger="click" v-if="name">
        <div class="avatar-wrapper">
          <img :src="staffPhoto" class="user-avatar" v-imagerror="defaultImg" />
          <!-- <span class="name">{{ name }}</span> -->
          <!-- <i class="el-icon-caret-bottom" style="color: #fff" /> -->
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item>
            <span class="name">{{ name }}</span>
          </el-dropdown-item>
          <router-link to="/" target="_blank">
            <el-dropdown-item> 我的资料 </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/Sjj1024/GitVue">
            <el-dropdown-item>项目地址</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logoutMe">
            <span style="display: block">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="user" v-else>
        <a href="/"> 登陆 </a>
        <span> | </span>
        <a> 注册 </a>
      </div>
      <li class="search" @click="showSearch">
        <svg-icon icon-class="search" />
      </li>
      <transition name="fade-transform" mode="out-in">
        <el-input
          :autofocus="isShowSearch"
          v-model="searchStr"
          ref="searchRef"
          class="sinput"
          placeholder="请输入..."
          v-if="isShowSearch"
        />
      </transition>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      isTop: false,
      categorys: [
        "首页",
        "记录生活",
        "硬核编程",
        "绚丽前端",
        "技术杂谈",
        "数据仓库",
        "留言板",
      ],
      activeN: Number.parseInt(localStorage.getItem("cateIndex")) || 0,
      searchStr: "",
      isShowSearch: false,
      defaultImg: require("@/assets/common/mylogo.jpg"),
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop, true);
  },
  computed: {
    ...mapState("user", ["userInfo"]),
    ...mapGetters("user", ["staffPhoto", "name"]),
  },
  methods: {
    scrollToTop() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //为了计算距离顶部的高度，当高度大于50显示回顶部图标，小于50则隐藏
      if (scrollTop > 60) {
        console.log("页面滚动超过60了");
        this.isTop = true;
      } else {
        console.log("页面没有超过50");
        this.isTop = false;
      }
    },
    toTarget(path, index) {
      this.activeN = index;
      localStorage.setItem("cateIndex", index);
      console.log("toTarget-path" + path);
      switch (path) {
        case "首页":
          this.$router.push({
            path: "/index",
          });
          break;
        case "记录生活":
          this.$router.push({
            path: "/category",
            query: { id: "1", cateName: path },
          });
          break;
        case "硬核编程":
          this.$router.push({
            path: "/category",
            query: { id: "2", cateName: path },
          });
          break;
        case "绚丽前端":
          this.$router.push({
            path: "/category",
            query: { id: "3", cateName: path },
          });
          break;
        case "技术杂谈":
          this.$router.push({
            path: "/category",
            query: { id: "4", cateName: path },
          });
          break;
        case "数据仓库":
          this.$router.push({
            path: "/category",
            query: { id: "5", cateName: path },
          });
          break;
        case "留言板":
          this.$router.push({
            path: "/singlepage",
            query: { single: true, cateName: path },
          });
          break;
      }
    },
    showSearch() {
      this.isShowSearch = !this.isShowSearch;
      if (this.isShowSearch) {
        this.$nextTick(() => {
          this.$refs.searchRef.focus();
        });
      }
    },
    async logoutMe() {
      await this.logout();
      this.$router.push("/login"); // 跳到登录
    },
    ...mapActions("user", ["logout"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.navbar {
  width: 100%;
  height: 58px;
  background-color: #fff;
  // box-shadow: 0px 3px 5px #ccc;
}

.totop {
  position: fixed;
  top: 0;
  z-index: 999;
}

.bar {
  position: relative;
  // width: 1226px;
  height: 58px;
  margin: 0 auto;
  padding: 0 $mainPadding;
  line-height: 58px;
  font-size: 18px;
  font-weight: 500;

  li {
    position: relative;

    .tool-arrow {
      display: none;
      position: absolute;
      top: 48px;
      left: 40%;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #ececec;
      z-index: 1001;

      &::before {
        content: "";
        position: absolute;
        top: 1.5px;
        margin-left: -20px;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 20px solid #fff;
      }
    }

    .sub-menu {
      display: none;
      position: absolute;
      top: 58px;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: 5px 0;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 1px 10px #ccc;
      text-align: center;

      li {
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding: 0 0;
        text-align: center;
        // &:hover {
        //   background-color: #2d6cdf;
        // }
      }
    }

    &:hover > .sub-menu {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &:hover > .tool-arrow {
      display: block;
    }
  }

  .sinput {
    position: absolute;
    top: 50%;
    right: 100px;
    transform: translate(-75%, -50%);
    width: 20%;
  }

  .avatar-container {
    float: right;

    .user-dropdown {
      .el-dropdown-menu__item {
        text-align: center;
      }
    }

    .avatar-wrapper {
      // margin-top: 5px;
      position: relative;
      height: 58px;
      width: 90px;
      text-align: center;
      line-height: 58px;
      cursor: pointer;

      .user-avatar {
        cursor: pointer;
        width: 42px;
        height: 42px;
        line-height: 58px;
        border-radius: 21px;
        vertical-align: middle;
      }

      .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 10px;
        font-size: 18px;
      }
    }
  }

  li {
    box-sizing: border-box;
    float: left;
    width: auto;
    padding: 0 20px;
    min-width: 75px;
    color: #222226;
    font-weight: 520;
    // background-color: #244469;

    &:hover {
      // border-bottom: 2px solid #62a1f8;
      color: #62a1f8;
    }
  }

  .active {
    border-bottom: 2px solid #62a1f8;
    color: #62a1f8;
  }

  .search {
    float: right;
    min-width: 25px;
    padding: 0;
  }

  .user {
    float: right;
    margin-left: 10px;
    a {
      &:hover {
        color: #62a1f8;
      }
    }
  }
}
</style>