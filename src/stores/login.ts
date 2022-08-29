import { defineStore } from 'pinia'
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { credentialsStore } from './credentials';

export const loginStore = defineStore({
  id: 'login',
  state: () => ({
    email: '',
    password: '',
  }),
  actions: {
    login() {
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then(async (res) => {
          const accessToken = await res.user.getIdToken()
          credentialsStore().setCreds({
            ...res.user,
            status: "Logged in successfully",
            accessToken,
            refreshToken: res.user.refreshToken
          })
          this.password = ''
          this.email = ''
        })
        .catch((e) => credentialsStore().status = e.message)
    }
  }
})
