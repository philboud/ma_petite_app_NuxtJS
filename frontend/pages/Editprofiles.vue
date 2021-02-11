<template>
<div class="cadre">
  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Details du profil"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
       <b-form-group
        label="Nom:"
        label-for="nested-lastname"
        label-cols-sm="4"
        label-align-sm="right">
               <b-form-input id="nested-lastename" name="lastname"  v-model="lastname"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Prénom:"
        label-for="nested-firstname"
        label-cols-sm="4"
        label-align-sm="right">
               <b-form-input id="nested-firstname"  v-model="firstname"></b-form-input>
      </b-form-group>
           <b-form-group
        label="Adresse:"
        label-for="nested-address"
        label-cols-sm="4"
        label-align-sm="right">
               <b-form-textarea id="nested-address"  v-model="address"></b-form-textarea>
      </b-form-group>
       <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Données personnelles"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
         <b-form-group
        label="e-Mail:"
        label-for="nested-mail"
        label-cols-sm="2"
        label-align-sm="right">
               <b-form-input id="nested-mail"  v-model="dataperso.mail"></b-form-input>
      </b-form-group>
                   <b-form-group
        label="téléphone:"
        label-for="nested-phone"
        label-cols-sm="2"
        label-align-sm="right">
               <b-form-input id="nested-phone"  v-model="dataperso.phone"></b-form-input>
      </b-form-group>
               <b-form-group
        label="Genre:"
        label-for="nested-genre"
        label-cols-sm="2"
        label-align-sm="right">
               <b-form-input id="nested-genre"  v-model="dataperso.genre"></b-form-input>
      </b-form-group>
      </form>
    </b-modal>
      <b-button variant="primary" v-b-modal.modal-prevent-closing>Données personnelles</b-button>
      <b-button variant="primary" @click="updateProfile">mettre à jour</b-button>
      <b-button variant="primary" @click="returnMeth">Retour</b-button>
    </b-form-group>
  </b-card>
</div>

</template>

<script>
import ProfileService from '@/services/ProfileService'
export default {
  name: 'EditProfile',
  data () {
    return {
      lastname: '',
      firstname: '',
      address: '',
      dataperso: [{
        mail: '',
        phone: '',
        genre: ''
      }]
    }
  },
  mounted () {
    this.getProfile()
  },
  methods: {
    async getProfile () {
      const response = await ProfileService.getProfile({
        id: this.$route.params.id
      })

      this.lastname = response.data.lastname
      this.firstname = response.data.firstname
      this.address = response.data.address
      this.dataperso = response.data.dataperso[0]
      console.log(response.data)
    },
    async updateProfile () {
      await ProfileService.updateProfile({
        id: this.$route.params.id,
        lastname: this.lastname,
        firstname: this.firstname,
        address: this.address,
        dataperso: {
          mail: this.dataperso.mail,
          phone: this.dataperso.phone,
          genre: this.dataperso.genre
        }
      })
      this.$router.push({ name: 'Profiles' })
    },
    handleOk (bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit () {
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
    returnMeth () {
      this.$router.push({ name: 'Profiles' })
    },
    resetModal () {
      this.name = ''
      this.nameState = null
    }
  }
}
</script>
<style type="text/css">
.cadre{
  padding-top: 30px;
}
</style>
