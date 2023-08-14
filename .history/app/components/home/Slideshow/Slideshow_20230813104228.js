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
  return (
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
  );
}
