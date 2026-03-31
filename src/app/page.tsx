import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-emerald-50 p-2 flex items-center justify-center">
      {/* MAIN CARD */}
      <div className="w-full max-w-7xl bg-white rounded-1xl shadow-2xl overflow-hidden flex">
        {/* LEFT SIDE */}
        <div className="w-1/2 px-14 py-14 flex flex-col justify-center">
          {/* LOGO */}
          <div className="flex flex-col items-center mb-10">
            <img src="/logo.svg" className="w-12 h-12 mb-2" />
            <h1 className="text-4xl font-bold text-emerald-600">FertiFlow</h1>
          </div>

          {/* FORM */}
          <div className="mx-auto">
            <LoginForm />
          </div>

          {/* FOOTER */}
          <p className="mt-10 text-xs text-center text-gray-500">
            Terms & Conditions - Privacy Policy
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 bg-emerald-50 flex items-center justify-center relative">
          {/* BACKGROUND SHAPES */}
          <div className="absolute w-[500px] h-[500px] bg-emerald-200 rounded-full opacity-40"></div>
          <div className="absolute w-[350px] h-[350px] bg-emerald-300 rounded-full opacity-40"></div>

          {/* CARD */}
          <div className="z-10 bg-white rounded-2xl shadow-xl p-8 w-[380px] text-center">
            <img src="/phone.svg" className="w-[180px] mx-auto mb-4" />

            <h2 className="font-bold text-lg mb-2">
              Download FertiFlow Mobile App
            </h2>

            <p className="text-sm text-gray-600 mb-6">
              Verifying farmers payments and product distribution at the center.
            </p>

            <div className="flex justify-center gap-3">
              <img src="/ios download 2.svg" className="h-10" />
              <img
                src="/get-it-on-google-play-google-play-badge-png-logos-23 1.svg"
                className="h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
