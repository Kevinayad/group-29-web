<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <b-button v-on:click="getuser()">refresh list of users:</b-button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">More info</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" v-bind:key="user._id">
              <td>{{ user.name }}</td>
              <td><b-button v-on:click="getuserbyID(user._id)">Print user info!</b-button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <p class="userresult">
          <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Height</th>
              <th scope="col">Weight</th>
              <th scope="col">Goals</th>
            </tr>
          </thead>
          <tbody>
          <td>{{ usr.name }}</td>
          <td>{{ usr.gender }}</td>
          <td>{{ usr.height }}</td>
          <td>{{ usr.weight }}</td>
          <td>{{ usr.goals }}</td>
          </tbody>
          </table>
        </p>
      </div>
    </div>
    <!-- <p>id: {{ user._id }} Name: {{ user.name }} Gender: {{user.gender}} Height: {{user.height}} Weight: {{user.weight}} Goals: {{user.goals}}<br></p> -->
    <!-- <div class="row">
      <div class="col-sm">
          <p class="userresult">
            {{ usr.name }} {{ usr.gender }} {{ usr.height }}
            {{ usr.weight }} {{ usr.goals }}
          </p>
        </div>
      </div> -->
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
    return {
      users: [],
      user: {
        name: '',
        gender: '',
        height: '',
        weight: '',
        goals: ''
      },
      usr: { name: '', gender: '', height: '', weight: '', goals: '' }
    }
  },
  mounted: function () {
    this.getuser()
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
          console.alert('no users registered')
        })
    },
    getuserbyID(userI) {
      Api.get('/users/' + userI)
        .then((response) => {
          this.usr = response.data
          console.log(response.data)
        })
        .catch((error) => {
          this.usr = error
          console.log(error)
          console.alert('user does not exist')
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
.userresult {
  color: dimgrey;
}
table,
th,
td {
  border: 1px solid black;
}
</style>
