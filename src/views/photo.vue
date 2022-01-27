/* eslint-disable no-undef */
<template>
  <div class="main">
    <div id="photosphere" class="photosphere">
    </div>
  </div>
</template>

<script>
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers.js";
import "photo-sphere-viewer/dist/plugins/markers.css";
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
export default {
  components: {
  },
  data() {
    return {
      type: '',
      PSV: null,
      panoramadata: null,
      largeEchart: false,
      img: require("./70.jpg"),
      markersData: [],
      dialogVisible: false,
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.PSV = new Viewer({
        container: document.getElementById("photosphere"),
        panorama: this.img,
        defaultZoomLvl: 50,
        navbar: ["autorotate", "zoom", "fullscreen", "markers", "markersList"],
        defaultLong: 6.271302993071661, // 初始经度，介于0和2π之间
        defaultLat: -0.22862493322827957, // 初始纬度，介于-π/ 2和π/ 2之间。
        plugins: [
          [
            MarkersPlugin,
            {
              markers: [
                {
                  // polygon marker
                  id: "polygon",
                  polylineRad: [
                    [0.0008044795605804655, -0.22478896099084955],
                    [0.13165434522719463, -0.08906181842984484],
                    [0.28816546412137933, -0.07797139275465503],
                    [0.28722938946089294, -0.34204699313592957],
                    [0.30432561186429014, -0.46909460250166335],
                    [0.13958333406474044, -0.4770714485501113],
                    [0.12037066530252466, -0.3546645425090933],
                    [0.1426599568666787, -0.3015457310119094],
                    [0.014183985038274581, -0.3168138512299121],
                    [0.0008044795605804655, -0.22478896099084955],
                  ],
                  svgStyle: {
                    fill: "transparent",
                    stroke: "transparent",
                    strokeWidth: "2px",
                  },
                  tooltip: {
                    content: "测试",
                    position: "right",
                  },
                },
                {
                  id: "html6",
                  longitude: 6.142411710733739,
                  latitude: -0.13664440734131178,
                  html: `<div class="info-warp-wuzu">
                            <div class="info-warp-wuzu-title">
                            <span>无组织VOCs</span>
                            </div>
                            <div class="info-warp-wuzu-body">
                            <span class="left-span">浓度:</span><span class="right-span">0.27mg/m3</span>
                            </div>
                        </div>
                        <div class='info-line-wuzu'></div>`,
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "无组织VOCs",
                },
                {
                  id: "html7",
                  longitude: 0.056468770790485866,
                  latitude: -0.14382677250626164,
                  html: `<div class="info-warp-youzu">
                            <div class="info-warp-youzu-title">
                            <span>有组织VOCs</span>
                            </div>
                            <div class="info-warp-youzu-body">
                            <span class="left-span">浓度:</span><span class="right-span">45mg/m3</span>
                            </div>
                        </div>
                        <div class='info-line-youzu'></div>`,
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "有组织VOCs",
                },
                // {
                //   id: "html8",
                //   longitude: 6.028658770109717,
                //   latitude: -0.30994143771483906,
                //   html: `<div class="info-warp-cems" onclick="test()">
                //             <div class="info-warp-cems-title">
                //             <span>超低排放监测(CEMS)</span>
                //             </div>
                //             <div class="info-warp-cems-body" id="test">

                //             </div>
                //         </div>
                //         <div class='info-line-cems'></div>`,
                //   width: 32,
                //   height: 32,
                //   anchor: "bottom center",
                //   tooltip: "CEMS",
                // },
                {
                  id: "html8",
                  longitude: 6.028658770109717,
                  latitude: -0.30994143771483906,
                  html: `<div class="info-warp-cems" id="warp">
                            <div class="info-warp-cems-title">
                            <span class="title-span">CEMS</span>
                            </div>
                            <div class="info-warp-cems-body" id="body">
                              <span class="left-span">二氧化硫:</span><span class="right-span">0.021300</span>
                              <span class="left-span">氧气含量:</span><span class="right-span">20.75469</span><br />
                              <span class="left-span">烟尘:</span><span class="right-span">1.24756</span><br />
                              <span class="left-span">烟气温度:</span><span class="right-span">1.39880</span>
                              <span class="left-span">烟气压力:</span><span class="right-span">-0.02093</span>
                            </div>
                        </div>
                        <div class='info-line-cems'></div>`,
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "CEMS",
                },
              ],
            },
          ],
        ],
        // navbar: ["autorotate", "zoom", "download"],
      });
      this.PSV.on("click", (e) => {
        console.log(e, "坐标");
      });
      this.PSV.on("fullscreen-updated", (e) => {
        if(e.args[0] === true) {
          this.$router.push('/')
        }
        // console.log(e);
      });
      const markersPlugin = this.PSV.getPlugin(MarkersPlugin);
      markersPlugin.on("select-marker", (e, marker) => {
        if (marker.type === "html") {
          this.infoTitle = marker.config.tooltip.content;
          this.dialogVisible = true; // 弹出框
          this.$store.commit("set_dialog");
        }
        // console.log(marker);
      });
      markersPlugin.on("over-marker", (e, marker) => {
        if (marker.id === "polygon") {
          markersPlugin.updateMarker({
            id: "polygon",
            svgStyle: {
              fill: "rgba(1, 239, 253, 0.2)",
              stroke: "rgba(1, 239, 253, 0.8)",
              strokeWidth: "2px",
            },
          });
        }
      });
      markersPlugin.on("leave-marker", (e, marker) => {
        if (marker.id === "polygon") {
          markersPlugin.updateMarker({
            id: "polygon",
            svgStyle: {
              fill: "transparent",
              stroke: "transparent",
              strokeWidth: "2px",
            },
          });
        }
      });
    },
    fullScreen() {
      var docElm = document.documentElement
      // W3C
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen()
      }
      // FireFox
      else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen()
      }
      // Chrome等
      else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen()
      }
      // IE11
      // eslint-disable-next-line no-undef
      else if (elem.msRequestFullscreen) {
        // eslint-disable-next-line no-undef
        elem.msRequestFullscreen()
      }
      // 退出全屏
      // W3C
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
      // FireFox
      else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      }
      // Chrome等
      else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
        // eslint-disable-next-line no-undef
        data.name = '全屏'
      }
      // IE11
      else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    },
    large (type) {
      this.type = type
      this.largeEchart = true
    }
  },
};
</script>

