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
      <el-pagination
        :small="false"
        background
        layout="prev, pager, next"
        :total="1000"
        @current-change="changePage"
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
      articleList: [
        {
          title: "这也造成了我后面的遗憾女生们都选择了骑马",
          imgSrc:
            "https://img-blog.csdnimg.cn/img_convert/76f2601e313cea6b0cd65aa9289e8288.jpeg",
          mark: "个摩旅进藏梦，但已是两个孩子父亲的他看了看自己的银行卡账户余额，无奈地说:“你还是个人走吧，但我支持你。”他的支持并不仅仅是精神与口头上的支持，而是实打实送了我一些他平时闲置着的摩旅装备。虽说是一座县城，但可别小看这座城市，我们所熟知的北上广深只是名义上的一线城市，“一线”这个定义也只是人们根据城市大小而赋予的一个城市等级的称谓罢了，而 盐津 这座城市则是正儿八经的“一线”城市，因为它真的是一条线啊。我一直相信摄影是减法的原则，但如果只拍摄风景的话总感觉照片过于单调，缺少一些元素来点缀眼前的美景。所以呢，我在拍摄风光的时候还喜欢给风光\n    照做一些适当的加法，以此增加照片的故事性。就 比如 ，现在眼前有两位小姐姐也在拍摄邛海的日落，而且还是互相给对方拍，那么她们便是此时我想\n    在风光照中增加的元素。只不过，因为是将镜头拉到最长焦距进行拍摄的原因，没有事先征求人家的同意，拍摄过后即使觉得照片拍得还不错，但还是没\n    有与她们沟通是否需要这些照片，万一遇到个极其在意自己无缘无故被别人拍摄的人呢？但其实每次给别人拍到一张还不错的照片",
        },
        {
          title: "说是坎儿井可以和都江堰 比肩",
          imgSrc:
            "https://img-blog.csdnimg.cn/img_convert/567541312f399e76339a76953dd069ef.jpeg",
          mark: "条线啊。我一直相信摄影是减法的原则，但如果只拍摄风景的话总感觉照片过于单调，缺少一些元素来点缀眼前的美景。所以呢，我在拍摄风光的时候还喜欢给风光照做一些适当的加法，以此增加照片的故事性。就 比如 ，现在眼前有两位小姐姐也在拍摄邛海的日落，而且还是互相给对方拍，那么她们便是此时我想在风光照中增加的元素。只不过，因为是将镜头拉到最长焦距进行拍摄的原因，没有事先征求人家的同意，拍摄过后即使觉得照片拍得还不错，但还是没有与她们沟通是否需要这些照片，万一遇到个极其在意自己无缘无故被别人拍摄的人呢？但其实每次给别人拍到一张还不错的照片后，我其实很想把这些照片给到他们。\n    此时的北方还在报道着下大雪的新闻，但早春时节的 西昌 气候早已温暖宜人。但即使如此，因为是淡季中淡季的原因，还是使得整个 西昌 陷入了“游客荒”，\n    这也使得此地靠开客栈为生的商家相竞在自家客栈门口招揽游客，住宿的价格也在相互竞争之下降得非常具有性价比。但因为出于情怀的原因，我还是选择入\n    住青旅，即使青旅的床位房和客栈的单人间价格相差不大。但我不太喜欢旅行到了一",
        },
      ],
    };
  },
  async created() {
    this.cateId = this.$route.query.id;
    this.cateName = this.$route.query.cateName;
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
  methods: {
    async changePage(pageNum) {
      console.log("pageNum", pageNum);
      let res = await getArticles({ id: this.cateId });
      this.articleList = res;
      window.scroll(0, 0);
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