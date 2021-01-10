import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[]
  },
  mutations: {

    addToCart(state, item){
      let found = state.cart.find( product => 
        product.productID  == item.productID
      );
      if( found ){
        found.productQty++;
      }else{
      // console.log(item);
      state.cart.push(item);
      }
    
    },
    closeModal()
    {
      $('#mini-cart-modal').modal('hide');
    }
  },
  actions: {
  },
  modules: {
  }
})

// find function
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element > 10);


