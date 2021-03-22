<template>
<div>
      <div class="navfont">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="/"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbar-Nav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
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