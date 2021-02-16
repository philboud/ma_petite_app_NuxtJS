<template>
  <div>
    <br>
     <div class="title">
      <h1>Votre panier</h1><br>
        <div class="total">
      <h2><strong>Total: </strong>{{total}}€</h2>
  </div>
    </div>
    <div class="cadre">
      <div class="vide">
      <h2 v-if="products.length === 0">(Vide)</h2>
      </div>
        <div class="card mb-3" style="max-width: 1000px;" v-for="(item, index) in products" :key="item._id">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img :src="require('~/' + static_url + item.sticker +'.jpeg')">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-title"><strong>{{item.modele}}</strong></h4>
                <p class="card-text"></p>
                <h5>{{item.description}}</h5>
                <div class="alignQty">
                <h2>{{item.price}}€ </h2>
                  <input type="number" @click="changePrice(item, index)" v-model="item.qty"/>
                  </div>
                  <div>
                    <br><br>
                   <b-button @click="deleteProduct(item._id, index)">Supp</b-button>
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
      console.log(this.products)
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
    async changePrice (item,idx) {
     await BasketService.updateBasket({
        modele: item.modele,
        description: item.description,
        price: item.price,
        id:this.products[idx]._id,
        qty: item.qty
      })
      this.getProductsTotal()
    }
  }
}
</script>
<style scoped>
.alignQty{
  float: right;
}
.vide{
  color:white;
}
.cadre{
  margin-top: 10px;
  display: block;
  height: 1000px;
  overflow: auto;
}
 .total{
    background-color: rgb(181, 231, 181);
    margin-top: 5px;
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
