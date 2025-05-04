"use client";

import MedalTable from "@/components/MedalTable";
import { Medals } from "@/types/medal";
import { useEffect, useState } from "react";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { sortMedals } from "@/utils/sortMedals";
import { SortKey } from "@/types/sortKey";

export default function Home() {
  const [data, setData] = useState<Medals[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const sort = searchParams.get("sort");

  const sortKey: SortKey =
    sort === "gold" ||
    sort === "silver" ||
    sort === "bronze" ||
    sort === "total"
      ? sort
      : "gold";

  const sortedData = sortMedals(data, sortKey);

  const countryCodesAlphabetical = useMemo(() => {
    return data.map((country) => country.code).sort();
  }, [data]);

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
    <>
      <h1 className="text-gray-700 uppercase">Medal Count</h1>
      <MedalTable
        data={sortedData}
        countryCodesAlphabetical={countryCodesAlphabetical}
        sortKey={sortKey}
      />
    </>
  );
}
