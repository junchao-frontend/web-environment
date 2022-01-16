<template>
  <div class="echarts">
    <!-- <div></div> -->
    <div class="echart" ref="chart"></div>
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
      let myChart = this.$echarts.init(this.$refs.chart, "chalk1"); //初始化实例

      let option = {
        title: {
          text: "人数24小时",
          textStyle: {
            color: "rgba(255,255,255,0.8)",
            fontSize: 14,
            textBorderWidth: 1,
          },
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["人流量", "人数"],
          top: 6,
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
          axisLabel: {
            formatter: "{value} h",
          },
        },
        dataZoom: [
          {
            // 这个dataZoom组件，默认控制x轴。
            show: true,
            height: 30,
            bottom: 0,

            start: 10,
            end: 80,
            handleIcon:
              "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
            handleSize: "110%",
            handleStyle: {
              color: "#5B3AAE",
            },
            textStyle: {
              color: "rgba(204,187,225,0.5)",
            },
            fillerColor: "rgba(67,55,160,0.4)",
            borderColor: "rgba(204,187,225,0.5)",
          },
          {
            type: "inside",
            show: true,
          },
        ],
        series: [
          {
            name: "人流量",
            type: "line",
            data: [
              2, 4, 5, 2, 3, 7, 8, 5, 5, 6, 8, 5, 5, 2, 7, 8, 9, 5, 5, 2, 1, 4,
              8, 2,
            ],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }],
            },
          },
          {
            name: "人数",
            type: "line",
            data: [
              10, 13, 8, 12, 9, 10, 9, 15, 15, 12, 11, 13, 18, 12, 11, 18, 19,
              15, 18, 20, 14, 14, 14, 13,
            ],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            markLine: {
              data: [
                { type: "average", name: "平均值" },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max",
                  },
                  {
                    symbol: "circle",
                    label: {
                      normal: {
                        position: "start",
                        formatter: "最大值",
                      },
                    },
                    type: "max",
                    name: "最高点",
                  },
                ],
              ],
            },
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
.echarts {
  height: 95%;
  width: 95%;
  border: solid 1px rgba(255, 255, 255, 0);
  border-top-color: rgba(255, 255, 255, 0.12);
}
.echart {
  /* border-top-color: rgba(255, 255, 255, 0.12);
  border: solid 1px rgba(255, 255, 255, 0); */
  height: 80%;
  width: 100%;
  /* background-color: rgb(168, 99, 99); */
}
</style>
