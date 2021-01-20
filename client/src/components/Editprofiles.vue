<template>
<div class="cadre">
  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Details du profile"
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
      <b-button variant="primary" @click="updateProfile">MAJ</b-button>
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
      address: ''
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
    },
    async updateProfile () {
      await ProfileService.updateProfile({
        id: this.$route.params.id,
        lastname: this.lastname,
        firstname: this.firstname,
        address: this.address
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
</style>
