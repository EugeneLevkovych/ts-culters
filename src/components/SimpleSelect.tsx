type IconType =
  | "home"
  | "note"
  | "user-group"
  | "line-chart"
  | "settings"
  | "help";
// | "moon";
interface SimpleSelectProps {
  title: string;
  icon: IconType;
}

const SimpleSelect = ({ title, icon }: SimpleSelectProps) => {
  return (
    <div className="flex gap-2 items-center p-2 mb-2.5 rounded-xl hover:bg-blue4 cursor-pointer">
      <svg className="size-6 stroke-gray7 fill-transparent">
        <use href={`./sprite.svg#icon-${icon}`}></use>
      </svg>
      <p className="font-bold text-sm leading-[1.5] text-gray7">{title}</p>
    </div>
  );
};

export default SimpleSelect;