<style lang="scss" scoped>
/**
焙烧css
*/
/deep/ .info-warp-peishao {
  bottom: 142px;
  left: -90px;
  position: absolute;
  width: 180px;
  height: 100px;
  border-top-left-radius: 10%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 0;
  backdrop-filter: blur(6px);
  border: solid 1px rgba(64, 97, 148, 0.6);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: rgba(64, 97, 148, 0.534);
  &-title {
    height: 30px;
    border-bottom: solid 1px #ccc;
    span {
      color: #d4f3f5;
      text-shadow: 0 0 8px rgb(0, 233, 249);
      margin-left: 4%;
      // margin-top: 5%;
    }
  }
  &-body {
    margin-right: 36%;
    text-align:right;
    margin-top: 8px;
    .left-span {
      margin-left: 4%;
      margin-right: 4%;
      color: #dbeaeb;
      font-size: 14px;
    }
    .right-span {
      color: #02eefc;
      font-size: 14px;
    }
  }
}
/deep/ .info-line-peishao {
  position: absolute;
  background: rgba(2, 238, 252, 0.4);
  height: 130px;
  width: 2px;
  margin: -110px 0px 0px 5px;
}

/**
一烧css
*/
/deep/ .info-warp-yishao {
  bottom: 142px;
  left: -90px;
  position: absolute;
  width: 180px;
  height: 100px;
  border-top-left-radius: 10%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 0;
  backdrop-filter: blur(6px);
  border: solid 1px rgba(64, 97, 148, 0.6);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: rgba(64, 97, 148, 0.534);
  &-title {
    height: 30px;
    border-bottom: solid 1px #ccc;
    span {
      color: #d4f3f5;
      text-shadow: 0 0 8px rgb(0, 233, 249);
      margin-left: 4%;
      // margin-top: 5%;
    }
  }
  &-body {
    margin-right: 36%;
    text-align:right;
    margin-top: 8px;
    .left-span {
      margin-left: 4%;
      margin-right: 4%;
      color: #dbeaeb;
      font-size: 14px;
    }
    .right-span {
      color: #02eefc;
      font-size: 14px;
    }
  }
}
/deep/ .info-line-yishao {
  position: absolute;
  background: rgba(2, 238, 252, 0.4);
  height: 145px;
  width: 2px;
  margin: -110px 0px 0px 5px;
}

