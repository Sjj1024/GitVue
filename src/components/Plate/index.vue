<template>
  <div class="tage">
    <h3 v-if="isShowTitle">{{ title }}</h3>
    <hr v-if="isShowTitle" />
    <slot>这是子组件默认显示的内容</slot>
  </div>
</template>

<script>
export default {
  name: "plate",
  props: {
    title: {
      type: String,
      default: "默认标题",
    },
    isShowTitle: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
.tage {
  margin-top: 10px;
  /* padding: 5px 10px; */
  padding: 15px 20px;
  background-color: #fff;
  box-shadow: 0px 3px 5px #ccc;
}
</style>