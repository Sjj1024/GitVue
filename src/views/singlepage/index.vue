<template>
  <div>
    <!-- 留言板 -->
    <Plate :isShowTitle="false" class="commit">
      <div class="article-content">
        <p>
          <img
            src="https://img-blog.csdnimg.cn/img_convert/156ff65e0bb2b35715ac1966698ee2c6.jpeg"
            alt="留言板"
            title="留言板"
          />
        </p>
        <br />
        <span>
          印度，一直on the list，终于在2018年的春节前往一游。对于 印度
          ，之前在旅途上与其它世界各地的游客也聊过，爱其者有之，恨其者更有之。
          印度 唯一能搞懂的，就是怎么也搞不懂。我说：怎么说 印度
          都是对的，怎么说 印度 ，也都是错的。 印度 人自己也说：不可思议的 印度
          。 在这里，万千世态，我们闻所未闻，见所未见，我们觉得奇怪
          ，不解，震惊，愤怒，好笑，无奈，也觉得敬佩，叹服，更有“原来如此，居然这样”的感叹。
          印度 ，和我们的想象如此地不一样。
        </span>
      </div>
    </Plate>
    <!-- 留言-->
    <Plate :isShowTitle="false" class="commits">
      <div class="comment-box">
        <div class="avatar-wrapper">
          <img :src="staffPhoto" class="user-avatar" v-imagerror="defaultImg" />
          <!-- <span class="name">{{ name }}</span> -->
          <!-- <i class="el-icon-caret-bottom" style="color: #fff" /> -->
        </div>
        <div class="commit-input">
          <el-input v-model="commit" placeholder="请输入留言内容...">
            <template #append>
              <el-button type="primary">评论</el-button>
            </template>
          </el-input>
        </div>
      </div>
      <hr style="background-color: #eee; height: 1px; border: none" />
      <ul>
        <li>
          <div class="commit-item">
            <a href="#">
              <img src="../../assets/common/mylogo.jpg" alt="" />
            </a>
            <div class="commit-info">
              <div class="header">
                <div class="user-info">
                  <h4>{{ name }}</h4>
                </div>
                <div class="right-action">1 点赞</div>
              </div>
              <div class="body">
                一只放荡不羁爱自由的少年，爱编程，爱摄影，爱香车，，欢迎来撩～
                做一个普普通通的俗人，QQ：648133599
                微信：15670339118，依然是爱你们的校长～
                上班比较忙，网站内容佛系更新，留言告诉我你想获得哪些资源吧
              </div>
              <div class="footer">
                <div class="left-action">
                  <span>2022-05-24 02:09</span>
                  <span>2475赞</span>
                  <span class="replay">回复</span>
                </div>
                <div class="right-action">X</div>
              </div>
            </div>
          </div>
          <hr style="background-color: #eee; height: 1px; border: none" />
        </li>
        <li>
          <div class="commit-item">
            <a href="#">
              <img src="../../assets/common/mylogo.jpg" alt="" />
            </a>
            <div class="commit-info">
              <div class="header">
                <div class="user-info">
                  <h4>{{ name }}</h4>
                </div>
                <div class="right-action">
                  1
                  <svg-icon icon-class="dianzan" size="18" />
                </div>
              </div>
              <div class="body">
                一只放荡不羁爱自由的少年，爱编程，爱摄影，爱香车，欢迎来撩～
                做一个普普通通的俗人，QQ：648133599
                微信：15670339118，依然是爱你们的校长～
                上班比较忙，网站内容佛系更新，留言告诉我你想获得哪些资源吧
              </div>
              <div class="footer">
                <div class="left-action">
                  <span>2022-05-24 02:09</span>
                  <span>
                    2475
                    <svg-icon icon-class="xihuan" size="18" />
                  </span>
                  <span class="replay">回复</span>
                </div>
                <div class="right-action">X</div>
              </div>
            </div>
          </div>
          <hr style="background-color: #eee; height: 1px; border: none" />
        </li>
        <li>
          <div class="commit-item">
            <a href="#">
              <img src="../../assets/common/mylogo.jpg" alt="" />
            </a>
            <div class="commit-info">
              <div class="header">
                <div class="user-info">
                  <h4>{{ name }}</h4>
                </div>
                <div class="right-action">
                  1 <svg-icon icon-class="dianzan" size="18" />
                </div>
              </div>
              <div class="body">
                一只放荡不羁爱自由的少年，爱编程，爱摄影，爱香车，，欢迎来撩～
                做一个普普通通的俗人，QQ：648133599
                微信：15670339118，依然是爱你们的校长～
                上班比较忙，网站内容佛系更新，留言告诉我你想获得哪些资源吧
              </div>
              <div class="footer">
                <div class="left-action">
                  <span>2022-05-24 02:09</span>
                  <span>2475赞</span>
                  <span class="replay">回复</span>
                </div>
                <div class="right-action">X</div>
              </div>
            </div>
          </div>
          <hr style="background-color: #eee; height: 1px; border: none" />
        </li>
        <li>
          <div class="commit-item">
            <a href="#">
              <img src="../../assets/common/mylogo.jpg" alt="" />
            </a>
            <div class="commit-info">
              <div class="header">
                <div class="user-info">
                  <h4>{{ name }}</h4>
                </div>
                <div class="right-action">
                  1 <svg-icon icon-class="dianzan" size="18" />
                </div>
              </div>
              <div class="body">
                一只放荡不羁爱自由的少年，爱编程，爱摄影，爱香车，，欢迎来撩～
                做一个普普通通的俗人，QQ：648133599
                微信：15670339118，依然是爱你们的校长～
                上班比较忙，网站内容佛系更新，留言告诉我你想获得哪些资源吧
              </div>
              <div class="footer">
                <div class="left-action">
                  <span>2022-05-24 02:09</span>
                  <span>2475赞</span>
                  <span class="replay">回复</span>
                </div>
                <div class="right-action">X</div>
              </div>
            </div>
          </div>
          <hr style="background-color: #eee; height: 1px; border: none" />
        </li>
        <li>
          <div class="commit-item">
            <a href="#">
              <img src="../../assets/common/mylogo.jpg" alt="" />
            </a>
            <div class="commit-info">
              <div class="header">
                <div class="user-info">
                  <h4>{{ name }}</h4>
                </div>
                <div class="right-action">1 点赞</div>
              </div>
              <div class="body">
                一只放荡不羁爱自由的少年，爱编程，爱摄影，爱香车，，欢迎来撩～
                做一个普普通通的俗人，QQ：648133599
                微信：15670339118，依然是爱你们的校长～
                上班比较忙，网站内容佛系更新，留言告诉我你想获得哪些资源吧
              </div>
              <div class="footer">
                <div class="left-action">
                  <span>2022-05-24 02:09</span>
                  <span>2475赞</span>
                  <span class="replay">回复</span>
                </div>
                <div class="right-action">X</div>
              </div>
            </div>
          </div>
          <hr style="background-color: #eee; height: 1px; border: none" />
        </li>
        <li>
          <div class="commit-item">
            <a href="#">
              <img src="../../assets/common/mylogo.jpg" alt="" />
            </a>
            <div class="commit-info">
              <div class="header">
                <div class="user-info">
                  <h4>{{ name }}</h4>
                </div>
                <div class="right-action">1 喜欢</div>
              </div>
              <div class="body">
                一只放荡不羁爱自由的少年，爱编程，爱摄影，爱香车，欢迎来撩～
                做一个普普通通的俗人，QQ：648133599
                微信：15670339118，依然是爱你们的校长～
                上班比较忙，网站内容佛系更新，留言告诉我你想获得哪些资源吧
              </div>
              <div class="footer">
                <div class="left-action">
                  <span>2022-05-24 02:09</span>
                  <span>
                    2475
                    <svg-icon icon-class="xihuan" size="18" />
                  </span>
                  <span class="replay">回复</span>
                </div>
                <div class="right-action">X</div>
              </div>
            </div>
          </div>
          <hr style="background-color: #eee; height: 1px; border: none" />
        </li>
        <li>
          <div class="commit-item">
            <a href="#">
              <img src="../../assets/common/mylogo.jpg" alt="" />
            </a>
            <div class="commit-info">
              <div class="header">
                <div class="user-info">
                  <h4>{{ name }}</h4>
                </div>
                <div class="right-action">1 喜欢</div>
              </div>
              <div class="body">
                一只放荡不羁爱自由的少年，爱编程，爱摄影，爱香车，欢迎来撩～
                做一个普普通通的俗人，QQ：648133599
                微信：15670339118，依然是爱你们的校长～
                上班比较忙，网站内容佛系更新，留言告诉我你想获得哪些资源吧
              </div>
              <div class="footer">
                <div class="left-action">
                  <span>2022-05-24 02:09</span>
                  <span>
                    2475
                    <svg-icon icon-class="xihuan" size="18" />
                  </span>
                  <span class="replay">回复</span>
                </div>
                <div class="right-action">X</div>
              </div>
            </div>
          </div>
          <hr style="background-color: #eee; height: 1px; border: none" />
        </li>
        <li>
          <div class="commit-item">
            <a href="#">
              <img src="../../assets/common/mylogo.jpg" alt="" />
            </a>
            <div class="commit-info">
              <div class="header">
                <div class="user-info">
                  <h4>{{ name }}</h4>
                </div>
                <div class="right-action">1 喜欢</div>
              </div>
              <div class="body">
                一只放荡不羁爱自由的少年，爱编程，爱摄影，爱香车，欢迎来撩～
                做一个普普通通的俗人，QQ：648133599
                微信：15670339118，依然是爱你们的校长～
                上班比较忙，网站内容佛系更新，留言告诉我你想获得哪些资源吧
              </div>
              <div class="footer">
                <div class="left-action">
                  <span>2022-05-24 02:09</span>
                  <span>
                    2475
                    <svg-icon icon-class="xihuan" size="18" />
                  </span>
                  <span class="replay">回复</span>
                </div>
                <div class="right-action">X</div>
              </div>
            </div>
          </div>
          <hr style="background-color: #eee; height: 1px; border: none" />
        </li>
      </ul>
    </Plate>
    <el-row type="flex" justify="center" align="middle" style="height: 60px">
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
import { mapGetters } from "vuex";

