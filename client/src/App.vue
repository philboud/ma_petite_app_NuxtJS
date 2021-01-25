<template>
<div>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>Ma petite app</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Accueil</b-nav-item>
        <b-nav-item href="/items">Items</b-nav-item>
        <b-nav-item href="/profiles">Profils</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form v-if="name !=='Accueil'">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
          <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  <div class="container" id="app">
    <router-view/>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      name: this.$route.name
    }
  }
}
</script>

<style>
#app {
  border: black solid;
  border-radius: 20px;
  width: auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1f2327;
  margin: 50px;
  padding-bottom: 30px;
}
</style>
