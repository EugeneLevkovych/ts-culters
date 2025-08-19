import Form from "../components/Form";
import Advertising from "../components/Advertising";
import Logo from "../components/Logo";

const LoginPage = () => {
  return (
    <div className="flex">
      <div className="w-1/2 px-22.5 py-[207.5px]">
        <Logo />
        <h3 className="font-semibold text-3xl leading-[1.5] mb-2">Sign Up</h3>
        <p className="text-sm leading-[1.5] text-grey2 mb-3">
          Lorem ipsum dolor sit amet consectetur. Leo eget quam dui in posuere
          nulla.
        </p>
        <div className="h-11 flex justify-center items-center border-2  border-blue2 rounded-xl mb-6">
          <div className="flex gap-1.5">
            <svg className="size-6">
              <use href="./sprite.svg#icon-google"></use>
            </svg>
            <a className="form-text" href="#">
              Sign In with Google
            </a>
          </div>
        </div>

        <p className="flex items-center mb-6 font-bold text-xs leading-[1.4] text-grey1">
          <span className="flex-grow h-px bg-blue1"></span>
          <span className="px-3">or</span>
          <span className="flex-grow h-px bg-blue1"></span>
        </p>
        <Form />
        <div className="flex justify-center">
          <p className="text-sm text-grey1">
            Do not have account?
            <span>
              <a className="form-text leading-[1.5] text-blue2" href="#">
                Sign Up
              </a>
            </span>
          </p>
        </div>
      </div>
      <Advertising />
    </div>
  );
};
export default LoginPage;
