<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <b-button v-on:click="getFoods()">get List of foods:</b-button>
      </div>
    </div>
     <div class="col-sm">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Ranking</th>
              <th scope="col">Points</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="leader in leadboards" v-bind:key="leader._id">
              <td>{{ leader.name }}</td>
              <td>{{ leader.Ranking }}</td>
              <td>{{ leader.Points }}</td>
              <td>
                <b-button v-on:click="putLeaderboardbyID(leader._id)"
                  >Update this leaderboard</b-button
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
  <!-- <p>
          List of users:<br />
          {{ users }}
        </p> -->
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
export default {
  data() {
    return {
      foodtracks: { name: '', protien: '', carbs: '', fats: '' }
    }
  },
  methods: {
    getFoods() {
      Api.get('/foodtracks')
        .then((response) => {
          console.log(response.data.foodtracks)
          this.foodtracks = response.data.foodtracks
        })
        .catch((error) => {
          this.foodtracks = error
        })
    },
    patchFoodbyID(foodI) {
      Api.patch('/foodtracks/' + foodI, {
        protien: this.protien,
        fats: this.fats
      })
        .then((response) => {
          alert('food updated')
        })
        .catch((error) => {
          this.foodtracks = error
        })
    }
  }
}
</script>

<style>
#title-between {
  margin-top: 10px;
}
.btn_message {
  margin-bottom: 1em;
}
#navbar {
  color: black;
}
.foodres{
  color: green;
}
</style>
