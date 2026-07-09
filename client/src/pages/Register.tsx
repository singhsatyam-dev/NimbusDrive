import AuthCard from "@/components/auth/AuthCard";
import AuthPreview from "@/components/auth/AuthPreview";
import RegisterForm from "@/components/auth/RegisterForm";

const Register = () => {
  return (
    <div className="flex min-h-screen">
      <AuthPreview />

      <AuthCard
        title="Create Account"
        subtitle="Create your CloudVault account."
        footerText="Already have an account?"
        footerLinkText="Sign In"
        footerLink="/login"
      >
        <RegisterForm />
      </AuthCard>
    </div>
  );
};

export default Register;
