export default function LoginForm() {
  return (
    <div className="w-full max-w-md">
      <div className="mb-4">
        <label className="text-sm text-gray-600">Username</label>
        <input
          type="text"
          placeholder="Enter username"
          className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-600">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
      </div>

      <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition">
        Sign in
      </button>

      <div className="mt-4 text-sm">
        <span className="text-gray-600">Forgot password?</span>{" "}
        <a href="#" className="text-emerald-600 font-medium">
          Reset it here
        </a>
      </div>
    </div>
  );
}
