
import React from 'react';
import { fetchProducts } from '@/app/services/api';
import Header from '@/app/component/common/Header';
import ProductDetailCard from '@/app/component/product/ProductDetailCard';
import ReviewComments from '@/app/component/product/ReviewComments';

const Page = async ({ params }) => {
    const { pid } = await params;

    let products = [];

    try {
        products = await fetchProducts();
    } catch (error) {
        console.error(error);
    }

    const product = products.find(
        (item) => String(item.id) === String(pid)
    );

    if (!product) {
        return (
            <div className="text-amber-50">
                Product not found
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="text-amber-50 pt-10 w-full h-screen bg-amber-50">
                <ProductDetailCard product={product} />
                <ReviewComments reviews={product.reviews} />
                

            </div>
        </>
    );
};

export default Page;
