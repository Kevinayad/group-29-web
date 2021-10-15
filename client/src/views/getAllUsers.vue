<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <b-button v-on:click="getuser()">get List of users:</b-button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div v-for="user in users" v-bind:key="user._id">
          <p>{{ user._id }} {{user.name}}</p>
        </div>
        <div class="row">
      <div class="col-sm">
   <input v-model="usrid" placeholder="Enter user id:">
</div>
<div class="col-sm">
        <b-button v-on:click="getuserbyID(usrid)">get user by id:</b-button>
</div>
      </div>
    </div>
    </div>
    </div>
        <!-- <p>
          List of users:<br />
          {{ users }}
        </p> -->
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
export default {
  data() {
    return { users: undefined }
  },
  mounted() {
    Api.fetch('/user')
      .then((res) => res.json())
      .then((data) => (this.users = data))
      .catch((err) => console.log(err.message))
  },
  methods: {
    async getusers() {
      const response = await Api.get('/users', {})
      console.log(response.data)
    },
    getuser() {
      Api.get('/users')
        .then((response) => {
          console.log(response.data.users)
          this.users = response.data.users
        })
        .catch((error) => {
          this.users = error
        })
    },
    getuserbyID(user) {
      Api.get('/users/' + user)
        .then((response) => {
          console.log(response.data.users)
          this.users = response.data.users
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
