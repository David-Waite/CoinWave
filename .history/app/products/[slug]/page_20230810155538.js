"use client";

import { useNavigation } from "next/router";
export default function Page({ params }) {
  const router = useNavigation();
  const data = router.query;
  return (
    <div>
      My Post: {params.slug}
      {data.altText}
    </div>
  );
}
