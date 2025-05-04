import { Medals } from "@/types/medal";
import MedalBadge from "./MedalBadge";

type MedalTableProps = {
  data: Medals[];
};

export default function MedalTable({ data }: MedalTableProps) {
  return (
    <table className="text-gray-700">
      <thead>
        <tr className="border-b-2 border-gray-400">
          <th></th>
          <th className="px-3 py-1 text-center">
            <MedalBadge type="gold" />
          </th>
          <th className="px-3 py-1 text-center">
            <MedalBadge type="silver" />
          </th>
          <th className="px-3 py-1 text-center">
            <MedalBadge type="bronze" />
          </th>
          <th className="px-2 py-1 text-center uppercase">Total</th>
        </tr>
      </thead>
      <tbody>
        {data.slice(0, 10).map((country, index) => (
          <tr key={country.code} className="border-b border-gray-400">
            <td className="px-2 py-1 font-bold min-w-[150px]">
              <span className="font-normal">{index + 1}</span> {country.code}
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
