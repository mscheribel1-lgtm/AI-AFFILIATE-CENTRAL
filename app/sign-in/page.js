import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <SignIn afterSignInUrl="/admin" signUpUrl="/sign-up" />
    </div>
  );
}
