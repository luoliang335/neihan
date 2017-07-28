<template>
  <div class="nav">
    <ul>
      <router-link exact to="/" tag="li">段子</router-link>
      <router-link exact to="/picture" tag="li">图片</router-link>
      <router-link exact to="/video" tag="li">视频</router-link>
      <router-link exact to="/explore" tag="li">发现</router-link>
      <router-link exact to="/home" tag="li">我的</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {

  float: left;
  margin: 0;
  text-align: center;
}

a {
  color: #42b983;
}

.nav {
  width: 100%;
  height: 3rem;
  background: #222222;
  position: fixed;
  top: 4rem;
  left: 0;
  z-index: 999;
  line-height: 3rem;
}

.nav li {
  width: 20%;
  font-size: 1.1rem;
  color: #fff;
}
</style>
