<template>
<div>
  <div class="outer">
  <div class="subtitle">
    <div class="butcarrous">
<h4>
  Bienvenue sur LuxCar
</h4><br>
<label for="user">Nom d'utilisateur </label><br>
<input placeholder="pseudo (n importe lequel)" class="userName" v-model="user"><br><br>
<b-button @click="goToShowroom()">
  Accedez au showroom
</b-button>
</div><br>
    <div class="carrousel">
  <b-carousel 
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    :interval="3000"
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide  v-for="(item) in image" :key="item"
      caption=""
      :img-src="require('~/' + static_url + item +'.jpeg')"
    ></b-carousel-slide>
  </b-carousel>
</div>
</div>
</div>
</div>
</template>

<script>

import RefimageService from '@/services/RefimageService'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Swal from 'sweetalert2'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  name: 'Accueil',
  data () {
    return {
      swiperOption: {
          pagination: {
            el: '.swiper-pagination'
           }
          },
      visible: false,
      static_url: 'assets/images/', 
      image: [],
      images: [],
      user: '',
      panier: []
    }
  },
  mounted () {
    this.getImage()
    this.getUser()
  },

  methods: {
    
    getUser () {
      if (this.user === '') {
        this.user = localStorage.getItem('user')
      }
      if(localStorage.getItem('panier') === null){
        localStorage.setItem('panier', JSON.stringify(this.panier))
      }
    },

    goToShowroom () {
      if (this.user === '') {
        Swal.fire('Saisir un nom d utilisateur')
      } else {
      localStorage.setItem('user', this.user)
      this.$router.push('/showroom')
      }
    },

    async getImage () {
      const response = await RefimageService.fetchRefimages()
      this.images = response.data.refimages
      for(var i = 0; i<this.images.length; i++){
         this.image.push(this.images[i].sticker)
      }
    }
  }
}
</script>
<style>
.userName{
  text-align: center;
}
.outer{
  width: 600px;
}
.subtitle{
  text-align: center;
  color:azure;
  padding: 20px;
  text-align: center;
}
.butcarrous{
  display: inline-block;
  padding: 40px;
}
.carrousel{
  display: inline-block;
  color:azure;
  width: 400px;
  height: 250px;
 }
</style>