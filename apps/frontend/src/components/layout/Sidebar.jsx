import {
  LayoutDashboard,
  FolderKanban,
  Container,
  TerminalSquare,
  Folder,
  Bot,
  Activity,
  Settings,
  HardDrive
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
  {
    title: "WORKSPACE",
    items: [
      { name: "Dashboard", icon: LayoutDashboard, path: "/" },
      { name: "Workspaces", icon: FolderKanban, path: "/workspaces" },
      { name: "Docker", icon: Container, path: "/docker" },
      { name: "Terminal", icon: TerminalSquare, path: "/terminal" },
      { name: "Files", icon: Folder, path: "/files" },
    ],
  },
  {
    title: "AI",
    items: [
      { name: "AI Assistant", icon: Bot, path: "/ai" },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      { name: "Monitoring", icon: Activity, path: "/monitoring" },
      { name: "Settings", icon: Settings, path: "/settings" },
    ],
  },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col">

      {/* Logo */}

      <div className="px-6 py-6 border-b border-slate-800">

        <h1 className="text-3xl font-black text-blue-500">
          ☁ CloudLab AI
        </h1>

        <p className="text-slate-400 mt-2">
          Browser Cloud IDE
        </p>

      </div>

      {/* Menu */}

      <div className="flex-1 overflow-y-auto p-5">

        {menu.map((section) => (

          <div key={section.title} className="mb-8">

            <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">
              {section.title}
            </p>

            <div className="space-y-2">

              {section.items.map((item) => {

                const Icon = item.icon;

                return (

                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
                        isActive
                          ? "bg-blue-600 text-white shadow-lg"
                          : "text-slate-300 hover:bg-slate-900 hover:text-white"
                      }`
                    }
                  >
                    <Icon size={20} />

                    <span>{item.name}</span>

                  </NavLink>

                );
              })}
            </div>

          </div>

        ))}

      </div>

      {/* Bottom Card */}

      <div className="border-t border-slate-800 p-5">

        <div className="rounded-2xl bg-slate-900 p-4">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="font-semibold">
                Santhosh
              </h3>

              <p className="text-sm text-slate-400">
                Cloud Engineer
              </p>

            </div>

            <HardDrive className="text-blue-500" />

          </div>

          <div className="mt-5">

            <div className="flex justify-between text-sm mb-2">

              <span>Storage</span>

              <span>82%</span>

            </div>

            <div className="h-2 rounded-full bg-slate-700">

              <div className="h-2 w-4/5 rounded-full bg-blue-500"></div>

            </div>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;