import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  subtitle: string;
  footerText: string;
  footerLinkText: string;
  footerLink: string;
  children: React.ReactNode;
}

const AuthCard = ({
  title,
  subtitle,
  footerText,
  footerLinkText,
  footerLink,
  children,
}: Props) => {
  return (
    <div className="flex flex-1 items-center justify-center bg-slate-50 p-8">
      <Card className="w-full max-w-md rounded-3xl shadow-xl">
        <CardContent className="p-10">
          <h2 className="text-4xl font-bold tracking-tight">{title}</h2>

          <p className="mt-3 text-slate-500">{subtitle}</p>

          <div className="mt-8">{children}</div>

          <p className="mt-8 text-center text-sm text-slate-500">
            {footerText}

            <Link
              to={footerLink}
              className="ml-1 font-semibold text-indigo-600 hover:text-indigo-700"
            >
              {footerLinkText}
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthCard;
