import {
  Boxes,
  Container,
  Cpu,
  HardDrive,
} from "lucide-react";

import StatCard from "./StatCard";

function StatsGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Workspaces"
        value="04"
        subtitle="2 Active"
        icon={Boxes}
        color="#3B82F6"
        progress={80}
      />

      <StatCard
        title="Containers"
        value="02"
        subtitle="Running"
        icon={Container}
        color="#10B981"
        progress={55}
      />

      <StatCard
        title="CPU Usage"
        value="21%"
        subtitle="Healthy"
        icon={Cpu}
        color="#F59E0B"
        progress={21}
      />

      <StatCard
        title="Storage"
        value="82 GB"
        subtitle="Available"
        icon={HardDrive}
        color="#8B5CF6"
        progress={82}
      />

    </section>
  );
}

export default StatsGrid;