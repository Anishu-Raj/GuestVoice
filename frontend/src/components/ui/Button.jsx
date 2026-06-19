function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}) {
  const variants = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-600 text-white",
    outline: "border border-blue-600 text-blue-600",
  };

  const sizes = {
    sm: "px-3 py-1",
    md: "px-5 py-2",
    lg: "px-7 py-3",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${variants[variant]} ${sizes[size]} rounded`}
    >
      {children}
    </button>
  );
}

export default Button;