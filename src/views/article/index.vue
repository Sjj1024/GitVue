<template>
  <div class="left">
    <div class="mark">{{ cateName }}文章列表</div>
    <!-- 文章标题 -->
    <div class="content">
      <h2 class="titlt">地上长了云，天上都是羊，自驾内蒙6天的那些事儿</h2>
      <div class="user-info">
        <span>
          <svg-icon icon-class="component" size="14" />
          美图摄影
        </span>
        <span>
          <svg-icon icon-class="user" size="14" />
          1024小神
        </span>
        <span class="day">
          <svg-icon icon-class="size" size="14" />
          5天前
        </span>
        <span class="show">
          <svg-icon icon-class="eye-open" size="14" />
          616次浏览
        </span>
        <span>
          <svg-icon icon-class="message" size="14" />
          19个评论
        </span>
        <span>[编辑]</span>
      </div>
      <hr style="background-color: #ccc; height: 1px; border: none" />
      <div class="body" v-html="content"></div>
      <hr style="background-color: #ccc; height: 1px; border: none" />
      <div class="footer">
        <div class="copyright">
          如有失效，请留言告知丨转载请注明原文链接：在世界上咖啡店最多的城市过周末
        </div>
        <div class="actions">
          <span>
            <svg-icon icon-class="dianzan" size="14" />
            点赞
          </span>
          <span>
            <svg-icon icon-class="star" size="14" />
            收藏
          </span>
          <span>
            <svg-icon icon-class="bug" size="14" />
            举报
          </span>
          <span>
            <svg-icon icon-class="guide" size="14" />
            分享
          </span>
        </div>
      </div>
    </div>
    <!-- 评论输入 -->
    <Plate :isShowTitle="false" class="commit-user">
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
    </Plate>
    <!-- 留言展示 -->
    <Plate :isShowTitle="false" class="commits">
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Article",
  data() {
    return {
      cateName: "文章详情",
      commit: "",
      defaultImg: require("@/assets/common/mylogo.jpg"),
      content: `这样一座城市，面积不大，主要的街道似乎只有一条，早餐过后我们散步过去，却发现没有一间开始营业的店铺。不知道它们会一直这样紧闭大门，还是只是我们的到访太早而已。稍远处有一处建在 <span class="cke_widget_wrapper cke_widget_inline cke_widget_csdnlink cke_widget_selected" tabindex="-1" role="region" contenteditable="false" aria-label="a 小部件" data-cke-display-name="a" data-cke-filter="off" data-cke-widget-id="29" data-cke-widget-wrapper="1">灯塔</span> 下的房车营地，倒是显得热闹一些。营地前的海滩上长满了荒草，海风吹来，一股萧瑟的咸腥味道。
<div class="cke_widget_wrapper cke_widget_block cke_widget_image cke_image_nocaption cke_widget_selected" tabindex="-1" role="region" contenteditable="false" aria-label=" 图像 小部件" data-cke-display-name="图像" data-cke-filter="off" data-cke-widget-id="28" data-cke-widget-wrapper="1">
<p class="img-center cke_widget_element" data-cke-widget-data="%7B%22hasCaption%22%3Afalse%2C%22src%22%3A%22https%3A%2F%2Fimg-blog.csdnimg.cn%2Fimg_convert%2Fb723ea01d277dac4926a936f9b40862c.jpeg%22%2C%22alt%22%3A%22%22%2C%22width%22%3A%22%22%2C%22height%22%3A%22%22%2C%22lock%22%3Atrue%2C%22align%22%3A%22center%22%2C%22classes%22%3Anull%7D" data-cke-widget-keep-attr="0" data-widget="image"><span class="cke_image_resizer_wrapper"><img src="https://img-blog.csdnimg.cn/img_convert/b723ea01d277dac4926a936f9b40862c.jpeg" alt="" data-cke-saved-src="https://img-blog.csdnimg.cn/img_convert/b723ea01d277dac4926a936f9b40862c.jpeg" /><span class="cke_image_resizer" title="点击并拖拽以改变尺寸">​</span></span></p>
<span class="cke_reset cke_widget_drag_handler_container"><img class="cke_reset cke_widget_drag_handler" title="点击并拖拽以移动" role="presentation" src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" width="15" height="15" data-cke-widget-drag-handler="1" /></span><span class="cke_widget_edit_container" title="图片"></span>

</div>
<div class="cke_widget_wrapper cke_widget_block cke_widget_image cke_image_nocaption cke_widget_selected" tabindex="-1" role="region" contenteditable="false" aria-label=" 图像 小部件" data-cke-display-name="图像" data-cke-filter="off" data-cke-widget-id="27" data-cke-widget-wrapper="1">
<p class="img-center cke_widget_element" data-cke-widget-data="%7B%22hasCaption%22%3Afalse%2C%22src%22%3A%22https%3A%2F%2Fimg-blog.csdnimg.cn%2Fimg_convert%2F132432af7aef388263ab33d45516596e.jpeg%22%2C%22alt%22%3A%22%22%2C%22width%22%3A%22%22%2C%22height%22%3A%22%22%2C%22lock%22%3Atrue%2C%22align%22%3A%22center%22%2C%22classes%22%3Anull%7D" data-cke-widget-keep-attr="0" data-widget="image"><span class="cke_image_resizer_wrapper"><img src="https://img-blog.csdnimg.cn/img_convert/132432af7aef388263ab33d45516596e.jpeg" alt="" data-cke-saved-src="https://img-blog.csdnimg.cn/img_convert/132432af7aef388263ab33d45516596e.jpeg" /><span class="cke_image_resizer" title="点击并拖拽以改变尺寸">​</span></span></p>
<span class="cke_reset cke_widget_drag_handler_container"><img class="cke_reset cke_widget_drag_handler" title="点击并拖拽以移动" role="presentation" src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" width="15" height="15" data-cke-widget-drag-handler="1" /></span><span class="cke_widget_edit_container" title="图片"></span>

</div>
索性退了房开着车去了码头。鉴于对自驾跨海这件事情一无所知，我们以为还有许多需要办理的手续，和需要学习的事情。码头的入口要从城边的公路调头，从城中心到即将离开这座城市仅需要不到2分钟的车程。公路笔直崭新，和码头的气质相符，却与毫无生气的城市格格不入。

它或许算不上什么城市吧，我想。码头占据了大半的面积，以及几乎全部的人们来到这里的理由。希茨海尔斯就像是历史书上那些引发重大历史事件的小人物，它非常重要，但如果不是它，也有可能是别的什么地方。

入口处的工作人员查验了我们的预定单，或者说那就算是船票了，象征性地要求我们出示了一下护照，随即发给我们一张绿色的卡片，像酒店房间里可以悬挂在门外，说「请勿打扰」那种卡片，这张需要我们挂在反光镜后面。上面一个大写的「K」代表了我们即将前往目的地的首字母。
<div class="cke_widget_wrapper cke_widget_block cke_widget_image cke_image_nocaption cke_widget_selected" tabindex="-1" role="region" contenteditable="false" aria-label=" 图像 小部件" data-cke-display-name="图像" data-cke-filter="off" data-cke-widget-id="26" data-cke-widget-wrapper="1">
<p class="img-center cke_widget_element" data-cke-widget-data="%7B%22hasCaption%22%3Afalse%2C%22src%22%3A%22https%3A%2F%2Fimg-blog.csdnimg.cn%2Fimg_convert%2Fd794e0b76460ea037fc707b01bb1d703.jpeg%22%2C%22alt%22%3A%22%22%2C%22width%22%3A%22%22%2C%22height%22%3A%22%22%2C%22lock%22%3Atrue%2C%22align%22%3A%22center%22%2C%22classes%22%3Anull%7D" data-cke-widget-keep-attr="0" data-widget="image"><span class="cke_image_resizer_wrapper"><img src="https://img-blog.csdnimg.cn/img_convert/d794e0b76460ea037fc707b01bb1d703.jpeg" alt="" data-cke-saved-src="https://img-blog.csdnimg.cn/img_convert/d794e0b76460ea037fc707b01bb1d703.jpeg" /><span class="cke_image_resizer" title="点击并拖拽以改变尺寸">​</span></span></p>
<span class="cke_reset cke_widget_drag_handler_container"><img class="cke_reset cke_widget_drag_handler" title="点击并拖拽以移动" role="presentation" src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" width="15" height="15" data-cke-widget-drag-handler="1" /></span><span class="cke_widget_edit_container" title="图片"></span>

</div>
<div class="cke_widget_wrapper cke_widget_block cke_widget_image cke_image_nocaption cke_widget_selected" tabindex="-1" role="region" contenteditable="false" aria-label=" 图像 小部件" data-cke-display-name="图像" data-cke-filter="off" data-cke-widget-id="25" data-cke-widget-wrapper="1">
<p class="img-center cke_widget_element" data-cke-widget-data="%7B%22hasCaption%22%3Afalse%2C%22src%22%3A%22https%3A%2F%2Fimg-blog.csdnimg.cn%2Fimg_convert%2Ff90cd009d24e58857a135cfcd44fe993.jpeg%22%2C%22alt%22%3A%22%22%2C%22width%22%3A%22%22%2C%22height%22%3A%22%22%2C%22lock%22%3Atrue%2C%22align%22%3A%22center%22%2C%22classes%22%3Anull%7D" data-cke-widget-keep-attr="0" data-widget="image"><span class="cke_image_resizer_wrapper"><img src="https://img-blog.csdnimg.cn/img_convert/f90cd009d24e58857a135cfcd44fe993.jpeg" alt="" data-cke-saved-src="https://img-blog.csdnimg.cn/img_convert/f90cd009d24e58857a135cfcd44fe993.jpeg" /><span class="cke_image_resizer" title="点击并拖拽以改变尺寸">​</span></span></p>
<span class="cke_reset cke_widget_drag_handler_container"><img class="cke_reset cke_widget_drag_handler" title="点击并拖拽以移动" role="presentation" src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" width="15" height="15" data-cke-widget-drag-handler="1" /></span><span class="cke_widget_edit_container" title="图片"></span>

</div>
<div class="cke_widget_wrapper cke_widget_block cke_widget_image cke_image_nocaption cke_widget_selected" tabindex="-1" role="region" contenteditable="false" aria-label=" 图像 小部件" data-cke-display-name="图像" data-cke-filter="off" data-cke-widget-id="24" data-cke-widget-wrapper="1">
<p class="img-center cke_widget_element" data-cke-widget-data="%7B%22hasCaption%22%3Afalse%2C%22src%22%3A%22https%3A%2F%2Fimg-blog.csdnimg.cn%2Fimg_convert%2F50b8bbf039dc3e1d94e9c20c2de18fab.jpeg%22%2C%22alt%22%3A%22%22%2C%22width%22%3A%22%22%2C%22height%22%3A%22%22%2C%22lock%22%3Atrue%2C%22align%22%3A%22center%22%2C%22classes%22%3Anull%7D" data-cke-widget-keep-attr="0" data-widget="image"><span class="cke_image_resizer_wrapper"><img src="https://img-blog.csdnimg.cn/img_convert/50b8bbf039dc3e1d94e9c20c2de18fab.jpeg" alt="" data-cke-saved-src="https://img-blog.csdnimg.cn/img_convert/50b8bbf039dc3e1d94e9c20c2de18fab.jpeg" /><span class="cke_image_resizer" title="点击并拖拽以改变尺寸">​</span></span></p>
<span class="cke_reset cke_widget_drag_handler_container"><img class="cke_reset cke_widget_drag_handler" title="点击并拖拽以移动" role="presentation" src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" width="15" height="15" data-cke-widget-drag-handler="1" /></span><span class="cke_widget_edit_container" title="图片"></span>

</div>
没什么特别要做的。车子开到了停车场，自然明白了顺着哪条白色的线，自己应该停在哪里。这个过程比预想中简单不止一百倍。周围毫无可逛一逛的风景，人们慵懒地敞开着车门，坐在车子里玩儿着手机，或者呼呼大睡。我们绕着停车场走了一圈，它可真大，像是获准进入了机场的停机坪一样，让你觉得边际渺茫。但它什么也没有，一个像模像样的大厅还是大门紧锁，连自动售货机或者便利店都没有。

其他人显然比我们更有经验，对于这里毫无期待，只是围着自己的汽车转悠。轮船比预定时间晚了30分钟进港，像是从海平面出现的巨型建筑物，用比想象中更灵活的速度，逐渐靠岸。

<span data-cke-copybin-end="1">​</span>`,
    };
  },
  computed: {
    ...mapGetters("user", ["staffPhoto", "name"]),
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

  .content {
    padding: 0px 10px;
    background: #fff;
    .titlt {
      padding: 15px 0;
      margin: 0;
    }

    .user-info {
      padding: 5px 0px;
      font-size: 14px;
      span {
        margin-right: 15px;
        .svg-icon {
          margin-right: 1px;
          // vertical-align: middle;
        }
      }

      .day,
      .show {
        color: #555;
      }
    }

    .body {
      width: 100%;
    }

    .footer {
      padding: 10px 0;
      text-align: center;
      .copyright {
        padding: 10px 0;
        border-radius: 5px;
        border: 1px solid #ccc;
      }

      .actions {
        padding: 10px 0;
        span {
          margin: 0 10px;
        }
      }
    }
  }
}

.body ::v-deep img {
  width: 100%;
  object-fit: fill;
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

h4 {
  margin: 0;
}

.comment-box {
  display: flex;
  height: 50px;
  line-height: 50px;
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

.comment-box {
  display: flex;
  height: 50px;
  line-height: 50px;
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

.commits,
.commit-user {
  padding: 10px 10px;
}
</style>