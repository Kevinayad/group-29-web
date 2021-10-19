<template>
  <div class="container">
    <b-button variant="danger" v-on:click="deleteAllStatistic">Delete statistics</b-button>
    <div id= "headline">
    <h3>List of all Statistics:</h3>
    <p v-for="(statistic,index) in statistics" :key="index">{{ statistic }}</p>
          </div>
    <div id="addNewStatistic">
      <div class="col-sm"><h1>Create new Statistic</h1></div>
    </div>
    <div class="row">
      <div class="col-sm">
        <form @submit="submit">
          <div class="form-group">
            <label for="type">Type</label>
            <input
              type="text"
              class="form-control"
              id="type"
              aria-describedby="emailHelp"
              placeholder="Enter diagram type (pie chart / bar chart / line graph)"
              required
              v-model="type"
            />
          </div>
          <div class="form-group">
            <label for="timespan">timespan</label>
            <input
              type="text"
              class="form-control"
              id="timespan"
              placeholder="How long time should be included in diagram"
              required
              v-model="timespan"
            />
          </div>
          <div class="submitForm">
            <button type="text" class="submit">Submit</button>
          </div>
        </form><br>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  created() {
    this.statisticId = this.$route.params.id
  },
  mounted() {
    // Load the real recipes from the server
    Api.get('/statistics')
      .then(response => {
        this.statistics = response.data
        console.log(response.data)
      })
      .catch(error => {
        this.message = error.message
        console.error(error)
        this.statistics = []
        // TODO: display error message
      })
      .then(() => {
      })
  },
  data() {
    return {
      statistics: [],
      statistic: {
        type: '',
        timespan: ''
      },
      show: true
    }
  },
  methods: {
    deleteAllStatistic() {
      Api.delete('/statistics')
        .then(response => {
          alert('All statistics deleted')
          window.location.reload()
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
          this.statistics = []
          // TODO: display error message
        })
        .then(() => {
          //   This code is always executed at the end. After success or failure.
        })
    },
    submit() {
      console.log('hello')
      Api.post('/statistics', this.statistic)
        .then(response => {
          alert('Statistic created')
          const statistic = response.data
          console.log(response.data)
          this.statistic.id = statistic._id
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
        })
        .then(() => {
          // make input boxes empty
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
