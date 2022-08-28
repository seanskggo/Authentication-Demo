<template>
  <div class="container">
    <h1>Login</h1>
    <h4>
      asdfasdf
    </h4>
    <box>
      asdf
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
}

.container box {
  padding: 30px;
  border-style: solid;
  border-width: 1px;
  border-radius: 20px;
  border-color: black;
  height: 450px;
  width: 80vw;
  max-width: 400px;
  color: var(--vt-c-green);
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