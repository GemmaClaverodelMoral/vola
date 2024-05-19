import { XMarkIcon } from '@heroicons/react/16/solid'
import PropTypes from 'prop-types'; // Importa PropTypes desde la biblioteca prop-types. Sujerencia de ChatGPT para un error de mission nombre, etc in proptype validation. Tambien las linea del final del codigo se agregaron


const OrderCard = props => {   
  const { id, nombre, precio, imagen, handleDelete } = props
  let renderXMarkIcon
  if (handleDelete) {
    renderXMarkIcon = 
      <XMarkIcon 
         onClick={() => handleDelete(id)}
         className='h-10 w-10 text-black cursor-pointer p-2 hover:p-0 hover:text-sky-500 hover:font-bold'
      ></XMarkIcon>
  }
  const price = precio.toLocaleString('es-ES', {style: 'decimal', minimumFractionDigits: 0,})

  return (
    <div className='flex  items-center mb-2 gap-2 shadow-lg'>
      <figure className='w-20 flex-shrink-0'>
        <img 
            className=' h-full w-full object-cover rounded-lg' 
            src={imagen} 
            alt={nombre} 
        />
      </figure>
      <div className='flex items-center justify-between w-60' >
          <span className='font-light text-sx w-50'>
             {nombre}
          </span>  
          <div className='flex items-center'>
            <span className='font-bold text-medium'>
              ${price}
            </span>
            {renderXMarkIcon}
          </div>
      </div>
    </div>
  )
}
  
  OrderCard.propTypes = {
    nombre: PropTypes.string.isRequired, // Espera que nombre sea de tipo string y sea requerido
    precio: PropTypes.number.isRequired, // Espera que precio sea de tipo number y sea requerido
    imagen: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleDelete: PropTypes.func,
  };

  export { OrderCard }