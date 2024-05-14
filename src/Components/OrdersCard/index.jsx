import {} from '@heroicons/react/16/solid'
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import PropTypes from 'prop-types'; // Importa PropTypes desde la biblioteca prop-types. Sujerencia de ChatGPT para un error de mission nombre, etc in proptype validation. Tambien las linea del final del codigo se agregaron

const OrdersCard = props => {   
  const { date, totalProducts, totalPrice } = props
  
  const price = totalPrice.toLocaleString('es-ES', {style: 'decimal', minimumFractionDigits: 0,})

  return (
    <div className='flex w-80 m-2 py-2 px-4 shadow-lg  cursor-pointer justify-between rounded-lg  bg-gray-500/20 self-end mr-4' >
      
        <div className='flex flex-col'>
          <span className="mr-10">{date}</span>
          <span className="mr-10">{totalProducts} articles</span>
        </div>
        <div className='flex flex-col'>
          <span className='self-end font-bold text-lg'>${price}</span>
          <ChevronRightIcon className='self-end w-6 h-6 cursor-pointer text-black hover:text-sky-500 font-bold'/>
        </div>
        
    </div>
  )
}
  
  OrdersCard.propTypes = {
    totalPrice: PropTypes.number.isRequired, 
    totalProducts: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  };

  export { OrdersCard }