import { useState } from "react";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setChecked(!checked)}
      className={`
        size-5 rounded border-2 
        flex items-center justify-center 
        transition-colors
        ${checked ? "bg-blue4 border-blue2" : "bg-white border-gray7"}
  ${
    checked
      ? "dark:bg-blue4 dark:border-gray13"
      : "dark:bg-gray11 dark:border-gray13"
  }
      `}
    >
      {checked && (
        <svg className="size-5 fill-blue2">
          <use href="./sprite.svg#icon-checkmark"></use>
        </svg>
      )}
    </button>
  );
};
export default Checkbox;
