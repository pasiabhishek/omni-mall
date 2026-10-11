import React from 'react'
import { fetchProducts } from '../services/api'
import ProductCard from '../component/common/ProductCard'

const Page = async () => {
  let products = []

  try {
    products = await fetchProducts()
  } catch (error) {
    console.error(error)
  }

  return (
    <div className='grid auto-rows-auto grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 bg-amber-50'>
      {products.map((product) => (
        <div key={product.id} className='min-w-0 [&>.card]:w-full'>
        <ProductCard
          id={product.id}
          title={product.title}
          thumbnail={product.thumbnail}
        />
        </div>
      ))}
    </div>
  )
}


export default Page
