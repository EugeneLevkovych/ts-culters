import Admin from "./Admin";
import Input from "./Input";

const Header = () => {
  return (
    <div className="flex justify-between px-8 py-[1.6rem]">
      <Input width="300px" />
      <div className="flex gap-4">
        <div className="relative hidden md:flex justify-center items-center rounded-lg size-9 bg-gray13">
          <svg className="size-6 stroke-gray7 fill-transparent">
            <use href="./sprite.svg#icon-mail"></use>
          </svg>
          <div className="absolute top-1 right-1 flex justify-center items-center size-3.5 font-semibold leading-[1.1] text-[8px] text-white bg-red3 rounded-xs p-[2px]">
            2
          </div>
        </div>
        <div className="relative hidden md:flex justify-center items-center rounded-lg size-9 bg-gray13">
          <svg className="size-6 stroke-gray7 fill-transparent">
            <use href="./sprite.svg#icon-notifications"></use>
          </svg>
          <div className="absolute top-1 right-1 flex justify-center items-center size-3.5 font-semibold leading-[1.1] text-[8px] text-white bg-red3 rounded-xs p-[2px]">
            8
          </div>
        </div>
        <div className="hidden md:block h-full border-l border-gray17"></div>
        <Admin />
      </div>
    </div>
  );
};
export default Header;
