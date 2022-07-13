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
    padding: 10px 10px;
    background-color: #fff;
    margin-bottom: 10px;
    box-shadow: 0px 3px 5px #ccc;
  }
}
</style>