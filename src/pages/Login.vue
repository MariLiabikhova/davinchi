<template>
  <div class="main h-100vh d-flex align-items-center">
    <div class="container main__container">
      <div class="main__content main__content--home py-5 d-flex">
        <div class="ml-100 w-35 mr-30 mb-70">
          <router-link to="/" class="link mb-70 link__logo">DVCh</router-link>
          <h2 class="main__h2 mb-20 pl-30">Login:</h2>
          <div class="py-50 px-70 main__navy">
            <div>
              <div>
                <label class="main__label">Email:</label>
                <input type="email" v-model="email" class="input" :class="{form__valid: isEmailValid , form__error: !isEmailValid}"> 
              </div>
              <div>
                <label class="main__label">Password:</label>
                <input type="password" v-model="password" class="input"  :class="{form__valid: isPassvordValid , form__error: !isPassvordValid}"> 
              </div>
      
              <div  class=" d-flex">
                <button class="mr-15 w-50 main__btn main__btn--gradient" 
                  @click="onSubmit"
                  type="submit"
                  :disabled="!isFormValid">
                  Login
                </button>
                <button type="button"  class="main__btn w-50" @click="onMain">
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-40 ml-30 mt-15">
          <div class="w-70 img__wrap img__wrap--camera px-50 py-50  mb-60">
            <img :src="require('@/assets/img/camera.png')" alt="camera lens picture" class="w-100 img img--camera">
          </div>
          <div class="d-flex ml-10 w-70 justify-content-between">
            <router-link to="#" class="link link__lines lh--14 text--18">Order<br><span class='text--14 main__text'>a project</span></router-link>
            <router-link to="#" class="link link__lines link__lines--second lh--14 text--18">Сustomer<br><span class='text--14 main__text'>reviews</span></router-link>
            <router-link to="#" class="link link__lines link__lines--third lh--14 text--18">Abouts<br><span class='text--14 main__text'>us</span></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isEmailValid() {
      const regexp = /(?=^.{4,}$).+@.+\..+/i
      return this.email.match(regexp)
    },
    isPassvordValid() {
      return this.password.length > 6
    },
    isFormValid() {
      return this.isEmailValid && this.isPassvordValid
    }
  },
  // created() {
  //   if (this.$route.query['loginError']) {
  //     this.$store.dispatch('activeError', 'My friend, try login')
  //     this.$store.dispatch('isErrorColor')
  //     this.$bus.$emit('showModal')
  // }
  // },
  methods: {
    onSubmit() {
      if (this.isFormValid) {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store
          .dispatch('loginUser', user)
          .then(() => {
            this.$router.push('/')
            // this.$bus.$emit('showModal')
          })
          .catch(() => {
            // this.$bus.$emit('showModal')
          })
      }
    },
    onMain() {
      this.$router.push('/')
    }
  }
}
</script>
