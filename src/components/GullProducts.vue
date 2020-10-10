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
                                    <!--  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> --
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
      <div class="row justify-content-center">
           
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th> Price </th>
                  <th> index </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(prod, index) in products" :key="index">
                  <td >  {{ prod.name}}  </td>
                  <td> {{ prod.price}} </td>
                  <td> {{ index}} </td>
                </tr>
              </tbody>
            </table>
      </div>
    </div>

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

    }

  },
  methods:{

      saveData(){
        db.collection("Products").add( this.product )
          .then((docRef) => {   // ensure to always use fat arrow function in your promise, so that you can be able to call other functions using the this keyword
             
            this.getData();
              // console.log( docRef );
              //  this.reset();
              // console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
              console.error("Error adding document: ", error);
          });
      },
      reset(){
        Object.assign(this.$data, this.$options.data.apply(this));
      },

      getData(){

          db.collection("Products").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              this.products.push( doc.data() );
              console.log(doc.id, " => ", doc.data());
          });
          });
          
      }

  },
   mounted(){
    this.getData();
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
</style>
