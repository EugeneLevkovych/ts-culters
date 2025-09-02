const ExportBtn = () => {
  return (
    <button className="flex items-center gap-1.5 border rounded-xl border-gray15 font-bold text-xs leading-[1.4] text-gray7 p-1.5">
      Filter
      <svg className="size-6 stroke-gray7 fill-transparent">
        <use href="./sprite.svg#icon-download"></use>
      </svg>
    </button>
  );
};
export default ExportBtn;
