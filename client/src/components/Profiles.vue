<template>
  <div class="profiles">
    <div class="title">
    <h1>Profils</h1>
    </div>
    <div v-if="profiles.length > 0" class="table-wrap">
    <b-table striped hover :items="profiles" :fields="fields" bordered head-variant="dark">
      <template #cell(action)="row">
        <div class="row">
        <div class="col-md-2 col-lg-12">
        <b-button variant="primary" @click="editProfile(row)">Edit</b-button>
        <b-button variant="primary" @click="deleteProfile(row)">Supp</b-button>
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
      <router-link v-bind:to="{ name: 'NewItem' }" class="add_item_link"
        >Add Item</router-link
      >
    </div>
  </div>
</template>

<script>
import ProfileService from '@/services/ProfileService'
export default {
  name: 'profiles',
  data () {
    return {
      fields: [{key: 'lastname', label: 'Nom'}, {key: 'firstname', label: 'Prénom'}, {key: 'address', label: 'Adresse'}, {key: 'action'}],
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
    async getProfiles () {
      const response = await ProfileService.fetchProfiles()
      this.profiles = response.data.profiles
      console.log(response.data.profiles)
    },
    async deleteProfile (row) {
      var id = row.item._id
      this.profiles.splice(row.index, 1)
      await ProfileService.deleteProfile(id)
    },
    addProfile () {
      this.$router.push('/profiles/new')
    },
    editProfile (row) {
      var id = row.item._id
      this.$router.push('profiles/' + id)
    }
  }
}
</script>
<style type="text/css">
.title{
  text-decoration: underline;
}
.table-wrap {
  width: 100%;
  text-align: center;
}
</style>
