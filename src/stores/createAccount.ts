import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { credentialsStore } from './credentials'

const cred = credentialsStore()

const setCreds = (creds: {
  status: string | null;
  displayName: string | null;
  email: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  uid: string | null;
}) => {
  const { displayName, status, email, accessToken, refreshToken, uid } = creds
  console.log(refreshToken)
  if (status) cred.status = status
  cred.username = displayName ? displayName : 'N/A'
  cred.email = email ? email : 'N/A'
  cred.uid = uid ? uid : 'N/A'
  cred.accessToken = accessToken ? accessToken.substring(0, 50) + '...' : 'N/A'
  cred.refreshToken = refreshToken ? refreshToken.substring(0, 50) + '...' : 'N/A'
}

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
          setCreds({ ...res.user, status: "Registered and logged in successfully", accessToken, refreshToken: res.user.refreshToken })
          this.username = ''
          this.password = ''
          this.email = ''
        })
        .catch((e) => cred.status = e.message)
    }
  }
})
