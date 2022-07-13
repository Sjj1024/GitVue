<template>
  <div class="right">
    <!-- 小图标 -->
    <div class="litter">
      <a href="#">
        <svg-icon icon-class="youtube" size="50" />
      </a>
      <a href="#">
        <svg-icon icon-class="zhifubao" size="47" />
        <div class="tool-arrow"></div>
        <div class="dropdown">
          <div class="tool-title">支付宝：2950525265@qq.com</div>
          <div class="tool-content">
            <img src="../../assets/common/zhifupay.jpeg" alt="" />
          </div>
        </div>
      </a>
      <a href="#">
        <svg-icon icon-class="weixin" size="50" />
        <div class="tool-arrow"></div>
        <div class="dropdown">
          <div class="tool-title">微信公众号：1024小神</div>
          <div class="tool-content">
            <img src="../../assets/common/weixinpay.jpeg" alt="" />
          </div>
        </div>
      </a>
      <a href="#">
        <svg-icon icon-class="qq" size="50" />
        <div class="tool-arrow"></div>
        <div class="dropdown">
          <div class="tool-title">QQ号：648133599</div>
          <div class="tool-content">
            <img src="../../assets/common/qq.jpg" alt="" />
          </div>
        </div>
      </a>
      <a href="#">
        <svg-icon icon-class="github" size="50" />
      </a>
      <a href="#">
        <svg-icon icon-class="weibo" size="50" />
      </a>
    </div>
    <!-- 标签统计 -->
    <div class="tage" :class="{ totop: isTop }">
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
    <Plate title="网站统计" ref="tool">
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
</template>

<script>
export default {
  name: "asidetool",
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
      offsetTop: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
    this.offsetTop = this.$refs.tool.$el.offsetTop;
    console.log("offsetTop" + this.offsetTop);
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
      if (scrollTop > this.offsetTop) {
        console.log("asidetool页面滚动超过60了");
        this.isTop = true;
      } else {
        console.log("asidetool页面没有超过50");
        this.isTop = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.right {
  flex: 1;
  .litter {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 5px 10px;
    background-color: #fff;
    box-shadow: 0px 3px 5px #ccc;
    a {
      padding: 0 7px;
      position: relative;
      svg-icon {
        width: 20px;
      }

      .tool-arrow {
        display: none;
        position: absolute;
        top: 48px;
        left: 15px;
        width: 0;
        height: 0;
        border-left: 18px solid transparent;
        border-right: 18px solid transparent;
        border-bottom: 18px solid gray;
        z-index: 1000;

        &::before {
          content: "";
          position: absolute;
          top: 1.5px;
          margin-left: -20px;
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-bottom: 20px solid #f7f7f7;
        }
      }

      .dropdown {
        display: none;
        width: 250px;
        height: 310px;
        position: absolute;
        top: 65px;
        left: -103px;
        border-radius: 5px;
        border: 1px solid gray;
        background-color: #fff;
        z-index: 999;

        .tool-title {
          height: 36px;
          border-radius: 5px;
          line-height: 36px;
          text-align: center;
          background-color: #f7f7f7;
        }

        .tool-content {
          padding: 5px;
          img {
            width: 100%;
            height: 262px;
            border-radius: 0 0 5px 5px;
          }
        }
      }
      &:hover > .dropdown {
        display: block;
      }
      &:hover > .tool-arrow {
        display: block;
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

.totop {
  position: fixed;
  top: 60px;
  width: 407px;
  z-index: 999;
}
</style>