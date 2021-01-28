import Api from '@/services/Api'

export default {
  fetchRefimages () {
    return Api().get('refimages')
  },
  getRefimages (params) {
    return Api().get('refimages/' + params.id)
  },
  addRefimages (params) {
    return Api().post('refimages/', params)
  },
  updateRefimages (params) {
    return Api().put('refimages/' + params.id, params)
  },

  deleteRefimages (id) {
    return Api().delete('refimages/' + id)
  }

}
