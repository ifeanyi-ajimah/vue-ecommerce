<template>
  <div class="hello">
    <Banner> </Banner>
    <Products> </Products>
    <Learn> </Learn> 
  </div>
</template>

<script>


import Banner from '@/components/Banner.vue'
import Products from '@/sections/Products.vue'
import Learn from '@/sections/Learn.vue'

export default {
  name: 'homemain',
    components: {
   Banner, Products, Learn
  },
  props: {
    msg: String
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
</style>
