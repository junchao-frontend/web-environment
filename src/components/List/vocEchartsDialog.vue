<template>
  <div class="echarts">
    <!-- <div></div> -->
    <div class="echart" ref="chart"></div>
  </div>
</template>

<script>
// import chalk1 from "../chalk/chalk1.json";
import { mapState } from 'vuex'
import { getCemsData } from "@/api/line.js";
export default {
  name: "",
  components: {},
//   props: ['cemsDataItem'],
  data() {
    return {
    //   cemsData: this.cemsDataItem
    };
  },
  computed: {
    ...mapState(['dialog'])
  },
  watch: {
    cemsDataItem: {
    handler(a) {
      console.log(a);
      this.cemsData = a
      // console.log(this.productionData.data, 'aaaa');
      this.initDialogs()
      // console.log(b, 'bbbbb');
      // this.fullName = newName + ' ' + this.lastName;
    },
    // immediate: true
  },
  dialog () {
    this.$nextTick(()=> {
      this.initDialogs()
      // console.log(1);
    });
  }
  },
  created() {
    // this.testData = this.dialogData
  },
  mounted() {
    this.$nextTick(()=> {
      this.initDialogs()
    });
  },
  methods: {
    async initDialogs() {
      this.$echarts.init(this.$refs.chart).dispose()
      let params = {
        code: 202201262134,
      };
      const {data} = await getCemsData(params)
      let noVOC = data.data.noVOC.info
      console.log(noVOC);
      let xAxis = noVOC['无组织VOC'].time
      let xAxisData = []
      xAxis.forEach(item => {
        xAxisData.push(item.substring(6).slice(0,2))
      })
      let noVOCData = noVOC['无组织VOC'].data
      let myChart = this.$echarts.init(this.$refs.chart, "chalk1"); //初始化实例
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
          textStyle: {
            fontSize: 12
          }
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
          left: "50%",
          top: "10%",
          data: ["有组织", "无组织"],
          textStyle: {
            color: '#fff'
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
          //设置轴线的属性
          axisLine: {
            lineStyle: {
              color: "#a6bde9",
            },
          },
          axisLabel: {
            textStyle: {
              color: "#a6bde9",
              fontSize: 10,
            },
          },
        },
        yAxis: {
          name: "ppm",
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
              color: "#a6bde9"
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
            data: noVOCData,
            type: "line",
            // symbolSize: 7,
            symbol: 'circle',
            symbolSize: 6,
            lineStyle: {
              color: "#d5b00a",
            },
            itemStyle: {
              color: "#d5b00a",
              // borderColor: "#a3c8d8",
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