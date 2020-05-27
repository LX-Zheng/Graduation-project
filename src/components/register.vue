<template>
  <div id="register">
    <div class="title">用户注册</div>
    <div>
      <el-input placeholder="请输入昵称" v-model="name">
        <template slot="prepend">
          <i class="el-icon-user" />
        </template>
      </el-input>
      <el-input placeholder="请输入邮箱" v-model="account">
        <template slot="prepend">
          <i class="el-icon-user" />
        </template>
      </el-input>
      <el-input placeholder="请输入密码" v-model="password">
        <template slot="prepend">
          <i class="el-icon-lock" />
        </template>
      </el-input>
    </div>
    <button class="button" @click="register">注册</button>
     <div class="login" @click="login"><u>登录</u></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      account: '',
      password: ''
    }
  },
  methods: {
    register() {
      if(this.name === '' || this.account === '' || this.password === ''){
        this.$notify({
          title: '错误',
          message: '请填写完整的信息',
          type: 'warning'
        })
      } else {
        this.axios.get('/api/userReg', {
          params: {
            name: this.name,
            account: this.account,
            password: this.password
          }
        }).then((res) => {
          console.log(res)
          if(res.data.status === 1) {
            this.$notify({
              title: '成功',
              message: '注册成功',
              type: 'success'
            })
            this.name = ''
            this.account = ''
            this.password = ''
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    login() {
      this.$emit("getChildData", "login")
    }
  }
}
</script>
<style>
#register {
  width: 260px;
}
.title {
  width: 260px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.button {
  outline: none;
  margin-top: 30px;
  width: 200px;
  background-color: #409EFF;
  border-color: #409EFF;
  color: #FFF;
  border-radius: 5px;
  line-height: 1;
  padding: 12px 20px;
  font-weight: 500;
  font-size: 14px;
}
.login {
  margin-top: 10px;
}
</style>