const ExportBtn = () => {
  return (
    <button className="flex items-center gap-1.5 border rounded-xl border-gray15 font-bold text-xs leading-[1.4] text-gray7 dark:text-gray13 p-1.5 cursor-pointer">
      Export
      <svg className="size-6 stroke-gray7 dark:stroke-gray13 fill-transparent">
        <use href="./sprite.svg#icon-download"></use>
      </svg>
    </button>
  );
};
export default ExportBtn;
