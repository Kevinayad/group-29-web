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
          <p>{{ user._id }} {{ user.name }}</p>
        </div>
        <div class="row">
          <div class="col-sm">
            <input
              class="inputtext"
              v-model="usrid"
              placeholder="Enter user id:"
            />
            <input
              class="inputtext"
              vv-model="name"
              placeholder="Enter reminder name:"
            />
            <input
              class="inputtext"
              vv-model="reminderText"
              placeholder="Enter reminder text:"
            />
            <input
              class="inputtext"
              vv-model="interval"
              placeholder="Enter reminder interval:"
            />
          </div>
          <div class="col-sm">
            <b-button v-on:click="postReminderUserbyID(usrid)"
              >post Reminder for user by id:</b-button
            >
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
    postReminderUserbyID(userI) {
      Api.post('/users/' + userI + '/reminders/', {
        name: this.name,
        ReminderText: this.text,
        interval: this.interval
      })
        .then((response) => {
          this.reminders = response.data.reminders
          console.log(response.data.reminders)
          alert('reminder registered')
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
.inputtext {
  color: black;
}
#navbar {
  color: black;
}
.result {
  color: crimson;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
