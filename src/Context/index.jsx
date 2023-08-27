import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }
  return (
    <ShoppingCartContext.Provider value={{
      counter,
      setCounter,
      increment
    }}>
      { children }
    </ShoppingCartContext.Provider>
  )
}
