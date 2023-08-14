"use client";
import Image from "next/image";
import { nanoid } from "nanoid";

import styles from "./slideshow.module.css";
import { useEffect, useState } from "react";

export default function SlideShow() {
  const images = [
    "/slideshowImage1.png",
    "/slideshowImage2.png",
    "/slideshowImage3.png",
    "/slideshowImage4.png",
  ];

  const imagesUpdated = images.map((item) => {
    return {
      image: item,
      id: images.findIndex((element) => element === image),
    };
  });

  const [index, setIndex] = useState(0);

  useEffect(() => {
    () => {
      clearInterval(interval);
    };
    const interval = setInterval(
      () =>
        setIndex((prev) => {
          if (prev >= images.length - 1) {
            return 0;
          }
          return prev + 1;
        }),
      3000
    );
    return () => {
      clearInterval(interval);
    };
  }, [images.length, index]);

  function handleRightButton() {
    setIndex((prev) => {
      if (prev >= images.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  }

  function handleLeftButton() {
    setIndex((prev) => {
      if (prev <= 0) {
        return images.length - 1;
      }
      return prev - 1;
    });
  }

  const imageElements = images.map((image) => {
    const postion = images.findIndex((element) => element === image);

    return (
      <div
        key={() => (model.id = nanoid())}
        className={styles.slideContainer}
        style={{ left: `${postion - index}00%` }}
      >
        <div className={styles.imageContainer}>
          <Image src={image} fill={true} objectFit="cover" alt="slideshow" />
        </div>
      </div>
    );
  });
  return (
    <div className={styles.slideShowContainer}>
      <div className={styles.rightBtn} onClick={handleRightButton}>
        right
      </div>
      <div className={styles.leftBtn} onClick={handleLeftButton}>
        left
      </div>
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
