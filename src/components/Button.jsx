const Button = ({ title = "rent now" }) => {
  return (
    <button className="bg-primary-blue uppercase py-3 px-4 text-white rounded-sm font-semibold cursor-pointer hover:bg-primary-text transition-colors duration-500">
      {title}
    </button>
  );
};

export default Button;
