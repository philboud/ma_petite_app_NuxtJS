<template>
<div class="container">
  <div class="row">
    <div class="col-auto col-sm col-md">
  <br>
  <div class="title">
  <h1>ShowRoom</h1>
  <h5>Nombre d'article(s) dans le panier: {{article}}</h5>
  </div>
  <div class="cadre">
    <div class="card-column">
<div class="card mb-4" v-for="(item, index) in images" :key="item._id">
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
                </div> 
              <label><strong>Quantité</strong></label>
             <select class="form-control" v-model="item.nb">
               <option v-for="nb in data" :key="nb">{{nb}}</option>
             </select>
              </div>
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

export default {
  name: 'Showroom',
  data () {
    return {
      products: [],
      productstmp: [],
      productsBask: [],
      visible: false,
      static_url: 'assets/images/',
      images: [],
      article: [],
      qteArticle: [],
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
       for(var i = 0; i < this.images.length; i++){
                   this.images[i].prix = (this.images[i].prix.toLocaleString())
            }
      
    },

    async getProducts () {
      this.products = JSON.parse(localStorage.getItem('panier'))
        if ( this.products == null ){ this.products = [] } else {
          for (let i = 0; i < this.products.length; i ++){
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
      this.products = JSON.parse(localStorage.getItem('panier'))
      if(item.qty === undefined) {
          item.qty = 1
      if (item.nb === undefined) {
          item.nb = 1
        }else{
          item.qty = item.nb
        }
      } 
        this.productstmp = {
        id_origin: item._id,
        sticker: item.sticker,
        modele: item.modele,
        description: item.description,
        price: item.prix,
        qty: item.nb
        }
        for (var i = 0; i < this.products.length; i ++) {
          if (this.productstmp.modele === this.products[i].modele) {
            this.productstmp.qty = parseInt(this.products[i].qty) + parseInt(item.nb)
            this.products.splice([i],1)
            }}
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
  width: auto;
  height: 600px !important;
  text-align: left;
}
.photo{
  width: 200px;
  text-align: center;
  padding-top: 20px
}
.cadre{
  margin-left: 20px;
  width: auto;
  display: inline-block;
  height: 800px;
  overflow: auto;
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
