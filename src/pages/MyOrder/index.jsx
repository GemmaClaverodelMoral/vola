import { useContext } from 'react';
import { ShoppingCartContext } from "../../Context"
import { Link } from 'react-router-dom'
//import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Layout } from "../../Components/layout"
import { OrderCard } from "../../Components/OrderCard"
import { ChevronLeftIcon } from '@heroicons/react/16/solid';


const MyOrder = () => { //Mostrar la ultima orden

    const context =useContext(ShoppingCartContext)
    let index = window.location.pathname.split('/').pop()
    if (index === 'last') index = context.orders?.length -1  // lara que no rompa en caso de venir del checkout 

    return (
      <Layout>
         <div className='flex w-80  items-center justify-center relative cursor-auto'>
            <Link to='/my-orders'
                  className='absolute left-0'
            >
              <ChevronLeftIcon className='w-6 h-6 cursor-pointer text-black hover:text-sky-500 font-bold'/>
            </Link>
            <h1 className='text-xl font-medium'>My Order</h1>
          </div>
          <div className='mt-8 flex flex-col w-80 px-4 flex-1 cursor-auto'> {/*Muestra la ultima orden creada*/}
            { 
              context.orders?.[index]?.products.map(producto => (
                <OrderCard 
                  key={producto.id} 
                  id={producto.id}
                  nombre={producto.nombre} 
                  precio={producto.precio}
                  imagen={producto.imagenes[0]} 
                />
              ))                  
            }
          </div>
      </Layout>
    )
  }
  
  export { MyOrder }

  