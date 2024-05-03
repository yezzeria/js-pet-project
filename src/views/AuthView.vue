<script>
export default {
  name: "AuthView",

  data() {
    return {
      email: "",
      password: "",

      isEmailValid: false,
      isPasswordValid: false,
    };
  },

  computed: {
    isFormDisabled() {
      return this.isEmailValid || this.isPasswordValid;
    },
  },

  methods: {
    submitForm() {
      localStorage.setItem("email", this.email);
      this.$router.push({ name: "home" });
    },

    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.isEmailValid = !emailRegex.test(this.email);
    },

    validatePassword() {
      this.isPasswordValid = !(
        this.password.length >= 8 && !this.password.includes(" ")
      );
    },
  },
};
</script>

<template>
  <div class="auth-view">
    <form class="auth-view__form form" @submit.prevent="submitForm">
      <div class="form__item">
        <label for="email">Email</label>
        <input
          v-model="email"
          type="text"
          name="email"
          @input="validateEmail"
        />
      </div>

      <div class="form__item">
        <label for="password">Пароль</label>
        <input
          v-model.trim="password"
          type="password"
          name="password"
          @input="validatePassword"
        />
      </div>

      <button
        type="submit"
        class="auth-view__button"
        :disabled="isFormDisabled"
      >
        Войти
      </button>
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

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      > label {
        width: 70px;
        margin-right: 10px;
      }
    }

    &__button {
      background-color: white;
      color: black;
      padding: 6px 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
      transition: background-color 0.3s;

      &:disabled {
        border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;
        cursor: not-allowed;
      }
    }
  }
}
</style>
