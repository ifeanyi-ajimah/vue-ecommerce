<template>
  <div class="hello">
      <button @click="addDataToCart()" class="btn btn-primary"> Add to CART </button>
  </div>
</template>

<script>
export default {
  name: 'add-to-cart',
  props: {
    name: String,
    price: String,
    productId: String,
    productImge: String,
  },
  data(){
      return{
          item:{
              productName: this.name,
              productPrice: this.price,
              productID : this.productId,
              productImage : this.productImge,
              productQty : 1,
          }
      }

  },
  methods:{
    
      addDataToCart(){
          $('#mini-cart-modal').modal('show');
          this.$store.commit('addToCart', this.item);
      },

      openModal(){
        
        $('#mini-cart-modal').modal(show);
      }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
</style>
