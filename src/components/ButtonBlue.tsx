interface ButtonBlueProps {
  text: string;
  onClick: () => void;
}

const ButtonBlue = ({ text, onClick }: ButtonBlueProps) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center border-0 rounded-lg bg-blue2 font-bold text-sm leading-[1.5] text-white px-3 py-1.5 hover:bg-blue1 transition-colors cursor-pointer"
    >
      {text}
    </button>
  );
};
export default ButtonBlue;
