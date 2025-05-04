import { Medals } from "@/types/medal";
import MedalBadge from "./MedalBadge";
import FlagIcon from "./FlagIcon";
import { SortKey } from "@/types/sortKey";
import SortableHeader from "./SortableTableHeader";

type MedalTableProps = {
  data: Medals[];
  countryCodesAlphabetical: string[];
  sortKey: SortKey;
};

export default function MedalTable({
  data,
  countryCodesAlphabetical,
  sortKey,
}: MedalTableProps) {
  return (
    <table className="text-gray-700">
      <thead>
        <tr className="border-b-2 border-gray-400">
          <th></th>
          <th></th>
          <SortableHeader value="gold" currentSort={sortKey}>
            <MedalBadge type="gold" />
          </SortableHeader>
          <SortableHeader value="silver" currentSort={sortKey}>
            <MedalBadge type="silver" />
          </SortableHeader>
          <SortableHeader value="bronze" currentSort={sortKey}>
            <MedalBadge type="bronze" />
          </SortableHeader>
          <SortableHeader value="total" currentSort={sortKey}>
            <span className="uppercase">total</span>
          </SortableHeader>
        </tr>
      </thead>
      <tbody>
        {data.slice(0, 10).map((country, index) => (
          <tr key={country.code} className="border-b border-gray-400">
            <td className="text-right">
              <span className="font-normal">{index + 1}</span>
            </td>
            <td className="px-2 py-1 font-bold min-w-[150px]">
              <div className="flex items-center gap-2">
                <FlagIcon
                  countryCode={country.code}
                  countryCodesAlphabetical={countryCodesAlphabetical}
                />
                <span>{country.code}</span>
              </div>
            </td>
            <td className="px-2 py-1 text-center">{country.gold}</td>
            <td className="px-2 py-1 text-center">{country.silver}</td>
            <td className="px-2 py-1 text-center">{country.bronze}</td>
            <td className="px-2 py-1 text-center font-bold">
              {country.gold + country.silver + country.bronze}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
