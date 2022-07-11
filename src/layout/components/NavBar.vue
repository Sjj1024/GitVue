<template>
  <!-- <div class="navbar"> -->
  <div :class="{ navbar: true, totop: isTop }">
    <ul class="bar">
      <li v-for="(item, index) in categorys" @click="toTarget(item)">
        {{ item }}
      </li>
      <li class="search">
        <svg-icon icon-class="search" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isTop: false,
      categorys: [
        "首页",
        "乐享生活",
        "硬核编程",
        "绚丽前端",
        "数据仓库",
        "数据仓库",
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop, true);
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
    toTarget(path) {
      switch (path) {
        case "首页":
          this.$router.push({
            path: "/index",
          });
          break;
        case "乐享生活":
          this.$router.push({
            path: "/category",
          });
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.navbar {
  width: 100%;
  height: 58px;
  background-color: #244469;
  box-shadow: 0px 3px 5px #ccc;
}

.totop {
  position: fixed;
  top: 0;
  z-index: 999;
}

.bar {
  // width: 1226px;
  height: 58px;
  margin: 0 auto;
  padding: 0 $mainPadding;
  line-height: 58px;
  font-size: 18px;
  font-weight: 500;

  li {
    float: left;
    width: auto;
    padding: 0 20px;
    min-width: 75px;
    color: white;
    background-color: #244469;

    &:hover {
      background-color: #246469;
    }
  }

  .search {
    min-width: 25px;
    float: right;
  }
}
</style>