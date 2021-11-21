<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <p class="reminders">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">User</th>
                <th scope="col">Reminder content</th>
                <th scope="col">Interval</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user._id">
                {{setTempUser(user._id)}}
                <td>{{user.name}}</td>
                <td>
                  <li v-for="reminder in filteredReminders" :key="reminder._id">{{reminder.reminderText}}</li>
                </td>
                <td>
                  <li v-for="reminder in filteredReminders" :key="reminder._id">{{reminder.interval}}</li>
                </td>
              </tr>
            </tbody>
          </table>
        </p>
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
      tempUserI: '',
      users: [],
      user: { name: '', gender: '', height: '', weight: '', goals: '' },
      currentuser: { name: '', gender: '', height: '', weight: '', goals: '' },
      reminders: [],
      sortedreminder: [],
      reminder: { name: '', reminderText: '', interval: '', user_id: '' },
      currentreminder: { name: '', reminderText: '', interval: '', user_id: '' }
    }
  },
  mounted: function () {
    this.getusers()
    this.getreminders()
  },
  computed: {
    filteredReminders() {
      return this.reminders.filter((reminder) => {
        return (reminder.user_id === this.tempUserI)
      })
    }
  },
  methods: {
    /* async getusers() {
      const response = await Api.get('/users', {})
      console.log(response.data)
    }, */
    setTempUser(userI) {
      this.tempUserI = userI
    },
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
