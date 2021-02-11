<template>
<div>
  <br>
  <h1 class="title">ShowRoom</h1>
  <div class="cadre">
<div class="card mb-3" style="max-width: 1000px;" v-for="item in images" :key="item._id">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="require('~/' + static_url + item.sticker +'.jpeg')">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"><strong>{{item.modele}}</strong></h5>
        <p class="card-text"></p>
            <p>{{item.description}}</p>
            <h2>{{item.prix}} €</h2>
            <div class="butt"><b-button @click="addBasket(item)">Ajouter au panier</b-button></div>
      </div>
    </div>
  </div>
</div>
</div>
<br>
</div>
</template>

<script>

import RefimageService from '@/services/RefimageService'
import BasketService from '@/services/BasketService'

export default {
  name: 'Accueil',
  data () {
    return {
      visible: false,
      static_url: 'assets/images/',
      images: [],
      added: false
    }
  },
  mounted () {
    this.getImage()
  },

  methods: {
    async getImage () {
      const response = await RefimageService.fetchRefimages()
      this.images = response.data.refimages
      console.log(this.images)
    },
    async addBasket (item) {
      await BasketService.addBasket({
        sticker: item.sticker,
        modele: item.modele,
        description: item.description,
        price: item.prix
      })
      this.added = true
    }
  }
}
</script>
<style>
.cadre{
  display: block;
  height: 1000px;
  overflow: auto;
}
title{
  color: aliceblue;
}

 </style>
