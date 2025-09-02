const ArrowsLeftRight = () => {
  return (
    <div className="flex gap-1.5">
      <div className="w-8 h-7 flex justify-center items-center border rounded-lg border-gray5">
        <svg className="size-5 stroke-gray15 fill-transparent">
          <use href="./sprite.svg#icon-arrow-back-simple" />
        </svg>
      </div>
      <div className="w-8 h-7 flex justify-center items-center border rounded-lg border-gray5">
        <svg className="size-5 stroke-gray7 fill-transparent">
          <use href="./sprite.svg#icon-arrow-forward-simple" />
        </svg>
      </div>
    </div>
  );
};
export default ArrowsLeftRight;
