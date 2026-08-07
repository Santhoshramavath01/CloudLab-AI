import { motion } from "framer-motion";

import {
    Bot,
    Sparkles,
    AlertTriangle,
    Cpu,
    Trash2,
    ArrowRight,
} from "lucide-react";

const recommendations = [
    {
        title: "Stop Unused Containers",
        description:
            "2 Docker containers have been idle for over 2 hours.",
        priority: "High",
        color: "bg-red-500",
        icon: AlertTriangle,
        button: "Optimize",
    },
    {
        title: "CPU Usage Increased",
        description:
            "CPU utilization has increased by 18% in the last hour.",
        priority: "Medium",
        color: "bg-yellow-500",
        icon: Cpu,
        button: "Analyze",
    },
    {
        title: "Clean Docker Images",
        description:
            "5 unused Docker images are consuming storage.",
        priority: "Low",
        color: "bg-blue-500",
        icon: Trash2,
        button: "Clean",
    },
];

function AIRecommendations() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl"
        >
            {/* Header */}

            <div className="mb-8 flex items-center gap-3">

                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-3">

                    <Bot size={26} className="text-white" />

                </div>

                <div>

                    <h2 className="text-2xl font-bold text-white">

                        AI Cloud Assistant

                    </h2>

                    <p className="text-slate-400">

                        Smart recommendations for your cloud environment

                    </p>

                </div>

            </div>

            <div className="space-y-5">

                {recommendations.map((item) => {

                    const Icon = item.icon;

                    return (

                        <motion.div
                            key={item.title}
                            whileHover={{ scale: 1.02 }}
                            className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition-all hover:border-blue-500"
                        >

                            <div className="flex items-start justify-between">

                                <div className="flex gap-4">

                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                                    >

                                        <Icon
                                            size={22}
                                            className="text-white"
                                        />

                                    </div>

                                    <div>

                                        <div className="flex items-center gap-3">

                                            <h3 className="font-semibold text-white">

                                                {item.title}

                                            </h3>

                                            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">

                                                {item.priority}

                                            </span>

                                        </div>

                                        <p className="mt-2 text-sm leading-6 text-slate-400">

                                            {item.description}

                                        </p>

                                    </div>

                                </div>

                                <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">

                                    {item.button}

                                    <ArrowRight size={16} />

                                </button>

                            </div>

                        </motion.div>

                    );

                })}

            </div>

            <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">

                <div className="flex items-center gap-3">

                    <Sparkles className="text-blue-400" />

                    <div>

                        <h4 className="font-semibold text-white">

                            AI Insight

                        </h4>

                        <p className="mt-1 text-sm text-slate-300">

                            Your infrastructure health score is
                            <span className="font-bold text-green-400">
                                {" "}94%
                            </span>.
                            Optimizing unused resources could improve performance.

                        </p>

                    </div>

                </div>

            </div>

        </motion.section>
    );
}

export default AIRecommendations;