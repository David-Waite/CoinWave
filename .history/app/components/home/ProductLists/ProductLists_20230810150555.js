"use client";

import Image from "next/image";
import styles from "./productLists.module.css";

import { useState } from "react";
import Menu from "../Menu/Menu";
import ProductCards from "../ProductCards/ProductCards";

export default function ProductLists() {
  const ARTITEMSDUMMY = [
    {
      id: 1,
      productName: "art dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },
  ];

  const MEMBERSHIPSITEMSDUMMY = [
    {
      id: 1,
      productName: "membership dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },
  ];

  const PFPITEMSDUMMY = [
    {
      id: 1,
      productName: "pfp dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },
  ];

  const PHOTOGRAPHYITEMSDUMMY = [
    {
      id: 1,
      productName: "photography dummy title",
      imageURL: "/slideshowImage1.avif",
      altText: "art dummy alt text",
      price: 420,
    },
  ];

  const [selected, setSelected] = useState({
    art: true,
    memberships: false,
    PFP: false,
    photography: false,
  });

  function handleClick(select) {
    setSelected(() => {
      return {
        art: select === "art" ? true : false,
        memberships: select === "memberships" ? true : false,
        PFP: select === "PFP" ? true : false,
        photography: select === "photography" ? true : false,
      };
    });
  }

  let filteredProucts;

  if (selected.art) {
    filteredProucts = <ProductCards items={ARTITEMSDUMMY} />;
  }
  if (selected.memberships) {
    filteredProucts = <ProductCards items={MEMBERSHIPSITEMSDUMMY} />;
  }
  if (selected.PFP) {
    filteredProucts = <ProductCards items={PFPITEMSDUMMY} />;
  }
  if (selected.photography) {
    filteredProucts = <ProductCards items={PHOTOGRAPHYITEMSDUMMY} />;
  }
  return (
    <main className={styles.container}>
      <Menu selected={selected} onClick={handleClick} mobile={false} />

      {filteredProucts}
    </main>
  );
}
