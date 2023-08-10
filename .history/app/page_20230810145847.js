import Image from "next/image";
import styles from "./page.module.css";
import SlideShow from "./components/home/Slideshow/Slideshow";
import ProductLists from "./components/home/ProductLists/ProductLists";
import ProductCards from "./components/home/ProductCards/ProductCards";

export default function Home() {
  return (
    <main>
      <SlideShow />
      <ProductLists />
    </main>
  );
}
