import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
;('firebase/database')
;('firebase/auth')
;('firebase/storage')
import firebaseConfig from './fbConfig'
import '@/assets/styles/main.sass'

Vue.config.productionTip = false
Vue.use(firebase)
Vue.use(firebaseConfig)
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp(firebaseConfig)
    firebase.auth().onAuthStateChanged(async user => {
      const userTryAccessTo = this.$route.query.RedirectFrom
      if (user) {
        try {
          await this.$store.dispatch('letStayLoggedIn', user)
          if (userTryAccessTo) {
            this.$router.push(userTryAccessTo)
          } else return
        } catch (error) {
          this.$store.dispatch('activeError', error.message)
          $mount('#app')
          throw error
        }
        this.$store.dispatch('fetchUsersDB')
      }
    })
  }
}).$mount('#app')
