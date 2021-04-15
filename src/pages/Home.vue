<template>
  <div class="main h-100vh d-flex align-items-center">
    <div class="container  main__container">
      <div class="main__content d-flex py-5">
        <div class="ml-100 w-35">
          <router-link to="#" class="link mb-30 link__logo">DVCh</router-link>
          <h1 class="main__h1 mb-20"> Da-Vinchi Network. Bringing it all Tohether!</h1>
          <p class="mb-20 main__text">Join us for easy communication and bringing great ideas to the development of client applications</p>
          <div v-if="onSystem" class="mb-60 d-flex ">
            <button class="w-50 mr-15 main__btn main__btn--gradient"  @click="onUserPage">
              My Page
            </button>
            <button class="w-50 main__btn"  @click="onLogout">
              logout
            </button>
          </div>
          <div v-else class="mb-60  d-flex">
            <button class="mr-15 w-50 main__btn main__btn--gradient" @click="onLogin">
              Login
            </button>
            <button class="main__btn w-50" @click="onReg">
              Registation
            </button>
          </div>
          <div class="ml-90 mr-60 main__navy">
            <p class="main__text mb-0">The freshest decisions</p>
            <h2 class="mb-30 main__h2 main__h2--pseudo">Since 2021</h2>
            <p class="main__text mb-10">Enjoy the team</p>
            <router-link to="#" class="link link--btnstyle w-100  mb-10">know more</router-link>
            <p class="main__text">join our collaborator</p>
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
export default {
  //   data() {
  //     return {
  //       bgs: ['display_bg-3', 'display_bg-4']
  //     }
  //   },
  methods: {
    onLogin() {
      this.$router.push(`/login`)
    },
    onReg() {
      this.$router.push(`/registration`)
    },
    onUserPage() {
      this.$store.dispatch('fetchUsersDB').then(() => {
        this.$router.push(`/current_user`)
      })
    },
    onLogout() {
      this.$store.dispatch('logoutUser')
    }
  },
  computed: {
    onSystem() {
      return this.$store.getters.userLoggedIn
    }
  }
}
</script>
