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

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
      {/* Left */}
      <div className="flex items-center gap-3">
        <MobileSidebar />

        <div>
          <h1 className="text-xl font-bold text-slate-900 md:text-2xl">
            Welcome, {user?.name || "User"} 👋
          </h1>

          <p className="hidden text-sm text-slate-500 md:block">
            Securely manage your files.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <UploadDialog>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
        </UploadDialog>

        <Avatar className="cursor-pointer">
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default TopNavbar;
