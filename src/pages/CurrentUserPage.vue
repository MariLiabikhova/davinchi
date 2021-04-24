<template>
  <div class="main h-100vh d-flex align-items-center">
    <div class="container main__container h-100vh d-flex">
      <Navbar/>
      <section v-if="currentUser" class="main__navy main__navy--card w-40 mx-auto">
        <div class="wrapper wrapper--out mx-auto">
          <div class="wrapper wrapper--in">
            <div class=" img__wrap--card mb-20">
              <div class="wrapper--pseudo img__wrap">
                <img class="img" :src="currentUser.imgSrc">
              </div>
            </div>
          </div>
        </div>
        <h2 class="main__h2 my-20 ">{{ currentUser.name }} {{ currentUser.secondName }}</h2>
        <p class="main__text ml-10 text--uppercase">{{currentUser.role}}</p>
        <div class="d-flex mb-5 align-items-end">
          <p class="main__text main__text--small">nickname:</p>
          <p class="main__text main__text main__text--upper">{{currentUser.nickname}}</p>
        </div>
        <div class="d-flex mb-5  align-items-end">
          <p class="main__text main__text main__text--upper">{{currentUser.age}}</p>
          <p class="main__text main__text--small mx-5">years old,</p>
          <p class="main__text main__text main__text--upper">{{currentUser.gender}}</p>
        </div>
        <div class="d-flex mb-5  align-items-end">
          <p class="main__text main__text--small">email:</p>
          <p class="main__text main__text main__text--upper">{{currentUser.email}}</p>
        </div>
        <div class="d-flex mb-5  align-items-end">
          <p class="main__text main__text--small">aid:</p>
          <p class="main__text main__text main__text--upper">{{currentUser.aid}}</p>
        </div>
        <div class="d-flex mb-5  align-items-end">
          <p class="main__text main__text--small">dbId:</p>
          <p class="main__text main__text main__text--upper">{{currentUser.dbId}}</p>
        </div>
        <div class="wrapper--btn w-70">
          <button class="w-50 mr-15 main__btn main__btn--gradient" @click="onUserPage">
            Edit page
          </button>
          <button class="w-50 main__btn"  @click="onLogout">
            Delete profile
          </button>
        </div>
      </section>
      <section v-else>
        <div class="main__content main__content--afterreg ml-40 py-10">
          <CreateUser />
        </div>
      </section>
    </div>
  </div>

    <!-- <div class="card-wrapper">
      <v-card class="main">
        <v-container class="correct-fluid" fluid>
          <v-row class="correct-fluid">
            <Navbar/>
            <v-col class="no-padding" cols="8" xs="8" sm="8" md="9">
              <v-card class="main_right-part" height="100%">
                <section v-if="currentUser">
                  <div class="user_wrap">
                    <v-card class="user-card">
                      <v-img
                        height="200px"
                        src="https://i.sunhome.ru/journal/225/chudesa-chudesa-hristianstva-v2.orig.jpg"
                      >
                        <v-card-title class="white--text mt-8 nowrapp">
                          <h1 class="ml-3 word_nowrapp">
                            {{ currentUser.name }}
                            {{ currentUser.secondName }}
                          </h1>
                          <v-spacer></v-spacer>
                          <v-avatar size="150"
                            ><img
                              class="img_avatar"
                              alt="user"
                              :src="currentUser.imgSrc"
                          /></v-avatar>
                        </v-card-title>
                      </v-img>

                      <v-card-text class="card_background">
                        <v-card-subtitle>
                          <p class="card__subtitle">
                            aid:
                            <span class="card__describe">{{
                              currentUser.aid
                            }}</span>
                          </p>
                          <p class="card__subtitle">
                            Gender:
                            <span class="card__describe">{{
                              currentUser.gender
                            }}</span>
                          </p>
                          <p class="card__subtitle">
                            Role:
                            <span class="card__describe">{{
                              currentUser.role
                            }}</span>
                          </p>
                          <p class="card__subtitle">
                            eMail:
                            <span class="card__describe">{{
                              currentUser.email
                            }}</span>
                          </p>
                          <p class="card__subtitle">
                            Nickname:
                            <span class="card__describe">{{
                              currentUser.nickname
                            }}</span>
                          </p>
                          <p class="card__subtitle">
                            Age:
                            <span class="card__describe">{{
                              currentUser.age
                            }}</span>
                          </p>
                          <p class="card__subtitle">
                            dbId:
                            <span class="card__describe">{{
                              currentUser.dbId
                            }}</span>
                          </p>
                        </v-card-subtitle>
                        <div class="wrapper_line_style">
                          <EditUser :editUser="currentUser" />
                          <DeletUser />
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </section>
                <section v-else>
                  <CreateUser />
                </section>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div> -->
</template>

<script>
import Navbar from '../components/Navbar.vue'
import CreateUser from '../components/CreateUser.vue'
export default {
  components: { Navbar, CreateUser },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser
    }
  }
  // import EditUser from '../components/EditUser.vue'
  // import DeletUser from '../components/DeletUser.vue'
  // import CreateUser from '../components/CreateUser.vue'
  // import Navbar from '../components/Navbar.vue'
  // export default {
  //   components: { EditUser, DeletUser, CreateUser, Navbar },
  //   computed: {
  //     currentUser() {
  //       return this.$store.getters.currentUser
  //     },
  //     loading() {
  //       return this.$store.getters.loading
  //     }
  //   }
}
</script>
