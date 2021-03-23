<template>
<div class="container">
  <div class="back">
    <Navcomp />
<div class="showroom">
      <Nuxt />
  </div>
   </div>
  <div class="foot">
    <Footer />
       </div>
      </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navcomp from '@/components/Navcomp.vue'
export default {
  components: { 
    Navcomp,
    Footer
  }
}
</script>

<style>
.showroom{
  margin-top: 10px;
}
.container{
  margin-top: 50px;
  width: 1000px;
}
.back{
  margin:0;
  padding:0;
  position:relative;
  height: 1200px;
  background-image: url('~assets/images/fond.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-clip: padding-box;
}
.title{
  margin-left: 30px;
  color: aliceblue;
}
.foot{
  position: relative;
  bottom:0;
  width:100%;
  height:auto;
}
</style>
