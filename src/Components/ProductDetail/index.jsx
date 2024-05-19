import { useContext } from 'react'
import { XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
    const context =useContext(ShoppingCartContext)
   
    function addCart (event, producto) {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCart([...context.cart, producto])
        context.closeProductDetail()    
        context.openCheckOutSideMenu()
      }

    if (context.isProductDetailOpen){
        const price = context.productToShow.precio.toLocaleString('es-ES', {style: 'decimal', minimumFractionDigits: 0,})
    return (
        <aside 
        className={
            `${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col rounded-lg  border border-black right-2 fixed cursor-pointer overflow-y-scroll bg-white/80 z-10`}>
            <div className='flex justify-between items-center p-2'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon   
                        className='size-10 text-black cursor-pointer p-2 hover:p-0 hover:text-sky-500'
                        onClick={() => context.closeProductDetail()}></XMarkIcon>
                </div>
            </div>
            <div className='flex flex-col px-4'>
              <div className='flex justify-between mt-1'>
                <span className='font-sm'>{context.productToShow.nombre}</span>
                <span className='font-bold text-lg'
                    >${price}
                </span>
              </div>
              <div 
                className='size-10 rounded-full cusor-pointer text-black flex justify-between w-full'
                onClick={(event) => addCart(event, context.productToShow)}
              >
                {/* <PlusIcon className="size-6 text-black"></PlusIcon> */}
                <h3 className='font-medium text-sm'>Add to Cart: </h3>
                <ShoppingBagIcon className='size-8 p-2 hover:size-8 hover:p-0 hover:text-sky-500'></ShoppingBagIcon>
              </div>
            </div>
            <figure>
                <img 
                   className='object-cover rounded-lg mx-4 size-60' 
                   src={context.productToShow.imagenes[1]}
                   alt={context.productToShow.nombre}
                />
            </figure>
            <div className='text-sm text-justify overflow-y-scroll p-4'>{context.productToShow.descripcion}</div>
           
        </aside>
    )
}}
//  <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
export {ProductDetail}