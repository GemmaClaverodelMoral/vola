import { useRoutes} from 'react-router-dom'
import { Home } from '../pages/Home'
import { MyAccount } from '../pages/MyAccount'
import { MyOrder } from '../pages/MyOrder'
import { MyOrders } from '../pages/MyOrders'
import { SignIn } from '../pages/SignIn'
import { NotFound } from '../pages/NotFound'

const AppRoutes = () => {
    let routes = useRoutes([
      {path: '/',              element: <Home />},
      {path: '/tunnel-suit',   element: <Home />},
      {path: '/camera-jacket', element: <Home />},
      {path: '/swoop-pant',    element: <Home />},
      {path: '/helmet',        element: <Home />},
      {path: '/merch',         element: <Home />},
      {path: '/t-shirt',       element: <Home />},
      {path: '/jersey',        element: <Home />},
      {path: '/rashguard',     element: <Home />},
   
      {path: '/my-account',     element: <MyAccount />},
      {path: '/my-order',       element: <MyOrder />},
      {path: '/my-orders',      element: <MyOrders />},
      {path: '/my-orders/last', element: <MyOrder />},
      {path: '/my-orders/:id',  element: <MyOrder />},
 
      {path: '/sign-in',        element: <SignIn />},
      {path: '/*', element: <NotFound />},
    ])
    return routes
  }

  export { AppRoutes}