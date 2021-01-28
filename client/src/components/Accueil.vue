<template>
    <div>
<h1 >ShowRoom</h1>
<b-container>
  <b-row align-v="start">
    <b-col sm = 0>
    <div>
      <li v-for="item in images" :key="item._id"><br>
      <b-container>
        <b-row class="encadre">
          <b-col>
        <b-img :src=" static_url + item.sticker + '.jpeg'" @click="onClickImage"></b-img>
          </b-col>
          <b-col>
            <h2>{{item.modele}}</h2>
            <p>{{item.description}}</p>
            <h2>{{item.prix}} €</h2>
             <b-button @click="addBasket(item)">Ajouter au panier</b-button>
            </b-col>
        </b-row>
        </b-container>
        </li>
  </div>
  </b-col>
    <b-col>
        <p>Présentation du showroom de nos véhicules moyenne, haute et très haute gamme</p>
      </b-col>
     </b-row>
    </b-container>
    </div>
</template>

<script>

import RefimageService from '@/services/RefimageService'
import BasketService from '@/services/BasketService'

export default {
  name: 'Accueil',
  data () {
    return {
      visible: true,
      static_url: '/static/images/',
      images: []
    }
  },
  mounted () {
    this.getImage()
  },

  methods: {
    onClickImage (image) {
      this.visible = true
    },
    onClickVisible () {
      this.visible = false
    },
    async getImage () {
      const response = await RefimageService.fetchRefimages()
      this.images = response.data.refimages
      console.log(this.images)
    },
    async addBasket (item) {
      console.log(item.sticker)
      await BasketService.addBasket({
        sticker: item.sticker,
        modele: item.modele,
        description: item.description,
        price: item.prix
      })
    }
  }
}
</script>
<style>
  li{
    list-style: none;
  }
  .container{
    align-self: auto;
    max-width: 1000px;
  }
  .encadre{
    padding: 10px;
    border: gray solid;
  }
 </style>
