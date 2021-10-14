
<template>
  <div class="container">
    <b-button variant="danger" v-on:click="deleteAllReminders">Delete reminders</b-button>
    <div v-for="(reminder,reminderKey) in reminders" :key="reminderKey">
      <div v-for=" (interval,intervalKey) in reminder.interval" :key="intervalKey">
        <li>{{reminders}}</li>
      </div>
    </div>
    <div class = "row">
      <div class = "col-sm">
        <form @submit="submit">
          <div class = "form-group">
            <label for="reminderText">Reminder:</label>
            <input
              type="text"
              class="form-control"
              id="reminderText"
              placeholder="Enter reminder content"
              v-model="reminder.reminderText"
              />
          </div>
          <div>
            <label>Reminder Interval(Days):</label>
          </div>
          <div>
            <select v-model="reminder.interval">
            <option disabled value="">Select Interval</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            </select>
            <span>Interval:{{reminder.interval}}</span>
          </div>
        </form>
      </div>
    </div>
    <b-button v-on:click="createReminder">Create reminder</b-button>
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
  mounted() {
    // Load the real recipes from the server
    Api.get('/reminders')
      .then(response => {
        this.reminders = response.data
        console.log(response.data)
      })
      .catch(error => {
        this.message = error.message
        console.error(error)
        this.reminder = []
        // TODO: display error message
      })
      .then(() => {
      })
  },
  data() {
    return {
      reminders: [],
      reminder: {
        name: '',
        reminderText: '',
        interval: ''
      },
      show: true
    }
  },
  methods: {
    createReminder() {
      Api.post('/reminders')
        .then(response => {
          this.reminder = response.data
          console.log(response.data)
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
        })
    },
    getReminder() {
      Api.get('/reminders')
        .then(response => {
          this.reminders = response.data
          console.log(response.data)
        })
    },
    deleteAllReminders() {
      Api.delete('/reminders')
        .then(response => {
          alert('All reminders deleted')
          window.location.reload()
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
          this.reminders = []
          // TODO: display error message
        })
        .then(() => {
          //   This code is always executed at the end. After success or failure.
        })
    },
    submit() {
      console.log('hello')
      Api.post('/reminders', this.reminder)
        .then(response => {
          alert('Reminder created')
          const reminder = response.data
          console.log(response.data)
          this.reminder.id = reminder._id
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
        })
        .then(() => {
          // make input boxes empty
        })
    },
    addUser() {
      const id = this.statistic.id
      if (id != null && this.user.name && this.user.goal) {
        console.log(id)
        Api.post(`/reminders/${id}/users`, this.user)
          .then(response => {
            alert('User added')
            console.log(response.data)
            // window.location.reload()
          })
          .catch(error => {
            this.message = error.message
            console.error(error)
          })
          .then(() => {
          })
      }
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
