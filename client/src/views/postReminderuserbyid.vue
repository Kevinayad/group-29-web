<template>
<div id ="app">
  <div class="container">
    <div class="row bg-light">
      <div class="col-lg-12">
        <p class="text-center text-dark display-6 pt-3">Create new reminders for your users here
        </p>
  </div>
  </div>
</div>

<div class="container-2">
  <div class="row mt-3">
    <div class="col-lg-6">
      <h3 class="text-info">List of Users</h3>
      <button class="btn btn-info float-right">
        <i class="fas fa-user"></i>&nbsp;&nbsp; Create reminder for specific user
        </button>
    </div>
  </div>
  <hr class="bg-info">
  <div class="alert alert-danger" v-if="errorMsg">
    {{ errorMsg }}
</div>
<div class="alert alert-success" v-if="successMsg">
    {{ successMsg }}
</div>
<!-- Displaying Records  -->
<div class="row">
  <div class="col-lg-12">
    <table class="table table-bordered table-striped">
      <thead>
        <tr class="text-center bg-info text-light">
          <th>ID</th>
          <th>Name</th>
          <th>Create reminder</th>
        </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="user in users" v-bind:key="user._id">
            <td> {{ user._id }} </td>
            <td> {{ user.name }}</td>
            <td> {{ user.reminder}}</td>
            <td><a href="#" class="text-success"><i class="far fa-edit" @click="showAddModal=true"></i></a></td>
          </tr>
        </tbody>
    </table>
  </div>
</div>
</div>
<div id="overlay" v-if="showAddModal">
  <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title"> Create reminder for user: </h5>
      <button type="button" class="close" @click="showAddModal=false">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body p-4">
      <form action="#" class="post">
        <div class="form-group">
          <input type="text" v-model="newReminder.name" name="remindername" class="form-control form-control lg" value="user._id">
        </div>
        <div class="form-group">
          <input type="text" v-model="newReminder.reminderText" name="remindertext" class="form-control form-control lg" placeholder="reminder text">
          </div>
           <div class="form-group">
          <input type="number" v-model="newReminder.interval" name="reminderinterval" class="form-control form-control lg" placeholder="reminder interval (will be repeated every ... day)">
          </div>
           <div class="form-group">
          <button class="btn btn-info btn-block btn-lg" @click=" addReminder(newReminder);">Add reminder</button>
          </div>
         </form>
  </div>
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
      errorMsg: '',
      successMsg: '',
      showAddModal: false,
      users: [],
        user: { name: '', gender: '', height: '', weight: '', goals: '' , reminder:''},
      reminders: [],
      newReminder: {name: '', reminderText: '', interval: '', user_id: ''},
    }
  },
  mounted: function(){
    this.getusers();
    this.getuser();
    this.getreminder();
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
    getreminder() {
      Api.get('/reminders')
        .then((response) => {
          console.log(response.data.reminders)
          this.users = response.data.reminders
        })
        .catch((error) => {
          this.reminders = error
        })
    },
    addReminder(newReminder) {
      var formData = this.toFormData(this.newReminder);
       Api.post('/reminders', formData)
        .then((response) => {
          this.newReminder = {
          name: newReminder.name,
          reminderText: newReminder.reminderText,
          interval: newReminder.interval
          };
          if(response.data.error){
            this.errorMsg = response.data.message;
          }
          else{
            this.successMsg = response.data.message;
          }
        });
    },
    toFormData(obj){
     var fd = new FormData();
     for (var i in obj){
       fd.append(i,obj[i]);
     }
     return fd;
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
