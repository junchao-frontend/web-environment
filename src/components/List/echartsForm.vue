<template>
  <div class="forms">
    <div id="cols2">
      环境数据实时播报
      <div class="title-line">
        <div class="Line"></div>
        <div class="ball"></div>
      </div>
    </div>
    <div class="lunbo">
      <dv-scroll-board :config="config1" />
    </div>
    <!-- <div class="form">
      
    </div> -->
  </div>
</template>

<script>
// import echarts from "echarts";
// import Cookies from 'js-cookie'
export default {
  data() {
    return {
      config1: {},
      websock: null,
    };
  },
  mounted() {},
  created() {
    this.initWebSocket();
  },
  destroyed() {
    this.websock.close(); //离开路由之后断开websocket连接
  },
  methods: {
    initWebSocket() {
      //初始化weosocket
      const wsuri = "ws://106.52.170.16:8090/getRealByWs";
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
      var token = '111'
      this.websock.send(token)
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
      // console.log(this.$store.state);
      if (this.$store.state.test === 1) {
        let dataName = [];
        let realTimeData = [];
        redata.splice(0,1)
        redata.forEach((item) => {
          dataName.push(item.dataName);
          realTimeData.push(item.realTimeData);
        });
        this.$store.commit("set_dataName", dataName);
        this.$store.commit("set_realTimeData", realTimeData);
      }

      let arrlistresult = [];
      redata.map((item) => {
        let arrlis = [
          item.deviceName,
          item.dataName,
          item.realTimeData,
          item.hourData,
        ];
        arrlistresult.push(arrlis);
      });
      // console.log(arrlistresult);
      this.config1 = {
        header: ["设备名称", "指标/参数", "实时数据", "小时值"],
        headerBGC: "#05365f",
        oddRowBGC: "transparent",
        evenRowBGC: "transparent",
        rowNum: 7,
        data: arrlistresult,
      };
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
  },
};
</script>

<style lang="scss" scoped>
.dv-scroll-board {
  position: absolute;
  top: 45px;
  // bottom: 10px;
  left: 25px;
  height: 90%;
  width: 90%;
}
/deep/ .header {
  height: 30px;
  // line-height: 20px;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
}
/deep/ .rows {
  .row-item {
    text-align: center;
  }
  .ceil {
    font-size: 12px;
    color: #a6bde9;
  }
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

.Line {
  border-top: 2px solid #2c567a;
  width: 130px;
  height: 0;
}

.ball {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #06c8eb;
}
.forms {
  // padding-bottom: 50px;
  height: 100%;
  width: 100%;
}
</style>