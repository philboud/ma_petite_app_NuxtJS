<template>
  <div class="container">
     <div class="title">
      <h1>Votre panier</h1><br>
        <div class="total">
           <b-button @click="validationBasket()"><h3>Valider votre panier</h3></b-button>
      <h2><strong>Total: </strong>{{total}}€</h2>
  </div>
    </div>
    <div class="cadrePanier">
      <div class="vide">
      <button v-if="products.length === 0" @click="goBackShowroom()">(Panier vide cliquer pour retourner au Showroom)</button>
      </div>
      <div class="carformat">
        <div class="card mb-4" style="max-width: 400px;" v-for="(item, index) in products" :key="item._id">
          <div class="row no-gutters">
            <div class="col-md-5">
              <div class="photo">
              <img :src="require('~/' + static_url + item.sticker +'.jpeg')">
            </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-title"><strong>{{item.modele}}</strong></h4>
                <p class="card-text"></p>
                <div class="alignQty">
                <h4>{{item.price}}€ </h4>
                  <select class="form-control" @change="changePriceOnClick(item, index)" v-model="item.qty">
                   <option v-for="nb in data" :key="nb">{{nb}}</option>
                   </select>
                  </div>
                  <div>
                    <br><br>
                     <b-button @click="deleteIt(item._id, index)">Supp</b-button>
                   </div>
               </div>
            </div>
          </div>
      </div>
      </div>
  </div>
  </div>
  
</template>
<script>
import BasketService from '@/services/BasketService'
import Swal from 'sweetalert2'

export default {
  name: 'basket',
  data () {
    return {
      products: [],
      productstmp: [],
      productsTotal: [],
      total: '',
      static_url: 'assets/images/',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    }
  },
  mounted () {
    if(localStorage.getItem('panier') === null) {
      this.products = []
   }
    this.getProducts()
    this.getProductsTotal()
  },
  methods: {
        deleteIt (item, idx) {
      Swal.fire({
        title: 'Etes vous certain de vouloir supprimé cet article?',
        text: 'Cette opération est irreversible!',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Annulé',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimer!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteProduct(item, idx)
          Swal.fire(
            'Supprimé!',
            'Enregistrement supprimé.',
            'success'
          )
        }
      })
         if (this.total === 0) {
             
          }
    },
    async getProducts () {
      this.products = JSON.parse(localStorage.getItem('panier'))
      },
    async getProductsTotal () {
      if(localStorage.getItem('panier') === null){
        this.total = 0
        
      }
      this.getProducts()
      this.productsTotal = []
      for(var i = 0; i<this.products.length; i++){
        this.productsTotal.push(parseInt((this.products[i].price).replace(/\s/g,"")) * this.products[i].qty)
        } 
        if (this.productsTotal.length != 0){
        this.total = (this.productsTotal).reduce((a, b) => a + b).toLocaleString()
        }else{
          this.total = 0
        }
    },
    async deleteProduct (id, idx) {
      this.products.splice(idx, 1)
      localStorage.removeItem('panier')
      localStorage.setItem('panier', JSON.stringify(this.products))
       this.getProductsTotal()
    },
    changePriceOnClick (item,idx) {
              localStorage.removeItem('panier')
              localStorage.setItem('panier', JSON.stringify(this.products))
              this.getProductsTotal()
                   if(item.qty<<item.qty) {
          item.qty = item.qty -1
         }
   
    },

    async changePrice (item,idx) {
        this.getProductsTotal()
    },

    validationBasket () {
      this.$router.push('Validation')
    },
    goBackShowroom () {
      this.$router.push('Showroom')
    }
  }
}
</script>
<style>
.cardformat{
  height: 400px;
}
.alignQty{
  float: right;
  margin-bottom: 20px;
}
.photo{
  margin-left: 25px;
  padding-top: 20px
}
.vide{
  color:white;
}
.cadrePanier{
  margin-top: 50px;
  margin-left: 20px;
  display: block;
  height: 700px;
  overflow: auto;
}
 .total{
    padding-top: 15px;
    border-radius: 20px;
    background-color: rgb(117, 159, 236);
    margin-top: 5px;
    margin-bottom: 10px;
    margin-left: 20px;
    width: 300px;
    border:lightseagreen solid;
    text-align: center;
    color:blue
  }
  title{
    margin-left: 30px;
    color: aliceblue;
}
   </style>
