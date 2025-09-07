interface ArrowUpTypes {
  width: string;
  height: string;
}

const ArrowUp = ({ width, height }: ArrowUpTypes) => {
  return (
    <svg
      className="size-5 stroke-gray7 dark:stroke-gray13 fill-transparent"
      style={{ width: `${width}`, height: `${height}` }}
    >
      <use href="./sprite.svg#icon-arrow-up-simple"></use>
    </svg>
  );
};
export default ArrowUp;
