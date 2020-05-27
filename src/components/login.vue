<template>
  <div id="login">
    <div class="title">用户登录</div>
    <div>
      <el-input placeholder="请输入账号" v-model="account">
        <template slot="prepend">
          <i class="el-icon-user" />
        </template>
      </el-input>
      <el-input show-password="true" placeholder="请输入密码" v-model="password">
        <template slot="prepend">
          <i class="el-icon-lock" />
        </template>
      </el-input>
      </div>
      <button class="button" @click="login()">登录</button>
      <div class="register" @click="register"><u>注册</u></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      password: ''
   }
  },
  methods: {
    login() {
      if(this.account === '' || this.params === ''){
        this.$notify({
          title: '错误',
          message: '请输入账号和用户名',
          type: 'warning'
        })
      } else {
        this.axios.get('/api/login/', {
          params: {
            account: this.account,
            password: this.password
          }
        }).then((response) => {
          if(response.data.status === 1) {
            // console.log(response)
            this.$store.dispatch('login', response.data.u_name)
            this.$store.dispatch('changeId', response.data.id)
            this.$notify({
              title: '成功',
              message: '登录成功',
              type: 'success'
            })
            document.getElementById('content').style.display = "none"
            document.getElementById('box').style.display = "none"
          } else {
            this.$notify({
              title: '失败',
              message: '账户或密码不正确',
              type: 'warning'
            })
          }
        }).catch((err) => {
          console.log(err);
        })
      }
    },
    register() {
      this.$emit("getChildData", "register")
    }
  }
}
</script>

<style scoped>
#login {
  width: 260px;
}
.title {
  width: 260px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.register {
  margin-top: 10px;
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
</style>