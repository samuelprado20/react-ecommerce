import { createContext, useState, useEffect } from 'react'
import { API_URL } from '../utils/api'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  // Shopping cart items quantity
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  // Shopping cart products
  const [cartProducts, setCartProducts] = useState([])

  // Product detail open/close
  const [isProductDetailOpen, setProductDetailOpen] = useState(false)
  const openProductDetail = () => setProductDetailOpen(true)
  const closeProductDetail = () => setProductDetailOpen(false)

  // Checkout side menu open/close
  const [isCheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setCheckoutSideMenuOpen(false)

  // Product detail -> show product
  const [productToShow, setProductToShow] = useState({})

  // Shopping cart - order
  const [order, setOrder] = useState([])

  // get products
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setItems(data)
      })
  }, [])

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState('')

  // Filtered items - search
  const [filteredItems, setFilteredItems] = useState(null)
  const filterItemsByTitle = (items, search) => {
    return items?.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle) setFilteredItems(filterItemsByTitle(items, searchByTitle))
  }, [items, searchByTitle])

  return (
    <ShoppingCartContext.Provider value={{
      counter,
      setCounter,
      increment,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems
    }}>
      { children }
    </ShoppingCartContext.Provider>
  )
}
