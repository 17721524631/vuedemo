<template>
  <div class="Home">
    <rtmp></rtmp>
    <!-- <video
      style="width:50%;height:50%"
      src="http://117.159.24.13/sprhobs-2/21/1574748037.mp4?access_key_id=QYVYHCTHQMQHSQNJBQFJ&expires=1574786869&signature=BuaAHX0NgxWCxsFNESUflKdum6vBVCli38kdeMvpV8c%3D"
      controls="controls"
    >您的浏览器不支持 video 标签。</video> -->
    <!-- <Ring></Ring> -->
    <!-- <iframe
      name="myiframe"
      id="myrame"
      src="http://was.hnzwfw.gov.cn/ycslypt_web/pingjia.action?projid=4109000121908051000001&sid=005627611XK15992001&projectname=二级注册结构工程师补办申请&cardnumber=411123198910112334&evaluatorName=张三&evaluatefrom=4"
      frameborder="0"
      align="left"
      width="100%"
      height="100%"
      scrolling="auto"
      marginwidth="0"
      marginheight="0"
      class="iframesty"
    >
      <p class="tip">你的浏览器不支持iframe标签</p>
    </iframe>-->

    <!-- <ve-line :data="chartData"></ve-line> -->
  </div>
</template>

<script>
import rtmp from "../components/rtmp";
import Ring from "../components/Ring";

export default {
  name: "Home",
  data() {
    return {
      // chartData: {
      //   columns: ["日期", "访问用户", "下单用户", "下单率"],
      //   rows: [
      //     { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
      //     { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
      //     { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
      //     { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
      //     { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
      //     { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
      //   ]
      // }
    };
  },
  components: {
    rtmp,
    Ring
  },
  watch: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.Home {
  height: 100%;
}
.myMusic {
  margin-top: 10%;
}
.next {
  margin-top: 10%;
}
#myrame {
  height: 100%;
}
</style>
