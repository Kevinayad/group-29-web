import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Leaderboard from './views/Leaderboards.vue'
import Statistic from './views/Statistics.vue'
import Reminder from './views/Reminders.vue'
import getAllUsers from './views/getAllUsers.vue'
import foodtracks from './views/Foodtracks.vue'
import getuserrem from './views/getUserReminders.vue'
import postuserrem from './views/postReminderuserbyid.vue'
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
      path: '/leaderboards',
      name: 'leaderboards',
      component: Leaderboard
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: Statistic
    },
    {
      path: '/reminders',
      name: 'reminders',
      component: Reminder
    },
    {
      path: '/getusers',
      name: 'getusers',
      component: getAllUsers
    }, {

      path: '/foodtracks',
      name: 'foodtracks',
      component: foodtracks
    }, {

      path: '/getuserrem',
      name: 'getuserrem',
      component: getuserrem
    }, {

      path: '/postuserrem',
      name: 'postserrem',
      component: postuserrem
    }

  ]
})
