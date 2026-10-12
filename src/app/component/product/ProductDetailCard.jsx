"use client";

import React, { useState } from "react";
import NavigateButton from "../common/NavigateButton";

const ProductDetailCard = ({ product }) => {
    const [imagePreview, setImagePreview] = useState(product.thumbnail);

    return (
        <div>
            <div className="product-container flex flex-row justify-center gap-2 h-[80vh] border-b-1 border-gray-300">
                <div className="w-[30vw] bg-amber-50 h-full flex justify-center items-center flex-col">
                    <img
                        className="h-[60%] duration-150 hover:translate-y-[-25px]"
                        src={imagePreview}
                        alt={product.title}
                    />

                    <div className="grid grid-cols-3 gap-1.5 h-[40%] mt-7 justify-center">
                        {product.images.map((img, index) => {
                            return (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${product.title} ${index + 1}`}
                                    onClick={() => setImagePreview(img)}
                                    className="col-span-1 row-span-1 border-2 border-gray-450 p-3 duration-150 hover:translate-y-[-10px] cursor-pointer"
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="w-[50vw] p-10 bg-amber-50 text-gray-950 h-full gap-2 flex flex-col justify-around duration-150 hover:translate-y-[-25px]">
                    <p className="text-gray-400 text-[0.8rem] capitalize">
                        {product.category}
                    </p>

                    <h1 className="text-gray-950 text-[1.6rem] font-bold capitalize">
                        {product.title}
                    </h1>

                    <p className="text-gray-700 text-[1rem]">
                        {product.rating} <i className="fa-solid fa-star"></i>
                    </p>

                    <p className="text-gray-950 font-bold text-[1.3rem] capitalize">
                        <span className="text-red-500 font-medium text-[1rem]">
                            -{product.discountPercentage}%
                        </span>{" "}
                        {product.price} $
                    </p>

                    <p className="text-gray-800 text-[0.9rem] font-bold capitalize">
                        {product.brand}
                    </p>

                    <p className="text-gray-800 text-[0.8rem] capitalize">
                        {product.description}
                    </p>

                    <div className="flex flex-row gap-6 py-3 font-bold">
                        <span>
                            <i className="fa-solid fa-circle-check"></i>{" "}
                            {product.warrantyInformation}
                        </span>

                        <span>
                            <i className="fa-solid fa-truck-fast"></i>{" "}
                            {product.shippingInformation}
                        </span>
                    </div>

                    <p className="text-[1.5rem] text-green-800 font-bold">
                        {product.availabilityStatus}
                    </p>
                   <div className="flex flex-row gap-2 my-2.5">
                     <NavigateButton text="Buy Now" href={`/product/buy-now/${product.id}`}/>
                    <NavigateButton text="Add Cart" href="/Cart"/>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailCard;
