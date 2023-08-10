"use router";

import { useRouter } from "next/router";
export default function Page({ params }) {
  const router = useRouter();
  const data = router.query;
  return (
    <div>
      My Post: {params.slug}
      {data.altText}
    </div>
  );
}
