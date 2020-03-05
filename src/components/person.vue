<template>
  <div id="person">
    <el-row>
      <el-col :span="7" v-for="(o, index) in 5" :key="o">
        <el-card :body-style="{ padding: '0px' }" class="card">
          <img 
          :src="require(`../assets/person/person`+o+`.jpg`)" 
          class="image" @click="handle(o, index)"
          lazy />
        </el-card>
        <h3>{{ well[index] }}</h3>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      well: ['动物植物', '动漫', '自然风景', '设计创意', '美食壁纸'],
    };
  },
  methods: {
    handle(o, index) {
      var par = JSON.stringify({'type': this.well[index],'u_id':2})
      this.$router.push({
        path: '/paper',
        name: 'paper',
        params: {
          par: par,
          url: '/api/getPaper',
          // url: 'http://120.77.203.242:5000/getPaper'
        }

      })
    },
  }
}
</script>
<style>
#person {
  width: 700px;
  min-height: 350px;
  margin: 0 auto;
  background-color: rgb(243, 243, 243);
  border-radius: 20px;
  margin-top: 30px;
}

.image {
  width: 100%;
  display: block;
}

.card {
  float: left;
  width: 160px;
  height: 100px;
  margin-left:60px;
  margin-right: 10px;
  margin-top: 30px
}
</style>