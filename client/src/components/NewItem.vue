<template>
<div class="cadre">
  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Ajouter un item"
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
               <b-form-textarea id="nested-description" v-model="description"></b-form-textarea>
      </b-form-group>
      <b-button variant="primary" @click="addItem">Ajouter</b-button>
      <b-button variant="primary" @click="returnMeth">Retour</b-button>
    </b-form-group>
  </b-card>
</div>

</template>

<script>
import ItemsService from '@/services/ItemsService'
export default {
  name: 'NewItem',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    async addItem () {
      await ItemsService.addItem({
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
  padding-top: 30px;
}
</style>
