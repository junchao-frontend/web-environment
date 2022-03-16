<template>
  <div class="line">
    <div id="cols2">
      VOCs趋势分析
      <div class="title-line">
        <div class="Line"></div>
        <div class="ball"></div>
      </div>
    </div>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
import { getCemsData } from "@/api/line.js";
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
    this.initDialogs()
  },
  methods: {
    async initDialogs() {
      let params = {
        code: 202201262134,
      };
      const {data} = await getCemsData(params)
      let noVOC = data.data.noVOC.info
      // console.log(noVOC);
      let xAxis = noVOC['无组织VOC'].time
      let xAxisData = []
      xAxis.forEach(item => {
        // console.log(item.substring(6).slice(0,2));
        xAxisData.push(item.substring(6).slice(0,2))
      })
      let noVOCData = noVOC['无组织VOC'].data
      let myChart = this.$echarts.init(this.$refs.line, "chalk1"); //初始化实例
      let option = {
        // tooltip: {
        //   trigger: "axis",
        //   axisPointer: {
        //     type: "cross",
        //     label: {
        //       backgroundColor: "#6a7985",
        //     },
        //   },
        //   textStyle: {
        //     fontSize: 12
        //   }
        // },
        tooltip: {
          trigger: "axis",
          textStyle: {
            fontSize: 12
          },
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 255, 233,0)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(255, 255, 255,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 255, 233,0)",
                  },
                ],
                global: false,
              },
            },
          },
        },
        grid: {
          top: "35%",
          left: "3%",
          right: "5%",
          bottom: "5%",
          containLabel: true,
        },
        legend: {
          show: true,
          left: "65%",
          top: "10%",
          data: ["有组织", "无组织"],
          textStyle: {
            color: "#a6bde9",
            fontSize: 10,
          },
          itemWidth: 15,
          itemHeight: 8,
          // itemStyle: {
          //   color: '#fff',
          //   borderColor: '#d5b00a'
          // },
        },
        xAxis: {
          type: "category",
          axisTick: { show: false },
          boundaryGap: false,
          data: xAxisData,
          // splitNumber: 50,
          //设置轴线的属性
          axisLine: {
            lineStyle: {
              color: "#a6bde9",
            },
          },
          axisLabel: {
            interval: 1,
            show: true,
            textStyle: {
              fontSize: 10, //更改坐标轴文字大小
            },
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
          max: 'dataMax',
          min: 'dataMin',
          splitNumber : 3,
          axisTick: { show: false },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#283352",
            },
          },
          axisLabel: {
            textStyle: {
              color: "#a6bde9",
              fontSize: 10,
            },
          },
        },
        series: [
          {
            name: "无组织",
            symbol: 'circle',
            data: noVOCData,
            type: "line",
            symbolSize: 5,
            lineStyle: {
              color: "#ffcd00",
            },
            itemStyle: {
              color: "#d5b00a",
              borderColor: "rgb(0,115,100)",
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0)",
              shadowBlur: 0,
              shadowOffsetY: 0,
              shadowOffsetX: 0,
            },
            smooth: false,
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(255,188,13, 0.4)",
                  },
                  {
                    offset: 1,
                    color: "rgba(255,188,13, 0)",
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
          // {
          //   name: "有组织",
          //   data: [210, 230, 240, 178, 160, 180],
          //   type: "line",
          //   // symbolSize: 7,
          //   lineStyle: {
          //     color: "#0bdb88",
          //     type:'dashed'
          //   },
          //   itemStyle: {
          //     color: "#0bdb88",
          //     borderColor: "#a3c8d8",
          //   },
          //   smooth: false,
          // },
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
#cols2 {
  top: 15px;
  left: 20px;
  height: 7%;
  width: 100%;
  color: white;
  /* text-align: center; */
  font-size: 14px;
  color: white;
  /* text-shadow: 0 0 8px rgb(0, 233, 249); */
  position: absolute;
  /* padding-top: 4%; */
  /* position: relative; */
  /* top: 6%; */
}
.title-line {
  margin-left: -15px;
  margin-top: 5px;
  display: flex;
  align-items: center;
}

.Line {
  border-top: 2px solid #2c567a;
  width: 110px;
  height: 0;
}

.ball {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #06c8eb;
}
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
