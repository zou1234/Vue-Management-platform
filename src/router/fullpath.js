import Layouts from '../views/Layouts/index'
import Dashboard from '../views/Dashboard/index'
import Dashboar1 from '../views/Dashboard/Dashboard1'
import Dashboar2 from '../views/Dashboard/Dashboard2'
import Dashboar3 from '../views/Dashboard/Dashboard3'
import Layouts1 from '../views/Layouts/Layouts1'
import Layouts2 from '../views/Layouts/Layouts2'
import components from '../views/components/index'
import HelloWorld from '@/components/ms-content'

export default[
  {
    path: "/",
    name: '首页',
    component: HelloWorld,
    children:[
      {
        path: "/Dashboard",
        name: "Dashboard",
        component: Dashboard,
        children:[
          {
            path: "/Dashboard/Dashboard1",
            name: "Dashboard1",
            component: Dashboar1,
          },
          {
            path: "/Dashboard/Dashboard2",
            name: "Dashboard2",
            component: Dashboar2,
          },
          {
            path: "/Dashboard/Dashboard3",
            name: "Dashboard3",
            component: Dashboar3,
          }
        ]
      },

      {
        path: "/Layouts",
        name: "Layouts",
        component: Layouts,
        children:[
          {
            path: "/Layouts/Layouts1",
            name: "Layouts1",
            component: Layouts1,
          },{
            path: "/Layouts/Layouts2",
            name: "Layouts2",
            component: Layouts2,
          }
        ]
      },

      {
        path: "/components",
        name: "components",
        component: components,
      }
    ]
  }
]
