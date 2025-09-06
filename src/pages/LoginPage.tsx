import Form from "../components/Form";
import Advertising from "../components/Advertising";
import Logo from "../components/Logo";
import Google from "../components/Google";

const LoginPage = () => {
  return (
    <div className="lg:flex dark:[&_*]:text-gray13">
      <div className="lg:w-1/2 px-5 lg:px-22.5 py-12 lg:py-[207.5px] dark:bg-black2">
        <Logo />
        <h3 className="font-semibold text-3xl leading-[1.5] text-gray1 mb-2">
          Sign Up
        </h3>
        <p className="text-sm leading-[1.5] text-gray2 mb-3">
          Leo eget quam dui in posuere nulla, email === test@example.com
          password === 123456
        </p>
        <Google />
        <p className="flex items-center mb-6 font-bold text-xs leading-[1.4] text-gray1">
          <span className="flex-grow h-px bg-blue1"></span>
          <span className="px-3">or</span>
          <span className="flex-grow h-px bg-blue1"></span>
        </p>
        <Form />
        <div className="flex justify-center">
          <p className="text-sm text-gray1">
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
