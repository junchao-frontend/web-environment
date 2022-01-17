<template>
  <div class="container">
    <div class="left">
      <div class="left-item">
        <dv-border-box-13 class="border">
          <Tips />
        </dv-border-box-13>
      </div>
      <div class="left-item1">
        <dv-border-box-12 class="border">
          <EchartsPie />
        </dv-border-box-12>
      </div>
      <div class="left-item2">
        <dv-border-box-12 class="border">
          <EchartsLine />
        </dv-border-box-12>
      </div>
      <div class="left-item3">
        <dv-border-box-12 class="border">
          <EchartsForm />
        </dv-border-box-12>
      </div>
    </div>
    <div class="middle">
      <div id="photosphere" class="photosphere"></div>
      <div class="middle-echarts">
        <dv-border-box-12 class="border">
          <EchartsLines />
        </dv-border-box-12>
      </div>
    </div>
    <div class="right">
      <div class="right-item">
        <dv-border-box-13 class="right-border">
          <RightLine1 style="transform: rotateY(180deg)" />
        </dv-border-box-13>
      </div>
      <div class="right-item1">
        <dv-border-box-12 class="right1-border">
          <RightLine2 />
        </dv-border-box-12>
      </div>
      <div class="right-item2">
        <dv-border-box-12 class="border">
          <div class="label-box">
            <div
              :class="[isSelected1 ? 'selectStyle-box' : '']"
              class="label-box-item1"
              @click="openItem('1')"
            >
              <div
                :class="[isSelected1 ? 'selectStyle-text' : '']"
                class="text"
              >
                3012
              </div>
              <div
                :class="[isSelected1 ? 'selectStyle-title' : '']"
                class="text-title"
              >
                一次焙烧
              </div>
            </div>
            <div
              class="label-box-item2"
              :class="[isSelected2 ? 'selectStyle-box' : '']"
              @click="openItem('2')"
            >
              <div
                :class="[isSelected2 ? 'selectStyle-text' : '']"
                class="text"
              >
                2314
              </div>
              <div
                :class="[isSelected2 ? 'selectStyle-title' : '']"
                class="text-title"
              >
                浸渍
              </div>
            </div>
            <div
              class="label-box-item3"
              :class="[isSelected3 ? 'selectStyle-box' : '']"
              @click="openItem('3')"
            >
              <div
                :class="[isSelected3 ? 'selectStyle-text' : '']"
                class="text"
              >
                2825
              </div>
              <div
                :class="[isSelected3 ? 'selectStyle-title' : '']"
                class="text-title"
              >
                隧道窑
              </div>
            </div>
            <div
              class="label-box-item4"
              :class="[isSelected4 ? 'selectStyle-box' : '']"
              @click="openItem('4')"
            >
              <div
                :class="[isSelected4 ? 'selectStyle-text' : '']"
                class="text"
              >
                1688
              </div>
              <div
                :class="[isSelected4 ? 'selectStyle-title' : '']"
                class="text-title"
              >
                石墨化
              </div>
            </div>
            <div
              class="label-box-item5"
              :class="[isSelected5 ? 'selectStyle-box' : '']"
              @click="openItem('5')"
            >
              <div
                :class="[isSelected5 ? 'selectStyle-text' : '']"
                class="text"
              >
                3450
              </div>
              <div
                :class="[isSelected5 ? 'selectStyle-title' : '']"
                class="text-title"
              >
                压型
              </div>
            </div>
          </div>
          <EchartsBar :echartsData="echartsData" />
        </dv-border-box-12>
      </div>
    </div>
    <div class="title">
      <!-- <span class="titletext">瑞通碳素环保管控平台</span> -->
      <dv-decoration-11 class="title-text"
        >瑞通炭素环保管控平台
        <!-- <i
          class="el-icon-full-screen"
          style="font-size: 16px; cursor: pointer; color: RGB(126, 136, 157)"
          @click="fullScreen()"
      /> -->
      </dv-decoration-11>
    </div>
    <div class="date">
      {{ nowdata }}
      <div class="title-line-right">
        <div class="ball-right"></div>
        <div class="line-right"></div>
      </div>
    </div>
    <div class="left-title">
      <div class="left-title-text">
        平台上线时间<span class="tianshu">{{ day }}</span
        >天
      </div>
      <div class="title-line-left">
        <div class="line-left"></div>
        <div class="ball-left"></div>
      </div>
    </div>
    <el-dialog
      @open="changeDialogItem('1')"
      :title="infoTitle"
      :visible.sync="dialogVisible"
      width="50%"
    >
      <div class="dialog-label">
        <div
          @click="changeDialogItem('1')"
          :class="clickItem1 ? 'dialog-label-selectItem' : ''"
          class="dialog-label-item"
        >
          近24小时
        </div>
        <div
          @click="changeDialogItem('2')"
          :class="clickItem2 ? 'dialog-label-selectItem' : ''"
          class="dialog-label-item"
        >
          近一周
        </div>
        <div
          @click="changeDialogItem('3')"
          :class="clickItem3 ? 'dialog-label-selectItem' : ''"
          class="dialog-label-item"
        >
          近一个月
        </div>
      </div>
      <EchartsDialog :dialogData="dialogData"></EchartsDialog>
    </el-dialog>
  </div>
</template>

<script>
import "photo-sphere-viewer/dist/plugins/markers.css";
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import RightLine2 from "../components/List/rightLine2";
import EchartsPie from "../components/List/echartsPie";
import EchartsBar from "../components/List/echartsBar";
import EchartsForm from "../components/List/echartsForm";
import RightLine1 from "../components/List/rightLine1";
import Tips from "../components/List/Tips";
import EchartsDialog from "../components/List/echartsDialog";
import EchartsLine from "../components/List/echartsLine";
import EchartsLines from "../components/List/echartsLines";
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers.js";
export default {
  components: {
    RightLine2,
    EchartsPie,
    EchartsBar,
    EchartsForm,
    RightLine1,
    Tips,
    EchartsLine,
    EchartsLines,
    EchartsDialog,
  },
  data() {
    return {
      nowdata: null,
      infoTitle: "",
      day: 20,
      dialogVisible: false,
      img: require("./70.jpg"),
      dialogData: {
        data1: [
          2, 4, 5, 2, 3, 7, 8, 5, 5, 6, 8, 5, 5, 2, 7, 8, 9, 5, 5, 2, 1, 4, 8,
          2,
        ],
        data2: [
          10, 13, 8, 12, 9, 10, 9, 15, 15, 12, 11, 13, 18, 12, 11, 18, 19, 15,
          18, 20, 14, 14, 14, 13,
        ],
      },
      clickItem1: false,
      clickItem2: false,
      clickItem3: false,
      isSelected1: false,
      isSelected2: false,
      isSelected3: false,
      isSelected4: false,
      isSelected5: false,
      echartsData: {
        name: "一次焙烧",
        data: [100, 260, 170, 200, 100, 200],
      },
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.init();
    this.getTimes();
    this.openItem("1");
  },
  methods: {
    init() {
      const PSV = new Viewer({
        container: document.getElementById("photosphere"),
        panorama: this.img,
        defaultZoomLvl: 70,
        navbar: ["autorotate", "zoom", "markers", "markersList"],
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
                    [0.00541087694273195, -0.21991346490253472],
                    [0.13165434522719463, -0.08906181842984484],
                    [0.28816546412137933, -0.07797139275465503],
                    [0.28722938946089294, -0.34204699313592957],
                    [0.30432561186429014, -0.46909460250166335],
                    [0.13958333406474044, -0.4770714485501113],
                    [0.12037066530252466, -0.3546645425090933],
                    [0.1426599568666787, -0.3015457310119094],
                    [0.014183985038274581, -0.3168138512299121],
                    [0.00541087694273195, -0.21991346490253472],
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
                            <span class="left-span">浓度:</span><span class="right-span">25mg/m3</span>
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
                {
                  id: "html8",
                  longitude: 6.028658770109717,
                  latitude: -0.30994143771483906,
                  html: `<div class="info-warp-cems">
                            <div class="info-warp-cems-title">
                            <span>超低排放监测(CEMS)</span>
                            </div>
                            <div class="info-warp-cems-body">
                              <span class="left-span">颗粒物:</span><span class="right-span">25mg/m3</span>
                              <span class="left-span">NOx:</span><span class="right-span">35mg/m3</span>
                              <span class="left-span">SO2:</span><span class="right-span">45mg/m3</span>
                              <span class="left-span">O3:</span><span class="right-span">45mg/m3</span>
                              <span class="left-span">CO:</span><span class="right-span">44mg/m3</span>
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
        // size: {
        //   width: "100%",
        //   height: "100%",
        // },
        // navbar: ["autorotate", "zoom", "download"],
      });
      PSV.on("click", (e) => {
        console.log(e, "坐标");
      });
      const markersPlugin = PSV.getPlugin(MarkersPlugin);
      markersPlugin.on("select-marker", (e, marker) => {
        if (marker.type === "html") {
          this.infoTitle = marker.config.tooltip.content;
          this.dialogVisible = true; // 弹出框
        }
        console.log(marker);
      });
      markersPlugin.on("over-marker", (e, marker) => {
        if (marker.id === "polygon") {
          markersPlugin.updateMarker({
            id: "polygon",
            svgStyle: {
              fill: "rgba(200, 0, 0, 0.2)",
              stroke: "rgba(200, 0, 50, 0.8)",
              strokeWidth: "2px",
            },
          });
        }
        // markersPlugin.addMarker({
        //   // polygon marker
        //   id: "polygon2",
        //   polylineRad: [
        //     [0.1222819463354947, -0.3534596377307213],
        //     [0.28399908908591304, -0.3431417807696162],
        //     [0.2904262128810798, -0.07990835735187551],
        //     [0.13672227504219975, -0.08661369053066426],
        //     [0.009584019508339097, -0.22097920808181937],
        //     [0.1793218514147952, -0.2128871702152595],
        //   ],
        //   svgStyle: {
        //     fill: 'rgba(200, 0, 0, 0.2)',
        //     stroke: 'rgba(200, 0, 50, 0.8)',
        //     strokeWidth: '2px'
        //   },
        //   // tooltip: {
        //   //   content: "A dynamic polygon marker",
        //   //   position: "right bottom",
        //   // },
        // });
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
    openItem(a) {
      if (a === "1") {
        this.isSelected1 = true;
        this.isSelected2 = false;
        this.isSelected3 = false;
        this.isSelected4 = false;
        this.isSelected5 = false;
        this.echartsData = {
          name: "一次焙烧",
          data: [100, 260, 170, 200, 100, 200],
        };
      } else if (a === "2") {
        this.isSelected1 = false;
        this.isSelected2 = true;
        this.isSelected3 = false;
        this.isSelected4 = false;
        this.isSelected5 = false;
        this.echartsData = {
          name: "浸渍",
          data: [220, 150, 200, 230, 180, 200],
        };
      } else if (a === "3") {
        this.isSelected1 = false;
        this.isSelected2 = false;
        this.isSelected3 = true;
        this.isSelected4 = false;
        this.isSelected5 = false;
        this.echartsData = {
          name: "隧道窑",
          data: [120, 170, 220, 190, 250, 260],
        };
      } else if (a === "4") {
        this.isSelected1 = false;
        this.isSelected2 = false;
        this.isSelected3 = false;
        this.isSelected4 = true;
        this.isSelected5 = false;
        this.echartsData = {
          name: "石墨化",
          data: [250, 170, 140, 230, 150, 190],
        };
      } else if (a === "5") {
        this.isSelected1 = false;
        this.isSelected2 = false;
        this.isSelected3 = false;
        this.isSelected4 = false;
        this.isSelected5 = true;
        this.echartsData = {
          name: "压型",
          data: [210, 200, 190, 230, 150, 240],
        };
      }
    },
    getTimes() {
      clearTimeout(this.nowdata);
      var targetYear = "2022";
      var targetMonth = "2";
      var targetDay = "1";
      var date = new Date();
      var year = (date.getFullYear() + "").padStart(2, "0");
      var month = (date.getMonth() + 1 + "").padStart(2, "0");
      var day = (date.getDate() + "").padStart(2, "0");
      var hours = (date.getHours() + "").padStart(2, "0");
      var seconds = (date.getSeconds() + "").padStart(2, "0");
      var min = (date.getMinutes() + "").padStart(2, "0");
      this.day =
        (year - targetYear) * 365 +
        (month - targetMonth) * 30 +
        (day - targetDay);
      this.nowdata = setTimeout(this.getTimes, 1000);
      this.nowdata = `${year}-${month}-${day}  ${hours}:${min}:${seconds}`;
    },
    changeDialogItem(a) {
      if (a === "1") {
        this.clickItem1 = true;
        this.clickItem2 = false;
        this.clickItem3 = false;
        this.dialogData = {
        data1: [
          2, 4, 5, 2, 3, 7, 8, 5, 5, 6, 8, 5, 5, 2, 7, 8, 9, 5, 5, 2, 1, 4, 8,
          2,
        ],
        data2: [
          10, 13, 8, 12, 9, 10, 9, 15, 15, 12, 11, 13, 18, 12, 11, 18, 19, 15,
          18, 20, 14, 14, 14, 13,
        ],
      }
      } else if (a === "2") {
        this.clickItem1 = false;
        this.clickItem2 = true;
        this.clickItem3 = false;
        this.dialogData = {
        data1: [
          5, 6, 7, 4, 6, 2, 3, 3, 7, 5, 6, 4, 9, 3, 7, 8, 9, 5, 5, 2, 1, 4, 8,
          2,
        ],
        data2: [
          12, 14, 10, 8, 12, 10, 9, 15, 15, 12, 11, 13, 18, 12, 11, 18, 19, 15,
          18, 20, 14, 14, 14, 13,
        ],
      }
      } else if (a === "3") {
        this.clickItem1 = false;
        this.clickItem2 = false;
        this.clickItem3 = true;
        this.dialogData = {
        data1: [
          5, 6, 5, 2, 3, 7, 8, 5, 5, 6, 8, 9, 2, 10, 7, 8, 9, 5, 5, 2, 1, 4, 8,
          2,
        ],
        data2: [
          20, 13, 8, 12, 9, 10, 9, 15, 15, 12, 11, 13, 18, 12, 11, 18, 19, 15,
          18, 20, 14, 14, 14, 13,
        ],
      }
      }
    },
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
    text-align: right;
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
    text-align: right;
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
    text-align: right;
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
    text-align: right;
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
  height: 70px;
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
      font-size: 15px;
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
      margin-left: 4%;
      margin-right: 4%;
      color: #dbeaeb;
      font-size: 12px;
    }
    .right-span {
      color: #02eefc;
      font-size: 12px;
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
  height: 70px;
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
      font-size: 15px;
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
    }
    .right-span {
      color: #02eefc;
      font-size: 12px;
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
  left: -80px;
  position: absolute;
  width: 160px;
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
    span {
      color: #d4f3f5;
      text-shadow: 0 0 8px rgb(0, 233, 249);
      margin-left: 4%;
      font-size: 15px;
      // margin-top: 5%;
    }
  }
  &-body {
    margin-right: 36%;
    text-align: right;
    .left-span {
      // margin-left: 4%;
      margin-right: 4%;
      color: #dbeaeb;
      font-size: 12px;
    }
    .right-span {
      color: #02eefc;
      font-size: 12px;
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
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #111339;
  overflow: hidden;
  //   box-sizing: border-box;
}
.right {
  margin-right: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
  &-item {
    margin-top: 60px;
    // margin-bottom: 6px;
    flex: 1;
    .right-border {
      transform: rotateY(180deg);
    }
    .right-charts {
      transform: rotateY(180deg);
    }
  }
  &-item1 {
    flex: 1;
    // margin-bottom: 6px;
  }
  &-item2 {
    height: 36%;
  }
}
.left {
  margin-left: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
  &-item {
    margin-top: 60px;
    flex: 1;
  }
  &-item1 {
    flex: 1;
  }
  &-item2 {
    flex: 1;
  }
  &-item3 {
    height: 36%;
  }
}
.middle {
  margin: 0 8px;
  // flex: 1;
  width: 54%;
  display: flex;
  flex-direction: column;
  .photosphere {
    margin-top: 90px;
    flex: 1;
  }
  &-echarts {
    height: 36%;
  }
}
.label-box {
  display: flex;
  flex-wrap: wrap;
  &-item1 {
    // display: flex;
    cursor: pointer;
    margin-top: 13%;
    margin-right: 5%;
    margin-left: 13%;
    width: 90px;
    height: 45px;
    border: 1px solid rgba(93, 225, 238, 0.7);
  }
  &-item2 {
    cursor: pointer;
    margin-top: 13%;
    margin-right: 5%;
    width: 90px;
    height: 45px;
    border: 1px solid rgba(93, 225, 238, 0.7);
  }
  &-item3 {
    cursor: pointer;
    margin-top: 13%;
    margin-right: 5%;
    width: 90px;
    height: 45px;
    border: 1px solid rgba(93, 225, 238, 0.7);
  }
  &-item4 {
    cursor: pointer;
    margin-left: 13%;
    margin-top: 4%;
    margin-right: 5%;
    width: 90px;
    height: 45px;
    border: 1px solid rgba(93, 225, 238, 0.7);
  }
  &-item5 {
    cursor: pointer;
    margin-top: 4%;
    margin-right: 5%;
    width: 90px;
    height: 45px;
    border: 1px solid rgba(93, 225, 238, 0.7);
  }
  .text {
    text-align: center;
    line-height: 23px;
    color: #60aec3;
    height: 50%;
  }
  .text-title {
    color: #283352;
    text-align: center;
    line-height: 25px;
    font-size: 12px;
    height: 50%;
    background-color: #5de1ee;
  }
  .selectStyle-text {
    color: #fecc05;
  }
  .selectStyle-box {
    border: 1px solid rgba(253, 204, 1, 0.7);
  }
  .selectStyle-title {
    // color: #fecc05;
    background-color: rgb(253, 204, 1);
  }
}
.title {
  // width: 40%;
  height: 6%;
  background-color: transparent;
  position: absolute;
  top: 1%;
  margin-left: -400px;
  left: 50%;
}
.title-text {
  // background-color: #111339;
  width: 800px;
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  letter-spacing: 10px;
}
.date {
  font-size: 14px;
  color: #19caf1;
  position: absolute;
  top: 20px;
  right: 20px;
}
.title-line-right {
  position: absolute;
  right: -2px;
  margin-left: -15px;
  margin-top: 5px;
  display: flex;
  align-items: center;
}

.line-right {
  border-top: 2px solid #2c567a;
  width: 400px;
  height: 0;
}

.ball-right {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #06c8eb;
}
.left-title {
  top: 8px;
  position: absolute;
  left: 20px;
  &-text {
    color: white;
    font-size: 14px;
    letter-spacing: 1px;
    span {
      color: rgb(22, 198, 235);
      font-size: 26px;
      margin: 0 2px;
    }
  }
}
.title-line-left {
  position: absolute;
  left: 12px;
  margin-left: -15px;
  margin-top: 5px;
  display: flex;
  align-items: center;
}
.line-left {
  border-top: 2px solid #2c567a;
  width: 400px;
  height: 0;
}
.ball-left {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #06c8eb;
}
.warp {
  box-sizing: border-box;
  background-color: #111339;
  width: 400px;
  height: 200px;
  border: 1px solid #1ec9e9;
  position: relative;
  &-top-left {
    width: 35px;
    height: 30px;
    transform: rotate(134deg);
    border-top: 1px solid #1ec9e9;
    position: absolute;
    top: -14px;
    left: -17px;
    background-color: #111339;
  }
  &-bottom-right {
    width: 35px;
    height: 30px;
    border-bottom: 1px solid #1ec9e9;
    // border: 3px solid #1ec9e9;
    transform: rotate(134deg);
    position: absolute;
    bottom: -14px;
    right: -17px;
    background-color: #111339;
  }
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
.dialog-label {
  position: absolute;
  display: flex;
  right: 6%;
  top: 20px;
  &-item {
    cursor: pointer;
    color: white;
    margin-right: 10px;
    border-bottom: 1px solid rgb(219, 211, 211);
  }
  &-selectItem {
    color: #fdcc01;
    border-bottom: 1px solid #fdcc01;
  }
}
</style>
