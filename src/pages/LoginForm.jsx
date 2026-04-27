import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";
import Logo from "../components/header/Logo";
import FormFields from "../components/auth/FormFields";
import { getAuthErrorMessage } from "../helper/authError";
import FormLogoHeading from "../components/auth/FormLogoHeading";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validation
    if (!email.trim()) {
      setError("Please enter your email address");
      setLoading(false);
      return;
    }

    if (!password) {
      setError("Please enter your password");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await signIn(email, password);

      // if (error) {
      //   if (error.message === "Invalid login credentials") {
      //     setError("Invalid email or password. Please try again.");
      //   }
      //   setLoading(false);
      //   return;
      // }

      if (error) {
        setError(getAuthErrorMessage(error));
        setLoading(false);
        return;
      }

      if (data?.user) {
        toast.success("Welcome back!", {
          duration: 2000,
        });
        navigate("/dashboard");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full overflow-hidden">
      {/* Image Section */}
      <motion.div
        className="hidden lg:block w-1/2 h-screen"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/images/auth/auth.png"
          alt="Login"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Form Section */}
      <motion.div
        className="w-full lg:w-1/2 min-h-screen overflow-y-auto"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <form
          className="min-h-screen bg-bg flex flex-col justify-center max-w-[500px] mx-auto p-10"
          onSubmit={handleSubmit}
        >
          {/* Form logo and heading */}
          <FormLogoHeading
            title="Welcome Back"
            subtitle="Sign in to continue your job search journey"
            link="/signup"
            linkText="Sign up instead?"
          />

          {/* Form Fields */}
          <FormFields
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            isLogin={true}
          />

          {/* Forgot Password Link */}
          <motion.div
            className="text-right mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <Link
              to="/forgot-password"
              className="text-sm text-primary hover:text-primary-dark transition-colors"
            >
              Forgot password?
            </Link>
          </motion.div>

          {/* Error Message */}
          {error && (
            <motion.div
              className="mt-3 text-[1.2rem] text-red-600 "
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-5 rounded-xl font-semibold hover:bg-primary-hover transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Signing in...
              </div>
            ) : (
              "Sign In"
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default LoginForm;
