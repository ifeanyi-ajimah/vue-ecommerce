<template>
  <div class="adminsidebar">
        <div class=" sidebar-item sidebar-menu">
                    <ul>
                        <li class="header-menu">
                            <span>Menu</span>
                        </li>
                        <li>
                             <router-link to="/admin/overview">
                                  <i class="fa fa-chart-line"></i>
                                  <span>Overview</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/products">
                                <i class="fa fa-chart-line"></i>
                                <span>Products </span>
                           </router-link>
                        </li>



                    </ul>
                </div>
  </div>
</template>

<script>
export default {
  name: 'Adminsidebar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
</style>
