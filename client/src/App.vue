<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">Physion Admin Page</a>
      <div class="navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              ><router-link to="/">Users</router-link></a
            >
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#"><router-link to="/leaderboards">Leaderboards</router-link></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#"><router-link to="/reminders">Reminders</router-link></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#"><router-link to="/foodtracks">Foodtracks</router-link></a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Render the content of the current page view -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
#nav{
  color: aqua ;
}
template{
  background-color: black;
}

</style>
