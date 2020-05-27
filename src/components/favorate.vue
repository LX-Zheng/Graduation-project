<template>
  <div id="favorate">
    <Child :res='result'/>
  </div>
</template>
<script>
// <img src="../assets/icon/no-message.svg" />
import Child from '@/components/child'

export default {
  components: {
    Child
  },
  data () {
    return {
      result: [],
    }
  },
  created: function() {
    this.axios.post('/api/getFavorate', {
      u_id: this.$store.state.u_id
    }).then((res) => {
      // console.log(res.data)
      for(let d in res.data) {
        this.result.push({
          id: res.data[d].wp_id,
          url: "http://127.0.0.1:5000/photo/" + res.data[d].wp_id
        })
      }
      // console.log(this.result)
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>
<style>
#favorate {
  height: 630px;
  /* width: 100%; */
  overflow: scroll;
}
</style>