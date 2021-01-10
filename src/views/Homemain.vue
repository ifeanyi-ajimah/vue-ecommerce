<template>
  <div class="hello">
    <Banner> </Banner>
    <Products :theProducts="products"> </Products>
    <Learn> </Learn> 
  </div>
</template>

<script>


import Banner from '@/components/Banner.vue'
import Products from '@/sections/Products.vue'
import Learn from '@/sections/Learn.vue'
import {fb, db} from '../firebase'

export default {
  name: 'homemain',

  components: {
   Banner, Products, Learn
  },
  props: {
    msg: String
  },

  data(){
    return{
        products: [],
    }
  },

    firestore(){
      return{
          products: db.collection('products'),
      }
  },

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
</style>
