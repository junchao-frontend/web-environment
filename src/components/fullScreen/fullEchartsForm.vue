<template>
  <div class="forms">
    <!-- <div id="formTitle">CEMS、VOC、PM10实时数据</div> -->
    <div class="Form">
      <dv-scroll-board :config="config1" />
    </div>
  </div>
</template>

<script>
// import echarts from "echarts";
export default {
  data () {
    return {
      config1: {
        header: [" 名称", "值", "时间"],
        headerBGC: "rgba(0,0,0,.3)",
        oddRowBGC: "rgba(255,255,255,.1)",
        evenRowBGC: "rgba(0,0,0,0)",
        rowNum: 5,
        // headerHeight: "12px",
        data: [
          [
            '<span style="font-size:12px">建院</span>',
            "<span style='font-size:12px'>2111</span>",
            "<span style='font-size:12px'>300</span>",
          ],
          [
            "<span style='font-size:12px'>土木</span>",
            "<span style='font-size:12px'>2111</span>",
            "<span style='font-size:12px'>120</span>",
          ],
          [
            "<span style='font-size:12px'>信电</span>",
            "<span style='font-size:12px'>2111</span>",
            "<span style='font-size:12px'>120</span>",
          ],
          [
            "<span style='font-size:12px'>能环</span>",
            "<span style='font-size:12px'>2111</span>",
            "<span style='font-size:12px'>72</span>",
          ],
          [
            "<span style='font-size:12px'>机械</span>",
            "<span style='font-size:12px'>3000</span>",
            "<span style='font-size:12px'>115</span>",
          ],
          [
            "<span style='font-size:12px'>矿测</span>",
            "<span style='font-size:12px'>1015</span>",
            "<span style='font-size:12px'>55</span>",
          ],
          [
            "<span style='font-size:12px'>地球</span>",
            "<span style='font-size:12px'>1130</span>",
            "<span style='font-size:12px'>76</span>",
          ],
          [
            "<span style='font-size:12px'>材料</span>",
            "<span style='font-size:12px'>1506</span>",
            "<span style='font-size:12px'>124</span>",
          ],
        ],
      },
    };
  },
  mounted () { },
  methods: {},
};
</script>

<style lang="scss" scoped>
#formTitle {
  /* top: 10px; */
  height: 7%;
  color: white;
  text-align: center;
  font-size: 14px;
  color: white;
  text-shadow: 0 0 8px rgb(0, 233, 249);
  position: relative;
  /* top: 2%; */
}
/deep/ .Form {
  height: 90%;
  width: 80%;
  // margin-top: 5%;
  padding-left: 4%;
  /* padding-top: 7%; */
  /* background-color: rgba(1, 131, 196, 0.05); */
}
/deep/ .forms {
  height: 100%;
  width: 80%;
  /* background-color: rgba(1, 131, 196, 0.05); */
  /* border: solid 1px rgba(1, 131, 196, 0.25); */
  /* background-color: rbga(); */
  /* border-radius: 10%; */
  /* border-top-left-radius: 0;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 0%;
  border-bottom-left-radius: 10%; */
}
</style>