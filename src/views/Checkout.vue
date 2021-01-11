<template>
  <div class="checkout">
       <h1> Checkout page </h1>
      <div class="container  pt-5">
          <div class="row">
              <div class="col-md-9 ">
                <span class="mb-5">   Check Out</span>
                <div class="checkoutListXX">
                    <ul class="checkoutList">
                        <li class="list-products" v-for="(cart, index) in this.$store.state.cart " :key="index">
                            <div class="inner-modal">
                                <span class="modal-image"> <img :src="cart.productImage" alt=""> </span>
                                <span> {{ cart.productName }}  <br> {{ cart.productPrice | currency }} <br> Quantity:  {{ cart.productQty }} </span>
                            </div>
                        </li>
                    </ul>
                </div>
              

              </div>
              <div class="col-md-3">
                  <span class="mb-5"> Total Price </span>
              </div>
          </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'checkout',
  props: {
    msg: String
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
      align-content: left;
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
.checkoutList{
    // justify-content: left;
    
       margin-left: 30%;
}
 
 
</style>
