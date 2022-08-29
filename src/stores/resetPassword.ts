import { defineStore } from 'pinia'

export const resetPasswordStore = defineStore({
  id: 'login',
  state: () => ({
    email: '',
  }),
  actions: {
    resetPassword() {
      console.log(this.email)
      console.log("ASdfasdfads")
    }
  }
})
