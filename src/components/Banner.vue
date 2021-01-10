<template>
  <div class="banner mb-5 mt-4">
      <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
              <div class="col-md-5">
                  <div class="banner-content">
                      <h1 class="banner-title">
                          Vue Shop For Devs Only 
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adip . Lorem ipsum dolor sit amet consectetur adip . Quios
                        Lorem ipsum dolor sit amet consectetur adip . Quios Lorem ipsum dolor sit amet consectetur adip . Quios
                      </p>
                      <div class="banner-btn mt-5">
                          <button class="btn custom-btn btn-info mr-4"> Explore </button>
                          <button class="btn custom-btn btn-outline-secondary"> Products </button>
                      </div>
                  </div>
              </div>
              <div class="col-md-7">
                  <div class="graphic">
                      <img width="100%" src="/img/bud/hello.jpg" alt="">
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
</style>
