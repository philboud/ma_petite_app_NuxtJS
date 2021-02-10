import Api from '@/services/Api'

export default {
  fetchItems () {
    return Api().get('items')
  },
  getItem (params) {
    return Api().get('item/' + params.id)
  },
  addItem (params) {
    return Api().post('items', params)
  },
  updateItem (params) {
    return Api().put('items/' + params.id, params)
  },

  deleteItem (id) {
    return Api().delete('items/' + id)
  }

}
