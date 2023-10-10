import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'

export default function MyOrders () {
  const { order } = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='flex items-center justify-center w-80 relative mb-5'>
        <h1 className='font-medium text-xl'>MyOrders</h1>
      </div>
      {
        order.map((order, index) => (
          <Link to={`/my-orders/${index}`} key={index}>
            <OrdersCard
              totalPrice={order.totalPrice}
              productsTotal={order.productsTotal}
            />
          </Link>
        ))
      }
    </Layout>
  )
}
