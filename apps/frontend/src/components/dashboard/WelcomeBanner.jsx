import { motion } from "framer-motion";
import {
  Sparkles,
  Plus,
  BookOpen,
  Boxes,
  Container,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

import Button from "../ui/Button";

function WelcomeBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 shadow-2xl"
    >
      {/* Background Glow */}

      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative grid gap-10 p-8 lg:grid-cols-2 lg:p-10">

        {/* LEFT */}

        <div className="flex flex-col justify-center">

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">

            <Sparkles size={16} />

            Cloud Development Platform

          </div>

          <h1 className="mt-6 text-4xl font-black leading-tight text-white lg:text-5xl">

            Welcome Back 👋

          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 lg:text-lg">

            Build, deploy and manage cloud-native applications,
            Docker containers, browser terminals and AI-powered
            development workflows from one modern dashboard.

          </p>

          {/* Stats */}

          <div className="mt-8 flex flex-wrap gap-4">

            <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur">

              <p className="text-sm text-blue-100">
                Active Workspaces
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white">

                04

              </h2>

            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur">

              <p className="text-sm text-blue-100">
                Containers
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white">

                02

              </h2>

            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur">

              <p className="text-sm text-blue-100">
                CPU
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white">

                21%

              </h2>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">

            <Button
              variant="primary"
              className="bg-white px-6 text-slate-900 hover:bg-slate-100"
            >
              <Plus size={18} />

              <span>Create Workspace</span>

            </Button>

            <Button
              variant="outline"
              className="border-white/30 bg-white/10 px-6 text-white hover:bg-white/20"
            >
              <BookOpen size={18} />

              <span>Documentation</span>

            </Button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex items-center justify-center">

          <div className="grid w-full max-w-md gap-5">

            {/* Main Card */}

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-blue-100">
                    Cloud Status
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-white">

                    Connected

                  </h2>

                  <div className="mt-3 flex items-center gap-2 text-green-300">

                    <ArrowUpRight size={16} />

                    Infrastructure Healthy

                  </div>

                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">

                  <Boxes
                    size={34}
                    className="text-white"
                  />

                </div>

              </div>

            </motion.div>

            {/* Small Cards */}

            <div className="grid grid-cols-2 gap-5">

              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur"
              >

                <Container
                  size={30}
                  className="text-white"
                />

                <h3 className="mt-4 text-3xl font-bold text-white">

                  02

                </h3>

                <p className="mt-1 text-sm text-blue-100">

                  Running Containers

                </p>

              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur"
              >

                <Cpu
                  size={30}
                  className="text-white"
                />

                <h3 className="mt-4 text-3xl font-bold text-white">

                  21%

                </h3>

                <p className="mt-1 text-sm text-blue-100">

                  CPU Usage

                </p>

              </motion.div>

            </div>

          </div>

        </div>

      </div>

    </motion.section>
  );
}

export default WelcomeBanner;