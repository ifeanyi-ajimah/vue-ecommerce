<template>
  <div class="products">
    <div class="intro">
      <div class="row justify-content-center aligh-content-center ">
        <div class="col-md-6">
          <h3>Products Page</h3>
          <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti provident asperiores recusandae sequi eaque ipsum, sint commodi quo placeat repellendus quidem aut earum voluptatibus eius quam, error dolore atque!</P>
        </div>
        <div class="col-md-6">
          <img src="../../public/gull/svg/products.svg" alt=""  >
          
        </div>
      </div>
      <hr>
      <h2> Create Read  Delete and Update </h2>
      <div class="row justify-content-center align-content-center">
        <div class="col-md-12">
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="card-title mb-3">Products Inputs</div>
                        <form>
                            <div class="row">
                                <div class="col-md-12 form-group mb-3">
                                    <label for="firstName1"> Product name</label>
                                    <input class="form-control" v-model="product.name" id="firstName1" type="text" placeholder="Enter product name " />
                                </div>
                                <div class="col-md-12 form-group mb-3">
                                    <label for="lastName1"> Product Price </label>
                                    <input class="form-control" v-model="product.price" id="lastName1" type="text" placeholder="Enter product price" />
                                </div>

                                <!-- <div class="col-md-12 form-group mb-3">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input class="form-control" id="exampleInputEmail1" type="email" placeholder="Enter email" />
                                    <!-  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> --
                                </div> -->
                              

                                <div class="col-md-12">
                                    <button @click.prevent="saveData" class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
      </div>
      <hr>
        <h2> Products </h2>
        <div class="container ">
          
          <div class="row  justify-content-center align-content-center ">
            <div class="col-md-8  ">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th> Price </th>
                    <th> index </th>
                    <th> Action </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(prod, index) in products" :key="index">
                    <td >  {{ prod.data().name}}  </td>
                    <td> {{ prod.data().price}} </td>
                    <td> {{ prod.id }} </td>
                    <td>
                      <div @click="editProduct(prod)" class="btn btn-primary mr-2"> Edit</div> 
                      <div @click="deleteProduct(prod.id )" class="btn btn-danger"> Delete </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
         </div>

        </div>
     
  </div>

          <!-- Modal -->
          <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle"> Edit Product </h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">

                  <div class="row justify-content-center align-content-center">
                  <div class="col-md-12">
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="card-title mb-3">Edit Products Inputs</div>
                        <form>
                            <div class="row">
                                <div class="col-md-12 form-group mb-3">
                                    <label for="firstName1"> Product name</label>
                                    <input class="form-control" v-model="product.name" id="firstName1" type="text" placeholder="Enter product name " />
                                </div>
                                <div class="col-md-12 form-group mb-3">
                                    <label for="lastName1"> Product Price </label>
                                    <input class="form-control" v-model="product.price" id="lastName1" type="text" placeholder="Enter product price" />
                                </div>

                      
                            </div>
                        </form>
                    </div>
                </div>
                </div>
              </div>
              </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" @click="updateProduct()" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          <!-- End Modal  -->

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
        price : ''
      },
      currentlyEditedId : '', //this should be updated once the edit button is clicked. to pass the id of edited product

    }

  },
  methods:{

      saveData(){
        db.collection("Products").add( this.product ) //saves the data to the db ie adds this.product from input fields to db
          .then((docRef) => {   // ensure to always use fat arrow function in your promise, so that you can be able to call other functions using the this keyword
              //console.log(this.product);
              
                 //this.products.push(this.product); //push function adds new data to the end of the array
                 this.product = ''; // clear form 
                
              // console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
              console.error("Error adding document: ", error);
          });
      },

      reset(){  //this functin resets entire data of your component. be careful when to use it
        Object.assign(this.$data, this.$options.data.apply(this));
      },

      getData(){
          db.collection("Products").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              this.products.push( doc ); //pass entire doc array so that we can collect id and other data directly when we want to loop.
              console.log(doc.id, " => ", doc.data());
          });
          });
      },

      deleteProduct(id){
          if( confirm('Are you sure ?') ){
            console.log(id);
              db.collection("Products").doc(id).delete().then(() => {
                  
                  console.log("Document successfully deleted!");
              }).catch((error)=> {
                  console.error("Error removing document: ", error);
              });
          }else{
          }
      },

      editProduct(prod){
        $('#editModal').modal('show');
        // alert(id);
          this.product = prod.data();
          this.currentlyEditedId  = prod.id ; // with this, we obtain the id of item that is being updated
      },

      updateProduct(){

          db.collection("Products").doc( this.currentlyEditedId ).update(this.product)
          .then(() => {
             $('#editModal').modal('hide');
             this.watcherFunction();
             this.product = '';
              console.log("Document successfully updated!");
          })
          .catch(function(error) {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
          });

      },

      watcherFunction(){
          db.collection("Products").onSnapshot((querySnapshot) => {
               this.products = [];  //empty the the product array so as to repopulate it 
              querySnapshot.forEach((doc) => {
                  this.products.push(doc);  //re-populate products arrary with latest data.
              });
              console.log(" Updated ");
          });
          
      },


  },
   mounted(){
    this.getData();
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
</style>
