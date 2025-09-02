interface InputProps {
  width: string;
  placeholder: string;
}

const Input = ({ width, placeholder }: InputProps) => {
  return (
    <div className="relative hidden md:block">
      <input
        type="text"
        placeholder={placeholder}
        className="border border-gray5 rounded-xl my-placeholder placeholder:text-gray6 px-4 py-[7px]"
        style={{ width: `${width}` }}
      />
      <svg className="absolute top-2.5 right-2.5 size-6 fill-transparent stroke-gray7">
        <use href="./sprite.svg#icon-search"></use>
      </svg>
    </div>
  );
};
export default Input;
