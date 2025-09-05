interface ButtonAddProps {
  text: string;
}

const ButtonAdd = ({ text }: ButtonAddProps) => {
  return (
    <button className="flex justify-center items-center border-0 rounded-xl bg-blue2 font-bold text-sm leading-[1.5] text-white px-2 hover:bg-blue1 transition-colors cursor-pointer">
      {text}
      <svg className="size-6 stroke-white fill-transparent">
        <use href="./sprite.svg#icon-add"></use>
      </svg>
    </button>
  );
};
export default ButtonAdd;
