"use client";

import { useRouter } from "next/navigation";
export default function Page({ params, searchParams }) {
  const router = useRouter();
  const data = router.query;
  console.log(searchParams);
  return <div>My Post: {params.slug}</div>;
}
