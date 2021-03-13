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
methods: {
    onclick () {
             Swal.fire({
      title: 'Merci de réapprovisionner votre compte, celui-ci semble un peu maigre!!!!',
        showClass: {
            popup: 'swal2-show',
            backdrop: 'swal2-backdrop-show',
            icon: 'swal2-icon-show'
      },
      hideClass: {
            popup: 'swal2-hide',
            backdrop: 'swal2-backdrop-hide',
            icon: 'swal2-icon-hide'
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