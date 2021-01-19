<template>
  <div class="items">
    <div class="title">
    <h1>Items</h1>
    </div>
    <div v-if="items.length > 0" class="table-wrap">
    <b-table striped hover :items="items" :fields="fields" bordered head-variant="dark">
      <template #cell(action)="row">
        <b-button variant="primary" @click="info(row.item, row.index, $event.target)" class="mr-1">
          Détails
        </b-button>
        <b-button variant="primary" @click="editItem(row)">Edit</b-button>
        <b-button variant="primary" @click="deleteItem(row)">Supp</b-button>
        </template>
    </b-table>
            <div>
            <b-button variant="primary" @click="addItem">Ajouter un item</b-button>
        </div>
    </div>
    <div v-else>
      There are no item.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewItem' }" class="add_item_link"
        >Add Item</router-link
      >
    </div>
    <div>
<b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
    </div>
  </div>
</template>

<script>
import ItemsService from '@/services/ItemsService'
export default {
  name: 'items',
  data () {
    return {
      fields: ['title', 'description', 'action'],
      items: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        description: ''
      }
    }
  },
  mounted () {
    this.getItems()
  },
  methods: {
    async getItems () {
      const response = await ItemsService.fetchItems()
      this.items = response.data.items
    },
    async deleteItem (row) {
      var id = row.item._id
      this.items.splice(row.index, 1)
      await ItemsService.deleteItem(id)
    },
    addItem () {
      this.$router.push('/items/new')
    },
    editItem (row) {
      var id = row.item._id
      this.$router.push('items/' + id)
    },
    resetInfoModal () {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    info (item, index, button) {
      this.infoModal.title = `Détail de ` + item.title
      this.infoModal.content = item.description
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    }
  }
}
</script>
<style type="text/css">
.title{
  text-decoration: underline;
}
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
</style>
