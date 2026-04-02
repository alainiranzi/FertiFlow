import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-100">
      {/* 🟢 BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* GREEN SIDE */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-emerald-400"></div>

        {/* WHITE DIAGONAL */}
        <div className="absolute inset-0 bg-white clip-diagonal"></div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl flex items-center justify-between px-10">
        {/* LEFT SIDE */}
        <div className="w-1/2 flex flex-col justify-center">
          {/* LOGO */}
          <div className="flex flex-col items-center mb-12">
            <img src="/logo.svg" className="w-16 h-16 mb-3" />
            <h1 className="text-3xl font-semibold text-emerald-600">
              FertiFlow
            </h1>
          </div>

          {/* FORM */}
          <div className="w-full max-w-md mx-auto">
            <LoginForm />
          </div>

          {/* FOOTER */}
          <p className="text-center text-sm text-gray-600 mt-16">
            Terms & Conditions - Privacy Policy
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 flex items-center justify-center relative">
          {/* CARD */}
          <div className="relative bg-white w-[380px] rounded-2xl shadow-2xl p-6 text-center">
            {/* CIRCLES */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[420px] h-[420px] border border-emerald-200 rounded-full opacity-40"></div>

              <div className="absolute w-[300px] h-[300px] border border-emerald-300 rounded-full border-dashed opacity-40"></div>

              <div className="absolute w-[200px] h-[200px] border border-emerald-400 rounded-full opacity-30"></div>
            </div>

            {/* PHONE */}
            <img
              src="/phone.svg"
              className="w-[200px] mx-auto relative z-10 mb-4"
            />

            <h2 className="font-semibold text-lg mb-2 relative z-10">
              Download FertiFlow Mobile App
            </h2>

            <p className="text-sm text-gray-600 mb-4 relative z-10">
              Verifying that a farmer has paid and providing them with the
              products they have paid for at the Distribution Center
            </p>

            <div className="flex justify-center gap-3 relative z-10">
              <img src="/ios download 2.svg" className="h-10" />
              <img
                src="/get-it-on-google-play-google-play-badge-png-logos-23 1.svg"
                className="h-10"
              />
            </div>
          </div>

          {/* DOTS */}
          <div className="absolute bottom-16 left-10 grid grid-cols-4 gap-2 opacity-40">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
