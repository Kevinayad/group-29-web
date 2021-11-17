
<template>
  <div class="container">
    <div class="row">
        <h1>List of all reminders</h1>
    </div>
    <div class="row">
      <div class="col-sm">
        <b-button variant="danger" @click="deleteAllReminders()">Delete All reminders</b-button>
        <b-button @click="deleteReminderById(selectedreminder._id)">Delete selected reminder</b-button>
        <li v-for="reminder in reminders" :key="reminder.id" @click="selectedreminder = reminder">
          {{reminder.reminderText}}
        </li>
      </div>
    </div>
    <div class="row">
      <h>Selected reminder: {{selectedreminder.reminderText}}</h>
    </div>
    <div class="row">
      <div class="col-sm">

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'reminders',
  created() {
    this.reminderId = this.$route.params.id
  },
  data() {
    return {
      reminders: [],
      reminder: { name: '', reminderText: '', interval: '' },
      selectedreminder: { name: '', reminderText: '', interval: '' },
      show: true
    }
  },
  mounted() {
    this.getreminders()
  },
  methods: {
    createReminder() {
      Api.post('/reminders')
        .then((response) => {
          this.reminder = response.data
          console.log(response.data)
        })
        .catch((error) => {
          this.message = error.message
          console.error(error)
        })
    },
    getreminders() {
      Api.get('/reminders')
        .then((response) => {
          this.reminders = response.data.reminders
          console.log(response.data.reminders)
        })
    },
    deleteAllReminders() {
      Api.delete('/reminders')
        .then((response) => {
          alert('All reminders deleted')
          window.location.reload()
        })
        .catch((error) => {
          this.message = error.message
          console.error(error)
          this.reminders = []
          // TODO: display error message
        })
        .then(() => {
          //   This code is always executed at the end. After success or failure.
        })
    },
    deleteReminderById(reminderid) {
      Api.delete('/reminders/' + reminderid)
        .then((response) => {
          this.reminders = response.data.reminders
          console.log(response.data.reminders)
          this.getreminders()
        })
    }
  }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
#navbar {
  color: black;
}
#container {
  z-index: -1;
}
</style>
