import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { login } from "../../utils/services/auth";
import { useAuth } from "../../hooks/useAuth";
import { storeAuthData } from "../../utils/services/auth";

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const data = await login(formData);
      storeAuthData(data);
      setUser(data.user);

      if (rememberMe) {
        // Implement remember me logic if needed
      }

      navigate("/dashboard"); // Redirect setelah login sukses
    } catch (err) {
      setError("Invalid username or password");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-8">
      <div className="card bg-base-100 w-full max-w-md">
        <div className="card-body p-6 sm:p-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary">Welcome to ScholarAI</h2>
            <p className="text-base-content/70 mt-2">Log in to continue your scholarship journey</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="alert alert-error mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Username Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Username</span>
              </label>
              <div className="relative border-1 rounded-lg">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-base-content/70">
                  <Mail size={18} />
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="your.username"
                  className="input input-bordered w-full pl-10"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative border-1 rounded-lg">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-base-content/70">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full pl-10"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center mt-4">
              <div className="form-control">
                <label className="cursor-pointer label justify-start gap-2 p-0">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="checkbox checkbox-primary checkbox-sm"
                  />
                  <span className="label-text">Remember me</span>
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <div className="form-control mt-8">
              <button
                type="submit"
                className={`btn btn-primary border-2 w-full rounded-lg ${
                  isLoading ? "loading" : ""
                }`}
                disabled={isLoading}
              >
                {!isLoading && (
                  <>
                    Login
                    <ArrowRight size={16} className="ml-1" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider my-6 text-base-content/50">OR</div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="btn border-1 hover:bg-base-200 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </button>
            <button className="btn border-1 hover:bg-base-200 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  fill="#1877F2"
                />
              </svg>
              Facebook
            </button>
          </div>

          {/* Registration Link */}
          <div className="text-center mt-8">
            <p className="text-base-content/80">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary hover:underline font-medium">
                Register
              </Link>
            </p>
          </div>

          {/* Footer Badge */}
          <div className="text-center mt-6">
            <div className="badge badge-accent p-3 font-medium">
              <Link to={"/"}>ScholarAI</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
