export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="w-1/2 flex flex-col justify-center px-16 bg-white">
        {/* Logo */}
        <h1 className="text-4xl font-bold text-emerald-600 mb-10">FertiFlow</h1>

        {/* FORM */}
        <div className="w-full max-w-md space-y-5">
          {/* Username */}
          <div>
            <label className="text-sm text-gray-600">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition">
            Sign in
          </button>

          {/* Forgot */}
          <p className="text-sm">
            Forgot password?{" "}
            <a href="#" className="text-emerald-600 font-medium">
              Reset it here
            </a>
          </p>
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-gray-500">
          Terms & Conditions - Privacy Policy
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 bg-emerald-50 flex items-center justify-center relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute w-[500px] h-[500px] bg-emerald-200 rounded-full opacity-40"></div>
        <div className="absolute w-[350px] h-[350px] bg-emerald-300 rounded-full opacity-40"></div>

        {/* Card */}
        <div className="z-10 bg-white rounded-2xl shadow-xl p-8 w-[380px] text-center">
          {/* Phone image */}
          <img
            src="/phone.svg"
            alt="mobile app"
            className="w-[180px] mx-auto mb-4"
          />

          <h2 className="font-bold text-lg mb-2">
            Download FertiFlow Mobile App
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            Verifying farmers payments and product distribution at the center.
          </p>

          {/* Stores */}
          <div className="flex justify-center gap-3">
            <img src="/appstore.png" className="h-10" />
            <img src="/playstore.png" className="h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
