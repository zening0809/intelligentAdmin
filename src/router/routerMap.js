import Layout from '@/layout'
import views from './views'
const menuData = []
views.map(item => {
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

