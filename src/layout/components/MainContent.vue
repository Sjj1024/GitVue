<template>
  <div class="content">
    <!-- 左边主体布局 -->
    <keep-alive>
      <router-view :key="key" />
    </keep-alive>
    <!-- 右侧小组件 -->
    <AsideTool v-if="!single"></AsideTool>
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
  props: {
    single: {
      type: Boolean,
      default: false,
    },
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