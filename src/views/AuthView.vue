<script>
import UiInput from "@/ui/UiInput.vue";
import UiButton from "@/ui/UiButton.vue";
export default {
  name: "AuthView",
  components: { UiInput, UiButton },

  data() {
    return {
      email: "",
      password: "",

      isEmailValid: true,
      isPasswordValid: true,
    };
  },

  methods: {
    submitForm() {
      localStorage.setItem("email", this.email);
      this.$router.push({ name: "HomeView" });
    },

    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return !emailRegex.test(this.email);
    },

    validatePassword() {
      this.isPasswordValid = !(this.password.length >= 8);
    },
  },

  computed: {
    isFormDisabled() {
      console.log(this.isEmailValid);
      console.log(this.isPasswordValid);
      return this.isEmailValid || this.isPasswordValid;
    },
  },
};
</script>

<template>
  <div class="auth-view">
    <form class="input-form" @submit.prevent="submitForm">
      <div class="input-form__item">
        <UiInput v-model="email" type="email" :func="validateEmail" />
      </div>
      <div class="input-form__item">
        <UiInput v-model="password" type="password" :func="validatePassword" />
      </div>
      <UiButton :disabled="isFormDisabled" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.auth-view {
  background: orange;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .input-form {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  }
}
</style>
