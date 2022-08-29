import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { credentialsStore } from './credentials'

export const createAccountStore = defineStore({
  id: 'createAccount',
  state: () => ({
    username: '',
    email: '',
    password: '',
  }),
  actions: {
    createAccount() {
      if (!this.username) {
        credentialsStore().status = "Invalid Username"
        return
      }
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then(async (res) => {
          await updateProfile(res.user, { displayName: this.username })
          const accessToken = await res.user.getIdToken()
          credentialsStore().setCreds({
            ...res.user,
            status: "Registered and logged in successfully",
            accessToken,
            refreshToken: res.user.refreshToken
          })
          this.username = ''
          this.password = ''
          this.email = ''
        })
        .catch((e) => credentialsStore().status = e.message)
    }
  }
})
