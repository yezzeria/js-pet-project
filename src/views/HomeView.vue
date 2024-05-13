<script>
import { useUserStore } from "@/stores/users";
import UiInput from "@/ui/UiInput.vue";

export default {
  name: "HomeView",
  components: { UiInput },

  data() {
    return {
      searchValue: "",
    };
  },

  methods: {
    useUserStore,
  },

  mounted() {
    useUserStore().getPosts();
  },
};
</script>

<template>
  <div class="home-view">
    <h1>Posts</h1>
    <br />
    <UiInput v-model="searchValue" type="text" />
    <br /><br />
    <table class="home-view__table">
      <thead>
        <tr>
          <th>User id</th>
          <th>id</th>
          <th>Title</th>
          <th>Post</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in useUserStore().posts" :key="post.userId">
          <td>{{ post.userId }}</td>
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.home-view {
  text-align: center;
  padding-top: 60px;
  &__table {
    width: 60%;
    border-collapse: collapse;
    margin: 0 auto;
    th,
    td {
      padding: 8px;
      border: 1px solid #ddd;
    }
    thead {
      position: sticky;
      top: 30px;
    }
    th {
      background-color: #f2f2f2;
      font-weight: bold;
      text-align: left;
    }
    tr:nth-child(even) {
      background-color: #f9f9f9;
    }
    tr:hover {
      background-color: #ddd;
    }
  }
}
</style>
