import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let cartFromLocalStorage = JSON.parse(window.localStorage.getItem('cart')) ;

export default new Vuex.Store({
  state: {
    
    cart: cartFromLocalStorage ? cartFromLocalStorage : [] ,
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
      // window.localStorage.setItem('cart', JSON.stringify(state.cart) );
      this.commit('savePersistentData');

    },

    closeModal()
    {
      $('#mini-cart-modal').modal('hide');
    },

    openCheckoutPage(state){
       $('#mini-cart-modal').modal('hide');
    }, 

    savePersistentData(state){
      window.localStorage.setItem('cart', JSON.stringify(state.cart) );
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


