<template>
  <div class="home">
    <!-- logo区域 -->
    <header class="logobox">
      <div class="logo" @click="toIndex">
        <img src="../assets/common/xiaoshen.png" alt="" />
      </div>
    </header>
    <!-- 头部导航区域 -->
    <NavBar ref="nav"></NavBar>
    <!-- 主体内容区域 -->
    <MainContent :single="single"></MainContent>
    <!-- 页脚部分 -->
    <footer>Copyright © 2014-2020 1024小神 ｜豫ICP备20012817号-1</footer>
  </div>
</template>

<script>
import NavBar from "@/layout/components/NavBar";
import MainContent from "@/layout/components/MainContent";

export default {
  name: "layout",
  data() {
    return {
      single: false,
    };
  },
  components: {
    NavBar,
    MainContent,
  },
  created() {
    let single = this.$route.query.single;
    console.log("MainContent-single:", single);
    this.single = Boolean(single);
  },
  watch: {
    // 监听路由是否变化
    $route(to, from) {
      if (to.query != from.query) {
        let single = to.query.single;
        console.log("MainContent-single:", single);
        this.single = Boolean(single);
      }
    },
  },
  methods: {
    toIndex() {
      this.$refs.nav.toTarget("首页", 0);
    },
  },
};
</script>

<style lang="scss" scope>
@import "@/styles/variables.scss";

@keyframes color-change-5x {
  0% {
    background: #0089ba;
  }
  40% {
    background: #0081cf;
  }
  80% {
    background: #2c73d2;
  }
  100% {
    background: #2fadf6;
  }
}

.home {
  height: 100%;
}

.logobox {
  width: 100%;
  background-image: linear-gradient(120deg, #1980d4, #155799);
  animation: color-change-5x 10s linear 0.2s infinite alternate both;

  .logo {
    // width: 1226px;
    padding: 10px $mainPadding - 10px;
    height: 60px;
    // padding: 10px 10px;
    margin: 0 auto;
    img {
      width: 220px;
      height: 45px;
      display: block;
    }
  }
}

footer {
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin-top: 10px;
  background-color: #ddd;
}
</style>