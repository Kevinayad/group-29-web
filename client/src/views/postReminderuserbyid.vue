<template>
<div id ="app">
  <div class="container">
</div>
<div class="container-2">
  <div class="row mt-3">
    <div class="col-lg-6">
      <h3 class="text info">Create reminder for selected user</h3>
      <input v-model="username" placeholder="Enter new name" />
      <input v-model="remindertext" placeholder="Enter Reminder text" />
      <input v-model="reminderinterval" placeholder="Enter reminder interval" />
    </div>
  </div>
   <div class="row mt-3 ml-3"> <h3 class="text-info">List of Users</h3></div>
  <hr class="bg-info">
<div class="row">
  <div class="col-lg-8">
    <table class="table table-bordered table-striped">
      <thead>
        <tr class="text-center bg-info text-light">
          <th>Name</th>
          <th>Create reminder</th>
        </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="user in users" :key="user.id">
            <td> {{ user.name }}</td>
            <td><b-button @click="postReminderUserbyID(user._id)">Add reminder</b-button></td>
          </tr>
        </tbody>
    </table>
  </div>
</div>
</div>
</div>

</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.24.0/axios.min.js" integrity="sha512-u9akINsQsAkG9xjc1cnGF4zw5TFDwkxuc9vUp5dltDWYCSmyd0meygbvgXrlc/z7/o4a19Fb5V0OUE58J7dcyw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
// @ is an alias to /src
import { Api } from '@/Api'
export default {
  data() {
    return {
      username: '',
      remindertext: '',
      reminderinterval: '',
      errorMsg: '',
      successMsg: '',
      showAddModal: false,
      currentUser: '',
      users: [],
      user: { name: '', gender: '', height: '', weight: '', goals: '' },
      reminders: [],
      reminder: { name: '', reminderText: '', interval: '', user_id: '' },
    }
  },
  mounted: function(){
    this.getreminder()
    this.getusers()
  },
  methods: {

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
    getreminder() {
      Api.get('/reminders')
        .then((response) => {
          console.log(response.data.reminders)
          this.reminders = response.data.reminders
        })
        .catch((error) => {
          this.reminders = error
        })
    },
    getUserReminders(){
      Api.get('/api/users/:_id/reminders')
      .then((response) => {
          console.log(response.data.reminders)
          this.reminders = response.data.reminders
        })
        .catch((error) => {
          this.reminders = error
        })
    },
    postReminderUserbyID(userid) {
      Api.post('/users/' + userid + '/reminders', {
        name: this.username,
        reminderText: this.remindertext,
        interval: this.reminderinterval,
        user_id: userid
      })
         .then((response) => {
          this.reminders = response.data.reminders
          console.log(response.data.reminders)
          alert('reminder registered')
        })
        .catch((error) => {
          this.reminder = error
        })
    }
  }
}

//add Row

</script>

<style>
#overlay{
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.6);
    }

#title-between {
  margin-top: 10px;
}
.modal-body p-4{
  background-color: blanchedalmond;
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
