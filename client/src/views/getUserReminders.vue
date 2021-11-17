<template>
  <div class="container">
    <div class="row">
        <button @click="deleteUserById(currentuser._id), getusers()">Delete selected user</button>
    </div>
    <div class="row">
      <div class="col-sm">
        <li v-for="user in users" :key ="user.id" @click="currentuser = user">
          {{user.name}}
        </li>
        <p>Selected user: {{currentuser.name}}</p>
      </div>
    </div>
    <div class="row">
      <div>
        <p>Selected user's reminders: </p>
        <h v-for="reminder in reminders" :key ="reminder.id">
          <p v-if="reminder.user_id === currentuser._id" >
            {{reminder.reminderText}}
          </p>
        </h>
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
      users: [],
      user: { name: '', gender: '', height: '', weight: '', goals: '' },
      currentuser: { name: '', gender: '', height: '', weight: '', goals: '' },
      reminders: [],
      reminder: { name: '', reminderText: '', interval: '', user_id: '' },
      currentreminder: { name: '', reminderText: '', interval: '', user_id: '' }
    }
  },
  mounted: function () {
    this.getusers()
    this.getreminders()
  },
  methods: {
    /* async getusers() {
      const response = await Api.get('/users', {})
      console.log(response.data)
    }, */
    getusers() {
      Api.get('/users')
        .then((response) => {
          console.log(response.data.users)
          this.users = response.data.users
        })
        .catch((error) => {
          this.users = error
        })
    },
    deleteUserById(userid) {
      Api.delete('/users/' + userid)
        .then((response) => {
          this.user = response.data.users
          console.log(response.data.reminders)
        })
    },
    getreminders() {
      Api.get('/reminders')
        .then((response) => {
          this.reminders = response.data.reminders
          console.log(response.data.reminders)
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
