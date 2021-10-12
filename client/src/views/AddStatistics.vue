<template>
  <div>
    <h1>Add statistic</h1>
    <div class="container">
      <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
        {{ message }}
      </b-alert>
      <b-alert v-model="showDismissibleSuccess" variant="success" dismissible>
        {{ message }}
      </b-alert>
      <form @submit="createStatistic">
        <div class="form-group">
          <label for="type" class="col-4 col-form-label">Type:</label>
          <div class="col-8">
            <input id="type" class="form-control" v-model="type" placeholder="type">
          </div>
        </div>
       <div class="form-group">
          <label for="timespan" class="col-4 col-form-label">Timespan:</label>
          <div class="col-8">
            <input id="timespan" class="form-control" v-model="timespan" placeholder="timespan">
          </div>
        </div>
        <div class="form-group">
          <label for="name" class="col-4 col-form-label">User name:</label>
          <div class="col-8">
            <textarea id="name" v-model="name" class="form-control"></textarea>
          </div>
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'addStatistic',
  data() {
    return {
      newStatistic: {
        type: '',
        timespan: '',
        user: '',
        goal: ''
      }
    }
  },
  methods: {
    createStatistic() {
      Api.post('/statistics' + this.newStatistic)
        .then(response => {
          this.type = ''
          this.timespan = ''
          this.name = ''
          this.goal = ''
          this.user = ''
        })
        .catch(error => {
          if (error) {
            alert('Could not add statistic, please try again later')
            this.statistics = {}
          }
        })
    }
  }
}
</script>

