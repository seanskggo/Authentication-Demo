import { defineStore } from 'pinia'

export const createAccountStore = defineStore({
  id: 'createAccount',
  state: () => ({
    username: '',
    email: '',
    password: '',
  }),
  actions: {
    createAccount() {
      console.log(this.username)
      console.log(this.password)
      console.log(this.email)
      console.log("ASdfasdfads")
    }
  }
})
