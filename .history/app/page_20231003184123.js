"use effect";
import styles from "./page.module.css";
import SlideShow from "./components/home/Slideshow/Slideshow";
import ProductLists from "./components/home/ProductLists/ProductLists";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [slides, setslides] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/slideshow`)
      .then((res) => {
        console.log(res);
        setslides(res.data[0]);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  // data for slideshow slides

  // jsx to be returned
  return (
    <main>
      <SlideShow slides={slides} />
      <div className={styles.container}>
        <ProductLists />
      </div>
    </main>
  );
}
