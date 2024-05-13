import { defineStore } from "pinia";
import API from "@/package/config/axios.js";

export const useUserStore = defineStore("user-store", {
  state: () => ({
    posts: [],
  }),
  actions: {
    getPosts() {
      API.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
