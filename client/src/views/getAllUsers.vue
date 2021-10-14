<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <b-button v-on:click="getuser()">get List of users:</b-button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div v-for="users in users" :key="users.id">
          <h3>{{ users.id }}. {{ users.name }}</h3>
        </div>
        <p>
          List of users:<br />
          {{ users }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
import axios from 'axios'
export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    async getusers() {
      const response = await Api.get('/users', {})
      console.log(response)
    },
    getuser() {
      axios
        .get('http://localhost:3000/api/users')
        .then((response) => {
          console.log(response.data)
          this.users = response.data
        })
        .catch((error) => {
          this.users = error
        })
    },
    submit() {
      Api.post('/users', {
        name: this.name,
        gender: this.gender,
        height: this.height,
        weight: this.weight,
        goals: this.goals
      })
        .then((response) => {
          alert('User registered')
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
}
</script>

<style>
#title-between {
  margin-top: 10px;
}
.btn_message {
  margin-bottom: 1em;
}
#navbar {
  color: black;
}
</style>
