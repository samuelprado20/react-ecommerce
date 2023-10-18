import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

export default function Home () {
  const {
    items,
    searchByTitle,
    setSearchByTitle,
    filteredItems
  } = useContext(ShoppingCartContext)

  const handleChange = (event) => {
    setSearchByTitle(event.target.value)
  }

  const renderview = () => {
    const itemsToRender = searchByTitle?.length > 0 ? filteredItems : items

    if (itemsToRender?.length > 0) {
      return (
        itemsToRender.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div className='col-span-4 flex justify-center text-2xl mt-6'>
          <p>{`Sorry :C ,  we couldn't find anything for "${searchByTitle}"`}</p>
        </div>
      )
    }
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>Our Products</h1>
      </div>
      <input
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        type='text'
        placeholder='Search for anything'
        onChange={handleChange}
        value={searchByTitle}
      />
      <div className='grid gap-7 grid-cols-4 w-full max-w-screen-lg'>
        {renderview()}
      </div>
      <ProductDetail />
    </Layout>
  )
}
