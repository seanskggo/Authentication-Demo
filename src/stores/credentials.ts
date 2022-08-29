import { defineStore } from 'pinia'

export const credentialsStore = defineStore({
  id: 'credentials',
  state: () => ({
    status: 'Logged out',
    username: '',
    accessToken: '',
    refreshToken: '',
    uid: '',
    email: '',
  })
})
