import Company from "./Company";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import ProductSelect from "./ProductSelect";
import SimpleSelect from "./SimpleSelect";

const SideBar = () => {
  return (
    <div className="px-4 py-8">
      <div className="flex justify-between items-center w-full mb-11">
        <Logo size="small" />
        <svg className="size-6">
          <use href="./sprite.svg#icon-panel-close"></use>
        </svg>
      </div>
      <Company />
      <div className="mb-8 space-y-2.5">
        <h5 className="text-sm leading-[1.5] uppercase px-2">general</h5>
        <SimpleSelect title="Dashboard" icon="home" />
        <ProductSelect />
        <SimpleSelect title="Transaction (441)" icon="note" />
        <SimpleSelect title="Customers" icon="user-group" />
        <SimpleSelect title="Sales Report" icon="line-chart" />
      </div>
      <div className="mb-8 space-y-2.5">
        <h5 className="text-sm leading-[1.5] uppercase px-2">general</h5>
        <SimpleSelect title="Account & Settings" icon="settings" />
        <SimpleSelect title="Help" icon="help" />
        <DarkModeToggle />
      </div>
    </div>
  );
};
export default SideBar;
