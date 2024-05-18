import { useContext } from 'react'
import { Layout } from "../../Components/layout"
import { Card } from "../../Components/Card"
import { ShoppingCartContext } from '../../Context'
import { CheckOutSideMenu } from "../../Components/CheckOutSideMenu";
import { ProductDetail } from "../../Components/ProductDetail"

const Home = () => {
  const context =useContext(ShoppingCartContext)
  console.log('context.account', localStorage.account)

  const renderTitle = () => { // Si hay algun filtro de categoria cambia el titulo global por la categoria
    const pageTitle = '! Find your Favorite Products !'
    if (context.searchByCategory !== 'All')
      return context.searchByCategory
    else
      return pageTitle
  }

  function renderCards() {
    if (context.filteredProducts.length > 0) {
      return (
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'> 
           {context.filteredProducts.map(
            producto => {return (<Card key={producto.id} data={producto} />)})}
        </div>
      )
    }else {
      return (
        <div className=''> 
            <span >No articles for your selection. Try with other filters.</span>
        </div>
      )
    }
  }
  return ( 
  <Layout>
    <CheckOutSideMenu />
    <ProductDetail />
    <div>
      <div className='flex w-80  items-center justify-center relative cursor-auto '>
          <h1 className='text-xl font-medium mb-4'>{renderTitle()}</h1>
      </div>
      <input type='text' 
                  placeholder='Search your products'
                  autoFocus
                  className='rounded-lg mb-4 p-2 text-black border border-black w-80 focus:'
                  onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
    </div>
    {renderCards()}
  </Layout>
  )
}

export { Home }

