import { LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import Logo from "@/components/common/Logo";
import { useFiles } from "@/hooks/useFiles";
import { useAuthStore } from "@/store/authStore";

import { menuItems } from "@/constants/navigation";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = useAuthStore((state) => state.logout);

  const { data } = useFiles();

  const files = data?.files ?? [];

  const totalStorage = files.reduce((sum, file) => sum + file.fileSize, 0);

  const totalLimit = 10 * 1024 * 1024 * 1024;

  const usedPercentage = Math.min((totalStorage / totalLimit) * 100, 100);

  const formatStorage = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;

    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;

    if (bytes < 1024 * 1024 * 1024)
      return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

    return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  };

  const handleLogout = () => {
    logout();

    toast.success("Logged out successfully");

    navigate("/login");
  };

  return (
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-r border-border bg-sidebar lg:flex lg:flex-col">
      {/* Brand */}

      <div className="px-6 pt-8 pb-6">
        <Logo />
      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-1 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                [
                  "group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200",

                  isActive
                    ? "bg-primary/10 text-primary shadow-sm"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground",
                ].join(" ")
              }
            >
              <Icon className="h-5 w-5 transition-colors" />

              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom */}

      <div className="border-t border-border p-5">
        {/* Storage */}

        <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Storage</h3>

            <span className="text-xs text-muted-foreground">
              {usedPercentage.toFixed(0)}%
            </span>
          </div>

          <p className="mt-1 text-xs text-muted-foreground">
            {formatStorage(totalStorage)} used of 10 GB
          </p>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{
                width: `${usedPercentage}%`,
              }}
            />
          </div>
        </div>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="group mt-5 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-red-600 transition-all duration-200 hover:bg-red-50"
        >
          <LogOut className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
