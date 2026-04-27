import { motion } from "framer-motion";

function FormSubmitButton({
  loading = false,
  textA = "Processing...",
  textB = "Submit",
}) {
  return (
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
          {textA}
        </div>
      ) : (
        textB
      )}
    </motion.button>
  );
}

export default FormSubmitButton;
