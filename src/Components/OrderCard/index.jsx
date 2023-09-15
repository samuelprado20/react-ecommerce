export default function OrderCard (props) {
  const { title, id, imgUrl, price, quantity, handleDelete } = props
  return (
    <div className='flex justify-between items-center mb-2'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={imgUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{quantity} {title}</p>
      </div>
      <div className='flex item-center gap-2'>
        <p className='text-lg font-medium'>${price * quantity}</p>
        <div
          className='cursor-pointer h-6 w-6'
          onClick={() => handleDelete(id, quantity)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
    </div>
  )
}
