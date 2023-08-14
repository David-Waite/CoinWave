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

  const [postion, setPostion] = useState(0);

  console.log(postion);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setPostion((prev) => {
          if (prev === images.length) {
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
        style={{ left: `${postion}00%` }}
      >
        <div className={styles.imageContainer}>
          <Image src={image} fill={true} objectFit="cover" alt="slideshow" />
        </div>
      </div>
    );
  });
  return <div className={styles.slideShowContainer}>{imageElements}</div>;
}
