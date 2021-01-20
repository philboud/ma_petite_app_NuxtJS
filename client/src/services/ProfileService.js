import Api from '@/services/Api'

export default {
  fetchProfiles () {
    return Api().get('profiles')
  },
  getProfile (params) {
    return Api().get('profiles/' + params.id)
  },
  addProfile (params) {
    return Api().post('profiles', params)
  },
  updateProfile (params) {
    return Api().put('profiles/' + params.id, params)
  },

  deleteProfile (id) {
    return Api().delete('profiles/' + id)
  }

}
