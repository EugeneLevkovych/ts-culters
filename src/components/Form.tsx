import { useState } from "react";
import { useNavigate } from "react-router";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      if (email === "test@example.com" && password === "123456") {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/dashboard");
      } else {
        setError("Incorrect email or password");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form className="flex flex-col mb-4" onSubmit={handleSubmit}>
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl">
          {error}
        </div>
      )}

      <label className="form-text text-grey1 mb-1.5" htmlFor="email">
        email
      </label>
      <div className="relative mb-4">
        <input
          className="w-full text-sm leading-[1.5] border border-grey4 form-placeholder px-4 py-[15.5px] rounded-xl focus:border-blue2 focus:ring-1 focus:ring-blue2 outline-none"
          id="email"
          type="email"
          placeholder="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <svg className="absolute top-4 right-4 size-6 fill-transparent stroke-grey4">
          <use href="./sprite.svg#icon-check-circle"></use>
        </svg>
      </div>
      <label className="form-text text-grey1 mb-1.5" htmlFor="password">
        password
      </label>
      <div className="relative mb-4">
        <input
          className="w-full text-sm leading-[1.5] border border-grey4 form-placeholder px-4 py-[15.5px] rounded-xl"
          id="password"
          type="password"
          placeholder="input password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <svg className="absolute top-4 right-4 size-6 fill-transparent stroke-grey4">
          <use href="./sprite.svg#icon-eye-hidden"></use>
        </svg>
      </div>

      <div className="flex justify-between mb-6">
        <div className="flex gap-1">
          <input type="checkbox" id="remember" />
          <label className="form-text text-grey3" htmlFor="remember">
            remember me
          </label>
        </div>
        <a className="form-text underline text-blue2" href="#">
          Forget Password
        </a>
      </div>
      <button
        className="form-text text-white bg-blue2 rounded-xl py-3"
        type="submit"
      >
        {isLoading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
};
export default Form;
