<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { credentialsStore } from './stores/credentials';
const credentials = credentialsStore()
</script>

<template>
  <header>
    <div class="wrapper">
      <h2>Authentication Demo</h2>
      <divider class="divider" />
      <p>
        This project demonstrates the application of a firebase authentication system
        that leverages traditional username and password authentication as well as
        federated identities.
      </p>
      <h4>Menu</h4>
      <divider class="divider" />
      <nav>
        <RouterLink to="/">Login</RouterLink>
        <RouterLink to="/create-account">Create Account</RouterLink>
        <RouterLink to="/reset-password">Reset Password</RouterLink>
      </nav>
      <h4>Console</h4>
      <divider class="divider" />
      <p>{{  credentials.status  }}</p>
      <h4>Auth Credentials</h4>
      <divider class="divider" />
      <stats>User ID: {{  credentials.uid  }}</stats>
      <stats>Username: {{  credentials.username  }}</stats>
      <stats>Email: {{  credentials.email  }}</stats>
      <stats>Access Token: {{  credentials.accessToken  }}</stats>
      <stats>Refresh Token: {{  credentials.refreshToken  }}</stats>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
p {
  margin-top: 1rem;
  margin-bottom: 3rem;
  font-size: 13px;
}

stats {
  margin-top: 10px;
  font-size: 13px;
  max-width: 40vw;
  word-wrap: break-word;
}

.divider {
  border: 0.5px solid rgb(194, 194, 194);
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 13px;
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 0rem;
  }

  p {
    font-size: 0.9rem;
  }
}
</style>
