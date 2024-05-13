<script>
export default {
  name: "UserCard",
  props: ["user"],
};
</script>

<template>
  <div><span>Id:</span> {{ user.id }}</div>
  <div><span>Name:</span> {{ user.name }}</div>
  <div><span>Email:</span> {{ user.email }}</div>
  <div><span>Phone:</span> {{ user.phone }}</div>
</template>

<style lang="scss" scoped>
span {
  font-weight: bold;
}
</style>
