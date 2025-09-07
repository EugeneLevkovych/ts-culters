import { useDarkMode } from "../hooks/useDarkMode";
import Admin from "./Admin";
import ArrowDown from "./ArrowDown";
import Company from "./Company";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import ProductSelect from "./ProductSelect";
import SimpleSelect from "./SimpleSelect";

const SideBar = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="hidden lg:block w-70 flex-shrink-0 px-4 py-8 dark:bg-black2">
      <div className="flex justify-between items-center w-full mb-11">
        <Logo size="small" />
        <svg className="size-6 fill-gray7 dark:fill-gray13">
          <use href="./sprite.svg#icon-panel-close"></use>
        </svg>
      </div>
      <Company />
      <div className="mb-8 space-y-2.5 [&>*]:text-gray10 dark:[&>*]:text-gray15">
        <h5 className="text-sm leading-[1.5] !text-gray16 dark:!text-gray2 uppercase px-2">
          general
        </h5>
        <SimpleSelect title="Dashboard" icon="home" />
        <ProductSelect />
        <SimpleSelect title="Transaction (441)" icon="note" />
        <SimpleSelect title="Customers" icon="user-group" />
        <SimpleSelect title="Sales Report" icon="line-chart" />
      </div>
      <div className="mb-11.5 space-y-2.5 [&>*]:text-gray10 dark:[&>*]:text-gray15">
        <h5 className="text-sm leading-[1.5] !text-gray16 dark:!text-gray2 uppercase px-2">
          tools
        </h5>
        <SimpleSelect title="Account & Settings" icon="settings" />
        <SimpleSelect title="Help" icon="help" />
        <DarkModeToggle isDark={isDark} onToggle={setIsDark} />
      </div>
      <div className="flex justify-between">
        <Admin />
        <ArrowDown width="24px" height="24px" />
      </div>
    </div>
  );
};
export default SideBar;
