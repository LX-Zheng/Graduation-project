<template>
  <div id="person">
    <h3>人物</h3>
    <el-row>
      <el-col :span="7" v-for="(o, index) in 6" :key="o">
        <el-card :body-style="{ padding: '0px' }" class="card">
          <img :src="require(`../assets/person/person`+o+`.jpg`)" class="image" @click="handle(o, index)">
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      well: ['生活写真'],
    };
  },
  methods: {
    handle(o, index) {
      var par = JSON.stringify({'type': this.well[0],'u_id':2})
      this.$router.push({
        path: '/paper',
        name: 'paper',
        params: {
          par: par,
          url: '/api/getPaper'
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
  margin-top: 10px
}
</style>