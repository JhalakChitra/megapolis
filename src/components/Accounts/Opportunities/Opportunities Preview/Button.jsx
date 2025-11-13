const Button = ({ children, variant = "primary", onClick }) => {
  const base =
    "px-4 py-2 rounded-xl font-medium transition-all focus:outline-none";
  const variants = {
    primary: `${base} bg-[#0A0E3F] text-white hover:bg-[#12185f]`,
    secondary: `${base} bg-gray-100 text-gray-800 hover:bg-gray-200 border border-2-[#0A0E3F]`,
  };

  return (
    <button className={variants[variant]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
