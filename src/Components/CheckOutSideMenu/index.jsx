import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckOutSideMenu = () => {
    const context =useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredCart = context.cart.filter(producto => producto.id !==id)
        context.setCart(filteredCart)
    }
    const handleCheckOut= () => { //Creacion de la Orden
        const orderToAdd = {
            date: '01.05.2024',
            products: context.cart,
            totalProducts: context.cart.length,
            totalPrice: totalPrice(context.cart)
        }
        context.setOrders([...context.orders, orderToAdd])
        context.setCart([])
        context.closeCheckOutSideMenu()
    }

    const totalCalculate = totalPrice(context.cart).toLocaleString('es-ES', {style: 'decimal', minimumFractionDigits: 0,})

  if (context.isCheckOutSideMenuOpen){
    return (
    <aside 
    className={
        `${context.isCheckOutSideMenuOpen ? 'flex' : 'hidden'} my-order flex-col rounded-lg right-2 border border-black fixed cursor-pointer bg-white/80 z-10`}>
        <div className='m-2 flex justify-between items-center p-4'> {/* Icono de cierre del Carrito*/}
            <h2 className='font-medium text-xl'>My Order</h2>
            <div>
            <XMarkIcon 
                className='size-10 text-black cursor-pointer p-2 hover:p-0'
                onClick={() => context.closeCheckOutSideMenu()}>
            </XMarkIcon>
            </div>
        </div> 
        <div className='px-4 flex-1 overflow-y-scroll'>                               {/* Targetas agregadas al Carrito*/}
        {
            context.cart.map(producto => (
            <OrderCard 
                key={producto.id} 
                id={producto.id}
                nombre={producto.nombre} 
                precio={producto.precio}
                imagen={producto.imagenes[0]} 
                handleDelete={handleDelete}
            />
            ))                  
        }
        </div>
        <div className='flex px-4 justify-between items-center'>    {/* Linea de totales */}
            <span className='text-sm'>Total:</span>
            <span className='font-bold text-2xl'>${totalCalculate}
            </span> 
        </div>
        <Link to='/my-orders/last'>                                  {/* CheckOut- Creacion de Orden de compra */}
            <button 
                className='m-4 bg-gray-500/20 p-2 rounded-lg self-end mr-4 hover:bg-gray-500/50 shadow-lg w-40'
                onClick={() => handleCheckOut()}> 
                CheckOut
            </button>
        </Link>
    </aside>
    )
  }
}
export {CheckOutSideMenu}