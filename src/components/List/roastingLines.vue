<template>
  <div class="main">
    <div id="cols2">
      CEMS
      <i
          class="el-icon-full-screen"
          style="font-size: 8px; cursor: pointer; color: white"
          @click="openLinesInfo()"
      />
      <div class="title-line">
        <div class="Line"></div>
        <div class="ball"></div>
      </div>
    </div>
    <div class="echarts-title1">
      <span class="text1">{{ echartsName[0] }}</span>
    </div>
    <div class="echarts-title2">
      <span class="text2">{{ echartsName[1] }}</span>
    </div>
    <div class="echarts-title3">
      <span class="text3">{{ echartsName[2] }}</span>
    </div>
    <div class="echarts-title4">
      <span class="text4">{{ echartsName[3] }}</span>
    </div>
    <div class="echarts-title5">
      <span class="text5">{{ echartsName[4] }}</span>
    </div>
    <div class="echarts-title6">
      <span class="text6">{{ echartsName[5] }}</span>
    </div>
    <div class="echarts-title7">
      <span class="text7">{{ echartsName[6] }}</span>
    </div>
    <div class="echarts-title8">
      <span class="text8">{{ echartsName[7] }}</span>
    </div>
    <div class="echarts-title9">
      <span class="text9">{{ echartsName[8] }}</span>
    </div>
    <div class="echarts-title10">
      <span class="text10">{{ echartsName[9] }}</span>
    </div>
    <div class="line-top" ref="line1"></div>
    <div class="line-top" ref="line2"></div>
    <div class="line-top" ref="line3"></div>
    <div class="line-top" ref="line4"></div>
    <div class="line-top" ref="line5"></div>
    <div class="line" ref="line6"></div>
    <div class="line" ref="line7"></div>
    <div class="line" ref="line8"></div>
    <div class="line" ref="line9"></div>
    <div class="line" ref="line10"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import { getCemsData } from "@/api/line.js";
