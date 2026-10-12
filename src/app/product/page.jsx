
import React from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../component/common/ProductCard';
import Header from '../component/common/Header';

const Page = async () => {
    let products = [];

    try {
        products = await fetchProducts();
    } catch (error) {
        console.error(error);
    }

    return (
        <>
            <div className="bg-gray-950">
                <Header />

                <div className="min-h-screen bg-amber-50 px-4 py-10 sm:px-8 sm:py-14">
                    <header className="mx-auto mb-8 w-full max-w-7xl sm:mb-10">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">
                            The collection
                        </p>

                        <h1 className="text-3xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
                            Find your next favorite piece.
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-600 sm:text-base">
                            Explore thoughtful finds for every corner of your home.
                        </p>
                    </header>

                    <div className="mx-auto grid w-full max-w-7xl auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="min-w-0 [&>.card]:w-full"
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