/**
压型 css
*/
/deep/ .info-warp-yaxing {
  bottom: 172px;
  left: -90px;
  position: absolute;
  width: 180px;
  height: 100px;
  border-top-left-radius: 10%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 0;
  backdrop-filter: blur(6px);
  border: solid 1px rgba(64, 97, 148, 0.6);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: rgba(64, 97, 148, 0.534);
  &-title {
    height: 30px;
    border-bottom: solid 1px #ccc;
    span {
      color: #d4f3f5;
      text-shadow: 0 0 8px rgb(0, 233, 249);
      margin-left: 4%;
      // margin-top: 5%;
    }
  }
  &-body {
    margin-right: 36%;
    text-align:right;
    margin-top: 8px;
    .left-span {
      margin-left: 4%;
      margin-right: 4%;
      color: #dbeaeb;
      font-size: 14px;
    }
    .right-span {
      color: #02eefc;
      font-size: 14px;
    }
  }
}
/deep/ .info-line-yaxing {
  position: absolute;
  background: rgba(2, 238, 252, 0.4);
  height: 165px;
  width: 2px;
  margin: -140px 0px 0px 5px;
}

/**
一烧p2 css
*/
/deep/ .info-warp-yishaop2 {
  bottom: 192px;
  left: -90px;
  position: absolute;
  width: 180px;
  height: 100px;
  border-top-left-radius: 10%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 0;
  backdrop-filter: blur(6px);
  border: solid 1px rgba(64, 97, 148, 0.6);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: rgba(64, 97, 148, 0.534);
  &-title {
    height: 30px;
    border-bottom: solid 1px #ccc;
    span {
      color: #d4f3f5;
      text-shadow: 0 0 8px rgb(0, 233, 249);
      margin-left: 4%;
      // margin-top: 5%;
    }
  }
  &-body {
    margin-top: 8px;
    margin-right: 36%;
    text-align:right;
    .left-span {
      margin-left: 4%;
      margin-right: 4%;
      color: #dbeaeb;
      font-size: 14px;
    }
    .right-span {
      color: #02eefc;
      font-size: 14px;
    }
  }
}
/deep/ .info-line-yishaop2 {
  position: absolute;
  background: rgba(2, 238, 252, 0.4);
  height: 195px;
  width: 2px;
  margin: -160px 0px 0px 5px;
}

/**
无组织vocs css
*/
/deep/ .info-warp-wuzu {
  bottom: 62px;
  left: -50px;
  position: absolute;
  width: 110px;
  height: 65px;
  border-top-left-radius: 10%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 0;
  backdrop-filter: blur(6px);
  border: solid 1px rgba(64, 97, 148, 0.6);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: rgba(64, 97, 148, 0.534);
  &-title {
    height: 25px;
    border-bottom: solid 1px #ccc;
    span {
      font-size: 13px;
      color: #d4f3f5;
      text-shadow: 0 0 8px rgb(0, 233, 249);
      margin-left: 4%;
      // margin-top: 5%;
    }
  }
  &-body {
    margin-right: 21%;
    text-align: right;
    margin-top: 6px;
    .left-span {
      margin-left: 4%;
      margin-right: 4%;
      color: #dbeaeb;
      font-size: 12px;
      display: inline-block;
      -webkit-transform: scale(0.9);
    }
    .right-span {
      color: #02eefc;
      font-size: 12px;
      display: inline-block;
      -webkit-transform: scale(0.9);
    }
  }
}
/deep/ .info-line-wuzu {
  position: absolute;
  background: rgba(2, 238, 252, 0.4);
  height: 65px;
  width: 2px;
  margin: -30px 0px 0px 5px;
}

