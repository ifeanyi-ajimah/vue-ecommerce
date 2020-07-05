<template>
  <div class="admin">
      
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
        <a id="show-sidebar" class="btn btn-sm btn-dark" href="#" @click="closeSideMenu">
            <i class="fas fa-bars"> </i>
        </a>
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand  -->
                <div class="sidebar-item sidebar-brand">
                    <a href="#">pro sidebar</a>
                    <div id="close-sidebar" @click="closeSideMenu">
                        <i class="fas fa-times"> </i>
                    </div>
                </div>
                <!-- sidebar-header  -->
                <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                    <div class="user-pic">
                        <img class="img-responsive img-rounded" src="img/user.jpg" alt="User picture">
                    </div>
                    <div class="user-info">
                        <span class="user-name">J
                            <strong>Smith</strong>
                        </span>
                        <span class="user-role">Admin</span>
                        <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
                    </div>
                </div>
                <!-- sidebar-search  -->
                <!-- <div class="sidebar-item sidebar-search">
                    <div>
                        <div class="input-group">
                            <input type="text" class="form-control search-menu" placeholder="Search...">
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div> -->

                <!-- sidebar-menu  -->
                <Adminsidebar> </Adminsidebar>
                <!-- sidebar-menu  -->
                
            </div>
            <!-- sidebar-footer  -->
            <div class="sidebar-footer">
                
                <div>
                    <a href="#">
                        <i class="fa fa-power-off"></i>
                    </a>
                </div>
                <div class="pinned-footer">
                    <a href="#">
                        <i class="fas fa-ellipsis-h"></i>
                    </a>
                </div>
            </div>
        </nav>
        <!-- page-content  -->
        <main class="page-content pt-2">
           <router-view/>
        </main>
        <!-- page-content" -->
    </div>
    <!-- page-wrapper -->

  </div>
</template>


<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Adminsidebar from '@/views/Adminsidebar.vue'

export default {
  name: 'admin',
  components: {
    Banner, Adminsidebar
  }, 
  methods:{
      closeSideMenu(){
        $(".page-wrapper").toggleClass("toggled");
      }
  }
}
</script>
