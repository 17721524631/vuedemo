<template>
  <div class="Ring">
    <div id="myChart" :style="{width: '500px', height: '500px'}"></div>
    <div class="onlineRate">
      <div>在线率</div>
      <div>66.7%</div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "Ring",
  props: {
    offlineCount: Number,
    onlineCount: Number
  },
  data() {
    return {};
  },
  computed: {},
  beforeDestroy() {},
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          {
            name: "显示数值",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              {
                value: 80,
                name: "在线数",
                itemStyle: {
                  normal: {
                    color: "#5171e6"
                  }
                }
              },
              {
                value: 20,
                name: "离线数",
                itemStyle: {
                  normal: {
                    color: "#f0f2f5"
                  }
                }
              }
            ]
          }
        ]
      });
    }
  },
  created() {},
  mounted() {
    this.drawLine();
  }
};
</script>

<style scoped>
#myChart {
  position: relative;
}
.onlineRate {
  position: absolute;
  top: 32%;
  left: 28%;
}
</style>
