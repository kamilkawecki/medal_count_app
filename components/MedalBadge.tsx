type MedalBadgeProps = {
  type: "gold" | "silver" | "bronze";
};

export default function MedalBadge({ type }: MedalBadgeProps) {
  const colors = {
    gold: "bg-yellow-400",
    silver: "bg-gray-300",
    bronze: "bg-amber-700",
  };

  return <span className={`block w-4 h-4 rounded-full ${colors[type]}`}></span>;
}
