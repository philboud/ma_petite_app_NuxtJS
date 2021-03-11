import Api from '@/services/Api'

export default {
  fetchBasket () {
    return Api().get('products')
  },
  fetchBasketTotal () {
    return Api().get('total')
  },
  getBasket (params) {
    return Api().get('products/' + params.id)
  },
  addBasket (params) {
    return Api().post('products/', params)
  },
  updateBasket (params) {
    return Api().put('product/' + params.id, params)
  },

  deleteBasket (id) {
    return Api().delete('products/' + id)
  }

}
