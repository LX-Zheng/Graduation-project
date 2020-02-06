<template>
    <div id="login">
        <table>
            <tr>
                <td>账号:</td>
                <td><el-input v-model="account" placeholder="请输入账号"></el-input></td>
            </tr>
            <tr>
                <td>密码:</td>
                <td><el-input v-model="password" placeholder="请输入密码"></el-input></td>
            </tr>
        </table>
        <el-button type="primary" @click="login()">登陆</el-button>
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
            this.axios.get('/api/login/', {
                params: {
                    account: this.account,
                    password: this.password
                }
            }).then((response) => {
                if(response.data.status === 1) {
                    console.log(response.data.u_name)
                    this.$store.dispatch('login', response.data.u_name)
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>

<style>
#login {
    width: 400px
}
</style>