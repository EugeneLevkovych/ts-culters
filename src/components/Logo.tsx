import logoImg from "../assets/logo.png";

type LogoSize = "small" | "large";

interface LogoProps {
  size?: LogoSize;
}

const Logo = ({ size = "large" }: LogoProps) => {
  const sizeClasses = {
    small: {
      container: "flex gap-1 items-center",
      image: "h-7.5",
      text: "font-medium text-xl text-gray3",
    },
    large: {
      container: "flex mb-12",
      image: "h-12",
      text: "font-semibold text-[2.75rem] leading-[1.1] mb-2",
    },
  };

  const classes = sizeClasses[size];

  return (
    <div className={classes.container}>
      <img className={classes.image} src={logoImg} alt="logo" />
      <h1 className={`${classes.text} text-gray7 dark:text-gray13`}>Culters</h1>
    </div>
  );
};

export default Logo;
