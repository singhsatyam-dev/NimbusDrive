import { LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import Logo from "@/components/common/Logo";
import { useAuthStore } from "@/store/authStore";
import { useFiles } from "@/hooks/useFiles";

import { menuItems } from "@/constants/navigation";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = useAuthStore((state) => state.logout);

  const { data } = useFiles();

  const files = data?.files ?? [];

  const totalStorage = files.reduce((sum, file) => sum + file.fileSize, 0);

  const totalLimit = 10 * 1024 * 1024 * 1024; // 10 GB

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
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col border-r border-slate-200 bg-white lg:flex">
      {/* Logo */}
      <div className="border-b border-slate-200 p-6">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* Storage */}
      <div className="border-t border-slate-200 p-4">
        <div className="rounded-2xl bg-slate-100 p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-900">Storage</h3>

            <span className="text-xs text-slate-500">
              {usedPercentage.toFixed(1)}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-300">
            <div
              className="h-full rounded-full bg-indigo-600"
              style={{
                width: `${usedPercentage}%`,
              }}
            />
          </div>

          <p className="mt-3 text-xs text-slate-500">
            {formatStorage(totalStorage)} of 10 GB used
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="mt-4 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
