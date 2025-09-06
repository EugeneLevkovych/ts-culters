const Google = () => {
  return (
    <div className="h-11 flex justify-center items-center border-2 border-blue2 dark:bg-gray13 rounded-xl mb-6">
      <div className="flex gap-1.5">
        <svg className="size-6">
          <use href="./sprite.svg#icon-google"></use>
        </svg>
        <a className="form-text" href="#">
          Sign In with Google
        </a>
      </div>
    </div>
  );
};
export default Google;
