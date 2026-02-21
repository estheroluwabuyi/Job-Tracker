import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { useEffect, useState } from "react";

const links = [
  { label: "Features", to: "/features" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Why JobLog", to: "/why-job-log" },
];

function NavBar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Hide on scroll down
      if (currentScroll > lastScroll && currentScroll > 100) {
        setShow(false);
      } else {
        setShow(true);
      }

      // Add glass effect after slight scroll
      if (currentScroll > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1200px] mx-auto pl-3 pr-7 py-2">
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
                `relative font-monda text-[1.4rem] font-medium transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-text/80 hover:text-primary"
                }`
              }
            >
              {({ isActive }) => (
                <motion.div
                  initial={false}
                  whileHover="hover"
                  animate={isActive ? "active" : "rest"}
                  className="relative tracking-wide"
                >
                  {link.label}

                  <motion.span
                    variants={{
                      rest: { scaleX: 0 },
                      hover: { scaleX: 1 },
                      active: { scaleX: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary origin-left"
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
            className="text-[1.4rem] font-medium text-primary hover:text-text/80 transition-colors font-monda duration-300 tracking-wide"
          >
            Log In
          </Link>

          <motion.div
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              to="/signup"
              className="bg-primary text-bg text-[1.4rem] font-semibold px-7 py-3 rounded-xl shadow-sm font-monda tracking-wide"
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