/**
有组织vocs css
*/
/deep/ .info-warp-youzu {
  bottom: 90px;
  left: -50px;
  position: absolute;
  width: 110px;
  height: 65px;
  border-top-left-radius: 10%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 0;
  backdrop-filter: blur(6px);
  border: solid 1px rgba(64, 97, 148, 0.6);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: rgba(64, 97, 148, 0.534);
  &-title {
    height: 25px;
    border-bottom: solid 1px #ccc;
    span {
      font-size: 13px;
      color: #d4f3f5;
      text-shadow: 0 0 8px rgb(0, 233, 249);
      margin-left: 4%;
      // margin-top: 5%;
    }
  }
  &-body {
    margin-right: 21%;
    text-align: right;
    margin-top: 8px;
    .left-span {
      margin-left: 1%;
      margin-right: 4%;
      color: #dbeaeb;
      font-size: 12px;
      display: inline-block;
      -webkit-transform: scale(0.9);
    }
    .right-span {
      color: #02eefc;
      font-size: 12px;
      display: inline-block;
      -webkit-transform: scale(0.9);
    }
  }
}
/deep/ .info-line-youzu {
  position: absolute;
  background: rgba(2, 238, 252, 0.4);
  height: 90px;
  width: 2px;
  margin: -60px 0px 0px 5px;
}
/**
CEMS css
*/
/deep/ .info-warp-cems {
  bottom: 0px;
  left: -55px;
  position: absolute;
  width: 110px;
  height: 120px;
  border-top-left-radius: 10%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 0;
  backdrop-filter: blur(6px);
  border: solid 1px rgba(64, 97, 148, 0.6);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: rgba(64, 97, 148, 0.534);
  &-title {
    height: 25px;
    border-bottom: solid 1px #ccc;
    .title-span {
      color: #d4f3f5;
      text-shadow: 0 0 8px rgb(0, 233, 249);
      margin-left: 4%;
      font-size: 13px;
      // margin-top: 5%;
    }
  }
  &-body {
    margin-right: 5%;
    text-align: right;
    .left-span {
      // margin-left: 4%;
      // margin-right: 3%;
      color: #dbeaeb;
      font-size: 12px;
      display: inline-block;
      -webkit-transform: scale(0.9);
    }
    .right-span {
      color: #02eefc;
      font-size: 12px;
      display: inline-block;
      -webkit-transform: scale(0.9);
    }
  }
}
/deep/ .info-line-cems {
  position: absolute;
  background: rgba(2, 238, 252, 0.4);
  height: 20px;
  width: 2px;
  margin: 30px 0px 0px 5px;
}

.photosphere {
  width: 100%;
  height: 100%;
}
.main {
  width: 100%;
  height: 100%;
}
.left {
  // backdrop-filter: blur(8px);
  width: 13%;
  height: 94%;
  background-color: transparent;
  margin-top: 2%;
  margin-left: 1%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}
