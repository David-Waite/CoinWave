"use client";

import { useRouter } from "next/navigation";
export default function Page({ params }) {
  const router = useRouter();
  const data = router.query;
  console.log(datA);
  return <div>My Post: {params.slug}</div>;
}
