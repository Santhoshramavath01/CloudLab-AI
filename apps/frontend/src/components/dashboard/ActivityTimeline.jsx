const activities = [
  {
    id: 1,
    title: "Workspace 'React Portfolio' started",
    time: "2 min ago",
  },
  {
    id: 2,
    title: "Docker container created",
    time: "10 min ago",
  },
  {
    id: 3,
    title: "Node.js image pulled",
    time: "18 min ago",
  },
  {
    id: 4,
    title: "Terminal session connected",
    time: "30 min ago",
  },
];

function ActivityTimeline() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-bold text-white">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-4"
          >
            <div className="mt-2 h-3 w-3 rounded-full bg-blue-500"></div>

            <div>
              <p className="text-white">
                {activity.title}
              </p>

              <span className="text-sm text-slate-400">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActivityTimeline;