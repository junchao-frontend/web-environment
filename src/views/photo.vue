/* eslint-disable no-undef */
<template>
  <div class="main">
    <div id="photosphere" class="photosphere">
      <el-dialog title="测试" :visible.sync="dialogVisible" width="50%">
        <EchartsDialog></EchartsDialog>
      </el-dialog>
    </div>
    <div class="left">
      <div class="left1">
        <EchartsRadar></EchartsRadar>
      <div @click="large('radar')" class="large-icon"><svg t="1641888518288" fill="#02eefc" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5459" width="16" height="16"><path d="M852.68743 966.232318 171.311547 966.232318c-62.714867 0-113.562988-50.846038-113.562988-113.558335L57.748558 171.324994c0-62.712297 50.848122-113.558335 113.562988-113.558335l681.376907 0c62.714867 0 113.562988 50.846038 113.562988 113.558335l0 681.348989C966.250418 915.38628 915.40332 966.232318 852.68743 966.232318zM909.469948 171.324994c0-31.356149-25.424061-56.779168-56.781494-56.779168L171.311547 114.545826c-31.357433 0-56.781494 25.423019-56.781494 56.779168l0 681.348989c0 31.357172 25.424061 56.779168 56.781494 56.779168l681.376907 0c31.358457 0 56.781494-25.423019 56.781494-56.779168L909.469948 171.324994zM824.297706 483.610416c-15.665413 0-28.390747-12.697183-28.390747-28.389584l0.887243-186.638771L604.102866 461.264479l-40.145947-40.144302 193.023924-193.016015L568.782006 228.104161c-15.693044 0-28.390747-12.697183-28.390747-28.389584s12.697704-28.389584 28.390747-28.389584l254.711349 0c7.929925 0 15.082105 3.27151 20.238756 8.53949 5.490263 4.657067 8.955319 11.449773 8.955319 19.850094l0 255.506255C852.68743 470.913233 839.989727 483.610416 824.297706 483.610416zM455.219017 852.673983 200.506645 852.673983c-7.929925 0-15.082105-3.270487-20.239779-8.538467-5.489239-4.65809-8.955319-11.423167-8.955319-19.850094L171.311547 568.779168c0-15.692401 12.726357-28.389584 28.390747-28.389584 15.69202 0 28.390747 12.697183 28.390747 28.389584l-0.887243 186.6664 192.690312-192.710047 40.173577 40.143279-193.050531 193.016015 188.198837 0c15.69202 0 28.390747 12.697183 28.390747 28.389584C483.608741 839.9768 470.911038 852.673983 455.219017 852.673983z" p-id="5460"></path></svg></div>
      </div>
      <div class="left2">
        <EchartsBar></EchartsBar>
      <div @click="large('bar')" class="large-icon"><svg t="1641888518288" fill="#02eefc" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5459" width="16" height="16"><path d="M852.68743 966.232318 171.311547 966.232318c-62.714867 0-113.562988-50.846038-113.562988-113.558335L57.748558 171.324994c0-62.712297 50.848122-113.558335 113.562988-113.558335l681.376907 0c62.714867 0 113.562988 50.846038 113.562988 113.558335l0 681.348989C966.250418 915.38628 915.40332 966.232318 852.68743 966.232318zM909.469948 171.324994c0-31.356149-25.424061-56.779168-56.781494-56.779168L171.311547 114.545826c-31.357433 0-56.781494 25.423019-56.781494 56.779168l0 681.348989c0 31.357172 25.424061 56.779168 56.781494 56.779168l681.376907 0c31.358457 0 56.781494-25.423019 56.781494-56.779168L909.469948 171.324994zM824.297706 483.610416c-15.665413 0-28.390747-12.697183-28.390747-28.389584l0.887243-186.638771L604.102866 461.264479l-40.145947-40.144302 193.023924-193.016015L568.782006 228.104161c-15.693044 0-28.390747-12.697183-28.390747-28.389584s12.697704-28.389584 28.390747-28.389584l254.711349 0c7.929925 0 15.082105 3.27151 20.238756 8.53949 5.490263 4.657067 8.955319 11.449773 8.955319 19.850094l0 255.506255C852.68743 470.913233 839.989727 483.610416 824.297706 483.610416zM455.219017 852.673983 200.506645 852.673983c-7.929925 0-15.082105-3.270487-20.239779-8.538467-5.489239-4.65809-8.955319-11.423167-8.955319-19.850094L171.311547 568.779168c0-15.692401 12.726357-28.389584 28.390747-28.389584 15.69202 0 28.390747 12.697183 28.390747 28.389584l-0.887243 186.6664 192.690312-192.710047 40.173577 40.143279-193.050531 193.016015 188.198837 0c15.69202 0 28.390747 12.697183 28.390747 28.389584C483.608741 839.9768 470.911038 852.673983 455.219017 852.673983z" p-id="5460"></path></svg></div>
      </div>
      <div class="left3">
        <EchartsForm></EchartsForm>
      <div @click="large('form')" class="large-icon"><svg t="1641888518288" fill="#02eefc" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5459" width="16" height="16"><path d="M852.68743 966.232318 171.311547 966.232318c-62.714867 0-113.562988-50.846038-113.562988-113.558335L57.748558 171.324994c0-62.712297 50.848122-113.558335 113.562988-113.558335l681.376907 0c62.714867 0 113.562988 50.846038 113.562988 113.558335l0 681.348989C966.250418 915.38628 915.40332 966.232318 852.68743 966.232318zM909.469948 171.324994c0-31.356149-25.424061-56.779168-56.781494-56.779168L171.311547 114.545826c-31.357433 0-56.781494 25.423019-56.781494 56.779168l0 681.348989c0 31.357172 25.424061 56.779168 56.781494 56.779168l681.376907 0c31.358457 0 56.781494-25.423019 56.781494-56.779168L909.469948 171.324994zM824.297706 483.610416c-15.665413 0-28.390747-12.697183-28.390747-28.389584l0.887243-186.638771L604.102866 461.264479l-40.145947-40.144302 193.023924-193.016015L568.782006 228.104161c-15.693044 0-28.390747-12.697183-28.390747-28.389584s12.697704-28.389584 28.390747-28.389584l254.711349 0c7.929925 0 15.082105 3.27151 20.238756 8.53949 5.490263 4.657067 8.955319 11.449773 8.955319 19.850094l0 255.506255C852.68743 470.913233 839.989727 483.610416 824.297706 483.610416zM455.219017 852.673983 200.506645 852.673983c-7.929925 0-15.082105-3.270487-20.239779-8.538467-5.489239-4.65809-8.955319-11.423167-8.955319-19.850094L171.311547 568.779168c0-15.692401 12.726357-28.389584 28.390747-28.389584 15.69202 0 28.390747 12.697183 28.390747 28.389584l-0.887243 186.6664 192.690312-192.710047 40.173577 40.143279-193.050531 193.016015 188.198837 0c15.69202 0 28.390747 12.697183 28.390747 28.389584C483.608741 839.9768 470.911038 852.673983 455.219017 852.673983z" p-id="5460"></path></svg></div>
      </div>
    </div>
    <div class="right">
      <div class="right1">
        <EchartsBLine></EchartsBLine>
      <div @click="large('line')" class="large-icon-right"><svg t="1641888518288" fill="#02eefc" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5459" width="16" height="16"><path d="M852.68743 966.232318 171.311547 966.232318c-62.714867 0-113.562988-50.846038-113.562988-113.558335L57.748558 171.324994c0-62.712297 50.848122-113.558335 113.562988-113.558335l681.376907 0c62.714867 0 113.562988 50.846038 113.562988 113.558335l0 681.348989C966.250418 915.38628 915.40332 966.232318 852.68743 966.232318zM909.469948 171.324994c0-31.356149-25.424061-56.779168-56.781494-56.779168L171.311547 114.545826c-31.357433 0-56.781494 25.423019-56.781494 56.779168l0 681.348989c0 31.357172 25.424061 56.779168 56.781494 56.779168l681.376907 0c31.358457 0 56.781494-25.423019 56.781494-56.779168L909.469948 171.324994zM824.297706 483.610416c-15.665413 0-28.390747-12.697183-28.390747-28.389584l0.887243-186.638771L604.102866 461.264479l-40.145947-40.144302 193.023924-193.016015L568.782006 228.104161c-15.693044 0-28.390747-12.697183-28.390747-28.389584s12.697704-28.389584 28.390747-28.389584l254.711349 0c7.929925 0 15.082105 3.27151 20.238756 8.53949 5.490263 4.657067 8.955319 11.449773 8.955319 19.850094l0 255.506255C852.68743 470.913233 839.989727 483.610416 824.297706 483.610416zM455.219017 852.673983 200.506645 852.673983c-7.929925 0-15.082105-3.270487-20.239779-8.538467-5.489239-4.65809-8.955319-11.423167-8.955319-19.850094L171.311547 568.779168c0-15.692401 12.726357-28.389584 28.390747-28.389584 15.69202 0 28.390747 12.697183 28.390747 28.389584l-0.887243 186.6664 192.690312-192.710047 40.173577 40.143279-193.050531 193.016015 188.198837 0c15.69202 0 28.390747 12.697183 28.390747 28.389584C483.608741 839.9768 470.911038 852.673983 455.219017 852.673983z" p-id="5460"></path></svg></div>
      </div>
      <div class="right2">
        <!-- <Graph></Graph> -->
      <div @click="large('graph')" class="large-icon-right"><svg t="1641888518288" fill="#02eefc" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5459" width="16" height="16"><path d="M852.68743 966.232318 171.311547 966.232318c-62.714867 0-113.562988-50.846038-113.562988-113.558335L57.748558 171.324994c0-62.712297 50.848122-113.558335 113.562988-113.558335l681.376907 0c62.714867 0 113.562988 50.846038 113.562988 113.558335l0 681.348989C966.250418 915.38628 915.40332 966.232318 852.68743 966.232318zM909.469948 171.324994c0-31.356149-25.424061-56.779168-56.781494-56.779168L171.311547 114.545826c-31.357433 0-56.781494 25.423019-56.781494 56.779168l0 681.348989c0 31.357172 25.424061 56.779168 56.781494 56.779168l681.376907 0c31.358457 0 56.781494-25.423019 56.781494-56.779168L909.469948 171.324994zM824.297706 483.610416c-15.665413 0-28.390747-12.697183-28.390747-28.389584l0.887243-186.638771L604.102866 461.264479l-40.145947-40.144302 193.023924-193.016015L568.782006 228.104161c-15.693044 0-28.390747-12.697183-28.390747-28.389584s12.697704-28.389584 28.390747-28.389584l254.711349 0c7.929925 0 15.082105 3.27151 20.238756 8.53949 5.490263 4.657067 8.955319 11.449773 8.955319 19.850094l0 255.506255C852.68743 470.913233 839.989727 483.610416 824.297706 483.610416zM455.219017 852.673983 200.506645 852.673983c-7.929925 0-15.082105-3.270487-20.239779-8.538467-5.489239-4.65809-8.955319-11.423167-8.955319-19.850094L171.311547 568.779168c0-15.692401 12.726357-28.389584 28.390747-28.389584 15.69202 0 28.390747 12.697183 28.390747 28.389584l-0.887243 186.6664 192.690312-192.710047 40.173577 40.143279-193.050531 193.016015 188.198837 0c15.69202 0 28.390747 12.697183 28.390747 28.389584C483.608741 839.9768 470.911038 852.673983 455.219017 852.673983z" p-id="5460"></path></svg></div>

      </div>
      <div class="right3">
        <EchartsPie></EchartsPie>
      <div @click="large('pie')" class="large-icon-right"><svg t="1641888518288" fill="#02eefc" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5459" width="16" height="16"><path d="M852.68743 966.232318 171.311547 966.232318c-62.714867 0-113.562988-50.846038-113.562988-113.558335L57.748558 171.324994c0-62.712297 50.848122-113.558335 113.562988-113.558335l681.376907 0c62.714867 0 113.562988 50.846038 113.562988 113.558335l0 681.348989C966.250418 915.38628 915.40332 966.232318 852.68743 966.232318zM909.469948 171.324994c0-31.356149-25.424061-56.779168-56.781494-56.779168L171.311547 114.545826c-31.357433 0-56.781494 25.423019-56.781494 56.779168l0 681.348989c0 31.357172 25.424061 56.779168 56.781494 56.779168l681.376907 0c31.358457 0 56.781494-25.423019 56.781494-56.779168L909.469948 171.324994zM824.297706 483.610416c-15.665413 0-28.390747-12.697183-28.390747-28.389584l0.887243-186.638771L604.102866 461.264479l-40.145947-40.144302 193.023924-193.016015L568.782006 228.104161c-15.693044 0-28.390747-12.697183-28.390747-28.389584s12.697704-28.389584 28.390747-28.389584l254.711349 0c7.929925 0 15.082105 3.27151 20.238756 8.53949 5.490263 4.657067 8.955319 11.449773 8.955319 19.850094l0 255.506255C852.68743 470.913233 839.989727 483.610416 824.297706 483.610416zM455.219017 852.673983 200.506645 852.673983c-7.929925 0-15.082105-3.270487-20.239779-8.538467-5.489239-4.65809-8.955319-11.423167-8.955319-19.850094L171.311547 568.779168c0-15.692401 12.726357-28.389584 28.390747-28.389584 15.69202 0 28.390747 12.697183 28.390747 28.389584l-0.887243 186.6664 192.690312-192.710047 40.173577 40.143279-193.050531 193.016015 188.198837 0c15.69202 0 28.390747 12.697183 28.390747 28.389584C483.608741 839.9768 470.911038 852.673983 455.219017 852.673983z" p-id="5460"></path></svg></div>

      </div>
    </div>
    <div class="title">
      <!-- <span class="titletext">瑞通碳素环保管控平台</span> -->
      <dv-decoration-11 style="width: 800px" class="title-text"
        >瑞通炭素环保管控平台
        <i
          class="el-icon-full-screen"
          style="font-size: 16px; cursor: pointer; color: RGB(126, 136, 157)"
          @click="fullScreen()"
      /></dv-decoration-11>
    </div>
    <el-dialog title="测试" :visible.sync="largeEchart" width="50%">
        <fullGraph v-if="type === 'graph'"></fullGraph>
        <fullEchartsBar v-else-if="type === 'bar'"></fullEchartsBar>
        <FullEchartsPie v-else-if="type === 'pie'"></FullEchartsPie>
        <fullEchartsRadar v-else-if="type === 'radar'"></fullEchartsRadar>
        <fullEchartsForm v-else-if="type === 'form'"></fullEchartsForm>
        <EchartsDialog v-else-if="type === 'line'"></EchartsDialog>
      </el-dialog>
  </div>
</template>

<script>
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers.js";
import "photo-sphere-viewer/dist/plugins/markers.css";
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
// import EchartsRadar from "../components/List/echartsRadar.vue";
import EchartsPie from "../components/List/echartsPie";
import EchartsBar from "../components/List/echartsBar";
import EchartsForm from "../components/List/echartsForm";
import EchartsBLine from "../components/List/echartsLine";
// import Graph from "../components/List/graph";
import EchartsDialog from "../components/List/echartsDialog";
import FullEchartsPie from '../components/fullScreen/fullEchartsPie'
import fullEchartsBar from '../components/fullScreen/fullEchartsBar'
import fullGraph from '../components/fullScreen/fullGraph'
import fullEchartsRadar from '../components/fullScreen/fullEchartsRadar'
import fullEchartsForm from '../components/fullScreen/fullEchartsForm'
// import fullEchartsLine from '../components/fullScreen/fullEchartsLine'
export default {
  components: {
    // Echarts
    EchartsBar,
    // EchartsRadar,
    EchartsPie,
    EchartsForm,
    EchartsBLine,
    // Graph,
    EchartsDialog,
    FullEchartsPie,
    fullEchartsBar,
    fullGraph,
    fullEchartsRadar,
    fullEchartsForm,
    // fullEchartsLine
  },
  data() {
    return {
      type: '',
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
      const PSV = new Viewer({
        container: document.getElementById("photosphere"),
        panorama: this.img,
        defaultZoomLvl: 60,
        defaultLong: 6.271302993071661, // 初始经度，介于0和2π之间
        defaultLat: -0.22862493322827957, // 初始纬度，介于-π/ 2和π/ 2之间。
        size: {
          width: "100%",
          height: "100%",
        },
        navbar: ["autorotate", "zoom", "markers", "download"],
        plugins: [
          [
            MarkersPlugin,
            {
              markers: [
                {
                  id: "html1",
                  longitude: 5.7252865521698775,
                  latitude: -0.4710962437277053,
                  html: `<div class="info-warp-peishao">
                            <div class="info-warp-peishao-title">
                            <span>焙烧厂区大门颗粒物</span>
                            </div>
                            <div class="info-warp-peishao-body">
                            <span class="left-span">PM2.5:</span><span class="right-span">25mg/m3</span>
                            <span class="left-span">PM10:</span><span class="right-span">35mg/m3</span>
                            <span class="left-span">TSP:</span><span class="right-span">45mg/m3</span>
                            </div>
                        </div>
                        <div class='info-line-peishao'></div>`,
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "PM扬尘仪",
                },
                {
                  id: "html2",
                  longitude: 6.015142458534825,
                  latitude: -0.33140880893830915,
                  html: `<div class="info-warp-yishaop2">
                            <div class="info-warp-yishaop2-title">
                            <span>一烧车间门口颗粒物</span>
                            </div>
                            <div class="info-warp-yishaop2-body">
                            <span class="left-span">PM2.5:</span><span class="right-span">25mg/m3</span>
                            <span class="left-span">PM10:</span><span class="right-span">35mg/m3</span>
                            <span class="left-span">TSP:</span><span class="right-span">45mg/m3</span>
                            </div>
                        </div>
                        <div class='info-line-yishaop2'></div>`,
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "PM扬尘仪",
                },
                {
                  id: "html3",
                  longitude: 0.07393947431842574,
                  latitude: -0.12947662495924073,
                  html: `<div class="info-warp-yaxing">
                            <div class="info-warp-yaxing-title">
                            <span>压型车间门口颗粒物</span>
                            </div>
                            <div class="info-warp-yaxing-body">
                            <span class="left-span">PM2.5:</span><span class="right-span">25mg/m3</span>
                            <span class="left-span">PM10:</span><span class="right-span">35mg/m3</span>
                            <span class="left-span">TSP:</span><span class="right-span">45mg/m3</span>
                            </div>
                        </div>
                        <div class='info-line-yaxing'></div>`,
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "PM扬尘仪",
                },
                {
                  id: "html4",
                  longitude: 0.7040675782849761,
                  latitude: -0.33096554138647405,
                  html: `<div class="info-warp-yishao">
                            <div class="info-warp-yishao-title">
                            <span>石墨化厂区大门颗粒物</span>
                            </div>
                            <div class="info-warp-yishao-body">
                            <span class="left-span">PM2.5:</span><span class="right-span">25mg/m3</span>
                            <span class="left-span">PM10:</span><span class="right-span">35mg/m3</span>
                            <span class="left-span">TSP:</span><span class="right-span">45mg/m3</span>
                            </div>
                        </div>
                        <div class='info-line-yishao'></div>`,
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "PM扬尘仪",
                },
                {
                  id: "html5",
                  longitude: 0.5399753121111439,
                  latitude: -0.20969402700795658,
                  html: `<div class="info-warp-yishao">
                            <div class="info-warp-yishao-title">
                            <span>石墨化车间大门颗粒物</span>
                            </div>
                            <div class="info-warp-yishao-body">
                            <span class="left-span">PM2.5:</span><span class="right-span">25mg/m3</span>
                            <span class="left-span">PM10:</span><span class="right-span">35mg/m3</span>
                            <span class="left-span">TSP:</span><span class="right-span">45mg/m3</span>
                            </div>
                        </div>
                        <div class='info-line-yishao'></div>`,
                  width: 32,
                  height: 32,
                  anchor: "bottom center",
                  tooltip: "PM扬尘仪",
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
                  tooltip: "PM扬尘仪",
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
                  tooltip: "PM扬尘仪",
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
                  tooltip: "PM扬尘仪",
                },
              ],
            },
          ],
        ],
      });
      const markersPlugin = PSV.getPlugin(MarkersPlugin);
      PSV.on("click", (e) => {
        console.log(e, "坐标");
      });
      markersPlugin.on("select-marker", () => {
        // console.log(1);
        this.dialogVisible = true; // 弹出框
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
  bottom: 122px;
  left: -65px;
  position: absolute;
  width: 130px;
  height: 80px;
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
    margin-right: 21%;
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
/deep/ .info-line-wuzu {
  position: absolute;
  background: rgba(2, 238, 252, 0.4);
  height: 125px;
  width: 2px;
  margin: -90px 0px 0px 5px;
}

/**
有组织vocs css
*/
/deep/ .info-warp-youzu {
  bottom: 90px;
  left: -65px;
  position: absolute;
  width: 130px;
  height: 80px;
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
    margin-right: 21%;
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
  left: -90px;
  position: absolute;
  width: 185px;
  height: 130px;
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
