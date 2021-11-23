<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <b-button v-on:click="getLeaderboards()"
          >Refresh List of leaderboards:</b-button
        >
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <input v-model="name" placeholder="Enter new name" />
        <input v-model="Ranking" placeholder="Enter new Ranking" />
        <input v-model="Points" placeholder="Enter new Points" />
      </div>
    </div>
    <div class="row">
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
      Leaderboards: [],
      leadboards: {
        name: '',
        Ranking: '',
        Points: ''
      },
      leadboard: { name: '', Ranking: '', Points: '' }
    }
  },
  mounted: function () {
    this.getLeaderboards()
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
