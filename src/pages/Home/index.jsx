import { useContext } from 'react'
import { Layout } from "../../Components/layout"
import { Card } from "../../Components/Card"
import { ShoppingCartContext } from '../../Context'
import { CheckOutSideMenu } from "../../Components/CheckOutSideMenu";
import { ProductDetail } from "../../Components/ProductDetail"

const Home = () => {
  const context =useContext(ShoppingCartContext)

  return ( 
  <Layout>
    <div>
      <div className='flex w-80  items-center justify-center relative cursor-auto '>
          <h1 className='text-xl font-medium mb-4'>! Special Products !</h1>
      </div>
      <input type='text' 
                  placeholder='Search your products'
                  autoFocus
                  className='rounded-lg mb-4 p-2 text-black border border-black w-80'
                  onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
    </div>
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'> 
        {
          context.filteredProducts.length > 0 ? (
          context.filteredProducts.map(producto => (
            <Card key={producto.id} data={producto} />
          ))) 
          : (<p>No articles for your selection. Try with other filters.</p>)
        }
      </div>
      <CheckOutSideMenu />
      <ProductDetail />   
  </Layout>
  )
}

export { Home }

