import type { LucideProps } from "lucide-react";

interface DashboardCardProps {
  href: string;
  title: string;
  description: string;
  bgColor: string;
  icon: React.ComponentType<LucideProps>;
  iconColor: string;
}

export default function DashboardCard({
  href,
  title,
  description,
  bgColor,
  icon: Icon,
  iconColor,
}: DashboardCardProps) {
  return (
    <a
      href={href}
      className="card hover:shadow-xl transition-all group cursor-pointer"
    >
      <div className="flex items-center space-x-4 p-1">
        <div
          className={`p-3 ${bgColor}-50 rounded-xl group-hover:${bgColor}-100 transition-colors`}
        >
          <Icon className={`h-5 w-6 ${iconColor}`} />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </a>
  );
}
