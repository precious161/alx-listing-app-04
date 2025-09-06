import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading...</p>;

  const propertyId = Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10);

  return <PropertyDetail propertyId={propertyId} />;
}
