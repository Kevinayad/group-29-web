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
          <div v-if="user!=0">
          <p>{{ user._id }} {{ user.name }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <input v-model="usrid" placeholder="Enter user id:" />
            <input v-model="remid" placeholder="Enter reminder id:" />
          </div>
          <div class="col-sm">
            <b-button v-on:click="getReminderUserbyID(usrid, remid)"
              >get Reminder for user by id:</b-button
            >
          </div>
          <div class="col-sm">
            <p class="reminderList">Reminder text: {{ reminders.reminderText }}<br> Reminder interval: {{reminders.interval}}</p>
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
      users: { name: '', gender: '', height: '', weight: '', goals: '' },
      reminders: { name: '', reminderText: '', interval: '', user_id: '' }
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
    getReminderUserbyID(userI, remid) {
      Api.get('/users/' + userI + '/reminders/' + remid)
        .then((response) => {
          this.reminders = response.data.reminders
          console.log(response.data.reminders)
        })
        .catch((error) => {
          this.reminders = error
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
.reminderList{
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
