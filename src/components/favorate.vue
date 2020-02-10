<template>
  <div id="favorate">
    <Child :res='result' />
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
      u_id: 2
    }).then((res) => {
      // console.log(res.data)
      for(let d in res.data) {
        this.result.push({
          id: res.data[d].wp_id,
          url: res.data[d].wp_url
        })
      }
      // console.log(this.result)
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>