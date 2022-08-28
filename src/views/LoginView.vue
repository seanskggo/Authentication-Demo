<template>
  <div class="container">
    <h1>Login</h1>
    <h4>
      Login to your account using username and password or a federated identity
    </h4>
    <box>
      <text>Username</text>
      <input class="input" placeholder="edit me" />
      <text>Email</text>
      <input class="input" placeholder="edit me" />
      <text>Password</text>
      <input class="input" placeholder="edit me" />
      <button class="button">Login</button>
    </box>
  </div>
</template>

<style>
.container {
  display: flex;
  height: 85vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container h1 {
  color: var(--vt-c-green);
  margin-bottom: 5px;
}

.container h4 {
  margin-bottom: 30px;
  max-width: 400px;
  text-align: center;
  font-size: 13px;
}

.container box {
  display: flex;
  flex-direction: column;
  padding: 50px;
  border: 1px solid rgb(116, 116, 116);
  border-radius: 20px;
  height: 450px;
  width: 80vw;
  max-width: 400px;
  color: var(--vt-c-green);
}

.input {
  padding: 15px;
  border: 1px solid rgb(176, 176, 176);;
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
}

@media (min-width: 1024px) {
  .container {
    min-height: 100vh;
  }

  .container box {
    width: 40vw;
    max-width: 500px;
  }
}
</style>