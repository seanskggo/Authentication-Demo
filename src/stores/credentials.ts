import { getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
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
  }),
  actions: {
    setCreds(creds: {
      status: string | null;
      displayName: string | null;
      email: string | null;
      accessToken: string | null;
      refreshToken: string | null;
      uid: string | null;
    }) {
      const { displayName, status, email, accessToken, refreshToken, uid } = creds
      console.log(refreshToken)
      if (status) this.status = status
      this.username = displayName ? displayName : 'N/A'
      this.email = email ? email : 'N/A'
      this.uid = uid ? uid : 'N/A'
      this.accessToken = accessToken ? accessToken.substring(0, 50) + '...' : 'N/A'
      this.refreshToken = refreshToken ? refreshToken.substring(0, 50) + '...' : 'N/A'
    },
    loginWithGoogle() {
      signInWithPopup(getAuth(), new GoogleAuthProvider)
        .then(async (res) => {
          const accessToken = await res.user.getIdToken()
          this.setCreds({
            ...res.user,
            status: "Logged in successfully via Google",
            accessToken,
            refreshToken: res.user.refreshToken
          })
        })
        .catch((e) => this.status = e.message)
    }
  }
})
