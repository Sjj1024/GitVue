<template>
  <div class="home">
    <!-- logo区域 -->
    <header class="logobox">
      <div class="logo">
        <img src="../assets/common/xiaoshen.png" alt="" />
      </div>
    </header>
    <!-- 头部导航区域 -->
    <NavBar></NavBar>
    <!-- 主体内容区域 -->
    <MainContent></MainContent>
  </div>
</template>

<script>
import NavBar from "@/layout/components/NavBar";
import MainContent from "@/layout/components/MainContent";

export default {
  name: "layout",
  components: {
    NavBar,
    MainContent,
  },
};
</script>

<style lang="scss" scope>
@keyframes color-change-5x {
  0% {
    background: #2fadf6;
  }
  25% {
    background: #0277bd;
  }
  50% {
    background: #3f51b5;
  }
  75% {
    background: #7c44b0;
  }
  100% {
    background: #ef66b6;
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
    width: 1226px;
    height: 60px;
    padding: 10px 10px;
    margin: 0 auto;
    img {
      width: 220px;
      height: 45px;
      display: block;
    }
  }
}
</style>