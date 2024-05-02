<template>
  <nav>
    <div>
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
    <button @click="clearLocalStorageAndGoToAuth">Выйти</button>
  </nav>
  <div>
    <h1>Users</h1>
    <br />
    <ul class="user-list">
      <li v-for="user in users" :key="user.id" class="user-box">
        <div><strong>Id:</strong> {{ user.id }}</div>
        <div><strong>Name:</strong> {{ user.name }}</div>
        <div><strong>Email:</strong> {{ user.email }}</div>
        <div><strong>Phone:</strong> {{ user.phone }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { useUserStore } from '@/stores/users'

export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    clearLocalStorageAndGoToAuth() {
      delete localStorage.email
      this.$router.push({ name: 'auth' })
    },
    getPosts() {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          const userStore = useUserStore()
          userStore.fetchUsers(response.data)

          this.setUsers()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    setUsers() {
      const userStore = useUserStore()
      this.users = userStore.users
    }
  },
  mounted() {
    this.getPosts()
  }
}
</script>


<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f0f0f0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
nav div {
  display: flex;
  gap: 20px;
}

h1 {
  margin-top: 50px;
  text-align: center;
}

.user-list {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.user-box {
  list-style: none;
  background: orange;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
