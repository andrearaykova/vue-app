
<template>
  <div class="welcome">
    <h3 class="text-center">
      If you have an account, please
      <router-link :to="{ path: '/login' }">
        <button @click="login">login</button>
      </router-link>
    </h3>
    <h3 class="text-center">
      and if you don't, please
      <router-link :to="{ path: '/register' }">
        <button @click="register">register</button>
      </router-link>
    </h3>
  </div>
</template>

<script>
export default {
  name: "welcome",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  }
};
</script>

<style>
.welcome {
  margin-top: 10rem;
}
</style>
