import { motion } from "framer-motion";

function FormErrorMessage({ error }) {
  if (!error) return null;

  return (
    <div>
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
    </div>
  );
}

export default FormErrorMessage;
