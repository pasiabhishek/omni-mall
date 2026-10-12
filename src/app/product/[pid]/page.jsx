
import React from 'react';
import { cache } from 'react';
import { notFound } from 'next/navigation';
import { fetchProducts } from '@/app/services/api';
import Header from '@/app/component/common/Header';
import ProductDetailCard from '@/app/component/product/ProductDetailCard';
import { getCanonicalUrl, serializeJsonLd } from '@/app/seo';

const getProduct = cache(async (pid) => {
    const products = await fetchProducts();

    return products.find((item) => String(item.id) === String(pid)) ?? null;
});

const getProductDescription = (product) =>
    product.description?.trim() ||
    `Explore ${product.title} at Omni Mall. View price, availability, and product details.`;

const getProductMetadata = (product, pid) => {
    const description = getProductDescription(product);
    const canonical = getCanonicalUrl(`/product/${pid}`);
    const images = product.images?.length
        ? product.images
        : product.thumbnail
            ? [product.thumbnail]
            : [];

    return {
        title: product.title,
        description,
        ...(canonical ? { alternates: { canonical } } : {}),
        keywords: [product.title, product.brand, product.category, 'Omni Mall']
            .filter(Boolean),
        openGraph: {
            type: 'website',
            siteName: 'Omni Mall',
            locale: 'en_US',
            title: product.title,
            description,
            ...(canonical ? { url: canonical } : {}),
            ...(images.length ? { images } : {}),
        },
        twitter: {
            card: images.length ? 'summary_large_image' : 'summary',
            title: product.title,
            description,
            ...(images.length ? { images: [images[0]] } : {}),
        },
    };
};

export async function generateMetadata({ params }) {
    const { pid } = await params;
    const product = await getProduct(pid);

    if (!product) {
        return {
            title: 'Product not found',
            robots: { index: false, follow: true },
        };
    }

    return getProductMetadata(product, pid);
}

const Page = async ({ params }) => {
    const { pid } = await params;
    const product = await getProduct(pid);

    if (!product) {
        notFound();
    }

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        description: getProductDescription(product),
        ...(product.images?.length
            ? { image: product.images }
            : product.thumbnail
                ? { image: [product.thumbnail] }
                : {}),
        ...(product.category ? { category: product.category } : {}),
        ...(product.brand
            ? { brand: { '@type': 'Brand', name: product.brand } }
            : {}),
        offers: {
            '@type': 'Offer',
            price: product.price,
            priceCurrency: 'USD',
            ...(getCanonicalUrl(`/product/${pid}`)
                ? { url: getCanonicalUrl(`/product/${pid}`) }
                : {}),
            ...(product.availabilityStatus?.toLowerCase().includes('stock')
                ? {
                    availability: product.availabilityStatus
                        .toLowerCase()
                        .includes('out')
                        ? 'https://schema.org/OutOfStock'
                        : 'https://schema.org/InStock',
                }
                : {}),
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: serializeJsonLd(productSchema),
                }}
            />
            <Header />
            <div className="text-amber-50 pt-10 w-full h-screen bg-amber-50">
           <ProductDetailCard product={product}/>
           </div>
        </>
    );
};

export default Page;
