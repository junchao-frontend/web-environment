<template>
  <div style="height: 100%; width: 100%;">
    <div id="tag">
      <div class="tag1">
        <div
          style="height: 50%; width: 50%; align-items: center; display: flex;margin-top:20px"
        >
          <i
          style="font-size: 35px"
            class="iconfont icon-jiankongshexiangtou-xian"
            id="testicon1"
          ></i>
        </div>
        <div style="height: 50%; width: 50%;margin-top:-15px; align-items: center">
          <div style="color: #a6bde9;  font-size: 12px;margin-top:18px">
            监控
          </div>
          <div style="color: #fff; padding-bottom: 18px; font-size: 14px;margin-top:11px">
            5
          </div>
        </div>
      </div>
      <div class="tag2">
        <div
          style="height: 50%; width: 50%; align-items: center; display: flex;margin-top:20px"
        >
          <i style="font-size: 30px" class="iconfont icon-tvoc" id="testicon2"></i>
        </div>
        <div style="height: 50%; width: 50%;margin-top:-15px">
          <div style="color: #a6bde9; font-size: 12px;margin-top:18px">
            VOCs
          </div>
          <div style="color: #fff; padding-bottom: 18px; font-size: 14px;margin-top:11px">
            2
          </div>
        </div>
      </div>
      <div class="tag3">
        <div
          style="height: 50%; width: 50%; align-items: center; display: flex;margin-top:20px"
        >
          <i style="font-size: 35px" class="iconfont icon-icon_wuranyuandangandongtaigengxin" id="testicon3"></i>
        </div>
        <div style="height: 50%; width: 50%;margin-top:-15px">
          <div style="color: #a6bde9; font-size: 12px;margin-top:18px">
            CEMs
          </div>
          <div style="color: #fff; padding-bottom: 18px; font-size: 14px;margin-top:11px">
            2
          </div>
        </div>
      </div>
      <div class="tag4">
        <div
          style="height: 50%; width: 50%; align-items: center; display: flex;margin-top:20px"
        >
          <i style="font-size: 35px" class="iconfont icon-gongyi" id="testicon4"></i>
        </div>
        <div style="height: 50%; width: 50%;margin-top:-15px">
          <div style="color: #a6bde9; font-size: 12px;margin-top:18px">
            湿电
          </div>
          <div style="color: #fff; padding-bottom: 18px; font-size: 14px;margin-top:11px">
            3
          </div>
        </div>
      </div>
      <div class="tag5">
        <div
          style="height: 50%; width: 50%; align-items: center; display: flex;margin-top:20px"
        >
          <i  style="font-size: 30px" class="iconfont icon-shujuguolv-fangchaguolvdeng" id="testicon4"></i>
        </div>
        <div style="height: 50%; width: 50%;margin-top:-15px">
          <div style="color: #a6bde9;font-size: 12px;margin-top:18px">
            脱硝
          </div>
          <div style="color: #fff; padding-bottom: 18px; font-size: 14px;margin-top:11px">
            2
          </div>
        </div>
      </div>
      <div class="tag6">
        <div
          style="height: 50%; width: 50%; align-items: center; display: flex;margin-top:20px"
        >
          <i style="font-size: 30px" class="iconfont icon-youyanji" id="testicon4"></i>
        </div>
        <div class="test" style="height: 50%; width: 50%;margin-top:-15px">
          <div style="color: #a6bde9;  font-size: 12px;margin-top:18px">
            除尘
          </div>
          <div style="color: #fff; padding-bottom: 18px; font-size: 14px;margin-top:11px">
            5
          </div>
        </div>
      </div>
    </div>
    <div id="cols2">
      接入点统计
      <div class="title-line">
        <div class="Line"></div>
        <div class="ball"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import ".//at.alicdn.com/t/font_2572393_3l4ld09yv33.css";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
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
  width: 85px;
  height: 0;
}

.ball {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #06c8eb;
}
#tag {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* margin-top: 2%; */
  margin-left: 10%;
  /* background-color: rgba(1, 131, 196, 0.05); */
  /* border: solid 1px rgba(1, 131, 196, 0.25); */
  /* background-color: rbga(); */
  /* border-radius: 10%; */
  /* border-top-left-radius: 0;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 0%;
  border-bottom-left-radius: 10%; */
}
.tag1 {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 50%;
  width: 28%;

  /* background-color: #fff; */
}
.tag2 {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 50%;
  width: 28%;
}

.tag3 {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 50%;
  width: 28%;
}
.tag4 {
  margin-top: -15px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 50%;
  width: 28%;
}
.tag5 {
  margin-top: -15px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 50%;
  width: 28%;
}
.tag6 {
  margin-top: -15px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 50%;
  width: 28%;
}
#testicon1 {
  font-size: 35px;
  color: #01effd;
  margin-left: 20%;
}
#testicon2 {
  font-size: 35px;
  color: #01effd;
  margin-left: 20%;
  align-items: center;
  display: flex;
}
#testicon3 {
  font-size: 35px;
  color: #01effd;
  margin-left: 20%;
  align-items: center;
  display: flex;
}

#testicon4 {
  font-size: 35px;
  color: #01effd;
  margin-left: 20%;
  align-items: center;
  display: flex;
}
/* span:nth-child(1) {
  color: white;
  display: inline;
}
span:nth-child(2) {
  color: rgb(255, 255, 255);
  display: block;
} */
</style>