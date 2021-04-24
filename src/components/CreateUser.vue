<template>
  <section v-if="!loading">
    <h2 class="main__h2 mb-25 ">Please, enter your data :</h2>
    <div class="d-flex flex-wrap">
      <div class="w-50 mb-20">
        <label class="main__label mb-0">First name*:</label>
        <input v-model="name" class="input input--start"> 
      </div>
      <div class="w-50 mb-20">
        <label class="main__label mb-0">Last name*:</label>
        <input v-model="secondName" class="input input--start"> 
      </div>
      <div class="w-50 mb-20">
        <label class="main__label mb-0">Nickname*:</label>
        <input v-model="nickname" class="input input--start"> 
      </div>
      <div class="w-50 mb-20">
        <label class="main__label mb-0">Age*:</label>
        <input v-model="age" class="input input--start"> 
      </div>

      <div class="w-50 mb-20">
        <label class="main__label mb-0">Gender*:</label>
        <select v-model="gender" class="input input--start" >
          <option v-for="gender in genders" :key="gender.id">{{gender}}</option>
        </select>
      </div>

      <div class="w-50 mb-20">
        <label class="main__label mb-0">Role*:</label>
        <select v-model="role" class="input input--start" >
          <option v-for="role in roles" :key="role.id">{{role}}</option>
        </select>
      </div>
      <p class="text--12 w-100">*indicates required field</p>
      

      <div v-if="imgSrc" class=" w-100 mb-30">
        <div class="img__wrap img__wrap--upload">
          <img :src="imgSrc" class="img"/>
        </div>
      </div>
      <div class="w-50">
        <button @click="addPhoto" class="main__btn mb-50 w-70">
          Upload profile photo
          <img :src="require('@/assets/img/i-download.png')"  class="main__icon"/>
        </button>
        <input
          ref="add"
          type="file"
          accept="image/*"
          style="display: none"
          @change="onFileChange"
        />
      </div>
      <button
        ref="createBtn"
        :disabled="!isFormValid || !img"
        @click="createUser"
        class="main__btn main__btn--gradient w-33"
      >
        Save
      </button>

    </div>
  </section>
  <section v-else>
    <v-container>
      <v-row>
        <v-col xs="12" class="text-center ">
          <v-progress-circular
            :size="100"
            :width="4"
            indeterminate
            color="black"
          ></v-progress-circular>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      roles: ['Administrator', 'Client', 'Editor', 'Guest'],
      genders: ['Female', 'Male'],
      number: Number,
      img: null,
      imgSrc: '',
      name: '',
      secondName: '',
      nickname: '',
      age: '',
      gender: '',
      role: ''
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    },
    isNameValid() {
      return this.name.length > 1
    },
    isSecondNameValid() {
      return this.secondName.length > 1
    },
    isNicknameValid() {
      return this.nickname.length > 1
    },
    isAgeValid() {
      const regexp = /^\+?[1-9][0-9]\d{0,1}$/
      return this.age.match(regexp)
    },
    isGenderValid() {
      return this.gender
    },
    isRoleValid() {
      return this.role
    },
    isFormValid() {
      return (
        this.isNameValid &&
        this.isSecondNameValid &&
        this.isNicknameValid &&
        this.isGenderValid &&
        this.isRoleValid &&
        this.isAgeValid
      )
    }
  },
  methods: {
    async createUser() {
      try {
        if (this.isFormValid && this.img) {
          const user = {
            name: this.name,
            secondName: this.secondName,
            nickname: this.nickname,
            age: this.age,
            gender: this.gender,
            role: this.role,
            img: this.img
          }
          this.$store.dispatch('setLoading', true)
          await this.$store.dispatch('createUser', user)
          this.$store.dispatch('setLoading', false)
        }
      } catch (error) {
        throw error
      }
    },
    addPhoto() {
      this.$refs.add.click()
    },
    onFileChange(event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = e => {
        this.imgSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.img = file
    }
  }
}
</script>
