import ArrowsLeftRight from "./ArrowsLeftRight";

const PagesCountBar = () => {
  return (
    <div className="lg:flex justify-between">
      <p className="text-sm leading-[1.5] text-gray2 mb-4 lg:mb-0">
        <span className="font-bold text-blue2">1</span>-10 of 13 Pages
      </p>
      <div className="flex justify-between items-center gap-3 text-sm leading-[1.5] text-gray7">
        <div className="flex items-center">
          <p className="pr-3">The page on</p>
          <div className="h-7 flex items-center border rounded-lg border-gray15 px-1.5">
            <p>1</p>
            <svg className="size-5 fill-gray7">
              <use href="./sprite.svg#icon-sorter-down"></use>
            </svg>
          </div>
        </div>
        <ArrowsLeftRight />
      </div>
    </div>
  );
};
export default PagesCountBar;
