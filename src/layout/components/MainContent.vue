<template>
  <div class="content">
    <!-- 左边主体布局 -->
    <router-view :key="key" />
    <!-- 右侧小组件 -->
    <AsideTool></AsideTool>
  </div>
</template>

<script>
import AsideTool from "@/layout/components/AsideTool";

export default {
  name: "maincontent",
  data() {
    return {
      isTop: false,
    };
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
  components: {
    AsideTool,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.content {
  display: flex;
  // width: 1226px;
  padding: 0 $mainPadding;
  margin: 0 auto;
  margin-top: 10px;
}
</style>