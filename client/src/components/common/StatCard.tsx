import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
}

const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
}: StatCardProps) => {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-border
      bg-card
      p-7
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-primary/20
      hover:shadow-xl
      hover:shadow-blue-100/50
      "
    >
      {/* Soft Background Glow */}

      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/5 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
            {value}
          </h2>

          <p className="mt-4 text-sm text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div
          className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          border
          border-primary/10
          bg-primary/10
          backdrop-blur-sm
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:rotate-6
        "
        >
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;