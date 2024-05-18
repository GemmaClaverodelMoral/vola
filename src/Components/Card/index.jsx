import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { CheckIcon, ShoppingBagIcon } from "@heroicons/react/24/outline"

const Card = (data) => {    
  const context = useContext(ShoppingCartContext)

  const showProduct = (producto) => {
    if (producto.categoria === 'Menu') { // Card de menu - Se hace serchByCategory
      context.setSearchByCategory(producto.nombre.slice(0, -5))
    }
    else { // Card de producto - Se ejecuta ShowProduct
      context.closeCheckOutSideMenu()
      context.openProductDetail()
      context.setProductToShow(producto)
    }
  }

  const renderCategoria = (categoria) => { //Si es una card de Categoria cambia un poco el render
    if (categoria === 'Menu') return ''
    else return categoria
  }

  const renderPrecio = (categoria, precio) => { //Si es una card de Categoria cambia un poso el render
    if (categoria === 'Menu') return ''
    else return '$' + precio.toLocaleString('es-ES', {style: 'decimal', minimumFractionDigits: 0,}) 
  }

  const addCart = (event, producto) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCart([...context.cart, producto])
    context.closeProductDetail()    
    context.openCheckOutSideMenu()
  }

  const nonShowDetail = (event) => { // modulo creado para que el onclick de CheckIcon que esta dentro de cada card de producto y sirve para adicionar el producto al carrito, no haga showProduct de los detalles del producto. El resto del rectangulo del cart si debe hacer showProduct cuando se hace clicken ese espacio.
    event.stopPropagation()
    context.closeProductDetail()
    context.openCheckOutSideMenu()
  }

  function cardIconRender(id) {
    const isMenuCard = id[0] === '0' ? true : false
    const isInCart = context.cart.some(producto => producto.id === id)
    if (!isMenuCard) {
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
  }

  return (
    <div 
      className='w-48 h-60 rounded-lg cursor-pointer'
      onClick={() => showProduct(data.data)}>
      <figure className='relative h-4/5'>
        <span className='absolute bottom-0 left-0 bg-gray-200 rounded-lg text-black text-xs  m-2 px-1'>{renderCategoria(data.data.categoria)}</span>
        <img 
          className='w-full object-cover rounded-lg shadow-lg' 
          src={data.data.imagenes[0]} 
          alt={data.data.nombre} 
        />
        {cardIconRender(data.data.id)}
      </figure>
      <p className='flex flex-col justify-between p-1'>
        <span className='flex text-xs font-light justify-end'>{data.data.nombre}</span>
        <span className='flex text-md font-bold justify-end'>{renderPrecio(data.data.categoria, data.data.precio)}</span>
      </p>
    </div>
  )
}
export { Card }