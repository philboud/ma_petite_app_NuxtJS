<template>
<div class="cadre">
  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Ajouter un profil"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
       <b-form-group
        label="Nom:"
        label-for="nested-lastname"
        label-cols-sm="4"
        label-align-sm="right">
               <b-form-input id="nested-lastname" v-model="lastname"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Prénom:"
        label-for="nested-firstname"
        label-cols-sm="4"
        label-align-sm="right">
               <b-form-input id="nested-firsttname" v-model="firstname"></b-form-input>
      </b-form-group>
            <b-form-group
        label="e-Mail:"
        label-for="nested-mail"
        label-cols-sm="4"
        label-align-sm="right">
               <b-form-input id="nested-mail" v-model="dataperso.mail"></b-form-input>
      </b-form-group>
            <b-form-group
        label="Téléphone:"
        label-for="nested-phone"
        label-cols-sm="4"
        label-align-sm="right">
               <b-form-input id="nested-phone" v-model="dataperso.phone"></b-form-input>
      </b-form-group>
            <b-form-group
        label="Genre:"
        label-for="nested-genre"
        label-cols-sm="4"
        label-align-sm="right">
               <b-form-input id="nested-genre" v-model="dataperso.genre"></b-form-input>
      </b-form-group>
       <b-form-group
        label="Adresse:"
        label-for="nested-address"
        label-cols-sm="4"
        label-align-sm="right">
               <b-form-textarea id="nested-address" v-model="address"></b-form-textarea>
      </b-form-group>
      <b-button variant="primary" @click="addProfile">Ajouter</b-button>
      <b-button variant="primary" @click="returnMeth">Retour</b-button>
    </b-form-group>
  </b-card>
</div>
</template>
<script>
import ProfileService from '@/services/ProfileService'
export default {
  name: 'NewProfiles',
  data () {
    return {
      lastname: '',
      firstname: '',
      address: '',
      dataperso: {
        mail: '',
        phone: '',
        genre: ''
      }
    }
  },
  methods: {
    async addProfile () {
      await ProfileService.addProfile({
        lastname: this.lastname,
        firstname: this.firstname,
        address: this.address,
        dataperso: this.dataperso
      })
      this.$router.push({ name: 'Profiles' })
    },
    returnMeth () {
      this.$router.push({ name: 'Profiles' })
    }
  }
}
</script>
<style type="text/css">
.cadre{
  padding-top: 30px;
}
</style>
