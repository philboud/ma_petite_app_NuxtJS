<template>
  <div class="profiles">
    <div class="title">
      <br>
    <h1>Profiles</h1>
    </div>
    <div v-if="profiles.length > 0" class="table-wrap">
    <b-table striped hover :items="profiles" :fields="fields" bordered head-variant="dark" class="text-light">
      <template #cell(actions)="row">
        <div class="row">
        <div class="col-md-2 col-lg-12">
        <b-button variant="primary" @click="editProfile(row)">Edit</b-button>
        <b-button variant="primary" @click="deleteIt(row)">Supp</b-button>
        </div>
        </div>
        </template>
    </b-table>
            <div>
            <b-button variant="primary" @click="addProfile">Ajouter un profil</b-button>
        </div>
    </div>
    <div v-else>
      There are no item.. Lets add one now <br /><br />
      <nuxt-link class="nav-link" to="NewProfiles">Add profile</nuxt-link>
    </div>
  </div>
</template>

<script>
import ProfileService from '@/services/ProfileService'
import Swal from 'sweetalert2'
window.Swal = Swal

export default {
  name: 'profiles',
  data () {
    return {
      fields: [{key: 'lastname', label: 'Nom'}, {key: 'firstname', label: 'Prénom'}, {key: 'address', label: 'Adresse'}, {key: 'actions'}],
      profiles: [],
      infoModal: {
        id: 'info-modal',
        lastname: '',
        firstname: '',
        address: ''
      }
    }
  },
  mounted () {
    this.getProfiles()
  },
  methods: {
    deleteIt (row) {
      Swal.fire({
        title: 'Etes vous cerrtain?',
        text: 'Cette suppression sera irreversible!',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Annulé',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimer!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteProfile(row)
          Swal.fire(
            'Supprimer!',
            'Enregistrement supprimé',
            'success'
          )
        }
      })
    },
    async getProfiles () {
      const response = await ProfileService.fetchProfiles()
      this.profiles = response.data.profiles
    },
    async deleteProfile (row) {
      var id = row.item._id
      this.profiles.splice(row.index, 1)
      await ProfileService.deleteProfile(id)
    },
    addProfile () {
      this.$router.push('/newProfiles')
    },
    editProfile (row) {
      var id = row.item._id
      this.$router.push({name: 'Editprofiles', params:{id: id}})
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  
  margin-left: 25%;
  width: 50%;
  color: antiquewhite;
  text-align: center;
}
</style>
