import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context';
import {ShoppingCart} from '../ShoppingCart'

const NavBar = () => {
    const context = useContext(ShoppingCartContext)
    const { pathname } = useLocation();
    const activeStyle = "underline underline-offset-4";
    
    // Sign Out
    const signOut = localStorage.getItem('sign-out') //se revisa el valor de 
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut //Si en localStorage o en state esta en true; No esta logueado

     // Recuperar la cuenta guardada en LocalStorage - parsearla 
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)

     // Revisar si existe cuenta en LocalStorage o en en el State Global
    const accountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length !== 0 : false
    const accountInLocalState   = context.account ? Object.keys(context.account).length !== 0 : false
    const hasUserAnAccount = accountInLocalStorage || accountInLocalState
    const toSignUp = (!hasUserAnAccount || isUserSignOut)

    const handleSignOut = () => { // Cerrar sesion dejando en el local storage un indicativo true a sigh-out
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }

    const showCart = (event) => {
        event.stopPropagation()
        context.closeProductDetail()    
        context.openCheckOutSideMenu()
      }

    const renderAutorizedView = () => {
      if (toSignUp) { //usuario no autenticado o no tiene cuenta. Solo muestra Sign In
        return (
             <li>
                <NavLink 
                    to='/sign-in'
                    className={`text-xs
                            ${pathname === '/merch' ? activeStyle : ''} 
                            ${toSignUp ? 'text-gray-300 cursor-not-allowed' : 'hover:underline hover:underline-offset-4'} 
                            mr-3`
                        }
                    onClick={() => handleSignOut()}>
                    Sign In
                </NavLink>
             </li>
        )
        } else {
            return (
                <>
                <li>
                    {parsedAccount?.email}
                </li>
                <li>
                    <NavLink 
                        to='/taking-measurements'
                        className={`text-xs ${pathname === '/taking-measurements' ? activeStyle : ''} hover:underline hover:underline-offset-4`}>
                        TAKING MEASUREMENTS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={`text-xs ${pathname.startsWith('/my-orders') ? activeStyle : ''} hover:underline hover:underline-offset-4`}>
                        MY ORDERS
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={`text-xs ${pathname === '/my-account' ? activeStyle : ''} hover:underline hover:underline-offset-4`}>
                        MY ACCOUNT
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={`text-xs ${pathname === '/sign-in' ? activeStyle : ''} hover:underline hover:underline-offset-4`}
                        onClick={() => handleSignOut()}>
                        Sign Out
                    </NavLink>
                </li>
                <li className='hover:underline hover:underline-offset-4 mr-3'
                    onClick={(event) => showCart(event)}
                    >
                    <ShoppingCart />
                </li>
                </>
            )
        }
    }

    return (
        <nav className="flex justify-between items-center fixed top-0 z-10 p-2 text-sm font-light bg-sky-600 text-white cursor-auto overflow-x-hidden w-full">
            <ul className="flex items-center gap-2">
                <li className="font-bold text-xl text-sky-400 italic">
                    <NavLink 
                        to={`${isUserSignOut ? '/sign-in' : '/'}`}
                        onClick={()=> {context.setSearchByCategory('All')}}>
                        Volá
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/' 
                        onClick={()=> {context.setSearchByCategory('All')}}
                        className={`text-xs
                            ${pathname === '/merch' ? activeStyle : ''} 
                            ${toSignUp ? 'text-gray-300 cursor-not-allowed' : 'hover:underline hover:underline-offset-4'} 
                            mr-3`
                        }
                        >
                        ALL
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/tunnel-suit'
                        onClick={()=> {context.setSearchByCategory('Tunnel Suit')}}
                        className={`text-xs
                            ${pathname === '/merch' ? activeStyle : ''} 
                            ${toSignUp ? 'text-gray-300 cursor-not-allowed' : 'hover:underline hover:underline-offset-4'} 
                            mr-3`
                        }
                        >
                        TUNNEL SUIT
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/swoop-pant'
                        onClick={()=> {context.setSearchByCategory('Swoop Pant')}}
                        className={`text-xs
                            ${pathname === '/merch' ? activeStyle : ''} 
                            ${toSignUp ? 'text-gray-300 cursor-not-allowed' : 'hover:underline hover:underline-offset-4'} 
                            mr-3`
                        }
                        >
                        SWOOP PANT
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/camera-jacket'
                        onClick={()=> {context.setSearchByCategory('Camera Jacket')}}
                        className={`text-xs
                            ${pathname === '/merch' ? activeStyle : ''} 
                            ${toSignUp ? 'text-gray-300 cursor-not-allowed' : 'hover:underline hover:underline-offset-4'} 
                            mr-3`
                        }
                        >
                        CAMERA JACKET
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/t-shirt'
                        onClick={()=> {context.setSearchByCategory('T-shirt')}}
                        className={`text-xs
                            ${pathname === '/merch' ? activeStyle : ''} 
                            ${toSignUp ? 'text-gray-300 cursor-not-allowed' : 'hover:underline hover:underline-offset-4'} 
                            mr-3`
                        }
                        >
                        T_SHIRT
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/jersey'
                        onClick={()=> {context.setSearchByCategory('jersey')}}
                        className={`text-xs
                            ${pathname === '/merch' ? activeStyle : ''} 
                            ${toSignUp ? 'text-gray-300 cursor-not-allowed' : 'hover:underline hover:underline-offset-4'} 
                            mr-3`
                        }
                        >
                        JERSEY
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/rashguard'
                        onClick={()=> {context.setSearchByCategory('Rashguard')}}
                        className={`text-xs
                            ${pathname === '/merch' ? activeStyle : ''} 
                            ${toSignUp ? 'text-gray-300 cursor-not-allowed' : 'hover:underline hover:underline-offset-4'} 
                            mr-3`
                        }
                        >
                        RASHGUARD
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/helmet'
                        onClick={()=> {context.setSearchByCategory('Helmet')}}
                        className={`text-xs
                            ${pathname === '/merch' ? activeStyle : ''} 
                            ${toSignUp ? 'text-gray-300 cursor-not-allowed' : 'hover:underline hover:underline-offset-4'} 
                            mr-3`
                        }
                        >
                        HELMET
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/merch'
                        onClick={()=> {context.setSearchByCategory('MERCH')}}
                        className={`text-xs
                            ${pathname === '/merch' ? activeStyle : ''} 
                            ${toSignUp ? 'text-gray-300 cursor-not-allowed' : 'hover:underline hover:underline-offset-4'} 
                            mr-3`}
                        >
                        MERCH
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                 {renderAutorizedView()}
            </ul>
        </nav>
    )
}
  
export { NavBar }