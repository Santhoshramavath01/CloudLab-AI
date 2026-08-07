import {
  Search,
  Bell,
  Moon,
  ChevronDown,
  Wifi,
} from "lucide-react";

import Avatar from "../common/Avatar";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="flex h-full items-center justify-between px-8">

        {/* Search */}

        <div className="relative w-full max-w-xl">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search workspaces..."
            className="h-11 w-full rounded-xl border border-slate-700 bg-slate-900 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />

        </div>

        {/* Right Side */}

        <div className="ml-8 flex items-center gap-4">

          {/* Cloud Status */}

          <div className="hidden items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 lg:flex">

            <Wifi
              size={15}
              className="text-emerald-400"
            />

            <span className="text-sm font-medium text-emerald-400">
              Cloud Connected
            </span>

          </div>

          {/* Theme */}

          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 transition-all duration-300 hover:border-blue-500 hover:bg-slate-800"
          >
            <Moon size={18} />
          </button>

          {/* Notifications */}

          <button
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 transition-all duration-300 hover:border-blue-500 hover:bg-slate-800"
          >

            <Bell size={18} />

            <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-slate-900"></span>

          </button>

          {/* User */}

          <button
            className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 transition-all duration-300 hover:border-blue-500 hover:bg-slate-800"
          >

            <Avatar name="Santhosh" />

            <div className="hidden text-left lg:block">

              <h3 className="text-sm font-semibold">
                Santhosh
              </h3>

              <p className="text-xs text-slate-400">
                Cloud Engineer
              </p>

            </div>

            <ChevronDown
              size={16}
              className="text-slate-500"
            />

          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;