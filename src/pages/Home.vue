<template>
  <div class="main h-100vh d-block">
    <div class="container">
      <div class="main__content h-100vh py-30 py-md-50 py-lg-70">
        <div class="pl-lg-100">
          <p class="pb-80 main__logo">DVCh</p>
          <h1 class="main__h1"> Da-Vinchi Network. Bringing it all Tohether!</h1>
        </div>
      </div>
    </div>
    <!-- <div class="content-wrapper">
      <v-card class="content">
        <v-container class="correct-conteiner" fluid>
          <v-row class="correct-conteiner">
            <v-col cols="12" class="correct-conteiner">
              <v-row class="correct-conteiner">
                <v-col cols="6" class="correct-conteiner">
                  <div class="main_page-display display_bg-1"></div
                ></v-col>
                <v-col cols="6" class="correct-conteiner">
                  <div class="main_page-display display_bg-2">
                    <div v-if="!onSystem" class="right">
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" text @click="onLogin">
                        Login
                      </v-btn>
                      <v-btn color="green darken-1" text @click="onReg">
                        Registation
                      </v-btn>
                    </div>
                    <div v-else>
                      <v-btn color="green darken-1" text @click="onUserPage">
                        My Page
                      </v-btn>
                      <v-btn color="green darken-1" text @click="onLogout">
                        logout
                      </v-btn>
                    </div>
                  </div></v-col
                >
                <v-col
                  cols="6"
                  v-for="bg in bgs"
                  :key="bg.id"
                  class="correct-conteiner"
                >
                  <div class="main_page-display" :class="bg"></div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div> -->
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       bgs: ['display_bg-3', 'display_bg-4']
//     }
//   },
//   methods: {
//     onLogin() {
//       this.$router.push(`/login`)
//     },
//     onReg() {
//       this.$router.push(`/registration`)
//     },
//     onUserPage() {
//       this.$store.dispatch('fetchUsersDB').then(() => {
//         this.$router.push(`/current_user`)
//       })
//     },
//     onLogout() {
//       this.$store.dispatch('logoutUser')
//     }
//   },
//   computed: {
//     onSystem() {
//       return this.$store.getters.userLoggedIn
//     }
//   }
// }
</script>