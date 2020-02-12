<template>
  <div id="recommend">
    <div class="icon left">
      <i class="set el-icon-arrow-left" />
    </div>
    <el-card :body-style="{ padding: '3px' }" class="recard">
      <el-image 
      style="width: 100%; height: 100%"
      :src="src"/>
    </el-card>
    <div class="icon right">
      <i class="set el-icon-arrow-right" />
    </div>
    <div class="icon download"><i class="set el-icon-download" /></div>
    <div class="icon collection"><i class="set el-icon-star-off" /></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
    }
  }
}
</script>
<style>
.recard {
  width: 300px;
  height: 250px;
  margin-left: 110px;
  margin-top: 150px;
  float: left;
}
.icon {
  width: 50px;  
  height: 50px;
  background-color: rgb(245, 245, 245);
  border-radius: 25px;
  margin-top: 30%;
}
.icon:hover {
  background-color: rgb(235, 235, 235)
}
.left {
  float: left;
  margin-left: 80px;
}
.right {
  float: right;
  margin-right: 80px;
}
.collection {
  float: left;
  position: absolute;
  bottom: 140px;
  left: 63%;
}
.download {
  float: left;
  position: absolute;
  bottom: 140px;
  left: 53%;
}
.set {
  font-size: 2rem;
  margin-top: 8px;
}
</style>