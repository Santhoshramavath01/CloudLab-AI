function Dashboard() {
  return (
    <>
      <h1 className="text-4xl font-bold">
        Welcome Back 👋
      </h1>

      <p className="text-slate-400 mt-2">
        Manage your cloud workspaces and Docker containers.
      </p>

      <div className="grid grid-cols-4 gap-6 mt-10">
        <div className="rounded-2xl bg-slate-900 p-6 border border-slate-800">
          <h3 className="text-slate-400">
            Workspaces
          </h3>

          <p className="text-4xl font-bold mt-3">
            04
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 p-6 border border-slate-800">
          <h3 className="text-slate-400">
            Running Containers
          </h3>

          <p className="text-4xl font-bold mt-3">
            02
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 p-6 border border-slate-800">
          <h3 className="text-slate-400">
            CPU Usage
          </h3>

          <p className="text-4xl font-bold mt-3">
            21%
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 p-6 border border-slate-800">
          <h3 className="text-slate-400">
            RAM
          </h3>

          <p className="text-4xl font-bold mt-3">
            3.8 GB
          </p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;