<template>
  <div class="Bars">
    <div id="cols2">
      生产分析
      <div class="title-line">
        <div class="line"></div>
        <div class="ball"></div>
      </div>
    </div>
    <div id="Bar"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'echartsBar',
  props: ['echartsData'],
  data() {
    return {
      productionData: this.echartsData
    };
  },
  mounted() {
    this.initBar();
  },
  watch: {
    echartsData: {
    handler(a) {
      this.productionData = a
      // console.log(this.productionData.data, 'aaaa');
      this.initBar()
      // console.log(b, 'bbbbb');
      // this.fullName = newName + ' ' + this.lastName;
    },
    immediate: true
  }}
  ,
  methods: {
    initBar() {
      let myChart = this.$echarts.init(document.getElementById("Bar", "chalk")); //初始化实例
      let option = {
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
          top: "12%",
          left: "3%",
          right: "5%",
          bottom: "10%",
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
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 10, //更改坐标轴文字大小
            },
          },
        },
        yAxis: {
          boundaryGap: false,
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#a6bde9",
              fontSize: 9,
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
            name: this.productionData.name,
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
                      color: "rgba(88,255,255,0.2)",
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
            data: this.productionData.data,
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }
  },
};
</script>

<style lang="scss" scoped>
#Bar {
  height: 50%;
  width: 100%;
  /* background-color: rgba(1, 131, 196, 0.05); */
  /* margin-top: 3%; */
}
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

.line {
  border-top: 2px solid #2c567a;
  width: 75px;
  height: 0;
}

.ball {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #06c8eb;
}
.Bars {
  height: 100%;
  width: 100%;
  /* backdrop-filter: blur(8px);
  background-color: rgba(1, 131, 196, 0.05);
  border: solid 1px rgba(1, 131, 196, 0.25); */
  /* background-color: rbga(); */
  /* border-radius: 10%; */
  border-top-left-radius: 0;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 0%;
  border-bottom-left-radius: 10%;
  /* margin-top: 8%; */
}
</style>