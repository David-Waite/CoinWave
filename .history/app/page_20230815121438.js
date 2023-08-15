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
      id: 1,
    },
    {
      image: "/slideshowImage2.png",
      title: "Art Dummy Title",
      from: "John Doe",
      price: 0.1,
      id: 2,
    },
    {
      image: "/slideshowImage3.png",
      title: "Nexium vacy",
      from: "John Doe",
      price: 16,
      id: 3,
    },
    {
      image: "/slideshowImage4.png",
      title: "Nexium vacy",
      from: "John Doe",
      price: 4,
      id: 4,
    },
    {
      image: "/slideshowImage5.png",
      title: "Nexium vacy",
      from: "John Doe",
      price: 0.3,
      id: 5,
    },
  ];
  return (
    <main>
      <SlideShow />
      <div className={styles.container}>
        <ProductLists />
      </div>
    </main>
  );
}
