"use client";
import Image from "next/image";
import styles from "./slideshow.module.css";

export default function SlideShow() {
  const images = [
    "/slideshowImage1.avif",
    "/slideshowImage1.avif",
    "/slideshowImage1.avif",
    "/slideshowImage1.avif",
  ];

  const imageElements = images.map((image) => {
    return (
      <div key={image} className={styles.imageContainer}>
        <Image src={image} fill={true} objectFit="cover" alt="slideshow" />
      </div>
    );
  });
  return (
    <div>
      <div>
        <div className={styles.imageContainer}>
          <Image
            src={"/slideshowImage1.avif"}
            fill={true}
            objectFit="cover"
            alt="slideshow"
          />
        </div>
      </div>
      <div>
        {" "}
        <div className={styles.imageContainer}>
          <Image
            src={"/slideshowImage1.avif"}
            fill={true}
            objectFit="cover"
            alt="slideshow"
          />
        </div>
      </div>
    </div>
  );
}
