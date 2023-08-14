"use client";
import Image from "next/image";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import styles from "./slideshow.module.css";
import { useEffect, useState } from "react";

export default function SlideShow() {
  const images = [
    "/slideshowImage1.png",
    "/slideshowImage2.png",
    "/slideshowImage3.png",
    "/slideshowImage4.png",
  ];

  let imagesUpdated = images.map((item) => {
    return {
      image: item,
      id: images.findIndex((element) => element === item) + 1,
    };
  });

  imagesUpdated.unshift({ image: images[images.length - 1], id: 0 });
  imagesUpdated.push({
    image: images[0],
    id: imagesUpdated.length,
  });
  const invervalTimeConst = 3000;
  const [index, setIndex] = useState(1);
  const [transitionTime, setTrasitionTime] = useState(1);
  const [intervalTime, setIntervalTime] = useState(invervalTimeConst);

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
          setTrasitionTime(1);
          setIntervalTime(5000);
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
        setTrasitionTime(1);
        setIntervalTime(3000);
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
      setTrasitionTime(1);
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

// "use client";
// import Image from "next/image";
// import styles from "./slideshow.module.css";
// import { useEffect, useState } from "react";

// export default function SlideShow() {
//   const images = [
//     "/slideshowImage1.png",
//     "/slideshowImage2.png",
//     "/slideshowImage3.png",
//     "/slideshowImage4.png",
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     () => {
//       clearInterval(interval);
//     };
//     const interval = setInterval(
//       () =>
//         setIndex((prev) => {
//           if (prev >= images.length - 1) {
//             return 0;
//           }
//           return prev + 1;
//         }),
//       3000
//     );
//     return () => {
//       clearInterval(interval);
//     };
//   }, [images.length, index]);

//   function handleRightButton() {
//     setIndex((prev) => {
//       if (prev >= images.length - 1) {
//         return 0;
//       }
//       return prev + 1;
//     });
//   }

//   function handleLeftButton() {
//     setIndex((prev) => {
//       if (prev <= 0) {
//         return images.length - 1;
//       }
//       return prev - 1;
//     });
//   }

//   const imageElements = images.map((image) => {
//     const postion = images.findIndex((element) => element === image);

//     return (
//       <div
//         key={image}
//         className={styles.slideContainer}
//         style={{ left: `${postion - index}00%` }}
//       >
//         <div className={styles.imageContainer}>
//           <Image src={image} fill={true} objectFit="cover" alt="slideshow" />
//         </div>
//       </div>
//     );
//   });
//   return (
//     <div className={styles.slideShowContainer}>
//       <div className={styles.rightBtn} onClick={handleRightButton}>
//         right
//       </div>
//       <div className={styles.leftBtn} onClick={handleLeftButton}>
//         left
//       </div>
//       {imageElements}
//     </div>
//   );
// }
