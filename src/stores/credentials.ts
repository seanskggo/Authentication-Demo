import { deleteUser, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, type User } from '@firebase/auth';
import { defineStore } from 'pinia'

export const credentialsStore = defineStore({
  id: 'credentials',
  state: () => ({
    user: {} as User,
    status: 'User not logged in',
    username: '',
    accessToken: '',
    refreshToken: '',
    uid: '',
    email: '',
  }),
  actions: {
    setCreds(user: User, creds: {
      status: string | null;
      displayName: string | null;
      email: string | null;
      accessToken: string | null;
      refreshToken: string | null;
      uid: string | null;
    }) {
      this.user = user
      const { displayName, status, email, accessToken, refreshToken, uid } = creds
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
          this.setCreds(res.user, {
            ...res.user,
            status: "Logged in successfully via Google",
            accessToken,
            refreshToken: res.user.refreshToken
          })
        })
        .catch((e) => this.status = e.message)
    },
    loginWithGithub() {
      signInWithPopup(getAuth(), new GithubAuthProvider)
        .then(async (res) => {
          const accessToken = await res.user.getIdToken()
          this.setCreds(res.user, {
            ...res.user,
            status: "Logged in successfully via Github",
            accessToken,
            refreshToken: res.user.refreshToken
          })
        })
        .catch((e) => this.status = e.message)
    },
    deleteAccount() {
      deleteUser(this.user)
        .then(async () => {
          this.user = {} as User
          this.status = 'Deleted user successfully'
          this.username = ''
          this.accessToken = ''
          this.refreshToken = ''
          this.uid = ''
          this.email = ''
        })
        .catch((e) => this.status = 'Error deleting account. Ensure you are logged in')
    }
  }
})
