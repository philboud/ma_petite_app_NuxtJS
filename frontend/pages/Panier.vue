<template>
  <div class="container">
    <div class="subTitle">
    <h1>Votre panier</h1><br>
    </div>
    <h2 v-if="products.length === 0">(Vide)</h2>
    <div class="card mb-3" style="max-width: 1000px;" v-for="item in products" :key="item._id">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="require('~/' + static_url + item.sticker +'.jpeg')">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"><strong>{{item.modele}}</strong></h5>
        <p class="card-text"></p>
            <p>{{item.description}}</p>
            <h2>{{item.price}} €</h2>
            <b-button @click="deleteProduct(item._id, index)">Supp</b-button>
      </div>
    </div>
  </div>
</div>
  <div class="total">
      <h2><strong>Total: </strong>{{total}}€</h2>
    </div>
  </div>
</template>
<script>
import BasketService from '@/services/BasketService'

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
      console.log(idx)
      await BasketService.deleteBasket(id)
      this.getProductsTotal()
    },
    editProduct (row) {
      var id = row.item._id
      this.$router.push('accueil/' + id)
    }
  }
}
</script>
<style>

.col{
  padding-left: 5%;
}
.subTitle{
  margin-top: 30px;
}
.rowData{
  border-top: rgb(205, 177, 224) solid;
  border-bottom: rgb(205, 177, 224)solid;
}
  li{
    text-align: left;
  }
  .total{
    background-color: rgb(49, 82, 49);
    margin-left: 500px;
    width: 300px;
    border:lightseagreen solid;
    text-align: center;
  }
   </style>
