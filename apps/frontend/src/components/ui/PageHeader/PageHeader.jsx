function PageHeader({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold">
          {title}
        </h1>

        <p className="mt-2 text-slate-400">
          {subtitle}
        </p>
      </div>

      <div>
        {children}
      </div>
    </div>
  );
}

export default PageHeader;