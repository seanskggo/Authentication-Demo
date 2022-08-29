import { defineStore } from 'pinia'

export const loginStore = defineStore({
  id: 'login',
  state: () => ({
    email: '',
    password: '',
  }),
  actions: {
    login() {
      console.log(this.password)
      console.log(this.email)
      console.log("ASdfasdfads")
    }
  }
})
