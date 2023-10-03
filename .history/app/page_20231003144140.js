// main home page
import styles from "./page.module.css";
import SlideShow from "./components/home/Slideshow/Slideshow";
import ProductLists from "./components/home/ProductLists/ProductLists";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/students/")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // data for slideshow slides
  const slides = [
    {
      image: "/slideshowImage1.png",
      title: "The Golden Collection",
      from: "AmbiBambi",
      price: 12,
    },
    {
      image: "/slideshowImage2.png",
      title: "Dummy title 2",
      from: "Mary Jane",
      price: 0.1,
    },
    {
      image: "/slideshowImage3.png",
      title: "Dummy title 3",
      from: "Lucy Sky",
      price: 16,
    },
    {
      image: "/slideshowImage4.png",
      title: "Dummy title 4",
      from: "Peter Rabbit",
      price: 4,
    },
  ];

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
