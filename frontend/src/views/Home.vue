<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <User v-for="user in users" :key="user.id" />
  </div>
</template>

<script>
// @ is an alias to /src
import User from '@/components/user.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    User,
  },
  data() {
    return {
      users: [],
    }
  },
  async created() {
    const usersRequest = await axios.get('http://localhost:3000/users')
    this.users = usersRequest.data
  },
}
</script>
