import React from 'react'

const ProductDetailCard = ({product}) => {
  return (
    <div>
           <div className="product-container flex flex-row justify-center gap-2 h-[80vh] border-b-1 border-gray-300">
                    <div className="w-[30vw] bg-amber-50 h-full flex justify-center items-center">
                        <img

                            className='h-[100%] duration-150 hover:translate-y-[-25px]'
                            src={product.thumbnail}
                            alt={product.title}
                        />
                    </div>

                    <div className="w-[50vw] p-10 bg-amber-50 text-gray-950 h-full gap-3 flex flex-col justify-around duration-150 hover:translate-y-[-25px]">
                        <p className='text-gray-400 text-[0.8rem] capitalize'>
                            {product.category}
                        </p>
                        <h1 className='text-gray-950 text-[1.6rem] font-bold  capitalize'>
                            {product.title}
                        </h1>
                        <p className='text-gray-700 text-[1rem]'>
                            {product.rating} <i className="fa-solid fa-star"></i>
                        </p>
                        <p className='text-gray-950 font-bold text-[1.3rem] capitalize'>
                            <span className='text-red-500 font-medium text-[1rem]'>
                                -{product.discountPercentage}%
                            </span> {product.price} $
                        </p>
                        <p className='text-gray-800 text-[0.9rem]  font-bold capitalize'>
                            {product.brand}
                        </p>
                        <p className='text-gray-800 text-[0.8rem] capitalize'>
                            {product.description}
                        </p>
                        <div className='flex flex-row gap-6 py-3 font-bold'>
                           <span> <i className="fa-solid fa-circle-check"></i> {product.warrantyInformation}</span>
                           <span> <i className="fa-solid fa-truck-fast"></i> {product.shippingInformation}</span>
                        </div>
                        <p className='text-[1.5rem] text-green-800 font-bold'>{product.availabilityStatus}</p>

                    </div>
                </div>
    </div>
  )
}

export default ProductDetailCard
