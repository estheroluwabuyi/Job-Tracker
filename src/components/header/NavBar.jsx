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
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: show ? 0 : -100,
        opacity: show ? 1 : 0,
      }}
      transition={{
        y: {
          type: "spring",
          stiffness: 400,
          damping: 35,
          mass: 0.8,
          delay: 0.3,
        },
        opacity: { duration: 0.3, delay: 0.2 },
      }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-6 py-2">
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
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary origin-left"
                  />
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-8">
          <Link
            to="/login"
            className="text-[1.4rem] font-medium text-primary hover:text-text/80 transition-colors font-monda duration-500 tracking-wide"
          >
            Log In
          </Link>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              to="/signup"
              className="bg-primary text-bg px-8 py-4 rounded-xl text-[1.4rem] font-semibold shadow-md"
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
