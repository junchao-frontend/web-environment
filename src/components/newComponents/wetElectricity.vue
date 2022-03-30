<template>
  <div class="wetElectricity">
    <div id="cols2">
      湿电
      <div class="title-line">
        <div class="line"></div>
        <div class="ball"></div>
      </div>
    </div>
    <div id="wetElectricity"></div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import echarts from "echarts";
export default {
  props: ["index"],
  data() {
    return {
      websock: null,
      tunnelData: [], // 隧道窑湿电数据
      graphiteData: [], // 电压
      roastingData: [], // 电流
      runningTime: [], // 运行时间
      xData: [],
    };
  },
  created() {
    this.initWebSocket();
  },
  destroyed() {
    this.websock.close(); //离开路由之后断开websocket连接
  },
  mounted() {},
  watch: {
    index: {
      // eslint-disable-next-line no-unused-vars
      handler(val) {
        // console.log(val, "val");
        this.dataProcessing()
      },
    //   immediate: true,
    },
  },
  methods: {
    initWebSocket() {
      //初始化weosocket
      const wsuri = "ws://106.52.170.16:8090/getWetElectricWSData";
      //  const token = Cookies.get('token')
      this.websock = new WebSocket(wsuri);
      // console.log(this.websock);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
      // this.websocketonopen()
    },
    websocketonopen() {
      //连接建立之后执行send方法发送数据
      var token = "111";
      this.websock.send(token);
      // this.websocketsend(JSON.stringify(token));
    },
    websocketonerror() {
      //连接建立失败重连
      this.initWebSocket();
    },
    websocketonmessage(e) {
      //数据接收
      // console.log(e);
      const redata = JSON.parse(e.data);
      // console.log(redata);
      this.tunnelData = redata.runTimeAndVA.source1; // 隧道窑湿电
      this.graphiteData = redata.runTimeAndVA.source3; // 石墨化湿电
      this.roastingData = redata.runTimeAndVA.source2; // 焙烧湿电
      this.dataProcessing();
    },
    websocketsend(Data) {
      //数据发送
      // console.log(Data);
      this.websock.send(Data);
    },
    websocketclose() {
      //关闭
      // console.log("断开连接", e);
    },
    // 数据处理函数
    dataProcessing() {
      let currentIndex = this.index;
      if (currentIndex === "one") {
        let xData = [],
          power = [],
          runningTime = [];
        this.tunnelData.splice(0, 1);
        this.tunnelData.forEach((item) => {
          xData.push(item[0].slice(5, 13));
          power.push(Math.floor(item[1] * item[2]));
          runningTime.push(item[3].slice(0, 2));
        });
        this.xData = xData.splice(1);
        this.power = power;
        this.runningTime = runningTime.splice(1);
        this.initRadar();
      } else if(currentIndex === 'two') {
          let xData = [],
          power = [],
          runningTime = [];
        this.graphiteData.splice(0, 1);
        this.graphiteData.forEach((item) => {
          xData.push(item[0].slice(5, 13));
          power.push(Math.floor(item[1] * item[2]));
          runningTime.push(item[3].slice(0, 2));
        });
        this.xData = xData.splice(1);
        this.power = power;
        this.runningTime = runningTime.splice(1);
        this.initRadar();
      }else if(currentIndex === 'three') {
          let xData = [],
          power = [],
          runningTime = [];
          if(this.roastingData === null) return
        this.roastingData.splice(0, 1);
        this.roastingData.forEach((item) => {
          xData.push(item[0].slice(5, 13));
          power.push(Math.floor(item[1] * item[2]));
          runningTime.push(item[3].slice(0, 2));
        });
        this.xData = xData.splice(1);
        this.power = power;
        this.runningTime = runningTime.splice(1);
        this.initRadar();
      }
    },
    initRadar() {
      let myChart = this.$echarts.init(
        document.getElementById("wetElectricity")
      ); //初始化实例
      let option = {
        // backgroundColor: "#0f375f",
        tooltip: {
          trigger: "axis",
          textStyle: {
            fontSize: 12,
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
        legend: {
          data: ["运行时间", "功率"],
          top: "22%",
          itemWidth: 15,
          itemHeight: 8,
          textStyle: {
            color: "#a6bde9",
            fontSize: 10,
          },
        },
        grid: {
          top: "35%",
          left: "7%",
          right: "5%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          axisTick: { show: false },
          data: this.xData,
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#a6bde9",
              fontSize: 8, //更改坐标轴文字大小
            },
          },
        },
        yAxis: [
          {
            max: "dataMax",
            min: "dataMin",
            position: "left",
            axisTick: { show: false },
            splitNumber: 1, // y轴分割段数
            type: "value",
            // offset: 22,
            axisLabel: {
              margin: 4,
              textStyle: {
                color: "#a6bde9",
                fontSize: 8,
              },
            },
            splitLine: { show: false },
            nameTextStyle: {
              color: "#fff",
              fontSize: 12,
              lineHeight: 40,
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
          },
          {
            // max: "dataMax",
            // min: "dataMin",
            position: "right",
            splitNumber: 1,
            axisTick: { show: false },
            type: "value",
            axisLabel: {
              margin: 4,
              textStyle: {
                color: "#a6bde9",
                fontSize: 8,
              },
            },
            nameTextStyle: {
              color: "#fff",
              fontSize: 12,
              lineHeight: 40,
            },
            splitLine: { show: false },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
          },
        ],
        series: [
          {
            name: "运行时间",
            type: "line",
            showSymbol: false,
            yAxisIndex: 0,
            smooth: true, //是否平滑
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            // symbolSize: 5,
            lineStyle: {
              normal: {
                width: 2,
                color: "#19a3df",
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
              color: "#19a3df",
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
            data: this.runningTime,
          },
          {
            type: "line",
            // symbolSize: 7,
            showSymbol: false,
            symbol: "circle",
            symbolSize: 6,
            zlevel: 3,
            smooth: true,
            // 电流y轴
            name: "功率",
            barGap: "-100%",
            yAxisIndex: 1,
            barWidth: 6,
            itemStyle: {
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(0,207,255,0.7)" },
                  { offset: 0.2, color: "rgba(0,207,255,0.5)" },
                  { offset: 1, color: "rgba(0,207,255,0)" },
                ]),
              },
            },
            z: -12,
            data: this.power,
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

<style lang="scss" scoped>
#wetElectricity {
  height: 100%;
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
  width: 60px;
  height: 0;
}

.ball {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #06c8eb;
}
.wetElectricity {
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