import { defineStore } from 'pinia'

export const credentialsStore = defineStore({
  id: 'credentials',
  state: () => ({
    status: '',
    username: '',
    token: '',
    uid: '',
    email: '',
  })
})
