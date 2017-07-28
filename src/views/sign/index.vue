<template>
  <div id="sign">
    <form @submit.prevent="handleSubmit">
      <div class="username"><input type="text" v-model="username"></div>
      <div class="password"><input type="password" v-model="password"></div>
      <div class="conform"><input type="password" v-model="conform"></div>
      <input type="submit">
      <ul>
        <li v-for="err in errors" v-text="err"></li>
      </ul>
    </form>
  </div>
</template>
<script>
import Vue from 'vue'
import Vuerify from 'vuerify'
Vue.use(Vuerify /*, add rules */)

export default {
  data() {
    return {
      username: '',
      password: '',
      conform: ''
    }
  },

  vuerify: {
    username: 'required',
    password: {
      test: /\w{4,}/,
      message: '至少四位字符'
    },
    conform: {
      test(val) {
        return val === this.password
      },
      message: '密码输入不一致'
    }
  },

  computed: {
    errors() {
      return this.$vuerify.$errors
    }
  },

  methods: {
    handleSubmit() {
      if (this.$vuerify.check()) {
        // do sth
      }
    }
  }

}
</script>
<style scoped>
.username {
    
  }
#sign div{
width:90%;
    height:3rem;
    border:1px solid #ddd;
    display:block;
}
</style>


