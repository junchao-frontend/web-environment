<template>
  <div class="Bars">
    <!-- <div id="cols2">扬尘实时排序</div> -->
    <div id="Bar" ref="Bar"></div>
  </div>
</template>

<script>
import echarts from "echarts";
// import chalk from "../chalk/chalk.json";
// import { dataStatistics } from "@/api/test.js";
export default {
  name: "echartsBar",
  data() {
    return {
      tableData: [],
      PM2_5: [],
      TSP: [],
      PM10: [],
      lineData: null,
      PieCharts: "", // 用来存放echart对象的变量
      option: "", // 用来存放echart数据对象的变量
      AllDeviceName: [], // 所有数据类型的list
      active: "active", // 选中状态的类名
      notactive: "", // 未选中状态的类名
      ifactive: 0, // 判断是否为选中状态
      DateList: [], // 用来存放各个报警平均数据的时间list
      echartsItem: [], // 存放echart的数据option
      unit: "", // 储存echart切换不同类型数据的时候不同单位的临时变量
      optionsData: [], // 存放 每个options的data
    };
  },
  mounted() {
    // this.initBar();
    this.$nextTick(this.init());
  },
  methods: {
    // init() {
    //   dataStatistics().then((res) => {
    //     this.tableData = res.data.data;
    //     // console.log(res.data, '数据-kkk--')
    //     for (var index in res.data.data) {
    //       // console.log(res.data[index])
    //       this.PM2_5.push({
    //         code: "",
    //         stock: res.data.data[index].deviceNmae,
    //         location: res.data.data[index].deviceLocation.address,
    //         fundPost: res.data.data[index]["PM2_5"]
    //           ? res.data.data[index]["PM2_5"].value
    //           : 0,
    //       });
    //       this.PM10.push({
    //         code: "",
    //         stock: res.data.data[index].deviceNmae,
    //         location: res.data.data[index].deviceLocation.address,
    //         fundPost: res.data.data[index]["PM10"]
    //           ? res.data.data[index]["PM10"].value
    //           : 0,
    //       });

    //       this.TSP.push({
    //         code: "",
    //         stock: res.data.data[index].deviceNmae,
    //         location: res.data.data[index].deviceLocation.address,
    //         fundPost: res.data.data[index]["TSP"]
    //           ? res.data.data[index]["TSP"].value
    //           : 0,
    //       });
    //     }
    //     // 排序
    //     function compare(property) {
    //       return function (a, b) {
    //         var value1 = a[property];
    //         var value2 = b[property];
    //         return value2 - value1;
    //       };
    //     }
    //     this.PM2_5.sort(compare("fundPost"));
    //     this.PM10.sort(compare("fundPost"));
    //     this.TSP.sort(compare("fundPost"));
    //     // console.log("optionsData",this.PM2_5,this.PM10,this.TSP)
    //     this.getEchartsData();
    //   });
    // },
    getEchartsData() {
      var _this = this;
      this.DateList = ["PM2_5", "PM10", "TSP"];
      this.DateList.forEach((KEY) => {
        let data = [];
        switch (KEY) {
          case "PM2_5":
            data = this.PM2_5.slice(0, 10);
            // 默认取前十个
            break;
          case "PM10":
            data = this.PM10.slice(0, 10);
            break;
          case "TSP":
            data = this.TSP.slice(0, 10);
            break;
        }

        function contains(arr, dst) {
          var i = arr.length;
          while ((i -= 1)) {
            if (arr[i] === dst) {
              return i;
            }
          }
          return false;
        }

        var attackSourcesColor = [
          new echarts.graphic.LinearGradient(0, 1, 1, 1, [
            { offset: 0, color: "#395CFE" },
            { offset: 1, color: "#2EC7CF" },
          ]),
          new echarts.graphic.LinearGradient(0, 1, 1, 1, [
            { offset: 0, color: "#395CFE" },
            { offset: 1, color: "#2EC7CF" },
          ]),
          new echarts.graphic.LinearGradient(0, 1, 1, 1, [
            { offset: 0, color: "#395CFE" },
            { offset: 1, color: "#2EC7CF" },
          ]),
          new echarts.graphic.LinearGradient(0, 1, 1, 1, [
            { offset: 0, color: "#395CFE" },
            { offset: 1, color: "#2EC7CF" },
          ]),
        ];
        var attackSourcesColor1 = [
          "#3860FC",
          "#3860FC",
          "#3860FC",
          "#3860FC",
          // "#1089E7",
          // "#F57474",
          // "#56D0E3",
          // "#1089E7",
          // "#F57474",
          // "#1089E7",
          // "#F57474",
          // "#F57474"
        ];
        var attaData = [];
        var attaName = [];

        var topName = [];
        data.forEach((it, index) => {
          attaData[index] = {
            data: parseFloat(it.fundPost).toFixed(2),
            location: it.location,
          };
          attaName[index] = it.stock;

          topName[index] = ``;
        });

        var salvProMax = []; // 背景按最大值
        for (let i = 0; i < attaData.length; i++) {
          salvProMax.push(attaData[0]);
        }
        function attackSourcesDataFmt(sData) {
          var sss = [];
          sData.forEach(function (item, i) {
            // console.log("item",item)
            const itemStyle = {
              color: i > 3 ? attackSourcesColor[3] : attackSourcesColor[i],
            };
            if (item.location) {
              sss.push({
                location: item.location,
                value: item.data,
                itemStyle: itemStyle,
              });
            } else {
              sss.push({
                value: item,
                itemStyle: itemStyle,
              });
            }
          });
          // console.log("数据：",sss)
          return sss;
        }

        _this.echartsItem.push({
          backgroundColor: "transparent",
          tooltip: {
            show: false, // 是否显示
            backgroundColor: "black", // 背景颜色（此时为默认色）
            textStyle: {
              fontSize: 10,
            },
            position: 'top',
            // add start
            trigger: "axis",
            // eslint-disable-next-line no-unused-vars
            formatter: function (params, ticket, callback) {
              return params[0].data.location;
            },
            // add end
          },
          color: ["#F7B731"],
          legend: {
            pageIconSize: [12, 12],
            itemWidth: 0,
            itemHeight: 0,
            textStyle: {
              // 图例文字的样式
              fontSize: 14,
              color: "#fff",
            },
            selectedMode: false,
          },
          grid: {
            left: "20%",
            right: "00%",
            width: "65%",
            bottom: "30%",
            top: "0%",
            // containLabel: true
          },
          xAxis: {
            type: "value",

            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
          },
          yAxis: [
            {
              type: "category",
              inverse: true,
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisPointer: {
                label: {
                  show: true,
                  // margin: 30
                },
              },
              pdaaing: [5, 0, 0, 0],
              postion: "left",
              data: attaName,
              axisLabel: {
                margin: 30,
                fontSize: 14,
                align: "left",
                padding: [2, 0, 0, 0],
                color: "#000",
                rich: {
                  nt1: {
                    color: "#fff",
                    backgroundColor: attackSourcesColor1[0],
                    width: 13,
                    height: 13,
                    fontSize: 12,
                    align: "center",
                    borderRadius: 100,
                    lineHeight: "5",
                    padding: [0, 1, 2, 1],
                    // padding:[0,0,2,0],
                  },
                  nt2: {
                    color: "#fff",
                    backgroundColor: attackSourcesColor1[1],
                    width: 13,
                    height: 13,
                    fontSize: 12,
                    align: "center",
                    borderRadius: 100,
                    padding: [0, 1, 2, 1],
                  },
                  nt3: {
                    color: "#fff",
                    backgroundColor: attackSourcesColor1[2],
                    width: 13,
                    height: 13,
                    fontSize: 12,
                    align: "center",
                    borderRadius: 100,
                    padding: [0, 1, 2, 1],
                  },
                  nt: {
                    color: "#fff",
                    backgroundColor: attackSourcesColor1[3],
                    width: 13,
                    height: 13,
                    fontSize: 12,
                    align: "center",
                    lineHeight: 3,
                    borderRadius: 100,
                    padding: [0, 1, 2, 1],
                  },
                },
                formatter: function (value, index) {
                  index = contains(attaName, value) + 1;
                  if (index - 1 < 3) {
                    return ["{nt" + index + "|" + index + "}"].join("\n");
                  } else {
                    return ["{nt|" + index + "}"].join("\n");
                  }
                },
              },
            },
            {
              type: "category",
              inverse: true,
              axisTick: "none",
              axisLine: "none",
              show: true,
              axisLabel: {
                textStyle: {
                  color: "#fff",
                  fontSize: "14",
                },
              },
              data: attackSourcesDataFmt(attaName),
            },
            {
              // 名称
              type: "category",
              offset: -10,
              position: "left",
              axisLine: {
                show: false,
              },
              inverse: false,
              axisTick: {
                show: false,
              },
              axisLabel: {
                interval: 0,
                color: ["#fff"],
                align: "left",
                verticalAlign: "bottom",
                lineHeight: 32,
                fontSize: 12,
              },
              data: topName,
            },
          ],
          series: [
            {
              zlevel: 1,
              // name: "扬尘实时",
              type: "bar",
              barWidth: "15px",
              animationDuration: 1500,
              data: attackSourcesDataFmt(attaData),
              align: "center",
              itemStyle: {
                normal: {
                  barBorderRadius: 10,
                },
              },
              label: {
                show: true,
                fontSize: 12,
                color: "#fff",
                textBorderWidth: 2,
                padding: [2, 0, 0, 0],
              },
            },
            // {
            //   // name: "扬尘实时排序",
            //   type: "bar",
            //   barWidth: 15,
            //   barGap: "-100%",
            //   margin: "20",
            //   data: salvProMax,
            //   textStyle: {
            //     // 图例文字的样式
            //     fontSize: 12,
            //     color: "#fff",
            //   },
            //   itemStyle: {
            //     normal: {
            //       color: "#05325F",
            //       // width:"100%",
            //       fontSize: 12,
            //       barBorderRadius: 30,
            //     },
            //   },
            // },
          ],
        });
      });
      this.$nextTick(this.initBar());
    },
    initBar() {
    //   let myChart = this.$echarts.init(document.getElementById("Bar", "chalk")); //初始化实例
      let myChart = this.$echarts.init(this.$refs.Bar, "chalk"); //初始化实例
      var fontColor = "#30eee9";
      var timeline = {
        // loop: false,
        axisType: "category",
        show: true,
        bottom: "15%",
        autoPlay: true,
        playInterval: 10000,
        data: this.DateList,
        controlPosition: "none",
        lineStyle: {
          color: "#0f496f",
        },
        label: {
          textStyle: {
            color: fontColor,
          },
          fontSize: 10,
        },
        orient: "horizontal",
        checkpointStyle: {
          symbolSize: 5,
          borderWidth: 5,
        },
        symbolSize: 10,
      };
      this.option = {
        timeline: timeline,
        options: this.echartsItem,
      };
      myChart.setOption(this.option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#Bar {
  height: 100%;
  width: 100%;
  /* background-color: rgba(1, 131, 196, 0.05); */
  /* margin-top: 3%; */
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