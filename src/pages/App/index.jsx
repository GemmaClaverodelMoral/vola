import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext, ShoppingCartProvider, initializeLocalStorage} from '../../Context'
import { NavBar } from '../../Components/Navbar'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { SignIn } from '../SignIn'
import { NotFound } from '../NotFound'
import './App.css'
//import { WhatsAppButton } from '../../Components/whatsAppButton'

const AppRoutes = () => {

  const context =useContext(ShoppingCartContext)

  // ACCOUNT
  // Recojemos info de la Cuenta de LocalStorage... si la hay!
  const account      = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Saber si tenemos info de Cuenta en localStorage o localState 
  const accountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length !== 0 : false
  const accountInLocalState   = context.account ? Object.keys(context.account).length !== 0 : false
  const hasUserAnAccount = accountInLocalStorage || accountInLocalState

  // SIGN OUT
  // Recojemos info de Sign Out del localStorage
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  const isUserSignOut = parsedSignOut || context.signOut
  const isUserSignIn = !isUserSignOut
  
  let routes = useRoutes([
    {path: '/',               element: hasUserAnAccount && isUserSignIn ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    {path: '/',               element: hasUserAnAccount && isUserSignIn ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    {path: '/tunnel-suit',    element: hasUserAnAccount && isUserSignIn ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    {path: '/camera-jacket',  element: hasUserAnAccount && isUserSignIn ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    {path: '/swoop-pant',     element: hasUserAnAccount && isUserSignIn ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    {path: '/helmet',         element: hasUserAnAccount && isUserSignIn ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    {path: '/merch',          element: hasUserAnAccount && isUserSignIn ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    {path: '/t-shirt',        element: hasUserAnAccount && isUserSignIn ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    {path: '/jersey',         element: hasUserAnAccount && isUserSignIn ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    {path: '/rashguard',      element: hasUserAnAccount && isUserSignIn ? <Home /> : <Navigate replace to={'/sign-in'} /> },
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

function App () {
  initializeLocalStorage()

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
          <AppRoutes />
          <NavBar />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export { App }
//<WhatsAppButton /> se incluye mas tarde en el <BrouserRouter> cuando todo este funcionando
