<template>
  <div class="home">
    
   <Navbar> </Navbar>
   <Minicart></Minicart>
   
   <router-view> </router-view>

   <footer></footer>
  </div>
</template>


<script>
import Checkout from './Checkout.vue'
// @ is an alias to /src
//  import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    Checkout
    // HelloWorld
  }
}
</script>
