import { motion } from "framer-motion";

export default function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-[650px] mx-auto"
    >
      {/* Glow Background */}
      <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-full opacity-60"></div>

      {/* Floating Animation Wrapper */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Browser Frame */}
        <div className="rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-border bg-white ">
          {/* Fake Browser Top Bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-border">
            <span className="w-3 h-3 bg-red-400 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            <span className="ml-4 text-xs text-gray-500 font-medium">
              app.joblog.com/dashboard
            </span>
          </div>

          {/* Screenshot */}
          <img
            src="/images/dashboard-preview.png"
            alt="JobLog Dashboard Preview"
            className="w-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
