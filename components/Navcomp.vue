<template>
<div>
      <div class="navfont">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/">Accueil</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/addcar">Ajouter articles</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/panier">Panier</nuxt-link>
        </li>
        </ul>
     </nav>
       </div>
   </div>
</template>

<script>
export default {
    name: 'navcomp',
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