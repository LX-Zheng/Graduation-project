<template>
  <div id="info">
    <el-avatar :size="40">user</el-avatar>
    <p>{{ getName }}</p>
  </div>
</template>
<script>
export default {
  props: {
    
  },
  data () {
    return {
      
    }
  },
  computed: {
    getName() {
      return this.$store.state.username
    }
  }
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