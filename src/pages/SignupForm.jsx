import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";
import Logo from "../components/header/Logo";
import FormFields from "../components/auth/FormFields";
import { getAuthErrorMessage } from "../helper/authError";
import FormLogoHeading from "../components/auth/FormLogoHeading";
import FormSubmitButton from "../components/auth/FormSubmitButton";
import FormErrorMessage from "../components/auth/FormErrorMessage";

function SignupForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!name.trim()) {
      setError("Please enter your full name");
      setLoading(false);
      return;
    }

    if (!email.trim()) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Your passwords don't match");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Your password needs at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await signUp(email, password, name);

      if (error) {
        setError(getAuthErrorMessage(error));
        setLoading(false);
        return;
      }

      if (data?.user) {
        toast.success("Account created! You can now sign in.", {
          duration: 3000,
        });
        navigate("/login");
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
          alt="Signup"
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
            title="Get Started Today"
            subtitle="Track applications, stay organized, and land your next role with ease."
            link="/login"
            linkText="Sign in instead?"
          />

          {/* Form Fields */}
          <FormFields
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            isLogin={false}
          />

          {/* Confirm Password Field */}
          <motion.div
            className="mt-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.85 }}
          >
            <label className="block text-[1.2rem] font-medium text-text-secondary mb-1.5">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-4 pr-12 rounded-[5px] h-17 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300"
                placeholder="Confirm your password"
              />
            </div>
          </motion.div>

          {/* Error Message */}
          <FormErrorMessage error={error} />

          {/* Submit Button */}
          <FormSubmitButton
            loading={loading}
            textA="Creating account..."
            textB="Create Account"
          />
        </form>
      </motion.div>
    </div>
  );
}

export default SignupForm;
