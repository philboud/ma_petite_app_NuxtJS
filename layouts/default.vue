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
.container{
  margin-top: 50px;
  width: 2200px;
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
  color: aliceblue;
  margin-top: 50px;
}
.foot{
  border: 0.2em solid;
  position: relative;
  bottom:0;
  width:100%;
  height:290px;
}
</style>
