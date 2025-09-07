interface ArrowDownTypes {
  width: string;
  height: string;
}

const ArrowDown = ({ width, height }: ArrowDownTypes) => {
  return (
    <svg
      className="size-6 stroke-gray7 dark:stroke-gray13 fill-transparent"
      style={{ width: `${width}`, height: `${height}` }}
    >
      <use href="./sprite.svg#icon-arrow-down-simple"></use>
    </svg>
  );
};
export default ArrowDown;
