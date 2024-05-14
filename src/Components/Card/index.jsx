import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { CheckIcon, ShoppingBagIcon } from "@heroicons/react/24/outline"

const Card = (data) => {    
  const context = useContext(ShoppingCartContext)

  const showProduct = (producto) => {
    context.closeCheckOutSideMenu()
    context.openProductDetail()
    context.setProductToShow(producto)
  }

  const addCart = (event, producto) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCart([...context.cart, producto])
    context.closeProductDetail()    
    context.openCheckOutSideMenu()
  }

  const nonShowDetail = (event) => { // en onclick de CheckIcon no debe hacer showProduct de los detalles
    event.stopPropagation()
    context.closeProductDetail()    
    context.openCheckOutSideMenu()

  }

  const cardIconRender = (id) => {
    const isInCart = context.cart.some(producto => producto.id === id)
      if (!isInCart) {
        return ( 
          <div 
            className='absolute top-1 right-1 flex justify-center items-center size-8 p-2 rounded-full cusor- hover:p-0 bg-white/70'
            onClick={(event) => addCart(event,data.data)}>
            {/* <PlusIcon className="size-6 text-black"></PlusIcon> */}
            <ShoppingBagIcon className='size-6 text-black'></ShoppingBagIcon>
          </div>
      )
      } else {
        return ( 
          <div 
            className='absolute top-1 right-1 flex justify-center items-center bg-gray-300/50 rounded-full size-8 p-0'
            onClick={(event) => nonShowDetail(event)}
          >
            <CheckIcon className="w-6 h-6 text-green-500 font-bold"></CheckIcon>
          </div>
        )
      }
  }

  return (
    <div 
      className='w-48 h-60 rounded-lg cursor-pointer'
      onClick={() => showProduct(data.data)}>
      <figure className='relative h-4/5'>
        <span className='absolute bottom-0 left-0 bg-gray-200 rounded-lg text-black text-xs  m-2 px-1'>{data.data.categoria}</span>
        <img 
          className='w-full object-cover rounded-lg shadow-lg' 
          src={data.data.imagenes[0]} 
          alt={data.data.nombre} 
        />
        {cardIconRender(data.data.id)}
      </figure>
      <p className='flex flex-col justify-between p-1'>
        <span className='flex text-sm font-light justify-end'>{data.data.nombre}</span>
        <span className='flex text-md font-medium justify-end'>${data.data.precio.toLocaleString('es-ES', {style: 'decimal', minimumFractionDigits: 0,})}</span>
      </p>
    </div>
  )
}
export { Card }