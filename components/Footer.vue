<template>

<div class="footerColor">
  <div class="row">
    <div class="col-sm">
      <h4>Services</h4>
      <div>
        <p>Ventes</p>
        <p>Service après-vente</p>
      </div>
    </div>
    <div class="col-sm">
      <h4>Navigation</h4>
            <nuxt-link class="nav-link" to="/">Accueil</nuxt-link>
            <nuxt-link class="nav-link" to="/addCar">Ajouter un article</nuxt-link>
            <nuxt-link class="nav-link" to="/panier">Panier</nuxt-link>
    </div>
    <div class="col-sm">
      <h4>Coordonnées</h4>
      <p>Lux Car td</p>
      <p><span>&#9742; </span>555-444-435</p>
      <p>Paris 75000</p>
      <p>France</p>
    </div>
  </div>
</div>
</template>

<script>
    export default {
    name: 'Footer',
 }
</script>

<style>
.footerColor{
    height:auto;
    border: 1px solid;
    }
</style>
