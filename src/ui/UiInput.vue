<script>
export default {
  name: "UiInput",
  emits: ["update:modelValue", "inputChange"],

  props: {
    type: {
      type: String,
      default: "text",
    },

    modelValue: {
      type: String,
      default: "text",
    },

    label: {
      type: String,
      default: "",
    },

    id: {
      type: String,
      default: () => Math.random().toString(36).substring(2, 8),
    },
  },

  computed: {
    _modelValue: {
      get() {
        return this.modelValue;
      },

      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<template>
  <div class="ui-input">
    <label :for="id">{{ label }}</label>

    <input
      :id="id"
      v-model="_modelValue"
      :type="type"
      @input="$emit('inputChange', $event.target.value)"
    />
  </div>
</template>

<style lang="scss" scoped>
.ui-input {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  > label {
    width: 70px;
    margin-right: 10px;
  }
  > input {
    height: 30px;
    padding: 5px;
    border: solid 1px #ccc;
  }
}
</style>
