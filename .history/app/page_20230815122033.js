import Image from "next/image";
import styles from "./page.module.css";
import SlideShow from "./components/home/Slideshow/Slideshow";
import ProductLists from "./components/home/ProductLists/ProductLists";

export default function Home() {
  const slides = [
    {
      image: "/slideshowImage1.png",
      title: "Nexium vacy",
      from: "John Doe",
      price: 12,
      productId: 1,
    },
    {
      image: "/slideshowImage2.png",
      title: "Dummy title 2",
      from: "Mary Jane",
      price: 0.1,
      productId: 2,
    },
    {
      image: "/slideshowImage3.png",
      title: "Dummy title 3",
      from: "Lucy Sky",
      price: 16,
      productId: 3,
    },
    {
      image: "/slideshowImage4.png",
      title: "Dummy title 4",
      from: "Peter Rabbit",
      price: 4,
      productId: 4,
    },
  ];
  return (
    <main>
      <SlideShow slides={slides} />
      <div className={styles.container}>
        <ProductLists />
      </div>
    </main>
  );
}