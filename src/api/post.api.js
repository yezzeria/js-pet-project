import API from "@/package/config/axios.js";

export const apiGetPosts = (value) => {
  const params = { userId: value };
  return API.get("https://jsonplaceholder.typicode.com/posts", { params });
};
