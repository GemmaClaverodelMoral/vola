import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
    const context =useContext(ShoppingCartContext)
   

    if (context.isProductDetailOpen){
        const price = context.productToShow.precio.toLocaleString('es-ES', {style: 'decimal', minimumFractionDigits: 0,})
    return (
        <aside 
        className={
            `${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col rounded-lg  border border-black right-2 fixed cursor-pointer overflow-y-scroll bg-white`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon 
                        className='size-10 text-black cursor-pointer p-2 hover:p-0 hover:text-sky-500'
                        onClick={() => context.closeProductDetail()}></XMarkIcon>
                </div>
            </div>
            <figure>
                <img 
                   className='object-cover rounded-lg mx-4' 
                   src={context.productToShow.imagenes[1]} 
                   alt={context.productToShow.nombre} 
                />
            </figure>
            <div className='text-sm text-justify overflow-y-scroll p-4'>{context.productToShow.descripcion}</div>
            <div className='flex flex-col px-4'>
              <div className='flex justify-between mt-4'>
                <span className='font-sm'>{context.productToShow.nombre}</span>
                <span className='font-bold text-lg'
                    >${price}
                </span>
              </div>
            </div>
        </aside>
    )
}}
//  <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
export {ProductDetail}