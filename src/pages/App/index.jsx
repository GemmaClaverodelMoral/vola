import { BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import { AppRoutes } from '../../Components/AppRoutes'
import { NavBar } from '../../Components/Navbar'


import './App.css'
//import { WhatsAppButton } from '../../Components/whatsAppButton'

const App = () => {

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
