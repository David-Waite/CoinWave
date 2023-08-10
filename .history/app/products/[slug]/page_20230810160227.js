"use client";

import { useRouter } from "next/navigation";
export default function Page({ params, searchParams }) {
  const router = useRouter();

  console.log(searchParams.data);

  return <div>My Post: {params.slug}</div>;
}
