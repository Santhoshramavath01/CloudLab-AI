import { CheckCircle, Container } from "lucide-react";

function DockerStatus() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6 flex items-center gap-3">
        <Container className="text-blue-500" />

        <h2 className="text-xl font-bold">
          Docker Engine
        </h2>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Status</span>

          <span className="flex items-center gap-2 text-green-400">
            <CheckCircle size={16} />

            Running
          </span>
        </div>

        <div className="flex justify-between">
          <span>Containers</span>

          <strong>2</strong>
        </div>

        <div className="flex justify-between">
          <span>Images</span>

          <strong>8</strong>
        </div>

        <div className="flex justify-between">
          <span>Volumes</span>

          <strong>5</strong>
        </div>
      </div>
    </section>
  );
}

export default DockerStatus;