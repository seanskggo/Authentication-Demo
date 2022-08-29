import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import App from './App.vue'
import router from './router'

import './assets/main.css'

const firebaseConfig = {
  apiKey: "AIzaSyDVYBe-LtmeCh0VpRU2ZS96QMURio4DYEo",
  authDomain: "auth-demo-simple.firebaseapp.com",
  projectId: "auth-demo-simple",
  storageBucket: "auth-demo-simple.appspot.com",
  messagingSenderId: "282912835653",
  appId: "1:282912835653:web:37c8d574cac60a42e4fb2c",
  measurementId: "G-1GNKH4476H"
};

getAnalytics(initializeApp(firebaseConfig))
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
