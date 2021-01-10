<template>
  <div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-5"> Our Products  </h1>

          <div class="row" >

              <!-- <div  v-for="(product, index) in theProducts" :key="index"> -->

                 <div class="col-md-3" v-for="(product, index) in theProducts" :key="index.id" >

                  <div class="card product-item mb-3">
                       <!-- <div v-for="(image, index) in product.images" :key="index">
                           <img :src="image"  class="card-img-top" :alt="product.name">
                       </div> -->
                          <carousel :perPage="1">
                            <slide v-for="(image, index) in product.images" :key="index.id">
                                 <img :src="image"  class="card-img-top" :alt="product.name" style="width: 250px">
                            </slide>
                          </carousel>
                 
                      <!-- <img :src="product.images[0]"  class="card-img-top" :alt="product.name"> -->
                     
                      <div class="card-body">
                         <div class="d-flex justify-content-between">
                            <h5 class="card-title"> {{ product.name }} </h5>
                            <h6 class="card-title">  {{ product.price | currency }} </h6>
                         </div>
                          <p class="card-text" v-html="product.description"> </p>
                            <AddToCart 
                            :name="product.name"
                            :price="product.price"
                            :productId="product['.key']"
                            :productImge = getImage(product.images) >

                            </AddToCart>
                      </div>
                  </div>
               </div>
            
              <!-- </div>   -->
             


              <!-- 
                <div class="col-md-4">
                  <div class="card product-item">
                      <img src="/img/products/male_multi.jpg" class="card-img-top" alt="">
                      <div class="card-body">
                          <h5 class="card-title"> Surface Book 2 </h5>
                          <p class="card-text">
                              Complete your device with the nice office 365 and get 1 tb station wags
                        </p>
                        <a href="#" class="btn btn-primary"> Add to CART</a>
                      </div>
                  </div>
               </div> -->

               
          </div>

      </div>

  </div>
</template>

<script>
import AddToCart from '../components/AddToCart.vue'

export default {
  name: 'Products',
  components:{
    AddToCart
  },
  props: {
    msg: String , 
    theProducts:{
      type: Array,
      required: true
    }
  },
  methods:{
    getImage(images){
      return images[0];
       console.log(images[0] );
    }
  }

}
</script>

<style scoped lang="scss">
 
 .products{
     margin-top: 7 rem;
     background: #f2f2f2;
     padding-bottom: 3rem;
 }
</style>
