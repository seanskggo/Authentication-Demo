import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { credentialsStore } from './credentials'

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
          cred.status = "Registered and logged in successfully" 
          cred.username = res.user.displayName ? res.user.displayName : 'N/A'
          cred.email = res.user.email ? res.user.email : 'N/A'
          cred.uid = res.user.uid ? res.user.uid : 'N/A'
          cred.accessToken = accessToken ? accessToken : 'N/A'
          cred.refreshToken = res.user.refreshToken ? res.user.refreshToken : 'N/A'
        })
        .catch((e) => console.log(e.message))
    }
  }
})
