import { motion } from "framer-motion";
import { PiEye, PiEyeSlash } from "react-icons/pi";

function FormFields({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  isLogin = false,
}) {
  return (
    <motion.div
      className="mt-8 space-y-5"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      {/* Name Field - Only show for signup */}
      {!isLogin && (
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <label className="block text-[1.2rem] font-medium text-text-secondary mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-[5px] h-17 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300"
            placeholder="Enter your name"
          />
        </motion.div>
      )}

      {/* Email Field */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: isLogin ? 0.6 : 0.7 }}
      >
        <label className="block text-[1.2rem] font-medium text-text-secondary mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-[5px] h-17 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300"
          placeholder="Enter your email address"
        />
      </motion.div>

      {/* Password Field */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: isLogin ? 0.7 : 0.8 }}
      >
        <label className="block text-[1.2rem] font-medium text-text-secondary mb-1.5">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 pr-12 rounded-[5px] h-17 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300"
            placeholder={isLogin ? "Enter your password" : "Create a password"}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text transition-colors"
          >
            {showPassword ? <PiEye size={20} /> : <PiEyeSlash size={20} />}
          </button>
        </div>
        {!isLogin && (
          <p className="text-[1.1rem] font-medium text-text-secondary mt-1.5">
            Must be at least 6 characters
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default FormFields;
