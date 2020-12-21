<template>
  <div class="profile">
    <div class="intro ">
      <div class="row justify-content-center aligh-content-center ">
        <div class="col-md-6">
          <h3>Profile Page</h3>
          <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. </P>
        </div>
        <div class="col-md-6">
          <img src="../../public/gull/svg/tour.svg" alt=""  >
          
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Profile</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Account Setting</a>
                </li>
                </ul>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                        <form>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <input type="text" class="form-control" v-model="profile.name" id="inputEmail4" placeholder="Full Name">
                              </div>
                              <div class="form-group col-md-6">
                                <input type="text" class="form-control" v-model="profile.phone" id="inputPassword4" placeholder="Phone">
                              </div>
                            </div>
                            <div class="form-group">
                              <input type="text" class="form-control" v-model="profile.address" id="inputAddress" placeholder="Address">
                            </div>

                            <div class="form-row">
                              <div class="form-group col-md-8">
                                <input type="text" class="form-control" v-model="profile.code" id="inputCity" placeholder="Post code">
                              </div>
                              <div class="form-group col-md-4">
                                  <input type="button" style="width: 100%" value="Save Changes" @click="updateProfile" class="btn btn-primary w-100"> 
                              </div>
                            </div>
                      </form>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                      <form>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <input type="text" class="form-control" v-model="account.name" id="inputEmail4" placeholder="User Name">
                              </div>
                              <div class="form-group col-md-6">
                                
                                <input type="email" class="form-control" v-model="account.email" id="inputPassword4" placeholder="Email">
                              </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <input type="password" class="form-control" v-model="account.password" id="inputEmail4" placeholder="Password">
                              </div>
                              <div class="form-group col-md-6">
                                <input type="password" class="form-control" v-model="account.confirmPassword" id="inputPassword4" placeholder="Confirm Password">
                              </div>
                            </div>
                           

                            <div class="form-row">
                              <div class="form-group col-md-4">
                                <input type="file" class="form-control" @change="uploadImage" id="inputCity" placeholder="Image">
                              </div>
                              <div class="form-group col-md-4">
                                  <input type="submit" @click="saveChanges" value="Save Changes" class="btn btn-primary w-100"> 
                              </div>
                              <div class="form-group col-md-4">
                                  <input type="button" style="width: 100%" @click="resetPassword" value="Reset Password Email" class="btn btn-success"> 
                              </div>
                             
                            </div>
                           
                      </form>


                </div>
                
              </div>

          </div>
        </div>
        
      </div>
    </div>

  </div>
</template>

<script>
import {fb, db} from '../firebase';
export default {
  name: 'profile',
  props: {
    msg: String
  },
  firestore(){
    const user = fb.auth().currentUser;
    return {
      profile: db.collection('profiles').doc(user.uid)
    }
  },
  data(){
      return{
        profile:{
          name:'',
          phone:'',
          address:'',
          code:'',
        },

        account:{
          name:'',
          email:'',
          photoUrl:'',
          emailVerified:'',
          password:'',
          confirmPassword:'',
          uid: '',
        },

      }
  },
  methods:{
    updateProfile(){
      this.$firestore.profile.update(this.profile);
    },
    uploadImage(){

    },
    saveChanges(){

    },

    resetPassword(){
      let auth = fb.auth();
        // console.log(auth.currentUser);
      auth.sendPasswordResetEmail(auth.currentUser.email).then(()=> {
          swal("Reset password email sent!", {
          icon: "success",
          });
          // Toast.fire({
          //   type: 'success',
          //   title: 'email sent'
          // });
        console.log('email sent');

      }).catch((error) => {
        console.log(error)
      });

    },

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
</style>
