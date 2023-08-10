"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Page({ params, searchParams }) {
  const router = useRouter();

  console.log(searchParams);

  return (
    <div>
      My Post: {params.slug}
      <div className={styles.imageContainer}>
        <Image src={searchParams.imageURL} fill={true} alt={item.altText} />
      </div>
      <div>
        <h3>{searchParams.productName}</h3>
        <h4>{searchParams.price}</h4>
      </div>
    </div>
  );
}
