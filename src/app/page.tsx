import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* LEFT */}
      <div className="w-1/2 flex flex-col justify-center px-20 bg-white">
        <h1 className="text-3xl font-bold text-[var(--clr-primary)] mb-10">
          FertiFlow
        </h1>

        <LoginForm />

        <p className="mt-6 text-sm">
          Forgot password?{" "}
          <span className="text-[var(--clr-primary)] cursor-pointer">
            Reset it here
          </span>
        </p>
      </div>

      {/* RIGHT */}
      <div className="w-1/2 bg-[var(--clr-bg-body)] flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl shadow-md text-center w-[300px]">
          <img src="/images/phone.png" alt="phone" className="mx-auto mb-4" />
          <h2 className="font-bold">Download App</h2>
        </div>
      </div>
    </div>
  );
}
