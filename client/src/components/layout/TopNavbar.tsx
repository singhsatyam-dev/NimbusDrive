import { Upload } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import UploadDialog from "@/components/upload/UploadDialog";
import { useAuthStore } from "@/store/authStore";

import MobileSidebar from "./MobileSidebar";

const TopNavbar = () => {
  const user = useAuthStore((state) => state.user);

  const initials =
    user?.name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase() || "U";

  const hour = new Date().getHours();

  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  const firstName = user?.name?.split(" ")[0] || "User";

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-4 md:px-8">
        {/* Left */}

        <div>
          <div className="flex items-center gap-3 md:hidden">
            <MobileSidebar />
            {/* Mobile Greeting */}
            <h1 className="text-xl font-bold text-slate-900 md:hidden">
              Hi, {firstName} 👋
            </h1>
          </div>

          {/* Desktop Greeting */}
          <div className="hidden md:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
              NimbusDrive Workspace
            </p>

            <h1 className="mt-1 text-4xl font-bold text-slate-900">
              {greeting}, {user?.name} 👋
            </h1>
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-4">
          <UploadDialog>
            <Button className="rounded-2xl px-4 py-6 shadow-lg shadow-primary/20 md:px-6">
              <Upload className="h-5 w-5 md:mr-2" />

              <span className="hidden md:inline">Upload Files</span>
            </Button>
          </UploadDialog>

          <div className="relative">
            <Avatar className="h-11 w-11 border border-border shadow-sm">
              <AvatarFallback className="bg-muted font-medium">
                {initials}
              </AvatarFallback>
            </Avatar>

            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-emerald-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
