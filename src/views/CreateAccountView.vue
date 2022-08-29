<script setup lang="ts">
import { createAccountStore } from '@/stores/createAccount';
const store = createAccountStore()
</script>
  
<template>
  <div class="container">
    <box>
      <text>Username</text>
      <input v-model="store.username" class="input" placeholder="sample" />
      <text>Email</text>
      <input v-model="store.email" class="input" placeholder="sample@sample.com" />
      <text>Password</text>
      <input v-model="store.password" type="password" class="input" placeholder="sample password" />
      <button class="button" @click="store.createAccount()">Create Account</button>
      <div class="federated">
        <button class="button">Google</button>
        <space class="space" />
        <button class="button">Facebook</button>
      </div>
    </box>
  </div>
</template>

<style>
.space {
  width: 40px;
}

.container {
  display: flex;
  height: 85vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container box {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  height: 530px;
  width: 80vw;
  max-width: 400px;
  color: var(--vt-c-green);
}

.input {
  padding: 15px;
  border: 1px solid rgb(176, 176, 176);
  ;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-top: 10px;
  margin-bottom: 20px;
}

.input:focus {
  outline: none !important;
  border: 1px solid var(--vt-c-green);
  border-radius: 10px;
}

.button {
  background-color: transparent;
  border-color: var(--vt-c-green);
  border-radius: 30px;
  border-width: 1px;
  padding: 10px;
  color: var(--vt-c-green);
  margin-top: 15px;
  font-size: 15px;
  width: 100%;
}

.federated {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 10px;
}

@media (min-width: 1024px) {
  .container {
    min-height: 100vh;
  }

  .container box {
    width: 40vw;
    max-width: 500px;
    padding: 50px;
  }
}
</style>