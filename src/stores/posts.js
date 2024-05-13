import { defineStore } from "pinia";
import { apiGetPosts } from "@/api/post.api.js";

export const useUserStore = defineStore("user-store", {
  state: () => ({
    posts: [],
  }),
  actions: {
    getPosts(search = undefined) {
      apiGetPosts(search)
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
