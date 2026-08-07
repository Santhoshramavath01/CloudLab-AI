import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  color,
  progress = 70,
  trend = "12% increase this week",
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/90 p-5 shadow-lg transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      {/* Background Glow */}

      <div
        className="absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-10 blur-3xl transition-all duration-500 group-hover:opacity-20"
        style={{
          background: color,
        }}
      />

      {/* Header */}

      <div className="relative flex items-start justify-between">

        <div>

          <p className="text-sm font-medium text-slate-400">

            {title}

          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-white">

            {value}

          </h2>

          <p className="mt-2 text-sm text-slate-500">

            {subtitle}

          </p>

        </div>

        {/* Icon */}

        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.05,
          }}
          className="flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{
            background: `${color}20`,
          }}
        >
          <Icon
            size={28}
            style={{
              color,
            }}
          />
        </motion.div>

      </div>

      {/* Progress */}

      <div className="relative mt-6">

        <div className="mb-2 flex items-center justify-between">

          <span className="text-sm text-slate-400">

            Resource Usage

          </span>

          <span className="text-sm font-semibold text-white">

            {progress}%

          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-800">

          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              duration: 1,
            }}
            className="h-full rounded-full"
            style={{
              background: color,
            }}
          />

        </div>

      </div>

      {/* Footer */}

      <div className="relative mt-6 flex items-center justify-between">

        <div className="flex items-center gap-2 text-emerald-400">

          <ArrowUpRight size={16} />

          <span className="text-sm font-medium">

            {trend}

          </span>

        </div>

        <span className="text-xs text-slate-500">

          Updated now

        </span>

      </div>

    </motion.div>
  );
}

export default StatCard;