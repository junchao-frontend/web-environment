<template>
  <div class="radars">
    <div id="cols2">
      除尘运行数据
      <div class="title-line">
        <div class="ball"></div>
        <div class="line"></div>
      </div>
    </div>
    <div id="line1"></div>
    <div id="line2"></div>
  </div>
</template>

<script>
// import echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initLine1();
    this.initLine2();
  },
  methods: {
    initLine1() {
      let myChart = this.$echarts.init(document.getElementById("line1")); //初始化实例
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
        legend: {
          top: "15%",
          itemWidth: 15,
          itemHeight: 8,
          textStyle: {
            color: "#a6bde9",
            fontSize: 10,
          },
        },
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
          top: "32%",
          left: "3%",
          right: "5%",
          bottom: "-2%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          axisTick: { show: false },
          boundaryGap: false,
          data: ["08:01", "08:02", "08:03", "08:04", "08:05", "08:06"],
          //设置轴线的属性
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 10, //更改坐标轴文字大小
            },
          },
          axisLine: {
            lineStyle: {
              color: "#a6bde9",
            },
          },
        },
        yAxis: {
          min: 0,
          max: 400,
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
              type: "dashed",
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
            name: "窑喂料量",
            type: "line",
            showSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            symbolSize: 5,
            lineStyle: {
              normal: {
                width: 2,
                color: "#3fb594",
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
              color: "#3fb594",
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
            data: [205, 105.35, 160.02, 280.55, 210.57, 220.14],
          },
          {
            name: "窑电流",
            type: "line",
            showSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            symbolSize: 6,
            lineStyle: {
              normal: {
                width: 2,
                color: "#ffcd00",
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
              color: "#ffcd00",
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
            data: [120, 280.35, 245.02, 240.55, 280.57, 180.14],
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    initLine2() {
      let myChart = this.$echarts.init(document.getElementById("line2")); //初始化实例
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
        legend: {
          top: '8%',
          itemWidth: 15,
          itemHeight: 8,
          textStyle: {
            color: "#a6bde9",
            fontSize: 10,
          },
        },
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
          top: "25%",
          left: "3%",
          right: "5%",
          bottom: "4%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          axisTick: { show: false },
          boundaryGap: false,
          data: ["08:01", "08:02", "08:03", "08:04", "08:05", "08:06"],
          nameTextStyle: {
            fontSize: 5,
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 10, //更改坐标轴文字大小
            },
          },
          //设置轴线的属性
          axisLine: {
            lineStyle: {
              color: "#a6bde9",
              fontSize: 10,
            },
          },
        },
        yAxis: {
          min: 0,
          max: 400,
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
            fontSize: 10,
            lineHeight: 40,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#283352",
              type: "dashed",
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
            name: "磨喂料量",
            type: "line",
            showSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            symbolSize: 5,
            lineStyle: {
              normal: {
                width: 2,
                color: "#f37677",
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
              color: "#f37677",
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
            data: [205, 105.35, 160.02, 280.55, 210.57, 220.14],
          },
          {
            name: "磨电流",
            type: "line",
            showSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            symbolSize: 6,
            lineStyle: {
              normal: {
                width: 2,
                color: "#3ec2e8",
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
              color: "#3ec2e8",
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
            data: [120, 280.35, 245.02, 240.55, 280.57, 180.14],
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
#line1 {
  height: 50%;
  width: 100%;
  display: flex;
  /* padding-top: 7%; */
}
#line2 {
  height: 50%;
  width: 100%;
  display: flex;
  /* margin-bottom: -30px; */
  /* padding-top: 7%; */
}
#cols2 {
  top: 10px;
  right: -330px;
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
  margin-left: -5px;
  margin-top: 2px;
  display: flex;
  align-items: center;
}

.line {
  border-top: 2px solid #2c567a;
  width: 90px;
  height: 0;
}

.ball {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #06c8eb;
}
.radars {
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