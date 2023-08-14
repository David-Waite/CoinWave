"use client";
import Image from "next/image";
import styles from "./slideshow.module.css";

export default function SlideShow() {
  const images = [
    "/slideshowImage1.avif",
    "/slideshowImage2.avif",
    "/slideshowImage3.avif",
    "/slideshowImage4.avif",
  ];

  const imageElements = images.map((image) => {
    const postion = images.findIndex((element) => element === image);
    console.log(postion);
    return (
      <div key={image} className={styles.slideContainer} style={{ left: 0 }}>
        <div className={styles.imageContainer}>
          <Image
            src={"/slideshowImage1.avif"}
            fill={true}
            objectFit="cover"
            alt="slideshow"
          />
        </div>
      </div>
    );
  });
  return (
    <div className={styles.slideShowContainer}>
      <div className={styles.slideContainer} style={{ left: 0 }}>
        <div className={styles.imageContainer}>
          <Image
            src={"/slideshowImage1.avif"}
            fill={true}
            objectFit="cover"
            alt="slideshow"
          />
        </div>
      </div>
      <div className={styles.slideContainer} style={{ left: "100%" }}>
        <div className={styles.imageContainer}>
          <Image
            src={"/slideshowImage1.avif"}
            fill={true}
            objectFit="cover"
            alt="slideshow"
          />
        </div>
      </div>
      {imageElements}
    </div>
  );
}
