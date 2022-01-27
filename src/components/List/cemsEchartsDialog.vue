<template>
  <div class="echarts">
    <!-- <div></div> -->
    <div class="echart" ref="chart"></div>
  </div>
</template>

<script>
// import chalk1 from "../chalk/chalk1.json";
import { mapState } from 'vuex'
import echarts from "echarts";
export default {
  name: "",
  components: {},
  props: ['cemsDataItem'],
  data() {
    return {
      cemsData: this.cemsDataItem
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
    initDialogs() {
      this.$echarts.init(this.$refs.chart).dispose()
      let myChart = this.$echarts.init(this.$refs.chart); //初始化实例

      let option = {
        // title: {
        //     show: false,
        //     text: '多线图',
        //     textStyle: {
        //         align: 'center',
        //         color: '#fff',
        //         fontSize: 20,
        //     },
        //     top: '5%',
        //     left: 'center',
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
          top: "28%",
          left: "4%",
          right: "5%",
          bottom: "-1%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          axisTick: { show: false },
          boundaryGap: false,
          data: this.cemsData.time,
          axisLabel: {
            interval: 3,
            rotate: -30,
            fontStyle: {
              fontSize: 10
            }
          },
          //设置轴线的属性
          axisLine: {
            lineStyle: {
              color: "#a6bde9",
            },
          },
        },
        yAxis: {
          max: 'dataMax',
          min: 'dataMin',
          name: this.cemsData.unit,
          nameLocation: 'end',
          nameTextStyle: {
            fontSize: 10,
            color:"#a6bde9"
          },
          boundaryGap: false,
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#a6bde9",
              fontSize: 10,
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#283352",
              type: 'dashed'
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#a6bde9",
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            // name: "昨日",
            type: "line",
            smooth: true, //是否平滑
            showSymbol: false,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            lineStyle: {
              normal: {
                width: 2,
                color: "#19a3df",
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(79, 224, 171,.3)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(88,255,255,0)",
                    },
                  ],
                  false
                ),
              },
            },
            label: {
              show: false,
              position: "top",
              textStyle: {
                color: "#fff",
                fontSize: 14,
              },
            },
            itemStyle: {
              color: "#00DAFF",
              borderColor: "rgb(0,115,100)",
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0)",
              shadowBlur: 0,
              shadowOffsetY: 0,
              shadowOffsetX: 0,
            },
            tooltip: {
              show: true,
            },
            data: this.cemsData.data,
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
