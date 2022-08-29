import { defineStore } from 'pinia'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { credentialsStore } from './credentials';

export const resetPasswordStore = defineStore({
  id: 'login',
  state: () => ({
    email: '',
  }),
  actions: {
    resetPassword() {
      const cred = credentialsStore()
      sendPasswordResetEmail(getAuth(), this.email)
        .then(async () => {
          cred.status = 'Reset email sent successfully'
          this.email = ''
        })
        .catch((e) => cred.status = e.message)
    }
  }
})
