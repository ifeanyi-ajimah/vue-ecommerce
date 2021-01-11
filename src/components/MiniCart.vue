<template>

  <div class="mini-cart">
        <!-- Modal -->
        <div class="modal fade" id="mini-cart-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"> My Bag </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <ul>
                    <li class="list-products" v-for="(cart, index) in this.$store.state.cart " :key="index">
                         <div class="inner-modal">
                            <span class="modal-image"> <img :src="cart.productImage" alt=""> </span>
                            <span> {{ cart.productName }}  <br> {{ cart.productPrice | currency }} <br> Quantity:  {{ cart.productQty }} </span>
                         </div>
                    </li>
                </ul>
            </div>
            <div class="modal-footer">
                <!-- <button type="button" class="btn btn-secondary"  data-dismiss="modal">Continue Shopping</button> -->
                <button type="button" class="btn btn-secondary"  @click="closeModal">Continue Shopping</button>
                <button type="button" @click="goToCheckOut" class="btn btn-primary"> Check Out </button>
            </div>
            </div>
        </div>
        </div>
  </div>

</template>

<script>
export default {
  name: 'mini-cart',
  props: {
    msg: String
  },
  methods:{
      closeModal(){
          this.$store.commit('closeModal');
      },
      goToCheckOut(){
        this.$store.commit('openCheckoutPage')
        this.$router.push('/checkout')
        // this.$router.replace({ path: 'checkout' })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

ul .list-products {
    list-style-type: none;
    display: block;
    justify-content: left;
    text-align: left;
}

ul .list-products span{
     display: block;
     margin-bottom: 2px;
    //  align-content: left;
}
.modal-image{
    max-width: 70px;
}
.inner-modal{
    display: flex;
}
.inner-modal span{
  margin-right: 30px;
  padding: 10px;
}
 
</style>
