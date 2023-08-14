"use client";
import Image from "next/image";
import styles from "./slideshow.module.css";
import { useEffect, useState } from "react";

export default function SlideShow() {
  const images = [
    "/slideshowImage1.avif",
    "/slideshowImage2.avif",
    "/slideshowImage3.avif",
    "/slideshowImage4.avif",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setIndex((prev) => {
          if (prev === images.length - 1) {
            return 1;
          }
          return prev + 1;
        }),
      3000
    );
    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const imageElements = images.map((image) => {
    const postion = images.findIndex((element) => element === image);

    return (
      <div
        key={image}
        className={styles.slideContainer}
        style={{ left: `${postion - index}00%` }}
      >
        <div className={styles.right}>></div>
        <div className={styles.imageContainer}>
          <Image src={image} fill={true} objectFit="cover" alt="slideshow" />
        </div>
      </div>
    );
  });
  return <div className={styles.slideShowContainer}>{imageElements}</div>;
}
