<template>
  <div class="music">
    <van-button class="next" @click="end()">最后上传按钮</van-button>

    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
export default {
  name: "music",
  data() {
    return {};
  },
  methods: {
    end() {
      console.log(this.$store.state.fileList);
    }
  }
};
</script>
