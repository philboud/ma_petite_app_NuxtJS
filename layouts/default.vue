<template>
<div>
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
  padding-top: 30px;
  text-align: center;
}
.back{
  margin:0;
  margin-left: -20px;
  padding:0;
  position:relative;
  width: auto;
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
  margin-left: -20px;
  position: relative;
  bottom:0;
  width:auto;
  height:auto;
}
</style>
