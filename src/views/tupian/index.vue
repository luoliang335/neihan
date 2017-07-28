<template>
  <div>
      <apphead></apphead>
      <appnav></appnav>
      <appcontent></appcontent>
 
      <load></load>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Headbar from '@/components/Headbar.vue'
import Picture from'@/components/Picture'
import loading from '@/components/loading'
export default {
    name: 'tupian-page',
    components: { 
    apphead: Headbar,
    appnav: Navbar,
    appcontent:Picture,
    load:loading,
  },
}
</script>

