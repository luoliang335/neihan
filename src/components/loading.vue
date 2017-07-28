<template>
  <div class="load">
    <span>{{data}}</span>
  </div>
</template>
<<script>
export default {
  name:"load",
  data(){
    return{
      data:"加载更多..."
    }
  },
  props: ["push"],
}
</script>
<style scoped>
.load {
  width: 100%;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
}

.load span {
  width: 100%;
  height: 100%;
  display: block;
}
</style>

