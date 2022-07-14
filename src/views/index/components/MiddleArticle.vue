<template>
  <div class="middle-mark" @click="toArticle">
    <img :src="imgSrc" />
    <span>
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  name: "MiddleArticle",
  props: {
    title: {
      type: String,
      default: "我最爱的三座古城之一",
    },
    imgSrc: {
      type: String,
      default:
        "https://img-blog.csdnimg.cn/img_convert/132432af7aef388263ab33d45516596e.jpeg",
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
.middle-mark {
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 0px 10px;
  margin-bottom: 10px;
  font-size: 16px;
  cursor: pointer;
  img {
    width: 100%;
    height: 110px;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
}
</style>