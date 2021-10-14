import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import Leaderboard from './views/Leaderboards.vue'
import Statistic from './views/Statistics.vue'
import EditStatistic from './views/EditStatistics.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'profile',
      component: Profile
    },
    {
      path: '/',
      name: 'leaderboards',
      component: Leaderboard
    },
    {
      path: '/users/:id/statistics',
      name: 'statistics',
      component: Statistic
    },
    {
      path: '/statistics/:id/edit',
      name: 'edit-statistics',
      component: EditStatistic
    }
  ]
})
