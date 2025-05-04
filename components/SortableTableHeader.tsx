"use client";

import { SortKey } from "@/types/sortKey";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

type SortableHeaderProps = {
  value: SortKey;
  currentSort: string | null;
  children: React.ReactNode;
};

export default function SortableHeader({
  value,
  currentSort,
  children,
}: SortableHeaderProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`);
  };

  const isActive = currentSort === value;

  return (
    <th
      onClick={handleClick}
      className={`px-2 py-1 text-center cursor-pointer border-t-2 ${
        isActive ? "border-gray-400" : "border-transparent"
      }`}
    >
      {children}
    </th>
  );
}
