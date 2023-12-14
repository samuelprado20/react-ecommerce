import { createContext, useState, useEffect } from 'react'
import { API_URL } from '../utils/api'

export const ShoppingCartContext = createContext()

export const initializeLocalStorage = () => {
  const accountInLocalStorage = localStorage.getItem('account')
  const isSignedinInLocalStorage = localStorage.getItem('signed-in')
  let parsedAccount
  let parsedSignOut

  if (!accountInLocalStorage) {
    localStorage.setItem('account', JSON.stringify({}))
    parsedAccount = {}
  } else {
    parsedAccount = JSON.parse(accountInLocalStorage)
  }

  if (!isSignedinInLocalStorage) {
    localStorage.setItem('signed-in', JSON.stringify(false))
    parsedSignOut = false
  } else {
    parsedSignOut = JSON.parse(isSignedinInLocalStorage)
  }
}

export const ShoppingCartProvider = ({ children }) => {
  // Is user signed in
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  // User account
  const [account, setAccount] = useState({})

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
    // initialize user account & log in status in global state
    const isSignedIn = JSON.parse(localStorage.getItem('signed-in'))
    isSignedIn ? setIsUserSignedIn(true) : setIsUserSignedIn(false)
    const userAccount = JSON.parse(localStorage.getItem('account'))
    if (Object.keys(userAccount).length !== 0) setAccount(userAccount)
  }, [])

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState('')

  // Filtered items - search
  const [filteredItems, setFilteredItems] = useState(null)
  const filterItemsByTitle = (items, search) => {
    return items?.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
  }

  // Filter items - category
  const [categoryItems, setCategoryItems] = useState(null)

  useEffect(() => {
    if (searchByTitle && categoryItems) {
      setFilteredItems(filterItemsByTitle(categoryItems, searchByTitle))
    } else {
      setFilteredItems(filterItemsByTitle(items, searchByTitle))
    }
  }, [items, searchByTitle])

  const filterItemsByCategory = (category) => {
    let realCategory = category
    if (category === 'clothes') realCategory = 'clothing'
    setCategoryItems(items?.filter(item => item.category.toLowerCase().includes(realCategory.toLowerCase())))
  }

  const handleLogIn = (action) => {
    if (action === 'signIn') {
      setIsUserSignedIn(true)
      localStorage.setItem('signed-in', true)
    } else if (action === 'signOut') {
      setIsUserSignedIn(false)
      localStorage.setItem('signed-in', false)
    }
  }

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
      filteredItems,
      categoryItems,
      setCategoryItems,
      filterItemsByCategory,
      isUserSignedIn,
      handleLogIn,
      account,
      setAccount
    }}>
      { children }
    </ShoppingCartContext.Provider>
  )
}
