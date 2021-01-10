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
              <div class="col-md-10  ">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th> Price </th>
                      <th> description </th>
                      <th> tag </th>
                      <th> id </th>
                      <th> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(product, index) in products" :key="index">
                      <td >  {{ product.name}}  </td>
                      <td> {{ product.price}} </td>
                      <td v-html="product.description"> </td>
                      <td>   <span v-for="(pro , index) in product.tags" :key="index"> <span v-html="pro"></span>  </span></td>
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
                  <h5 class="modal-title" id="exampleModalLongTitle" v-if="activeModal == 'add'"> Add Product </h5>
                  <h5 class="modal-title" id="exampleModalLongTitle" v-if="activeModal == 'edit'"> Edit Product </h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body ">

                    <div class="row">
                        <div class="col-md-8">
                             <div class="form-group">
                                <input type="text" v-model="product.name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter product name">
                              </div>

                              <div class="form-group">
                                <vue-editor v-model="product.description"></vue-editor>
                                <!-- <textarea class="form-control" v-model="product.description" placeholder="Product Description " id="exampleFormControlTextarea1" rows="7"></textarea> -->
                              </div>
                        </div>
                        <div class="col-md-4 clearfix">
                              <h6 class="modal-title float-left ">Product Details </h6>
                              
                              <div class="form-group">
                                <input type="text" class="form-control" v-model="product.price" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Price">
                              </div>
                              <div class="form-group">
                                <template v-if="activeModal == 'edit'">
                                <input type="text"  class="form-control" v-model="product.tags" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter tags(comma separated )">
                                </template>
                                <template v-else>
                                <input type="text" @keyup.188="addTag" class="form-control" v-model="tag" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter tag,(comma separated)">
                                </template>
                                 <p v-for="(tag, index) in product.tags" :key="index" class="d-inline">
                                    <span class="badge badge-success m-1"> {{ tag }} </span>
                                </p>
                              </div>
                              
                              <br>
                               <!-- <span v-for="(pro , index) in product.tags" :key="index"> {{ pro }} </span> <br> -->

                              <span class="float-left"> Product images </span>
                              <div class="form-group">
                                <input type="file" style="overflow: hidden" class="form-control" @change="uploadImage"  placeholder="Product image">
                              </div>
                              <div class="form-group d-flex flex-wrap" >
                                  <div class="p-1" v-for="(image , index) in product.images" :key="index" >
                                    <div class="img-wrapper">
                                     <img :src="image" alt="" style="width:80px">
                                     <span class="delete-img" @click="deleteImage(image, index)"> X </span>
                                    </div>
                                  </div>
                              </div>
                        </div>
                    </div>
                  
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <template v-if="activeModal === 'edit'">
                  <button type="button" @click="updateProduct(product)" class="btn btn-primary">Update changes</button>
                  </template>
                  <template v-else>
                  <button type="button" @click="saveData" class="btn btn-primary">Save changes</button>
                  </template>
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

import { VueEditor } from "vue2-editor";
import {fb, db} from '../firebase';
export default {
  name: 'products',
  props: {
    msg: String
  },
  components: {
    VueEditor
  },
 
  data(){
    return{
      products: [],
      product:{
        name : '',
        description : '',
        price : '',
        tags : [],
        images: [],
      },
      tag: '',
      currentlyEditedId : '', //this should be updated once the edit button is clicked. to pass the id of edited product
      activeModal : '',
      
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
              text: "Once deleted, you will not be able to recover this  file!",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then((willDelete) => {
              if (willDelete) {

                this.$firestore.products.doc( id ).delete()

                swal("Poof! Your  file has been deleted!", {
                  icon: "success",
                });
              } else {
                swal("Your file is safe!");
              }
            });
      },

      editProduct(prod){
       $('#productModal').modal('show');
       this.product = prod;
       this.activeModal = 'edit';
      },

      updateProduct( product ){
        console.log(product['.key']);
        this.$firestore.products.doc( product['.key'] ).update({
          name: product.name,
          description: product.description,
          price: product.price,
           tags: product.tags,
           } );
        // this.product = ''
         $('#productModal').modal('hide');
          swal("Poof! Your  file has been updated!", {
          icon: "success",
          });

      },  

      addProductModal(){
        this.activeModal = 'add';
        this.resetForm();
        $('#productModal').modal('show');
        //  this.resetForm();
      },

      addTag(){
        console.log('pressing bress');
        this.product.tags.push( this.tag );
        this.tag = '';
      },

      uploadImage(e){

        if(e.target.files[0]){
          
        let file = e.target.files[0];
        // var storageRef = fb.storage().ref('products/' + file.name);
        var storageRef = fb.storage().ref(`products/${file.name}`);
        let uploadTask = storageRef.put(file);

        // console.log(file );
        uploadTask.on('state_changed', (snapshop)=>{ 

          },(error) =>{

          },()=> { 

            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=> {
              this.product.images.push(downloadURL);
              
              console.log('File available at', downloadURL);
            });
          });

        }
        
      },

      deleteImage(img, index){
        let image = fb.storage().refFromURL(img);
        this.product.images.splice(index,1);
        image.delete().then( ()=>{
          console.log('image deleted');
        }).catch( (error)=>{
          console.log('an error occured');
        });
      },
      resetForm(){
         this.product = {
        name : '',
        description : '',
        price : '',
        tags : [],
        images: [],
      }

      }
     


  },

   mounted(){
  
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.img-wrapper{
  position: relative;
}
.delete-img{
  position: absolute;
  top: -14px;
  right: -2px;
}
.img-wrapper span.delete-img:hover{
  cursor: pointer;
}

 
</style>
