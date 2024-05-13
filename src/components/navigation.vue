<script>
export default {
  name: "NavigationBlock",

  methods: {
    clearLocalStorageAndGoToAuth() {
      localStorage.removeItem("email");
      this.$router.push({ name: "Auth" });
    },
  },
};
</script>

<template>
  <nav>
    <div>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
    <button type="button" @click="clearLocalStorageAndGoToAuth">Выйти</button>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f0f0f0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
nav div {
  display: flex;
  gap: 20px;
}
</style>
