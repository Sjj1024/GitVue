<template>
  <div class="new" @click="toArticle">
    <slot name="title"></slot>
    <div class="summary">
      <div class="left">
        <img :src="imgSrc" />
      </div>
      <div class="right">
        <slot></slot>
        <div class="info">
          <span><a href="#">1024小神</a></span>
          <span>1天前</span>
          <span>601次浏览</span>
          <span>19评论</span>
          <span>7个赞</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Summary",
  props: {
    imgSrc: {
      type: String,
      default:
        "https://img-blog.csdnimg.cn/img_convert/50b8bbf039dc3e1d94e9c20c2de18fab.jpeg",
    },
  },
  methods: {
    toArticle() {
      this.$router.push({
        path: "/article",
        query: { id: 232 },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.new {
  // width: 100%;
  height: 224px;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  h2 {
    margin: 0;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 400;
  }
}

.summary {
  display: flex;
  justify-content: space-between;
  .left {
    flex: 1;
    width: 260px;
    img {
      width: 260px;
      height: 160px;
      margin-right: 10px;
    }
  }
  .right {
    flex: 3;
    margin-left: 10px;
    position: relative;
    font-size: 15px;
    p {
      text-indent: 2em;
      letter-spacing: 0.1em;
      margin: 0;
      color: gray;
      line-height: 25px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      line-clamp: 4;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }
    .info {
      position: absolute;
      right: 5px;
      bottom: 0px;
      display: flex;
      justify-content: flex-end;
      span {
        padding: 0px 12px;
        color: gray;
      }
    }
  }
}
</style>