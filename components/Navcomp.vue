<template>
<div class="container">
  <nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
    <div class="butt">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbar-Nav" aria-expanded="true" aria-label="Toggle navigation" style="color : blue;">
    <span class="navbar-toggler-icon"></span>
  </button>
  </div>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav" id="colorFont">
        <li class="nav-item">
          <nuxt-link class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" to="/">Accueil</nuxt-link>
        </li>
         <li class="nav-item active">
        <nuxt-link class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" to="/showroom">Showroom</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" to="/panier">Panier</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" to="/chat">Chat</nuxt-link>
        </li>
        </ul>
        </div>
     </nav>
       </div>
</template>

<script>
export default {
    name: 'navcomp',
      
  mounted () {
    
  },
}
</script>

<style>

.butt{
   background-color:midnightblue !important;
   position:relative !important;
}
.navbar-nav li a{
  color:midnightblue !important;
  margin-left: 10px;

}
.bg-dark{
  background-color: rgb(235, 177, 177) !important;
}
.title{
  color: aliceblue;
}
</style>