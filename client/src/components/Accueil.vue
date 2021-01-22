<template>
    <div>
<h1>ShowRoom</h1>
<b-container>
  <b-row align-h="start">
    <b-col sm="2">
  <ul>
    <div @click="goAway()">
    <li v-for="image in images" :key="image"><br>
  <b-img :src="static_url + image +'.jpeg'"></b-img>
    </li>
    </div>
  </ul>
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
      static_url: '/static/images/',
      images: ['stick2', 'stick3', 'stick5', 'stick6', 'stick7']
    }
  },
  methods: {
    goAway () {
      console.log(this.images.image)
    }
  }
}
</script>
<style>
  li{
    list-style: none;
  }
  </style>
