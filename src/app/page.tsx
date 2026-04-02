import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-gray-100">
      {/* 🟢 GLOBAL BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute right-[-650px] top-[-450px] w-[1600px] h-[1600px] bg-emerald-200 rotate-45 opacity-60"></div>
        <div className="absolute right-[-750px] top-[-300px] w-[1600px] h-[1600px] bg-emerald-300 rotate-45 opacity-30"></div>
      </div>

      {/* MAIN CARD (BIG remains) */}
      <div className="relative z-10 w-full max-w-7xl flex overflow-hidden rounded-2xl shadow-2xl bg-white/60 backdrop-blur-xl min-h-[820px]">
        {/* LEFT SIDE */}
        <div className="w-1/2 p-16 flex flex-col justify-center relative z-20">
          <div className="flex flex-col items-center mb-10">
            <img src="/logo.svg" className="w-16 h-16 mb-2" />
            <h1 className="text-3xl font-bold text-emerald-600">FertiFlow</h1>
          </div>

          <div className="w-full max-w-md mx-auto">
            <LoginForm />
          </div>

          <p className="text-center text-xs text-gray-500 mt-12">
            Terms & Conditions - Privacy Policy
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 flex items-center justify-center relative overflow-hidden">
          {/* BACKGROUND TINT */}
          <div className="absolute inset-0 bg-emerald-50/20 z-0"></div>

          {/* PHONE WRAPPER (CENTERED, NOT FULL HEIGHT) */}
          <div className="relative z-20 flex items-center justify-center">
            {/* 🔵 CIRCLE ONLY AROUND PHONE */}
            <div className="absolute flex items-center justify-center">
              <img
                src="/circle accent.svg"
                className="w-[520px] opacity-40 animate-spin-slow"
              />
            </div>

            {/* 📱 SMALL COMPACT PHONE CARD */}
            <div className="relative z-30 bg-white w-[420px] rounded-2xl shadow-xl p-6 text-center">
              <img src="/phone.svg" className="w-[180px] mx-auto mb-3" />

              <h2 className="font-bold text-lg mb-2">
                Download FertiFlow Mobile App
              </h2>

              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                Verifying payments and delivering products at the Distribution
                Center
              </p>

              <div className="flex justify-center gap-3">
                <img src="/ios download 2.svg" className="h-9" />
                <img
                  src="/get-it-on-google-play-google-play-badge-png-logos-23 1.svg"
                  className="h-9"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
