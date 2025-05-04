import { Medals } from "@/types/medal";
import MedalBadge from "./MedalBadge";
import FlagIcon from "./FlagIcon";

type MedalTableProps = {
  data: Medals[];
  countryCodesAlphabetical: string[];
};

export default function MedalTable({
  data,
  countryCodesAlphabetical,
}: MedalTableProps) {
  return (
    <table className="text-gray-700">
      <thead>
        <tr className="border-b-2 border-gray-400">
          <th></th>
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
