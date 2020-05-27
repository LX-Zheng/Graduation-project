<template>
  <div id="change">
    <div class="title">个人信息</div>
    <el-input placeholder="请输入昵称" v-model="newname">
      <template slot="prepend">
        <i class="el-icon-user" />
      </template>
    </el-input>
    <el-input show-password='true' placeholder="请输入密码" v-model="newpassword">
      <template slot="prepend">
        <i class="el-icon-lock" />
      </template>
    </el-input>
    <button class="button" @click="confirm">确定</button>
    <div class="login" @click="back"><u>返回</u></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newname: '',
      newpassword: ''
    }
  },
  methods: {
    back() {
      this.$emit("getChildData", "user")
    },
    confirm() {
      this.axios.post('/api/change', {
        u_id: this.$store.state.u_id,
        name: this.newname,
        password: this.newpassword
      }).then((res) => {
        console.log(res)
        if(res.data.success === 1){
          this.$notify({
            title: '成功',
            message: '修改成功',
            type: 'success'
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  // created: function() {
  //   this.name = this.$store.state.username
  // }
}
</script>
<style scoped>
.title {
  width: 260px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>