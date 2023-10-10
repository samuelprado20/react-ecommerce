export default function OrdersCard ({ totalPrice, productsTotal }) {
  return (
    <div className='flex justify-between items-center mb-5 border border-black rounded-lg p-4 w-80'>
      <div className='flex justify-between w-full'>
        <p className='flex flex-col gap-2'>
          <span>Order placed 10.20.23</span>
          <span>{productsTotal} items</span>
        </p>
        <p className='flex items-center gap-4'>
          <span className='font-medium text-xl'>Total ${totalPrice}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </p>
      </div>
    </div>
  )
}
