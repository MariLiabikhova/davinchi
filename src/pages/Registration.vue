<template>
  <div class="main h-100vh d-flex align-items-center">
    <div class="container main__container">
      <div class="main__content  py-5 d-flex">
        <div class="ml-100 w-35 mr-30">
          <router-link to="/" class="link mb-50 link__logo">DVCh</router-link>
          <h2 class="main__h2 mb-25 pl-50">Registration :</h2>
          <div class="py-30 px-70 main__navy">
            <div>
              <div>
                <label class="main__label">Email:</label>
                <input type="email" v-model="email" class="main__input" :class="{form__valid: isEmailValid , form__error: !isEmailValid}"> 
              </div>
              <div>
                <label class="main__label">Password:</label>
                <input type="password" v-model="password" class="main__input mb-0" @focus="isActive" :class="{form__valid: isPassvordValid , form__error: !isPassvordValid}"> 
                <div class="form__memo"><p class="main__text lh--14 text--12 py-10" :class="{form__invisible: !memo}">At least 1 uppercase and 1 lowercase letter, one number. At least 6 characters</p></div>
              </div>
              <div class=" mb-50">
                <label class="main__label">Password confirm:</label>
                <input type="password" v-model="passwordConfirm" class="main__input" :class="{form__valid: isPasswordConfirm , form__error: !isPasswordConfirm}"> 
              </div>
              <div  class=" d-flex">
                <button class="mr-15 w-50 main__btn main__btn--gradient" 
                  @click="isSubmit"
                  type="submit"
                  :disabled="!isFormValid">
                  Create account
                </button>
                <button type="button"  class="main__btn w-50" @click="onMain">
                  Back
                </button>
              </div>
              
            </div>
          </div>
        </div>
        <div class="w-40 ml-30 mt-15">
          <div class="w-70 img__wrap px-50 py-50  mb-60">
            <img :src="require('@/assets/img/camera.png')" alt="camera lens picture" class="w-100 img">
          </div>
          <div class="d-flex w-70 justify-content-between">
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
      password: '',
      passwordConfirm: '',
      memo: false
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
            this.$router.push('/')
            // this.$bus.$emit('showModal')
          })
          .catch(() => {
            console.log('error')
            // this.$bus.$emit('showModal')
          })
      }
    },
    onMain() {
      this.$router.push('/')
    },
    isActive() {
      this.memo = true
    }
  }
}
</script>
