import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

export default function ProductDetail () {
  const {
    isProductDetailOpen,
    closeProductDetail,
    productToShow
  } = useContext(ShoppingCartContext)

  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div onClick={() => closeProductDetail()} className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
      <figure className='px-5'>
        <img
          className='w-full h-full rounded-lg'
          src={productToShow.image}
          alt={productToShow.title}
        />
      </figure>
      <p className='flex flex-col p-5 gap-2'>
        <span className='font-medium text-2xl'>${productToShow.price}</span>
        <span className='font-medium text-md'>{productToShow.title}</span>
        <span className='font-light text-sm'>{productToShow.description}</span>
      </p>
    </aside>
  )
}
