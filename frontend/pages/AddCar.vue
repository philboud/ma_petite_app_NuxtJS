<template>
  <div class="stripedTable">
    <b-table striped hover :items="refimages" class="text-light"></b-table>
    <Articlemgnt/>
  </div>
</template>

<script>

import RefimageService from '@/services/RefimageService'
import Articlemgnt from '@/components/Articlemgnt'

export default {
  name: 'AddCar',
  data () {
    return {
      refimages: []
    }
  },
  components: {
    Articlemgnt
  },
  mounted () {
    this.getImage()
  },
  methods: {
    async getImage () {
      const response = await RefimageService.fetchRefimages()
      this.refimages = response.data.refimages
    }
  }
}
</script>
<style>
  .stripedTable{
    margin-left: 25%;
    width: 50%;
    margin-top: 30px;
  }
</style>
