<template>
    <div>
        <h1>Panier</h1>
<ul>
    <li v-for="prod in product" :key="prod._id">
 <b-img :src="static_url + prod.image +'.jpeg'"></b-img>
 <h2>{{prod.price}}</h2>
    </li>
</ul>
<div>Total</div>
        </div>
</template>
<script>
import BasketService from '@/services/BasketService'

export default {
  name: 'basket',
  data () {
    return {
      test: [],
      product: {},
      static_url: '/static/images/'
    }
  },
  mounted () {
    this.getProducts()
  },
  methods: {
    async getProducts () {
      const response = await BasketService.fetchBasket()
      this.product = response.data.products
      console.log(this.product)
    },
    async deleteProduct (row) {
      var id = row.item._id
      this.profiles.splice(row.index, 1)
      await BasketService.deleteBasket(id)
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
   </style>
