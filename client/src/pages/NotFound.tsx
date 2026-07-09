import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <div className="rounded-full bg-indigo-100 p-6">
        <FileQuestion className="h-14 w-14 text-indigo-600" />
      </div>

      <h1 className="mt-8 text-6xl font-extrabold text-slate-900">404</h1>

      <h2 className="mt-4 text-3xl font-bold text-slate-800">Page Not Found</h2>

      <p className="mt-4 max-w-md text-slate-500">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link to="/" className="mt-8">
        <Button size="lg">Back to Dashboard</Button>
      </Link>
    </div>
  );
};

export default NotFound;
