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
  <div class="about-view">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTek6J4n2DNOHlvPpwu2Ptc-3eReoCLzrUFb96D4U5RTw&s"
      alt="itachi"
    />
  </div>
</template>

<style lang="scss" scoped>
.about-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  width: 80%;
}
</style>
