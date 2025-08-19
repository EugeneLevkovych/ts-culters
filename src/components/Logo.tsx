import logoImg from "../assets/logo 18.png";

const Logo = () => {
  return (
    <div className="flex mb-12">
      <img className="h-12" src={logoImg} alt="logo" />
      <h1 className="font-semibold text-[2.75rem] leading-[1.1] text-grey1 mb-2">
        Culters
      </h1>
    </div>
  );
};
export default Logo;
