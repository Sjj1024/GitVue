<template>
  <!-- 左右布局 -->
  <div class="left">
    <!-- 轮播图-走马灯 -->
    <el-carousel trigger="click" height="280px">
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
          <a href="#" @click="toArticle">{{ item }}</a>
        </li>
      </ul>
    </div>
    <!-- 分层板块 -->
    <Plate title="记录生活">
      <ul class="article-list">
        <MiddleArticle
          v-for="(item, index) in lifeList"
          :title="item.title"
          :imgSrc="item.imgSrc"
          :key="index"
        >
        </MiddleArticle>
      </ul>
    </Plate>
    <!-- 分层板块 -->
    <Plate title="辞职旅游">
      <ul class="article-list">
        <MiddleArticle
          v-for="(item, index) in travelList"
          :title="item.title"
          :imgSrc="item.imgSrc"
          :key="index"
        >
        </MiddleArticle>
      </ul>
    </Plate>
    <!-- 分层板块 -->
    <Plate title="拍照摄影">
      <ul class="article-list">
        <MiddleArticle
          v-for="(item, index) in photoList"
          :title="item.title"
          :imgSrc="item.imgSrc"
          :key="index"
        >
        </MiddleArticle>
      </ul>
    </Plate>
    <!-- 分层板块 -->
    <Plate title="前端后端">
      <ul class="article-list">
        <MiddleArticle
          v-for="(item, index) in frontList"
          :title="item.title"
          :imgSrc="item.imgSrc"
          :key="index"
        >
        </MiddleArticle>
      </ul>
    </Plate>
  </div>
</template>

<script>
import HotArticle from "@/views/index/components/HotArticle";
import MiddleArticle from "@/views/index/components/MiddleArticle";
import { getArticles } from "@/api/article";
import { randomList, preList } from "@/utils/utils.js";

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
      lifeList: [
        {
          title: "我最爱的三座古城之一",
          imgSrc:
            "https://img-blog.csdnimg.cn/img_convert/d794e0b76460ea037fc707b01bb1d703.jpeg",
        },
        {
          title:
            "没什么特别要做的。车子开到了停车场，自然明白了顺着哪条白色的线",
          imgSrc:
            "https://img-blog.csdnimg.cn/img_convert/50b8bbf039dc3e1d94e9c20c2de18fab.jpeg",
        },
        {
          title:
            "其他人显然比我们更有经验，对于这里毫无期待，只是围着自己的汽车转悠",
          imgSrc:
            "https://img-blog.csdnimg.cn/img_convert/f90cd009d24e58857a135cfcd44fe993.jpeg",
        },
        {
          title: "轮船比预定时间晚了30分钟进港，像是从海平面出现的巨型建筑物",
          imgSrc:
            "https://img-blog.csdnimg.cn/img_convert/132432af7aef388263ab33d45516596e.jpeg",
        },
        {
          title:
            "要说这两年在旅游方面最大的收货就是知道了以前很少或者根本没听过的一些旅游点。",
          imgSrc:
            "https://img-blog.csdnimg.cn/img_convert/becfec272843917407e47d8b398175cf.gif",
        },
        {
          title:
            "旅游省份中夹着的一个小省份，是长枸杞的好地方，但在旅游方面真没有了解过有什么景点",
          imgSrc:
            "https://img-blog.csdnimg.cn/img_convert/c115561027b55c62a337255d4fc85b3e.gif",
        },
        {
          title:
            "这个暑期短途游的佳地，也才知道原来一向在我印象中酷暑会超热的沙漠，是可以这么凉爽和舒服的，而且这儿也不用担心雨季的问题",
          imgSrc:
            "https://img-blog.csdnimg.cn/img_convert/13c421a01af6b2c87fb29ec6a0559385.gif",
        },
        {
          title: "也还在封，能走的地方不算太多，慢慢搜索出",
          imgSrc:
            "https://img-blog.csdnimg.cn/cb8836feb4f94550ada4a87b7b7c1a74.gif",
        },
      ],
      travelList: [],
      photoList: [],
      frontList: [],
    };
  },
  components: {
    HotArticle,
    MiddleArticle,
  },
  async created() {
    this.lifeList = preList(await getArticles({ id: 1 }), 8);
    this.travelList = preList(await getArticles({ id: 1 }), 8);
    this.photoList = preList(await getArticles({ id: 1 }), 8);
    this.frontList = preList(await getArticles({ id: 1 }), 8);
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

ul {
  padding: 0;
  margin: 0;
}

.article-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.article-list .middle-mark:nth-child(4n + 1) {
  padding-left: 0;
}

.article-list .middle-mark:nth-child(4n + 4) {
  padding-right: 0;
}
</style>