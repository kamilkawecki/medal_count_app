"use client";

import MedalTable from "@/components/MedalTable";
import { Medals } from "@/types/medal";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<Medals[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/medals")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch medals data.");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading medals...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-gray-700 uppercase">Medal Count</h1>
      <MedalTable data={data} />
    </div>
  );
}
