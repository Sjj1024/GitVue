<template>
  <div class="left">
    <div class="mark">{{ cateName }}文章列表</div>
    <Summary
      v-for="(item, index) in articleList"
      :key="index"
      :imgSrc="item.imgSrc"
      class="article"
    >
      <template slot="title">
        <h2 class="article-title">{{ item.title }}</h2>
      </template>
      <template>
        <p>
          {{ item.mark }}
        </p>
      </template>
    </Summary>
    <el-row type="flex" justify="center" align="middle" style="height: 60px">
      <!-- <span>nihao</span> -->
      <el-pagination
        :small="false"
        background
        layout="prev, pager, next"
        :total="1000"
      />
    </el-row>
  </div>
</template>

<script>
import { getArticles } from "@/api/article";

export default {
  name: "Category",
  data() {
    return {
      cateId: 0,
      cateName: "",
      articleList: [],
    };
  },
  async created() {
    this.cateId = this.$route.query.id;
    this.cateName = this.$route.query.cateName;
    // console.log("得到的文章cateId1是：", this.cateId);
    // console.log("得到的文章cateId1是：", this.cateId);
    let res = await getArticles({ id: this.cateId });
    // console.log("getArticles", res);
    this.articleList = res;
  },
  watch: {
    // 监听路由是否变化
    $route(to, from) {
      if (to.query.id != from.query.id) {
        this.cateId = to.query.id; // 把最新id赋值给定义在data中的id
        this.cateName = to.query.cateName;
        // console.log("得到的文章cateId1是：", this.cateId);
        getArticles({ id: this.cateId }).then((res) => {
          // console.log("getArticles", res);
          this.articleList = res;
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.left {
  flex: 2;
  height: 100%;
  margin-right: 10px;
  overflow: hidden;
  .mark {
    height: 40px;
    line-height: 40px;
    background: #fbfbfb;
    padding: 0px 10px;
    color: #4f4f4f;
  }
}

.number {
  width: 50px !important;
  height: 50px !important;
}

.article {
  width: 100%;
  &:hover {
    color: #3490de;
  }
  .article-title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>