<template>
  <div id="info" @click="user_click()">
    <el-avatar :size="40">user</el-avatar>
    <p>{{ getName }}</p>
    <!-- 弹出窗口 -->
    <div id="content" class="white_content">
      <el-card class="box_card">
        <Login @getChildData="getData" v-show="choice === 'login'" />
        <Register @getChildData="getData" v-show="choice === 'register'" />
        <UserDetail @getChildData="getData" v-show="choice === 'user'" />
        <Change @getChildData="getData" v-show="choice === 'change'" />
      </el-card>
    </div>
    <div id="box" class="black_overlay" @click="box_display"></div>
  </div>
</template>
<script>
export default {
  components: {
    Login: resolve => require(['@/components/login'], resolve),
    Register: resolve => require(['@/components/register'], resolve),
    UserDetail: resolve => require(['@/components/userDetail'],resolve),
    Change: resolve => require(['@/components/change'], resolve)
  },
  data () {
    return {
      choice: 'login',
    }
  },
  methods: {
    user_click() {
      document.getElementById('content').style.display = "block"
      document.getElementById('box').style.display = "block"
    },
    box_display(e) {
      document.getElementById('content').style.display = "none"
      document.getElementById('box').style.display = "none"
      e.stopPropagation()
      return false
    },
    getData(e) {
      this.choice = e
    }
  },
  computed: {
    getName() {
      name = this.$store.state.username
      if(name !== '未登录'){
        this.choice = 'user'
      }
      return name
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
.black_overlay {
  display: none;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.white_content {
  position: absolute;
  width: 300px;
  height: 400px;
  display: none;
  left: 116px;
  top: 20px;
  z-index: 2;
}
.box_card {
  width: 100%;
  height: 100%;
}
</style>