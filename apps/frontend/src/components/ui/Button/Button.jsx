import clsx from "clsx";

function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}) {

  const variants = {

    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    outline:
      "border border-slate-600 text-white hover:bg-slate-800",

    secondary:
      "bg-slate-800 text-white hover:bg-slate-700",

    success:
      "bg-green-600 text-white hover:bg-green-700",

    danger:
      "bg-red-600 text-white hover:bg-red-700"

  };

  const sizes = {

    sm: "px-3 py-2 text-sm",

    md: "px-5 py-3",

    lg: "px-6 py-4"

  };

  return (
  <button
    type={type}
    {...props}
    className={clsx(
      "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 active:scale-95",
      variants[variant],
      sizes[size],
      className
    )}
  >
    {children}
  </button>
);

}


export default Button;