<template>
  <div id="user">
    <div class="user_nav">
      <div class="state">
        <Info />
      </div>
      <ul>
        <li v-for="(m,index) in content" @click="doActive(index)" :key="m" :class="{active:index==current}">
          <img :src="require(`../assets/icon/`+imgSrc[index]+`.svg`)" />
          <div class="fdesign">{{m}}</div>
        </li>
      </ul>
    </div>
    <div class="content">
      <Favorate v-show="contentShow===2" />
    </div>
  </div>
</template>
<script>
import Info from '@/components/info'
// import Favorate from '@/components/favorate'

export default {
  components: {
    Info,
    Favorate:resolve => require(['@/components/favorate'], resolve),
  },
  data () {
    return {
      choice: 'login',
      contentShow: 0,
      current: 0,
      content: ['下载管理', '我的收藏'],
      imgSrc: ['download', 'collection'],
    }
  },
  methods: {
    doActive(index) {
      this.current = index;
      this.contentShow = index + 1;       
    },
  }  
}
</script>
<style>
#user {
  height: 500px;
  width: 700px;
}
.user_nav {
  height: 500px;
  width: 200px;
  background-color: rgb(237, 237, 237);
  float: left;
}
.state {
  height: 60px;
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
img {
  position: relative;
  left: 15px;
  margin-top: 7px;
  float: left;
}
.fdesign {
  float: left;
  margin-top: 9px;
  margin-left: 20px;
}
li:hover {
  background-color: rgb(231, 231, 231)
}
.active{
  color: red;
  background-color: rgb(226, 226, 226);
}
.content {
  float: right;
  width: 500px;
  height: 100%;
}
</style>