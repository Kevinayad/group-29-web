<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <b-button v-on:click="getLeaderboards()"
          >get List of leaderboards:</b-button
        >
        <div v-for="leader in leadboards" v-bind:key="leader._id">
          <div v-if="leader!=0">
        <p>id:{{leader._id}} Name :{{leader.name}} Ranking: {{ leader.Ranking }} Points: {{ leader.Points }}<br></p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm"></div>
      <div class="row">
        <div class="col-sm">
          <input v-model="leadid" placeholder="Enter leaderboard id:" />
          <input v-model="name" placeholder="Enter new name" />
          <input v-model="Ranking" placeholder="Enter new Ranking" />
          <input v-model="Points" placeholder="Enter new Points" />
        </div>
        <div class="col-sm">
          <b-button v-on:click="putLeaderboardbyID(leadid)">Put leaderboard by id:</b-button>
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
      leadboards: { name: '', Ranking: '', Points: '' }
    }
  },
  methods: {
    getLeaderboards() {
      Api.get('/leadboards')
        .then((response) => {
          console.log(response.data.leadboards)
          this.leadboards = response.data.leadboards
        })
        .catch((error) => {
          this.leadboards = error
        })
    },
    putLeaderboardbyID(leadI) {
      Api.put('/leadboards/' + leadI, {
        name: this.name,
        Ranking: this.Ranking,
        Points: this.Points
      })
        .then((response) => {
          alert('leaderboard updated')
        })
        .catch((error) => {
          this.leadboards = error
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
</style>
