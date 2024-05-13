<script setup>
defineOptions({
  name: "UiInput",

  data() {
    return { inputValue: "" };
  },
});
defineProps({ type: String, func: Function });

const model = defineModel();
</script>

<template>
  <label v-if="type === 'text'" for="{{ type }}">Поиск</label>
  <label v-else-if="type === 'email'" for="{{ type }}">Email</label>
  <label v-else for="{{ type }}"> Пароль</label>
  <input :id="type" v-model.trim="model" :type="type" @input="func" />
</template>

<style lang="scss" scoped>
label {
  width: 70px;
  margin-right: 10px;
}
input {
  border: solid 1px #ccc;
}
</style>
