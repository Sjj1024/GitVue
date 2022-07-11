<template>
  <div class="content">
    <!-- 左右布局 -->
    <router-view :key="key" />
    <!-- 右侧小组件 -->
    <div class="right">
      <!-- 小图标 -->
      <div class="litter">
        <a href="#">
          <svg-icon icon-class="youtube" size="50" />
        </a>
        <a href="#">
          <svg-icon icon-class="zhifubao" size="47" />
        </a>
        <a href="#">
          <svg-icon icon-class="weixin" size="50" />
        </a>
        <a href="#">
          <svg-icon icon-class="qq" size="50" />
        </a>
        <a href="#">
          <svg-icon icon-class="github" size="50" />
        </a>
        <a href="#">
          <svg-icon icon-class="weibo" size="50" />
        </a>
      </div>
      <!-- 标签统计 -->
      <div class="tage">
        <h3>标签统计</h3>
        <hr />
        <div class="tagelist clearfix">
          <span v-for="(tag, index) in tagList" :key="index">{{ tag }}</span>
        </div>
      </div>
      <!-- 友情链接 -->
      <Plate title="友情链接">
        <div class="friends clearfix">
          <span>百度搜索</span>
          <span>淘宝搜索</span>
          <span>淘宝搜索</span>
          <span>淘宝搜索</span>
          <span>淘宝搜索</span>
          <span>淘宝搜索</span>
          <span>淘宝搜索</span>
          <span>淘宝搜索</span>
        </div>
      </Plate>
      <!-- 网站统计 -->
      <Plate title="网站统计">
        <div class="total clearfix">
          <span>网站统计：1864篇</span>
          <span>评论数目：6875条</span>
          <span>评论数目：6875条</span>
          <span>评论数目：6875条</span>
          <span>评论数目：6875条</span>
          <span>评论数目：6875条</span>
        </div>
      </Plate>
    </div>
  </div>
</template>

<script>
export default {
  name: "maincontent",
  data() {
    return {
      tagList: [
        "美女(301)",
        "Python(301)",
        "爬虫(301)",
        "Vue(301)",
        "邀请码(301)",
        "1024(301)",
        "Mysql(301)",
        "数据库(301)",
        "音乐(301)",
        "装饰器(301)",
        "Python(301)",
        "爬虫(301)",
        "Vue(301)",
        "邀请码(301)",
        "1024(301)",
        "Mysql(301)",
        "数据库(301)",
        "音乐(301)",
        "装饰器(301)",
        "Python(301)",
        "爬虫(301)",
        "Vue(301)",
        "邀请码(301)",
        "1024(301)",
        "Mysql(301)",
        "数据库(301)",
        "音乐(301)",
        "装饰器(301)",
        "Python(301)",
        "爬虫(301)",
        "Vue(301)",
        "邀请码(301)",
        "1024(301)",
        "Mysql(301)",
        "数据库(301)",
        "音乐(301)",
        "装饰器(301)",
      ],
      isTop: false,
    };
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
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
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  width: 1226px;
  margin: 0 auto;
  margin-top: 10px;

  .right {
    flex: 1;

    .litter {
      display: flex;
      align-items: center;
      padding: 5px 10px;
      background-color: #fff;
      box-shadow: 0px 3px 5px #ccc;
      a {
        padding: 0 7px;
        svg-icon {
          width: 20px;
        }
      }
    }

    .tage {
      margin-top: 10px;
      padding: 5px 10px;
      background-color: #fff;
      box-shadow: 0px 3px 5px #ccc;

      .tagelist {
        span {
          height: 30px;
          float: left;
          padding: 5px 5px;
          color: white;
          font-size: 15px;
          margin-right: 5px;
          margin-bottom: 5px;
          border-radius: 6px;
          opacity: 0.9;
          cursor: pointer;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}

.tagelist span:nth-child(9n) {
  background: #4a4a4a;
}

.tagelist span:nth-child(9n + 1) {
  background-color: #311b92;
}

.tagelist span:nth-child(9n + 2) {
  background-color: #ab47bc;
}

.tagelist span:nth-child(9n + 3) {
  background-color: #2196f3;
}

.tagelist span:nth-child(9n + 4) {
  background-color: #567e95;
}

.tagelist span:nth-child(9n + 5) {
  background-color: #b433ff;
}

.tagelist span:nth-child(9n + 6) {
  background-color: #2196f3;
}

.tagelist span:nth-child(9n + 7) {
  background-color: #b37333;
}

.tagelist span:nth-child(9n + 8) {
  background-color: #f60;
}

.friends {
  span {
    float: left;
    height: 30px;
    color: #2196f3;
    padding: 5px 5px;
    font-size: 15px;
    margin-bottom: 5px;
    border-radius: 6px;
    opacity: 0.9;
    cursor: pointer;
  }
}

.total {
  span {
    float: left;
    width: 50%;
    height: 25px;
    color: #4a4a4a;
  }
}
</style>