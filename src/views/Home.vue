<template>
  <div class="Home">
    <van-uploader v-model="fileList" multiple :after-read="afterRead" accept="*" />
    <div>
      <router-link to="/music">
        <van-button class="next" @click="a()">下一步</van-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      fileList: []
    };
  },
  watch: {},
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    a() {
      console.log(this.fileList);
      this.$store.commit("fileList", this.fileList);
    }
  },
  mounted() {}
};
</script>

<style scoped>
.myMusic {
  margin-top: 10%;
}
.next {
  margin-top: 10%;
}
</style>
