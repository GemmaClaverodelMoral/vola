import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context';
import { ShoppingBagIcon } from '@heroicons/react/16/solid';

const NavBar = () => {
    const { pathname } = useLocation();
    const activeStyle = "underline underline-offset-4";
    const context = useContext(ShoppingCartContext)

    return (
        <nav className="flex justify-between items-center fixed top-0 z-10 py-4 px-8 text-sm font-light bg-black text-white cursor-auto overflow-x-hidden">
            <ul className="flex items-center gap-3">
                <li className="font-bold text-lg text-sky-500">
                    <NavLink 
                        to='/'
                        onClick={()=> {context.setSearchByCategory('All')}}>
                        Volá
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/' 
                        onClick={()=> {context.setSearchByCategory('All')}}
                        className={`${pathname === '/' ? activeStyle : ''} hover:underline hover:underline-offset-4` }>
                        ALL
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/tunnel-suit'
                        onClick={()=> {context.setSearchByCategory('Tunnel Suit')}}
                        className={`${pathname === '/tunnel-suit' ? activeStyle : ''} hover:underline hover:underline-offset-4`}
                        >
                        TUNNEL SUIT
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/swoop-pant'
                        onClick={()=> {context.setSearchByCategory('Swoop Pant')}}
                        className={`${pathname === '/swoop-pant' ? activeStyle : ''} hover:underline hover:underline-offset-4`}>
                        SWOOP PANT
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/camera-jacket'
                        onClick={()=> {context.setSearchByCategory('Camera Jacket')}}
                        className={`${pathname === '/camera-jacket' ? activeStyle : ''} hover:underline hover:underline-offset-4`}>
                        CAMERA JACKET
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/t-shirt'
                        onClick={()=> {context.setSearchByCategory('T-shirt')}}
                        className={`${pathname === '/t-shirt' ? activeStyle : ''} hover:underline hover:underline-offset-4`}>
                        T_SHIRT
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/jersey'
                        onClick={()=> {context.setSearchByCategory('jersey')}}
                        className={`${pathname === '/jersey' ? activeStyle : ''} hover:underline hover:underline-offset-4`}>
                        JERSEY
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/rashguard'
                        onClick={()=> {context.setSearchByCategory('rashguard')}}
                        className={`${pathname === '/rashguard' ? activeStyle : ''} hover:underline hover:underline-offset-4`}>
                        RASHGUARD
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/helmet'
                        onClick={()=> {context.setSearchByCategory('Helmet')}}
                        className={`${pathname === '/helmet' ? activeStyle : ''} hover:underline hover:underline-offset-4`}>
                        HELMET
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/merch'
                        onClick={()=> {context.setSearchByCategory('Merch')}}
                        className={`${pathname === '/merch' ? activeStyle : ''} hover:underline hover:underline-offset-4`}>
                        MERCH
                    </NavLink>
                </li>
          </ul>
          <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    raul_hid@yahoo.com
                </li>
                <li>
                    <NavLink 
                        to='/taking-measurements'
                        className={`${pathname === '/taking-measurements' ? activeStyle : ''} hover:underline hover:underline-offset-4`}>
                        TAKING MEASUREMENTS
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={`${pathname.startsWith('/my-orders') ? activeStyle : ''} hover:underline hover:underline-offset-4`}>
                        MY ORDERS
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={`${pathname === '/my-account' ? activeStyle : ''} hover:underline hover:underline-offset-4`}>
                        MY ACCOUNT
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={`${pathname === '/sign-in' ? activeStyle : ''} hover:underline hover:underline-offset-4`}>
                        SIGN IN
                    </NavLink>
                </li>
                <li className='flex'> 
                        <ShoppingBagIcon className='size-6 mx-2 text-sky-500'></ShoppingBagIcon>
                        <span className='text-lg'>{context.cart.length}</span>
                </li>
          </ul>
        </nav>
    )
  }
  
  export { NavBar }