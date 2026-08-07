import { motion } from "framer-motion";
import {
  Plus,
  Container,
  TerminalSquare,
  GitBranch,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Create Workspace",
    description: "Launch a new cloud development workspace.",
    icon: Plus,
    color: "from-blue-500 to-cyan-500",
    status: "Ready",
  },
  {
    title: "Launch Docker",
    description: "Start a Docker container instantly.",
    icon: Container,
    color: "from-green-500 to-emerald-500",
    status: "Running",
  },
  {
    title: "Open Terminal",
    description: "Access your browser terminal securely.",
    icon: TerminalSquare,
    color: "from-orange-500 to-yellow-500",
    status: "Online",
  },
  {
    title: "Import Repository",
    description: "Clone a GitHub repository in one click.",
    icon: GitBranch,
    color: "from-purple-500 to-indigo-500",
    status: "Connected",
  },
];

function QuickActions() {
  return (
    <section className="rounded-3xl border border-slate-700/70 bg-slate-900/90 p-6 shadow-xl">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            ⚡ Quick Actions
          </h2>

          <p className="mt-2 text-slate-400">
            Frequently used cloud operations.
          </p>

        </div>

        <button className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-500 hover:text-white">
          View All
        </button>

      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {actions.map((action) => {

          const Icon = action.icon;

          return (

            <motion.button
              key={action.title}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
              }}
              className="group relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-950 p-6 text-left transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10"
            >

              {/* Glow */}

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Icon */}

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${action.color} shadow-lg transition duration-300 group-hover:rotate-6`}
              >

                <Icon
                  size={30}
                  className="text-white"
                />

              </div>

              {/* Status */}

              <span className="mt-5 inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-blue-400">

                {action.status}

              </span>

              {/* Title */}

              <h3 className="mt-4 text-lg font-bold text-white transition-colors duration-300 group-hover:text-blue-400">

                {action.title}

              </h3>

              {/* Description */}

              <p className="mt-2 text-sm leading-6 text-slate-400">

                {action.description}

              </p>

              {/* Footer */}

              <div className="mt-6 flex items-center justify-between">

                <span className="text-sm text-slate-500">

                  Click to Launch

                </span>

                <ArrowRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-2 group-hover:text-blue-400"
                />

              </div>

            </motion.button>

          );

        })}

      </div>

    </section>
  );
}

export default QuickActions;