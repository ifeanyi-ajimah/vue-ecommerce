<template>
 
 <div class="app-admin-wrap layout-sidebar-large">

        <!--==========  Navbar Start   ==========-->
        <Gullnavbar> </Gullnavbar>
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
import Adminfooter from '@/views/GullAdminFooter.vue'
import Gullsidebar from '@/views/Gullsidebar.vue'
import Gullnavbar from '@/views/Gullnavbar.vue'

export default {
  name: 'admin',
  components: {
Adminfooter, Gullsidebar, Gullnavbar
  }, 
  methods:{
      closeSideMenu(){
        $(".page-wrapper").toggleClass("toggled");
      }
  }
}
</script>

<style lang="stylus" >


  

</style>

