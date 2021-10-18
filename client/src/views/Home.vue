<template>
  <div class="container">
    <div class="row">
      <div class="col-sm"><h1>Users registration page</h1></div>
      <div class="col-sm"><h5><router-link to="getusers" id="listUsers">List of all users</router-link></h5></div>
      <div class="col-sm"><h5><router-link to="getuserrem">list user specific reminders</router-link></h5></div>
      <div class="col-sm"><h5><router-link to="postuserrem">add user specific reminders</router-link></h5></div>
    </div>
    <div class="row">
      <div class="col-sm">
        <form @submit.prevent="submit">
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input
              type="username"
              class="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Username"
              required
              v-model="name"
            />
            <small id="emailHelp" class="form-text text-muted"
              >Fill in chosen username</small
            >
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Goal</label>
            <input
              type="height"
              class="form-control"
              id="height"
              placeholder="Enter users goal"
              required
              v-model="goals"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Height</label>
            <input
              type="height"
              class="form-control"
              id="height"
              placeholder="Enter height in cm"
              required
              v-model="height"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Weight</label>
            <input
              type="weight"
              class="form-control"
              id="weight"
              placeholder="Enter weight in KG"
              required
              v-model="weight"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Gender</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              required
              v-model="gender"
            >
              <option>Female</option>
              <option>Male</option>
              <option>Prefer not to say</option>
            </select>
          </div>
          <div class="submitForm">
            <b-button type="text" value="send">Submit</b-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
export default {
  data() {
    return {
      name: '',
      gender: '',
      height: '',
      weight: '',
      goals: ''
    }
  },
  methods: {
    getFood() {
      Api.get('/foodtracks')
        .then((response) => {
          this.foodtracks = response.data
          console.log(response.data)
        })
        .catch((error) => {
          this.foodtracks = error
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
#listUsers{
  color: red;
}
</style>
