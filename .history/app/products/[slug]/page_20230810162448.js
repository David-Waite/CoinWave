"use client";

import Image from "next/image";

export default function Page({ params }) {
  const ITEMSDUMMY = [
    {
      id: 1,
      description: "art dummy product description",
      category: "art",
      productName: "art dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },
    {
      id: 2,
      category: "memberships",
      description: "memberships dummy product description",
      productName: "membership dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },
    {
      id: 3,
      category: "pfp",
      description: "pfp dummy product description",
      productName: "pfp dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },
    {
      id: 4,
      category: "photography",
      description: "photography dummy product description",
      productName: "photography dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },
  ];

  const selectedItem = ITEMSDUMMY.filter((item) => item.id == params.slug)[0];

  return (
    <div>
      <h1>{selectedItem.productName}</h1>
      <p>{selectedItem.description}</p>
      <p>{selectedItem.price}</p>
      <Image
        src={selectedItem.imageURL}
        height={500}
        width={500}
        alt={selectedItem.altText}
      />

      <button>add to cart</button>
    </div>
  );
}
