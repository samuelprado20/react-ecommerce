import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  // Shopping cart items quantity
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  // Product detail open/close
  const [isProductDetailOpen, setProductDetailOpen] = useState(false)
  const openProductDetail = () => setProductDetailOpen(true)
  const closeProductDetail = () => setProductDetailOpen(false)

  // Product detail -> show product
  const [productToShow, setProductToShow] = useState({})

  return (
    <ShoppingCartContext.Provider value={{
      counter,
      setCounter,
      increment,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow
    }}>
      { children }
    </ShoppingCartContext.Provider>
  )
}
