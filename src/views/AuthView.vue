<script>
export default {
  name: "AuthView",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    submitForm() {
      localStorage.setItem("email", this.email);
      this.$router.push({ name: "home" });
    },

    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.email);
    },

    validatePassword() {
      return this.password.length >= 8 && !this.password.includes(" ");
    },
  },
};
</script>

<template>
  <div class="auth-box">
    <form action="" @submit.prevent="submitForm">
      <div class="input-group">
        <label for="email">Email</label>
        <input
          v-model="email"
          type="text"
          name="email"
          @input="validateEmail"
        />
      </div>
      <div class="input-group">
        <label for="password">Пароль</label>
        <input
          v-model="password"
          type="password"
          name="password"
          @input="validatePassword"
        />
      </div>
      <button
        type="submit"
        class="btn"
        :disabled="!validateEmail() || !validatePassword()"
      >
        Войти
      </button>
    </form>
  </div>
</template>

<style>
#app {
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: center;
}

.auth-box {
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
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.input-group label {
  width: 70px;
  margin-right: 10px;
}

.btn {
  background-color: white;
  color: black;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s;
}
.btn:disabled {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
}
</style>
