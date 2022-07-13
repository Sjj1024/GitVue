<template>
  <!-- 左右布局 -->
  <div class="left">
    <!-- 轮播图-走马灯 -->
    <el-carousel trigger="click" height="300px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img :src="item" alt="轮播图" class="banner" />
      </el-carousel-item>
    </el-carousel>
    <!-- 热门文章 -->
    <div class="hot">
      <h3>热门文章</h3>
      <hr />
      <HotArticle></HotArticle>
    </div>
    <!-- 最新文章 -->
    <div class="news">
      <h3>最新文章</h3>
      <hr />
      <ul>
        <li v-for="(item, index) in newList" :key="index">
          <span> </span>
          <a href="#">{{ item }}</a>
        </li>
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
</template>

<script>
import HotArticle from "@/views/index/components/HotArticle";

export default {
  name: "index",
  data() {
    return {
      title: "",
      banners: [
        "https://1024shen.com/wp-content/uploads/2020/06/2020062011220214.jpg",
        "https://1024shen.com/wp-content/uploads/2020/06/2020062009421862.jpg",
        "https://1024shen.com/wp-content/uploads/2020/06/2020062009250625.jpg",
        "https://1024shen.com/wp-content/uploads/2020/06/2020062009251932.jpg",
      ],
      newList: [
        "2021，不念过往，不畏将来，所有期待如期而至",
        "北非明珠摩洛哥自驾全攻略",
        "泰北记忆文艺.小清新.水灯节.想念我们的清迈",
        "上海疫情被封在家，开始抢菜之路",
        "自驾冰岛14天，邂逅一个外星球",
        "春新萌动，青岛的春天是樱花味儿的！",
        "我最爱的三座古城之一：大同古城",
        "夏末坝上的草原花海与星空",
        "梦幻南北，我的南国秘境和北国跨年[76P]",
        "地上长了云，天上都是羊，自驾内蒙6天的那些事儿",
      ],
    };
  },
  components: {
    HotArticle,
  },
};
</script>

<style lang="scss" scope>
.left {
  flex: 2;
  width: 100%;
  height: 100%;
  margin-right: 10px;

  .banner {
    width: 100%;
    height: 100%;
  }

  .hot,
  .news,
  .subnew {
    padding: 15px 20px;
    background-color: #fff;
    margin-bottom: 10px;
    box-shadow: 0px 3px 5px #ccc;
  }

  .news {
    ul {
      width: 100%;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 50%;
        height: 28px;
        line-height: 28px;
        font-size: 16px;
        padding-right: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        span {
          display: inline-block;
          width: 6px;
          height: 6px;
          // line-height: 28px;
          background-color: #6eb6ff;
          border-radius: 50%;
          // padding-bottom: 10px;
          margin-bottom: 3px;
          margin-right: 5px;
        }
        a {
          &:hover {
            color: #3490de;
          }
        }
      }
    }
  }
}
</style>