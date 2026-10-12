import Image from "next/image";
import Hero from "./component/home/Hero";
import Category from "./component/home/Category";
import ImageGalary from "./component/home/ImageGalary";
import { getCanonicalUrl } from "./seo";

export const metadata = {
  title: "Furniture, Lighting & Home Accessories",
  description:
    "Shop furniture, lighting, and home accessories at Omni Mall. Explore curated pieces and find products to make your space feel like you.",
  ...(getCanonicalUrl("/") ? { alternates: { canonical: getCanonicalUrl("/") } } : {}),
  openGraph: {
    type: "website",
    siteName: "Omni Mall",
    locale: "en_US",
    title: "Furniture, Lighting & Home Accessories",
    description:
      "Shop furniture, lighting, and home accessories at Omni Mall. Explore curated pieces for your home.",
    ...(getCanonicalUrl("/") ? { url: getCanonicalUrl("/") } : {}),
  },
  twitter: {
    title: "Furniture, Lighting & Home Accessories",
    description:
      "Shop furniture, lighting, and home accessories at Omni Mall. Explore curated pieces for your home.",
  },
};

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <>
    <Hero />
    <Category/>
    <ImageGalary/>
    </>
  );
}
