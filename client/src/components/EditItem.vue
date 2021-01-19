<template>
<div class="cadre">
  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Details de l'item"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
       <b-form-group
        label="Titre:"
        label-for="nested-titre"
        label-cols-sm="4"
        label-align-sm="right">
               <b-form-input id="nested-titre" name="title"  v-model="title"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Description:"
        label-for="nested-description"
        label-cols-sm="4"
        label-align-sm="right">
               <b-form-input id="nested-description"  v-model="description"></b-form-input>
      </b-form-group>
      <b-button variant="primary" @click="updateItem">MAJ</b-button>
      <b-button variant="primary" @click="returnMeth">Retour</b-button>
    </b-form-group>
  </b-card>
</div>

</template>

<script>
import ItemsService from '@/services/ItemsService'
export default {
  name: 'EditItem',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  mounted () {
    this.getItem()
  },
  methods: {
    async getItem () {
      const response = await ItemsService.getItem({
        id: this.$route.params.id
      })

      this.title = response.data.title
      this.description = response.data.description
    },
    async updateItem () {
      await ItemsService.updateItem({
        id: this.$route.params.id,
        title: this.title,
        description: this.description
      })
      this.$router.push({ name: 'Items' })
    },
    returnMeth () {
      this.$router.push({ name: 'Items' })
    }
  }
}
</script>
<style type="text/css">
.cadre{
  width: 800px;
  padding-left: 90px;
  padding-top: 30px;
 }
</style>
