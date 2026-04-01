import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-100">
      {/* 🟢 SINGLE GLOBAL DIAGONAL BACKGROUND (KEY FIX) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[-650px] top-[-450px] w-[1600px] h-[1600px] bg-emerald-200 rotate-45 opacity-60"></div>

        <div className="absolute right-[-750px] top-[-300px] w-[1600px] h-[1600px] bg-emerald-300 rotate-45 opacity-30"></div>
      </div>

      {/* MAIN CARD (TRANSPARENT SO BACKGROUND PASSES THROUGH) */}
      <div className="relative w-full max-w-6xl flex overflow-hidden rounded-2xl shadow-2xl bg-white/60 backdrop-blur-xl z-10">
        {/* LEFT SIDE */}
        <div className="w-1/2 p-14 flex flex-col justify-center">
          <div className="flex flex-col items-center mb-10">
            <img src="/logo.svg" className="w-14 h-14 mb-2" />
            <h1 className="text-3xl font-bold text-emerald-600">FertiFlow</h1>
          </div>

          <div className="w-full max-w-md mx-auto">
            <LoginForm />
          </div>

          <p className="text-center text-xs text-gray-500 mt-10">
            Terms & Conditions - Privacy Policy
          </p>
        </div>

        {/* RIGHT SIDE (NO EXTRA BACKGROUND LAYERS) */}
        <div className="w-1/2 flex items-center justify-center relative py-10 overflow-hidden">
          {/* subtle tint only (NOT DIAGONAL) */}
          <div className="absolute inset-0 bg-emerald-50/20"></div>

          {/* 🔵 RINGS */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[420px] h-[420px] border border-emerald-200 rounded-full opacity-40"></div>

            <div className="absolute w-[300px] h-[300px] border border-emerald-300 rounded-full opacity-40 border-dashed"></div>

            <div className="absolute w-[200px] h-[200px] border border-emerald-400 rounded-full opacity-30"></div>
          </div>

          {/* PHONE CARD (SMALL HEIGHT AS YOU WANTED) */}
          <div className="relative z-10 bg-white w-[360px] rounded-2xl shadow-xl p-5 text-center">
            <img src="/phone.svg" className="w-[190px] mx-auto mb-3" />

            <h2 className="font-bold text-lg mb-2">
              Download FertiFlow Mobile App
            </h2>

            <p className="text-sm text-gray-600 mb-3">
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
  );
}
