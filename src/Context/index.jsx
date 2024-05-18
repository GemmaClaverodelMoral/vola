import { createContext, useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import {db} from '../../firebaseConfig';

const ShoppingCartContext = createContext()


function initializeLocalStorage () { 
  
  const accountInLocalStorage = localStorage.getItem('account')
  const signOutInLocalStorage = localStorage.getItem('sign-out')
  let parsedAccount
  let parsedSignOut

  if (!accountInLocalStorage) {
    localStorage.setItem('account', JSON.stringify({}))
    parsedAccount = {}
  } else {
    parsedAccount = JSON.parse(accountInLocalStorage)
  }
  console.log(parsedAccount)

  if (!signOutInLocalStorage) {
    localStorage.setItem('sign-out', JSON.stringify(false))
    parsedSignOut = false
  } else {
    parsedSignOut = JSON.parse(signOutInLocalStorage)
  }
  console.log(parsedSignOut)
}

// eslint-disable-next-line react/prop-types
const ShoppingCartProvider = ({children}) => {
// state for account
  const [account, setAccount] = useState({})
// state for Sign out
  const [signOut, setSignOut] = useState(true)
// state for Products 
  const [productos, setProductos] = useState([]);
// state for filteredProductos
  const [filteredProducts, setFilteredProducts] = useState([]);
// Get products by Title Search
  const [searchByTitle, setSearchByTitle] = useState('');
// Get products by Category Search
  const [searchByCategory, setSearchByCategory] = useState('All');

  useEffect(() => { //para que solo actualize en caso de cambio del estado - Ponemos todos los productos de la base de datos
    const obtenerProductos = async () => {
      try {
        const productosSnapshot = await getDocs(collection(db, 'productos'));
        const productosData = productosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosData);
        setFilteredProducts(productosData);
      } catch (error) {
          console.error('Error al obtener productos:', error);
      }
    };
    obtenerProductos();
  }, []);

  function filtrarProductosPorNombre(items, text){
    //    console.log('items,', items)
    //    console.log('text.toLowerCase()', text.toLowerCase(), 'text.length:',text.length)
    //    console.log('items?.filter(item => item.nombre.toLowerCase().includes(text.toLowerCase()))', items?.filter(item => item.nombre.toLowerCase().includes(text.toLowerCase())))
        return text.length > 0
        ? items?.filter(item => item.nombre.toLowerCase().includes(text.toLowerCase()))
        : items; // Devuelve todos los productos si el texto de búsqueda está vacío
  }

  function filtrarProductosPorCategoria(items, text){
        return text !== 'All'
        ? items?.filter(item => item.categoria === text)
        : items;
  }

  function filtrarPor(searchType, productos, searchByTitle, searchByCategory) {
      
      if (searchType === 'BY_TITLE') {
        return filtrarProductosPorNombre(productos, searchByTitle)
      } 
      if (searchType === 'BY_CATEGORY') {
        return filtrarProductosPorCategoria(productos, searchByCategory)
      }
      if (searchType === 'BOTH') {
        return filtrarProductosPorNombre(productos, searchByTitle).filter(item => item.categoria === searchByCategory)
      }
      if (searchType === null) {
        return filtrarProductosPorCategoria(productos, searchByCategory)
      }
      if (!searchType) 
     
        return productos
  }
    
  useEffect(() => {//si searchByTitle ha cambiado su estado ---> ejecuto el filtrado { 
      if (searchByTitle !=='' && searchByCategory === 'All') {
          setFilteredProducts(filtrarPor('BY_TITLE', productos, searchByTitle,searchByCategory))
      } else if (searchByCategory !== 'All' && searchByTitle ===''){
          setFilteredProducts(filtrarPor('BY_CATEGORY', productos, searchByTitle,searchByCategory))
      } else if (searchByCategory !== 'All' && searchByTitle !=='') {
          setFilteredProducts(filtrarPor('BOTH', productos, searchByTitle,searchByCategory))
      } else if (searchByCategory ==='All' && searchByTitle ==='') {
          setFilteredProducts(filtrarPor(null, productos, searchByTitle,searchByCategory))
      }
  },[productos, searchByTitle, searchByCategory])

  // For Increment of Shopping Cart Quantity Items / Cantidad de productos en el carrito de compras
  const [count, setCount] = useState(0)

    //Carrito/Cart - Agregar productos /Add products to Cart 
  const [cart, setCart] = useState([])  
        
    //Carrito/Cart - Orders
  const [orders, setOrders] = useState([])  

    // For Product Detail Open/Close State 
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // For checkoutSideMenu Open/Close State 
  const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false)
  const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true)
  const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false)

  // For miniCard on CheckOutSideMenu Open/Close State 
  const [isOrderCardOpen, setIsOrderCardOpen] = useState(false)
  const openOrderCard= () => setIsOrderCardOpen(true)
  const closeOrderCard= () => setIsOrderCardOpen(false)
      
    // Product Detail · Show product Object
  const [productToShow, setProductToShow] = useState({})

  return (
    <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        openCheckOutSideMenu,
        closeCheckOutSideMenu,
        isCheckOutSideMenuOpen,
        openOrderCard,
        closeOrderCard,
        isOrderCardOpen,
        productToShow,
        setProductToShow,
        cart,
        setCart,
        orders,
        setOrders,
        productos, 
        setProductos,
        searchByTitle,
        setSearchByTitle,
        filteredProducts,
        setFilteredProducts,
        searchByCategory, 
        setSearchByCategory,
        account,
        setAccount,
        signOut,
        setSignOut,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export {ShoppingCartContext}
export {initializeLocalStorage}
export {ShoppingCartProvider} 