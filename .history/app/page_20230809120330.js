import Image from "next/image";
import styles from "./page.module.css";
import SlideShow from "./components/Slideshow/Slideshow";
import ProductLists from "./components/ProductLists/ProductLists";

export default function Home() {
  return (
    <main className={styles.main}>
      <SlideShow />
      <ProductLists />
    </main>
  );
}
