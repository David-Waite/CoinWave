"use client";
import Image from "next/image";
import styles from "./slideshow.module.css";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useState, useEffect } from "react";

export default function SlideShow() {
  return (
    <div>
      <Image src={"/slideshowImage1.avif"} fill={true} />
    </div>
  );
}
