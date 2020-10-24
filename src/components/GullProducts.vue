<template>
  <div class="products">
    <div class="intro">
      <div class="row justify-content-c product aligh-content-c product ">
        <div class="col-md-6">
          <h3>Products Page</h3>
          <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti provident asperiores recusandae sequi eaque ipsum, sint commodi quo placeat repellendus quidem aut earum voluptatibus eius quam, error dolore atque!</P>
        </div>
        <div class="col-md-6">
          <img src="../../public/gull/svg/products.svg" alt=""  >
          
        </div>
      </div>
      <hr>
      <div class="bg-info clearfix">
        <button type="button" class="btn btn-secondary float-left"> Button floated left</button> 
        We are using Vue fire store and vue fire store handles realtime data.
        <button type="button" class="btn btn-secondary float-right"> Button floated right</button>
      </div>
      <hr>
      <div class="container ">
        <div class="row mb-3 justify-content-center product">
           <div class="col-md-8 clearfix">
              <h2 class="float-left d-inline"> Products </h2>
               <button class="d-inline  btn btn-primary float-right" @click="addProductModal"> Add Product </button>
           </div>
        </div>
      </div>
        <div class="container ">
            
            <div class="row  justify-content-center product align-content-center product ">
              <div class="col-md-8  ">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th> Price </th>
                      <th> description </th>
                      <th> id </th>
                      <th> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(product, index) in products" :key="index">
                      <td >  {{ product.name}}  </td>
                      <td> {{ product.price}} </td>
                      <td> {{ product.description }} </td>
                      <td> {{ product['.key'] }} </td>
                      <td>
                        <div @click="editProduct(product)" class="btn btn-primary mr-2"> Edit</div> 
                        <div @click="deleteProduct(product['.key'] )" class="btn btn-danger"> Delete </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>

        </div>
     
        </div>

          <!-- Modal -->
          <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalC productTitle" aria-hidden="true">
            <div class="modal-dialog  modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle"> Add Product </h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body ">

                    <div class="row">
                        <div class="col-md-8 ">
                             <div class="form-group">
                                <input type="text" v-model="product.name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter product name">
                              </div>

                              <div class="form-group">
                                <textarea class="form-control" v-model="product.description" placeholder="Product Description " id="exampleFormControlTextarea1" rows="7"></textarea>
                              </div>
                        </div>
                        <div class="col-md-4 clearfix">
                              <h6 class="modal-title float-left ">Product Details </h6>
                              
                              <div class="form-group">
                                <input type="text" class="form-control" v-model="product.price" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Price">
                              </div>
                              <div class="form-group">
                                <input type="text" class="form-control" v-model="product.tag" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product tag">
                              </div>
                              <span class="float-left"> Product images </span>
                              <div class="form-group">
                                <input type="file" class="form-control" @change="uploadImage" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product image">
                              </div>


                        </div>
                    </div>
                  
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" @click="saveData" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          <!-- End Modal  -->

                  
        <!-- Modal -->
        <!-- <div class="modal fade" id="addModalC product" tabindex="-1" role="dialog" aria-labelledby="exampleModalC productTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-c producted" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div> -->

  </div>
</template>

<script>

import {fb, db} from '../firebase';
export default {
  name: 'products',
  props: {
    msg: String
  },
 
  data(){
    return{
      products: [],
      product :{
        name : '',
        description : '',
        price : '',
        tag : ''
      },
      currentlyEditedId : '', //this should be updated once the edit button is clicked. to pass the id of edited product

    }
  },

  firestore(){
      return{
          products: db.collection('products'),
      }
  },

  methods:{

      saveData(){

        this.$firestore.products.add(this.product);
        this.product = ''
         $('#productModal').modal('hide');
    },

   

      deleteProduct(id){
          swal({
              title: "Are you sure?",
              text: "Once deleted, you will not be able to recover this imaginary file!",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then((willDelete) => {
              if (willDelete) {
                this.$firestore.products.doc( id ).delete()

                swal("Poof! Your imaginary file has been deleted!", {
                  icon: "success",
                });
              } else {
                swal("Your imaginary file is safe!");
              }
            });
      },

      editProduct(prod){
       
      },

      updateProduct(){
        
      },

    

      addProductModal(){
        $('#productModal').modal('show');
      },

      uploadImage(){

      }


  },

   mounted(){
  
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
</style>
