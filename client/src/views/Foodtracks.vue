<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <b-button v-on:click="getFoods()">get List of foods:</b-button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div v-for="food in foodtracks" v-bind:key="food._id">
          <p class="foodres">{{ food }}</p>
        </div>
        <div class="row">
          <div class="col-sm">
            <input v-model="foodid" placeholder="Enter food id:" />
            <input v-model="fats" placeholder="Enter fat content:" />
            <input v-model="protien" placeholder="Enter protien content:" />
          </div>
          <div class="col-sm">
            <b-button v-on:click="patchFoodbyID(foodid)"
              >edit food by id:</b-button
            >
          </div>
          <div class="col-sm">
            <div v-if="foodid !== 0">
              <p>{{ food }}</p>
            </div>
          </div>
        </div>
      </div>
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
