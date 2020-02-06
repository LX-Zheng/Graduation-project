<template>
  <div id="info">
    <el-avatar :size="40">user</el-avatar>
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  props: {
    msg: String
  },
  data () {
    return {
      
    }
  },
}
</script>
<style>
span {
  float: left;
  position: relative;
  left: 10px;
  top: 10px;
}
p {
  float: left;
  margin-left: 25px;
  margin-top: 20px;
  font-size: 14px;
}
#info{
  height: 60px;
}
</style>