<template>
  <div>
    <ul>
      <li v-for="(m,index) in list" @click="change(index)" :key="m" :class="{isactive:index==cur}">
        <div>{{m}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cur: 0,
      list:['个人信息设置','退出登录']
    }
  },
  methods: {
    change(index){

    }
  },

}
</script>
<style>
.isactive{
  color: red;
  background-color: rgb(226, 226, 226);
}
ul,li{ 
  padding:0;
  margin:0;
  list-style:none 
}
li {
  height: 40px;
  font-size: 15px;
}
li:hover {
  background-color: rgb(231, 231, 231)
}
</style>