<template>
<div>
      <div class="navfont">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/"></a>
    <div class="butt">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbar-Nav" aria-expanded="false" aria-label="Toggle navigation" style="color : blue;">
    <span class="navbar-toggler-icon"></span>
  </button>
  </div>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav" id="colorFont">
      <li class="nav-item active">
        <nuxt-link class="nav-link" to="/">Accueil</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/addcar">Ajouter articles</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/panier">Panier</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/chat">Chat</nuxt-link>
        </li>
        </ul>
        </div>
     </nav>
       </div>
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
   left: -600px !important;
}
.navbar-nav li a{
  color:midnightblue !important;
}
.bg-dark{
  background-color: rgb(235, 177, 177) !important;
}
.back{
  margin:0;
  padding:0;
  position:relative;
  height: 1200px;
  background-image: url('~assets/images/fond.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-clip: padding-box;
}
.title{
  color: aliceblue;
}
</style>