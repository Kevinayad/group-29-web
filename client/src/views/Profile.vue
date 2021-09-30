<template>
  <div id = "profile-content">
    <h2> New post</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'profile',
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
#profile-content {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  position: center;
}

</style>
