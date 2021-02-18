<template>
<div>
  <br>
  <h1 class="title">ShowRoom</h1>
  <h5 class="title">Nombre d'article(s) dans le panier: {{article}}</h5>
  <div class="cadre">
<div class="card mb-3" style="max-width: 1000px;" v-for="(item, index) in images" :key="item._id">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="require('~/' + static_url + item.sticker +'.jpeg')">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"><strong>{{item.modele}}</strong></h5>
        <p class="card-text"></p>
            <p>{{item.description}}</p>
           <div>
            <h2>{{item.prix}} €</h2>
            </div>
            <br>
           
            <div  class="butt"><b-button @click="addBasket(item, index)"> Ajouter au panier</b-button></div>
              <div  class="inputNum">
                 <input type="checkbox" v-model="item.checked" disabled/><h5 v-if="item.checked">Article ajouté au panier {{item.qty}} fois</h5>
              <label><strong>Quantité</strong></label>
             <input type="number" id="qty" :min=1 class="style_input" value="0" v-model="item.qty">
              </div>
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
import Swal from 'sweetalert2'

export default {
  name: 'Accueil',
  data () {
    return {
      products: [],
      productsBask: [],
      visible: false,
      static_url: 'assets/images/',
      images: [],
      article: [],
      qteArticle: []
    }
  },
  mounted () {
    this.getImage()
    this.getProducts()
  },

  methods: {
    async getImage () {
      const response = await RefimageService.fetchRefimages()
      this.images = response.data.refimages
    },

    async getProducts () {
      const response = await BasketService.fetchBasket()
      this.productsBask = response.data.products
      for (let i=0; i<this.productsBask.length; i++){
       this.qteArticle.push(this.productsBask[i].qty)
      }
      if (this.qteArticle.length == 0) {
        this.article = 0
      } else {
      this.article = this.qteArticle.reduce((a, b) => a + b)
      this.qteArticle = []
      }
    },

    async addBasket (item) {
      if(item.qty === undefined) {
     Swal.fire({
      title: 'Vous n avez pas selectionné la quantité ',
        showClass: {
            popup: 'swal2-show',
            backdrop: 'swal2-backdrop-show',
            icon: 'swal2-icon-show'
      },
      hideClass: {
            popup: 'swal2-hide',
            backdrop: 'swal2-backdrop-hide',
            icon: 'swal2-icon-hide'
          }
        })
      } else {
        this.products = {
        id_origin: item._id,
        sticker: item.sticker,
        modele: item.modele,
        description: item.description,
        price: item.prix,
        qty: item.qty
      }
      await BasketService.addBasket(this.products)
        item.checked = true
      }
      this.getProducts()
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
input[type=number] {
  width: 120px;
  height: 100px;
  font-size: 20px;
}
.inputNum{
  float: right;
}
 </style>
