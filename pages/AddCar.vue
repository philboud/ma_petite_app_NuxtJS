<template>
  <div>
    <br>
   <div class="cadreAdd">
  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Informations article"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label="Image:"
        label-for="nested-image"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-image" v-model="refimages.image"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Stickers:"
        label-for="nested-sticker"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-sticker" v-model="refimages.sticker"></b-form-input>
      </b-form-group>

      <b-form-group
        label="Modele:"
        label-for="nested-modele"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-modele" v-model="refimages.modele"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Description:"
        label-for="nested-description"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-textarea id="nested-description" v-model="refimages.description"></b-form-textarea>
        </b-form-group>
      <b-form-group
        label="Prix:"
        label-for="nested-prix"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-prix" v-model="refimages.prix"></b-form-input>
        </b-form-group>
    </b-form-group>
    <b-button @click="addArticle">Ajouter</b-button>
    <b-button @click="onClickCancel">Annuler</b-button>
  </b-card>
</div>
  </div>
</template>

<script>

import RefimageService from '@/services/RefimageService'

export default {
  name: 'AddCar',
  data () {
    return {
      refimageTab: [],
            refimages: {
        image: '',
        sticker: '',
        modele: '',
        description: '',
        prix: '',
        qty:''
      }
    }
  },
   methods: {
     onClickCancel () {
       this.$router.push({ name: 'index' })
     },
     async addArticle () {
          if (this.refimages.sticker === '')            {
            this.refimages.sticker = 'noImage'
            }
            if (this.refimages.image === '')
            {
            this.refimages.image = 'noImage'
            }
      await RefimageService.addRefimages({
        image: this.refimages.image,
        sticker: this.refimages.sticker,
        modele: this.refimages.modele,
        description: this.refimages.description,
        prix: this.refimages.prix,
        qty: this.refimages.qty
      })
      this.$router.push({ name: 'index' })
    }
  }
}
</script>
<style>
  .cadreAdd{
    margin-top: 10%;
    margin-left: 25%;
    width: 50%;
  }
</style>
