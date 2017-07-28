<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  },
  data() {
    return {
      scrollWatch: true
    }
  },
  mounted() {
    let arr = [];
    $(window).on('scroll', () => {
      arr.push($(document).scrollTop());
      arr.splice(0, arr.length - 2)
      if (this.scrollWatch) {
        if ($(document).scrollTop() >= ($(".nav").height() + $(".head").height())) {
          $(".head").css("display", "none")
          $(".nav").css("display", "none")
          if (arr[0] - arr[arr.length - 1] > 0) {
            // console.log("向上滚动")
            $(".head").css("display", "block")
            $(".nav").css("display", "block")
          }
        } else {
          $(".nav").css("display", "block")
          $(".head").css("display", "block")
        }
      }
    }
    )
  },

  destroyed() {
    this.scrollWatch = false;
  }
}
</script>
<style>
#app {

  width: 100%;
  margin: 0 auto;
  position: relative;
}

.active {
  background: #ff819f;
}

</style>
