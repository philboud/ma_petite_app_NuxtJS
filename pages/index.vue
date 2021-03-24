<template>
<div>
  <div class="title">
<h4>
  Bienvenue sur LuxCar
</h4>
<b-button type="success" @click="goToShowroom()">
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
</template>

<script>

import RefimageService from '@/services/RefimageService'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

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
      image: [],
      swiperOption: {
          pagination: {
            el: '.swiper-pagination'
           }
          },
      visible: false,
      static_url: 'assets/images/',
      images: []
      
    }
  },
  mounted () {
    this.getImage()
   
  },

  methods: {

    goToShowroom () {
      this.$router.push('/showroom') 
    },

    async getImage () {
      const response = await RefimageService.fetchRefimages()
      this.images = response.data.refimages
      for(var i = 0; i<this.images.length; i++){
         this.image.push(this.images[i].sticker)
      }
       console.log(this.image)
        }
  }
}
</script>
<style>
.title{
  color:azure;
}
.carrousel{
  color:azure;
  width: 300px;
  height: 250px;
}
</style>