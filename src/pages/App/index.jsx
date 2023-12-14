import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider, initializeLocalStorage } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import NotFound from '../NotFound'
import SignIn from '../SingIn'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import ProtectedRoute from '../../Components/ProtectedRoute'
import './App.css'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/:category', element: <ProtectedRoute><Home /></ProtectedRoute> },
    { path: '/my-account', element: <ProtectedRoute><MyAccount /></ProtectedRoute> },
    { path: '/my-orders', element: <ProtectedRoute><MyOrders /></ProtectedRoute> },
    { path: '/my-orders/last', element: <ProtectedRoute><MyOrder /></ProtectedRoute> },
    { path: '/my-orders/:id', element: <ProtectedRoute><MyOrder /></ProtectedRoute> },
    { path: '/my-order', element: <ProtectedRoute><MyOrder /></ProtectedRoute> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '/*', element: <NotFound /> }
  ])

  return routes
}

function App () {
  initializeLocalStorage()

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
