const ArrowsLeftRight = () => {
  return (
    <div className="flex gap-1.5">
      <div className="w-8 h-7 flex justify-center items-center border rounded-lg border-gray5 cursor-pointer">
        <svg className="size-5 stroke-gray4 dark:stroke-gray2 fill-transparent">
          <use href="./sprite.svg#icon-arrow-back-simple" />
        </svg>
      </div>
      <div className="w-8 h-7 flex justify-center items-center border rounded-lg border-gray5 cursor-pointer">
        <svg className="size-5 stroke-gray7 dark:stroke-gray13 fill-transparent">
          <use href="./sprite.svg#icon-arrow-forward-simple" />
        </svg>
      </div>
    </div>
  );
};
export default ArrowsLeftRight;
