import { defineStore } from 'pinia'

export const loginStore = defineStore({
  id: 'login',
  state: () => ({
    email: '',
    password: '',
  }),
  actions: {
    createAccount() {
      console.log(this.password)
      console.log(this.email)
      console.log("ASdfasdfads")
    }
  }
})
