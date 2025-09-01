const ArrowsLeftRight = () => {
  return (
    <div className="flex gap-1.5">
      <svg className="size-5 stroke-gray7 fill-transparent">
        <use href="./sprite.svg#icon-arrow-forward-simple" />
      </svg>
      <svg className="size-5 stroke-gray15 fill-transparent">
        <use href="./sprite.svg#icon-arrow-back-simple" />
      </svg>
    </div>
  );
};
export default ArrowsLeftRight;
