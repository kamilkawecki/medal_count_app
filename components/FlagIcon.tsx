type FlagIconProps = {
  countryCode: string;
  countryCodesAlphabetical: string[];
};

export default function FlagIcon({
  countryCode,
  countryCodesAlphabetical,
}: FlagIconProps) {
  const flagWidth = 28;
  const flagHeight = 17;

  const index = countryCodesAlphabetical.indexOf(countryCode);

  const yOffset = index >= 0 ? -(index * flagHeight) : 0;

  return (
    <img
      src="/flags.png"
      alt={`${countryCode} flag`}
      width={flagWidth}
      height={flagHeight}
      className={`inline-block h-[${flagHeight}px] object-cover`}
      style={{
        objectPosition: `0 ${yOffset}px`,
      }}
    />
  );
}
