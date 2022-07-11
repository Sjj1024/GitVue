<template>
  <div class="new">
    <h2>在世界上咖啡店最多的城市过周末</h2>
    <div class="summary">
      <div class="left">
        <img
          src="https://img-blog.csdnimg.cn/img_convert/50b8bbf039dc3e1d94e9c20c2de18fab.jpeg"
          alt=""
        />
      </div>
      <div class="right">
        <p>
          这样一座城市，面积不大，主要的街道似乎只有一条，早餐过后我们散步过去，却发现没有一间开始营业的店铺。不知道它们会一直这样紧闭大门，还是只是我们的到访太早而已。稍远处有一处建在
          灯塔下的房车营地，倒是显得热闹一些。营地前的海滩上长满了荒草，海风吹来，一股萧瑟的咸腥味道。​编辑​编辑索性退了房开着车去了码头。鉴于对自驾跨海这件事情一无所知，我们以…
        </p>
        <div class="info">
          <a href="#">1024小神</a>
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
  name: "summary",
};
</script>

<style lang="scss" scoped>
.new {
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  height: 224px;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  h2 {
    margin: 0;
    margin-bottom: 10px;
    font-weight: 400;
  }
}

.summary {
  display: flex;
  .left {
    img {
      width: 260px;
      height: 160px;
      margin-right: 10px;
      // vertical-align: middle;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 15px;
    p {
      margin: 0;
    }
  }
}
</style>