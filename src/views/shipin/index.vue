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
import Video from'@/components/Video'
import loading from '@/components/loading'
export default {
    name: 'shipin-page',
    components: { 
    apphead: Headbar,
    appnav: Navbar,
    appcontent:Video,
    load:loading,
  },
}
</script>

