<template>
<div>
    <div id="text"></div>
  <div class="container" id="Bar"></div>
</div>
</template>

<script>
import echarts from "echarts";
export default {
  components: {},
  data() {
    return {
      echartsIndex: 0,
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.initBar();
  },
  watch: {
    echartsIndex() {
      this.$nextTick(() => {
        this.initBar();
      });
    },
  },
  methods: {
    echartsClick(params) {
      // console.log(params);
      this.echartsIndex = params.dataIndex; // 将基准线的位置赋值给 echartsIndex
    },
    initBar() {
      let myChart = this.$echarts.init(document.getElementById("Bar")); //初始化实例
      //   var colorList0 = [
      //     "rgb(205,85,85)",
      //     "rgb(210,105,30)",
      //     "rgb(0,139,0)",
      //     "rgb(178,58,238)",
      //     "rgb(54,100,139)",
      //     "rgb(255,0,255)",
      //   ];
      var checkName = "Mon";
      let option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110],
            type: "bar",
            // itemStyle: {
            //   borderRadius: [3, 3, 0, 0],
            //   color(params) {
            //     if (params.dataIndex == 0) {
            //       colorList[params.dataIndex] = "#007DFF";
            //     } else {
            //       colorList[params.dataIndex] = "#95D9F4";
            //     }
            //     return colorList[params.dataIndex];
            //   },
            // },
            itemStyle: {
              normal: {
                // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                //     { offset: 0, color: "#EAB2F6" },
                //     { offset: 0.5, color: "#8D8BFF" },
                // ]),
                color: function (params) {
                  let color1 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#EAB2F6" },
                    { offset: 0.5, color: "#8D8BFF" },
                  ]);
                  let color2 = "#000";
                  if (params.name === checkName) {
                    return color1;
                  } else {
                    return color2;
                  }
                },
                barBorderRadius: [30, 30, 0, 0],
                label: {
                  show: true,
                  position: "top",
                  textStyle: {
                    color: "#999",
                    fontSize: 10,
                  },
                },
              },
            },
            emphasis: {
              itemStyle: {
                color: "red", // 选中柱颜色
              },
            },
          },
        ],
      };
      var drawChatOne = function() {
            myChart.clear()
            myChart.setOption(option);
            // 防止点击时触发多次事件
            myChart.off('click')
            // 添加柱状图点击事件
            myChart.on('click',function(params){
                // console.log(params)
               //点击的柱子的名称
               checkName = params.name;
               //柱形图重构
               myChart.setOption(option);
            //    document.getElementById('text').innerHTML = checkName
            })
        }
        drawChatOne()
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
#test{
    width: 500px;
  height: 500px;
}
.container {
  width: 500px;
  height: 500px;
}
</style>
