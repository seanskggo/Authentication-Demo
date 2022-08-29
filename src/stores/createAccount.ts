import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export const createAccountStore = defineStore({
  id: 'createAccount',
  state: () => ({
    username: '',
    email: '',
    password: '',
  }),
  actions: {
    createAccount() {
      const auth = getAuth()
      if (!this.username) {
        console.log("Invalid Username")
        return 
      }
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then(async (res) => {
          await updateProfile(res.user, { displayName: this.username })
          console.log("REGISTERED")
          console.log(auth.currentUser)
        })
        .catch((e) => console.log(e.message))
    }
  }
})
