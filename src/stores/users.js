import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
  }),
  actions: {

    fetchUsers(response) {
      this.users = response
    },


  },
});