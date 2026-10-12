
import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
    return (
        <Link href={`/product/${product.id}`}>
            <div className="card w-72 h-96 shrink-0 bg-amber-50 flex flex-col justify-around hover:-translate-y-2 duration-100">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                />

                <h4 className="text-gray-950 text-md text-center">
                    {product.title}
                </h4>
            </div>
        </Link>
    );
};

export default ProductCard;
