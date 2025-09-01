import Input from "./Input";

const Header = () => {
  return (
    <div className="flex justify-between px-8 py-[1.6rem]">
      <Input />
      <div className="flex gap-4">
        <div className="flex justify-center items-center rounded-lg size-9 bg-gray13">
          <svg className="size-6 stroke-gray7 fill-transparent">
            <use href="./sprite.svg#icon-mail"></use>
          </svg>
        </div>
        <div className="flex justify-center items-center rounded-lg size-9 bg-gray13">
          <svg className="size-6 stroke-gray7 fill-transparent">
            <use href="./sprite.svg#icon-notifications"></use>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Header;
