<template>
  <div>
    <div class="container-login">
      <form @submit.prevent="login" class="login-form">
        <h2>Login</h2>
        <input type="email" class="form-control" placeholder="Email.." v-model="email" />
        <input type="password" class="form-control" placeholder="Password.." v-model="password" />
        <button @click="login" class="btn btn-info">LOGIN</button>
      </form>
      <h4 class="error-m" v-if="error">*The username or password doesn't match*</h4>
    </div>
  </div>
</template>

<script>
import { auth } from "../../db/index";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    login() {
      this.error = "";
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("/");
        })
        .catch(e => {
          this.error = e;
        });
    }
  }
};
</script>

<style>
.container-login {
  width: 400px;
  padding: 40px;
  height: 40vh;
  margin: auto;
  margin-top: 20px;
  background-color: white;
  border: 0.5px solid rgb(251, 176, 176);
}
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.login-form input {
  margin: 10px;
  border-left: none;
  border-right: none;
  border-top: none;
}
.login-form input:focus {
  box-shadow: inset 0 -1px 0 #ddd;
}
.login-form h2 {
  padding: 10px;
}
.login-form button {
  flex: 0 0 30px;
  margin: auto;
  margin-top: 10px;
}
.error-m {
  color: red;
  font-size: 12px;
  margin-top: 10px;
  text-align: center;
}
@media only screen and (max-width: 500px) {
  .container-login {
    width: 300px;
  }
}
</style>