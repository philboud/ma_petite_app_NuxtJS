<template>
  <div class="back">
      <div class="navfont">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <ul class="navbar-nav">
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/">Accueil</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/items">Items</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/profiles">Profils</nuxt-link>
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
<div class="title"><p>Lux cars</p></div>
    <Nuxt />
  </div>
</template>

<style>
.back{
  height: auto;
  background-image: url('~assets/images/fond.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  
}
.title{
  color: aliceblue;
}
</style>
