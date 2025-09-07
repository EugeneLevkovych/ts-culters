type IconType =
  | "home"
  | "note"
  | "user-group"
  | "line-chart"
  | "settings"
  | "help";

interface SimpleSelectProps {
  title: string;
  icon: IconType;
}

const SimpleSelect = ({ title, icon }: SimpleSelectProps) => {
  return (
    <div className="flex gap-2 items-center p-2 mb-2.5 rounded-xl hover:bg-blue4 cursor-pointer">
      <svg className="size-6 stroke-gray10 dark:stroke-gray5 fill-transparent">
        <use href={`./sprite.svg#icon-${icon}`}></use>
      </svg>
      <p className="text-sm leading-[1.5]">{title}</p>
    </div>
  );
};

export default SimpleSelect;
