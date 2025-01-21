import { useContext, useState } from "react";
import login_img from "../../public/images/login/login.svg";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { useNavigate } from "react-router";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginButton = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signIn(email, password);
      console.log("Logged in as:", result.user.email);
      navigate("/"); // Navigate to the homepage or dashboard
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
      <div className="hero-content flex flex-col lg:flex-row gap-10">
        {/* Left Side - Image */}
        <div className="hidden lg:block text-center lg:text-left">
          <img
            src={login_img}
            alt="Login Illustration"
            className="max-w-sm mx-auto"
          />
        </div>

        {/* Right Side - Form */}
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <h2 className="text-center mt-8 text-2xl font-bold text-gray-400">
            Welcome Back
          </h2>
          <p className="text-center text-sm text-gray-500">
            Please login to access your account
          </p>
          <form onSubmit={handleLoginButton} className="card-body space-y-4">
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-500">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered focus:ring focus:ring-primary focus:outline-none"
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-500">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered focus:ring focus:ring-primary focus:outline-none"
                required
              />
              <label className="label text-sm">
                <a href="#" className="text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="text-sm text-red-600">{errorMessage}</div>
            )}

            {/* Submit Button */}
            <div className="form-control mt-4">
              <button
                type="submit"
                className="btn btn-primary w-full text-white bg-gradient-to-r from-[#FF3811] to-[#FF6633] hover:from-[#FF6633] hover:to-[#FF3811]"
              >
                Login
              </button>
            </div>
          </form>

          {/* Bottom Text */}
          <p className="text-center text-sm text-gray-600 mb-6">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
