<template>
  <div class="container">
    <div class="col-sm">
        <b-button v-on:click="getFoods()">get All foods: </b-button>
    </div>
    <div class="row">
      <div class="col-sm">
        <p> Edit an item here </p>
        <input v-model="foodtrack.name" placeholder="Enter new name" />
        <input v-model="foodtrack.protien" placeholder="Enter new Protein" />
        <input v-model="foodtrack.carbs" placeholder="Enter new Carbs" />
        <input v-model="foodtrack.fats" placeholder="Enter new Fats" />
      </div>
    </div>
    <div class="row">
      <br>
      <div class="col-sm"><br>
        <h3> List of all foodtracks </h3>
        <table class="table">
          <thead>
            <tr>
              <th>Food name</th>
              <th>Protien</th>
              <th>Carbs</th>
              <th>Fats</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="foodtrack in foodtracks" v-bind:key="foodtrack._id">
              <td>{{ foodtrack.name }}</td>
              <td>{{ foodtrack.protien }}</td>
              <td>{{ foodtrack.carbs }}</td>
              <td>{{ foodtrack.fats }}</td>
              <td>
                <b-button v-on:click="patchFoodByID(foodI)"
                  >Update this leaderboard</b-button
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
export default {
  data() {
    return {
      foodtracks: [],
      foodtrack: { name: '', protien: '', carbs: '', fats: '' }
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
        name: this.name,
        protien: this.protien,
        carbs: this.carbs,
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
