/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "group relative inline-block items-center justify-start overflow-hidden rounded-full bg-yellow-500 font-medium transition-all hover:bg-white";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "group relative inline-block items-center justify-start overflow-hidden rounded-full bg-gray-600 font-medium transition-all hover:bg-white px-4 py-3 md:px-6 md:py-4",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        <span className="absolute inset-0  rounded-full border-0 border-white transition-all duration-100 ease-linear group-hover:border-[25px]"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-stone-800">
          {children}
        </span>
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        <span className="absolute inset-0 rounded-full border-0 border-white transition-all duration-100 ease-linear group-hover:border-[25px]"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-stone-800">
          {children}
        </span>
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      <span className="absolute inset-0 rounded-full border-0 border-white transition-all duration-100 ease-linear group-hover:border-[25px]"></span>
      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-stone-800">
        {children}
      </span>
    </button>
  );
}

export default Button;
