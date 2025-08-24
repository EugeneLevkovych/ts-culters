import storeImg from "../assets/kanky-store.png";

const Company = () => {
  return (
    <div className="flex gap-2 border border-gray12 rounded-xl p-2 mb-8">
      <img className="h-10" src={storeImg} alt="store" />
      <div>
        <p className="text-xs leading-[1.4] text-gray5 mb-[2px]">Company</p>
        <p className="font-bold text-sm leading-[1.5] text-gray5">
          Kanky Store
        </p>
      </div>
    </div>
  );
};
export default Company;
