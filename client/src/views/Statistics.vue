<template>
  <div class="container">
    <b-button variant="danger" v-on:click="deleteAllStatistic">Delete statistics</b-button>
    <div id= "headline">
    <h3>List of all Statistics:</h3>
    <p v-for="(statistic,index) in statistics" :key="index">{{ statistic }}</p>
    </div>
    <b-row align-h="center">
      <b-col cols="12" sm="6" md="4" v-for="statistic in statistics" v-bind:key="statistic._id">
        <statistic-item v-bind:statistic="statistic" v-on:del-statistic="deleteStatistic"/>
      </b-col>
    </b-row>
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
              v-model="statistic.type"
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
              v-model="statistic.timespan"
            />
          </div>
          <div class="form-group">
            <label for="name">Users name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Include user in statistic"
              required
              v-model="user.name"
            />
          </div>
          <div class="form-group">
            <label for="goal">Users goal</label>
            <input
              type="text"
              class="form-control"
              id="goal"
              placeholder="Include goal in statistic"
              required
              v-model="user.goal"
            />
          </div>
           <b-button
            class="mb-2 mr-2 mb-sm-0"
            variant="primary"
            v-on:click="addUser">Add user</b-button>
          <div class="submitForm">
            <button type="text" class="submit">Submit</button>
          </div>
        </form><br>
<b-button variant ="primary" onclick="location.href='/statistics/:id/edit'" type="button">
        Edit statistic</b-button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
import StatisticItem from '../components/StatisticItem.vue'

export default {
  components: { StatisticItem },
  name: 'statistics',
  created() {
    this.statisticId = this.$route.params.id
  },
  Components: {
    StatisticItem
  },
  mounted() {
    // Load the real recipes from the server
    Api.get('/users/:id/statistics')
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
      user: {
        name: '',
        goal: ''
      },
      show: true
    }
  },
  methods: {
    deleteStatistic(id) {
      Api.delete(`/statistics/${id}`)
        .then(reponse => {
          const index = this.statistics.findIndex(statistic => statistic._id === id)
          this.statistics.splice(index, 1)
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
        })
    },
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
    },
    addUser() {
      const id = this.statistic.id
      if (id != null && this.user.name && this.user.goal) {
        console.log(id)
        Api.post(`/statistics/${id}/users`, this.user)
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