/deep/ .psv-panel{
  width: 260px;
  height: 100% !important;
}
/deep/ .psv-panel-resizer{
  display: none;
}
/deep/ .psv-panel-close-button{
  background-color: transparent;
  left: 0;
  z-index: 5000;
}
/deep/ .psv-panel-content{
  backdrop-filter: blur(5px);
  // border: solid 2px rgba(64, 97, 148, 0.6);
  // -webkit-box-shadow: 0 1px 3px rgba(0 0 0 / 30%);
  // box-shadow: 0 1px 3px rgba(0 ,0 ,0 , 30%);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  // width: 35% !important;
  // height: 45% !important;
  background-color: rgba(64, 97, 148, 0.534);
}
.title {
  // width: 40%;
  height: 8%;
  background-color: transparent;
  position: absolute;
  top: 0;
  margin-left: -500px;
  left: 55%;
}
.title-text {
  /* height: 5%; */
  font-size: 35px;
  color: white;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  letter-spacing: 10px;
}
.left1 {
  backdrop-filter: blur(8px);
  height: 26%;
  margin-bottom: 5%;
  background-color: rgba(0, 0, 0, 0.2);
  border: solid 1px rgba(76, 205, 252, 0.5);
  border-top-left-radius: 0;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 0%;
  border-bottom-left-radius: 10%;
}
.left2 {
  backdrop-filter: blur(8px);
  width: 100%;
  height: 32%;
  margin-bottom: 5%;
  background-color: rgba(0, 0, 0, 0.2);
  border: solid 1px rgba(76, 205, 252, 0.5);
  border-top-left-radius: 10%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 0;
}
.left3 {
  backdrop-filter: blur(8px);
  width: 100%;
  height: 37%;
  background-color: rgba(0, 0, 0, 0.2);
  border: solid 1px rgba(76, 205, 252, 0.5);
  border-top-left-radius: 0;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 0%;
  border-bottom-left-radius: 10%;
}
.right {
  width: 13%;
  height: 94%;
  background-color: transparent;
  margin-top: 2%;
  margin-right: 1%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
}
.right1 {
  backdrop-filter: blur(8px);
  height: 30%;
  margin-bottom: 5%;
  background-color: rgba(0, 0, 0, 0.2);
  border: solid 1px rgba(76, 205, 252, 0.5);
  border-top-left-radius: 10%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 0;
}
.right2 {
  backdrop-filter: blur(8px);
  width: 100%;
  height: 30%;
  margin-bottom: 5%;
  background-color: rgba(0, 0, 0, 0.2);
  border: solid 1px rgba(76, 205, 252, 0.5);
  border-top-left-radius: 0;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 10%;
}
.right3 {
  // padding-left: 30px;
  backdrop-filter: blur(8px);
  width: 100%;
  height: 35%;
  background-color: rgba(0, 0, 0, 0.2);
  border: solid 1px rgba(76, 205, 252, 0.5);
  border-top-left-radius: 10%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 0;
}
/deep/ .dv-scroll-board .rows .ceil {
  padding: 0 13px;
}
/deep/ .psv-navbar {
  left: 30px;
  width: 365px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 3%;
}
/deep/ .psv-button {
  margin-right: 15px;
  // width: 20px;
  height: 20px;
}
/deep/ .el-dialog {
  // overflow: hidden;
  position: relative;
  margin: 0 auto 50px;
  border-top-left-radius: 5%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 5%;
  border-bottom-left-radius: 0;
  /* border-top: solid 3px #cccc;
  border-bottom: solid 3px #cccc;
  border-right: solid 3px #cccc;
  border-left: solid 3px #cccc; */
  backdrop-filter: blur(8px);
  border: solid 2px rgba(64, 97, 148, 0.6);
  // -webkit-box-shadow: 0 1px 3px rgba(0 0 0 / 30%);
  // box-shadow: 0 1px 3px rgba(0 ,0 ,0 , 30%);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 35% !important;
  height: 60% !important;
  background-color: rgba(64, 97, 148, 0.534);
  /* background-color: rgba(61, 77, 93, 0.5); */
}
/deep/ .el-dialog__body {
  /* padding: 30px 20px; */
  color: #606266;
  font-size: 14px;
  word-break: break-all;
  height: 100%;
  width: 97%;
}
/deep/ .el-dialog__title {
  line-height: 24px;
  font-size: 18px;
  color: #fff;
}

.el-icon-full-screen{
  position: relative;
  z-index: 2000;
}
.icon{
  color: #02eefc;
  width: 16px;
  height: 16px;
}
.large-icon{
  cursor: pointer;
  position: absolute;
  z-index: 100;
  top: 10px;
  right: 20px;
}
.large-icon-right{
  cursor: pointer;
  position: absolute;
  z-index: 100;
  top: 10px;
  left: 20px;
}
</style>
