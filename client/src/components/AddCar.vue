<template>
  <div>
    <b-table striped hover :items="refimages"></b-table>
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
