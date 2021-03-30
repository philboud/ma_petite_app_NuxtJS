<template>
<div class="container">

 
 
  <div class="back">
     <Navcomp />
<div>
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
body{

  margin-left: -30px !important;
  }
.container{
  width: 3160px !important;
  max-width: 100% !important;
  padding-top: 20px;
  text-align: center;
  }
.back{
  width: auto;
  top: 50px;
  overflow: auto;
  background-image: url('~assets/images/fond.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: padding-box;
}
.title{
  color: aliceblue;
}
.foot{
  margin-left: -20px;
  position: relative;
  bottom:0;
  width:auto;
  height:auto;
}
</style>
