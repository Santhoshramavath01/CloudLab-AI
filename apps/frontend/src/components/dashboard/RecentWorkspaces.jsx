const workspaces = [
  {
    id: 1,
    name: "React Portfolio",
    tech: "React",
    status: "Running",
  },
  {
    id: 2,
    name: "Node API",
    tech: "Node.js",
    status: "Stopped",
  },
  {
    id: 3,
    name: "Docker Lab",
    tech: "Docker",
    status: "Running",
  },
];

function RecentWorkspaces() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-bold">
        Recent Workspaces
      </h2>

      <div className="space-y-4">
        {workspaces.map((workspace) => (
          <div
            key={workspace.id}
            className="flex items-center justify-between rounded-xl bg-slate-800 p-4"
          >
            <div>
              <h3 className="font-semibold">
                {workspace.name}
              </h3>

              <p className="text-sm text-slate-400">
                {workspace.tech}
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs ${
                workspace.status === "Running"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {workspace.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentWorkspaces;