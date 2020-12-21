<template>
 

    
 <div class="app-admin-wrap layout-sidebar-large">

        <!--==========  Navbar Start   ==========-->
        <Gullnavbar :email="email" @log-user-out="logout" > </Gullnavbar>
        <!--==========  Navbar End    ==========-->
        

       <!-- ========== Side bar Start  ========== -->
       
            <Gullsidebar></Gullsidebar>  
        <!-- =============== Left side End ================-->
        <div class="main-content-wrap sidenav-open d-flex flex-column">
            <!-- ============ Body content start ============= -->

                        <router-view/>

            <!-- ============ Body content end ============= -->

            <!-- Footer Start -->
            <div class="flex-grow-1"></div>
                     <Adminfooter> </Adminfooter>
            <!-- fotter end -->
        </div>
    </div>

</template>


<script>
// @ is an alias to /src
import {fb} from '../firebase'
import Adminfooter from '@/views/GullAdminFooter.vue'
import Gullsidebar from '@/views/Gullsidebar.vue'
import Gullnavbar from '@/views/Gullnavbar.vue'

export default {
  name: 'admin',
  data(){
      return{
          name: null,
          email: ''
      }
  },
  components: {
        Adminfooter, Gullsidebar, Gullnavbar 
  }, 

  methods:{

       logout(){
          fb.auth().signOut()
          .then( () => {
              this.$router.replace('/');
          })
          .catch( (err) => {
              console.log(err);
          }); 
      },

      // closeSideMenu(){
      //   $(".page-wrapper").toggleClass("toggled"); } //this is how you can add jQuery to your component.

  }, 
  mounted(){
      var user = fb.auth().currentUser;
      if(user){
          this.email = user.email
      }
      
  }

}
</script>

<style lang="css" >



</style>

