<script>
export default {
  name: "AboutView",

  methods: {
    clearLocalStorageAndGoToAuth() {
      delete localStorage.email;
      this.$router.push({ name: "auth" });
    },
  },
};
</script>

<template>
  <nav>
    <div>
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
    <button type="button" @click="clearLocalStorageAndGoToAuth">Выйти</button>
  </nav>

  <div class="about">
    <h1>It's me</h1>
    <img
      src="https://pm1.aminoapps.com/6550/297a51bad35404465a586711a81c55d2b92b50c3_hq.jpg"
      alt="itachi"
    />
  </div>
</template>

<style scoped>
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
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  width: 80%;
}
.about h1 {
  padding-bottom: 50px;
}
</style>
