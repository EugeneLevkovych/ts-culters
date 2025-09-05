interface InputProps {
  width: string;
  placeholder: string;
}

const Input = ({ width, placeholder }: InputProps) => {
  return (
    <div
      className="w-full relative hidden md:block"
      style={{ maxWidth: `${width}` }}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-gray5 rounded-xl my-placeholder placeholder:text-gray6 px-4 py-[7px]"
      />
      <svg className="absolute top-2.5 right-2.5 size-6 fill-transparent stroke-gray7 cursor-pointer">
        <use href="./sprite.svg#icon-search"></use>
      </svg>
    </div>
  );
};
export default Input;
