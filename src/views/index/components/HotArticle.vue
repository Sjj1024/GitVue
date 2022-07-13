<template>
  <ul class="hot-article">
    <li v-for="(item, index) in hotList" :key="index">
      <span class="hoticon">{{ index + 1 }}</span>
      <a href="#">{{ item.title }}</a>
      <span class="pinfo">
        <span>评论({{ item.commit }})</span>
        <!-- <span>喜欢({{ item.like }})</span> -->
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HotArticle",
  data() {
    return {
      hotList: [
        {
          title: "2021，不念过往，不畏将来，所有期待如期而至",
          commit: 2424,
          like: 6423,
        },
        {
          title: "分别用Python，Java，Golang，PHP实现Hello World，哪个更适合你",
          commit: 734,
          like: 3454,
        },
        {
          title: "人活的是过程，不是结果，其实大家的结果都一样",
          commit: 8345,
          like: 2734,
        },
        {
          title: "杭州自驾1小时，走进现实版“富春山居图",
          commit: 9345,
          like: 1363,
        },
        {
          title: "地上长了云，天上都是羊，自驾内蒙6天的那些事儿",
          commit: 9943,
          like: 323,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.hot-article {
  padding: 0;
  margin: 0;
  li {
    height: 28px;
    line-height: 28px;

    .pinfo {
      float: right;
      span {
        margin-left: 20px;
        color: gray;
      }
    }
  }

  .hoticon {
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    color: white;
    margin-right: 8px;
  }
}

.hot-article li:nth-child(5n + 1) .hoticon {
  background-color: #fa4659;
}

.hot-article li:nth-child(5n + 2) .hoticon {
  background-color: #ff6464;
}

.hot-article li:nth-child(5n + 3) .hoticon {
  background-color: #ff8264;
}

.hot-article li:nth-child(5n + 4) .hoticon {
  background-color: #ffaa64;
}

.hot-article li:nth-child(5n + 5) .hoticon {
  background-color: #6eb6ff;
}
</style>