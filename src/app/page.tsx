"use client";

import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-gray-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute right-[-650px] top-[-450px] w-[1600px] h-[1600px] bg-emerald-200 rotate-45 opacity-60"></div>
        <div className="absolute right-[-750px] top-[-300px] w-[1600px] h-[1600px] bg-emerald-300 rotate-45 opacity-30"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl flex overflow-hidden rounded-2xl shadow-2xl bg-white/60 backdrop-blur-xl min-h-[820px]">
        <div className="w-1/2 p-18 flex flex-col justify-center">
          <div className="flex flex-col items-center mb-10">
            <img src="/logo.svg" className="w-16 h-16 mb-2" />
            <h1 className="text-4xl font-bold text-emerald-600">FertiFlow</h1>
          </div>

          <div className="w-full max-w-md">
            <LoginForm />
          </div>

          <p className="text-left text-1xl mt-12">
            Terms & Conditions - Privacy Policy
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 flex items-center justify-center relative z-20">
          {/* CARD */}
          <div className="relative z-10 bg-white w-[470px] rounded-3xl shadow-xl p-6 text-center">
            {/* 🔥 PHONE + CIRCLE (SAME GROUP) */}
            <div className="relative flex items-center justify-center mb-4">
              <img
                src="/circle accent.svg"
                className="absolute w-[900px] h-[200px]opacity-40 animate-spin-slow pointer-events-none"
              />

              <img src="/phone.svg" className="w-[180px] relative z-10" />
            </div>

            <h2 className="font-bold text-lg mb-2">
              Download FertiFlow Mobile App
            </h2>

            <div className="text-1xl text-gray-700 mb-5 leading-relaxed">
              <p>Verifying that a farmer has paid and providing them with</p>
              <p>products they have paid for at</p>
              <p>the Distribution Center</p>
            </div>

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

      {/* 🔥 TRUE BOTTOM LEFT SPLIT DECOR */}
      <div className="absolute bottom-3 left-25 z-50 pointer-events-none">
        {/* ONE COMBINED SHAPE (Vector + Group) */}
        <div className="relative w-[160px] h-[160px]">
          {/* VECTOR */}
          <img
            src="/Vector.svg"
            className="absolute bottom-0 left-0 w-[120px] h-[120px] object-contain z-20"
          />

          {/* GROUP (half attached bottom-right of Vector) */}
          <img
            src="/Group.svg"
            className="absolute bottom-[-10px] left-[50px] w-[120px] h-[120px] object-contain z-10"
          />
        </div>
      </div>

      {/* 🔥 THIS IS WHAT CREATES 50/50 PAGE/CARD SPLIT */}
      <div className="absolute top-0 left-1/2 w-1/2 h-full z-40 pointer-events-none" />
    </div>
  );
}
