import AuthCard from "@/components/auth/AuthCard";
import AuthPreview from "@/components/auth/AuthPreview";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="flex min-h-screen">
      <AuthPreview />

      <AuthCard
        title="Welcome Back"
        subtitle="Sign in to continue to CloudVault."
        footerText="Don't have an account?"
        footerLinkText="Create one"
        footerLink="/register"
      >
        <LoginForm />
      </AuthCard>
    </div>
  );
};

export default Login;
