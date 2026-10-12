"use client";

import React, { useState } from "react";
import NavigateButton from "../common/NavigateButton";

const ProductDetailCard = ({ product }) => {
    const [imagePreview, setImagePreview] = useState(product.thumbnail);

    return (
        <div className="w-full">
            <div className="product-container flex flex-col sm:flex-row justify-center gap-2 min-h-[80vh] border-b border-gray-300">
                
                {/* Product Images */}
                <div className="w-full sm:w-[30vw] sm:flex-1 lg:flex-none lg:w-[30vw] bg-amber-50 min-h-[400px] sm:min-h-0 sm:h-auto flex justify-center items-center flex-col p-4 sm:p-3">
                    
                    <img
                        className="w-auto max-w-full h-auto max-h-[300px] sm:h-[45%] sm:max-h-none object-contain duration-150 hover:translate-y-[-25px]"
                        src={imagePreview}
                        alt={product.title}
                    />

                    <div className="grid grid-cols-3 gap-1.5 w-full max-w-[400px] sm:max-w-full sm:h-[40%] mt-7 justify-center">
                        {product.images.map((img, index) => {
                            return (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${product.title} ${index + 1}`}
                                    onClick={() => setImagePreview(img)}
                                    className="w-full h-20 sm:h-24 md:h-28 lg:h-32 object-contain col-span-1 row-span-1 border-2 border-gray-450 p-2 sm:p-3 duration-150 hover:translate-y-[-10px] cursor-pointer"
                                />
                            );
                        })}
                    </div>
                </div>

                {/* Product Information */}
                <div className="w-full sm:flex-1 lg:flex-none lg:w-[50vw] p-5 sm:p-6 md:p-8 lg:p-10 bg-amber-50 text-gray-950 min-h-[450px] sm:min-h-0 gap-4 sm:gap-3 flex flex-col justify-start items-start duration-150 hover:translate-y-[-25px]">
                    <div className="w-full">
                        <p className="text-gray-400 text-[0.8rem] capitalize">
                            {product.category}
                        </p>

                        <h1 className="mt-2 text-gray-950 text-[1.4rem] sm:text-[1.5rem] md:text-[1.6rem] font-bold capitalize break-words leading-tight">
                            {product.title}
                        </h1>
                    </div>

                    <div className="w-full flex items-center gap-2 text-gray-700 text-[1rem]">
                        <span>{product.rating}</span>
                        <i className="fa-solid fa-star text-yellow-500"></i>
                    </div>

                    <div className="w-full text-gray-950 font-bold text-[1.3rem] capitalize">
                        <span className="text-red-500 font-medium text-[1rem] mr-2">
                            -{product.discountPercentage}%
                        </span>
                        <span>{product.price} $</span>
                    </div>

                    <p className="w-full text-gray-800 text-[0.9rem] font-bold capitalize">
                        {product.brand}
                    </p>

                    <p className="w-full text-gray-800 text-[0.8rem] capitalize leading-relaxed break-words">
                        {product.description}
                    </p>

                    <div className="w-full flex flex-col md:flex-row gap-3 md:gap-6 py-3 font-bold">
                        <span className="break-words">
                            <i className="fa-solid fa-circle-check"></i>{" "}
                            {product.warrantyInformation}
                        </span>

                        <span className="break-words">
                            <i className="fa-solid fa-truck-fast"></i>{" "}
                            {product.shippingInformation}
                        </span>
                    </div>

                    <p className="w-full text-[1.3rem] sm:text-[1.5rem] text-green-800 font-bold">
                        {product.availabilityStatus}
                    </p>

                    <div className="w-full flex flex-col min-[400px]:flex-row gap-2 my-2.5">
                        <NavigateButton
                            text="Buy Now"
                            href={`/product/buy-now/${product.id}`}
                        />
                        <NavigateButton
                            text="Add Cart"
                            href="/Cart"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailCard;