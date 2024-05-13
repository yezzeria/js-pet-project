<script>
export default {
  name: "UiButton",

  props: {
    disabled: Boolean,
  },
};
</script>

<template>
  <button type="submit" :disabled="disabled">Войти</button>
</template>

<style scoped>
button {
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
</style>
