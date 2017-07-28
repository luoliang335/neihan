<template>
  <div>
      <apphead></apphead>
      <appnav></appnav>
      <appcontent></appcontent> 
      <load></load>
  </div>
</template>
<script>
import Headbar from '@/components/Headbar.vue'
import Navbar from '@/components/Navbar.vue'
import Recommend from'@/components/Recommend.vue'
import loading from '@/components/loading'
export default {
    name: 'fanxian-page',
    components: { 
    apphead: Headbar,
    appnav: Navbar,
    appcontent:Recommend,
    load:loading,
  },
}
</script>
