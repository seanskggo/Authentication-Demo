import { defineStore } from 'pinia'

export const resetPasswordStore = defineStore({
  id: 'login',
  state: () => ({
    email: '',
  }),
  actions: {
    createAccount() {
      console.log(this.email)
      console.log("ASdfasdfads")
    }
  }
})
