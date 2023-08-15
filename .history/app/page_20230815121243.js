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
    },
    "/slideshowImage1.png",
    "/slideshowImage2.png",
    "/slideshowImage3.png",
    "/slideshowImage4.png",
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
