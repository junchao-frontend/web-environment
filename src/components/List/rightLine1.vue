<template>
  <div class="Graph">
    <div id="cols2">
      脱硫脱硝运行数据
      <div class="title-line">
        <div class="ball"></div>
        <div class="line"></div>
      </div>
    </div>
    <div id="Graph"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initRadar();
  },
  methods: {
    initRadar() {
      let myChart = this.$echarts.init(document.getElementById("Graph")); //初始化实例
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
          // top: "5%",
          left: "3%",
          right: "5%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          axisTick: { show: false },
          boundaryGap: false,
          data: ["08:01", "08:02", "08:03", "08:04", "08:05", "08:06"],
          //设置轴线的属性
          axisLine: {
            lineStyle: {
              color: "#a6bde9",
            },
          },
        },
        yAxis: {
          boundaryGap: false,
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#a6bde9",
              fontSize: 10,
            },
          },
          nameTextStyle: {
            color: "#fff",
            fontSize: 12,
            lineHeight: 40,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#283352",
              type: 'dashed'
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#283352",
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: "昨日",
            type: "line",
            smooth: true, //是否平滑
            showSymbol: false,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            lineStyle: {
              normal: {
                width: 2,
                color: "#3fb594",
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
            data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
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
#cols2 {
  top: 15px;
  right: -305px;
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
  margin-left: -10px;
  margin-top: 5px;
  display: flex;
  align-items: center;
}

.line {
  border-top: 2px solid #2c567a;
  width: 120px;
  height: 0;
}

.ball {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #06c8eb;
}
#Graph {
  height: 100%;
  width: 100%;
  display: flex;
  /* padding-top: 7%; */
}
.Graph {
  height: 100%;
  width: 100%;
  /* background-color: rgba(1, 131, 196, 0.05); */
  /* border: solid 1px rgba(1, 131, 196, 0.25); */
  /* background-color: rbga(); */
  /* border-radius: 10%; */
  /* border-top-left-radius: 10%;
  border-top-right-radius: 0%;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 0%; */
}
</style>