export default function Page({ params }) {
  import { useRouter } from "next/router";
  const router = useRouter();
  const data = router.query;
  return <div>My Post: {params.slug}</div>;
}
