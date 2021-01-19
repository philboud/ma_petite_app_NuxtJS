import Vue from 'vue'
import Router from 'vue-router'
import Items from '@/components/Items'
import NewItem from '@/components/NewItem'
import EditItem from '@/components/EditItem'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
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
    }
  ]
})
