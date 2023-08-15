"use client";
import Image from "next/image";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import styles from "./slideshow.module.css";
import { useEffect, useState } from "react";

export default function SlideShow({ slides }) {
  const images = [
    "/slideshowImage1.png",
    "/slideshowImage2.png",
    "/slideshowImage3.png",
    "/slideshowImage4.png",
  ];

  let imagesUpdated = slides.map((item) => {
    return {
      ...item,
      id: images.findIndex((element) => element === item) + 1,
    };
  });

  console.log(imagesUpdated2);

  imagesUpdated.unshift({ image: images[images.length - 1], id: 0 });
  imagesUpdated.push({
    image: images[0],
    id: imagesUpdated.length,
  });
  const invervalTimeMaster = 5000;
  const transitionTimeMaster = 1;
  const [index, setIndex] = useState(1);
  const [transitionTime, setTrasitionTime] = useState(transitionTimeMaster);
  const [intervalTime, setIntervalTime] = useState(invervalTimeMaster);

  useEffect(() => {
    () => {
      clearInterval(interval);
    };

    const interval = setInterval(
      () =>
        setIndex((prev) => {
          if (prev == imagesUpdated.length - 1) {
            setTrasitionTime(0);
            setIntervalTime(0);
            return 1;
          }
          setTrasitionTime(transitionTimeMaster);
          setIntervalTime(invervalTimeMaster);
          return prev + 1;
        }),
      intervalTime
    );

    return () => {
      clearInterval(interval);
    };
  }, [imagesUpdated.length, index, intervalTime]);

  function handleRightButton() {
    setIndex((prev) => {
      if (prev >= imagesUpdated.length - 1) {
        setTrasitionTime(0);
        setIntervalTime(0);
        return 1;
      } else {
        setTrasitionTime(transitionTimeMaster);
        setIntervalTime(invervalTimeMaster);
        return prev + 1;
      }
    });
  }

  function handleLeftButton() {
    // needs to be pressed twice at index 0 || fix later if have time
    if (index === 0) {
      setTrasitionTime(0);
      setIndex(imagesUpdated.length - 2);
    } else {
      setTrasitionTime(transitionTimeMaster);
      setIndex((prev) => {
        return prev - 1;
      });
    }
  }

  const imageElements = imagesUpdated.map((image) => {
    const postion = image.id;

    return (
      <div
        key={image.id}
        className={styles.slideContainer}
        style={{
          left: `${postion - index}00%`,
          transition: `${transitionTime}s`,
        }}
      >
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Nexium vacy</h1>
          <h2 className={styles.author}>From Johne Doe</h2>
          <p className={styles.price}>18 ETH</p>
        </div>
        <div className={styles}></div>
        <div className={styles.imageContainer}>
          <Image
            src={image.image}
            fill={true}
            objectFit="cover"
            alt="slideshow"
          />
        </div>
      </div>
    );
  });

  const selectElements = images.map((image) => {
    const postion = images.findIndex((element) => element === image) + 1;

    return (
      <div
        className={styles.selectElement}
        key={image}
        onClick={() => setIndex(postion)}
        style={{
          backgroundColor:
            postion === index
              ? "white"
              : index === imagesUpdated.length - 1 && postion === 1
              ? "white"
              : index === 0 && postion === 4
              ? "white"
              : "grey",
        }}
      ></div>
    );
  });
  return (
    <div className={styles.slideShowContainer}>
      <div className={styles.rightBtn} onClick={handleRightButton}>
        <SlArrowRight />
      </div>
      <div className={styles.leftBtn} onClick={handleLeftButton}>
        <SlArrowLeft />
      </div>
      <div className={styles.selectContainer}>{selectElements}</div>

      {imageElements}
    </div>
  );
}
