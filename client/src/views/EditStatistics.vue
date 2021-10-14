<template>
    <body>
            <div class="col-12">
                  <form @submit="updateType">
              <input v-model="newType.type" class="input" type="text" placeholder="New Type" required>
              <b-button type="submit" variant="primary">Update</b-button>
            </form>
            </div>
            <br>
            <div class="col-12">
            <form @submit= "updateTimespan">
              <input v-model="newTimespan.timespan" class="input" type="text" placeholder="New Timespan" required>
              <b-button type="submit" variant="primary">Update</b-button>
            </form>
            </div>
    </body>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'edit-statistics',
  data() {
    return {
      statistics: {},
      newType: {
        type: ''
      },
      newTimespan: {
        timespan: ''
      }
    }
  },
  created() {
    this.statisticsId = this.$route.params.id
  },
  methods: {
    updateType: function () {
      Api.patch('/statistics/' + this.$route.params.id, this.newType)
        .then(response => {
          alert('Type updated')
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
          alert('Something Went Wrong')
        })
        .then(() => {
        })
    },
    updateTimespan: function () {
      Api.patch('/statistics/' + this.$route.params.id, this.newTimespan)
        .then(response => {
          alert('Type updated')
        })
        .catch(error => {
          this.message = error.message
          console.error(error)
          alert('Something Went Wrong')
        })
        .then(() => {
        })
    }
  }
}
</script>
