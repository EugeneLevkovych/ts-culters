import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <form className="flex flex-col mb-4">
      <label className="form-text text-grey1 mb-1.5">email</label>
      <div className="relative mb-4">
        <input
          className="w-full text-sm leading-[1.5] border border-grey4 px-4 py-[15.5px] rounded-xl focus:border-blue2 focus:ring-1 focus:ring-blue2 outline-none"
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <svg className="absolute top-4 right-4 size-6 fill-transparent stroke-grey4">
          <use href="./sprite.svg#icon-check-circle"></use>
        </svg>
      </div>
      <label className="form-text text-grey1 mb-1.5">password</label>
      <div className="relative mb-4">
        <input
          className="w-full text-sm leading-[1.5] border border-grey4 px-4 py-[15.5px] rounded-xl"
          type="text"
          placeholder="input password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <svg className="absolute top-4 right-4 size-6 fill-transparent stroke-grey4">
          <use href="./sprite.svg#icon-eye-hidden"></use>
        </svg>
      </div>

      <div className="flex justify-between mb-6">
        <div className="flex gap-1">
          <input type="checkbox" />
          <label className="form-text text-grey3">remember me</label>
        </div>
        <a className="form-text underline text-blue2" href="#">
          Forget Password
        </a>
      </div>
      <button
        className="form-text text-white bg-blue2 rounded-xl py-3"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Sign In
      </button>
    </form>
  );
};
export default Form;
