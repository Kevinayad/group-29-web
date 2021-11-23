<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
      <b-button v-on:click="getFoods()">Refresh list of foods:</b-button>
      </div>
      </div>
    <div class="row">
      <div class="col-sm">
        <input v-model="protien" placeholder="Enter Protien content" />
        <input v-model="carbs" placeholder="Enter Carbs content" />
        <input v-model="fats" placeholder="Enter Fat Content" />
      </div>
    </div>
    <div class="col-sm">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Protien</th>
            <th scope="col">Carbs</th>
            <th scope="col">Fats</th>
            <th scope="col">Button</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="food in foodtracks" v-bind:key="food._id">
            <td>{{ food.name }}</td>
            <td>{{ food.protien }}</td>
            <td>{{ food.carbs }}</td>
            <td>{{ food.fats }}</td>
            <td>
              <b-button v-on:click="patchFoodbyID(food._id)"
                >Update this food</b-button
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
  mounted: function () {
    this.getFoods()
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
.foodres {
  color: green;
}
</style>
