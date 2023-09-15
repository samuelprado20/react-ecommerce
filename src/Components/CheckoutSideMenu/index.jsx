import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

export default function CheckoutSideMenu () {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    setCounter
  } = useContext(ShoppingCartContext)

  const handleDelete = (id, quantity) => {
    const filteredProducts = cartProducts.filter(item => item.id !== id)
    setCartProducts(filteredProducts)
    setCounter(prevState => prevState - quantity)
  }

  return (
    <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center px-4 py-5'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div onClick={() => closeCheckoutSideMenu()} className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
      <div className='px-4 overflow-y-scroll'>
        {
          cartProducts.map(item => (
            <OrderCard
              key={item.id}
              id={item.id}
              title={item.title}
              imgUrl={item.image}
              price={item.price}
              quantity={item.quantity}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className='px-4'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total: </span>
          <span className='font-medium text-2xl'>${totalPrice(cartProducts).toFixed(2)}</span>
        </p>
      </div>
    </aside>
  )
}
