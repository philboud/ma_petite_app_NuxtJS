import Vue from 'vue'
import Router from 'vue-router'
import Items from '@/components/Items'
import NewItem from '@/components/NewItem'
import EditItem from '@/components/EditItem'
import Accueil from '@/components/Accueil'
import NewProfiles from '@/components/NewProfiles'
import Profiles from '@/components/Profiles'
import EditProfile from '@/components/Editprofiles'
import Basket from '@/components/Panier'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/items',
      name: 'Items',
      component: Items
    },
    {
      path: '/items/new',
      name: 'NewItem',
      component: NewItem
    },
    {
      path: '/items/:id',
      name: 'EditItem',
      component: EditItem
    },
    {
      path: '/profiles',
      name: 'Profiles',
      component: Profiles
    },
    {
      path: '/profiles/new',
      name: 'NewProfile',
      component: NewProfiles
    },
    {
      path: '/profiles/:id',
      name: 'EditProfile',
      component: EditProfile
    },
    {
      path: '/basket',
      name: 'Basket',
      component: Basket
    }
  ]
})
