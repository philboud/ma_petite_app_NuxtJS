<template>
    <div>
<h1 >ShowRoom</h1>
<b-container>
  <b-row align-v="start">
    <b-col sm = 2>
  <ul>
    <div v-b-modal.modal-center-xl>
         <li v-for="image in images" :key="image"><br>
  <b-img :src="static_url + image +'.jpeg'" @click="onClick(image)"></b-img></li>
    </div>
  </ul>
  </b-col>
    <b-col>
       <div v-if="visible" @click="onClickVisible()">
    <b-img :src="static_url +imageG+'.jpeg'"></b-img><br><br>
    </div>
    <p @click="addBasket">Ajouter au panier</p>
    </b-col>
    </b-row>
    </b-container>
    </div>
</template>

<script>
export default {
  name: 'Accueil',
  data () {
    return {
      visible: true,
      static_url: '/static/images/',
      images: ['stick2', 'stick3', 'stick5', 'stick6', 'stick7'],
      imageG: ''
    }
  },
  methods: {
    onClick (image) {
      this.visible = true
      this.imageG = image.replace('stick', 'image')
      console.log(this.imageG)
    },
    onClickVisible () {
      this.visible = false
    },
    addBasket () {
      console.log('ajouté au panier')
      this.visible = false
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
    max-width: 2000px;
  }
 </style>
