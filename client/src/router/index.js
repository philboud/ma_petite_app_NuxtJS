import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Items from '@/components/Items'
import NewItem from '@/components/NewItem'
import EditItem from '@/components/EditItem'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
