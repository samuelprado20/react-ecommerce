import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

export default function Home () {
  const {
    items,
    searchByTitle,
    setSearchByTitle,
    filteredItems,
    categoryItems,
    setCategoryItems,
    filterItemsByCategory
  } = useContext(ShoppingCartContext)

  const { category: paramsCategory } = useParams()
  useEffect(() => {
    if (paramsCategory) filterItemsByCategory(paramsCategory)
    return () => {
      setSearchByTitle('')
      setCategoryItems(null)
    }
  }, [paramsCategory])

  const currentItems = paramsCategory ? categoryItems : items

  const handleChange = (event) => {
    setSearchByTitle(event.target.value)
  }

  const renderview = () => {
    const itemsToRender = searchByTitle?.length > 0 ? filteredItems : currentItems

    if (itemsToRender?.length > 0) {
      return (
        itemsToRender.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div className='col-span-4 flex justify-center text-2xl mt-6'>
          { currentItems?.length > 0
            ? <p>{`Sorry :C ,  we couldn't find anything for "${searchByTitle}"`}</p>
            : <p>{`Sorry :C ,  we currenty don't have anything in ${paramsCategory}. Consider looking at our other products`}</p>
          }
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
