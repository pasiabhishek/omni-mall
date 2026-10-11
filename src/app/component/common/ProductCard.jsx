import React from 'react'

const ProductCard = (product) => {
    return (
        <>
            <div
                key={product.id}
                className="card w-72 h-96 shrink-0 bg-amber-50 flex flex-col justify-around hover:translate-y-[-10px] duration-100"
            >
                <img src={product.thumbnail} alt={product.title} />
                <h4 className='text-gray-950 text-md text-center'>{product.title}</h4>
            </div>
        </>
    )
}

export default ProductCard
