<template>
  <div class="user-info">
    <h3 class="user-header">
      <img
        :src="staffPhoto"
        class="user-avatar"
        v-imagerror="defaultImg"
        title="点击更换头像"
      />
      <el-button size="small">更换头像</el-button>
      <label for="" class="dengji">等级：新手上路</label>
    </h3>
    <!-- 面板选项卡 -->
    <ul class="pannel">
      <li
        v-for="(item, index) in menuList"
        :key="index"
        @click="setMenu(index)"
        :class="{ active: menuNum == index }"
      >
        <a href="#">{{ item }}</a>
      </li>
    </ul>
    <!-- 基础信息 -->
    <div class="base-user" v-if="menuNum == 0">
      <div class="base-info">
        <div class="left">
          <div>ID：888</div>
          <div>
            <span>昵称：</span>
            <input type="text" class="password" :value="name" />
          </div>
          <div>
            <span>密码：</span>
            <input type="text" class="password" placeholder="请输入新密码" />
          </div>
          <div>
            <span>个人简介：</span>
            <input type="text" class="edit-input" value="一生放荡不羁爱自由" />
          </div>
        </div>
        <div class="right">
          <div>
            <span>微信：</span>
            <input type="text" class="password" value="lanxingme" />
          </div>
          <div>
            <span>Q Q ：</span>
            <input type="text" class="password" value="648133599" />
          </div>
          <div>
            <span>邮箱：</span>
            <input type="text" class="password" value="648133599@qq.com" />
          </div>
        </div>
      </div>
      <el-button type="primary">更新保存</el-button>
    </div>
    <!-- 文章列表 -->
    <div v-else-if="menuNum == 1">
      <ul class="article-list">
        <li>
          <h3>地上长了云，天上都是羊，自驾内蒙6天的那些事儿</h3>
          <p>
            这样一座城市，面积不大，主要的街道似乎只有一条，早餐过后我们散步过去，却发现没有一间开始营业的店铺。不知道它们会一直这样紧闭大门，还是只是我们的到访太早而已。稍远处有一处建在
            灯塔
            下的房车营地，倒是显得热闹一些。营地前的海滩上长满了荒草，海风吹来，一股萧瑟的咸腥味道。
          </p>
        </li>
        <li>
          <h3>地上长了云，天上都是羊，自驾内蒙6天的那些事儿</h3>
          <p>
            这样一座城市，面积不大，主要的街道似乎只有一条，早餐过后我们散步过去，却发现没有一间开始营业的店铺。不知道它们会一直这样紧闭大门，还是只是我们的到访太早而已。稍远处有一处建在
            灯塔
            下的房车营地，倒是显得热闹一些。营地前的海滩上长满了荒草，海风吹来，一股萧瑟的咸腥味道。
          </p>
        </li>
        <li>
          <h3>地上长了云，天上都是羊，自驾内蒙6天的那些事儿</h3>
          <p>
            这样一座城市，面积不大，主要的街道似乎只有一条，早餐过后我们散步过去，却发现没有一间开始营业的店铺。不知道它们会一直这样紧闭大门，还是只是我们的到访太早而已。稍远处有一处建在
            灯塔
            下的房车营地，倒是显得热闹一些。营地前的海滩上长满了荒草，海风吹来，一股萧瑟的咸腥味道。
          </p>
        </li>
        <li>
          <h3>地上长了云，天上都是羊，自驾内蒙6天的那些事儿</h3>
          <p>
            这样一座城市，面积不大，主要的街道似乎只有一条，早餐过后我们散步过去，却发现没有一间开始营业的店铺。不知道它们会一直这样紧闭大门，还是只是我们的到访太早而已。稍远处有一处建在
            灯塔
            下的房车营地，倒是显得热闹一些。营地前的海滩上长满了荒草，海风吹来，一股萧瑟的咸腥味道。
          </p>
        </li>
      </ul>
    </div>
    <!-- 评论列表 -->
    <div class="commit-list" v-else-if="menuNum == 2">
      <div class="total">
        您共有 5 条评论，其中 5 条已获准， 0 条正等待审核。
      </div>
      <ul>
        <li>
          <p>地上长了云，天上都是羊，自驾内蒙6天的那些事儿</p>
          <p>2022-06-02 21:29:23 发表在 留言板</p>
        </li>
        <li>
          <p>地上长了云，天上都是羊，自驾内蒙6天的那些事儿</p>
          <p>2022-06-02 21:29:23 发表在 留言板</p>
        </li>
        <li>
          <p>地上长了云，天上都是羊，自驾内蒙6天的那些事儿</p>
          <p>2022-06-02 21:29:23 发表在 留言板</p>
        </li>
        <li>
          <p>地上长了云，天上都是羊，自驾内蒙6天的那些事儿</p>
          <p>2022-06-02 21:29:23 发表在 留言板</p>
        </li>
        <li>
          <p>地上长了云，天上都是羊，自驾内蒙6天的那些事儿</p>
          <p>2022-06-02 21:29:23 发表在 留言板</p>
        </li>
      </ul>
    </div>
    <!-- 金币详情 -->
    <div class="money-detail" v-else-if="menuNum == 3">
      <div class="total">当前拥有 5 金币。金币细节：</div>
      <div class="detail">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180" />
          <el-table-column prop="money" label="金币" />
          <el-table-column prop="cate" label="类别" />
          <el-table-column prop="state" label="状态" />
          <el-table-column prop="desc" label="描述" width="180" />
        </el-table>
      </div>
    </div>
    <!-- 收藏 -->
    <div class="like-collector" v-else-if="menuNum == 4">
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
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "UserInfo",
  data() {
    return {
      menuNum: 1,
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
      menuList: ["基本信息", "文章列表", "评论列表", "金币详情", "点赞收藏"],
      defaultImg: require("@/assets/common/mylogo.jpg"),
      tableData: [
        {
          date: "2016-05-03",
          money: "1",
          cate: "充值",
          state: "success",
          desc: "使用支付宝充值",
        },
        {
          date: "2016-05-03",
          money: "1",
          cate: "充值",
          state: "success",
          desc: "使用支付宝充值",
        },
        {
          date: "2016-05-03",
          money: "1",
          cate: "充值",
          state: "success",
          desc: "使用支付宝充值",
        },
        {
          date: "2016-05-03",
          money: "1",
          cate: "充值",
          state: "success",
          desc: "使用支付宝充值",
        },
        {
          date: "2016-05-03",
          money: "1",
          cate: "充值",
          state: "success",
          desc: "使用支付宝充值",
        },
        {
          date: "2016-05-03",
          money: "1",
          cate: "充值",
          state: "success",
          desc: "使用支付宝充值",
        },
      ],
    };
  },
  computed: {
    ...mapState("user", ["userInfo"]),
    ...mapGetters("user", ["staffPhoto", "name"]),
  },
  methods: {
    setMenu(index) {
      this.menuNum = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.user-info {
  flex: 2;
  margin-right: 10px;
  padding: 15px 20px;
  background-color: #fff;
  box-shadow: 0px 3px 5px #ccc;
  text-align: center;
  .user-header {
    display: flex;
    align-items: center;
    .dengji {
      margin-left: 10px;
    }
  }

  .pannel {
    display: flex;
    padding: 0;
    justify-content: space-evenly;
    height: 35px;
    line-height: 35px;
    border: 1px solid #ccc;
    text-align: center;
    li {
      flex: 1;
      border-right: 1px solid #ccc;
    }

    .active {
      color: white;
      background-color: #2f89fc;
    }
  }

  .user-avatar {
    width: 60px;
    height: 60px;
    vertical-align: middle;
    margin-right: 10px;
  }

  .article-list {
    padding: 0;
    li {
      width: 100%;
      height: 110px;
      border: 1px solid #ccc;
      margin-bottom: 10px;
      text-align: left;
      overflow: hidden;
      padding: 5px;
      h3 {
        padding: 5px 0px;
      }
      p {
        padding: 0;
        margin: 0;
        overflow: hidden;
        font-size: 14px;
        text-overflow: ellipsis;
      }
    }
  }

  .commit-list {
    text-align: left;
    .total {
      height: 40px;
      line-height: 40px;
      border: 1px solid #2f89fc;
      padding: 0px 10px;
      margin-bottom: 10px;
    }
    ul {
      margin: 0;
      padding: 0;
      li {
        height: 60px;
        border: 1px solid #ccc;
        padding: 8px 5px;
        border-left: 3px solid #2f89fc;
        margin-bottom: 10px;
        p {
          padding: 0;
          margin: 0;
        }
      }
    }
  }

  .money-detail {
    text-align: left;
    .total {
      height: 40px;
      line-height: 40px;
      border: 1px solid #2f89fc;
      padding: 0px 10px;
      margin-bottom: 10px;
    }
  }

  .like-collector {
    text-align: left;
  }
}

.pannel li:last-child {
  border-right: 0;
}

.base-info {
  display: flex;
  justify-content: space-between;
  height: 200px;

  .left,
  .right {
    flex: 1;
    div {
      width: 100%;
      height: 50px;
      text-align: left;
    }

    .password {
      width: 80%;
      height: 30px;
      padding-left: 5px;
    }

    .edit-input {
      width: 70%;
      height: 30px;
      padding-left: 5px;
    }
  }
}
</style>