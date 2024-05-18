import { useContext } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/16/solid';
import { ShoppingCartContext } from '../../Context'

const ShoppingCart = () => {
  const context = useContext(ShoppingCartContext)

  const openCheckoutSideMenu = () => {
    context.openCheckout()
    context.closeProductDetail()
  }

  return (
    <div className='relative flex gap-0.5 items-center'
         >
      <ShoppingBagIcon 
         className='cursor-pointer size-10 mx-2 text-sky-400'
         onClick={() => openCheckoutSideMenu()}
      />
      <span className='absolute bottom-0 left-8 flex justify-center items-center
      rounded-full bg-white size-5 text-sm text-black'>{context.cart.length}</span>
    </div>
  )
}

export {ShoppingCart}
