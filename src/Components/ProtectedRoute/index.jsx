import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

export default function ProtectedRoute ({ children }) {
  const { isUserSignedIn } = useContext(ShoppingCartContext)

  if (!isUserSignedIn) {
    return <Navigate to='/sign-in' />
  }
  return children
}
