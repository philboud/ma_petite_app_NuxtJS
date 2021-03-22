<template>
<div>
  <br>
  <h1 class="title">ShowRoom</h1>
  <h5 class="title">Nombre d'article(s) dans le panier: {{article}}</h5>
  <div class="cadre">
    <div class="card-column">
<div class="card mb-4" style="max-width: 700px;" v-for="(item, index) in images" :key="item._id">
  <div class="row no-gutters">
    <div class="col-md-5">
      <div class="photo">
      <img :src="require('~/' + static_url + item.sticker +'.jpeg')">
    </div>
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
           
            <div  class="but"><b-button @click="addBasket(item, index)"> Ajouter au panier</b-button></div>
              <div  class="inputNum">
                <div class="qty">
                 <h5 v-if="item.checked">Article ajouté au panier {{item.qty}} fois</h5>
              <label><strong>Quantité</strong></label>
             <input type="number" id="qty" :min=1 class="style_input" value=1 v-model="item.qty">
              </div>
              </div>
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
      productstmp: [],
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
      
      this.products = JSON.parse(localStorage.getItem('panier'))
       if ( this.products == null ){ this.products = [] } else {
         for (let i=0; i<this.products.length; i++){
       this.qteArticle.push(parseInt(this.products[i].qty))
        }
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
        item.qty = 1
      } 
        this.productstmp = {
        id_origin: item._id,
        sticker: item.sticker,
        modele: item.modele,
        description: item.description,
        price: item.prix,
        qty: item.qty
        }
        this.products.push(this.productstmp)
      await localStorage.setItem('panier', JSON.stringify(this.products))
        item.checked = true
      
      this.getProducts()
    }
  }
}
</script>
<style>
.card{
  background-color: rgb(191, 235, 202);
  border-radius: 30px;
}
.photo{
  padding-left: 20px;
  padding-top: 20px
}
.cadre{
  display: block;
  height: 800px;
  overflow: auto;
}
.title{
   color: aliceblue;
}
input[type=number] {
  width: 120px;
  height: 100px;
  font-size: 20px;
}
.inputNum{
  float: right;
  margin-bottom: 20px;
}
 </style>
