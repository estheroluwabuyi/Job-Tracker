import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function NoPageFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg text-text flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
            className="w-80 h-40 mx-auto rounded-2xl bg-primary-light flex items-center justify-center font-monda"
          >
            <span className="text-primary text-[10rem] font-bold">404</span>
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold mb-5"
        >
          This page isn’t available yet.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-text-secondary mb-8 tracking-wide"
        >
          Looks like you followed a link to something we’re still building.
          Don’t worry, it’s coming soon.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex gap-5 justify-center"
        >
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl bg-primary text-bg hover:bg-primary-hover transition-colors duration-500"
          >
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-xl border border-primary-hover text-text/80 hover:bg-primary-light transition-colors duration-500"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
}
