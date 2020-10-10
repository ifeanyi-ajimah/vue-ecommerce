import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery';
import {fb} from './firebase'

window.$ = window.jQuery = jQuery;



import 'popper.js';
import 'bootstrap';
import './assets/app.scss' //imports all the css files . but css files has to be imported into the app.scss file

Vue.component('Navbar', require('./components/Navbar.vue').default); //.default appends the component name to the imported component
Vue.config.productionTip = false;

//codes before vue instantiation are to check for authentication of user before redering
let app = '';
fb.auth().onAuthStateChanged( function(user) {
     if( !app){

              new Vue({
                router,
                store,
                render: h => h(App)
              }).$mount('#app')

     }
});






