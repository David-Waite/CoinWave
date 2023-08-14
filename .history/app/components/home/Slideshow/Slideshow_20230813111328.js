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

  const [time, setTime] = useState(0);

  console.log(time);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setTime((prev) => {
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
    const postion = images.findIndex((element) => element === image) + 1;

    return (
      <div
        key={image}
        className={styles.slideContainer}
        style={{ left: `${postion - time}00%` }}
      >
        <div className={styles.imageContainer}>
          <Image src={image} fill={true} objectFit="cover" alt="slideshow" />
        </div>
      </div>
    );
  });
  return <div className={styles.slideShowContainer}>{imageElements}</div>;
}
