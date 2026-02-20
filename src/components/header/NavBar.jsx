import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Logo";

const links = [
  { label: "Features", to: "/features" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Pricing", to: "/pricing" },
];

function NavBar() {
  return (
    <motion.nav
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="border-b border-border"
    >
      <div className="flex items-center justify-between max-w-[1200px] mx-auto pl-3 pr-7 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Main Links */}
        <div className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `relative text-[1.4rem] font-medium transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-text/80 hover:text-primary"
                }`
              }
            >
              {({ isActive }) => (
                <motion.div
                  initial={false}
                  whileHover="hover"
                  animate={isActive ? "active" : "rest"}
                  className="relative"
                >
                  {link.label}

                  <motion.span
                    variants={{
                      rest: { scaleX: 0 },
                      hover: { scaleX: 1 },
                      active: { scaleX: 1 },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary origin-left"
                  />
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <Link
            to="/login"
            className="text-[1.4rem] font-medium text-text/80 hover:text-primary transition-colors"
          >
            Log In
          </Link>

          <motion.div
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              to="/signup"
              className="bg-primary text-bg text-[1.4rem] font-semibold px-6 py-2.5 rounded-xl shadow-sm"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

export default NavBar;
