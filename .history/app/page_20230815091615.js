import Image from "next/image";
import styles from "./page.module.css";
import SlideShow from "./components/home/Slideshow/Slideshow";
import ProductLists from "./components/home/ProductLists/ProductLists";

export default function Home() {
  return (
    <main>
      <SlideShow />
      <div className={styles.container}>
        <ProductLists />
      </div>
    </main>
  );
}
