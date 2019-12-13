import Layout from '@/layout'
import views from './views'
const menuData = []
console.log(views)
views.map(item => {
  console.log(item)
  menuData.push({
    path: item.path,
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => item.component,
        name: item.name,
        meta: { title: item.title, icon: item.icon }
      }
    ]
  })
})
export default menuData

