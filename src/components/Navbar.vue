<template>
  <div class="navbar">

    <nav class="container-fluid navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/" > Vue Ecommerce</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
                <router-link to="/" class="nav-link" >Home </router-link>
            </li>
            <li class="nav-item">
                <router-link to="about" class="nav-link"> About </router-link>
            </li>
            <li class="nav-item">
                <router-link to="contact" class="nav-link" > Contact </router-link>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <a class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</a>
            <a class="btn btn-outline-success my-2 my-sm-0" type="submit" data-toggle="modal" data-target="#loginModal">Login</a>
            </form>
        </div>
        <Login></Login>
    </nav>

  </div>
</template>

<script>

//  import Login from '@/components/Login.vue'
 import Login from './Login.vue'

export default {
  name: 'navbar',
   components: {
        Login,
  }, 
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
