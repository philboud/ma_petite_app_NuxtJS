<template>
<div>
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
<div class="container">
      <Nuxt />
  </div>
   </div>
  <div class="foot">
    <Footer />
       </div>
      </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: { 
    Footer
  }
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
.foot{
  border: 0.2em solid;
  position: relative;
  bottom:0;
  width:100%;
  height:240px;
}
</style>
