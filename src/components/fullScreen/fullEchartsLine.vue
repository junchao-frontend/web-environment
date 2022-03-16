<template>
  <div class="line">
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
import chalk1 from "../chalk/chalk1.json";
import echarts from "echarts";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(this.initDialogs());
  },
  methods: {
    initDialogs() {
      let obj = chalk1;
      echarts.registerTheme("chalk1", obj);
      let myChart = this.$echarts.init(this.$refs.line, "chalk1"); //初始化实例

      let option = {
        grad: {
          top: 0,
          bottom: '20%',
          height: '200'
        },
        tooltip: {
          trigger: "axis",
        },
        toolbox: {
          show: false,
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "0:00",
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
          ],
        },
        yAxis: {
          type: "value",
          show: false,
          axisLabel: {
            formatter: "{value} h",
          },
        },
        series: [
          {
            name: "人流量",
            type: "line",
            data: [
              2, 4, 5, 2, 3, 7, 8, 5, 5, 6, 8, 5, 5, 2, 7, 8, 9, 5, 5, 2, 1, 4,
              8, 2,
            ],
          },
          {
            name: "人数",
            type: "line",
            data: [
              10, 13, 8, 12, 9, 10, 9, 15, 15, 12, 11, 13, 18, 12, 11, 18, 19,
              15, 18, 20, 14, 14, 14, 13,
            ],
          },
        ],
      };

      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>
<style scoped>
.line {
  height: 100%;
  width: 100%;
  /* border: solid 1px rgba(255, 255, 255, 0);
  border-top-color: rgba(255, 255, 255, 0.12); */
}
.line {
  /* border-top-color: rgba(255, 255, 255, 0.12);
  border: solid 1px rgba(255, 255, 255, 0); */
  height: 100%;
  width: 100%;
  /* background-color: rgb(168, 99, 99); */
}
</style>
