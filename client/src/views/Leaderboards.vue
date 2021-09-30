<template>
  <div id="content">
<h2> Hi everyone </h2>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'leaderboards',
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
#content {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  position: center;
}

</style>
