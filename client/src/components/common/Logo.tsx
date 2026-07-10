import { Cloud } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary shadow-sm">
        <Cloud className="h-5 w-5 text-primary-foreground" />
      </div>

      <div>
        <h1 className="text-lg font-semibold tracking-tight text-foreground">
          NimbusDrive
        </h1>

        <p className="text-xs text-muted-foreground">Store. Organize. Share.</p>
      </div>
    </div>
  );
};

export default Logo;
