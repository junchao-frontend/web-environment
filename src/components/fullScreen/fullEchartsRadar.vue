<template>
  <div class="radars">
    <!-- <div id="cols2">CEMS数据</div> -->
    <div id="Radar" ref="Radar"></div>
  </div>
</template>

<script>
// import echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initRadar();
  },
  methods: {
    initRadar() {
    //   let myChart = this.$echarts.init(document.getElementById("Radar")); //初始化实例
      let myChart = this.$echarts.init(this.$refs.Radar); //初始化实例
      const man = [72, 137, 116, 173];
      const woman = [12.4, 68.8, 41.1, 206.8];
      // const total = [];
      // man.forEach((item, index) => {
      //   let max = item > man[index] ? index : man[index];
      //   max = max > 0 ? max * 1.5 : 10;
      //   total.push(max);
      // });
      const indicator = [
        {
          name: "PM2.5时值",
          max: 230,
        },
        {
          name: "PM2.5日值",
          max: 230,
        },
        {
          name: "PM10时值",
          max: 230,
        },
        {
          name: "PM10日值",
          max: 230,
        }
      ];
      let option = {
        // backgroundColor: "#0B0D13",
        tooltip: {
          trigger: "item",
        },
        color: ["#068AC3", "#B2782C"],
        legend: {
          icon: "roundRect",
          // left: '47%',
          top: "5%",
          show: true,
          padding: [3, 5],
          // right: '50',
          y: "1",
          center: 0,
          itemWidth: 30,
          itemHeight: 15,
          itemGap: 26,
          z: 3,
          // orient: 'horizontal',
          data: ["国控", "厂均"],
          textStyle: {
            fontSize: 15,
            color: "#F1F7FF",
          },
        },
        radar: {
          center: ["50%", "50%"], // 外圆的位置
          radius: "55%",
          name: {
            textStyle: {
              color: "#fff",
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "PingFangSC-Regular,PingFang SC",
              fontStyle: "italic",
            },
          },
          // TODO:
          indicator: indicator,
          splitArea: {
            // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: {
              // 分隔区域的样式设置。
              color: ["#00224A", "#00224A", "#00224A", "#00224A", "#00224A"], // 画布颜色 // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            },
          },
          axisLine: {
            // 指向外圈文本的分隔线样式
            lineStyle: {
              color: "rgba(255,255,255,0.2)",
            },
          },
          splitLine: {
            lineStyle: {
              type: "solid",
              color: ["#1781BA", "#1781BA"], // 分隔线颜色
              width: 1, // 分隔线线宽
            },
          },
        },
        series: [
          {
            type: "radar",
            symbolSize: 5,
            data: [
              {
                // TODO:
                value: man,
                name: "国控",
                areaStyle: {
                  normal: {
                    color: {
                      type: "radial",
                      x: 0.5,
                      y: 0.5,
                      r: 0.5,
                      colorStops: [
                        {
                          offset: 0,
                          color: "rgba(46,203,255, 0.14)", // 0% 处的颜色
                        },
                        {
                          offset: 0.15,
                          color: "rgba(46,203,255, 0.14)", // 100% 处的颜色
                        },
                        {
                          offset: 0.75,
                          color: "#057FB3", // 100% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#078DC6", // 100% 处的颜色
                        },
                      ],
                      global: false, // 缺省为 false
                    },
                  },
                },
                itemStyle: {
                  // 折线拐点标志的样式。
                  normal: {
                    // 普通状态时的样式
                    lineStyle: {
                      width: 1,
                    },
                    opacity: 0.3,
                  },
                  emphasis: {
                    // 高亮时的样式
                    lineStyle: {
                      width: 5,
                    },
                    opacity: 0,
                  },
                },
              },
              {
                // TODO:
                value: woman,
                name: "厂均",
                areaStyle: {
                  normal: {
                    color: {
                      type: "radial",
                      x: 0.5,
                      y: 0.5,
                      r: 0.5,
                      colorStops: [
                        {
                          offset: 0,
                          color: "rgba(255, 127,0, 0.14)", // 0% 处的颜色
                        },
                        {
                          offset: 0.15,
                          color: "rgba(255, 127,0, 0.14)", // 100% 处的颜色
                        },
                        {
                          offset: 0.75,
                          color: "rgba(2255, 127,0, 0.4)", // 100% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "rgba(255, 127,0, 0.5)", // 100% 处的颜色
                        },
                      ],
                      global: false, // 缺省为 false
                    },
                  },
                },
                itemStyle: {
                  // 折线拐点标志的样式。
                  normal: {
                    // 普通状态时的样式
                    lineStyle: {
                      width: 1,
                    },
                    opacity: 0.3,
                  },
                  emphasis: {
                    // 高亮时的样式
                    lineStyle: {
                      width: 5,
                    },
                    opacity: 0,
                  },
                },
              },
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
#Radar {
  height: 100%;
  width: 100%;
  display: flex;
  /* padding-top: 7%; */
}
#cols2 {
  top: 10px;
  height: 7%;
  width: 100%;
  color: white;
  text-align: center;
  font-size: 14px;
  color: white;
  text-shadow: 0 0 8px rgb(0, 233, 249);
  position: absolute;
  /* padding-top: 4%; */
  /* position: relative; */
  /* top: 6%; */
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