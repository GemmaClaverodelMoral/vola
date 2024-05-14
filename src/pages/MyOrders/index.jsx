import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { Layout } from "../../Components/layout"
import { OrdersCard } from '../../Components/OrdersCard';



function MyOrders() {
  const context =useContext(ShoppingCartContext)

  return (
        < Layout>
          <div className='flex w-80  items-center justify-center relative cursor-auto '>
            <h1 className='text-xl font-medium'>My Orders</h1>
          </div>
          {context.orders.map((order,index) => (
            <Link to={`/my-orders/${index}`}
                  key={index} 
            >
              <OrdersCard 
                date={order.date}
                totalProducts={order.totalProducts} 
                totalPrice={order.totalPrice}
              />
              
            </Link>
          ))}
        </Layout>
  )
}
  
export { MyOrders }