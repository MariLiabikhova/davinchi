<template><div></div>
  <!-- <div class="main h-100vh d-flex align-items-center">
    <div class="container">
      <div class="main__content py-5 d-flex">
        <div class="ml-100 w-35">
          <router-link to="#" class="link mb-100 link__logo">DVCh</router-link>
          <div class="ml-90 mr-60 main__navy">
            <form ref="form">
              <div>
                <div>
                  <label>Email:</label>
                </div>
                <div>
                  <input type="email" v-model="email" :class="{form__valid: isEmailValid , form__error: !isEmailValid}"> 
                </div>
              </div>
              <div>
                <div>
                  <label>Password:</label>
                </div>
                <div>
                  <input type="password" v-model="password" :class="{form__valid: isPassvordValid , form__error: !isPassvordValid}"> 
                </div>
              </div>
              <div>
                <div>
                  <label>Password confirm:</label>
                </div>
                <div>
                  <input type="passwordConfirm" v-model="passwordConfirm" :class="{form__valid: isPasswordConfirm , form__error: !isPasswordConfirm}"> 
                </div>
              </div>
              <button
                @click="isSubmit"
                :disabled="!isFormValid"
                >Login
              </button>
            </form>
          </div>
        </div>
        <div class="w-40 ml-30 mt-15">
          <div class="w-70 img__wrap px-50 py-50  mb-60">
            <img :src="require('@/assets/img/camera.png')" alt="camera lens picture" class="w-100 img">
          </div>
        </div>
      </div>
    </div>
  </div> -->


    <!-- OLD CODE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
  <!-- <div class="wrapp"> -->
    <!-- <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
          <v-card class="elevation-24">
            <v-toolbar dark color=" blue lighten-1">
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  prepend-icon="mdi-email"
                  name="email"
                  label="Email"
                  type="email"
                  v-model="email"
                  :rules="emailRules"
                  required
                >
                </v-text-field>
                <v-text-field
                  prepend-icon="mdi-lock"
                  name="password"
                  label="Password"
                  type="password"
                  :rules="passwordRules"
                  :counter="6"
                  v-model="password"
                  required
                >
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                dark
                color="blue lighten-1"
                @click="isSubmit"
                :disabled="!valid"
                >Login</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container> -->
  <!-- </div> -->
</template>

// <script>
// export default {
//   data() {
//     return {
//       email: '',
//       password: '',
//       passwordConfirm: ''
//     }
//   },
// created() {
// if (this.$route.query['loginError']) {
//   this.$store.dispatch('activeError', 'My friend, try login')
//   this.$store.dispatch('isErrorColor')
//   this.$bus.$emit('showModal')
// }
// },
// methods: {
// isSubmit() {

// if (this.$refs.form == valid) {
//   const user = {
//     email: this.email,
//     password: this.password
//   }
//   this.$store
//     .dispatch('loginUser', user)
//     .then(() => {
//       this.$router.push('/')
//       // this.$bus.$emit('showModal')
//       alert('success')
//     })
//     .catch(() => {
//       // this.$bus.$emit('showModal')
//       alert('fail')
//     })
// }
</script>
