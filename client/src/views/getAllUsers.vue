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
          <div v-show="user!=0">
          <p>id: {{ user._id }} Name: {{ user.name }} Gender: {{user.gender}} Height: {{user.height}} Weight: {{user.weight}} Goals: {{user.goals}}<br></p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <input v-model="usrid" placeholder="Enter user id:" />
          </div>
          <div class="col-sm">
            <b-button v-on:click="getuserbyID(usrid)">get user by id:</b-button>
          </div>
          <div class="col-sm">
          <div v-if="users._id==usrid">
            <p class="userresult">{{ users.name }} {{users.gender}} {{users.height}} {{users.weight}} {{users.goals}}</p>
          </div>
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
    return {
      users: { name: '', gender: '', height: '', weight: '', goals: '' }
    }
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
    getuserbyID(userI) {
      Api.get('/users/' + userI)
        .then((response) => {
          this.users = response.data
          console.log(response.data)
        })
        .catch((error) => {
          this.users = error
          console.log(error)
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
.userresult{
  color: dimgrey;
}
</style>
