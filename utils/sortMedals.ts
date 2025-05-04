import { Medals } from "@/types/medal";
import { SortKey } from "@/types/sortKey";

export function sortMedals(data: Medals[], sortKey: SortKey) {
  return [...data].sort((a, b) => {
    const totalA = a.gold + a.silver + a.bronze;
    const totalB = b.gold + b.silver + b.bronze;

    if (sortKey === "total") {
      if (totalA !== totalB) return totalB - totalA;
      return b.gold - a.gold;
    }

    if (sortKey === "gold") {
      if (a.gold !== b.gold) return b.gold - a.gold;
      if (a.silver !== b.silver) return b.silver - a.silver;
      return b.bronze - a.bronze;
    }

    if (sortKey === "silver") {
      if (a.silver !== b.silver) return b.silver - a.silver;
      if (a.gold !== b.gold) return b.gold - a.gold;
      return b.bronze - a.bronze;
    }

    if (sortKey === "bronze") {
      if (a.bronze !== b.bronze) return b.bronze - a.bronze;
      if (a.gold !== b.gold) return b.gold - a.gold;
      return b.silver - a.silver;
    }

    return 0;
  });
}
