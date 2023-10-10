import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'

export default function MyOrder () {
  const {
    order
  } = useContext(ShoppingCartContext)

  const params = useParams()
  const orderToShow = isNaN(params.id) ? order.at(-1) : order.at(params.id)

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <div className='h-6 w-6 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
        </Link>
        <h1>MyOrders</h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          orderToShow?.products.map(item => (
            <OrderCard
              key={item.id}
              id={item.id}
              title={item.title}
              imgUrl={item.image}
              price={item.price}
              quantity={item.quantity}
            />
          ))
        }
      </div>
    </Layout>
  )
}
