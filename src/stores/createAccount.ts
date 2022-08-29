import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { credentialsStore } from './credentials'
import { setCreds } from '@/lib/utils'

const cred = credentialsStore()

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
        cred.status = "Invalid Username"
        return
      }
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then(async (res) => {
          await updateProfile(res.user, { displayName: this.username })
          const accessToken = await res.user.getIdToken()
          setCreds({
            ...res.user,
            status: "Registered and logged in successfully",
            accessToken,
            refreshToken: res.user.refreshToken
          })
          this.username = ''
          this.password = ''
          this.email = ''
        })
        .catch((e) => cred.status = e.message)
    }
  }
})
