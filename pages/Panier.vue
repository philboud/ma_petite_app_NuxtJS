<template>
  <div class="container">
    <br>
     <div class="title">
      <h1>Votre panier</h1><br>
        <div class="total">
           <b-button @click="validationBasket()"><h3>Valider votre panier</h3></b-button>
      <h2><strong>Total: </strong>{{total}}€</h2>
  </div>
    </div>
    <div class="cadrePanier">
      <div class="vide">
      <h2 v-if="products.length === 0">(Vide)</h2>
      </div>
        <div class="card mb-3" style="max-width: 1000px;" v-for="(item, index) in products" :key="item._id">
          <div class="row no-gutters">
            <div class="col-md-4">
              <div class="photo">
              <img :src="require('~/' + static_url + item.sticker +'.jpeg')">
            </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-title"><strong>{{item.modele}}</strong></h4>
                <p class="card-text"></p>
                <h5>{{item.description}}</h5>
                <div class="alignQty">
                <h2>{{item.price}}€ </h2>
                  <input type="number" :min=1 @click="changePrice(item, index)" v-model="item.qty"/>
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
  
</template>
<script>
import BasketService from '@/services/BasketService'
import Swal from 'sweetalert2'

export default {
  name: 'basket',
  data () {
    return {
      products: [],
      total: '',
      static_url: 'assets/images/'
    }
  },
  mounted () {
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
    },
    async getProducts () {
      const response = await BasketService.fetchBasket()
      this.products = response.data.products
    },
    async getProductsTotal () {
      const response = await BasketService.fetchBasketTotal()
      this.total = response.data.total
    },
    async deleteProduct (id, idx) {
      this.products.splice(idx, 1)
      await BasketService.deleteBasket(id)
      this.getProductsTotal()
    },
    editProduct (row) {
      var id = row.item._id
      this.$router.push('accueil/' + id)
    },
    changePriceOnClick_En_standby (item,idx) {
      var oldItem = item.qty - 1
           Swal.fire({
        title: 'Etes vous certain de modifier la quantité?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Annulé',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui'
      }).then((result) => {
         if (result.isConfirmed) {
          this.changePrice(item, idx)
          Swal.fire(
            'Modifié!'
          )
        }else{
          Swal.fire(
            'Annulé!'
          )
          if(item.qty<<item.qty) {
          item.qty = item.qty -1
          }
        }
      })
    },
    async changePrice (item,idx) {
     await BasketService.updateBasket({
        modele: item.modele,
        description: item.description,
        price: item.price,
        id:this.products[idx]._id,
        qty: item.qty
        })
      this.getProductsTotal()
    },

    validationBasket () {
      this.$router.push('Validation')
    }
  }
}
</script>
<style>
.alignQty{
  float: right;
  margin-bottom: 20px;
}
.photo{
  padding-left: 20px;
  padding-top: 20px
}
.vide{
  color:white;
}
.cadrePanier{
  display: block;
  height: 900px;
  overflow: auto;
}
 .total{
    padding-top: 15px;
    border-radius: 20px;
    background-color: rgb(117, 159, 236);
    margin-top: 5px;
    margin-bottom: 10px;
    margin-left: 700px;
    width: 300px;
    border:lightseagreen solid;
    text-align: center;
    color:blue
  }
  title{
  color: aliceblue;
}
   </style>
