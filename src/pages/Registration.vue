<template>
  <div class="main h-100vh d-flex align-items-center">
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
                >Create account
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
  </div>
</template>





// export default {
//   data() {
//     return {
//       valid: false,
//       email: '',
//       password: '',
//       confirmPassword: '',
//       emailRules: [
//         v => !!v || 'E-mail is required',
//         v => /.+@.+/.test(v) || 'E-mail must be valid'
//       ],
//       passwordRules: [
//         v => !!v || 'Password is required',
//         v =>
//           v.length >= 6 || 'Password must be equal or than  than 6 characters'
//       ],
//       confirmPasswordRules: [
//         v => !!v || 'Password is required',
//         v => v === this.password || 'Password should match'
//       ]
//     }
//   },
//   methods: {
//     isSubmit() {
//       if (this.$refs.form.validate()) {
//         const user = {
//           email: this.email,
//           password: this.password
//         }
//         this.$store
//           .dispatch('registrationUser', user)
//           .then(() => {
//             this.$router.push('/current_user')
//             this.$bus.$emit('showModal')
//           })
//           .catch(() => {
//             this.$bus.$emit('showModal')
//           })
//       }
//     }
//   }
// }
//

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      passwordConfirm: ''
    }
  },
  computed: {
    isEmailValid() {
      const regexp = /(?=^.{4,}$).+@.+\..+/i
      return this.email.match(regexp)
    },
    isPassvordValid() {
      const regexp = /(?=^.{6,}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?!.*\s).*$/
      return this.password.match(regexp)
    },
    isPasswordConfirm() {
      return this.password == this.passwordConfirm
    },
    isFormValid() {
      return this.isEmailValid && this.isPassvordValid && this.isPasswordConfirm
    }
  },
  methods: {
    isSubmit() {
      if (this.isFormValid) {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store
          .dispatch('registrationUser', user)
          .then(() => {
            this.$router.push('/current_user')
            // this.$bus.$emit('showModal')
          })
          .catch(() => {
            console.log('error')
            // this.$bus.$emit('showModal')
          })
      }
    }
  }
}
</script>
