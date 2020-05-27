<template>
  <div class="detail">
    <ul>
      <li v-for="(m,index) in list" @click="change(index)" :key="m" style="line-height:40px">
        <div>{{m}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list:['个人信息设置','退出登录']
    }
  },
  methods: {
    change(index){
      if(index === 0) {
        // document.getElementById('content').style.display = "none"
        // document.getElementById('box').style.display = "none"
        this.$emit("getChildData", "change")
      }
      else if(index === 1) {
        this.$store.dispatch('login', '未登录')
        this.$store.dispatch('changeId', -1)
        this.$notify({
          title: '成功',
          message: '退出成功',
          type: 'success',
          duration: 2000
        })
        this.$emit("getChildData", "login")
        document.getElementById('content').style.display = "none"
        document.getElementById('box').style.display = "none"
      }
    }
  },

}
</script>
<style>
ul,li{ 
  padding:0;
  margin:0;
  list-style:none 
}
li {
  height: 40px;
  font-size: 15px;
}
li:hover {
  background-color: rgb(231, 231, 231)
}

.detail{
  height: 300px;
}
</style>