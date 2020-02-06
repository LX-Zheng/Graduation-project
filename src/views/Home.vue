<template>
  <div id="home">
    <person />
  </div>
</template>

<script>
// @ is an alias to /src
import person from '@/components/person.vue'

export default {
  name: 'home',
  components: {
    person
  }
}
</script> 

<style>

</style>