export default {
  name: "",
  components: {},
  props: ['dialogVisible'],
  data() {
    return {
      linesData: "",
      echartsData: "", // 真实数据数组
      echartsName: "",
      echarts6Datamin: ''
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.initData();
    // console.log(this.dialogVisible);
  },
  methods: {
    initData() {
      let params = {
        code: 202201152021,
      };
      getCemsData(params).then((res) => {
        console.log(res, '-----');
        this.linesData = res.data.data[0].info;
        let names = Object.keys(this.linesData);
        this.echartsName = names;
        let dataArr = Object.values(this.linesData);
        this.echartsData = dataArr;
        // console.log(Math.min(...echarts6Data), 'this.echartsData');
        this.$nextTick(this.initLine1());
        this.$nextTick(this.initLine2());
        this.$nextTick(this.initLine3());
        this.$nextTick(this.initLine4());
        this.$nextTick(this.initLine5());
        this.$nextTick(this.initLine6());
        this.$nextTick(this.initLine7());
        this.$nextTick(this.initLine8());
        this.$nextTick(this.initLine9());
        this.$nextTick(this.initLine10());
      });
    },
    initLine1() {
      let myChart = this.$echarts.init(this.$refs.line1, "chalk1"); //初始化实例
      let option = {
        grid: {
          top: "20%",
          bottom: "15%",
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
          formatter: function (params) {
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              relVal +=
                "<br/>" + params[i].marker + params[i].value + "(毫克/立方米)";
            }
            return relVal;
          },
        },
        xAxis: {
          show: true,
          type: "category",
          axisTick: { show: false },
          boundaryGap: false,
          data: this.echartsData[0].time,
          axisLabel: {
            show: false
          },
          //设置轴线的属性
          axisLine: {
            lineStyle: {
              color: "#a6bde9",
            },
          },
        },
        yAxis: {
          show: false,
          boundaryGap: false,
          max: 'dataMax',
          min: 'dataMin',
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
            show: false,
            // lineStyle: {
            //   color: "#243753",
            // },
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
            data: this.echartsData[0].data,
            type: "line",
            // symbolSize: 7,
            symbol: 'circle',
            symbolSize: 6,
            showSymbol: false,
            zlevel: 3,
            itemStyle: {
              color: "#19a3df",
              // borderColor: "#a3c8d8",
            },
            lineStyle: {
              normal: {
                width: 2,
                color: "#19a3df",
              },
            },
            smooth: false,
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
                      color: "rgba(88,255,255,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(88,255,255,0)",
                    },
                  ],
                  false
                ),
              },
            },
          },
        ],
      };

      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    initLine2() {
      let myChart = this.$echarts.init(this.$refs.line2, "chalk1"); //初始化实例
      let option = {
        grid: {
          top: "20%",
          bottom: "15%",
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
          formatter: function (params) {
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              relVal +=
                "<br/>" + params[i].marker + params[i].value + "(毫克/立方米)";
            }
            return relVal;
          },
        },
        xAxis: {
          show: true,
          type: "category",
          axisTick: { show: false },
          boundaryGap: false,
          data: this.echartsData[1].time,
          axisLabel: {
            show: false
          },
          //设置轴线的属性
          axisLine: {
            lineStyle: {
              color: "#a6bde9",
            },
          },
        },
        yAxis: {
          show: false,
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
            show: false,
            // lineStyle: {
            //   color: "#243753",
            // },
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
            data: this.echartsData[1].data,
            type: "line",
            symbol: 'circle',
            symbolSize: 6,
            showSymbol: false,
            zlevel: 3,
            itemStyle: {
              color: "#d5b00a",
              // borderColor: "#a3c8d8",
            },
            lineStyle: {
              normal: {
                width: 2,
                color: "#d5b00a",
              },
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
        ],
      };

      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    initLine3() {
      let myChart = this.$echarts.init(this.$refs.line3, "chalk1"); //初始化实例
      let option = {
        grid: {
          top: "20%",
          bottom: "15%",
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
          formatter: function (params) {
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              relVal +=
                "<br/>" + params[i].marker + params[i].value + "(立方米/秒)";
            }
            return relVal;
          },
        },
        xAxis: {
          show: true,
          axisLabel: {
            show: false
          },
          type: "category",
          axisTick: { show: false },
          boundaryGap: false,
          data: this.echartsData[2].time,
          //设置轴线的属性
          axisLine: {
            lineStyle: {
              color: "#a6bde9",
            },
          },
        },
        yAxis: {
          show: false,
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
            show: false,
            // lineStyle: {
            //   color: "#243753",
            // },
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
            data: this.echartsData[2].data,
            type: "line",
            symbol: 'circle',
            // symbolSize: 7,
            showSymbol: false,
            symbolSize: 6,
            zlevel: 3,
            itemStyle: {
              color: "#3fb594",
              // borderColor: "#a3c8d8",
            },
            lineStyle: {
              normal: {
                width: 2,
                color: "#3fb594",
              },
            },
            smooth: false,
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
                      color: "rgba(79, 224, 171,.2)",
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
          },
        ],
      };

      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    initLine4() {
      let myChart = this.$echarts.init(this.$refs.line4, "chalk1"); //初始化实例
      let option = {
        grid: {
          top: "20%",
          bottom: "15%",
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
          formatter: function (params) {
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              relVal +=
                "<br/>" + params[i].marker + params[i].value + "(%)";
            }
            return relVal;
          },
        },
        xAxis: {
          show: true,
          axisLabel: {
            show: false
          },
          type: "category",
          axisTick: { show: false },
          boundaryGap: false,
          data: this.echartsData[3].time,
          //设置轴线的属性
          axisLine: {
            lineStyle: {
              color: "#a6bde9",
            },
          },
        },
        yAxis: {
          show: false,
          max: 35,
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
            show: false,
            // lineStyle: {
            //   color: "#243753",
            // },
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
            data: this.echartsData[3].data,
            type: "line",
            // symbolSize: 7,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            zlevel: 3,
            itemStyle: {
              color: "#db6c72",
              // borderColor: "#a3c8d8",
            },
            lineStyle: {
              normal: {
                width: 2,
                color: "#db6c72",
              },
            },
            smooth: false,
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
                      color: "rgba(218, 105, 111,0.2)",
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
          },
        ],
      };

      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    initLine5() {
      let myChart = this.$echarts.init(this.$refs.line5, "chalk1"); //初始化实例
      let option = {
        grid: {
          top: "20%",
          bottom: "15%",
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
          formatter: function (params) {
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              relVal +=
                "<br/>" + params[i].marker + params[i].value + "(毫克/立方米)";
            }
            return relVal;
          },
        },
        xAxis: {
          show: true,
          axisLabel: {
            show: false
          },
          type: "category",
          axisTick: { show: false },
          boundaryGap: false,
          data: this.echartsData[4].time,
          //设置轴线的属性
          axisLine: {
            lineStyle: {
              color: "#a6bde9",
            },
          },
        },
        yAxis: {
          show: false,
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
            show: false,
            // lineStyle: {
            //   color: "#243753",
            // },
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
            data: this.echartsData[4].data,
            type: "line",
            symbol: 'circle',
            symbolSize: 6,
            showSymbol: false,
            zlevel: 3,
            itemStyle: {
              color: "#585eaa",
              // borderColor: "#a3c8d8",
            },
            lineStyle: {
              normal: {
                width: 2,
                color: "#585eaa",
              },
            },
            smooth: false,
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
                      color: "rgba(88, 94, 170,0.9)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(88, 94, 170,0)",
                    },
                  ],
                  false
                ),
              },
            },
          },
        ],
      };

      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    initLine6() {
      let myChart = this.$echarts.init(this.$refs.line6, "chalk1"); //初始化实例
      let option = {
        grid: {
          top: "15%",
          // bottom: '20%'
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
          formatter: function (params) {
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              relVal +=
                "<br/>" + params[i].marker + params[i].value + "(毫克/立方米)";
            }
            return relVal;
          },
        },
        xAxis: {
          show: true,
          axisLabel: {
            show: false
          },
          type: "category",
          axisTick: { show: false },
          boundaryGap: false,
          data: this.echartsData[5].time,
          //设置轴线的属性
          axisLine: {
            lineStyle: {
              color: "#a6bde9",
            },
          },
        },
        yAxis: {
          show: false,
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
            show: false,
            // lineStyle: {
            //   color: "#243753",
            // },
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
            data: this.echartsData[5].data,
            type: "line",
            // symbolSize: 7,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            zlevel: 3,
            itemStyle: {
              color: "#d5b00a",
              // borderColor: "#a3c8d8",
            },
            lineStyle: {
              normal: {
                width: 2,
                color: "#d5b00a",
              },
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
                    color: "rgba(255,188,13, 0.2)",
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
        ],
      };

      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    initLine7() {
      let myChart = this.$echarts.init(this.$refs.line7, "chalk1"); //初始化实例
      let option = {
        grid: {
          top: "15%",
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
          formatter: function (params) {
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              relVal +=
                "<br/>" + params[i].marker + params[i].value + "(千帕)";
            }
            return relVal;
          },
        },
        xAxis: {
          show: true,
          position: 'bottom',
          axisLabel: {
            show: false
          },
          type: "category",
          axisTick: { show: false },
          boundaryGap: false,
          data: this.echartsData[6].time,
          //设置轴线的属性
          axisLine: {
            lineStyle: {
              color: "#a6bde9",
            },
          },
        },
        yAxis: {
          show: false,
          // inverse: true,
          max: 'dataMax',
          min: 'dataMin',
          // min: this.echarts6Datamin,
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
            show: false,
            // lineStyle: {
            //   color: "#243753",
            // },
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
            data: this.echartsData[6].data,
            type: "line",
            symbol: 'circle',
            symbolSize: 6,
            showSymbol: false,
            zlevel: 3,
            itemStyle: {
              color: "#3fb594",
              // borderColor: "#a3c8d8",
            },
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
                      color: "rgba(79, 224, 171,.2)",
                    },
                    {
                      offset: 0.9,
                      color: "rgba(88,255,255,0)",
                    },
                  ],
                  false
                ),
              },
            },
            smooth: false,
          },
        ],
      };

      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    initLine8() {
      let myChart = this.$echarts.init(this.$refs.line8, "chalk1"); //初始化实例
      let option = {
        grid: {
          top: "15%",
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
          formatter: function (params) {
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              relVal +=
                "<br/>" + params[i].marker + params[i].value + "(米/秒)";
            }
            return relVal;
          },
        },
        xAxis: {
          show: true,
          axisLabel: {
            show: false
          },
          type: "category",
          axisTick: { show: false },
          boundaryGap: false,
          data: this.echartsData[7].time,
          //设置轴线的属性
          axisLine: {
            lineStyle: {
              color: "#a6bde9",
            },
          },
        },
        yAxis: {
          show: false,
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
            show: false,
            // lineStyle: {
            //   color: "#243753",
            // },
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
            data: this.echartsData[7].data,
            type: "line",
            symbol: 'circle',
            symbolSize: 6,
            showSymbol: false,
            zlevel: 3,
            itemStyle: {
              color: "#db6c72",
              // borderColor: "#a3c8d8",
            },
            lineStyle: {
              normal: {
                width: 2,
                color: "#db6c72",
              },
            },
            smooth: false,
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
                      color: "rgba(218, 105, 111,0.2)",
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
          },
        ],
      };

      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    initLine9() {
      let myChart = this.$echarts.init(this.$refs.line9, "chalk1"); //初始化实例
      let option = {
        grid: {
          top: "15%",
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
          formatter: function (params) {
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              relVal +=
                "<br/>" + params[i].marker + params[i].value + "(摄氏度)";
            }
            return relVal;
          },
        },
        xAxis: {
          show: true,
          axisLabel: {
            show: false
          },
          type: "category",
          axisTick: { show: false },
          boundaryGap: false,
          data: this.echartsData[8].time,
          //设置轴线的属性
          axisLine: {
            lineStyle: {
              color: "#a6bde9",
            },
          },
        },
        yAxis: {
          show: false,
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
            show: false,
            // lineStyle: {
            //   color: "#243753",
            // },
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
            data: this.echartsData[8].data,
            type: "line",
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            zlevel: 3,
            itemStyle: {
              color: "#19a3df",
              // borderColor: "#a3c8d8",
            },
            lineStyle: {
              normal: {
                width: 2,
                color: "#19a3df",
              },
            },
            smooth: false,
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
          },
        ],
      };

      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    initLine10() {
      let myChart = this.$echarts.init(this.$refs.line10, "chalk1"); //初始化实例
      let option = {
        grid: {
          top: "15%",
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
          formatter: function (params) {
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              relVal +=
                "<br/>" + params[i].marker + params[i].value + "(%)";
            }
            return relVal;
          },
        },
        xAxis: {
          show: true,
          axisLabel: {
            show: false
          },
          type: "category",
          axisTick: { show: false },
          boundaryGap: false,
          data: this.echartsData[9].time,
          //设置轴线的属性
          axisLine: {
            lineStyle: {
              color: "#a6bde9",
            },
          },
        },
        yAxis: {
          show: false,
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
            show: false,
            // lineStyle: {
            //   color: "#243753",
            // },
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
            data: this.echartsData[9].data,
            type: "line",
            symbol: 'circle',
            symbolSize: 6,
            showSymbol: false,
            zlevel: 3,
            itemStyle: {
              color: "#585eaa",
              // borderColor: "#a3c8d8",
            },
            lineStyle: {
              normal: {
                width: 2,
                color: "#585eaa",
              },
            },
            smooth: false,
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
                      color: "rgba(88, 94, 170,0.2)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(88, 94, 170,0)",
                    },
                  ],
                  false
                ),
              },
            },
          },
        ],
      };

      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    openLinesInfo () {
      this.$emit("openDialog", true)
    }
  },
};
</script>
<style lang="scss" scoped>
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
  width: 70px;
  height: 0;
}
.ball {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #06c8eb;
}
.line {
  margin-top: -20px;
  height: 50%;
  width: 19%;
  /* border: solid 1px rgba(255, 255, 255, 0);
  border-top-color: rgba(255, 255, 255, 0.12); */
}
.line-top {
  margin-top: 45px;
  height: 50%;
  width: 19%;
}
.echarts-title1 {
  display: flex;
  align-items: center;
  position: absolute;
  top: 17%;
  left: 4.8%;
  width: 70px;
  height: 20px;
  // background-image: linear-gradient(
  //   to right,
  //   rgba(10, 179, 221, 0.8),
  //   rgba(44, 127, 175, 0.5)
  // );
  .text1 {
    color: #a6bde9;
    font-size: 12px;
    // margin-left: 5px;
  }
}
.echarts-title2 {
  display: flex;
  align-items: center;
  position: absolute;
  top: 17%;
  left: 23.5%;
  width: 70px;
  height: 20px;
  // background-image: linear-gradient(
  //   to right,
  //   rgba(10, 179, 221, 0.8),
  //   rgba(44, 127, 175, 0.5)
  // );
  .text2 {
    color: #a6bde9;
    font-size: 12px;
    // margin-left: 5px;
  }
}
.echarts-title3 {
  display: flex;
  align-items: center;
  position: absolute;
  top: 17%;
  left: 42.8%;
  width: 70px;
  height: 20px;
  // background-image: linear-gradient(
  //   to right,
  //   rgba(10, 179, 221, 0.8),
  //   rgba(44, 127, 175, 0.5)
  // );
  .text3 {
    color: #a6bde9;
    font-size: 12px;
    // margin-left: 5px;
  }
}
.echarts-title4 {
  display: flex;
  align-items: center;
  position: absolute;
  top: 17%;
  left: 61.8%;
  width: 70px;
  height: 20px;
  // background-image: linear-gradient(
  //   to right,
  //   rgba(10, 179, 221, 0.8),
  //   rgba(44, 127, 175, 0.5)
  // );
  .text4 {
    color: #a6bde9;
    font-size: 12px;
    // margin-left: 5px;
  }
}
.echarts-title5 {
  display: flex;
  align-items: center;
  position: absolute;
  top: 17%;
  left: 80.7%;
  width: 70px;
  height: 20px;
  // background-image: linear-gradient(
  //   to right,
  //   rgba(10, 179, 221, 0.8),
  //   rgba(44, 127, 175, 0.5)
  // );
  .text5 {
    color: #a6bde9;
    font-size: 12px;
    // margin-left: 5px;
  }
}
.echarts-title6 {
  display: flex;
  align-items: center;
  position: absolute;
  top: 59%;
  left: 4.8%;
  width: 70px;
  height: 20px;
  // background-image: linear-gradient(
  //   to right,
  //   rgba(10, 179, 221, 0.8),
  //   rgba(44, 127, 175, 0.5)
  // );
  .text6 {
    color: #a6bde9;
    font-size: 12px;
    // margin-left: 5px;
  }
}
.echarts-title7 {
  display: flex;
  align-items: center;
  position: absolute;
  top: 59%;
  left: 23.5%;
  width: 70px;
  height: 20px;
  // background-image: linear-gradient(
  //   to right,
  //   rgba(10, 179, 221, 0.8),
  //   rgba(44, 127, 175, 0.5)
  // );
  .text7 {
    color: #a6bde9;
    font-size: 12px;
    // margin-left: 5px;
  }
}
.echarts-title8 {
  display: flex;
  align-items: center;
  position: absolute;
  top: 59%;
  left: 42.8%;
  width: 70px;
  height: 20px;
  // background-image: linear-gradient(
  //   to right,
  //   rgba(10, 179, 221, 0.8),
  //   rgba(44, 127, 175, 0.5)
  // );
  .text8 {
    color: #a6bde9;
    font-size: 12px;
    // margin-left: 5px;
  }
}
.echarts-title9 {
  display: flex;
  align-items: center;
  position: absolute;
  top: 59%;
  left: 61.8%;
  width: 70px;
  height: 20px;
  // background-image: linear-gradient(
  //   to right,
  //   rgba(10, 179, 221, 0.8),
  //   rgba(44, 127, 175, 0.5)
  // );
  .text9 {
    color: #a6bde9;
    font-size: 12px;
    // margin-left: 5px;
  }
}
.echarts-title10 {
  display: flex;
  align-items: center;
  position: absolute;
  top: 59%;
  left: 80.7%;
  width: 70px;
  height: 20px;
  // background-image: linear-gradient(
  //   to right,
  //   rgba(10, 179, 221, 0.8),
  //   rgba(44, 127, 175, 0.5)
  // );
  .text10 {
    color: #a6bde9;
    font-size: 12px;
    // margin-left: 5px;
  }
}
.main {
  padding-left: 30px;
  /* padding-top: 20px; */
  /* border-top-color: rgba(255, 255, 255, 0.12);
  border: solid 1px rgba(255, 255, 255, 0); */
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  /* background-color: rgb(168, 99, 99); */
}
.el-icon-full-screen{
  position: relative;
  z-index: 2000;
}
</style>
