import Api from '@/services/Api'

export default {
  fetchChat () {
    return Api().get('chat')
  },
  getChat (params) {
    return Api().get('chat/' + params.id)
  },
  addChat (params) {
    return Api().post('chat', params)
  },
  updateChat (params) {
    return Api().put('chat/' + params.id, params)
  },

  deleteChat (id) {
    return Api().delete('chat/' + id)
  }

}