"use client";

import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 p-6 overflow-hidden relative">
    
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute right-[-640px] top-[-450px] w-[1600px] h-[1600px] bg-emerald-200 rotate-45 opacity-60"></div>
        <div className="absolute right-[-740px] top-[-298px] w-[1600px] h-[1600px] bg-emerald-300 rotate-45 opacity-30"></div>
      </div>

      
      <div className="relative z-8 w-full max-w-6xl h-[90vh] flex rounded-3xl overflow-hidden shadow-2xl bg-white/60 backdrop-blur-xl">
      
        <div className="w-1/2 flex flex-col justify-center px-12">
          <div className="flex flex-col items-center mb-8">
            <img src="/logo.svg" className="w-14 h-14 mb-2" />
            <h1 className="text-3xl font-bold text-emerald-590">FertiFlow</h1>
          </div>

          <div className="w-full max-w-md mx-auto">
            <LoginForm />
          </div>

          <p className="text-center text-sm mt-10 text-gray-600">
            Terms & Conditions - Privacy Policy
          </p>
        </div>

        
        <div className="w-1/2 flex items-center justify-center relative">
          <div className="relative bg-white w-[380px] rounded-3xl shadow-xl p-2 text-center">
            
            <div className="relative flex items-center justify-center mb-3">
              <img
                src="/circle accent.svg"
                className="absolute w-[340px] h-[380px] opacity-40 animate-spin-slow pointer-events-none"
              />

              <img src="/phone.svg" className="w-[142px] relative z-10" />
            </div>

            <h2 className="font-bold text-base mb-2">
              Download FertiFlow Mobile App
            </h2>

            <div className="text-sm text-gray-700 mb-4 leading-snug">
              <p>Verifying that a farmer has paid and providing them with</p>
              <p>products they have paid for at</p>
              <p>the Distribution Center</p>
            </div>

            <div className="flex justify-center gap-3">
              <img src="/ios download 2.svg" className="h-8" />
              <img
                src="/get-it-on-google-play-google-play-badge-png-logos-23 1.svg"
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-3 left-3 z-50 pointer-events-none">
        <div className="relative w-[139px] h-[139px]">
          <img
            src="/Vector.svg"
            className="absolute bottom-0 left-0 w-[110px] h-[110px]"
          />
          <img
            src="/Group.svg"
            className="absolute bottom-[-10px] left-[40px] w-[110px] h-[110px]"
          />
        </div>
      </div>
    </div>
  );
}
