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

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-8">
        {/* Left */}

        <div className="flex items-center gap-4">
          <MobileSidebar />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              NimbusDrive Workspace
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
              {greeting}, {user?.name ?? "User"} 👋
            </h1>
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-4">
          <UploadDialog>
            <Button className="h-11 rounded-xl px-5 shadow-sm">
              <Upload className="mr-2 h-4 w-4" />
              Upload Files
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
