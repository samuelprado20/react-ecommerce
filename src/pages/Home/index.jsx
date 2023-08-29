import { useState, useEffect } from 'react'
import { API_URL } from '../../utils/api.js'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'

export default function Home () {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setItems(data)
      })
  }, [])
  return (
    <Layout>
      Homeeee
      <div className='grid gap-7 grid-cols-4 w-full max-w-screen-lg'>
        { items?.map(item => (
          <Card
            key={item.id}
            data={item}
          />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  )
}
