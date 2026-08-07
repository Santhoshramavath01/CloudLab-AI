import clsx from "clsx";

function Card({ children, className = "" }) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition-all duration-300 hover:border-blue-500/30 hover:shadow-blue-500/10",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;