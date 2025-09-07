const CellItemAction = () => {
  return (
    <div className="flex gap-4">
      <svg className="size-6 stroke-gray7 dark:stroke-gray13 fill-transparent">
        <use href="./sprite.svg#icon-eye-open"></use>
      </svg>
      <svg className="size-6 stroke-gray7 dark:stroke-gray13 fill-transparent">
        <use href="./sprite.svg#icon-edit"></use>
      </svg>
      <svg className="size-6 stroke-gray7 dark:stroke-gray13 fill-transparent">
        <use href="./sprite.svg#icon-delete"></use>
      </svg>
    </div>
  );
};
export default CellItemAction;
