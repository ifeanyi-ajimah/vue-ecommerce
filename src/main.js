import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap';
import './assets/app.scss' //imports all the css files . but css files has to be imported into the app.scss file

Vue.component('Navbar', require('./components/Navbar.vue').default); //.default appends the component name to the imported component
// Vue.component('Banner', require('./components/Banner.vue').default); //.default appends the component name to the imported component

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')




