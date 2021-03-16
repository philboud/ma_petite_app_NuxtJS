<template>
    <div class="cadre">
        <h1>Choisir le moyen de paiement</h1>
        <div @click="onclick"><img src="~/assets/images/visa.jpeg" alt="visa" ></div><br>
        <div @click="onclick"><img src="~/assets/images/cb.jpeg" alt="cb" ></div><br>
        <div @click="onclick"><img src="~/assets/images/master.png" alt="master" ></div><br>
    </div>
</template>
<script>

import Swal from 'sweetalert2'

export default {
    name:'validation',
      data () {
    return {
        products: []
    }
      },
methods: {
    onclick () {
Swal.fire({
  title: 'Dommage...!',
  text: "Votre compte en banque semble un peu maigre, merci de le ré-approvisionner!!!",
  icon: 'warning',
  showCancelButton: false
}).then((result) => {
  if (result.isConfirmed) {
       localStorage.setItem('panier', JSON.stringify(this.products)),
       this.$router.push('/')    
  }
})

    }
}
}
</script>
<style>
h1{
    color: white;
    margin-top: 50px;
}
.cadre{
    float: center;
}
</style>