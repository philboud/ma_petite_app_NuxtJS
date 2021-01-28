<template>
    <div>
        <h1>Panier</h1>
        <h2 v-if="product.length === 0">(Vide)</h2>
   <ul>
  <li v-for="prod in product" :key="prod._id">
  <b-container>
    <b-row>
   <b-col>
 <b-img :src="static_url + prod.sticker +'.jpeg'"></b-img>
 </b-col>
 <b-col>
 <h2>{{prod.price}}€</h2>
 </b-col>
 <b-col>
   <p>{{prod.description}}</p>
   </b-col>
 <b-col>
 <b-button @click="deleteProduct(prod._id)">Supp</b-button>
  </b-col>
   </b-row>
    </b-container>
</li>
</ul>
<div class="total"><h2>Total: {{total}}€</h2></div>
  </div>
</template>
<script>
import BasketService from '@/services/BasketService'

export default {
  name: 'basket',
  data () {
    return {
      product: [],
      total: '',
      static_url: '/static/images/'
    }
  },
  mounted () {
    this.getProducts()
    this.getProductsTotal()
  },
  methods: {
    async getProducts () {
      const response = await BasketService.fetchBasket()
      this.product = response.data.products
      console.log(this.product)
    },
    async getProductsTotal () {
      const response = await BasketService.fetchBasketTotal()
      this.total = response.data.total
    },
    async deleteProduct (id) {
      await BasketService.deleteBasket(id)
      if (this.product.length === 0) {
        this.router.push('accueil/')
      }
      this.$router.go()
    },
    editProduct (row) {
      var id = row.item._id
      this.$router.push('accueil/' + id)
    }
  }
}
</script>
<style>
  li{
    margin-top: 20px;
    text-align: left;
  }
  .total{
    text-align: right;
  }
   </style>
