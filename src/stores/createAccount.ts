import { defineStore } from 'pinia'

export const createAccountStore = defineStore({
  id: 'createAccount',
  state: () => ({
    username: '',
    email: '',
    password: '',
  }),
  actions: {
    setUsername(username: string) {
      this.username = username
    },
    setPassword(password: string) {
      this.username = password
    },
    setEmail(email: string) {
      this.username = email
    },
    createAccount() {
      console.log(this.username)
      console.log(this.password)
      console.log(this.email)
    }
  }
})
