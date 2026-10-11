import { fetchProducts } from '@/app/services/api';
import ProductCard from '../common/ProductCard';

const Category = async () => {
    let products = [];

    try {
        products = await fetchProducts();
    } catch (error) {
        console.error('Failed to fetch products:', error);
    }

    return (
        <section
            className="h-auto w-full bg-amber-50 px-6 py-5 md:p-10">
            <div
                className="flex flex-col gap-2">
                <h3
                    className="text-md text-gray-800">
                    Product Navigation
                </h3>

                <h1
                    className="sm:text-4xl text-2xl font-bold text-gray-950">
                    What are you looking for?
                </h1>
            </div>


            <div className="product-list mt-5 w-auto gap-2 flex flex-row overflow-x-auto">
                {products.map((product) => (
                   <ProductCard id={product.id} title={product.title} thumbnail={product.thumbnail}/>
                ))}
            </div>
        </section>
    );
};

export default Category;
