interface DarkModeToggleProps {
  isDark: boolean;
  onToggle?: (isDark: boolean) => void;
}

const DarkModeToggle = ({ isDark, onToggle }: DarkModeToggleProps) => {
  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggle) {
      onToggle(!isDark);
    }
  };

  return (
    <div className="flex gap-2 items-center p-2 rounded-xl hover:bg-blue4">
      <svg className="size-6 stroke-gray7 fill-transparent">
        <use href="./sprite.svg#icon-moon"></use>
      </svg>
      <p className="font-bold text-sm leading-[1.5] text-gray7 flex-1">
        Dark Mode
      </p>

      <button
        onClick={handleToggle}
        className={`
          relative inline-flex h-5 w-9 items-center rounded-full 
          transition-colors duration-200 ease-in-out focus:outline-none cursor-pointer
          ${isDark ? "bg-blue1" : "bg-gray4"}
        `}
        aria-label="Toggle dark mode"
      >
        <span
          className={`
            inline-block size-4.5 transform rounded-full bg-white 
            transition-transform duration-200 ease-in-out shadow-sm
            ${isDark ? "translate-x-4" : "translate-x-0.5"}
          `}
        />
      </button>
    </div>
  );
};

export default DarkModeToggle;
