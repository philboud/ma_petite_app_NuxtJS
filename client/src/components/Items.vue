<template>
  <div class="items">
    <h1>Items</h1>
    <div v-if="items.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewItem' }" class=""
          >Add Item</router-link
        >
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="item in items" v-bind:key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td align="center">
            <router-link
              v-bind:to="{ name: 'EditItem', params: { id: item._id } }"
              >Editer</router-link>
                <a href="#" @click="deleteItem(item._id)">Supprimer</a>
          </td>
        </tr>
      </table>
          <div>
          <button class="add_item_btn" @click="addItem">Ajouter un item</button>
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
import ItemsService from '@/services/ItemsService'
export default {
  name: 'items',
  data () {
    return {
      items: []
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
    async deleteItem (id) {
      await ItemsService.deleteItem(id)
      this.$router.go()
    },
    addItem () {
      this.$router.push('/items/new')
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th,
table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_item_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
.add_item_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
