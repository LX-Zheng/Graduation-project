<template>
  <div id='download'>
    <Child :res='result' />
  </div>
</template>
<script>
import Child from '@/components/child'
export default {
  components: {
    Child
  },
  data() {
    return {
      result: [],
    }
  },
  created: function() {
    this.axios.post('/api/getLoad', {
      u_id: this.$store.state.u_id
    }).then((res) => {
      for(let d in res.data) {
        this.result.push({
          id: res.data[d].wp_id,
          url: res.data[d].wp_url
        })
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>
<style>

</style>