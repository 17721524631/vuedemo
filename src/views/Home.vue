<template>
  <div class="Home">
    <div class="img">
      <div class="drag1"></div>
      <vue-drag-resize
        aspectRatio
        parentLimitation
        @dragging="dragging"
        @dragstop="onDragstop"
        @resizing="resizing"
        @resizestop="onResizstop"
        :sticks="['tm','bm','ml','mr']"
        :parentW="1000"
        :parentH="600"
        :x="300"
        :y="300"
        :z="999"
        class="drag"
      ></vue-drag-resize>
    </div>
  </div>
</template>

<script>
import VueDragResize from "vue-drag-resize";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    VueDragResize
  },
  watch: {},
  methods: {
    dragging(e) {
      // console.log(e);
    },
    onDragstop(e) {
      console.log(e);
    },
    resizing(e) {
      // console.log(e);
    },
    onResizstop(e) {
      console.log(e);
    }
  },
  created() {},
  mounted() {}
};
</script>

<style scoped>
.img {
  width: 1000px;
  height: 600px;
  background: url("../assets/1.jpg");
  background-size: 100% 100%;
  margin: 3%;
  position: relative;
}
.drag {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  background: url("../assets/code.jpg");
  background-size: cover;
  border-radius: 50%;
}
/* .drag1 {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 49px;
  left: 494px;
  background: url("../assets/code.jpg");
  background-size: cover;
  border-radius: 50%;
} */
</style>
