import { credentialsStore } from "@/stores/credentials";

const cred = credentialsStore()

export const setCreds = (creds: {
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