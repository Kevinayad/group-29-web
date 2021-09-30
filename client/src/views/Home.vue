<template>
  <div class="container">
<div class="row">
    <div class="col-sm">
     <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="username" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Username">
    <small id="emailHelp" class="form-text text-muted">Fill in chosen username</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Goal</label>
    <input type="height" class="form-control" id="height" placeholder="Enter users goal">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Height</label>
    <input type="height" class="form-control" id="height" placeholder="Enter height in cm">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Weight</label>
    <input type="weight" class="form-control" id="weight" placeholder="Enter weight in KG">
  </div>
   <div class="form-group">
    <label for="exampleFormControlSelect1">Gender</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Female</option>
      <option>Male</option>
      <option>Prefer not to say</option>
    </select>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'home',
  data() {
    return {
      message: 'none'
    }
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then(response => {
          this.message = response.data.message
        })
        .catch(error => {
          this.message = error
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

</style>
