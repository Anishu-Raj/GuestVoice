function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}) {

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "bg-gray-600 hover:bg-gray-700 text-white",

    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2",
    lg: "px-7 py-3 text-lg",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-lg
        transition
        disabled:opacity-50
      `}
    >
      {children}
    </button>
  );
}

export default Button;