export default {
  name: "singlepage",
  data() {
    return {
      commit: "",
      defaultImg: require("@/assets/common/mylogo.jpg"),
    };
  },
  computed: {
    ...mapGetters("user", ["staffPhoto", "name"]),
  },
};
</script>

<style lang="scss" scoped>
.article-content {
  p {
    padding: 0;
    margin: 0;
  }
  img {
    width: 100%;
  }
}

h4 {
  margin: 0;
}

ul {
  // width: 100%;
  padding: 0;
  .commit-item {
    display: flex;
    // width: 100%;
    .commit-info {
      width: 100%;
      .header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 30px;
        // background-color: pink;
      }
      .body {
        // height: 50px;
        padding: 10px 0px;
        // background-color: blue;
      }
      .footer {
        display: flex;
        justify-content: space-between;
        height: 30px;
        color: gray;
        .left-action {
          span {
            color: gray;
            margin-right: 20px;
          }
          .replay {
            cursor: pointer;
          }
        }
      }
    }

    img {
      width: 42px;
      height: 42px;
      border-radius: 21px;
      margin-right: 10px;
    }
  }
}

.commit {
  margin-top: 0;
}

.submit {
  &:hover {
    background-color: pink;
  }
}

.comment-box {
  display: flex;
  height: 50px;
  line-height: 50px;
  margin-bottom: 20px;
  .user-header {
    flex: 1;
  }
  .commit-input {
    flex: 18;
  }

  .avatar-wrapper {
    .user-avatar {
      width: 42px;
      height: 42px;
      border-radius: 21px;
      vertical-align: middle;
      margin-right: 10px;
    }
  }
}
</style>