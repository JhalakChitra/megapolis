const Button = ({ children, variant = "primary", onClick }) => {
  const base =
    "px-4 py-2 rounded-xl font-medium transition-all focus:outline-none";
  const variants = {
    primary: `${base} bg-indigo-600 text-white hover:bg-indigo-700`,
    secondary: `${base} bg-gray-200 text-gray-800 hover:bg-gray-300`,
  };

  return (
    <button className={variants[variant]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
