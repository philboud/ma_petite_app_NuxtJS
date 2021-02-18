<template>
<div>
  <div class="back">
    <Navcomp />
<div class="title"><p>Lux cars</p></div>
<div class="container">
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
  color: aliceblue;
}
.foot{
  border: 0.2em solid;
  position: relative;
  bottom:0;
  width:100%;
  height:245px;
}
</style>
