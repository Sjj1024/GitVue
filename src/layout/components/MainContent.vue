<template>
  <div class="content">
    <!-- 左右布局 -->
    <div class="left">
      <!-- 轮播图-走马灯 -->
      <el-carousel trigger="click" height="300px">
        <el-carousel-item v-for="(item, index) in banners" :key="index">
          <img :src="item" alt="轮播图" />
        </el-carousel-item>
      </el-carousel>
      <!-- 热门文章 -->
      <div class="hot">
        <h3>热门文章</h3>
        <hr />
        <ul>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
        </ul>
      </div>
      <!-- 最新文章 -->
      <div class="news">
        <h3>最新文章</h3>
        <hr />
        <ul>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
        </ul>
      </div>
      <!-- 分层板块 -->
      <div class="subnew">
        <h3>分层板块</h3>
        <hr />
        <ul>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
        </ul>
      </div>
      <!-- 分层板块 -->
      <div class="subnew">
        <h3>分层板块</h3>
        <hr />
        <ul>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
        </ul>
      </div>
      <!-- 分层板块 -->
      <div class="subnew">
        <h3>分层板块</h3>
        <hr />
        <ul>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
          <li>2021，不念过往，不畏将来，所有期待如期而至</li>
        </ul>
      </div>
    </div>
    <!-- 右侧小组件 -->
    <div class="right">
      <!-- 小图标 -->
      <div class="litter">
        <a href="#">
          <svg-icon icon-class="youtube" size="50" />
        </a>
        <a href="#">
          <svg-icon icon-class="zhifubao" size="45" />
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
    </div>
  </div>
</template>

<script>
export default {
  name: "maincontent",
  data() {
    return {
      banners: [
        "https://1024shen.com/wp-content/uploads/2020/06/2020062011220214.jpg",
        "https://1024shen.com/wp-content/uploads/2020/06/2020062009421862.jpg",
        "https://1024shen.com/wp-content/uploads/2020/06/2020062009250625.jpg",
        "https://1024shen.com/wp-content/uploads/2020/06/2020062009251932.jpg",
      ],
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
    };
  },
};
</script>

<style lang="scss" scope>
.content {
  display: flex;
  width: 1226px;
  margin: 0 auto;
  margin-top: 10px;

  .left {
    flex: 2;
    height: 100%;
    margin-right: 10px;

    .hot,
    .news,
    .subnew {
      padding: 10px 10px;
      background-color: #fff;
      margin-bottom: 10px;
      box-shadow: 0px 3px 5px #ccc;
    }
  }

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
</style>