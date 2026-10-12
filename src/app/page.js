import Image from "next/image";
import Hero from "./component/home/Hero";
import Category from "./component/home/Category";
import ImageGalary from "./component/home/ImageGalary";

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
