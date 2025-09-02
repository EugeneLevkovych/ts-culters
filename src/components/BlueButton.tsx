interface BlueButtonProps {
  text: string;
}

const BlueButton = ({ text }: BlueButtonProps) => {
  return (
    <button className="flex justify-center items-center border-0 rounded-xl bg-blue2 font-bold text-sm leading-[1.5] text-white px-2">
      {text}
    </button>
  );
};
export default BlueButton;
