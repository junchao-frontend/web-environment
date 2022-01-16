<template>
  <div class="Pie">
    <div id="cols2">
      数据采集
      <div class="title-line">
        <div class="line"></div>
        <div class="ball"></div>
      </div>
    </div>
    <div id="Pie"></div>
  </div>
</template>

<script>
// import echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initBar();
  },
  methods: {
    initBar() {
      let myChart = this.$echarts.init(document.getElementById("Pie")); //初始化实例
      let chartData = [
        {
          name: "重大危险源数量",
          num: 5000,
          id: "total",
          key: "TOTAL",
        },
        {
          name: "CEMS",
          num: 3000,
          id: "one",
          key: "ONE",
        },
        {
          name: "VOCs",
          num: 1000,
          id: "two",
          key: "TWO",
        },
        {
          name: "治理数据",
          num: 600,
          id: "three",
          key: "THREE",
        },
        {
          name: "生产",
          num: 400,
          id: "four",
          key: "FOUR",
        },
      ];
      let total;
      let colorArr = ["#FE7B7B", "#FFBD46", "#F5E139", "#0096FF"];
      let seriesData = [];
      let nameArr = [];
      // eslint-disable-next-line no-unused-vars
      chartData.forEach((item, index) => {
        let value = item.num;
        if (item.id === "total") {
          total = value;
        }
        let colorIndex = ["one", "two", "three", "four"].indexOf(item.id);
        if (["one", "two", "three", "four"].includes(item.id)) {
          nameArr.push(item.name);
          if (value) {
            seriesData.push({
              name: item.name,
              value: value,
              itemStyle: {
                normal: {
                  color: colorArr[colorIndex],
                },
              },
            });
          }
        }
      });
      // eslint-disable-next-line no-unused-vars
      var option = {
        title: {
        text: `{a|${total}}`,
        left: '28%',
        top: '60%',
        textStyle: {
            rich: {
                a: {
                    // width: 100,
                    align: 'center',
                    fontSize: 20,
                    color: '#fff',
                    fontWight: 300,
                    border: '1px solid red',
                },
            },
        },
    },
        tooltip: {
        trigger: 'item',
        show: true,
        formatter: (item) => {
            let data = item.data;
            if (!data.name) {
                return '';
            }
            return `${data.name}: ${data.value}`;
        },
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10],
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);',
    },
        legend: {
          orient: "vertical",
          icon: "circle",
          left: "63%",
          top: "25%",
          // width: 10,
          itemGap: seriesData.length > 5 ? 15 : 20,
          itemWidth: 8,
          itemHeight: 8,
          data: nameArr,
          formatter: (name) => {
            let value = seriesData.filter((item) => item.name === name)[0]
              .value;
            let ratio = ((value / total) * 100).toFixed(1);
            return `{a|${
              name.split("数据")[0]
            }}{value|${value}}|  {b|${ratio}}{c|%}`;
          },
          textStyle: {
            color: "rgba(255,255,255,.7)",
            // padding: [2, 0, 0, 2],
            rich: {
              a: {
                width: 50,
                align: "left",
                fontSize: 10,
              },
              b: {
                align: "left",
                fontSize: 10,
                color: "#fff",
              },
              c: {
                align: "left",
                fontSize: 10,
              },
              value: {
                width: 30,
                align: "right",
                fontSize: 10,
                color: "#fff",
              },
            },
          },
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "55%"],
            center: ["35%", "65%"],
            color: ["#3ac1fe", "#fc717a", "#fbcf00", "#45cba0"],
            data: seriesData,
            label: {
              show: true,
              formatter: (params) => {
                // console.log(params);
                let total = 0; //总数量
                let percent = 0; //占比
                seriesData.forEach((item) => {
                  total += item.value;
                });
                percent = (params.value / total) * 100;
                return percent + "%";
              },
            },
            // emphasis: {
            //   itemStyle: {
            //     shadowBlur: 10,
            //     shadowOffsetX: 0,
            //     shadowColor: "rgba(0, 0, 0, 0.5)",
            //   },
            // },
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
#Pie {
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
.Pie {
  /* background-color: burlywood; */
  height: 100%;
  width: 100%;
  /* backdrop-filter: blur(8px);
  background-color: rgba(1, 131, 196, 0.05);
  border: solid 1px rgba(1, 131, 196, 0.25); */
  /* background-color: rbga(); */
  /* border-radius: 10%; */
  /* border-top-left-radius: 0;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 0%;
  border-bottom-left-radius: 10%; */
  /* margin-top: 8%; */
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
</style>