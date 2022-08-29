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
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then(async (res) => {
          await updateProfile(res.user, { displayName: 'BOBBY' })
          console.log("REGISTERED")
          console.log(auth.currentUser)
        })
        .catch((e) => console.log(e.message))
    }
  }
})
