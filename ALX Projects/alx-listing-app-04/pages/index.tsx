import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "@/components/property/PropertyCard";

interface Property {
  id: number;
  title: string;
  imageUrl: string;
}

export default function HomePage() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await axios.get<Property[]>("/api/properties");
      setProperties(response.data);
    };
    fetchProperties();
  }, []);

  return (
    <div>
      <h1>Available Properties</h1>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
