import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../header/Logo";

function FormLogoHeading({
  title = "Welcome",
  subtitle = "Please fill in the details below",
  link = "/login",
  linkText = "Go back",
}) {
  return (
    <>
      <motion.div
        className="flex justify-between items-center w-full"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link to="/">
          <Logo logoHeight="h-22" textSize="text-[2rem]" marginLeft="-ml-5" />
        </Link>
        <Link
          to={link}
          className="font-bold underline! underline-offset-2 text-primary hover:text-primary-dark transition-colors"
        >
          {linkText}
        </Link>
      </motion.div>
      <motion.div
        className="mt-7 mb-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h1 className="text-[2rem] font-semibold text-text">{title}</h1>
        <p className="text-text-secondary mt-2">{subtitle}</p>
      </motion.div>
    </>
  );
}

export default FormLogoHeading;
