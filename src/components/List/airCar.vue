<template>
  <div class="Car">
    <div id="cols2">
      吸料天车
      <div class="title-line">
        <div class="line"></div>
        <div class="ball"></div>
      </div>
    </div>
    <div id="Car"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      websock: null,
      airCarData: [], // 隧道窑湿电数据
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
      console.log(redata);
      this.airCarData = redata.airCarData.source;
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
      // console.log(this.tunnelData);
      let xData = [],
        runningTime = [];
      this.airCarData.forEach((item) => {
        xData.push(item[0].slice(5, 13));
        runningTime.push(item[1].slice(0, 2));
      });
      this.xData = xData.splice(1);
      this.runningTime = runningTime.splice(1);
      console.log(this.runningTime);
      this.initRadar();
    },
    initRadar() {
      let myChart = this.$echarts.init(document.getElementById("Car")); //初始化实例
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
        legend: {
          data: ["吸料天车"],
          top: "15%",
          itemWidth: 15,
          itemHeight: 8,
          textStyle: {
            color: "#a6bde9",
            fontSize: 10,
          },
        },
        grid: {
          top: "25%",
          left: "5%",
          right: "5%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          axisTick: { show: false },
          boundaryGap: false,
          data: this.xData,
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
            max: "dataMax",
            min: "dataMin",
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
            show: false,
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
            name: '吸料天车',
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
            data: this.runningTime,
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
#Car {
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
  width: 75px;
  height: 0;
}

.ball {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #06c8eb;
}
.Car {
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