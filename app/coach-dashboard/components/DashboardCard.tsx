import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function DashboardCard({
  title,
  children,
  className = "",
}: DashboardCardProps) {
  return (
    <div
      className={`flex flex-col p-6 bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light/50 dark:border-border-dark/50 ${className}`}
    >
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}
