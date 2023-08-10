"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Page({ params, searchParams }) {
  return <div>My Post: {params.slug}</div>;
}
