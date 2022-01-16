<template>
  <div class="Graph">
    <!-- <div id="cols2">CEMS数据</div> -->
    <div id="Graph" ref="Graph"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(this.initRadar());
  },
  methods: {
    initRadar() {
      let myChart = this.$echarts.init(this.$refs.Graph); //初始化实例
    //   let myChart = this.$echarts.init(document.getElementById("Graph")); //初始化实例

      var chartdata = [
        { name: "污水", sum: 208, size: 150 },
        { name: "碳排放", sum: 80, size: 130 },
        { name: "钢铁1", sum: 108, size: 110 },
        { name: "碳排放1", sum: 80, size: 120 },
        { name: "钢铁2", sum: 108, size: 140 },
      ];
      var color = [
        "#6DFFA1",
        "#56C7F6",
        "#F9F08A",
        "#6DFFA1",
        "#56C7F6",
        "#F9F08A",
      ];
      var data = [];
      chartdata.map((item, index) => {
        data.push({
          name: item.name + "\n\n" + item.sum,
          value: 111,
          symbolSize: item.size,
          draggable: true,
          label: {
            normal: {
              textStyle: {
                fontSize: 12,
                color: "#fff",
              },
            },
          },
          itemStyle: {
            normal: {
              color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                {
                  offset: 0.2,
                  color: "rgba(27, 54, 72, 0.2)",
                },
                {
                  offset: 0.8,
                  color: color[index],
                },
              ]),
              opacity: 1,
              borderWidth: 1,
              borderColor: color[index],
              shadowBlur: 7,
              symbolOffset: 0.6,
              shadowColor: color[index],
            },
          },
        });
      });

      let option = {
        // backgroundColor: "#16222E",
        legend: {
          show: true,
          data: [
                {name: '污水',textStyle:{color:'#fff'} },
                {name: '碳排放',textStyle:{color:'#fff'}},
                {name: '钢铁1',textStyle:{color:'#fff'}},
                {name: '碳排放1',textStyle:{color:'#fff'}},
                {name: '钢铁2',textStyle:{color:'#fff'}}
            ]
        },
        animationDurationUpdate: function (idx) {
          return idx * 100;
        },
        tooltip: {
          trigger: "item",
          // eslint-disable-next-line no-unused-vars
          formatter: function (params, ticket, callback) {
            return params.data.tips || params.name;
          },
        },
        animationEasingUpdate: "bounceIn",
        itemStyle: {
          // color: 'red',
        },
        cursor: "pointer",
        series: [
          {
            type: "graph",
            layout: "force",
            cursor: "pointer",
            force: {
              repulsion: 600,
              edgeLength: 200,
            },
            roam: true,
            label: {
              normal: {
                show: true,
              },
            },
            categories:[
                    {name: '污水'},
                    {name: '碳排放'},
                    {name: '钢铁1'},
                    {name: '碳排放1'},
                    {name: '钢铁2'}
                ],
            data,
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

<style scoped>
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
#Graph {
  height: 100%;
  width: 100%;
  display: flex;
  /* padding-top: 7%; */
}
.Graph {
  height: 100%;
  width: 100%;
  /* background-color: rgba(1, 131, 196, 0.05); */
  /* border: solid 1px rgba(1, 131, 196, 0.25); */
  /* background-color: rbga(); */
  /* border-radius: 10%; */
  /* border-top-left-radius: 10%;
  border-top-right-radius: 0%;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 0%; */
}
</style>