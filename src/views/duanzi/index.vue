<template>
  <div>
      <apphead></apphead>
      <appnav></appnav>
      <appcontent></appcontent>
      <!-- <refresh @refreshList="getdata(refresh)"></refresh>
       -->
      <load></load>
  </div>
</template>
<script>
import Headbar from '@/components/Headbar.vue'
import Navbar from '@/components/Navbar.vue'
import Duanzi from'@/components/Duanzi'
// import refresh from '@/components/refresh'
import loading from '@/components/loading'
export default {
    name: 'duanzi-page',
    components: { 
        apphead: Headbar,
        appnav: Navbar,
        appcontent:Duanzi,
        // refresh:refresh,
        load:loading,

  },
}
</script>

